import styled from 'styled-components';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // 5페이지 씩 출력
  let startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);
  startPage = endPage - 4;

  const pageNumbers = new Array(totalPages)
    .fill(0)
    .map((_, i) => i + 1)
    .slice(startPage - 1, endPage);

  return (
    <PaginationContainer>
      <li>
        <PaginationButton
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          {'<<'}
        </PaginationButton>
      </li>
      <li>
        <PaginationButton
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          {'<'}
        </PaginationButton>
      </li>
      {pageNumbers.map((number) => (
        <li key={number}>
          <PaginationButton
            $active={number === currentPage}
            onClick={() => onPageChange(number)}
          >
            {number}
          </PaginationButton>
        </li>
      ))}
      <li>
        <PaginationButton
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </PaginationButton>
      </li>
      <li>
        <PaginationButton
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          {'>>'}
        </PaginationButton>
      </li>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.ul`
  display: flex;

  padding: 0;
  margin: 20px 0;

  list-style: none;
`;

const PaginationButton = styled.button`
  border: 1px solid;
  background-color: ${(props) => (props.$active ? '#ff6500' : '#0000')};
  border-color: ${(props) => (props.$active ? '#ff6500' : '#888')};
  color: ${(props) => (props.$active ? '#fff' : '#000')};

  padding: 8px 12px;
  margin: 0 4px;

  cursor: pointer;

  &:hover:enabled {
    background-color: ${(props) => (props.$active ? '#ff6500' : '#888')};
    color: ${(props) => (props.$active ? '#fff' : '#000')};
  }
  &:hover:disabled {
    cursor: not-allowed;
  }
`;
