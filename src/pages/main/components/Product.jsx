const Product = ({ product, order }) => {
  return (
    <>
      <h3>{order}</h3>
      <img src={product.image} alt={product.title} />
      <div>{product.title}</div>
      <div>{product.subTitle}</div>
      <div>{product.price}</div>
      <div>{product.priceBeforeDiscount}</div>
      <div>{product.saleRate}</div>
      <div>{product.tags}</div>
    </>
  );
};

export default Product;
