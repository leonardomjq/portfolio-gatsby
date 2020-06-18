import React from "react"
import Leo from "../../images/leo-model.svg"
import Github from "../../images/github.svg"
import Linkedin from "../../images/linkedin.svg"

export default function Hero() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={Leo}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, I'm Leonardo. I love doing web dev stuff.
          </h1>
          <div className="flex justify-center">
            <a
              href="https://github.com/leonardomjq"
              target="_blank"
              rel="noreferrer"
            >
              <button className="ml-4 inline-flex text-gray-700 bg-gray-400 border-0 py-2 pr-4 pl-3 focus:outline-none hover:bg-gray-500 rounded text-lg">
                <img className="pr-2" alt="Github company logo" src={Github} />
                Github
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/leonardojaques/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="ml-4 inline-flex text-gray-700 bg-gray-400 border-0 py-2 pr-4 pl-3 focus:outline-none hover:bg-gray-500 rounded text-lg">
                <img
                  className="pr-2"
                  alt="Linkedin company logo"
                  src={Linkedin}
                />
                Linkedin
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
