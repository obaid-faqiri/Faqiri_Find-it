// src/sections/Benefits/benefitsData.ts

import mainImage from "../../assets/images/Home/7.jpg";
import topImage from "../../assets/images/Home/222.jpg";
import bottomImage from "../../assets/images/Home/6.jpg";

export const benefitsData = {
  badge: "OUR BENEFITS",
  title: "Building dreams, one home at a time",
  description:
    "Our mission goes beyond real estate — it’s about guiding you through one of life’s biggest milestones with heart, expertise, and unwavering commitment.",

  features: [
    {
      number: "01.",
      title: "Buy a new home",
      description:
        "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
    },
    {
      number: "02.",
      title: "Rent a home",
      description:
        "Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.",
    },
    {
      number: "03.",
      title: "Sell a home",
      description:
        "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
    },
  ],

  images: {
    main: mainImage,
    top: topImage,
    bottom: bottomImage,
  },

  tags: [
    {
      text: "Trusted Expertise",
      className: "top-[8%] right-[-20px]",
    },
    {
      text: "Tailored to You",
      className: "top-[32%] left-[-25px]",
    },
    {
      text: "Seamless Process",
      className: "top-[50%] right-[-40px]",
    },
    {
      text: "Strong Market Insights",
      className: "bottom-[28%] left-[-35px]",
    },
    {
      text: "After-Sales Support",
      className: "bottom-[-10px] left-[30%]",
    },
  ],
};