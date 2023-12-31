import { useState } from 'react';
import styled from 'styled-components';
import Product from './components/Product.jsx';
import ProductData from '../../data/product';
import Pagination from './components/Pagination.jsx';

// 상품 페이지
const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <MainContainer>
      <ProductContainer>
        {ProductData.slice((currentPage - 1) * 8, currentPage * 8).map(
          (product, index) => {
            return (
              <Product
                key={product.productId}
                product={product}
                order={index + 1 + (currentPage - 1) * 8}
              />
            );
          }
        )}
      </ProductContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(ProductData.length / 8)}
        onPageChange={setCurrentPage}
      />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  margin: 0 48px;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
