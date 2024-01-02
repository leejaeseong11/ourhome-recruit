import styled from 'styled-components';

// 상품 카드
const Product = ({ product, order }) => {
  // 로컬 스토리지에 장바구니 상품 저장
  const cartButtonClickHandler = (e) => {
    console.log(e.target);
    let cartItems = localStorage.getItem('cart_items');
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
      cartItems[e.currentTarget.id]
        ? (cartItems[e.currentTarget.id] += 1)
        : (cartItems[e.currentTarget.id] = 1);

      localStorage.setItem('cart_items', JSON.stringify(cartItems));
    } else {
      localStorage.setItem('cart_items', `{"${e.currentTarget.id}": 1}`);
    }
    const goCart = window.confirm(
      '선택한 상품이 장바구니에 담겼습니다.\n장바구니로 이동 하겠습니까?'
    );
    if (goCart) {
      window.location.href = '/cart';
    }
  };
  return (
    <ProductContainer>
      <ProductOrder>{order < 10 ? '0' + order : order}</ProductOrder>
      <ProductImageContainer>
        <ProductImage src={product.image} alt={product.title} />
        <CartIconButton id={product.productId} onClick={cartButtonClickHandler}>
          <img src="shopping_cart.png" alt="cart-icon" />
        </CartIconButton>
      </ProductImageContainer>
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
        <TagContainer>
          <div>
            {product.tags.map((tag, index) => (
              <ProductTag key={index}>{tag}</ProductTag>
            ))}
          </div>
          <CartButton id={product.productId} onClick={cartButtonClickHandler}>
            장바구니
          </CartButton>
        </TagContainer>
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
const ProductImageContainer = styled.div`
  position: relative;
`;

const CartIconButton = styled.div`
  background-color: #fff;
  border: none;
  border-radius: 50%; /* 이미지를 원형으로 만들기 위해 추가 */

  padding: 8px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;

  height: 40px;
  width: 40px;
  opacity: 0;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  ${ProductImageContainer}:hover & {
    opacity: 0.8;
  }
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

  white-space: nowrap;
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

const CartButton = styled.button`
  background-color: #ff6500;
  color: #fff;
  border: none;
  border-radius: 8px;

  padding: 4px;
  cursor: pointer;

  font-size: 1rem;
  height: 28px;
  white-space: nowrap;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  white-space: nowrap;
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
