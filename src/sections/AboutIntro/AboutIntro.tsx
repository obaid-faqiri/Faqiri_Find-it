// src/sections/AboutIntro/AboutIntro.tsx

import { motion } from "framer-motion";
import { FiCircle } from "react-icons/fi";
import { aboutIntroData } from "./aboutIntroData";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (i: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const AboutIntro = () => {
  return (
    <section className="bg-[#F5F5F5] px-6 md:px-10 lg:px-14 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* TOP */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-2 mb-5"
            >
              <FiCircle className="text-[10px] fill-black text-black" />

              <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                {aboutIntroData.badge}
              </p>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-4xl font-semibold leading-tight text-black md:text-6xl"
            >
              {aboutIntroData.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </motion.h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-md"
          >
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-sm leading-relaxed text-gray-500 md:text-base"
            >
              {aboutIntroData.description}
            </motion.p>

            <motion.button
              custom={3}
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="px-6 py-3 mt-6 text-sm font-medium text-white bg-black rounded-full"
            >
              {aboutIntroData.buttonText}
            </motion.button>
          </motion.div>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-1 gap-4 mt-14 lg:grid-cols-[0.7fr_1.3fr]">
          {/* LEFT IMAGE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="overflow-hidden rounded-[24px]"
          >
            <img
              src={aboutIntroData.images.left}
              alt="Interior"
              className="object-cover w-full h-[300px] sm:h-[420px] lg:h-[500px] hover:scale-105 transition-all duration-700"
            />
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="overflow-hidden rounded-[24px]"
          >
            <img
              src={aboutIntroData.images.right}
              alt="House"
              className="object-cover w-full h-[300px] sm:h-[420px] lg:h-[500px] hover:scale-105 transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 gap-10 mt-16 md:grid-cols-3">
          {aboutIntroData.stats.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={fadeUp}
              className="relative"
            >
              {/* BORDER */}
              {index !== 2 && (
                <div className="absolute top-0 right-0 hidden w-px h-full md:block bg-black/10" />
              )}

              <h3 className="text-4xl font-semibold text-black md:text-5xl">
                {item.number}
              </h3>

              <h4 className="mt-4 text-sm font-medium text-black">
                {item.title}
              </h4>

              <p className="max-w-[290px] mt-3 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;