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
  const response = await fetch(`http://localhost:3000/api?id=${id}`);
  const item = await response.json();
  return {
    title: item.name,
  };
};

const Item = async ({ params }: PageProps) => {
  const { id } = await params;
  const response = await fetch(`http://localhost:3000/api?id=${id}`);
  const item = await response.json();
  return (
    <div>
      <h2>{item.name}</h2>
      <p>価格: {item.price}円</p>
    </div>
  );
};

export default Item;
