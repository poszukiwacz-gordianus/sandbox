import PropTypes from "prop-types";

CarouselButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default function CarouselButton({ children, className }) {
  return (
    <button
      className={` bg-white border-none h-10 rounded-full absolute shadow-[0_12px_24px_rgba(0,0,0,0.2)] cursor-pointer flex items-center justify-center hover:bg-stone-200 ${className}`}
    >
      {children}
    </button>
  );
}
