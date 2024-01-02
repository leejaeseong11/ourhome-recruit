import styled from 'styled-components';

// 장바구니에 담긴 상품
const CartProduct = () => {
  const checkBoxClickHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <tr>
      <td>
        <CheckInput
          onClick={checkBoxClickHandler}
          type="checkbox"
          id="CART1"
          value="202418898719"
        />
      </td>
      <td>아워홈</td>
      <ProductTd>
        <ProductCont>
          <ProductThum>
            <img
              src="https://mall.ourhome.co.kr//attach_file/20231102/1B4E9A9BF3FA4F5EB6156A242E0F03DD.jpg"
              alt=""
            />
          </ProductThum>
          <ProductTit>
            [미니멜츠]구슬 아이스크림 4종 혼합(20개)[미니멜츠]구슬 아이스크림
            4종 혼합(20개) [미니멜츠]구슬 아이스크림 4종
            혼합(20개)[미니멜츠]구슬 아이스크림 4종 혼합(20개)
          </ProductTit>
        </ProductCont>
      </ProductTd>
      <ProductTd>
        <ProductDiscountPrice>
          <b>23,500</b>원
        </ProductDiscountPrice>
        <br />
        <ProductSalePrice>
          <b>29,900</b>원
        </ProductSalePrice>
      </ProductTd>
      <ProductTd>
        <ProductAmount>
          <button type="button">-</button>
          <ProductAmountInput
            type="text"
            title="수량 직접입력"
            name="qty"
            data-sell-mon="23500"
            data-delivery-type="N"
            data-each-delivery="Y"
            value="4"
            data-delivery-amt="3000"
            data-delivery-free="30000"
            data-delivery-gubun="O"
            class="numeric"
            data-jirisansoo-yn="N"
            maxlength="5"
          />
          <button type="button">+</button>
        </ProductAmount>
      </ProductTd>
      <ProductTd>
        <ProductDiscountPrice>
          <b>94,000</b>원
        </ProductDiscountPrice>
      </ProductTd>
      <ProductTd>
        <ItemDeleteButton type="button">삭제하기</ItemDeleteButton>
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
