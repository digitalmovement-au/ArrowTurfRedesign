export const UPLOADS = (import.meta.env.PUBLIC_UPLOADS_BASE as string | undefined) ?? "https://www.arrowturf.com.au/wp-content/uploads";

/** Resolve a WordPress uploads path ("2024/10/foo.jpg") or pass through absolute / root paths. */
export const img = (p?: string) => (!p ? "" : /^(https?:)?\/\//.test(p) || p.startsWith("/") ? p : `${UPLOADS}/${p}`);

export const business = {
  name: "Arrow Turf",
  legalName: "Arrow Turf",
  phone: "0490 779 707",
  phoneHref: "tel:0490779707",
  email: "info@arrowturf.com.au",
  street: "104 Cornwallis Road",
  locality: "Cornwallis",
  region: "NSW",
  postcode: "2756",
  address: "104 Cornwallis Road, Cornwallis, NSW 2756",
  mapUrl: "https://maps.app.goo.gl/uE4DkVwdd2g9nsHBA",
  facebook: "https://www.facebook.com/profile.php?id=61565895642109",
  instagram: "https://www.instagram.com/arrowturf",
  url: "https://www.arrowturf.com.au",
  geo: { lat: -33.5947, lng: 150.7958 },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  {
    label: "Turf varieties",
    href: "/our-turf-varieties",
    children: [
      { label: "Sir Walter Soft Leaf Buffalo", href: "/sir-walter-soft-leaf-buffalo-turf-sydney/" },
      { label: "Matilda Soft Leaf Buffalo", href: "/matilda-soft-leaf-buffalo-turf-sydney/" },
      { label: "Kikuyu", href: "/kikuyu-turf-sydney/" },
      { label: "Wintergreen Couch", href: "/wintergreen-couch-turf-sydney/" },
      { label: "Greenlees Park Couch", href: "/greenlees-park-couch-sydney/" },
    ],
  },
  {
    label: "Our services",
    href: "/turf-services-sydney/",
    children: [
      { label: "Turf delivery", href: "/turf-delivery-sydney/" },
      { label: "Turf pickup", href: "/turf-pickup-sydney/" },
      { label: "Turf installation", href: "/turf-installation-sydney/" },
      { label: "Maxi roll turf", href: "/maxi-roll-turf-sydney/" },
      { label: "Maxi roll turf laying", href: "/maxi-roll-turf-laying-sydney/" },
    ],
  },
  { label: "Our projects", href: "/turf-projects-sydney/" },
  { label: "Turf care", href: "/turf-care/" },
  { label: "Contact", href: "/contact/" },
];

export const whyChooseUs = [
  { icon: "award", title: "Premium quality at affordable prices", body: "You will get the best instant turf varieties for residential and commercial use that our industry has to offer at prices that won't break the bank." },
  { icon: "sliders", title: "Solutions tailored to suit your budget & design needs", body: "Here at Arrow Turf, we have many varieties of turf to suit whatever your environment may be as every job has its own characteristics that need to be met." },
  { icon: "users", title: "Highly skilled & experienced professionals", body: "You will have friendly and respectful experts with over 45 years of skills, knowledge, and experience who you can trust to deliver exceptional workmanship on time every time." },
  { icon: "home", title: "Local family owned & run business", body: "You will be working with a family-owned company dedicated to helping home and business owners achieve their goals in the most timely and cost-effective ways possible." },
];

export const reviews = [
  { name: "sallyanne Hage", text: "Trevor was fantastic from the very first time I spoke to him. He informed me on every detail , delivery time, watering/care instructions . He made sure the delivery truck didn’t park on my driveway and also marked out my block perfectly- making sure the turf layers got the job done correctly first time. Thank you so much for a truly great experience. The turf looks beautiful" },
  { name: "Thomas Rance", text: "I can highly recommend Zak and the whole team, I ordered 170sqm of sir Walter buffalo for my front lawn. Very happy with the organisation, delivery and price! Look forward to dealing with them again for my back yard project" },
  { name: "Cat", text: "Turf delivered today, extremely happy with the grass and customer service." },
  { name: "haylee gibson", text: "Highly Recommend Arrow Turf, good quality and even better prices!" },
];

/** Variety summaries used on cards, the explorer and the quote form. Ratings are 1–5 and drive the comparison tool. */
export const varieties = [
  {
    slug: "sir-walter",
    name: "Sir Walter Soft Leaf Buffalo",
    short: "Sir Walter",
    href: "/sir-walter-soft-leaf-buffalo-turf-sydney/",
    tags: "Families · Children · Pets",
    image: "2026/07/Sir-Walter.webp",
    blurb: "With its luxuriously soft feel and vibrant beauty yet super low maintenance requirements, this buffalo grass works best for homes with families, children, and pets who want to play and relax on the lawn all year round.",
    ratings: { shade: 5, wear: 5, drought: 5, softness: 5, lowMaintenance: 5 },
    hue: 128,
  },
  {
    slug: "matilda",
    name: "Matilda Soft Leaf Buffalo",
    short: "Matilda",
    href: "/matilda-soft-leaf-buffalo-turf-sydney/",
    tags: "Lawns · Landscapes",
    image: "2026/07/Matilda.webp",
    blurb: "With its finer and thinner stems and stolons and amazingly soft feel underfoot yet exceptional tolerance to wear and tear, this proudly Australian-bred turf is perfect for all types of lawns and landscapes.",
    ratings: { shade: 5, wear: 5, drought: 5, softness: 4, lowMaintenance: 4 },
    hue: 122,
  },
  {
    slug: "kikuyu",
    name: "Kikuyu",
    short: "Kikuyu",
    href: "/kikuyu-turf-sydney/",
    tags: "Schools · Parks · Playing fields",
    image: "2026/07/Kikuyu.webp",
    blurb: "With its hard-wearing and easy-to-care-for medium texture yet still soft enough for sitting, Kikuyu is perfect for schools, parks, playing fields, and running oval surrounds. This grass variety will also work for yards.",
    ratings: { shade: 2, wear: 3, drought: 5, softness: 3, lowMaintenance: 3 },
    hue: 104,
  },
  {
    slug: "wintergreen",
    name: "Wintergreen Couch",
    short: "Wintergreen",
    href: "/wintergreen-couch-turf-sydney/",
    tags: "Stadiums · Golf courses",
    image: "2026/07/WinterGreen.webp",
    blurb: "With its thick mat and fine blade yet soft feel underfoot, this couch grass is used in Australia and the world's top sports stadiums and golf courses. This grass variety can also be used for residential and commercial lawns and landscapes.",
    ratings: { shade: 2, wear: 5, drought: 5, softness: 4, lowMaintenance: 2 },
    hue: 112,
  },
  {
    slug: "greenlees",
    name: "Greenlees Park Couch",
    short: "Greenlees Park",
    href: "/greenlees-park-couch-sydney/",
    tags: "Golf · Bowling greens",
    image: "2026/07/Greenless.webp",
    blurb: "With its soft feel and fine texture, this darker green, premium couch grass is perfect for golf and bowling greens as well as front and backyards. This grass variety is also great for commercial landscapes as well as sports fields.",
    ratings: { shade: 1, wear: 5, drought: 5, softness: 4, lowMaintenance: 2 },
    hue: 135,
  },
];

export const services = [
  { title: "Turf delivered", href: "/turf-delivery-sydney/", image: "2025/02/5-1.png", icon: "truck", blurb: "Cut fresh for your delivery day and placed by forklift, six days a week." },
  { title: "Turf pickup", href: "/turf-pickup-sydney/", image: "2025/02/4-2.png", icon: "pickup", blurb: "Collect straight from our Hawkesbury River farm at a time that suits you." },
  { title: "Maxi roll turf supply", href: "/maxi-roll-turf-sydney/", image: "2025/02/2-2.png", icon: "roll", blurb: "Big rolls, fewer joins and faster coverage for large-scale projects." },
  { title: "Maxi roll turf laying", href: "/maxi-roll-turf-laying-sydney/", image: "2025/02/1-2.png", icon: "machine", blurb: "Machine-laid maxi rolls for parks, fields and big open spaces." },
  { title: "Turf installation", href: "/turf-installation-sydney/", image: "2025/02/3-2.png", icon: "spade", blurb: "Site prep and laying by our experienced crews, start to finish." },
];

export const serviceAreas = ["Austral","Baulkham Hills","Box Hill","Camden","Campbelltown","Castle Hill","Central Coast","Cronulla","Edmondson Park","Epping","Gledswood Hills","Gregory Hills","Kellyville","Kellyville Ridge","Leumeah","Liverpool","Lower North Shore","Marsden Park","Menangle Park","Minto","Narellan","North Richmond","North Shore","Northern Beaches","Oran Park","Orchard Hills","Parramatta","Penrith","Riverstone","Schofields","Sutherland Shire","Blue Mountains","Windsor","Wollongong","Annangrove","Appin","Arcadia","Auburn","Badgerys Creek","Bankstown","Bringelly","Cobbitty","Drummoyne","Dural","Engadine","Fairfield","Glenorie","Greystanes","Harrington Park","Hornsby","Hurstville","Ingleburn","Kenthurst","Leppington","Manly","Maroubra","Matraville","Menai","Mona Vale","Mosman","Narrabeen","Picton","Pymble","Randwick","Revesby","Rose Bay","Ryde","St Ives","St Marys","Strathfield","Tahmoor","Terrey Hills","Vaucluse","Wentworthville","Wetherill Park","Wilton"];
