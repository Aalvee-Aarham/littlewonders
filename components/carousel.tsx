import Image from "next/image";

export default function Carousel() {


    return (
      <section  className=" -z-10 w-full lg:w-3/4 px-5 py-1 pb-10 over mx-auto">
          <script src="node_modules/tw-elements/dist/js/index.min.js"></script>

    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">See Our gallery</h1>
    </div>
         <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="3"
      aria-label="Slide 4"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="4"
      aria-label="Slide 5"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <Image
        src="/ALBUM/Carousal/image (1).webp"
        className="block w-full"
          alt="Album"
          width= {512}
          height= {256}
          loading="eager"
          layout="responsive"
      />

    </div>
    <div className="carousel-item relative float-left w-full">
      <Image
        src="/ALBUM/Carousal/image (2).webp"
        className="block w-full"
          alt="Album"
          width= {512}
          height= {256}
          loading="eager"
          layout="responsive"
      />

    </div>
    <div className="carousel-item relative float-left w-full">
      <Image
        src="/ALBUM/Carousal/image (3).webp"
        className="block w-full"
          alt="Album"
          width= {512}
          height= {256}
          loading="eager"
          layout="responsive"
      />

    </div>
    <div className="carousel-item relative float-left w-full">
      <Image
        src="/ALBUM/Carousal/image (4).webp"
        className="block w-full"
          alt="Album"
          width= {512}
          height= {256}
          loading="eager"
          layout="responsive"
      />

    </div>
    <div className="carousel-item relative float-left w-full">
      <Image
        src="/ALBUM/Carousal/image (5).webp"
        className="block w-full"
          alt="Album"
          width= {512}
          height= {256}
          loading="eager"
          layout="responsive"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </section>
    )
  }
  