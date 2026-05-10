// src/sections/AboutIntro/aboutIntroData.ts

import about1 from "../../assets/images/1.png";
import about2 from "../../assets/images/2.jpg";

export const aboutIntroData = {
  badge: "ABOUT US",

  title: "Building dreams,\none home at a time",

  description:
    "We’re more than real estate agents — we’re your trusted partners, helping you find the right property with confidence and ease.",

  buttonText: "Contact us",

  images: {
    left: about1,
    right: about2,
  },

  stats: [
    {
      number: "$150M+",
      title: "Properties sold",
      description:
        "Over $150M in sales, helping clients find homes and investments with ease and confidence.",
    },

    {
      number: "500+",
      title: "Happy clients",
      description:
        "More than 500 satisfied clients trust us to make their real estate journey smooth and successful.",
    },

    {
      number: "20+",
      title: "Years of expertise",
      description:
        "Over 20 years of experience guiding clients with market insight and professional advice.",
    },
  ],
};