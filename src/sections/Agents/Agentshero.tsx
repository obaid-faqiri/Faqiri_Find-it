// src/sections/Agents/Agents.tsx

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { agentsData } from "./agentsData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const Agentshero = () => {
  return (
    <section className="px-6 pt-40 pb-10 md:px-10 lg:px-12 bg-[#FFFFFF]">
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-1 text-base tracking-widest text-gray-400 uppercase"
      >
        ⊕ Our hero
      </motion.p>

      <div className="flex items-start justify-between gap-8 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-lg text-4xl font-bold leading-tight text-gray-900"
        >
          Meet the experts behind your real estate journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-gray-500 max-w-[350px] leading-relaxed self-end"
        >
          Our hero combine local knowledge, market expertise, and a passion for
          helping clients find the right property.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {agentsData.map((agent, i) => (
          <motion.a
            key={i}
            href={agent.link}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="block overflow-hidden transition-shadow duration-300 bg-white shadow-sm rounded-2xl hover:shadow-md group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.img
                src={agent.image}
                alt={agent.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full h-[320px] object-cover object-top"
              />
            </div>

            {/* Info */}
            <div className="flex items-center justify-between px-4 py-4">
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {agent.name}
                </h3>
                <p className="mt-1 text-xs text-gray-400">{agent.email}</p>
              </div>

              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 transition-colors duration-300 bg-black rounded-full group-hover:bg-gray-700">
                <FiArrowRight className="text-sm text-white" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Agentshero;
