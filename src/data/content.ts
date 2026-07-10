export type BrandItem = {
  name: string;
  shortName?: string;
  logoSrc?: string;
  href?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  actions: string[];
  results: string[];
  tags: string[];
  imageSrc?: string;
  isVisible: boolean;
  openMode: "modal" | "page" | "external";
  externalHref?: string;
};

export const siteSettings = {
  showHeroMediaOnMobile: true,
  showCaseStudies: false,
  defaultCaseStudyOpenMode: "modal" as const,
};

export const profile = {
  initials: "ME",
  avatarSrc: "", // Add /avatar.jpg in public and set avatarSrc: "/avatar.jpg". Leave empty to show initials.
  name: "Mustafa ElDessoky",
  role: "E-commerce Growth & Performance Marketing Professional",
  eyebrow: "Digital Portfolio",
  headline: "I build growth systems for DTC brands — across ads, Shopify, CRO, reporting, and execution.",
  summary:
    "E-commerce growth and performance marketing professional with 8+ years of experience helping fashion, DTC, healthcare, SaaS, and service brands improve paid media, conversion, reporting, and online revenue.",
  heroImage:
    "/profile/ProfileA.png",
  heroImageAlt: "Professional profile image",
  cvUrl: "/Mustafa-ElDessoky-CV.pdf",
  primaryCta: { label: "View experience", href: "#experience" },
  secondaryCta: { label: "Contact me", href: "#contact" },
  footerText: "Building growth-focused digital experiences, ecommerce systems, and performance marketing engines.",
};

export const heroStats = [
  { label: "Experience", value: "+8 yrs" },
  { label: "Core markets", value: "Egy, GCC" },
  { label: "Focus", value: "DTC Fashion" },
];

export const positioningTags = ["Shopify", "Performance Marketing", "CRO", "GA4 / BigQuery", "Retention", "Creative Testing"];

export const brands: BrandItem[] = [
  // Logo option: put the file in /public/logos and set logoSrc, for example logoSrc: "/logos/iys.svg".
  // Clickable option: add href. Leave href empty to keep it non-clickable.
  { name: "In Your Shoe", shortName: "InYouShoe", href: "#" },
  { name: "Mlameh", shortName: "MLAMEH" },
  { name: "ST Jeans", shortName: "STENG" },
  { name: "ST Jeans", shortName: "1718 Coffee" },  
  { name: "ST Jeans", shortName: "Mobilcom" },
  { name: "ST Jeans", shortName: "Khatoon" },
  { name: "ST Jeans", shortName: "ViewWater" },
  { name: "ST Jeans", shortName: "Faya Studio" },
  { name: "ST Jeans", shortName: "shashlik" },
  { name: "ST Jeans", shortName: "financial Gym" },
  { name: "ST Jeans", shortName: "rasheed" },
  { name: "ST Jeans", shortName: "Apex" },
  { name: "ST Jeans", shortName: "Cleo Boutique" },
  { name: "ST Jeans", shortName: "Seec" },
  { name: "ST Jeans", shortName: "DOOS" },
  { name: "ST Jeans", shortName: "AIMS" },
  { name: "ST Jeans", shortName: "WildWeek" },
  { name: "Edura", shortName: "EDURA" },
  { name: "Teluxy", shortName: "TELUXY" },
  { name: "Enkendle", shortName: "ENKENDLE" },
];

