import type { Page } from "../types";
import { generalFaqs } from "../faqs";

type V = {
  slug: string; path: string; title: string; description: string; ogImage?: string; name: string; h1: string; lead: string;
  whyEyebrow: string; whyHeading: string; why: string; whyImage: string;
  specImage: string; specs: { title: string; rows: [string, string][] }[]; suitability: [string, string][];
  bringHeading: string; bring: string;
};

const build = (v: V): Page => ({
  path: v.path,
  title: v.title,
  description: v.description,
  ogImage: v.ogImage,
  breadcrumb: [{ name: "Turf varieties", path: "/our-turf-varieties" }, { name: v.name, path: v.path }],
  hero: { eyebrow: "Turf varieties", h1: v.h1, lead: v.lead, image: "2026/05/002-cover-photo-1536x672-1.webp" },
  sections: [
    { kind: "split", eyebrow: v.whyEyebrow, heading: v.whyHeading, body: v.why, image: v.whyImage, imageAlt: `${v.name} lawn` },
    {
      kind: "specs",
      eyebrow: "How does it look, feel, & maintain?",
      heading: `${v.name} characteristics & specifications`,
      groups: v.specs,
      suitability: v.suitability,
      image: v.specImage,
      imageAlt: `${v.name} close-up`,
      note: `Got questions about ${v.name}? Need more information about our services? Call [0490 779 707](tel:0490779707) or Email [info@arrowturf.com.au](mailto:info@arrowturf.com.au).`,
    },
    { kind: "prose", eyebrow: "Supply, delivery & installation", heading: v.bringHeading, body: v.bring, cta: true },
    { kind: "calculator" },
    { kind: "varieties", eyebrow: "Compare", heading: "Explore our other turf varieties", exclude: v.slug },
  ],
  faqs: generalFaqs,
});

export const sirWalter = build({
  slug: "sir-walter",
  path: "/sir-walter-soft-leaf-buffalo-turf-sydney/",
  title: "Sir Walter Soft Leaf Buffalo Turf Sydney | Farm Fresh | Arrow Turf",
  description: "Order Sir Walter soft leaf buffalo turf in Sydney fresh from our family farm. Soft, shade tolerant and low maintenance, delivered six days a week. Get a quote.",
  ogImage: "2024/10/Sir-Walter-Sift-Leaf-Buffalo0.jpg",
  name: "Sir Walter Soft Leaf Buffalo",
  h1: "Sir Walter Soft Leaf Buffalo turf, fresh in Sydney",
  lead: "Enjoy the freshest, greenest, and most vibrant-looking grass surfaces instantly with our affordable, premium-quality Sir Walter soft leaf buffalo turf Sydney residents and businesses can rely on.",
  whyEyebrow: "Why choose Sir Walter Soft Leaf Buffalo?",
  whyHeading: "Experience a velvety soft feel with vibrant beauty",
  why: `Take comfort and aesthetics to the next level with the luxurious velvety soft feel and stunning vibrant beauty of Sir Walter Soft Leaf Buffalo. Designed specifically for the ultimate in play and relaxation, this buffalo grass variety is the perfect surface for families and pets to spend hours enjoying the outdoors. Known for its exceptional good looks, resilience, and ease of care, Sir Walter Soft Leaf Buffalo is your go-to natural grass if you want a gorgeous home lawn or commercial recreational space.

With its high drought and shade tolerance, natural weed and pest resistance, and low maintenance requirements, you can be assured of having the most beautifully lush and vibrant-looking outdoor spaces all year round. This makes this turf variety one of the most hassle-free natural grass surfaces available on the market today. Whether it is for your home’s front and backyards or your commercial property’s family areas, Sir Walter Soft Leaf Buffalo offers the perfect blend of comfort, beauty, and durability.`,
  whyImage: "2025/02/Why-choose--2048x2048.jpg",
  specImage: "2025/12/SirWalter-1.png",
  specs: [
    { title: "Appearance", rows: [["Normal colour", "Deep Green"], ["Winter colour", "Green to Fair"], ["Leaf size", "Broad"], ["Growth habit", "Tight"]] },
    { title: "Comfort", rows: [["Texture", "Fine Soft"], ["Underfoot feel", "Velvety Soft"], ["Sitting feel", "Velvety Soft"]] },
    { title: "Tolerances", rows: [["Sun tolerance", "Very High"], ["Wear tolerance", "Very High"], ["Drought tolerance", "Very High"], ["Shade tolerance", "80%"], ["Herbicide tolerance", "High"], ["Winter tolerance", "High"]] },
    { title: "Maintenance", rows: [["Cut height", "Medium to High"], ["Mowing frequency", "Low to Regular"], ["Watering frequency", "Very Low"], ["Fertilising frequency", "Low"], ["Weeding frequency", "Low (Natural Weed Resistance)"]] },
  ],
  suitability: [["Residential", "Front and Back Lawns, Landscapes, High Activity Areas"], ["Commercial", "Lawns, Landscapes, Parks, Recreational Areas, Other High Activity Areas"]],
  bringHeading: "Bringing Sir Walter's velvety feel to your lawn",
  bring: `Once you’ve fallen for Sir Walter’s signature softness, getting it onto your property is simple. As part of our everyday [turf supply Sydney](/turf-delivery-sydney/) wide service, we cut Sir Walter fresh to order and can have it delivered straight to your home or business. If you’d rather have the whole job handled for you, our [turf installation Sydney](/turf-installation-sydney/) crews take care of site preparation and laying so your family-friendly lawn is ready to enjoy sooner.

Prefer a DIY approach? Our [turf pick-up Sydney](/turf-pickup-sydney/) option lets you collect your order directly from our Hawkesbury River farm at a time that suits you. However you choose to receive it, you’re working with a turf company Sydney families have trusted for over 45 years to deliver soft, durable buffalo turf built for everyday play.`,
});

