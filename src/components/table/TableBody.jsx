import PropTypes from "prop-types";

TableBody.propTypes = {
  array: PropTypes.array,
};

export default function TableBody({ array }) {
  const dimensionTitles = Object.keys(array[0].dimensions);

  return (
    <tbody>
      {dimensionTitles.map((title, i) => (
        <tr key={i} className=" odd:bg-[#f8f9fa] even:bg-[#e9ecef]">
          <th key={title} className=" py-4 px-6 text-left">
            {title}
          </th>
          {array.map((item) => (
            <td key={item.name} className=" py-4 px-6 text-left">
              {item.dimensions[title]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
