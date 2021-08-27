/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactPaginate from 'react-paginate';

import ReadAndWatchSliderCardDictionary from './ReadAndWatchSliderCardDictionary';

function CommentList({ data, classOfGrid, CardComponent }) {
  return (
    <div id="project-comments" className={`commentList ${classOfGrid} page__section`}>
      {data.map((data, index) => (
        <CardComponent data={data} key={index} />
      ))}
      <div className="rights__line rights__line_stage_first" />
      <div className="rights__line rights__line_stage_second" />
      <div className="rights__line rights__line_stage_third" />
    </div>
  );
}

function Pagination({ paginatorData, CardComponent }) {
  const [perPage, setPerPage] = React.useState(16);
  const [pageCount, setPageCount] = React.useState(1);
  const [paginateData, setPaginateData] = React.useState([]);
  // const [selectedPage, setSelectedPage] = React.useState(1);
  const [gridClasses, setGridClasses] = React.useState('rights');
  const [gridColumns, setGridColumns] = React.useState(4);
  const [marginPagesDisplayed, setMarginPagesDisplayed] = React.useState(2);
  const [pageRangeDisplayed, setPageRangeDisplayed] = React.useState(5);

  React.useEffect(() => {
    if (window.innerWidth <= 1100) {
      setPerPage(4);
      setGridColumns(1);
      setMarginPagesDisplayed(1);
      setPageRangeDisplayed(3);
    } else if (window.innerWidth <= 1450) {
      setPerPage(4);
      setGridColumns(2);
    } else if (window.innerWidth <= 1919) {
      setPerPage(12);
      setGridColumns(3);
    }
  }, []);

  React.useEffect(() => {
    setPaginateData(paginatorData.slice(0, perPage));
    setPageCount(Math.ceil(paginatorData.length / perPage));
  }, [paginatorData]);

  function handlePageClick(data) {
    const { selected } = data;
    const offset = selected * perPage;
    setPaginateData(paginatorData.slice(offset, offset + perPage));
    // window.scrollTo(0, 0);
    if (Number(data.selected + 1) === pageCount) {
      if (paginatorData.length % perPage <= gridColumns) {
        setGridClasses('rights rights_rows_one');
      } else if (paginatorData.length % perPage <= gridColumns * 2) {
        setGridClasses('rights rights_rows_two');
      } else if (paginatorData.length % perPage <= gridColumns * 3) {
        setGridClasses('rights rights_rows_three');
      } else {
        setGridClasses('rights');
      }
    } else {
      setGridClasses('rights');
    }
  }

  return (
    <div className="commentBox">
      <CommentList data={paginateData} classOfGrid={gridClasses} CardComponent={CardComponent} />
      <section className="pagination page__section">
        <nav className="pagination__nav" aria-label="Навигация по страницам">
          <ReactPaginate
            previousLabel=""
            nextLabel=""
            breakLabel="..."
            breakClassName="pagination__list-item"
            pageCount={pageCount}
            marginPagesDisplayed={marginPagesDisplayed}
            pageRangeDisplayed={pageRangeDisplayed}
            onPageChange={handlePageClick}
            containerClassName="pagination__list"
            activeClassName="pagination__link_active"
            pageClassName="pagination__list-item section-title"
            pageLinkClassName="pagination__link"
            previousLinkClassName="pagination__arrow pagination__arrow_direct_left"
            nextLinkClassName="pagination__arrow pagination__arrow_direct_right"
            disabledClassName="pagination__arrow pagination__arrow_disabled"
          />
        </nav>
      </section>
    </div>
  );
}

export default Pagination;
