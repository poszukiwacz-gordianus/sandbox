import PropTypes from "prop-types";

CarouselDots.propTypes = {
  array: PropTypes.array,
  page: PropTypes.number,
  onPage: PropTypes.func,
};

export default function CarouselDots({ array = [], page, onPage }) {
  return (
    <div className=" absolute left-1/2 bottom-0 flex gap-3 -translate-x-1/2 translate-y-[32px] transition-all duration-300 ease-in-out">
      {array.map((dot, index) => (
        <button
          key={dot.author}
          className={`${
            page === index ? " bg-[#087f5b]" : " bg-white"
          } h-3 w-3 border-[2px] border-solid border-[#087f5b] rounded-full cursor-pointer`}
          onClick={() => onPage(index)}
          aria-label={`Go to slide ${index + 1}`}
        >
          &nbsp;
        </button>
      ))}
    </div>
  );
}
