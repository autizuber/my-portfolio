import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full h-screen relative mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[170px] sm:top-[100px] max-w-7xl m-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="w-4 h-4 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Zuber</span>
          </h1>
          <p className={` text-xl text-white-100 mt-2`}>
            👨‍💻 "Passionate Web Developer focused{" "}
            <br className=" hidden sm:block" /> on 🌐 creating responsive,
            user-friendly <br className=" hidden sm:block" /> interfaces with
            clean code."
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className=" absolute xs:bottom-1 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-2"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
