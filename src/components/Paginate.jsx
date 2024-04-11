import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const tstyle = {
  color: "var(--offBlack)",
  fontWeight: 600,
  fontSize: "0.884rem",
};

export default function Paginate({ data, itemsPerPage, setFilterData }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setFilterData(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [data, itemOffset, itemsPerPage, setFilterData]);

  const handlePageClick = async (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
    navigate(`?page=${newOffset / itemsPerPage + 1}`);
  };

  const getPageNumber = Math.ceil(itemOffset / itemsPerPage) + 1;

  return (
    <div className="d-flex justify-content-between align-items-center">
      <span className="d-none d-md-block" style={tstyle}>
        20 Entries Per Page
      </span>
      <span style={tstyle}>
        Page {getPageNumber} of {Math.ceil(data.length / itemsPerPage)}
      </span>
      <ReactPaginate
        containerClassName="pagination mt-3"
        activeClassName="active"
        breakLabel="..."
        breakClassName="page-item-none"
        pageClassName="page-item-none"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel={"< Previous"}
        nextLabel={"Next >"}
      />
    </div>
  );
}
