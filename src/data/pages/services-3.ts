import type { Page } from "../types";
import { serviceAreas, whyChooseUs } from "../site";
import { servicesHub } from "./services";

const shared = servicesHub.faqs!.slice(0, 6).map((f, i) => (i === 0 ? { ...f, q: "How much is turf installation in Sydney?" } : f));

export const installation: Page = {
  path: "/turf-installation-sydney/",
  title: "Turf Installation Sydney | Prep, Underlay & Laying | Arrow Turf",
  description: "Professional turf installation in Sydney: old lawn removal, levelling, underlay and laying by experienced installers for an even, fast-rooting lawn. Call now.",
  ogImage: "2024/11/001-Cover-photo.jpg",
  breadcrumb: [{ name: "Our services", path: "/turf-services-sydney/" }, { name: "Turf installation", path: "/turf-installation-sydney/" }],
  hero: {
    eyebrow: "Turf installation Sydney",
    h1: "Professional turf installation in Sydney",
    lead: "Enjoy the freshest, greenest, and most vibrant-looking grass surfaces instantly with our affordable, premium-quality turf installation Sydney residents and businesses can rely on.",
    image: "2026/05/002-cover-photo-1536x672-1.webp",
  },
  sections: [
    {
      kind: "split",
      eyebrow: "Why get Arrow Turf installation service?",
      heading: "Turf installation service with unparalleled speed & flawless execution",
      body: `With us here at Arrow Turf, you can create beautiful natural grass surfaces for your residential and commercial projects instantly with flawless execution. Whether you want to install a new lawn for your home, redo the landscapes for your business, or build a recreational area for your school or community, you will get the best turf installation service in Sydney at a very reasonable rate. We have highly skilled and experienced turf installation specialists armed with the latest techniques and technology our industry offers.

Here at Arrow Turf, we take pride in delivering quality-assured workmanship on time every time regardless of the size, scope, complexity, or time constraint of the turf installation project. This is why we are the go-to turf installer for many home and business owners as well as residential and commercial landscapers, builders, developers, and real estate agents in Sydney. So if you want a turf installation service with unparalleled speed and flawless execution, you call our team here at Arrow Turf.`,
      image: "2024/11/001-why-get-turf-installed-600x720.jpg",
      imageAlt: "Arrow Turf installers laying fresh turf",
    },
    { kind: "journey" },
    { kind: "varieties", eyebrow: "What turf varieties can we install for you?", heading: "Your Arrow Turf varieties" },
    { kind: "features", eyebrow: "Why choose us?", heading: "Why choose Arrow Turf to install instant grass for your home & business?", items: whyChooseUs, image: "2024/11/001-what-varities.jpg" },
    {
      kind: "prose",
      eyebrow: "One team",
      heading: "One team for every stage of your turf project – what sets our turf installation Sydney team apart",
      body: `Getting a new lawn installed properly is about more than just rolling out turf, it’s about correct site preparation, levelling, and attention to detail that determines how well your lawn performs for years to come. Our turf installation Sydney specialists bring decades of combined experience to every job, whether it’s a small home lawn or a large commercial landscape.

All the turf we install comes from our own [turf supply Sydney](/turf-delivery-sydney/) wide operation, so you know exactly where it’s come from and how fresh it is. If you’d prefer to organise your own transport, our [turf pick-up Sydney](/turf-pickup-sydney/) option remains available too. As a turf company Sydney residents and businesses have trusted for over 45 years, we take the same care with every installation, big or small.`,
      cta: true,
    },
    { kind: "calculator" },
    { kind: "areas", eyebrow: "Where we install", heading: "Turf installation service locations", areas: serviceAreas },
  ],
  faqs: [
    ...shared,
    { q: "How long does a standard turf installation take?", a: "Most residential installations are completed within a day. Larger properties, commercial sites, or projects requiring extensive site preparation may take longer, and we’ll give you a clear estimate as part of your quote. Either way, we schedule the turf to arrive fresh on installation day, so it goes from farm to your lawn within hours." },
    { q: "What’s included in your turf installation service?", a: "Our installation service covers site preparation, including removing old grass and levelling the ground, laying the correct underlay, carefully placing and joining the turf, and a final deep watering to help it settle in. In other words, everything from first dig to first watering is handled, you don’t need to lift a shovel." },
    { q: "Do you install all five of your turf varieties?", a: "Yes, our installation team is experienced in laying all of our available varieties, from soft leaf buffalo grasses through to couch and kikuyu, and can advise on the best choice for your site if you haven’t decided yet. Factors like shade, foot traffic, and how much maintenance you’re happy to do all shape the recommendation, so tell us about your yard and lifestyle when you enquire." },
    { q: "Can you install turf over my existing lawn?", a: "No, existing grass and the top layer of soil need to be removed first. Installing directly over old grass can prevent proper root establishment and cause drainage and levelling problems later on. Removing the old lawn is included in our installation service, so there’s no extra step for you to organise." },
    { q: "Can you install turf on sloped or uneven yards?", a: "Yes, our team has experience preparing and laying turf on sloped sites, including working across the slope where needed to ensure stability and even establishment. If your block has a significant gradient, mention it when requesting a quote so we can factor any additional preparation into the plan." },
    { q: "Do you offer a warranty on your installation work?", a: "We stand behind the quality of our workmanship. If you notice any issues with how your turf has been laid shortly after installation, get in touch and we’ll come back to sort it out. It’s the same standard of accountability we apply to every job, from small courtyards to full commercial sites." },
    { q: "Do you install turf for commercial and strata properties, not just homes?", a: "Yes, alongside residential lawns we regularly install turf for commercial landscapes, strata common areas, and larger developer or council projects. We’re comfortable coordinating with property managers, builders, and body corporates to schedule work with minimal disruption to residents and tenants." },
    { q: "What techniques or equipment do you use during installation?", a: "Our specialists use industry-standard techniques for levelling, laying, and jointing turf, along with appropriate machinery for larger jobs, to ensure a consistent, professional finish regardless of project size. Details like staggering joins brick-style and rolling the finished surface are small touches that make a visible difference to how your lawn looks and establishes." },
    { q: "How far in advance should I book an installation?", a: "Since we cut turf fresh to order, many bookings can be accommodated within a few days, though larger commercial jobs are best booked further ahead to secure your preferred date. Demand peaks in spring and early summer, so if you’re planning a lawn for that period, it pays to get your booking in early." },
    { q: "Is there anything I need to do before your team arrives to install turf?", a: "Having clear access to the work area and any existing garden beds or obstacles noted in advance helps our team get started quickly and complete the job efficiently. It’s also worth marking any irrigation lines, pipes, or cables you know of, so we can work around them safely during site preparation." },
    { q: "Can maxi rolls be included as part of a standard installation booking?", a: "Yes, if your project is large enough to benefit from maxi rolls, we can incorporate them into your installation using the appropriate machinery for a faster, seamless finish. We’ll assess whether your site suits maxi rolls at quoting stage, so you get the best format without needing to ask." },
    { q: "What happens after installation is complete?", a: "Our team will talk you through watering, mowing, and general aftercare specific to your chosen variety, and remain available afterwards if you have any questions as your new lawn establishes. The first few weeks of watering are the most important, so we make sure you leave the handover knowing exactly what to do and when." },
  ],
};

