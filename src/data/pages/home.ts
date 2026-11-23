import { generalFaqs, homeFaqOrder } from "../faqs";

export const home = {
  path: "/",
  title: "Turf Supplier Sydney | Family-Owned Turf Farm | Arrow Turf",
  description: "Sydney turf supplier with 45+ years of family farming. Buffalo, Kikuyu & couch turf cut to order on our Hawkesbury farm, delivered or installed. Get a free quote.",
  ogImage: "2026/05/Photo-31-10-2024-9-36-17-AM-1536x2048-1.webp",
  hero: {
    eyebrow: "Turf supplier Sydney",
    h1: "Premium instant turf supplier in Sydney",
    lead: "Enjoy the freshest, greenest, and most vibrant-looking grass surfaces instantly with our affordable premium-quality turf solutions for residential and commercial use.",
    image: "2026/07/002-cover-photo-1536x672-1.webp",
  },
  stats: [
    { value: "Our own farm", label: "Grown on the Hawkesbury River", count: null },
    { value: "Cut to order", label: "Ready within a day or two", count: null },
    { value: "45+ years", label: "Family owned and operated", count: 45 },
  ],
  projects: {
    eyebrow: "What have we done?",
    heading: "Our completed projects",
    intro: "Take a closer look at the different projects we have completed for households and businesses in and [around Sydney](https://maps.app.goo.gl/uE4DkVwdd2g9nsHBA). See the quality of the products and work we provide to know why we are trusted by home and business owners as well as residential and commercial property managers, builders, developers, and real estate agents.",
    images: [
      { src: "2026/07/1.webp", alt: "Completed Arrow Turf lawn in Sydney" },
      { src: "2026/07/Photo-31-10-2024-9-36-17-AM-1536x2048-1.webp", alt: "Fresh turf being laid" },
      { src: "2026/07/2.webp", alt: "Completed Arrow Turf lawn in Sydney" },
      { src: "2026/07/Photo-23-6-2023-9-48-59-AM-1536x2048-1.webp", alt: "Turf rolls at the Arrow Turf farm" },
      { src: "2026/07/3.webp", alt: "Completed Arrow Turf lawn in Sydney" },
      { src: "2026/07/4.webp", alt: "Completed Arrow Turf lawn in Sydney" },
      { src: "2026/07/Photo-17-4-2024-7-00-51-AM-1536x2048-1.webp", alt: "Turf installation in progress" },
      { src: "2026/07/Photo-24-10-2023-7-25-00-AM-1767x2048-1.webp", alt: "Freshly harvested turf" },
      { src: "2026/07/5.webp", alt: "Completed Arrow Turf lawn in Sydney" },
      { src: "2026/07/6.webp", alt: "Completed Arrow Turf lawn in Sydney" },
      { src: "2026/07/Photo-10-1-2025-1-51-48-PM.webp", alt: "Established Arrow Turf lawn" },
      { src: "2026/07/Photo-16-11-2022-8-16-14-AM-1536x2048-1.webp", alt: "Arrow Turf lawn installation in Sydney" },
    ],
  },
  varieties: {
    eyebrow: "What are your options?",
    heading: "Our turf varieties",
    intro: "Take your pick from our range of affordable, premium-quality instant turf solutions designed and developed for residential and commercial use. Discover our turf varieties and pick the option that suits your budget and design requirements. You can also trust our experts to provide unbiased professional advice about the best choices for your needs. Once you have chosen, we can deliver and install it for you.",
  },
  about: {
    eyebrow: "Who are we?",
    heading: "A local family-owned turf farm in Sydney",
    body: `We are Arrow Turf, a local family-owned and operated turf farm that supplies and installs affordable, premium-quality instant turf solutions for all types of residential and commercial properties in Sydney.

Whether you want a new lawn for your home or need to redo the landscapes around your office, we can provide the best natural grass to suit your budget and design requirements.

Known for delivering top-tier quality products and workmanship, we are trusted by home and business owners, residential and commercial property managers, builders, developers, and real estate agents in Sydney. With the best natural grass our industry has to offer installed by highly skilled and experienced specialists, you can trust us with your home and business.`,
    image: "2026/07/who-are-we.webp",
    imageAlt: "The Arrow Turf family turf farm at Cornwallis",
  },
  company: {
    eyebrow: "Turf company Sydney",
    heading: "Your local turf company Sydney homes & businesses rely on",
    body: `As a family-run turf company Sydney locals have trusted for years, we bring together everything you need in one place. Our [turf supply Sydney](/turf-delivery-sydney/) wide service means fresh, farm-cut grass ready whenever your project calls for it, from small home lawns to large commercial rollouts. If you’d rather leave the hard work to the experts, our [turf installation Sydney](/turf-installation-sydney/) crews handle everything from site prep to the final lay, so your new lawn is ready to enjoy from day one.

And for customers who prefer to do things themselves, our [turf pick-up Sydney](/turf-pickup-sydney/) option lets you collect your order straight from our Hawkesbury River farm at a time that suits you. However you’d like it delivered, we make it simple to get premium natural grass onto your property, backed by honest advice every step of the way.`,
    image: "2026/07/Photo-15-12-2022-10-33-17-AM-1536x2048-1.webp",
    imageAlt: "Farm-cut turf ready for delivery across Sydney",
  },
  why: { eyebrow: "Why choose us?", heading: "Why choose Arrow Turf to supply & install instant grass for your home & business?" },
  faqs: homeFaqOrder.map((i) => generalFaqs[i]),
};
