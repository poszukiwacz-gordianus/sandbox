export default function Button({ children, trash = false }) {
  return (
    <button
      className={` text-base py-2 px-3 text-white
      ${trash ? "bg-[#d6336c] ml-auto" : "bg-[#5f3dc4]"}`}
    >
      {children}
    </button>
  );
}