export const matilda = build({
  slug: "matilda",
  path: "/matilda-soft-leaf-buffalo-turf-sydney/",
  title: "Matilda Soft Leaf Buffalo Sydney | Hard-Wearing | Arrow Turf",
  description: "Buy Matilda soft leaf buffalo in Sydney from the farm that grows it. Soft underfoot, tough on wear and suited to all lawn types. Delivered fresh. Get a quote.",
  ogImage: "2024/10/002-cover-photo-1024x448.png",
  name: "Matilda Soft Leaf Buffalo",
  h1: "Matilda Soft Leaf Buffalo in Sydney, farm direct",
  lead: "Enjoy the freshest, greenest, and most vibrant-looking grass surfaces instantly with our affordable, premium-quality Matilda soft leaf buffalo turf Sydney residents and businesses can rely on.",
  whyEyebrow: "Why choose Matilda Soft Leaf Buffalo?",
  whyHeading: "Proudly Australian bred for comfort & durability",
  why: `Create rich green outdoor spaces that offer a seamless blend of comfort and durability with Matilda Soft Leaf Buffalo. Proudly Australian-bred, this semi-dwarf buffalo grass variety is designed and developed to be one of the softest and most durable natural turf you can get on the market today. Whether you want to build or redo your home lawns or create beautiful landscapes for your commercial property, Matilda Soft Leaf Buffalo is one of the best natural grass options for Australian weather conditions.

With its exceptional wear-and-tear, drought, sun and shade tolerance, natural weed and pest resistance, and ability to withstand the harshest Australian weather, Matilda Soft Leaf Buffalo is perfect for all residential and commercial scenarios. Add its rich evergreen colour all year round, you are getting a gorgeous yet hassle-free natural grass option for your outdoor spaces. Get Matilda Soft Leaf Buffalo to create rich green outdoor spaces with a seamless blend of comfort and durability.`,
  whyImage: "2024/10/003-why-choose-matilda.jpg",
  specImage: "2025/12/MatildaSoft-1.png",
  specs: [
    { title: "Appearance", rows: [["Normal colour", "Rich Green"], ["Winter colour", "Green"], ["Leaf size", "Medium"], ["Growth habit", "Vertical and Horizontal"]] },
    { title: "Comfort", rows: [["Texture", "Soft"], ["Underfoot feel", "Soft"], ["Sitting feel", "Soft"]] },
    { title: "Tolerances", rows: [["Sun tolerance", "Very High"], ["Wear tolerance", "Very High"], ["Drought tolerance", "Very High"], ["Shade tolerance", "80%"], ["Herbicide tolerance", "High"], ["Winter tolerance", "Medium to High"]] },
    { title: "Maintenance", rows: [["Cut height", "Medium to High"], ["Mowing frequency", "Low to Medium"], ["Watering frequency", "Low"], ["Fertilising frequency", "Low"], ["Weeding frequency", "Low"]] },
  ],
  suitability: [["Residential", "Front and Back Lawns, Landscapes, High-activity Areas"], ["Commercial", "Lawns, Landscapes, Recreational Areas, High-traffic Areas"]],
  bringHeading: "Getting Matilda Soft Leaf Buffalo onto your property",
  bring: `Once you’ve decided Matilda Soft Leaf Buffalo is the right fit for your lawn, we make it easy to get it onto your property however suits you best. As part of our regular [turf supply Sydney](/turf-delivery-sydney/) wide service, we can have Matilda cut fresh and delivered straight to your door, or if you’d prefer a fully finished result, our [turf installation Sydney](/turf-installation-sydney/) team can handle site preparation and laying from start to finish.

Prefer to collect it yourself? Our [turf pick-up Sydney](/turf-pickup-sydney/) option lets you grab your order directly from our Hawkesbury River farm at a time that works for you. Whichever way you choose, you’re backed by the same turf company Sydney homeowners and businesses have trusted for over 45 years to deliver premium, semi-dwarf buffalo turf that performs as good as it looks.`,
});

