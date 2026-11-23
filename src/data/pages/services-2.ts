import type { Page } from "../types";
import { serviceAreas } from "../site";

const HERO = "2026/05/002-cover-photo-1536x672-1.webp";
const MAXI = ["kikuyu", "wintergreen", "greenlees"];

export const pickup: Page = {
  path: "/turf-pickup-sydney/",
  title: "Turf Pickup Sydney | Collect Fresh from Our Farm | Arrow Turf",
  description: "Save with turf pickup in Sydney. Order online or by phone, choose your time and collect fresh-cut turf from our Hawkesbury farm. We'll help you load. Call now.",
  ogImage: "2025/02/Contact-US-Banner-1-1024x447.png",
  breadcrumb: [{ name: "Our services", path: "/turf-services-sydney/" }, { name: "Turf pickup", path: "/turf-pickup-sydney/" }],
  hero: {
    eyebrow: "Turf pickup Sydney",
    h1: "Turf pickup in Sydney, fresh from our farm",
    lead: "Enjoy the freshest, greenest, and most vibrant-looking grass surfaces instantly with our affordable, premium-quality turf pickup Sydney residents and businesses can rely on.",
    image: HERO,
  },
  sections: [
    {
      kind: "split",
      eyebrow: "Why pick up your turf?",
      heading: "Get the perfect turf you want exactly when you want it",
      body: `With us here at Arrow Turf, you can pick up the perfect turf to suit the needs of your residential and commercial projects at the exact date, time, and amount you want. All you have to do is tell us when and we will have your turf ready and waiting for you when you arrive. We can even help you load the turf onto your vehicle so it can get to where it needs to be as quickly as possible. Whether you need manpower or machinery, loading turf will be as easy as one-two-three and you can be in and out in no time.

Providing fast and hassle-free turf pickups is what we are all about here at Arrow Turf. The process is simple. You can order your turf online or by phone, choose the date and time you want to pick it up, and you will have the freshest turf prepared for you straight from the farm. If you are unsure when you can pick up your turf, you must ring us in advance so we can have your order ready on time. You can advise us the day before for pickup the next day.`,
      image: "2025/02/3.png",
      imageAlt: "Turf being loaded for pickup at the Arrow Turf farm",
    },
    { kind: "varieties", eyebrow: "What turf varieties can you pick up from us?", heading: "Your Arrow Turf varieties" },
    {
      kind: "prose",
      eyebrow: "Pickup",
      heading: "Why more Sydney customers choose to pick up their turf",
      body: `Picking up your own order is one of the most popular ways customers use our [turf supply Sydney](/turf-delivery-sydney/) wide service, and it’s easy to see why: you control the timing, save on delivery costs, and can inspect your turf before it leaves the farm. Of course, if you’d rather have it delivered and laid for you, our [turf installation Sydney](/turf-installation-sydney/) team is just as ready to help, taking care of everything from site prep to the final result.

Whichever way you go, our turf pick-up Sydney process is designed to be quick and straightforward, with our team on hand to help load your vehicle or trailer. It’s just one more way this turf company Sydney has relied on for decades makes getting quality turf as convenient as possible.`,
      cta: true,
    },
    { kind: "calculator" },
    { kind: "areas", eyebrow: "Where our customers come from", heading: "Turf pickup service locations", areas: serviceAreas },
  ],
  faqs: [
    { q: "How much does it cost to pick up turf from your farm?", a: "Pickup pricing depends on the turf variety and quantity you order, but skipping delivery can often make it a more cost-effective option for smaller jobs. Get in touch with your order details and we’ll provide a free, no-obligation quote. If you’re comparing varieties, we’re happy to price a couple of options side by side so you can see exactly what fits your budget." },
    { q: "How do I book a turf pickup?", a: "You can book by phone or email, letting us know the variety, quantity, and your preferred pickup date and time. We recommend booking at least a day in advance so we can have your order freshly cut and ready when you arrive. If you’re unsure exactly how much turf you need, share your lawn measurements when you book and we’ll calculate the quantity for you." },
    { q: "What times are pickups available?", a: "We offer pickup across our regular farm operating hours, six days a week. When you book, we’ll confirm a specific time slot that works for both your schedule and our harvesting timetable. Early morning slots are particularly popular in warmer months, as collecting turf before the heat of the day helps keep your rolls fresh." },
    { q: "Do I need to bring my own vehicle or trailer?", a: "Yes, pickup customers arrange their own transport. Most people use a ute, trailer, or van, and it’s worth double-checking your vehicle can handle the weight and volume of turf you’re ordering before you arrive. As a rough guide, freshly cut turf can weigh 15–20 kg per square metre, so let us know your vehicle type and we can tell you whether your order will fit safely." },
    { q: "Can you help me load the turf onto my vehicle?", a: "Absolutely. Our team can help load your order using manpower or machinery, whichever is more appropriate for the size of your pickup, so you can be in and out as quickly as possible. Most pickups are loaded and on their way within minutes of arriving at the farm." },
    { q: "What should I bring with me when I collect my order?", a: "Bring confirmation of your booking along with straps or tie-downs if you’re transporting turf in an open vehicle or trailer, since rolls can shift during transport if not properly secured. A tarp or liner is also worth packing, as fresh turf can leave soil and moisture on your tray or trailer bed." },
    { q: "Can I pick up my turf on the same day I place my order?", a: "In many cases, yes, particularly for smaller orders, though we recommend calling ahead first to confirm availability. Because we cut turf fresh, having a little advance notice helps us guarantee your order is ready exactly when you arrive. Same-day pickup is a popular option for weekend DIY jobs, so on Saturdays especially, the earlier you call the better." },
    { q: "Is there a minimum or maximum quantity I can pick up?", a: "We can accommodate small residential quantities right up to large commercial and maxi roll orders for pickup. If you’re after a very large quantity, it’s worth calling ahead so we can plan the cut and loading accordingly. Very large orders can also be split across multiple pickup trips if your vehicle can’t carry everything in one load." },
    { q: "Can someone else collect my order on my behalf?", a: "Yes, as long as they have your booking details and are aware of the variety and quantity ordered. It’s a good idea to let us know in advance if someone other than you will be collecting the turf. This is a common arrangement for landscapers and builders collecting on behalf of their clients, so it’s no trouble at all." },
    { q: "What happens if I need to change my pickup time or date?", a: "Just give us a call as early as possible and we’ll do our best to reschedule your pickup to a time that suits you. Since turf is cut to order, advance notice helps us avoid unnecessary waste. Ideally, let us know before your order has been harvested and we can shift your booking with no fuss at all." },
    { q: "Do you offer any savings for picking up instead of having turf delivered?", a: "Choosing pickup removes delivery costs from your order, which can make it a more budget-friendly option, particularly for smaller quantities or if you’re already planning to be near our farm. For larger orders, though, it’s worth comparing the delivery fee against the time and fuel involved in multiple trips. Sometimes delivery works out better value." },
    { q: "Can I pick up maxi rolls as well as standard turf rolls?", a: "Yes, maxi rolls are available for pickup as well as delivery, though given their size and weight, you’ll need a suitable vehicle or trailer and preferably some help loading them. If you’re unsure whether your setup can handle maxi rolls, describe it to us when booking and we’ll advise whether standard rolls might be the more practical choice." },
    { q: "What if I arrive and my order isn't ready?", a: "This is uncommon since we cut to confirmed bookings, but if you arrive earlier than expected or without a booking, let our team know and we’ll do our best to accommodate you as quickly as possible. There’s a comfortable wait while turf is being cut, and our team will keep you updated on timing so you’re never left wondering." },
    { q: "Do you provide any aftercare advice when I pick up your turf?", a: "Yes. Our team can talk you through watering, laying, and general aftercare when you collect your order, and we’re always available afterwards if you have questions as your new lawn establishes. We recommend laying your turf within a few hours of pickup, especially in warm weather, and we’ll explain exactly how to keep it healthy in the meantime." },
  ],
};

