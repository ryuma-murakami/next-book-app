import type { Metadata } from 'next';
import { Suspense } from 'react';
import StreamingPage from '../_StreamingPage';

type PageProps = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { id } = await params;
  const response = await fetch(`http://localhost:3000/api?id=${id}`);
  const item = await response.json();
  return {
    title: item.name,
  };
};

const Item = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <Suspense fallback={<div>loading...</div>}>
      <StreamingPage id={id} />
    </Suspense>
  );
};

export default Item;
