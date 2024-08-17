import React from "react"
import { Link } from "react-router-dom"
import demo from "../assets/demo.jpg"
function HeroSection() {
  return (
    <section className="hero-section text-center mt-32 flex flex-col">
      <h1 className="text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl">
        Launch Your Sass
        <br />
        <span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
          In Minutes Not Days
        </span>
      </h1>
      <h2 className="mt-5 text-gray-600 sm:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        error earum sed
      </h2>
      <div className="space-x-4 mx-auto mt-5 flex max-w-fit">
        <Link className="btn-getStarted bg-black text-white">Get Started</Link>
        <Link className="btn-getStarted bg-white text-black">Learn More</Link>
      </div>
      <div className="mt-5 items-center justify-center">
        <img
          className="mx-auto size-[300px] sm:size-[500px]"
          src={demo}
          alt=""
        />
      </div>
    </section>
  )
}

export default HeroSection
