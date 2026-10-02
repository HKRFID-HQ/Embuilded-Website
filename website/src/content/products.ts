export type Product = {
  slug: string;
  model: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  features: string[];
  gases: string[];
  specifications: [string, string][];
  applications: string[];
  image: string;
  diagram: string;
  solution: string;
  dataSheet: string;
};

export const products: Product[] = [
  {
    slug: "multi-gas-detector",
    model: "HNAG1000-4-STX",
    title: "Portable Online Four Gas Detector",
    category: "Gas detection",
    summary: "Continuous monitoring of EX, O2, CO and H2S, with local audible and visual alarms and remote data transmission.",
    description: "The HNAG1000-4-STX brings 24-hour connected gas monitoring into field operations. A 2.5-inch colour display presents one to four gas concentrations simultaneously, local audible and visual alarms trigger when limits are exceeded, and built-in temperature and humidity sensing adds environmental context. Readings transmit remotely over GPRS, 4G, Wi-Fi, LoRa or ZigBee, so site teams and control rooms see the same live picture. Sensor combinations can be configured for a single gas or up to four gases, using established electrochemical and catalytic-combustion sensing principles. The die-cast aluminium enclosure with fluorocarbon surface treatment is built for hazardous areas and demanding site conditions, and the rechargeable battery supports extended mobile operation without mains power.",
    features: [
      "24-hour connected monitoring of EX, O2, CO and H2S.",
      "2.5-inch colour display presents one to four gas concentrations simultaneously with icon-driven menus.",
      "Local audible and visual alarms, with relay options for on-site signalling.",
      "Temperature and humidity sensing adds environmental context to gas readings.",
      "Remote data transmission over GPRS, 4G, Wi-Fi, LoRa or ZigBee.",
      "Explosion-proof IP66 enclosure, rated Ex d IIC T6 for hazardous areas.",
      "Over 16 hours of single-gas or 12 hours of four-gas battery operation without pump."
    ],
    gases: ["Combustible gas (EX)", "Oxygen (O₂)", "Carbon monoxide (CO)", "Hydrogen sulfide (H₂S)"],
    specifications: [
      ["Target gases", "EX / O₂ / CO / H₂S"],
      ["Measuring ranges", "EX 0–100 %LEL · O₂ 0–30 %vol · CO 0–500 ppm · H₂S 0–100 ppm"],
      ["Resolution", "EX 0.1 %LEL · O₂ 0.1 %vol · CO 1 ppm · H₂S 0.1 ppm"],
      ["Accuracy & response", "±2 % F.S. · T90 < 10 s"],
      ["Environment", "−30 to 50 ℃ · 0–95 %RH · 86–106 kPa"],
      ["Supply", "12–30 V DC · ≤ 50 mA"],
      ["Protection", "IP66 · Ex d IIC T6"],
      ["Wireless", "GPRS, 4G, Wi-Fi, LoRa and ZigBee"],
      ["Runtime", "Over 16 h single gas · over 12 h four gas without pump"],
      ["Dimensions", "460 H × 340 W × 115 D mm"],
      ["Warranty", "1 year · expected service life 3–5 years"]
    ],
    applications: [
      "Oil & gas", "Chemical processing", "Steel", "Power", "Wastewater", "Tunnels", "Hazardous-area safety"
    ],
    image: "/images/products/gas-detector-variants.jpg",
    diagram: "/images/products/gas-detector-dimensions.jpg",
    solution: "gas-monitoring",
    dataSheet: "/downloads/HNAG1000-4-STX-data-sheet.svg"
  }
];

export const productCategories = ["All products", ...new Set(products.map(product => product.category))];
