import React from "react"
import Methodus from "../../images/Methodus.mp4"

export default function CardTwo() {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-6/6 mb-10 md:mb-0">
            <video
              className="object-cover object-center rounded"
              alt="video of a person scrolling through a webside"
              src={Methodus}
              autoPlay
              loop
              muted
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Methodus <br className="hidden lg:inline-block" />
              Institute
            </h1>
            <p className="mb-8 leading-relaxed">Methodus is ...</p>
            <div className="flex justify-center">
              <p className="inline-flex text-gray-700 border-2 py-2 px-3 focus:outline-none text-md">
                React
              </p>
              <p className="ml-3 inline-flex text-gray-700 border-2 py-2 px-3 focus:outline-none text-md">
                TailwindCSS
              </p>
            </div>
            <p className="mt-2 leading-relaxed text-sm text-gray-500">
              Porto Alegre, Brazil.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
