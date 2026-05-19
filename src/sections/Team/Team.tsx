import { motion, type Variants } from "framer-motion";
import { FiCircle } from "react-icons/fi";
import { teamData } from "./teamData";

const fadeUp : Variants = {
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

const Team = () => {
  return (
    <section className="bg-[#F5F5F5] px-6 md:px-10 lg:px-14 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* TOP */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-2 mb-4"
            >
              <FiCircle className="text-[10px] fill-black text-black" />

              <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                {teamData.badge}
              </p>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-4xl font-semibold leading-tight text-black md:text-5xl"
            >
              {teamData.title.split("\n").map((line, index) => (
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
            custom={2}
            variants={fadeUp}
            className="max-w-md"
          >
            <p className="text-sm leading-relaxed text-gray-500 md:text-base">
              {teamData.description}
            </p>
          </motion.div>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 gap-6 mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {teamData.members.map((member, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={fadeUp}
              whileHover={{
                y: -6,
              }}
              className="group"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-[320px] sm:h-[360px] lg:h-[340px] transition-all duration-700 group-hover:scale-105"
                />
              </div>

              {/* INFO */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-black">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;