export const kikuyu = build({
  slug: "kikuyu",
  path: "/kikuyu-turf-sydney/",
  title: "Kikuyu Lawn Turf Sydney | Farm-Direct Pricing | Arrow Turf",
  description: "Kikuyu lawn turf in Sydney direct from our Hawkesbury farm. A fast-establishing, self-repairing lawn for yards, schools and fields. Request your free quote now.",
  ogImage: "2024/10/Kikuyu0.jpg",
  name: "Kikuyu",
  h1: "Kikuyu lawn turf in Sydney, direct from the farm",
  lead: "Enjoy the freshest, greenest, and most vibrant-looking grass surfaces instantly with our affordable, premium-quality Kikuyu turf Sydney residents and businesses can rely on.",
  whyEyebrow: "Why choose Kikuyu?",
  whyHeading: "Cover wider areas faster with this dynamic grower",
  why: `Achieve gorgeously lush green outdoor surfaces for larger open spaces in the least amount of time with Kikuyu. Whether you need it for your sprawling home lawn, wide-open community park, or vast commercial landscape, you can establish this turf variety quickly to meet your deadline requirements. With Kikuyu being a more economical option for turf replacement and its ability to handle a wide range of conditions, it is also your best choice if you want a cost-effective turf to suit your tight budget and large design needs.

Easy to care for and exceptionally durable yet soft to walk and sit on, this turf variety is also perfect for playing fields, playgrounds, footpaths, and home yards with constantly high activity levels. This dynamic grower spreads fast so regular mowing is recommended. Kikuyu holds its colour during winter so you can still have vibrant outdoor surfaces in cold months. If you want a fast and cost-effective way to achieve gorgeously lush green surfaces for your residential and commercial property, Kikuyu is the way to go.`,
  whyImage: "2024/10/006-why-choose-kikuyu.jpg",
  specImage: "2025/12/Kikuyu-1.png",
  specs: [
    { title: "Appearance", rows: [["Normal colour", "Light Green"], ["Winter colour", "Light Green"], ["Leaf size", "Fine Medium"], ["Growth habit", "Horizontal"]] },
    { title: "Comfort", rows: [["Texture", "Coarse"], ["Underfoot feel", "Soft"], ["Sitting feel", "Soft"]] },
    { title: "Tolerances", rows: [["Sun tolerance", "Very High"], ["Wear tolerance", "Moderate"], ["Drought tolerance", "Very High"], ["Shade tolerance", "30%"], ["Herbicide tolerance", "High"], ["Winter tolerance", "Medium to High"]] },
    { title: "Maintenance", rows: [["Cut height", "Short to Taller"], ["Mowing frequency", "Regular"], ["Watering frequency", "Very Low"], ["Fertilising frequency", "Low"], ["Weeding frequency", "Low"]] },
  ],
  suitability: [["Residential", "Front and Back Lawns, Large Open Spaces, Footpaths"], ["Commercial", "Parks, Playing Fields, Oval Surrounds, Playgrounds, Footpaths"]],
  bringHeading: "Fast, affordable Kikuyu supply for large areas",
  bring: `Kikuyu’s rapid establishment makes it a favourite for big projects, and we’ve built our process to match. Through our regular [turf supply Sydney](/turf-delivery-sydney/) wide service, we can cut and deliver the large quantities Kikuyu projects often call for, right when you need them. For expansive areas like ovals, parks, or acreage properties, our [turf installation Sydney](/turf-installation-sydney/) team has the experience to lay Kikuyu efficiently across wide, open spaces without compromising on quality.

And if you’re managing your own large-scale project, our [turf pick-up Sydney](/turf-pickup-sydney/) option means you can collect exactly the volume you need straight from our Hawkesbury River farm. Whatever the scale of your job, you’re working with a turf company Sydney councils, developers, and homeowners alike have relied on to cover ground fast and affordably.`,
});