export const strengths = [
  {
    icon: "trending_up",
    title: "Profitable Performance Growth",
    eyebrow: "Acquisition",
    description:
      "Planning, managing, and optimizing paid media across Meta, TikTok, Google, and Snap with a focus on MER, CPA, creative testing, and profitable scale.",
  },
  {
    icon: "storefront",
    title: "Shopify & DTC Execution",
    eyebrow: "Ecommerce",
    description:
      "Improving product pages, collections, landing pages, merchandising, campaign launches, and customer journeys for ecommerce and fashion brands.",
  },
  {
    icon: "query_stats",
    title: "Reporting & Decision Systems",
    eyebrow: "Analytics",
    description:
      "Building clearer performance views across Shopify, GA4, ad platforms, and customer data so teams can move faster with better decisions.",
  },
  {
    icon: "psychology",
    title: "CRO & Customer Thinking",
    eyebrow: "Conversion",
    description:
      "Turning customer friction, behavior, and qualitative insights into practical website improvements, experiments, and retention opportunities.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "dtc-fashion-growth-system",
    title: "DTC Fashion Growth System",
    eyebrow: "Ecommerce · Paid Media · CRO",
    summary:
      "Built a clearer growth operating system across Shopify, campaign planning, reporting, website optimization, and retention execution.",
    problem:
      "The brand needed stronger ecommerce execution, better campaign visibility, and faster decision-making across paid media, website, and customer journeys.",
    actions: [
      "Improved the Shopify execution workflow for launches, collections, product pages, and campaign visibility.",
      "Connected performance conversations to MER, CPA, conversion rate, gross sales, discounts, COGS, and contribution margin.",
      "Created practical CRO and reporting routines to help the team prioritize higher-impact website and media improvements.",
    ],
    results: ["Clearer growth priorities", "Faster campaign execution", "Better decision visibility"],
    tags: ["Shopify", "DTC Fashion", "Performance", "CRO"],
    imageSrc: "",
    isVisible: true,
    openMode: "modal",
  },
  {
    slug: "ecommerce-performance-marketing-build",
    title: "Ecommerce & Performance Marketing Build",
    eyebrow: "Growth Leadership · Operations",
    summary:
      "Managed ecommerce and paid media systems across online revenue, social commerce, retail expansion support, and operational improvements.",
    problem:
      "The business needed a more scalable ecommerce and acquisition engine that could support online growth while improving operational follow-through.",
    actions: [
      "Built performance marketing workflows across acquisition, reporting, and campaign optimization.",
      "Improved ecommerce operations across online storefront, customer journey, and campaign execution.",
      "Connected marketing performance with sales, fulfillment, and business-side outcomes.",
    ],
    results: ["Stronger online revenue engine", "Improved operational follow-through", "More scalable marketing execution"],
    tags: ["Ecommerce", "Paid Media", "Operations", "Growth"],
    imageSrc: "",
    isVisible: true,
    openMode: "page",
  },
  {
    slug: "cross-channel-reporting-system",
    title: "Cross-Channel Reporting System",
    eyebrow: "Analytics · Decision Systems",
    summary:
      "Created clearer reporting logic across ad platforms, Shopify, GA4, and business metrics to support daily and weekly growth decisions.",
    problem:
      "Teams often saw disconnected metrics across platforms, making it difficult to decide whether growth came from media, website, pricing, or merchandising changes.",
    actions: [
      "Defined a practical metric hierarchy from platform KPIs to ecommerce contribution metrics.",
      "Grouped channels and campaign types into clearer views for weekly decision-making.",
      "Reduced reporting noise by focusing on sales, spend, margin, MER, CPA, CR, and operational context.",
    ],
    results: ["Cleaner reporting structure", "Better cross-channel visibility", "Less platform-only thinking"],
    tags: ["GA4", "BigQuery", "Shopify", "Reporting"],
    imageSrc: "",
    isVisible: true,
    openMode: "modal",
  },
];

