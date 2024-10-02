import PropTypes from "prop-types";
import { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { getPagesToShow } from "./paginationUtils";
import Button from "./Button";

Pagination.propTypes = {
  page: PropTypes.number,
};

export default function Pagination({ page = 10 }) {
  const [count, setCount] = useState(1);
  const pagesToShow = getPagesToShow(count, page);

  return (
    <div className="flex gap-5 justify-center items-center text-center mt-10">
      <Button
        onClick={() => setCount(Math.max(1, count - 1))}
        disabled={count === 1}
        ariaLabel="Previous page"
      >
        <HiOutlineChevronLeft />
      </Button>

      {pagesToShow.map((pageItem, index) => (
        <div key={index} className="flex  ">
          {typeof pageItem === "number" ? (
            <a
              href={`#/${pageItem}`}
              className={`${
                pageItem === count
                  ? "bg-[#087f5b] text-white rounded-full cursor-default"
                  : ""
              } w-10 h-10 content-center text-base hover:bg-[#087f5b] hover:text-white rounded-full`}
              onClick={() => setCount(pageItem)}
              aria-label={`Page ${pageItem}`}
            >
              {pageItem}
            </a>
          ) : (
            <span className="w-10 text-gray-500">{pageItem}</span>
          )}
        </div>
      ))}

      <Button
        onClick={() => setCount(Math.min(page, count + 1))}
        disabled={count === page}
        ariaLabel="Next page"
      >
        <HiOutlineChevronRight />
      </Button>
    </div>
  );
}