export const wintergreen = build({
  slug: "wintergreen",
  path: "/wintergreen-couch-turf-sydney/",
  title: "Wintergreen Couch Sydney | Drought-Tolerant Turf | Arrow Turf",
  description: "Wintergreen couch in Sydney is a fine-bladed, drought-tolerant turf with a dense mat for sunny lawns and sports areas. Cut fresh to order. Get a quote today.",
  ogImage: "2024/10/Wintergreen-Couch0.jpg",
  name: "Wintergreen Couch",
  h1: "Drought-tolerant Wintergreen Couch in Sydney",
  lead: "Enjoy the freshest, greenest, and most vibrant-looking grass surfaces instantly with our affordable, premium-quality Wintergreen couch turf Sydney residents and businesses can rely on.",
  whyEyebrow: "Why choose Wintergreen Couch?",
  whyHeading: "Beautifully green even during winter months",
  why: `Keep beautifully green outdoor surfaces even in cold winter conditions with Wintergreen Couch. Perfect for sports arenas, golf courses, and high-traffic areas like parks, recreational spaces, and home lawns, this high-wearing couch variety stays vibrant-looking when it is cold out. It loves the sun but can withstand shade and is very easy to maintain. Wintergreen Couch is the natural grass of choice for many professional sports teams and top-flight golf courses here in Australia and the rest of the world.

Whether you want to convert your finer lawns into harder-wearing surfaces to ensure long-term viability for high activity, add the perfect complement to your garden beds and rock formations, or whatever use-case scenario you may have, you will have one of the most durable couch varieties available on the market today. With its thick mat and fine blade yet soft feel underfoot, Wintergreen Couch offers high durability and comfort with fast recovery and ease of management for your home or commercial property.`,
  whyImage: "2025/02/why-choose-wintergreen-1536x2048.jpg",
  specImage: "2025/02/How-does-it-look-1536x2048.jpg",
  specs: [
    { title: "Appearance", rows: [["Normal colour", "Lush Green"], ["Winter colour", "Green"], ["Leaf size", "Very Fine"], ["Growth habit", "Vertical and Horizontal"]] },
    { title: "Comfort", rows: [["Texture", "Fine Medium"], ["Underfoot feel", "Soft"], ["Sitting feel", "Soft to Medium"]] },
    { title: "Tolerances", rows: [["Sun tolerance", "Very High"], ["Wear tolerance", "Very High"], ["Drought tolerance", "Very High"], ["Shade tolerance", "30%"], ["Herbicide tolerance", "High"], ["Winter tolerance", "High"]] },
    { title: "Maintenance", rows: [["Cut height", "Short"], ["Mowing frequency", "Medium"], ["Watering frequency", "Medium"], ["Fertilising frequency", "Medium"], ["Weeding frequency", "Low to Medium"]] },
  ],
  suitability: [["Residential", "Front and Back Lawns, Landscapes"], ["Commercial", "Sports Fields, Golf Courses, Parks, Recreational Areas, Lawns, Landscapes, High-traffic Areas"]],
  bringHeading: "Sourcing Wintergreen Couch for sports-grade results",
  bring: `Wintergreen Couch is trusted on some of the world’s best-known playing surfaces, and we make it just as accessible for your home or business. Through our reliable [turf supply Sydney](/turf-delivery-sydney/) wide service, we cut Wintergreen fresh to order for sporting clubs, golf courses, and homeowners alike. If you want the precision and durability that sports-grade surfaces demand, our [turf installation Sydney](/turf-installation-sydney/) specialists know how to lay this variety for consistent, hard-wearing results.

Prefer to organise it yourself? Our [turf pick-up Sydney](/turf-pickup-sydney/) option lets you collect your order directly from our Hawkesbury River farm at a time that suits your schedule. Whichever route you take, you’re backed by a turf company Sydney sports clubs and property owners have depended on for premium couch turf year-round.`,
});

