import { useEffect, useState } from "react";
import { Stack, Button } from "react-bootstrap";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function Paginate({ data, itemsPerPage, setFilterData }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  params.set("page", 1);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setFilterData(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [data, itemOffset, itemsPerPage, setFilterData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const getPageNumber = Math.ceil(itemOffset / itemsPerPage) + 1;

  return (
    <div className="d-flex justify-content-between align-items-center">
      <span className="d-none d-md-block">20 Entries Per Page</span>
      <span>
        Page {getPageNumber} of {Math.ceil(data.length / itemsPerPage)}
      </span>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        pageRangeDisplayed={0}
        marginPagesDisplayed={""}
        onPageChange={handlePageClick}
        breakLabel="..."
        pageCount={pageCount}
        previousLabel={
          <Button
            variant="none"
            className="border me-3"
            style={{
              borderColor: "var(--greyLight)",
              color: "var(--offBlack)",
              minWidth: "fit-content",
            }}
          >
            <Stack direction="horizontal" gap={2}>
              <GrFormPrevious />
              Previous
            </Stack>
          </Button>
        }
        nextLabel={
          <Button
            variant="none"
            style={{
              borderColor: "var(--greyLight)",
              color: "var(--offBlack)",
              minWidth: "fit-content",
            }}
          >
            <Stack direction="horizontal" gap={2}>
              Next
              <GrFormNext />
            </Stack>
          </Button>
        }
      />
    </div>
  );
}
