import React from "react"
import Hero from "../components/Hero"
import CardLeft from "../components/Cards/CardLeft"
import CardRight from "../components/Cards/CardRight"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Hero />
      <CardLeft />
      <CardRight />
      <Footer />
    </div>
  )
}
