import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize }) => {
    
  // Calculate the total number of pages
  const pagesCount = Math.ceil(itemsCount / pageSize);

  // Only render pagination if there's more than one page
  if (pagesCount === 1) return null;

  // Generate an array of page numbers
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