export const maxiRoll: Page = {
  path: "/maxi-roll-turf-sydney/",
  title: "Maxi Roll Turf Sydney | Big Rolls for Big Projects | Arrow Turf",
  description: "Maxi roll turf in Sydney: large-format rolls for sports fields, parks and developments. Cover more ground with fewer seams and a cleaner finish. Get a quote.",
  ogImage: "2024/10/002-cover-photo.jpg",
  breadcrumb: [{ name: "Our services", path: "/turf-services-sydney/" }, { name: "Maxi roll turf", path: "/maxi-roll-turf-sydney/" }],
  hero: {
    eyebrow: "Maxi roll turf",
    h1: "Maxi roll turf in Sydney for large-scale projects",
    lead: "Enjoy the freshest, greenest, and most vibrant-looking grass surfaces instantly with our affordable, premium-quality maxi roll turf Sydney residents and businesses can rely on.",
    image: HERO,
  },
  sections: [
    {
      kind: "split",
      eyebrow: "Why get your maxi roll turf from Arrow Turf?",
      heading: "Cover vast areas with the freshest turf fast",
      body: `Gain prompt and precise supply of the exact maxi roll turf specifications required for your residential or commercial project from us here at Arrow Turf. We offer a range of high-quality maxi roll turf varieties to suit your budget and design requirements. From sprawling home lawns to large community parks and school sports fields to vast golf courses and acreage, you can trust us to provide you with the most cost-effective options to suit your needs.

**Maxi rolls provide less joins which means quicker establishment, less drying out and leaves a better finish in open areas.**

Our team here at Arrow Turf is passionate about consistently providing the highest product quality, service excellence, and customer satisfaction. We have built a strong reputation for delivering a timely and dependable supply of high-quality maxi roll turf varieties for residential and commercial projects. So whether it is for your home, business, organization, or community, we here at Arrow can provide you with the most affordable premium quality maxi roll turf supply in Sydney and surrounds.`,
      image: "2024/10/003-why-get-maxi-roll.jpg",
      imageAlt: "Maxi roll turf being harvested",
    },
    { kind: "varieties", eyebrow: "What maxi roll turf varieties can you get from us?", heading: "Our maxi roll turf varieties", only: MAXI },
    {
      kind: "prose",
      eyebrow: "Large-scale supply",
      heading: "Maxi rolls: built for Sydney's biggest projects",
      body: `When a project calls for serious coverage, maxi rolls are often the smartest choice, and they’re a core part of our [turf supply Sydney](/turf-delivery-sydney/) wide offering. Because maxi rolls have fewer joins than standard rolls, they establish faster and leave a cleaner finish across large, open areas like parks, ovals, and acreage properties. If you need the whole job handled, our [turf installation Sydney](/turf-installation-sydney/) specialists have the machinery and experience to lay maxi rolls efficiently at scale.

Managing the logistics yourself? Our [turf pick-up Sydney](/turf-pickup-sydney/) option lets you collect exactly the volume you need directly from our Hawkesbury River farm. For large-scale supply you can count on, we’re the turf company Sydney builders, developers, and councils turn to time and again.`,
      cta: true,
    },
    { kind: "calculator" },
  ],
  faqs: [
    { q: "What exactly is maxi roll turf, and how is it different from standard turf?", a: "Maxi rolls are large-format turf rolls, typically far bigger than standard household rolls, designed to cover ground more quickly with fewer joins. This makes them especially suited to expansive areas where a seamless, professional finish and fast establishment matter. If you’ve ever noticed the checkerboard lines on a newly laid lawn, those are the joins maxi rolls largely eliminate." },
    { q: "What size are your maxi rolls?", a: "Maxi roll dimensions can vary depending on the variety and equipment used to lay them. Our team can talk you through the exact specifications available and recommend the right option based on the size and shape of your project. Knowing your site’s access points and any tight corners also helps us match the roll format to what can physically be manoeuvred on site." },
    { q: "What types of projects are maxi rolls best suited for?", a: "Maxi rolls work well for large residential properties, sporting fields, golf courses, parks, school grounds, and other commercial or council landscaping projects where covering a wide area efficiently is a priority. As a general rule, the larger and more open the area, the more time and money maxi rolls will save you compared with standard rolls." },
    { q: "Do I need special equipment to lay maxi roll turf myself?", a: "Because of their size and weight, maxi rolls generally require specialised machinery to handle and lay correctly. Most customers ordering maxi rolls opt for our professional turf installation service rather than laying them independently. If you’re a contractor with your own laying equipment, let us know your setup and we’ll confirm the roll format is compatible before you order." },
    { q: "Can I pick up maxi roll turf, or is delivery required?", a: "Both options are available. Some customers with suitable vehicles and equipment choose to collect maxi rolls directly from our farm, while others prefer delivery, particularly for larger orders. When you book, tell us how you plan to transport and unload the rolls and we’ll advise which option will be safest and most practical." },
    { q: "How much maxi roll turf will I need for my project?", a: "As with standard turf, you’ll need to calculate the total area of your project in square metres by multiplying length by width, breaking irregular areas into smaller sections if needed. Our team is happy to help you confirm quantities before ordering. For large projects, we generally suggest allowing a small buffer on top of your measured area to cover trimming around edges and obstacles." },
    { q: "Are all of your turf varieties available as maxi rolls?", a: "Availability can vary by variety and season. Get in touch with the specific grass type you’re after and we’ll confirm whether it’s available in maxi roll format for your project. If your preferred variety isn’t currently available as a maxi roll, we can suggest a comparable alternative or let you know when the next cut is expected." },
    { q: "Does maxi roll turf cost more than standard rolls?", a: "Pricing depends on the variety, quantity, and whether you require delivery or installation as part of the order. While maxi rolls can involve additional handling, the reduced joins and faster coverage often make them a cost-effective choice for larger areas. Send us your project size and we’ll quote both formats so you can compare the total cost, not just the per-metre price." },
    { q: "How quickly does maxi roll turf establish compared to standard turf?", a: "Because maxi rolls have significantly fewer joins, they tend to establish more evenly and dry out less than turf laid in smaller sections, which can lead to a faster, more consistent result across large areas. This is a real advantage in warmer months, when the exposed edges of standard rolls are most vulnerable to drying out." },
    { q: "Can maxi roll turf be used for sports fields and golf courses?", a: "Yes, maxi rolls are commonly used for sports fields, ovals, and golf courses thanks to the smooth, joint-free finish they provide, which is particularly important for surfaces that need to perform consistently under heavy use. Fewer joins also means fewer weak points where turf can lift or wear under studded boots and machinery." },
    { q: "How far in advance should I order maxi roll turf for a large project?", a: "Since maxi rolls are often used for bigger jobs, we recommend getting in touch as early as possible in your planning process so we can confirm variety availability, quantity, and a suitable supply date. Early contact is especially important for projects with fixed completion deadlines, such as sports season openings or handover dates." },
    { q: "Do you supply maxi roll turf for council or government projects?", a: "Yes, we regularly supply maxi roll turf for council, school, and other public sector projects, and can work with project managers and contractors on timing and quantity requirements. We’re experienced with the documentation, staged delivery schedules, and site coordination these projects typically involve." },
  ],
};

