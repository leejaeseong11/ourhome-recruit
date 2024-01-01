import { useState } from 'react';
import styled from 'styled-components';
import Product from './components/Product.jsx';
import ProductData from '../../data/product';
import Pagination from './components/Pagination.jsx';
// 상품 페이지
const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={ProductData.length}
        onPageChange={setCurrentPage}
      />
      <ProductContainer>
        {ProductData.slice(currentPage - 1, currentPage + 7).map(
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
    </>
  );
};

export default Main;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
