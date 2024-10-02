const image =
  "https://ratingcaptain.com/storage/pos/May2021/gastronomia%20w%20dobie%20koronawirusa.jpg";

export default function Hero() {
  return (
    <div>
      <header
        className={` h-screen relative bg-cover text-white `}
        style={{
          backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6)), url(${image})`,
        }}
      >
        <nav className="text-lg font-semibold flex justify-between mx-auto my-0 pt-8 w-[800px]">
          <div>LOGO</div>
          <div>NAVIGATION</div>
        </nav>

        <div className="w-[800px] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className=" w-1/2">
            <h1 className="text-5xl mb-8 leading-none font-bold">
              A healty meal delivered to your door, every single day
            </h1>
            <p className="text-lg mb-12">
              The smart 365-days-per-year food subscription that will make you
              eat healty algain. Tailored to your personal tastes and
              nutritional needs
            </p>
            <a
              href="#"
              className="text-lg font-semibold text-white py-4 px-8 rounded-lg inline-block bg-[#e67e22]"
            >
              Start eating well
            </a>
          </div>
        </div>
      </header>

      <section className=" mx-auto my-0 w-[800px] py-24">
        <div>
          <h2 className=" text-4xl mb-12">Some random heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            quas, minus beatae sapiente debitis voluptatum, laudantium veritatis
            impedit corrupti officia recusandae fugit, voluptates iure velit! Ad
            suscipit vitae nobis optio. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Reiciendis sequi quam earum voluptas eum
            laboriosam at cupiditate debitis in odio adipisci repudiandae enim
            ea, sint quos similique! Debitis, facilis dolore?
          </p>
        </div>
      </section>
    </div>
  );
}
