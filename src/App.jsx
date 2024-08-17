import { useState } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <HeroSection />
      </div>
    </>
  )
}

export default App
