// src/components/cta/ctaData.ts

export type CtaType = {
  id: string;
  text: string;
  link: string;
  variant: "primary" | "secondary" | "outline";
  section: "hero" | "featured" | "process" | "footer";
};

export const ctaData: CtaType[] = [
  {
    id: "hero-explore",
    text: "Explore properties",
    link: "/properties",
    variant: "primary",
    section: "hero",
  },
  {
    id: "hero-book-visit",
    text: "Book a visit",
    link: "/contact",
    variant: "outline",
    section: "hero",
  },
  {
    id: "featured-view-all",
    text: "View All Properties",
    link: "/properties",
    variant: "outline",
    section: "featured",
  },
  {
    id: "process-start-journey",
    text: "Start your journey",
    link: "/contact",
    variant: "primary",
    section: "process",
  },
  {
    id: "footer-schedule",
    text: "Schedule a consultation",
    link: "/contact",
    variant: "primary",
    section: "footer",
  },
];