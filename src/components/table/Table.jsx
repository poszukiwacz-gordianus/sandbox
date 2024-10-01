import PropTypes from "prop-types";

Table.propTypes = {
  product: PropTypes.string,
  array: PropTypes.array,
};

import TableBody from "./TableBody";
import TableHead from "./TableHead";

const defaultArray = [
  {
    name: "The Laid Back",
    dimensions: {
      Width: "80cm",
      Height: "100cm",
      Depth: "70cm",
      Weight: "16kg",
    },
  },
  {
    name: "The Worker Bee",
    dimensions: {
      Width: "60cm",
      Height: "110cm",
      Depth: "65cm",
      Weight: "22kg",
    },
  },
  {
    name: "The Chair 4/2",
    dimensions: {
      Width: "220cm",
      Height: "90cm",
      Depth: "80cm",
      Weight: "80kg",
    },
  },
];

export default function Table({ product = "Chair", array = defaultArray }) {
  return (
    <div className=" flex justify-center">
      <table className="w-[800px] mt-[100px] text-lg border-collapse">
        <TableHead product={product} array={array} />
        <TableBody array={array} />
      </table>
    </div>
  );
}
