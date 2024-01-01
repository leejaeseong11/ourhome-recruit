import styled from 'styled-components';

// 상품 카드
const Product = ({ product, order }) => {
  return (
    <ProductContainer>
      <ProductOrder>{order < 10 ? '0' + order : order}</ProductOrder>
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductSubTitle>{product.subTitle}</ProductSubTitle>
        <ProductPriceContainer>
          <ProductPrice>
            <b>{product.price}</b>원
          </ProductPrice>

          {product.priceBeforeDiscount && (
            <ProductPriceBeforeDiscount>
              <b>{product.priceBeforeDiscount}</b>원
            </ProductPriceBeforeDiscount>
          )}
          {product.saleRate && (
            <ProductSaleRate>
              <b>{product.saleRate}</b>%
            </ProductSaleRate>
          )}
        </ProductPriceContainer>
        <div>
          {product.tags.map((tag) => (
            <ProductTag>{tag}</ProductTag>
          ))}
        </div>
      </ProductInfo>
    </ProductContainer>
  );
};

export default Product;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 12px;
`;

const ProductOrder = styled.h3`
  align-self: flex-start;
`;

const ProductImage = styled.img`
  width: 100%;
  margin-bottom: 4px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProductTitle = styled.strong`
  font-size: 1.25rem;
  text-align: left;
`;

const ProductSubTitle = styled.p`
  color: #888;
  text-align: left;
`;

const ProductPriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ProductPrice = styled.span`
  display: flex;
  font-size: 1.5rem;

  margin-right: 4px;
`;

const ProductPriceBeforeDiscount = styled.del`
  color: #666;

  margin-right: 4px;
`;

const ProductSaleRate = styled.em`
  color: #ff6500;
`;

const ProductTag = styled.span`
  &:first-child:before {
    content: none;
  }

  &:before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    margin: -2px 8px 0 4px;
    vertical-align: middle;
    background: #e6e6e6;
  }
`;
