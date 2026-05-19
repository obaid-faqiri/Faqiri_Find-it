import { motion, type Variants } from "framer-motion";
import { FiHome, FiMapPin, FiLayers } from "react-icons/fi";
import { propertyData } from "./propertyData";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const Property = () => {
  return (
    <section className="bg-[#FFFFFF] px-6 pt-40 pb-20 md:px-10 lg:px-14">
      <div className="flex flex-col items-start gap-12 mx-auto lg:flex-row max-w-7xl">
        {/* LEFT SIDE - Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 min-w-0"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {propertyData.listings.map((property, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-white shadow-sm rounded-3xl"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-[240px] object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{property.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {property.location}
                  </p>
                  <h4 className="mt-4 text-2xl font-bold">{property.price}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE - motion.div just handles animation, NOT sticky */}
        <div className="w-full lg:w-[340px] flex-shrink-0 self-start sticky top-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <div className="bg-[#F5F5F5] rounded-3xl p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                {propertyData.badge}
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                {propertyData.title}
              </h2>

              <p className="mt-4 text-gray-600">{propertyData.description}</p>

              <div className="mt-8 space-y-8">
                <div>
                  <h4 className="flex items-center gap-2 mb-4 font-semibold">
                    <FiHome /> Type
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {propertyData.sidebar.types.map((item, i) => (
                      <button key={i} className="px-4 py-2 bg-white rounded-full">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 mb-4 font-semibold">
                    <FiLayers /> Category
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {propertyData.sidebar.categories.map((item, i) => (
                      <button key={i} className="px-4 py-2 bg-white rounded-full">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 mb-4 font-semibold">
                    <FiMapPin /> Location
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {propertyData.sidebar.locations.map((item, i) => (
                      <button key={i} className="px-4 py-2 bg-white rounded-full">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Property;