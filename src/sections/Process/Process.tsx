import { motion, type Variants } from "framer-motion";
import { FiCircle, FiArrowRight } from "react-icons/fi";
import { processData } from "./processData";

const fadeUp :Variants = {
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

const Process = () => {
  return (
    <section className="bg-[#F5F5F5] px-6 md:px-10 lg:px-14 py-20 overflow-hidden">
      <div className="grid items-center max-w-6xl grid-cols-1 gap-16 mx-auto lg:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* TOP */}
          <motion.div custom={0} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-4">
              <FiCircle className="text-[10px] fill-black text-black" />

              <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                {processData.badge}
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-tight text-black md:text-5xl">
              {processData.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>

            <p className="max-w-md mt-5 text-sm leading-relaxed text-gray-500 md:text-base">
              {processData.description}
            </p>
          </motion.div>

          {/* STEPS */}
          <div className="mt-10 space-y-8">
            {processData.steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeUp}
                className="flex gap-5"
              >
                <span className="text-2xl font-medium text-gray-400">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-black">
                    {step.title}
                  </h3>

                  <p className="max-w-sm mt-2 text-sm leading-relaxed text-gray-500">
                    {step.description}
                  </p>
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
            {processData.buttonText}
            <FiArrowRight />
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
          className="overflow-hidden rounded-[24px]"
        >
          <img
            src={processData.image}
            alt="Process"
            className="object-cover w-full h-[320px] sm:h-[450px] lg:h-[520px] hover:scale-105 transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Process;