import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

import SectionWraper from "../hoc/SectionWraper";

const ServicesCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>introducation</p>
        <h1 className={`${styles.sectionHeadText}`}>Overview</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-[17px] text-secondary mt-4 leading-[30px] max-w-3xl"
      >
        I have a strong foundation in web development technologies, including
        HTML5, CSS3, JavaScript, and frameworks such as React.js and Node.js.
        I've applied these skills in various personal and academic projects,
        developing responsive and interactive web applications.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServicesCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(About, "about");
