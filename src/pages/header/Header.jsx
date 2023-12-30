import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to="/cart">
        <button>카트 가기</button>
      </Link>
      <div>header</div>
    </>
  );
};

export default Header;
