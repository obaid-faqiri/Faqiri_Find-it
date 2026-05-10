// src/sections/FeaturedListings/FeaturedListings.tsx
import React from "react";
import { featuredListingsData } from "./featuredListingsData"; // Import data

const PropertyCard = ({
  property,
  tall,
}: {
  property: any;
  tall?: boolean;
}) => (
  <div className="overflow-hidden transition-all duration-300 transform bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-lg">
    <div className="relative">
      <img
        src={property.image}
        alt={property.name}
        className={`object-cover w-full ${tall ? "h-56" : "h-44"} transition-all duration-300 hover:opacity-80`}
      />

      {/* Correct Tag Positioning */}
      <div className="absolute flex gap-2 top-3 left-3">
        {/* First tag: Black background, White text */}
        <span className="px-4 py-2 text-xs text-white bg-black rounded-full">
          {property.type}
        </span>

        {/* Second tag: White background, Black text, Border */}
        <span className="px-4 py-2 text-xs text-black bg-white border border-black rounded-full">
          {property.status}
        </span>
      </div>
    </div>

    {/* Property Details */}
    <div className="px-4 py-3 bg-white">
      <h3 className="text-base font-semibold text-gray-900">{property.name}</h3>
      <p className="mt-1 text-xs text-gray-400">{property.location}</p>
      <p className="mt-2 text-lg font-bold text-gray-900">{property.price}</p>
    </div>
  </div>
);

const FeaturedListings = () => {
  const firstRow = featuredListingsData.slice(0, 2);
  const secondRow = featuredListingsData.slice(2, 5);

  return (
    <section className="px-12 py-10 bg-[#FFFFFF]">
      <p className="mb-1 text-base tracking-widest text-gray-400 uppercase">
        ⊕ Featured Properties
      </p>
      <div className="flex items-start justify-between mb-8">
        <h2 className="max-w-lg text-4xl font-bold leading-tight text-gray-900">
          Explore our featured listings
        </h2>
        <p className="text-base text-gray-500 max-w-[350px]  leading-relaxed">
          From modern city apartments to spacious family homes, find the one
          that feels just right.
        </p>
      </div>

      {/* Row 1: 2 cards */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {firstRow.map((property, i) => (
          <PropertyCard key={i} property={property} tall />
        ))}
      </div>

      {/* Row 2: 3 cards */}
      <div className="grid grid-cols-3 gap-4">
        {secondRow.map((property, i) => (
          <PropertyCard key={i} property={property} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;
