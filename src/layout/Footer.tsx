import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

import footerBg from "../assets/images/Home/24.jpg";

const footerLinks = {
  contact: [
    "123 Main Street, Suite 456, Cityville, ST 78910",
    "(123) 456-7890",
    "(987) 654-3210",
    "info@findit.com",
  ],

  company: [
    "All Properties",
    "Property for Buy",
    "Property for Rent",
    "Our Agents",
  ],

  quick: ["About Us", "Contact Us", "Latest News", "FAQs"],
};

const Footer = () => {
  return (
    <footer className="overflow-hidden text-white bg-black">
      {/* TOP CTA CARD */}
      <section className="px-4 pt-12 sm:px-6 lg:px-12 xl:px-20 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[24px] lg:rounded-[32px] h-[300px] sm:h-[360px] lg:h-[390px]"
        >
          {/* BACKGROUND IMAGE */}
          <img
            src={footerBg}
            alt="Dream Home"
            className="absolute inset-0 object-cover w-full h-full"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/45" />

          {/* LIGHT GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              Ready to find your dream home?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-2xl mt-4 text-sm leading-relaxed text-white/80 sm:text-base"
            >
              Whether you’re buying, selling, or investing, our team is here
              to guide you every step of the way. Let’s make your next move a
              successful one.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 mt-8 text-sm font-medium text-black transition-all duration-300 bg-white rounded-full hover:bg-neutral-200"
            >
              Schedule a consultation
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER LINKS */}
      <section className="px-4 pb-8 sm:px-6 lg:px-12 xl:px-20 pt-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 text-sm font-semibold tracking-wide text-white">
              Contact Us
            </h3>

            <div className="space-y-3">
              {footerLinks.contact.map((item, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed text-white/65"
                >
                  {item}
                </p>
              ))}
            </div>
          </motion.div>

          {/* COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 text-sm font-semibold tracking-wide text-white">
              Our Company
            </h3>

            <div className="space-y-3">
              {footerLinks.company.map((item, i) => (
                <a
                  key={i}
                  href="/"
                  className="block text-sm transition-all duration-300 text-white/65 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 text-sm font-semibold tracking-wide text-white">
              Quick Links
            </h3>

            <div className="space-y-3">
              {footerLinks.quick.map((item, i) => (
                <a
                  key={i}
                  href="/"
                  className="block text-sm transition-all duration-300 text-white/65 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 text-sm font-semibold tracking-wide text-white">
              Join Our Newsletter
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-white/65">
              Sign up for updates on our latest news.
            </p>

            {/* INPUT */}
            <div className="flex items-center overflow-hidden border rounded-full border-white/15 bg-white/5 backdrop-blur-md">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="w-full px-5 py-3 text-sm text-white bg-transparent outline-none placeholder:text-white/40"
              />

              <button className="flex items-center justify-center w-10 h-10 mr-1 transition-all duration-300 bg-white rounded-full hover:scale-105">
                <FaArrowRight className="text-xs text-black" />
              </button>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-white/45">
              By subscribing you agree to the Terms of Service and Privacy
              Policy.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-start justify-between gap-5 pt-8 mt-10 border-t md:flex-row md:items-center border-white/10">
          <p className="text-xs tracking-wide text-white/45">
            Copyright © 2025 — Findit by Mantracore. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <p className="text-xs text-white/45">Follow us:</p>

            <div className="flex items-center gap-4">
              <a
                href="/"
                className="transition-all duration-300 text-white/65 hover:text-white hover:-translate-y-1"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="/"
                className="transition-all duration-300 text-white/65 hover:text-white hover:-translate-y-1"
              >
                <FaFacebookF size={13} />
              </a>

              <a
                href="/"
                className="transition-all duration-300 text-white/65 hover:text-white hover:-translate-y-1"
              >
                <FaYoutube size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;