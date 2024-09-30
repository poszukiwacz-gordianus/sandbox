import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import PropTypes from "prop-types";

AccordionItem.propTypes = {
  element: PropTypes.object,
  number: PropTypes.number,
  curOpen: PropTypes.any,
  onOpen: PropTypes.func,
};

export default function AccordionItem({
  element: { title, content, list },
  number,
  curOpen,
  onOpen,
}) {
  const isOpen = number === curOpen;
  console.log(isOpen);

  function handleToogle() {
    onOpen(isOpen ? null : number);
  }

  return (
    <div
      className={`${
        isOpen ? "border-t-4 border-t-[#087f5b]" : null
      } py-5 px-6 pr-12 cursor-pointer grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-8 items-center shadow-[0_0_30px_rgba(0,0,0,0.1)]`}
      onClick={handleToogle}
    >
      <p
        className={`${
          isOpen ? " text-teal-800" : " text-stone-400"
        } text-2xl font-semibold`}
      >
        {number < 10 ? `0${number}` : number}
      </p>
      <p
        className={`${isOpen ? " text-teal-800" : null} text-2xl font-semibold`}
      >
        {title}
      </p>
      {isOpen ? (
        <ChevronUpIcon
          className={`w-6 h-6 ${isOpen ? "text-teal-800" : " text-gray-500 "}`}
        />
      ) : (
        <ChevronDownIcon className="w-6 h-6 text-gray-500 " />
      )}
      {isOpen ? (
        <div className=" col-start-2 pb-4 leading-6">
          <p className="">{content}</p>
          <ul className=" ml-10 mt-4 flex flex-col gap-3 list-disc">
            {list?.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
