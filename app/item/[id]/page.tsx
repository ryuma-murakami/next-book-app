type ItemProps = {
  params: {
    id: string;
  };
};

const Item = async ({ params }: ItemProps) => {
  const { id } = await params;
  return <h1>Item{id}ページ</h1>;
};

export default Item;
