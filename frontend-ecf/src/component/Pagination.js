import React from 'react';
import '../App.css';

const Pagination = ({ page, setPage, itemsPerPage, totalItems }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <a
          key={i}
          className={`${page === i ? 'active' : ''}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </a>
      );
    }
    return pageNumbers;
  };

  return (
    <div className='pagination'>
      <a onClick={() => setPage(Math.max(1, page - 1))}>&laquo;</a>
      {renderPageNumbers()}
      <a onClick={() => setPage(Math.min(totalPages, page + 1))}>&raquo;</a>
    </div>
  );
};

export default Pagination;
