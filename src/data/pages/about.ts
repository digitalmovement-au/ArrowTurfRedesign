import type { Page } from "../types";
import { generalFaqs } from "../faqs";
import { whyChooseUs } from "../site";

export const about: Page = {
  path: "/about/",
  title: "About Us | 45+ Years of Family Turf Farming | Arrow Turf",
  description: "Meet Arrow Turf, a family-owned turf farm on the Hawkesbury River with 45+ years' experience supplying, delivering and installing premium turf. Learn more.",
  breadcrumb: [{ name: "About", path: "/about/" }],
  hero: {
    eyebrow: "Our story",
    h1: "About Arrow Turf, Sydney’s family-owned turf farm",
    lead: "Enjoy the freshest, greenest, and most vibrant-looking grass surfaces instantly with our affordable premium-quality turf solutions Sydney residents and businesses can rely on.",
    image: "2026/05/002-cover-photo-1536x672-1.webp",
  },
  sections: [
    {
      kind: "split",
      eyebrow: "Who are we?",
      heading: "We are Arrow Turf – we help homes & businesses save time, effort, & money",
      body: `We are a local family-owned and operated turf farm situated on the picturesque Hawkesbury River. Our farm is dedicated to helping homes and businesses save time, effort, and money by providing cost-effective and hassle-free solutions to creating the most beautiful natural grass surfaces.

With everything being so expensive and time a priceless commodity nowadays, finding ways to reduce expenses and time-consuming tasks for your household and your business is crucial for long-term sustainability.

By taking full advantage of our knowledge and expertise, you can save your household and business a significant amount of time, work, and finances and still achieve your goal of having the most gorgeous natural grass surfaces.

From providing you with the right grass variety to suit your comfort and maintenance requirements as well as your shade and drought tolerances to laying your surfaces perfectly, we here at Arrow Turf will help save your home and business a lot of time, effort, and money.`,
      image: "2024/10/005-who-are-we.jpg",
      imageAlt: "The Arrow Turf family farm on the Hawkesbury River",
    },
    { kind: "journey" },
    {
      kind: "split",
      reverse: true,
      eyebrow: "What do we do?",
      heading: "We supply & install affordable premium-quality instant turf solutions for residential & commercial projects",
      body: `With us here at Arrow Turf, you can choose from our range of affordable, premium-quality instant turf solutions designed and developed for residential and commercial use. Once you have chosen, we can deliver and install it for you.

Whether you want a new lawn for your home or need maxi rolls for a large commercial project, you can get the best instant turf to suit your budget and design requirements.

You can take a closer look at what we offer and pick what appeals to you and aligns with how much you are willing to spend. You can also trust our experts to provide unbiased professional advice about the best choices for your needs.

We have highly skilled and experienced turf design and installation specialists who can help plan and execute the perfect layouts. Our team has completed numerous residential and commercial projects spanning from Newcastle to Wollongong to Blue Mountains to Central West and everywhere in between.`,
      image: "2024/10/001-what-do-we-do.jpg",
      imageAlt: "Arrow Turf team installing fresh turf",
      cta: true,
    },
    { kind: "features", id: "why", eyebrow: "Why choose us?", heading: "Why choose Arrow Turf to supply & install instant grass for your home & business?", items: whyChooseUs, image: "2024/10/001-why-choose-us.jpg" },
    {
      kind: "prose",
      eyebrow: "Turf company Sydney",
      heading: "More than just a turf supply Sydney business",
      body: `For over 45 years, our family has been growing, supplying, and installing natural turf for homes and businesses across Sydney, and that experience is what sets us apart as a genuine turf company Sydney property owners keep coming back to. We didn’t set out to be just another [turf supply Sydney](/turf-delivery-sydney/) option among many; we wanted to be the team people call for the full journey, from choosing the right variety through to a flawless [turf installation Sydney](/turf-installation-sydney/) result.

Some of our customers prefer the convenience of a professional lay, while others enjoy the hands-on satisfaction of arranging their own [turf pick-up Sydney](/turf-pickup-sydney/) from our Hawkesbury River farm. Either way, our decades of hands-on experience mean you’re getting advice and workmanship you can rely on, not guesswork.`,
      cta: true,
    },
  ],
  faqs: generalFaqs,
};
