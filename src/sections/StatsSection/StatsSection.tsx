// src/sections/StatsSection/StatsSection.tsx

import { motion, type Variants } from "framer-motion";
import { statsData } from "./statsData";

type StatCardProps = {
  item: {
    number: string;
    title: string;
    description: string;
  };
  index: number;
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const StatCard = ({ item, index }: StatCardProps) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      whileHover={{
        y: -4,
      }}
      className="pb-8 transition-all duration-300 border-b border-white/10 md:border-b-0 md:border-r md:pr-8 last:border-r-0"
    >
      {/* Number */}
      <h2
        className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
      >
        {item.number}
      </h2>

      {/* Title */}
      <h4
        className="mt-4 text-sm font-medium text-white "
      >
        {item.title}
      </h4>

      {/* Description */}
      <p
        className="
          mt-3
          max-w-[280px]
          text-sm
          leading-6
          text-gray-400
        "
      >
        {item.description}
      </p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="px-4 bg-black py-14 sm:px-6 lg:px-12 xl:px-20 xl:py-16">
      <div className="mx-auto max-w-7xl">
        <div
          className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
        >
          {statsData.map((item, index) => (
            <StatCard
              key={index}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;