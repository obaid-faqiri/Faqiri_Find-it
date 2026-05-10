// src/sections/Locations/Locations.tsx

import { motion } from "framer-motion";
import { FiCircle } from "react-icons/fi";
import { locationsData } from "./locationsData";
import LocationCard from "./LocationCard";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Locations = () => {
  const firstRow = locationsData.slice(0, 3);
  const secondRow = locationsData.slice(3, 5);

  return (
    <section className="px-6 py-20 bg-[#F5F5F5] md:px-10 lg:px-14 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* TOP CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <FiCircle className="text-[10px] fill-black text-black" />

            <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500 font-medium">
              Explore Cities
            </p>
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-3xl font-semibold leading-tight text-black md:text-5xl"
          >
            Our location for you
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="max-w-xl mx-auto mt-5 text-sm leading-relaxed text-gray-500 md:text-base"
          >
            Each neighborhood has its own story. Discover the areas that
            match your lifestyle — whether you seek vibrant city energy,
            peaceful family communities, or exclusive luxury living.
          </motion.p>
        </motion.div>

        {/* FIRST ROW */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 mt-14 md:grid-cols-2 lg:grid-cols-3"
        >
          {firstRow.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index + 1}
              variants={fadeUp}
            >
              <LocationCard
                title={item.title}
                properties={item.properties}
                image={item.image}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* SECOND ROW */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2"
        >
          {secondRow.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index + 4}
              variants={fadeUp}
            >
              <LocationCard
                title={item.title}
                properties={item.properties}
                image={item.image}
                large
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
