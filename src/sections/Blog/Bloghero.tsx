import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { blogData } from "./blogData";

const fadeUp : Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

const Bloghero = () => {
  return (
    <section className="px-6 pt-40 pb-24 md:px-10 lg:px-12 bg-[#FFFFFF]">
      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-1 text-base tracking-widest text-gray-400 uppercase"
      >
        ⊕ Blog
      </motion.p>

      <div className="flex items-start justify-between gap-8 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-lg text-4xl font-bold leading-tight text-gray-900"
        >
          Insights & real estate tips
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-gray-500 max-w-[350px] leading-relaxed self-end"
        >
          Our agents combine local knowledge, market expertise, and a passion
          for helping clients find the right property.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blogData.map((post, i) => (
          <motion.a
            key={i}
            href={post.link}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="block overflow-hidden transition-shadow duration-300 bg-white shadow-sm cursor-pointer rounded-xl hover:shadow-md"
          >
            <div className="overflow-hidden">
              <motion.img
                src={post.image}
                alt={post.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="object-cover w-full h-44"
              />
            </div>

            <div className="px-4 py-3">
              <h3 className="text-base font-semibold leading-snug text-gray-900">
                {post.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-400 line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Bloghero;
