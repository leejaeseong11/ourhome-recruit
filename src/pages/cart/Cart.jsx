import styled from 'styled-components';
import CartProduct from './components/CartProduct.jsx';
import ProductData from '../../data/product';
import { useEffect, useState } from 'react';

// 장바구니 테이블
const Cart = () => {
  const [cartItems, setCartItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [isItem, setIsItem] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('cart_items') == null) {
      return;
    } else {
      setIsItem(true);
    }
    const cartItemsInStorage = JSON.parse(localStorage.getItem('cart_items'));
    setCartItems(cartItemsInStorage);

    setTotalPrice(
      Object.keys(cartItemsInStorage).reduce(
        (acc, cur) =>
          acc +
          ProductData.find((p) => p.productId === Number(cur)).price *
            cartItemsInStorage[cur],
        0
      )
    );
  }, []);

  // 상품 수량 변경 시 금액 설정
  useEffect(() => {
    const cartItemsInStorage = JSON.parse(localStorage.getItem('cart_items'));

    setTotalPrice(
      Object.keys(cartItemsInStorage).reduce(
        (acc, cur) =>
          acc +
          ProductData.find((p) => p.productId === Number(cur)).price *
            cartItemsInStorage[cur],
        0
      )
    );
  }, [cartItems]);
  return (
    <>
      {isItem ? (
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
            {Object.keys(cartItems)
              .reverse()
              .map((id, index) => {
                const product = ProductData.find(
                  (p) => p.productId === Number(id)
                );
                return (
                  <CartProduct
                    key={index}
                    product={product}
                    amount={cartItems[id]}
                    setCartItems={setCartItems}
                    setTotalPrice={setTotalPrice}
                  />
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <CartTableTd colSpan="8">
                <TextSpan>총 금액</TextSpan>
                <CostSpan>
                  <b>{totalPrice.toLocaleString('ko-KR')}</b>원
                </CostSpan>
                <SymbolSpan>+</SymbolSpan>
                <TextSpan>배송비</TextSpan>
                <CostSpan>
                  <b>{totalPrice >= 30000 ? '0' : '3,000'}</b>원
                </CostSpan>
                <DelivaryTextSpan>
                  (3만원이상 구매 시 무료배송)
                </DelivaryTextSpan>
                <SymbolSpan>=</SymbolSpan>
                <TextSpan>결제 금액</TextSpan>
                <CostSpan>
                  <b>
                    {totalPrice >= 30000
                      ? totalPrice.toLocaleString('ko-KR')
                      : (totalPrice + 3000).toLocaleString('ko-KR')}
                  </b>
                  원
                </CostSpan>
              </CartTableTd>
            </tr>
          </tfoot>
        </CartTable>
      ) : (
        <h3 style={{ marginTop: '100px' }}>장바구니가 비어 있습니다.</h3>
      )}
    </>
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

const DelivaryTextSpan = styled.span`
  color: #888;

  vertical-align: sub;
  font-size: 0.875rem;
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
