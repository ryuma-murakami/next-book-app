import type { Metadata } from 'next';

type PageProps = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { id } = await params;
  return {
    title: `Item${id}`,
  };
};

const Item = async ({ params }: PageProps) => {
  const { id } = await params;
  return <h1>Item{id}ページ</h1>;
};

export default Item;
