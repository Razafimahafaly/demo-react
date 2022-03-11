import React, { useEffect, useState } from "react";
// import { PropTypes } from "prop-types";

function Pagination({ pageSize = 25, startingPage = 1, datas, children }) {
  const [currentPage, setCurrentPage] = useState(null);
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    let pageCount = parseInt(datas.length / pageSize, 10);

    if (datas.length % pageSize > 0) {
      pageCount++;
    }
    setCurrentPage(startingPage);
    setPageCount(pageCount);
  }, [pageSize, startingPage, datas]);

  const setOnCurrentPage = (num) => {
    setCurrentPage(num);
  };

  const createControls = () => {
    let controls = [];
    for (let i = 1; i <= pageCount; i++) {
      const baseClassName = "pagination-controls__button";
      const activeClassName =
        i === currentPage ? `${baseClassName}--active` : "";
      controls.push(
        <div
          key={i}
          className={`${baseClassName} ${activeClassName}`}
          onClick={() => setOnCurrentPage(i)}
        >
          {i}
        </div>
      );
    }
    return controls;
  };

  const createPaginatedData = () => {
    const upperLimit = currentPage * pageSize;
    const dataSlice = datas.slice(upperLimit - pageSize, upperLimit);
    return dataSlice;
  };

  return (
    <div className="pagination">
      <div className="pagination-controls">{createControls()}</div>
      <div className="pagination-results">
        {React.cloneElement(children, {
          datas: createPaginatedData()
        })}
      </div>
    </div>
  );
}

/*Pagination.defaultProps = {
  pageSize: 25,
  startingPage: 1
};*/

// Pagination.propTypes = {
//   data: PropTypes.array.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   startingPage: PropTypes.number.isRequired
// };

export default Pagination;
