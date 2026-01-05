export type Project = {
  slug: string;
  title: string;
  category: string;
  cover: string;
};

export const projects: Project[] = [
  {
    slug: "editorial-portraits",
    title: "Editorial Portraits",
    category: "Portraits",
    cover: "/images/sample1.jpg",
  },
  {
    slug: "brand-campaign",
    title: "Brand Campaign",
    category: "Commercial",
    cover: "/images/sample2.jpg",
  },
];