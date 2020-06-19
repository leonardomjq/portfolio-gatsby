import React from "react"
import Cameron from "../../images/Cameron.mp4"

export default function CardOne() {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Cameron <br className="hidden lg:inline-block" />
              Wong
            </h1>
            <p className="mb-8 leading-relaxed">
              Cameron is a upcoming model and actor raised in Los Angeles.
              Cameron came asking to build a website that displayed all of his
              photos and videos in a fashionable way.
            </p>
            <div className="flex justify-center">
              <p className="inline-flex text-gray-700 border-2 py-2 px-3 focus:outline-none text-md">
                HTML
              </p>
              <p className="ml-3 inline-flex text-gray-700 border-2 py-2 px-3 focus:outline-none text-md">
                SASS
              </p>
            </div>
            <p className="mt-2 leading-relaxed text-sm text-gray-500">
              Los Angeles, USA.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-6/6">
            <video
              className="object-cover object-center rounded"
              alt="video of a person scrolling through a webside"
              src={Cameron}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </section>
    </div>
  )
}
