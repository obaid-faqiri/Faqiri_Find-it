import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCircle } from "react-icons/fi";

import { latestPropertiesData } from "./latestPropertiesData";
import PropertyCard from "./PropertyCard";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (i: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const filters = ["View All", "Apartments", "Condos", "Houses", "Villas"];

const filterTypes: Record<string, string | null> = {
  "View All": null,
  Apartments: "Apartment",
  Condos: "Condo",
  Houses: "House",
  Villas: "Villa",
};

const MotionLink = motion(Link);

const LatestProperties = () => {
  const [activeFilter, setActiveFilter] = useState("View All");

  const filteredProperties = useMemo(() => {
    const selectedType = filterTypes[activeFilter];

    if (!selectedType) {
      return latestPropertiesData;
    }

    return latestPropertiesData.filter(
      (property) => property.type === selectedType
    );
  }, [activeFilter]);

  return (
    <section className="px-6 py-20 bg-[#F5F5F5] md:px-10 lg:px-14 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* TOP */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between"
        >
          {/* LEFT */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-2 mb-4"
            >
              <FiCircle className="text-[10px] fill-black text-black" />

              <p className="text-[12px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                Latest Properties
              </p>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-3xl font-semibold leading-tight text-black md:text-5xl"
            >
              Fresh on the market
            </motion.h2>
          </div>

          {/* RIGHT */}
          <motion.p
            custom={2}
            variants={fadeUp}
            className="max-w-md text-sm leading-relaxed text-gray-500 md:text-base"
          >
            Stay ahead of the curve with our newest listings — handpicked homes
            and investment recently added to the market.
          </motion.p>
        </motion.div>

        {/* FILTERS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mt-10"
        >
          {filters.map((filter, index) => {
            const isActive = activeFilter === filter;

            return (
              <motion.button
                key={filter}
                custom={index}
                variants={fadeUp}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                {filter}
              </motion.button>
            );
          })}
        </motion.div>

        {/* GRID */}
        {filteredProperties.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                custom={index + 1}
                variants={fadeUp}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="mt-12 text-sm text-center text-gray-500">
            No properties found for this category.
          </p>
        )}

        {/* BUTTON */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >
          <MotionLink
            to="/properties"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="py-3 text-sm font-medium text-white bg-black rounded-full px-7"
          >
            View all properties
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestProperties;