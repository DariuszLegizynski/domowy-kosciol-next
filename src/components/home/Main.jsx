import { useState } from 'react'
import Link from "next/link"

// components
import Hero from "@/components/home/Hero"
import Header from '@/components/Header'
import IconItems from '@/components/IconItems'

const Main = () => {
  const [ isActive, setIsActive ] = useState(false)

  const handleActive = () => {
    setIsActive(current => !current)
  }

  return (
    <article className="relative grid grid-rows-[1fr_auto] w-full h-svh p-[0.4rem] overflow-hidden">
      <div className={`absolute top-0 left-0 h-0 w-0 transition-height duration-500 ease-in-out transition-width delay-500 ${isActive ? "absolute top-0 left-0 bg-primary h-1/2 w-full z-[-1]" : ""}`} />
      {isActive && <Header isActive={isActive} />}
      <div className="grid grid-cols-[2rem_1fr_2rem] items-center justify-items-center">
        {isActive && <Link className="rotate-[270deg]" href="/fotogallery"><h3>Zd<span className={isActive ? "text-white" : ""}>jęcia</span></h3></Link>}
        <section className={isActive ? "" : "invisible"}>
          {isActive && <Link href="/about"><Hero /></Link>}
        </section>
        <section className={`absolute flex flex-col items-center w-32 cursor-pointer transition-transform duration-1000 ease-in-out z-10 ${isActive ? "transform move-fish" : ""}`} onClick={() => handleActive(isActive)}>
          <IconItems type="fish" animationType="rotate" width={isActive ? "2rem" : null} height={isActive ? "2rem" : null} />
          <span className={`pt-4 ${isActive ? "invisible" : ""}`}>kliknij</span>
        </section>
        {isActive && <Link className="rotate-90 translate-y-1" href="/news"><h3><span className={isActive ? "text-white" : ""}>Aktual</span>ności</h3></Link>}
      </div>
      <footer className="grid grid-cols-[auto_auto] items-center justify-evenly">
        {isActive && <Link href="/about"><h3>O Nas</h3></Link>}
        {isActive && <Link href="/rules"><h3>Nasze zasady</h3></Link>}
      </footer>
    </article>
  )
}

export default Main