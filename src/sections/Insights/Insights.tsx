// src/sections/Insights/Insights.tsx

import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { insightsData } from "./insightsData";

type InsightCardProps = {
  item: {
    image: string;
    title: string;
    description: string;
    category: string;
    link: string;
  };
  index: number;
};

const fadeUp = {
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

const InsightCard = ({ item, index }: InsightCardProps) => {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      whileHover={{
        y: -6,
      }}
      className="group"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={item.image}
          alt={item.title}
          className="
            h-[250px]
            w-full
            object-cover
            transition-all
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="px-2 pt-5">
        {/* Category */}
        <p
          className="
            mb-2
            text-xs
            font-medium
            uppercase
            tracking-[0.2em]
            text-gray-400
          "
        >
          {item.category}
        </p>

        {/* Title */}
        <div className="flex items-start justify-between gap-3">
          <h3
            className="text-lg font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-black"
          >
            {item.title}
          </h3>

          <span
            className="flex items-center justify-center mt-1 transition-all duration-300 border border-gray-200 rounded-full h-9 w-9 group-hover:bg-black group-hover:text-white"
          >
            <HiArrowUpRight className="text-lg" />
          </span>
        </div>

        {/* Description */}
        <p
          className="mt-3 text-sm leading-6 text-gray-500 "
        >
          {item.description}
        </p>
      </div>
    </motion.article>
  );
};

const Insights = () => {
  return (
    <section className="bg-[#F7F7F7] px-4 py-16 sm:px-6 lg:px-12 xl:px-20 xl:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className="flex flex-col gap-6 mb-14 lg:flex-row lg:items-start lg:justify-between"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <p
              className="
                mb-3
                text-xs
                font-medium
                uppercase
                tracking-[0.3em]
                text-gray-400
              "
            >
              ⊕ Latest News
            </p>

            <h2
              className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl"
            >
              Insights & Updates
            </h2>
          </motion.div>

          {/* Right */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="max-w-md text-sm leading-7 text-gray-500 sm:text-base"
          >
            Stay informed with expert tips, market trends, and
            property advice to guide your real estate journey.
          </motion.p>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {insightsData.map((item, index) => (
            <InsightCard
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

export default Insights;