export default function Section() {
  return (
    <section className=" bg-[#e9ecef]  p-10 pt-6 flex flex-col gap-5 overflow-scroll">
      {Array.from({ length: 10 }).map((item, i) => (
        <div
          key={i}
          className="bg-[#adb5bd] h-24 flex justify-center items-center flex-shrink-0"
        >
          Email {i + 1}
        </div>
      ))}
    </section>
  );
}
