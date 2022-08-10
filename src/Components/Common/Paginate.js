import React from "react"
import { BiCaretLeft, BiCaretRight } from "react-icons/bi"
import ReactPaginate from "react-paginate"

const Paginate = ({ pageCount, changePage }) => {
  return (
    <div className="d-flex justify-content-center">
      <ReactPaginate
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        previousLabel={<BiCaretLeft />}
        nextLabel={<BiCaretRight />}
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={10}
        pageRangeDisplayed={10}
        onPageChange={changePage}
        // subContainerClassName="pages pagination"
        disableInitialCallback={true}
      />
    </div>
  )
}

export default Paginate
