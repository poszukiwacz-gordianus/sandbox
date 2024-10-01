import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default function Button({ children, onClick, disabled, ariaLabel }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={` border border-solid border-[#087f5b] text-[#087f5b] text-3xl p-2 rounded-full ${
        disabled
          ? " opacity-50 cursore-default"
          : "hover:bg-[#087f5b] hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
