import React from "react"
import Hero from "../components/Hero/Hero"
import CardLeft from "../components/Cards/CardLeft"
import CardRight from "../components/Cards/CardRight"

export default function Home() {
  return (
    <div>
      <Hero />
      <CardLeft />
      <CardRight />
    </div>
  )
}