export const maxiLaying: Page = {
  path: "/maxi-roll-turf-laying-sydney/",
  title: "Maxi Roll Turf Laying Service Sydney | Machine Laid | Arrow Turf",
  description: "Our maxi roll turf laying service in Sydney uses specialist machinery and crews to lay big rolls quickly and evenly on fields, parks and estates. Get a quote.",
  ogImage: "2024/10/001-IMG_1699.png",
  breadcrumb: [{ name: "Our services", path: "/turf-services-sydney/" }, { name: "Maxi roll turf laying", path: "/maxi-roll-turf-laying-sydney/" }],
  hero: {
    eyebrow: "Maxi roll turf laying",
    h1: "Machine-laid maxi roll turf laying service",
    lead: "Enjoy the freshest, greenest, and most vibrant-looking grass surfaces instantly with our affordable, premium-quality maxi roll turf laying Sydney residents and businesses can rely on.",
    image: HERO,
  },
  sections: [
    {
      kind: "split",
      eyebrow: "Why get maxi roll turf laying service?",
      heading: "Finish large projects fast with top-tier workmanship",
      body: `Get the best maxi roll turf laying service in Sydney and surrounding areas for your residential and commercial projects from us here at Arrow Turf. With our highly skilled and experienced team utilising specialised methods and machinery, you can complete the largest projects in no time with exceptional workmanship. Maxi rolls have fewer joins resulting in quicker establishment, less drying out and a neater finish. Whether you have a sprawling home lawn, a large community park or school sports field, or a vast golf course and acreage, you can expect maxi roll turf laying service with unparalleled speed and workmanship.

Our team here at Arrow Turf is passionate about consistently providing the highest product quality, service excellence, and customer satisfaction. We have built a strong reputation for delivering a timely and dependable laying of high-quality maxi roll turf varieties for residential and commercial projects. So whether it is for your home, business, organisation, or community, we here at Arrow can provide you with the most affordable premium quality maxi roll turf laying service in Sydney and surrounding areas.`,
      image: "2024/10/001-IMG_3654-1-620x720.jpg",
      imageAlt: "Machine laying maxi roll turf",
    },
    { kind: "varieties", eyebrow: "What maxi roll turf varieties can we lay for you?", heading: "Our maxi roll turf varieties", only: MAXI },
    { kind: "video", eyebrow: "See it in action", heading: "Maxi rolls going down in minutes", src: "2025/02/IMG_3672.mp4", poster: "2024/10/001-IMG_1699.png" },
    {
      kind: "prose",
      eyebrow: "Expert laying",
      heading: "Expert laying for large-scale maxi roll projects",
      body: `Laying maxi rolls correctly takes specialised equipment and experience, and it’s an area where our [turf installation Sydney](/turf-installation-sydney/) team truly stands out. Because maxi rolls are heavier and less forgiving than standard rolls, getting joins, levels, and drainage right the first time makes a real difference to how the finished surface performs. Every maxi roll we lay is sourced through our own [turf supply Sydney](/turf-delivery-sydney/) wide operation, so quality is consistent from paddock to finished lawn.

If your project doesn’t require full installation, our [turf pick-up Sydney](/turf-pickup-sydney/) option is also available for maxi roll orders. It’s this combination of quality supply and skilled workmanship that’s made us the turf company Sydney trusts for large-scale turf laying projects.`,
      cta: true,
    },
  ],
  faqs: [
    { q: "What equipment do you use to lay maxi roll turf?", a: "We use specialised machinery designed to handle the size and weight of maxi rolls safely and efficiently, allowing our team to lay large areas accurately without the delays or inconsistencies that can come from manual handling alone. The machinery also protects the turf itself, since rolls are unrolled evenly rather than dragged or stretched into place." },
    { q: "How long does it take to lay maxi roll turf on a large project?", a: "Turnaround depends on the size and complexity of the site, but maxi rolls generally allow us to cover large areas considerably faster than standard turf, since there are far fewer joins and less manual repositioning required. Once we’ve seen your site plans or measurements, we can give you a realistic laying schedule to build into your project timeline." },
    { q: "Do you handle site preparation before laying maxi rolls?", a: "Yes. Our maxi roll laying service includes preparing the site beforehand, including levelling the ground and ensuring the correct underlay is in place, so the turf establishes properly once laid. On large sites this groundwork is especially important, as small level inconsistencies become far more visible across a wide, open surface." },
    { q: "What types of projects typically use maxi roll laying services?", a: "Maxi roll laying is commonly used for sports fields, golf courses, parks, school grounds, and large residential or commercial landscapes, essentially any project where a large, seamless area of turf needs to be established quickly. If you’re unsure whether your site is a good fit, describe the space to us and we’ll tell you honestly whether maxi rolls or standard installation is the better approach." },
    { q: "Why does maxi roll turf give a neater finish than standard rolls?", a: "With fewer joins across a given area, there are fewer visible seams and less risk of uneven drying between rolls, which results in a smoother, more consistent-looking surface once the turf has established. The difference is most noticeable in the first few weeks, when a standard-roll lawn typically shows a visible grid pattern that a maxi roll lawn largely avoids." },
    { q: "Can maxi roll turf be laid on sloped or uneven ground?", a: "Yes, though additional site preparation may be required to manage levels and drainage properly. Our team can assess your site and advise on the best approach before laying begins. Getting drainage right at this stage prevents the pooling and soft spots that can undermine turf on slopes later on." },
    { q: "Do I need to organise the turf supply separately, or is it included in the laying service?", a: "We can supply and lay maxi roll turf as a complete package, or work with turf you’ve already sourced, depending on what best suits your project and budget. Most customers choose the complete package, as it means one point of contact and guaranteed coordination between cutting and laying times." },
    { q: "How soon after laying can a maxi roll lawn be used?", a: "As with standard turf, maxi roll lawns need time to establish, generally a few weeks of careful watering and reduced foot traffic, before they’re ready for regular use such as sport or heavy activity. If your project has a fixed opening or handover date, let us know early and we’ll work backwards to schedule laying with enough establishment time built in." },
    { q: "Do you provide maxi roll laying services for council and school projects?", a: "Yes, we regularly carry out maxi roll laying for schools, councils, and other public sector projects, working alongside project managers and contractors to meet specific timelines and site requirements. We’re also accustomed to working around term dates, site inductions, and safety requirements common to these environments." },
    { q: "What ongoing maintenance does a maxi roll lawn need after laying?", a: "Aftercare is similar to standard turf: consistent watering in the first few weeks, followed by regular mowing and fertilising once established. Given the scale of most maxi roll projects, we can also advise on maintenance schedules suited to high-traffic or sporting surfaces. A simple written care plan is available with every project, so whoever maintains the grounds knows exactly what’s needed and when." },
    { q: "Can you provide a quote for a large-scale maxi roll laying project?", a: "Yes. Get in touch with details about your site, including size, location, and intended use, and we’ll put together a free, no-obligation quote for the supply and laying of your maxi roll turf. For complex sites, we can also arrange an on-site assessment so your quote reflects the real conditions rather than estimates." },
    { q: "Do you offer a warranty on maxi roll laying workmanship?", a: "We stand behind the quality of our laying work. If you notice any issues shortly after installation, such as with joins or levelling, get in touch and we’ll address it. Standing behind large-scale projects is how we’ve earned repeat work from councils, schools, and contractors year after year." },
  ],
};
