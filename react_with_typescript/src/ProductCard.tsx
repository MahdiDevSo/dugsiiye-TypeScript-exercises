interface ProductCardProps {
  name: string;
  price: number;
  description?: string;
}

const ProductCard = ({ name, price, description }: ProductCardProps) => {
  return (
    <>
      <h2>{name}</h2>
      <p>Price : {price}</p>
      {description && <p>{description}</p>}
    </>
  );
};

export default ProductCard;
