const Pagination = ({ itemsPerPage, totalItems, currentPage, handlePageChange }) => {

  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(page)}>{page}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;