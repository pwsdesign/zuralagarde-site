export type ProjectCategory =
  | "Portraits"
  | "Weddings"
  | "Commercial"
  | "Travel";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  cover: string; // path to image in /public
  year: string;
  location?: string;
};

export const categories: ProjectCategory[] = [
  "Portraits",
  "Weddings",
  "Commercial",
  "Travel",
];

export const projects: Project[] = [
  {
    slug: "editorial-portraits",
    title: "Editorial Portraits",
    category: "Portraits",
    cover: "/work/editorial-portraits.jpeg",
    year: "2025",
    location: "Miami",
  },
  {
    slug: "brand-campaign",
    title: "Brand Campaign",
    category: "Commercial",
    cover: "/work/brand-campaign.jpeg",
    year: "2025",
    location: "New York City",
  },
  {
    slug: "destination-wedding",
    title: "Destination Wedding",
    category: "Weddings",
    cover: "/work/destination-wedding.jpeg",
    year: "2024",
    location: "Tulum, Mexico",
  },
  {
    slug: "travel-series",
    title: "Travel Series",
    category: "Travel",
    cover: "/work/travel-series.jpeg",
    year: "2024",
    location: "Portugal",
  },
];