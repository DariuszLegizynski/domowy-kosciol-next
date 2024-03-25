import { motion } from "framer-motion"

export const Hero = () => {
  return (
    <motion.article
      className="hero w-[60vw] h-[60vh] flex flex-col p-3 text-white hero-border relative"
      initial={{ height: 0 }}
      animate={{ height: "60vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <section className="z-10">
        <h1>Drogi<br/>Przybyszu,</h1>
        <h3 className='py-3'>witaj na stronie</h3>
        <h2>Domowego Kościoła</h2>
        <p>w Wiedniu</p>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
      >
        <img
          className="absolute z-[1] w-64 h-auto bottom-0 left-1/2 transform hero-img-transform"
          src="/images/marriage.png"
          alt="image of a couple in love"
        />
      </motion.section>
    </motion.article>
  )
}

export default Hero