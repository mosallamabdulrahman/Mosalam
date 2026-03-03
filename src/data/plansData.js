export const pricingPlans = [
  {
    name: "Shared",
    description: "Perfect for blogs and small business websites.",
    price: "$9",
    suffix: "/mo",
    icon: "dns",
    iconWrap:
      "inline-flex items-center justify-center p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform",
    features: [
      "1 Website",
      "10GB NVMe Storage",
      "Free SSL Certificate",
      "Daily Backups",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "VPS Pro",
    description: "Scalable power for growing applications.",
    price: "$29",
    suffix: "/mo",
    icon: "settings_input_component",
    iconWrap:
      "inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl text-primary transform transition-transform duration-300 group-hover:rotate-12",
    features: [
      "Unlimited Websites",
      "4 vCPU Cores",
      "8GB RAM",
      "100GB NVMe Storage",
      "Priority Support",
    ],
    cta: "Select VPS Plan",
    featured: true,
    ribbon: "Most Popular",
  },
  {
    name: "Dedicated",
    description: "Maximum performance and total control.",
    price: "$149",
    suffix: "/mo",
    icon: "storage",
    iconWrap:
      "inline-flex items-center justify-center p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform",
    features: [
      "Single Tenant Server",
      "16 Core CPU",
      "64GB RAM",
      "2TB SSD Raid-10",
    ],
    cta: "Configure Server",
    featured: false,
  },
  {
    name: "Managed",
    description: "Custom solutions for large scale needs.",
    price: "Custom",
    icon: "business_center",
    iconWrap:
      "inline-flex items-center justify-center p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform",
    features: [
      "Multi-Server Cluster",
      "Load Balancing",
      "Dedicated Account Manager",
      "24/7/365 Engineer Support",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export const comparisonColumns = [
  "Shared",
  "VPS Pro",
  "Dedicated",
  "Managed",
];

export const comparisonRows = [
  {
    section: "Hardware & Resources",
    rows: [
      ["CPU Cores", "Shared", "4 vCPU", "16 Cores", "Custom"],
      ["RAM", "2 GB", "8 GB", "64 GB", "Scalable"],
      ["Storage", "10GB NVMe", "100GB NVMe", "2TB SSD", "Custom SAN"],
      ["Bandwidth", "1 TB", "5 TB", "20 TB", "Unmetered"],
    ],
  },
  {
    section: "Security & Support",
    rows: [
      ["DDoS Protection", "check_circle", "check_circle", "check_circle", "verified"],
      ["Free SSL", "check_circle", "check_circle", "check_circle", "check_circle"],
      ["Uptime SLA", "99.9%", "99.95%", "99.99%", "100%"],
    ],
  },
];

export const comparisonCtas = [
  "Choose Shared",
  "Choose VPS",
  "Configure Dedicated",
  "Contact Sales",
];

export const addons = [
  {
    icon: "security",
    iconWrap:
      "p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300",
    name: "Advanced Firewall",
    description: "Enhanced protection against intrusion and web attacks.",
    price: "$5",
  },
  {
    icon: "backup",
    iconWrap:
      "p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300",
    name: "Hourly Backups",
    description: "Keep your data safe with automated hourly snapshots.",
    price: "$12",
  },
  {
    icon: "speed",
    iconWrap:
      "p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300",
    name: "Premium CDN",
    description: "Accelerate content delivery globally with our premium CDN.",
    price: "$8",
  },
];
