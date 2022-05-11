import Image from "next/image";

export const Banner = (prop: any) => {
    return (
        <div className="relative">
    <Image
      layout="fill"
      className="object-center  object-cover pointer-events-none"
      src="/banner.jpg"
      alt="hero image"
    />
   <div className="relative bg-black bg-opacity-50 z-1">

      <div className="">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h2 className="max-w-lg mb-6 font-sans text-3xl text-center font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                  {prop.title}
                </h2>
        </div>
      </div>
   </div>

      </div>
    );
  };