export const projectImages = [
  { src: "2026/07/1.webp", alt: "Completed Arrow Turf lawn in Sydney" },
  { src: "2025/02/Photo-31-10-2024-9-36-17-AM-1536x2048.jpg", alt: "Fresh turf being laid" },
  { src: "2026/07/2.webp", alt: "Completed Arrow Turf lawn in Sydney" },
  { src: "2025/02/Photo-24-10-2023-7-25-00-AM-1767x2048.jpg", alt: "Freshly harvested turf" },
  { src: "2026/07/3.webp", alt: "Completed Arrow Turf lawn in Sydney" },
  { src: "2025/02/Photo-23-6-2023-9-48-59-AM-1536x2048.jpg", alt: "Turf rolls at the Arrow Turf farm" },
  { src: "2026/07/4.webp", alt: "Completed Arrow Turf lawn in Sydney" },
  { src: "2025/02/Photo-23-6-2023-9-50-38-AM-1584x2048.jpg", alt: "Turf pallets ready at the farm" },
  { src: "2026/07/5.webp", alt: "Completed Arrow Turf lawn in Sydney" },
  { src: "2025/02/Photo-23-10-2014-8-55-24-AM-2048x2048.jpg", alt: "Established lawn by Arrow Turf" },
  { src: "2026/07/6.webp", alt: "Completed Arrow Turf lawn in Sydney" },
  { src: "2025/02/Photo-17-4-2024-7-00-51-AM-1536x2048.jpg", alt: "Turf installation in progress" },
  { src: "2025/02/Photo-16-11-2022-8-16-14-AM-1536x2048.jpg", alt: "Arrow Turf lawn installation in Sydney" },
  { src: "2025/02/Photo-15-12-2022-10-33-17-AM-1536x2048.jpg", alt: "Farm-cut turf ready for delivery" },
  { src: "2025/02/Photo-10-1-2025-1-51-48-PM.jpg", alt: "Established Arrow Turf lawn" },
  { src: "2024/10/003-why-choose-matilda.jpg", alt: "Matilda Soft Leaf Buffalo lawn" },
];

