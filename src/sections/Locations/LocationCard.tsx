// src/sections/Locations/LocationCard.tsx

interface LocationCardProps {
  title: string;
  properties: string;
  image: string;
  large?: boolean;
}

const LocationCard = ({
  title,
  properties,
  image,
  large,
}: LocationCardProps) => {
  return (
    <div className="cursor-pointer group">
      {/* IMAGE */}
      <div
        className={`overflow-hidden rounded-2xl ${
          large
            ? "h-[260px] sm:h-[300px] md:h-[320px]"
            : "h-[240px] sm:h-[260px] md:h-[280px]"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.08]"
        />
      </div>

      {/* CONTENT */}
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-black">{title}</h3>

        <p className="mt-1 text-sm text-gray-500">{properties}</p>
      </div>
    </div>
  );
};

export default LocationCard;
