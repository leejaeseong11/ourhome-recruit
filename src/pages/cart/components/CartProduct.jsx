import styled from 'styled-components';
import { useState } from 'react';

// 장바구니에 담긴 상품
const CartProduct = ({ product, amount, setCartItems, setTotalPrice }) => {
  const [cartAmount, setCartAmount] = useState(amount);
  // 상품 체크에 따른 금액 설정
  const checkBoxClickHandler = (e) => {
    if (e.target.checked) {
      setTotalPrice((totalPrice) => totalPrice + product.price * cartAmount);
    } else {
      setTotalPrice((totalPrice) => totalPrice - product.price * cartAmount);
    }
  };
  // 상품 수량 변경 시
  const amountChangeHandler = (e) => {
    const cartItemsInStorage = JSON.parse(localStorage.getItem('cart_items'));
    if (isNaN(e.target.value)) {
      e.target.value = '';
    }
    cartItemsInStorage[' ' + product.productId] = e.target.value;
    setCartItems(cartItemsInStorage);
    setCartAmount(e.target.value);
    localStorage.setItem('cart_items', JSON.stringify(cartItemsInStorage));
  };
  const decreaseButtonHandler = () => {
    if (cartAmount === 0) {
      return;
    }
    const cartItemsInStorage = JSON.parse(localStorage.getItem('cart_items'));
    cartItemsInStorage[' ' + product.productId] = cartAmount - 1;
    setCartItems(cartItemsInStorage);
    setCartAmount((cartAmount) => Number(cartAmount) - 1);
    localStorage.setItem('cart_items', JSON.stringify(cartItemsInStorage));
  };
  const increaseButtonHandler = () => {
    const cartItemsInStorage = JSON.parse(localStorage.getItem('cart_items'));
    cartItemsInStorage[' ' + product.productId] = cartAmount + 1;
    setCartItems(cartItemsInStorage);
    setCartAmount((cartAmount) => Number(cartAmount) + 1);
    localStorage.setItem('cart_items', JSON.stringify(cartItemsInStorage));
  };
  // 상품 삭제 시
  const deleteButtonClickHandler = () => {
    const isDelete = window.confirm(
      '삭제 시 복원되지 않습니다. 삭제하시겠습니까?'
    );
    if (isDelete) {
      const cartItemsInStorage = JSON.parse(localStorage.getItem('cart_items'));
      delete cartItemsInStorage[' ' + product.productId];
      localStorage.setItem('cart_items', JSON.stringify(cartItemsInStorage));
      setCartItems(cartItemsInStorage);
      console.log(cartAmount);
    }
  };
  return (
    <tr>
      <td>
        <CheckInput
          onClick={checkBoxClickHandler}
          type="checkbox"
          id="CART1"
          value={product.productId}
          defaultChecked
        />
      </td>
      <td>아워홈</td>
      <ProductTd>
        <ProductCont>
          <ProductThum>
            <img src={product.image} alt={product.title} />
          </ProductThum>
          <ProductTit>{product.title}</ProductTit>
        </ProductCont>
      </ProductTd>
      <ProductTd>
        <ProductDiscountPrice>
          <b>{Number(product.price).toLocaleString('ko-KR')}</b>원
        </ProductDiscountPrice>
        <br />
        <ProductSalePrice>
          <b>
            {product.priceBeforeDiscount
              ? Number(product.priceBeforeDiscount).toLocaleString('ko-KR')
              : Number(product.price).toLocaleString('ko-KR')}
          </b>
          원
        </ProductSalePrice>
      </ProductTd>
      <ProductTd>
        <ProductAmount>
          <button type="button" onClick={decreaseButtonHandler}>
            -
          </button>
          <ProductAmountInput
            type="text"
            value={cartAmount}
            maxLength="5"
            onChange={amountChangeHandler}
          />
          <button type="button" onClick={increaseButtonHandler}>
            +
          </button>
        </ProductAmount>
      </ProductTd>
      <ProductTd>
        <ProductDiscountPrice>
          <b>{Number(product.price * cartAmount).toLocaleString('ko-KR')}</b>원
        </ProductDiscountPrice>
      </ProductTd>
      <ProductTd>
        <ItemDeleteButton type="button" onClick={deleteButtonClickHandler}>
          삭제하기
        </ItemDeleteButton>
      </ProductTd>
    </tr>
  );
};

export default CartProduct;

const CheckInput = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;

  width: 1.5rem;
  height: 1.5rem;

  cursor: pointer;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #fb6c19;
  }
`;

const ProductTd = styled.td`
  padding: 15px 20px;
  vertical-align: middle;
`;

const ProductThum = styled.div`
  border: 1px solid #eee;

  display: inline-block;

  position: relative;
  width: 120px;
  margin-right: 8px;

  img {
    border: 0;

    width: 120px;
    vertical-align: top;
  }
`;

const ProductCont = styled.div`
  display: flex;
  align-items: center;

  margin-left: -105px;
  padding-left: 120px;
`;

const ProductTit = styled.strong`
  display: -webkit-box;
  max-height: 4.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  word-break: normal;

  font-size: 1.125rem;
  font-weight: 400;
`;

const ProductDiscountPrice = styled.span`
  font-size: 1.125rem;

  white-space: nowrap;
`;

const ProductSalePrice = styled.span`
  color: #888;

  font-size: 0.95rem;
  text-decoration: line-through;
`;

const ProductAmount = styled.span`
  display: flex;

  button {
    border: 1px solid #e0e0e0;

    width: 24px;

    cursor: pointer;
    font-size: 1.25rem;
  }
`;

const ProductAmountInput = styled.input`
  border: solid #e0e0e0;
  border-width: 1px 0;

  width: 42px;
  height: 24px;

  font-weight: 500;
  text-align: center;
  vertical-align: top;
`;

const ItemDeleteButton = styled.button`
  color: #888;
  border: 1px solid #888;
  background-color: #fff;

  height: 36px;
  padding: 0 11px;

  font-size: 14px;
  line-height: 35px;
  white-space: nowrap;
  cursor: pointer;
`;