export const projects: Page = {
  path: "/turf-projects-sydney/",
  title: "Turf Projects Sydney | Residential & Commercial Lawns | Arrow Turf",
  description: "Browse completed turf projects across Sydney, from family backyards to commercial landscapes and sports areas. See our work and get a free quote today.",
  ogImage: "2024/09/Products.jpg",
  breadcrumb: [{ name: "Our projects", path: "/turf-projects-sydney/" }],
  hero: {
    eyebrow: "Our projects",
    h1: "Our residential & commercial turf projects in Sydney",
    lead: "Take a look at the premium-quality residential and commercial turf projects we’ve proudly completed for homeowners and businesses across Sydney.",
    image: "2026/05/002-cover-photo-1536x672-1.webp",
  },
  sections: [
    {
      kind: "quoteIntro",
      eyebrow: "The Arrow Turf mark of customer satisfaction",
      heading: "Our projects for residential & commercial customers",
      body: "We here at Arrow Turf have successfully completed many projects for residential and commercial customers in and around Sydney. With our tested-and-proven track record of delivering quality-assured products and services, we are trusted by home and business owners as well as residential and commercial property managers, builders, developers, and real estate agents in Sydney. Take a closer look at the quality of the products and work that we do to discover the unmistakable Arrow Turf Mark of Customer Satisfaction!",
      review: { name: "Thomas Rance", text: "I can highly recommend Zak and the whole team, I ordered 170sqm of sir Walter buffalo for my front lawn. Very happy with the organisation, delivery and price!" },
    },
    {
      kind: "types",
      eyebrow: "What we work on",
      heading: "Lawns of every shape and size",
      intro: "From compact courtyard makeovers to sprawling acreage properties, every project gets the same fresh-cut turf and attentive service.",
      items: [
        { icon: "home", title: "Home lawns", body: "Front and back yards, compact courtyards and townhouse lawns where every square metre counts.", href: "/turf-installation-sydney/", link: "Turf installation", image: "2026/07/1.webp" },
        { icon: "users", title: "Commercial & strata", body: "Commercial landscapes, strata common areas and developer projects, scheduled around residents and tenants.", href: "/turf-delivery-sydney/", link: "Turf delivery", image: "2026/07/Photo-16-11-2022-8-16-14-AM-1536x2048-1.webp" },
        { icon: "footprints", title: "Parks & sports fields", body: "Parks, school grounds, ovals and playing fields that need a hard-wearing, seamless finish.", href: "/maxi-roll-turf-laying-sydney/", link: "Maxi roll laying", image: "2026/07/3.webp" },
        { icon: "roll", title: "Acreage & large sites", body: "Big open areas covered fast with maxi rolls: fewer joins, quicker establishment and a neater finish.", href: "/maxi-roll-turf-sydney/", link: "Maxi roll turf", image: "2026/07/Photo-23-6-2023-9-48-59-AM-1536x2048-1.webp" },
      ],
    },
    {
      kind: "showcase",
      eyebrow: "Gallery",
      heading: "A track record across every type of project",
      intro: `Many of these projects combined our [turf installation Sydney](/turf-installation-sydney/) service for a fully finished result, while others saw customers opt for our [turf pick-up Sydney](/turf-pickup-sydney/) option to manage the final stage themselves. Whatever the scope, each one reflects the same standard of care we bring to every job as a [turf supply Sydney](/turf-delivery-sydney/) wide business.`,
      images: projectImages,
    },
    { kind: "areas", eyebrow: "Where we work", heading: "Turf supplies service locations", areas: serviceAreas },
  ],
  faqs: [
    { q: "Can I see examples of your work before booking a project?", a: "Yes, the projects featured on this page showcase a range of residential and commercial work we’ve completed across Sydney, giving you a sense of the quality and finish you can expect from our team. If you’d like to see examples closer to your own project type or suburb, just ask and we’ll share the most relevant work we’ve done." },
    { q: "Do you complete both residential and commercial projects?", a: "Yes, our portfolio includes everything from home lawns and backyard landscapes to commercial properties, parks, and larger developer projects, reflecting the full breadth of work we take on. That range means we bring commercial-grade precision to home lawns, and a homeowner’s eye for finish to commercial sites." },
    { q: "How can I get a similar result for my own property?", a: "Get in touch with details about your property and the kind of look you’re after, and our team can talk you through variety selection, supply, and installation options to help achieve a similar outcome. Photos of your existing space are especially helpful, as they let us give more specific advice from the very first conversation." },
    { q: "Are the projects shown here from a range of different suburbs?", a: "Yes, our completed projects span across greater Sydney, including the Hills District, Northern Beaches, Sutherland Shire, Western Sydney, and out towards the Blue Mountains and Wollongong. Working across such varied areas means we’re familiar with the different soil types, climates, and site conditions each region brings." },
    { q: "Do you take on small residential projects as well as larger ones?", a: "Absolutely. While some of our featured projects are large in scale, we regularly complete smaller residential jobs too, and every project receives the same level of care regardless of size. Some of our favourite transformations have been compact courtyards and townhouse lawns where every square metre counts." },
    { q: "How long do projects like the ones shown typically take to complete?", a: "Timeframes vary depending on the size and complexity of the project, from a single day for smaller residential lawns to several days for larger commercial or acreage sites. When you enquire, we’ll give you a realistic timeframe for your specific project so you can plan around it with confidence." },
    { q: "Can I request a specific turf variety to match a project I've seen?", a: "Yes, if a particular look or variety featured in our project gallery appeals to you, let us know and we can confirm availability and suitability for your own property. Keep in mind that factors like shade and traffic can affect how a variety performs, so we’ll always check it’s the right fit for your site, not just the right look." },
    { q: "Do you offer a consultation to plan a project similar to your past work?", a: "Yes, we’re happy to discuss your goals, walk through relevant examples, and provide advice on turf selection and layout before you commit to a project. There’s no charge or obligation for this initial advice, it’s simply how we make sure every project starts on the right footing." },
    { q: "Are these projects completed using standard turf, maxi rolls, or both?", a: "Our completed projects include a mix of both, depending on the size and requirements of each site. Larger open areas often benefit from maxi rolls, while smaller or more detailed spaces are typically suited to standard rolls. If you browse the gallery, you’ll notice the seamless finish on the bigger sites. That’s the maxi roll difference in action." },
    { q: "How do I get started on a new turf project with Arrow Turf?", a: "Simply reach out with some details about your property and vision, and we’ll guide you through variety selection, supply, and installation or pickup options to bring your project to life. A quick phone call or email is all it takes, and you’ll have a free, no-obligation quote to consider before making any decisions." },
  ],
};