export const greenlees = build({
  slug: "greenlees",
  path: "/greenlees-park-couch-sydney/",
  title: "Greenlees Park Turf - Golf Turf | Arrow Turf",
  description: "Arrow Turf supplies Greenlees Park turf in Sydney, offering a durable, lush lawn solution perfect for residential and commercial landscapes.",
  ogImage: "2025/02/Greenless-banner-1024x447.png",
  name: "Greenlees Park Couch",
  h1: "Premium quality Greenlees Park Couch turf in Sydney for residential & commercial use",
  lead: "Enjoy the freshest, greenest, and most vibrant-looking grass surfaces instantly with our affordable, premium-quality Greenlees Park couch turf Sydney residents and businesses can rely on.",
  whyEyebrow: "Why choose Greenlees Park Couch?",
  whyHeading: "Achieve a world-class golf course look & feel",
  why: `Transform your outdoor spaces to look and feel like the fairways and putting greens of the world’s top golf courses with Greenlees Park Couch. Whether for the front and backyard of your home, the recreational areas and landscapes around your business, or your school or community sports field, you are getting one of the best couch grass varieties available on the market today at a reasonable price. Of course, you can use Greenlees Park Couch for recreational and professional golf and bowling greens.

Add a touch of elegance to your home lawns and commercial landscapes with this premier couch variety’s gorgeous deep green colour, comfy soft feel, and smooth fine texture. Because it establishes fast and adapts easily to various soil types, you can cover a wide area and quickly complete your projects. Combining this with its high wear tolerance and low maintenance requirements, Greenlees Park Couch is your go-to variety if you want elegantly beautiful yet hassle-free residential and commercial outdoor grass surfaces.`,
  whyImage: "2025/02/Why-Choose-1536x2048.jpg",
  specImage: "2025/12/Greenless-1.png",
  specs: [
    { title: "Appearance", rows: [["Normal colour", "Deep Green"], ["Winter colour", "Fair (Turns Brown with Frost)"], ["Leaf size", "Very Fine Medium"], ["Growth habit", "Horizontal"]] },
    { title: "Comfort", rows: [["Texture", "Fine Medium"], ["Underfoot feel", "Soft"], ["Sitting feel", "Soft to Medium"]] },
    { title: "Tolerances", rows: [["Sun tolerance", "Very High"], ["Wear tolerance", "Very High"], ["Drought tolerance", "Very High"], ["Shade tolerance", "Low (Full Sun or Slightly Shaded Area Only)"], ["Herbicide tolerance", "High"], ["Winter tolerance", "Low"]] },
    { title: "Maintenance", rows: [["Cut height", "Very Short or Slightly Taller"], ["Mowing frequency", "Low but Regular Mowing is Recommended"], ["Watering frequency", "Very Low"], ["Fertilising frequency", "Low to Regular"], ["Weeding frequency", "Regular to High"]] },
  ],
  suitability: [["Residential", "Front and Back Lawns, Landscapes, Home Putting and Bowling Greens"], ["Commercial", "Landscapes, Streetscapes, Recreational Areas, Sports Fields, Golf and Bowling Greens"]],
  bringHeading: "Getting golf-grade Greenlees Park Couch onto your property",
  bring: `If you’re after that polished, fairway-style finish, sourcing Greenlees Park Couch is straightforward with us. Our ongoing [turf supply Sydney](/turf-delivery-sydney/) wide service means this premium couch variety is cut fresh and ready whenever your project calls for it, whether that’s a backyard putting green or a full commercial landscape. For a flawless, golf-course-quality result, our [turf installation Sydney](/turf-installation-sydney/) team knows exactly how to prepare and lay this variety for a smooth, even finish.

If you’d rather manage delivery yourself, our [turf pick-up Sydney](/turf-pickup-sydney/) option lets you collect your order directly from our Hawkesbury River farm at a time that works for you. Either way, you’re working with a turf company Sydney golf clubs, landscapers, and homeowners alike trust for this elegant, hard-wearing couch grass.`,
});
