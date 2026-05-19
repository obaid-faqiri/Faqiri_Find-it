// src/sections/FAQ/FAQ.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { faqData } from "./faqData";

const fadeUp : Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFFFFF] px-6 md:px-10 lg:px-14 py-20 overflow-hidden">
      <div className="grid items-stretch max-w-6xl grid-cols-1 gap-16 mx-auto lg:grid-cols-2">
        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center h-full"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="relative w-full h-full"
          >
            <img
              src={faqData.image}
              alt="FAQ"
              className="object-cover w-full h-full rounded-[24px] shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE FAQ LIST */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between w-full h-full"
        >
          {/* Heading */}
          <motion.div custom={0} variants={fadeUp}>
            <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500 font-medium mb-2">
              {faqData.badge}
            </p>
            <h2 className="text-3xl font-semibold text-black md:text-5xl">
              {faqData.title}
            </h2>
            <p className="max-w-lg mt-4 text-sm text-gray-500 md:text-base">
              {faqData.description}
            </p>
          </motion.div>

          {/* Questions */}
          <div className="mt-10 space-y-5">
            {faqData.questions.map((item, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeUp}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-white shadow-sm cursor-pointer rounded-2xl hover:shadow-md"
                onClick={() => toggleAnswer(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-black">
                    {item.question}
                  </h3>
                  <FiChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-sm text-gray-600">{item.answer}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
