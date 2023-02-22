import { TbRollercoaster } from "react-icons/tb"


const Hero = ({ executeScroll }) => {
  return (
    <div className="relative bg-white mt-24">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <TbRollercoaster size={80} className="h-11 text-indigo-600" />
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Find the best rollercoasters{" "}
                <button
                  onClick={executeScroll}
                  className="whitespace-nowrap font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Welcome to Coaster
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Click below to add a coaster you've been on
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/add"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add a Coaster
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1474806246163-78af80f5d266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}


export default Hero
