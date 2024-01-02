import styled from 'styled-components';
import CartProduct from './components/CartProduct.jsx';
import ProductData from '../../data/product';
import { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState({});
  useEffect(() => {
    const cartItemsInStorage = localStorage.getItem('cart_items');
    setCartItems(
      cartItemsInStorage.split('^').reduce((acc, cur) => {
        if (!acc[cur]) {
          acc[cur] = 0;
        }
        acc[cur] += 1;
        return acc;
      }, {})
    );
  }, []);
  return (
    <CartTable>
      <CartTableCaption>장바구니</CartTableCaption>
      <colgroup>
        <col style={{ width: '25px' }} />
        <col style={{ width: '10%' }} />
        <col style={{ width: 'auto' }} />
        <col style={{ width: '11%' }} />
        <col style={{ width: '10%' }} />
        <col style={{ width: '11%' }} />
        <col style={{ width: '124px' }} />
      </colgroup>
      <thead>
        <tr>
          <CartTableTh scope="col">
            <HiddenSpan>선택</HiddenSpan>
          </CartTableTh>
          <CartTableTh scope="col">브랜드</CartTableTh>
          <CartTableTh scope="col">상품명</CartTableTh>
          <CartTableTh scope="col">구매가</CartTableTh>
          <CartTableTh scope="col">수량</CartTableTh>
          <CartTableTh scope="col">금액</CartTableTh>
          <CartTableTh scope="col">선택</CartTableTh>
        </tr>
      </thead>
      <tbody>
        {Object.keys(cartItems).map((id, index) => {
          const product = ProductData.find((p) => p.productId === Number(id));
          return (
            <CartProduct key={index} product={product} amount={cartItems[id]} />
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <CartTableTd colSpan="8">
            <TextSpan>총 금액</TextSpan>
            <CostSpan>
              <b>158,520</b>원
            </CostSpan>
            <SymbolSpan>+</SymbolSpan>
            <TextSpan>배송비</TextSpan>
            <CostSpan>
              <b>0</b>원
            </CostSpan>
            <SymbolSpan>=</SymbolSpan>
            <TextSpan>결제 금액</TextSpan>
            <CostSpan>
              <b>158,520</b>원
            </CostSpan>
          </CartTableTd>
        </tr>
      </tfoot>
    </CartTable>
  );
};

export default Cart;

const CartTable = styled.table`
  border-collapse: collapse;
  border-top: 1px solid #000;

  margin: 48px;
`;

const CartTableCaption = styled.caption`
  margin: 0 0 12px 8px;

  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
`;

const CartTableTh = styled.th`
  background: #fafafa;

  padding: 22px 15px;

  font-weight: 400;
  white-space: nowrap;
`;

const HiddenSpan = styled.span`
  visibility: hidden;
`;

const CartTableTd = styled.td`
  background: #fafafa;
  border-bottom: 0;

  padding: 22px 20px;

  text-align: center;
`;

const TextSpan = styled.span`
  margin-right: 12px;
  vertical-align: middle;
`;

const CostSpan = styled.span`
  font-size: 1.5rem;
  vertical-align: middle;
`;

const SymbolSpan = styled.span`
  color: #b5b5b5;

  display: inline-block;

  width: 90px;
  margin-top: -7px;

  font-size: 2.5rem;
  vertical-align: middle;
`;
