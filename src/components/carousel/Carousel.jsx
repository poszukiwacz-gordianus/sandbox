import PropTypes from "prop-types";
import CarouselButton from "./CarouselButton";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { useState } from "react";
import CarouselDots from "./CarouselDots";
import { useInterval } from "usehooks-ts";

Carousel.propTypes = {
  array: PropTypes.array,
};

const defaultArray = [
  {
    image:
      "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus commodo tortor sed lacinia. Mauris suscipit bibendum tortor eget pellentesque. ",
    author: "Lukas Müller",
    job: "Lead Developer at a FinTech company",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjJ8MTU1NjE0Nnx8ZW58MHx8fHx8",
    testimonial:
      "Curabitur in feugiat ante. Morbi dolor lacus, mollis in placerat vitae, mollis quis nisl. Suspendisse bibendum magna enim, sed aliquet est consectetu. ",
    author: "Sofia Rossi",
    job: "Head of Digital Marketing at a fashion retail company",
  },
  {
    image:
      "https://images.unsplash.com/photo-1569068517543-f040ab06db75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjN8MTU1NjE0Nnx8ZW58MHx8fHx8",
    testimonial:
      "Ut ullamcorper gravida enim, quis fringilla turpis dapibus in. Donec at ex eget augue fermentum vestibulum. Nam lorem tortor, dictum eget erat ac.",
    author: "Emma Johansson",
    job: "Creative Director at a design agency",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601847003984-1d63d654b860?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTMxfDE1NTYxNDZ8fGVufDB8fHx8fA%3D%3D",
    testimonial:
      "Curabitur eu volutpat ante, nec condimentum orci. Mauris vitae turpis quam. Donec et neque efficitur, egestas metus eget, gravida turpis.",
    author: "Marie Dupont",
    job: "Senior Analyst at a multinational bank",
  },
  {
    image:
      "https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTU1fHx8ZW58MHx8fHx8",
    testimonial:
      "Nulla id tortor ultrices, luctus ex ut, fringilla ante. Sed eu pretium nibh. Vestibulum vitae tincidunt felis. Mauris egestas leo felis, nec condimentum orci.",
    author: "Maria de Almeida",
    job: "Senior Product Manager at EDP Comercial",
  },
];

export default function Carousel({ array = defaultArray }) {
  const [page, setPage] = useState(0);
  const [isPlaying, setPlaying] = useState(true);

  useInterval(
    () => {
      setPage((prev) => (prev + 1) % array.length);
    },
    isPlaying ? 5000 : null
  );

  return (
    <div
      className=" w-[800px] my-[100px] mx-auto bg-[#087f5b] py-8 pr-12 pl-[86px] rounded-lg relative flex items-center gap-[86px] transition-all duration-300 ease-in-out"
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
    >
      <img
        className=" h-[200px] w-[200px] object-cover rounded-lg scale-[1.5] shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
        src={array[page].image}
        alt={array[page].name}
      />
      <blockquote>
        <p className=" text-lg font-[500] mb-8 text-[#e6fcf5]">
          &quot;{array[page].testimonial}&quot;
        </p>
        <p className=" text-sm text-[#e6fcf5]">{array[page].author}</p>
        <p className=" text-sm text-[#c3fae8]">{array[page].job}</p>
      </blockquote>

      <CarouselButton className=" left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <IoChevronBackSharp
          className="w-10 text-2xl text-[#087f5b]"
          onClick={() =>
            setPage((prev) => (prev === 0 ? array.length - 1 : prev - 1))
          }
          aria-label="Previous testimonial"
        />
      </CarouselButton>
      <CarouselButton className=" right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
        <IoChevronForwardSharp
          className="w-10 text-2xl text-[#087f5b] "
          onClick={() => setPage((prev) => (prev + 1) % array.length)}
          aria-label="Next testimonial"
        />
      </CarouselButton>

      <CarouselDots array={array} page={page} onPage={setPage} />
    </div>
  );
}
