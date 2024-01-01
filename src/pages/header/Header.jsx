import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoIcon src="logo_ourhome.png" alt="logo" />
      </Link>
      <Link to="/cart">
        <CartIcon src="shopping_cart.png" alt="cart-icon" />
      </Link>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 24px 48px 0 48px;
`;

const LogoIcon = styled.img`
  width: 280px;
`;

const CartIcon = styled.img`
  width: 48px;
  margin-right: 24px;
`;
