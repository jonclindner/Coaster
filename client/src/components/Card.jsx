

const Card = () => {
  return (
    <div className="bg-red pt-24 pb-16 sm:pt-32 sm:pb-24 xl:pb-32">
      <div className="bg-slate-800 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-y-10 gap-x-8 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                className="absolute inset-0 h-full w-full rounded-2xl bg-red-800 object-cover shadow-2xl"
                src="https://www.tripsavvy.com/thmb/9X5xlI-zgeiIRUGbaP2Qk7WnHQs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JurassicWorldVelociCoasterUniversalOrlando-b495a4606df54b60898fea75b293af34.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:py-24 xl:px-16">
            <figure className="relative isolate pt-6 sm:pt-12">
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9 ">
                <p>Velocicoaster</p>
                <div className="mt-1 text-gray-400">Universal Studios</div>
              </blockquote>
              <div className="flex flex-row flex-wrap gap-10">
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Height</div>
                  <div className="mt-1 text-gray-400">200ft</div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Located</div>
                  <div className="mt-1 text-gray-400">Orlando, FL</div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Time</div>
                  <div className="mt-1 text-gray-400">3:20</div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Feet</div>
                  <div className="mt-1 text-gray-400">342ft</div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Video</div>
                  <div className="mt-1 text-gray-400">Click to watch</div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Comments</div>
                  <div className="mt-1 text-gray-400">See more</div>
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
