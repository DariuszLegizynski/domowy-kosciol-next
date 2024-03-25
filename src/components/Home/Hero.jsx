import { motion } from "framer-motion"

export const Hero = () => {
  return (
    <motion.article
      className="hero w-3/5 h-3/5 flex flex-col p-3 text-white border-3 border-gradient-to-b border-white-primary relative"
      initial={{ height: 0 }}
      animate={{ height: "60vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <section className="hero__text z-10">
        <h1>Drogi<br/>Przybyszu,</h1>
        <h3>witaj na stronie</h3>
        <h2>Domowego Kościoła</h2>
        <p className="text-primary">w Wiedniu</p>
      </section>
      <motion.section
        className="absolute z-0 w-64 h-auto bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
      >
        <img src="/images/marriage.png" alt="image of a couple in love" />
      </motion.section>
    </motion.article>
  )
}

export default Hero