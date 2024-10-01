import PropTypes from "prop-types";

TableHead.propTypes = {
  product: PropTypes.string,
  array: PropTypes.array,
};

export default function TableHead({ product, array }) {
  return (
    <thead>
      <tr className=" bg-[#087f5b] text-white">
        <th className=" py-2 px-6 text-left w-1/4">{product}</th>
        {array.map((item, i) => (
          <th key={i} className=" py-4 px-6 text-left">
            {item.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}
