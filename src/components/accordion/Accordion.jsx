import PropTypes from "prop-types";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

const accordionItems = [
  {
    title: "Where are these chairs assembled?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam tincidunt elit vitae venenatis. Phasellus quis ante in neque tristique condimentum. Praesent sit amet purus lacinia, consequat libero id, scelerisque leo. Sed ornare maximus semper.",
    list: [
      "Phasellus quis ante in neque tristique condimentum.",
      "Phasellus quis ante in neque tristique condimentum.",
      "Phasellus quis ante in neque tristique condimentum.",
      "Phasellus quis ante in neque tristique condimentum.",
    ],
  },
  {
    title: "How long do I have to return my chair?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam tincidunt elit vitae venenatis. Phasellus quis ante in neque tristique condimentum. Praesent sit amet purus lacinia, consequat libero id, scelerisque leo. Sed ornare maximus semper.",
    list: [
      "Phasellus quis ante in neque tristique condimentum.",
      "Phasellus quis ante in neque tristique condimentum.",
      "Phasellus quis ante in neque tristique condimentum.",
    ],
  },
  {
    title: "Do you ship to countries outside the EU?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam tincidunt elit vitae venenatis. Phasellus quis ante in neque tristique condimentum. Praesent sit amet purus lacinia, consequat libero id, scelerisque leo. Sed ornare maximus semper.",
    list: [
      "Phasellus quis ante in neque tristique condimentum.",
      "Phasellus quis ante in neque tristique condimentum.",
      "Phasellus quis ante in neque tristique condimentum.",
      "Phasellus quis ante in neque tristique condimentum.",
      "Phasellus quis ante in neque tristique condimentum.",
      "Phasellus quis ante in neque tristique condimentum.",
    ],
  },
  {
    title: "Do you ship to countries outside the EU?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam tincidunt elit vitae venenatis. Phasellus quis ante in neque tristique condimentum. Praesent sit amet purus lacinia, consequat libero id, scelerisque leo. Sed ornare maximus semper.",
  },
];

Accordion.propTypes = {
  array: PropTypes.array,
};

export default function Accordion({ array = accordionItems }) {
  const [curOpen, setCurOpen] = useState(null);

  if (!array.length) return null;

  return (
    <div className="w-[700px] mx-auto my-24 flex flex-col gap-6 ">
      {array.map((el, i) => (
        <AccordionItem
          key={el.title}
          element={el}
          number={i + 1}
          curOpen={curOpen}
          onOpen={setCurOpen}
        />
      ))}
    </div>
  );
}
