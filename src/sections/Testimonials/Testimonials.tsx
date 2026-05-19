// src/sections/Testimonials/Testimonials.tsx
import { motion, type Variants } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { testimonialsData } from "./testimonialsData";

type TestimonialCardProps = {
  testimonial: {
    name: string;
    role: string;
    image: string;
    review: string;
  };
  index: number;
};

const fadeUp : Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TestimonialCard = ({
  testimonial,
  index,
}: TestimonialCardProps) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      whileHover={{
        y: -6,
      }}
      className="p-5 transition-all duration-300 bg-white border border-gray-100 shadow-sm group rounded-2xl hover:border-gray-200 hover:shadow-xl"
    >
      {/* Stars */}
      <div className="mb-5 flex items-center gap-1 text-[#F5B301]">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className="text-[11px]" />
        ))}
      </div>

      {/* Review */}
      <p
        className="
          min-h-[110px]
          text-sm
          leading-6
          text-gray-500
        "
      >
        {testimonial.review}
      </p>

      {/* User */}
      <div className="flex items-center gap-3 mt-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="object-cover rounded-full h-11 w-11"
        />

        <div>
          <h4 className="text-sm font-semibold text-gray-900">
            {testimonial.name}
          </h4>

          <p className="text-xs text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-[#F7F7F7] px-4 py-16 sm:px-6 lg:px-12 xl:px-20 xl:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-2xl mx-auto text-center mb-14"
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
            ⊕ Testimonials
          </p>

          <h2
            className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl"
          >
            What our clients say
          </h2>

          <p
            className="max-w-lg mx-auto mt-4 text-sm leading-7 text-gray-500 sm:text-base"
          >
            Real stories from homeowners and investors who trusted us
            to guide their real estate journey.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;