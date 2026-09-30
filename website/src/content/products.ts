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
};

export const products: Product[] = [
  {
    slug: "multi-gas-detector",
    model: "HNAG1000-4-STX",
    title: "Multi-Gas Detector",
    category: "Gas detection",
    summary: "A mobile, continuously monitoring multi-gas detector for combustible gas, oxygen, carbon monoxide and hydrogen sulfide, with on-site alarms and remote data transmission.",
    description: "The HNAG1000-4-STX brings continuous multi-gas monitoring into field operations. It measures gas concentrations around the clock, displays readings on a 2.5-inch colour screen, raises audible and visual alarms when limits are exceeded, and transmits data remotely over cellular or low-power wireless networks. Sensor combinations can be configured for a single gas or up to four gases, using established electrochemical and catalytic-combustion sensing principles. The die-cast aluminium enclosure with fluorocarbon surface treatment is built for hazardous areas and demanding site conditions, and the rechargeable battery supports extended mobile operation without mains power.",
    features: [
      "Intrinsically safe circuit design with explosion-proof construction; lightning and static protection and reverse-polarity protection support reliable field operation.",
      "Infrared remote control allows alarm-point adjustment, calibration and menu operation without opening the enclosure.",
      "Selectable interface language and freely switchable gas concentration units, including ppm, mg/m³, %Vol and %LEL.",
      "2.5-inch colour display presents one to four gas concentrations simultaneously with icon-driven menus.",
      "Automatic zero tracking with temperature compensation and multi-stage calibration keeps readings stable across site conditions.",
      "Data recovery with automatic recognition and blocking of calibration misuse prevents configuration errors.",
      "Modular gas combinations from single-gas to four-gas configurations around the same platform."
    ],
    gases: ["Combustible gas", "Oxygen (O₂)", "Carbon monoxide (CO)", "Hydrogen sulfide (H₂S)"],
    specifications: [
      ["Gases", "Combustible gas, oxygen, carbon monoxide, hydrogen sulfide"],
      ["Detection principle", "Electrochemical, catalytic combustion"],
      ["Measuring ranges", "EX 0–100% LEL · O₂ 0–30% Vol · CO 0–500 ppm · H₂S 0–100 ppm (further ranges on request)"],
      ["Resolution", "EX 0.1% LEL · O₂ 0.1% Vol · CO 1 ppm · H₂S 0.1 ppm"],
      ["Accuracy", "±2% F.S"],
      ["Response time", "T90 < 10 s"],
      ["Operating temperature", "−30 ~ 50 ℃"],
      ["Operating humidity", "0–95% RH"],
      ["Storage temperature", "−40 ~ 70 ℃"],
      ["Warm-up time", "10 s"],
      ["Operating current", "≤ 50 mA"],
      ["Operating pressure", "86–106 kPa"],
      ["Supply voltage", "12–30 V DC"],
      ["Battery", "Rechargeable lithium 2800 mAh (24 V); over 12 h operation in four-gas mode without pump"],
      ["Output & connectivity", "GPRS, 4G, Wi-Fi, LoRa, ZigBee; local audible and visual alarm with relay options"],
      ["Enclosure", "Die-cast aluminium with fluorocarbon coating, IP66"],
      ["Explosion rating", "Ex d IIC T6"],
      ["Dimensions", "460 × 340 × 115 mm (H × W × D)"],
      ["Installation", "Floor-standing or mobile deployment"],
      ["Service life", "3–5 years"],
      ["Warranty", "1 year"]
    ],
    applications: [
      "Oil & petrochemical", "Chemical & pharmaceutical plants", "Smelting, steel & coal operations", "Thermal power & boiler rooms", "Environmental & emissions monitoring", "Sewage and waste treatment", "Tunnel & underground construction", "Fuel stations, gas pipelines & LPG facilities", "Indoor air quality & confined-space entry", "Hazardous-area safety protection"
    ],
    image: "/images/products/gas-detector-variants.jpg",
    diagram: "/images/products/gas-detector-dimensions.jpg",
    solution: "gas-monitoring"
  }
];

export const productCategories = ["All products", ...new Set(products.map(product => product.category))];
