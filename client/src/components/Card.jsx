import { useNavigate } from "react-router-dom"

const Card = ({ id, height, image, length, location, name, time, video }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/viewCoaster/${id}`)
  }

  return (
    <div className="bg-slate-700 pt-24 pb-16 sm:pt-32 sm:pb-24 xl:pb-32 rounded-2xl m-4 mt-28">
      <div className="bg-slate-800 pb-20 sm:pb-24 xl:pb-0 rounded-2xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-y-10 gap-x-8 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-2xl"
                src={image}
                alt={name}
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:py-24 xl:px-16">
            <figure className="relative isolate pt-6 sm:pt-12">
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9 ">
                <p>{name}</p>
                <div className="mt-1 text-gray-400">{location}</div>
              </blockquote>
              <div className="flex flex-row flex-wrap gap-10">
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Height</div>
                  <div className="mt-1 text-gray-400">{height}</div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Time</div>
                  <div className="mt-1 text-gray-400">{time}</div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Feet</div>
                  <div className="mt-1 text-gray-400">{length}</div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Video</div>
                  <div className="mt-1 text-gray-400">
                    <a href={video}>Click to watch</a>
                  </div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Comments</div>
                  <div onClick={handleClick} className="mt-1 text-gray-400 cursor-pointer">See more</div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
