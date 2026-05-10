// src/sections/Benefits/Benefits.tsx

import { motion } from "framer-motion";
import { FiArrowRight, FiCircle } from "react-icons/fi";
import { benefitsData } from "./benefitsData";

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

const Benefits = () => {
  return (
    <section className="bg-[#F5F5F5] px-6 md:px-10 lg:px-14 py-20 overflow-hidden">
      <div className="grid items-center max-w-6xl grid-cols-1 gap-16 mx-auto lg:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* MAIN IMAGE */}
          <motion.div
            custom={0}
            variants={fadeUp}
            className="relative w-[320px] sm:w-[380px] lg:w-[430px] h-[520px]"
          >
            <img
              src={benefitsData.images.main}
              alt="Main"
              className="object-cover w-full h-full shadow-xl rounded-[24px]"
            />

            {/* TOP FLOATING IMAGE */}
            <motion.div
              custom={1}
              variants={fadeUp}
              className="absolute top-[-45px] right-[-10px] sm:right-[-40px] w-[150px] sm:w-[170px]"
            >
              <img
                src={benefitsData.images.top}
                alt="Top"
                className="object-cover w-full h-[120px] sm:h-[140px] rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* BOTTOM FLOATING IMAGE */}
            <motion.div
              custom={2}
              variants={fadeUp}
              className="absolute bottom-[-45px] left-[-10px] sm:left-[-20px] w-[160px] sm:w-[180px]"
            >
              <img
                src={benefitsData.images.bottom}
                alt="Bottom"
                className="object-cover w-full h-[120px] sm:h-[135px] rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* TAGS */}
            {benefitsData.tags.map((tag, index) => (
              <motion.div
                key={index}
                custom={index + 2}
                variants={fadeUp}
                className={`absolute ${tag.className}`}
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg">
                  <FiCircle className="text-[10px] fill-black text-black" />
                  <span className="text-[11px] font-medium text-gray-700 whitespace-nowrap">
                    {tag.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          {/* TOP */}
          <motion.div custom={0} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-4">
              <FiCircle className="text-[10px] fill-black text-black" />

              <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                {benefitsData.badge}
              </p>
            </div>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-black md:text-5xl">
              {benefitsData.title}
            </h2>

            <p className="max-w-lg mt-5 text-sm leading-relaxed text-gray-500 md:text-base">
              {benefitsData.description}
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="mt-10 space-y-5">
            {benefitsData.features.map((item, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="p-6 transition-all duration-300 bg-white shadow-sm rounded-3xl md:p-7 hover:shadow-lg"
              >
                <div className="flex gap-5">
                  <span className="text-xl font-semibold text-black">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <motion.button
            custom={5}
            variants={fadeUp}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="flex items-center gap-2 px-6 py-3 mt-10 text-sm font-medium text-white bg-black rounded-full"
          >
            More about us
            <FiArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;