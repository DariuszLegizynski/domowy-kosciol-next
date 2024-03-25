import { useState } from "react"
import Link from "next/link"
import IconItems from '@/components/IconItems'

const IntroButton = () => {
  const [ isActive, setIsActive ] = useState(false)

  const changeColor = () => {
    setIsActive(current => !current)
  }

  return (
    <button className="rounded-full border-none w-8 bg-transparent focus:outline-none active:outline-none hover:shadow-gold" onClick={() => changeColor()}>
      <Link href="/">
        <IconItems type={"cross"}  fillColor={isActive ? "gold" : "black"} />
      </Link>
    </button>
  )
}

export default IntroButton