// src/sections/LatestProperties/PropertyCard.tsx

import { motion } from "framer-motion";
import { FiMapPin, FiHome, FiDroplet, FiMaximize2 } from "react-icons/fi";

interface PropertyCardProps {
  property: any;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.3,
      }}
      className="overflow-hidden bg-white border border-gray-100 shadow-sm rounded-3xl group"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.5,
          }}
          src={property.image}
          alt={property.title}
          className="object-cover w-full h-[260px]"
        />

        {/* TAGS */}
        <div className="absolute flex gap-2 top-4 left-4">
          <span className="px-4 py-2 text-[11px] font-medium text-white bg-black rounded-full">
            {property.type}
          </span>

          <span className="px-4 py-2 text-[11px] font-medium text-black bg-white rounded-full">
            {property.status}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* LOCATION */}
        <div className="flex items-center gap-1 text-gray-400">
          <FiMapPin className="text-[13px]" />

          <p className="text-[12px]">{property.location}</p>
        </div>

        {/* TITLE */}
        <h3 className="mt-2 text-xl font-semibold text-black transition duration-300 group-hover:text-gray-700">
          {property.title}
        </h3>

        {/* INFO */}
        <div className="flex flex-wrap gap-4 mt-5 text-gray-500">
          <div className="flex items-center gap-1">
            <FiHome className="text-[14px]" />

            <span className="text-[12px]">Beds: {property.beds}</span>
          </div>

          <div className="flex items-center gap-1">
            <FiDroplet className="text-[14px]" />

            <span className="text-[12px]">Baths: {property.baths}</span>
          </div>

          <div className="flex items-center gap-1">
            <FiMaximize2 className="text-[14px]" />

            <span className="text-[12px]">Sq Ft: {property.sqft}</span>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <img
              src={property.agentImage}
              alt={property.agent}
              className="object-cover w-10 h-10 rounded-full"
            />

            <p className="text-sm font-medium text-gray-700">
              {property.agent}
            </p>
          </div>

          <h4 className="text-lg font-semibold text-black">{property.price}</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
