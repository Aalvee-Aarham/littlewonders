import 'animate.css'
export default function Hero() {
  return (
    <>
    <div className="relative  sm:hidden px-4 pt-16 mx-auto lg:py-32 sm:px-8 xl:px-20  sm:max-w-full">
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src="whitelogo.svg"
          className="object-cover object-top w-auto h-64 max-w-xl mb-1 rounded "
          alt=""
        />
      </div>
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
            </div>
            <p className="text-base text-gray-100 md:text-lg">
            we aim at success by creating skllls necessary for kids
to enrich & empower in studies & sports
            </p>
          </div>
        </div>
      </div>
    </div>
    <section className="text-gray-600 hidden sm:block my-5 body-font">
  <div className="container w-screen pl-96 lg:pl-6 mx-auto flex h-3/4 px-5 sm:pb-20 items-end sm:py-10 justify-end flex-col">
    
    <div className="text-end lg:w-1/2 w-full ">
    <img className="w-2/3 block mb-10 object-cover animate__backInRight object-center rounded" alt="hero" src="/lwlogo.svg"/>
    <div className="max-w-xl px-0 sm:pt-1 animate__backInRight pt-56 pb-6 lg:max-w-5xl ">
                <strong className="mt-4 text-xs sm:text-xl text-gray-100 dark:text-gray-400">we aim at success by creating skllls necessary for kids
to enrich & empower in studies & sports</strong>
            </div>
<a href="/about-us" className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-sm hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Learn More About us</a>
    </div>
  </div>
</section>
    </>
  )
}
