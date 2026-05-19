// src/sections/HistoryTimeline/HistoryTimeline.tsx

import { motion, type Variants } from "framer-motion";
import { FiCircle } from "react-icons/fi";
import { historyTimelineData } from "./historyTimelineData";

const fadeUp: Variants = {
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

const HistoryTimeline = () => {
  return (
    <section className="bg-[#ECECEC] px-6 md:px-10 lg:px-14 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* TOP */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <FiCircle className="text-[10px] fill-black text-black" />

            <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500 font-medium">
              {historyTimelineData.badge}
            </p>
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-4xl font-semibold leading-tight text-black md:text-5xl"
          >
            {historyTimelineData.title}
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="max-w-2xl mx-auto mt-5 text-sm leading-relaxed text-gray-500 md:text-base"
          >
            {historyTimelineData.description}
          </motion.p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-20">
          {/* LINE */}
          <div className="absolute left-0 hidden w-full h-px top-[102px] lg:block bg-black/10" />

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-4">
            {historyTimelineData.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                className="relative"
              >
                {/* DOT */}
                <div className="absolute left-0 z-10 hidden w-4 h-4 rounded-full lg:block top-[95px] bg-[#F5A300]" />

                <div className="mt-5 mb-12">
                  <h3 className="text-3xl font-semibold text-black">
                    {item.year}
                  </h3>

                  <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                    {item.label}
                  </p>
                </div>

                <p className="max-w-[250px] text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
