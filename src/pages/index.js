import React from "react"

export default function Home() {
  return (
    <div className="p-8">
      <button className="py-4 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white">
        Button One
      </button>
      <p>
        <button className="py-4 px-4 bg-green-600 hover:bg-green-700 rounded text-white">
          Button Two
        </button>
      </p>
    </div>
  )
}
