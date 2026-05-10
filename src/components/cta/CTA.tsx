// src/components/CTA.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ctaData } from "./ctaData"; // Import the CTA data

type CTAProps = {
  section: "hero" | "featured" | "process" | "footer";
};

const CTA: React.FC<CTAProps> = ({ section }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 cta-container">
      {ctaData
        .filter((cta) => cta.section === section)
        .map((cta) => (
          <Link
            key={cta.id}
            to={cta.link}
            className={`
              text-center font-semibold transition-all
              ${
                cta.variant === "primary"
                  ? "bg-blue-500 text-white px-6 py-3 rounded-md"
                  : cta.variant === "secondary"
                  ? "bg-white text-blue-500 border-2 border-blue-500 px-6 py-3 rounded-md"
                  : "border border-black text-black px-6 py-3 rounded-md"
              }
              hover:opacity-90
            `}
          >
            {cta.text}
          </Link>
        ))}
    </div>
  );
};

export default CTA;