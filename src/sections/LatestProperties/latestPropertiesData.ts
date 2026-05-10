// src/sections/LatestProperties/latestPropertiesData.ts

import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpeg";
import img4 from "../../assets/images/2.jpg";
import img5 from "../../assets/images/1.png";
import img6 from "../../assets/images/3.jpeg";

import agent1 from "../../assets/images/logo.png";
import agent2 from "../../assets/images/2.jpg";
import agent3 from "../../assets/images/3.jpeg";

export const latestPropertiesData = [
  {
    id: 1,
    image: img1,
    type: "Apartment",
    status: "Rent",
    location: "Staten Island",
    title: "South Sunlight Apartment",
    beds: 4,
    baths: 3,
    sqft: 150,
    agent: "Rachel Grey",
    agentImage: agent1,
    price: "$1,200",
  },

  {
    id: 2,
    image: img2,
    type: "House",
    status: "Rent",
    location: "Queens",
    title: "Marble House",
    beds: 4,
    baths: 3,
    sqft: 250,
    agent: "Steven Prior",
    agentImage: agent2,
    price: "$550,000",
  },

  {
    id: 3,
    image: img3,
    type: "Apartment",
    status: "Rent",
    location: "Manhattan",
    title: "Family Mansion",
    beds: 2,
    baths: 2,
    sqft: 150,
    agent: "Rachel Grey",
    agentImage: agent1,
    price: "$2,200",
  },

  {
    id: 4,
    image: img4,
    type: "Apartment",
    status: "Rent",
    location: "Staten Island",
    title: "East Sunlight Apartment",
    beds: 4,
    baths: 3,
    sqft: 150,
    agent: "Steven Prior",
    agentImage: agent2,
    price: "$1,200",
  },

  {
    id: 5,
    image: img5,
    type: "House",
    status: "Sale",
    location: "Queens",
    title: "South Side Garden",
    beds: 4,
    baths: 3,
    sqft: 250,
    agent: "Rachel Grey",
    agentImage: agent1,
    price: "$550,000",
  },

  {
    id: 6,
    image: img6,
    type: "Apartment",
    status: "Rent",
    location: "Manhattan",
    title: "Modern Family Home",
    beds: 2,
    baths: 2,
    sqft: 150,
    agent: "Rachel Grey",
    agentImage: agent3,
    price: "$2,200",
  },
];