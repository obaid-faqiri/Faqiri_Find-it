import { featuredListingsData } from "./featuredListingsData";

type Property = {
  image: string;
  name: string;
  type: string;
  status: string;
  location: string;
  price: string;
};

const PropertyCard = ({
  property,
  tall,
}: {
  property: Property;
  tall?: boolean;
}) => (
  <div className="overflow-hidden transition-all duration-300 bg-white shadow-md group rounded-xl hover:shadow-lg">
    <div className="relative overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className={`object-cover w-full ${
          tall ? "h-56" : "h-44"
        } transition-transform duration-700 ease-out scale-100 group-hover:scale-105`}
      />

      <div className="absolute flex gap-2 top-3 left-3">
        <span className="px-4 py-2 text-xs text-white bg-black rounded-full">
          {property.type}
        </span>

        <span className="px-4 py-2 text-xs text-black bg-white border border-black rounded-full">
          {property.status}
        </span>
      </div>
    </div>

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

        <p className="text-base text-gray-500 max-w-[350px] leading-relaxed">
          From modern city apartments to spacious family homes, find the one
          that feels just right.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {firstRow.map((property, i) => (
          <PropertyCard key={i} property={property} tall />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {secondRow.map((property, i) => (
          <PropertyCard key={i} property={property} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;