export const experienceGroups = [
  {
    title: "Full-Time Experience",
    description:
      "Long-term roles where I owned or supported ecommerce growth, performance marketing, operations, content, reporting, and business execution.",
    items: [
      {
        title: "E-commerce & Growth Manager",
        company: "In Your Shoe",
        period: "2025–Present",
        description:
          "Leading ecommerce growth across Shopify, performance marketing, CRO, reporting, retention campaigns, website optimization, and international expansion initiatives.",
        tags: ["Shopify", "DTC", "Fashion", "Growth"],
      },
      {
        title: "Head of E-commerce & Performance Marketing",
        company: "Mlameh",
        period: "2021–Present",
        description:
          "Built and managed ecommerce and performance marketing systems, improved online revenue, delivery performance, social commerce, and paid media execution.",
        tags: ["Performance Marketing", "Ecommerce", "Retail", "Operations"],
      },
      {
        title: "eCom and Performance Manager",
        company: "STENG",
        period: "2022–2023",
        description:
          "Supported ecommerce and performance growth through paid media execution, funnel improvements, reporting, and digital optimization.",
        tags: ["Meta Ads", "Google Ads", "CRO", "Analytics"],
      },
      {
        title: "Digital Marketing Manager",
        company: "EduraAPP",
        period: "2020–2021",
        description:
          "Managed digital marketing activities for an education technology product, supporting user acquisition, campaign execution, and retention-focused growth.",
        tags: ["EdTech", "Digital Marketing", "User Acquisition", "Retention"],
      },
      {
        title: "Digital Marketing Specialist",
        company: "Gegraph Agency",
        period: "2018–2021",
        description:
          "Worked across digital marketing execution, paid media, content, reporting, and client campaign support for multiple business categories.",
        tags: ["Agency", "Meta Ads", "Google Ads", "Reporting"],
      },
      {
        title: "Operation & Marketing Coordinator",
        company: "EQ",
        period: "2016–2018",
        description:
          "Supported operations and marketing coordination, helping connect business execution, customer communication, and campaign activities.",
        tags: ["Operations", "Marketing", "Coordination"],
      },
      {
        title: "Content Writer/Editor",
        company: "IONerds",
        period: "2014–2016",
        description:
          "Created and edited digital content, supporting early experience in online communication, publishing, and audience engagement.",
        tags: ["Content", "Editing", "Digital Media"],
      },
    ],
  },
  {
    title: "Selected Consulting & Project-Based Work",
    description:
      "Focused consulting, project-based, and client-side work across performance marketing, ecommerce analysis, website optimization, and growth support.",
    items: [
      {
        title: "Performance Marketing Manager",
        company: "Docter Media",
        period: "2024–2025",
        description:
          "Supported UAE-based healthcare and service brands with paid media management, campaign optimization, reporting, and performance improvement.",
        tags: ["UAE", "Meta Ads", "Google Ads", "CRO", "Analytics"],
      },
      {
        title: "Performance Marketing Analyst",
        company: "Enkedile",
        period: "2024–2025",
        description:
          "Supported paid media analysis, campaign audits, reporting, and optimization recommendations for UAE market accounts.",
        tags: ["UAE", "Performance Analysis", "Meta Ads", "Google Ads"],
      },
      {
        title: "Digital Marketing Manager",
        company: "ViewWater",
        period: "Project",
        description:
          "Supported digital marketing execution and campaign planning for a project-based KSA market initiative.",
        tags: ["KSA", "Digital Marketing", "Meta Ads", "Google Ads"],
      },
      {
        title: "Website Analyst",
        company: "Seec",
        period: "Project",
        description:
          "Reviewed website performance, user journey, and digital experience to identify improvement opportunities for a KSA-based project.",
        tags: ["KSA", "Website Analysis", "CRO", "Analytics"],
      },
    ],
  },
];
export const experiences = [
  {
    title: "E-commerce & Growth Manager",
    company: "In Your Shoe",
    period: "2025–Present",
    description:
      "Leading ecommerce growth across Shopify, performance marketing, CRO, reporting, retention campaigns, website optimization, and international expansion initiatives.",
    tags: ["Shopify", "DTC", "Fashion", "Growth"],
  },
  {
    title: "Head of E-commerce & Performance Marketing",
    company: "Mlameh",
    period: "2021–Present",
    description:
      "Built and managed ecommerce and performance marketing systems, improved online revenue, delivery performance, social commerce, and paid media execution.",
    tags: ["Performance Marketing", "Ecommerce", "Retail", "Operations"],
  },
  {
    title: "eCom and Performance Manager",
    company: "STENG",
    period: "2022–2023",
    description:
      "Supported brands across fashion, healthcare, SaaS, education, and services with paid media audits, funnel improvements, growth plans, and reporting systems.",
    tags: ["Meta Ads", "Google Ads", "CRO", "Analytics"],
  },
    {
    title: "Digital Marketing Manager",
    company: "EduraAPP",
    period: "2020–2021",
    description:
      "Supported brands across fashion, healthcare, SaaS, education, and services with paid media audits, funnel improvements, growth plans, and reporting systems.",
    tags: ["Meta Ads", "Google Ads", "CRO", "Analytics"],
  },
  {
    title: "Digital Marketing Specialist",
    company: "Gegraph Agency",
    period: "2018–2021",
    description:
      "Supported brands across fashion, healthcare, SaaS, education, and services with paid media audits, funnel improvements, growth plans, and reporting systems.",
    tags: ["Meta Ads", "Google Ads", "CRO", "Analytics"],
  },
    {
    title: "Operation & Marketing Coordinator",
    company: "EQ",
    period: "2016–2018",
    description:
      "Supported brands across fashion, healthcare, SaaS, education, and services with paid media audits, funnel improvements, growth plans, and reporting systems.",
    tags: ["Meta Ads", "Google Ads", "CRO", "Analytics"],
  },
  {
    title: "Content Writer/Editor",
    company: "IONerds",
    period: "2014–2016",
    description:
      "Supported brands across fashion, healthcare, SaaS, education, and services with paid media audits, funnel improvements, growth plans, and reporting systems.",
    tags: ["Meta Ads", "Google Ads", "CRO", "Analytics"],
  },
  {
    title: "Performance Marketing Manager",
    company: "Docter Media",
    period: "2024–2025",
    description:
      "Supported brands across fashion, healthcare, SaaS, education, and services with paid media audits, funnel improvements, growth plans, and reporting systems.",
    tags: ["UAE", "Meta Ads", "Google Ads", "CRO", "Analytics"],
  },
  {
    title: "Performance Marketing analyst",
    company: "Enkedile",
    period: "2024–2025",
    description:
      "Supported brands across fashion, healthcare, SaaS, education, and services with paid media audits, funnel improvements, growth plans, and reporting systems.",
    tags: ["UAE", "Meta Ads", "Google Ads", "CRO", "Analytics"],
  },
    {
    title: "Digital Marketing Manager",
    company: "ViewWater",
    period: "Project",
    description:
      "Supported brands across fashion, healthcare, SaaS, education, and services with paid media audits, funnel improvements, growth plans, and reporting systems.",
    tags: ["KSA", "Meta Ads", "Google Ads", "CRO", "Analytics"],
    },
    {
    title: "Website Analyst",
    company: "Seec",
    period: "Project",
    description:
      "Supported brands across fashion, healthcare, SaaS, education, and services with paid media audits, funnel improvements, growth plans, and reporting systems.",
    tags: ["KSA", "Meta Ads", "Google Ads", "CRO", "Analytics"],
    },
];

export const links = [
  { label: "LinkedIn", href: "#" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Email", href: "mailto:hello@example.com" },
];
