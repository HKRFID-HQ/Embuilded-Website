export type ProductComponent = {
  name: string;
  detail: string;
  image?: string;
};

export type Product = {
  slug: string;
  model: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  features: string[];
  tags: string[];
  specifications?: [string, string][];
  specGroups?: { title: string; note?: string; rows: [string, string][] }[];
  components?: ProductComponent[];
  applications: string[];
  image: string;
  heroImage?: string;
  diagram?: string;
  solution: string;
  dataSheets?: { label: string; href: string }[];
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
    tags: ["Combustible gas (EX)", "Oxygen (O₂)", "Carbon monoxide (CO)", "Hydrogen sulfide (H₂S)"],
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
    heroImage: "/images/products/hnag1000-4-stx.jpg",
    diagram: "/images/products/gas-detector-dimensions.jpg",
    solution: "gas-monitoring",
    dataSheets: [{ label: "Download data sheet", href: "/downloads/HNAG1000-4-STX-data-sheet.svg" }]
  },
  {
    slug: "hook-cam",
    model: "TRACI Hook Cam",
    title: "Hook Cam Lifting Visibility Kit",
    category: "Site visibility",
    summary: "A closer view of every lift — one connected kit combining video, height sensing, 4G connectivity and local alerts, powered by a quick-swap LiFePO4 battery.",
    description: "The Hook Cam kit brings lifting visibility directly to the hook block. A 4K edge AI camera watches the hook and load while a single-point ToF LiDAR provides a live height reference, so operators and lifting teams see the lift and understand the moment. 4G connectivity links the kit to site teams and TRACI workflows, and a local siren gives immediate audible alerts on site. A quick-swap LiFePO4 battery pack supports flexible deployment without fixed power at the hook. The configuration published here is preliminary: final component models, enclosure and battery housing are confirmed against each project's lifting environment during scoping.",
    features: [
      "4K / 30 fps edge AI camera with 3 TOPS on-device inference keeps the hook and load in view.",
      "Benewake TF02-Pro ToF LiDAR gives a height reference from 0.1 to 40 m with ±5 cm close-range accuracy.",
      "4G cellular connectivity with Ethernet uplink links the kit to site teams and TRACI.",
      "Local siren provides audible alerts at the point of lift.",
      "Quick-swap 24 V-class LiFePO4 battery, 500–600 Wh design target, powers a full shift approach.",
      "Open4S-ready: share camera and sensor data with third-party platforms in their preferred formats."
    ],
    tags: ["4K edge AI camera", "ToF height sensing", "4G connectivity", "Local siren", "Quick-swap battery"],
    specGroups: [
      {
        title: "Camera — reCamera Pro 4GB",
        rows: [
          ["Image sensor", "SC850SL; up to 4K at 30 fps"],
          ["Processor", "RV1126B; quad-core Cortex-A53, 1.2 GHz"],
          ["AI accelerator", "3 TOPS; INT8 / INT16 mixed computation"],
          ["Memory / storage", "4 GB LPDDR4; 16 GB eMMC"],
          ["Expandable storage", "microSD card slot, up to 512 GB"],
          ["Connectivity", "Gigabit Ethernet; Wi-Fi; Bluetooth 5.2"],
          ["Power input", "PoE or 12–24 V DC via 5525 barrel jack"],
          ["Other interfaces", "USB Type-C OTG; 2 × CAN; 2 × GPIO"]
        ]
      },
      {
        title: "Height sensing — Benewake TF02-Pro",
        note: "Sensor range depends on target reflectivity and viewing conditions. Manufacturer accuracy is specified on a 90% reflective target at 25 °C. Height reference depends on sensor alignment and mounting position.",
        rows: [
          ["Measurement range", "0.1–40 m at 90% reflectivity; 0.1–13.5 m at 10% reflectivity"],
          ["Accuracy", "±5 cm (0.1–5 m); ±1% (5–40 m)"],
          ["Resolution", "1 cm"],
          ["Frame rate", "1–1000 Hz; 100 Hz default"],
          ["Field of view", "3° (theoretical)"],
          ["Ambient light", "Up to 100 klux"],
          ["Data interface", "UART / I²C; 3.3 V LVTTL"],
          ["Supply / power", "5–12 V DC; ≤ 1 W"],
          ["Environment", "IP65; −20 to +60 °C operating"],
          ["Size / weight", "69 × 41.5 × 26 mm; 50 g with cable"]
        ]
      },
      {
        title: "Power & connectivity — configuration targets",
        note: "Battery, router, siren and PoE values are configuration targets. Final system dimensions, weight, enclosure rating and operating time depend on the selected assembly. A 24 V-class battery must not be connected directly; regulated DC / PoE distribution matched to each device is required.",
        rows: [
          ["Battery chemistry", "Lithium iron phosphate (LiFePO4)"],
          ["System voltage", "24 V-class; final nominal voltage to be confirmed"],
          ["Energy capacity", "500–600 Wh design target"],
          ["Battery exchange", "Quick-swap pack; connector and latch to be confirmed"],
          ["Protection", "BMS and fused output"],
          ["4G router", "4G LTE with deployment-region bands; Ethernet uplink; external antennas"],
          ["PoE module", "DC-input PoE injector with regulated output"],
          ["Local siren", "External audible alert unit with matched DC supply and control interface"]
        ]
      }
    ],
    components: [
      { name: "reCamera Pro 4GB", detail: "4K edge AI camera", image: "/images/products/hookcam-camera.jpg" },
      { name: "4G router", detail: "Cellular connectivity", image: "/images/products/hookcam-router.png" },
      { name: "Local siren", detail: "Audible site alerts", image: "/images/products/hookcam-siren.jpg" },
      { name: "Quick-swap battery", detail: "24 V-class / 500–600 Wh target", image: "/images/products/hookcam-battery.jpg" },
      { name: "PoE power module", detail: "Camera power + Ethernet", image: "/images/products/hookcam-poe.jpg" },
      { name: "Benewake TF02-Pro", detail: "Height / distance reference", image: "/images/products/hookcam-sensor.png" }
    ],
    applications: [
      "Tower crane lifting", "Mobile crane operations", "Material hoisting", "Blind-lift support", "Lifting-zone safety", "Heavy plant handling"
    ],
    image: "/images/products/hookcam-kit.jpg",
    heroImage: "/images/products/hookcam-kit.jpg",
    solution: "hookcam",
    dataSheets: [
      { label: "Data sheet 01 — System overview", href: "/downloads/TRACI-HookCam-01-system-overview.svg" },
      { label: "Data sheet 02 — Camera & sensor", href: "/downloads/TRACI-HookCam-02-camera-sensor.svg" },
      { label: "Data sheet 03 — Power & connectivity", href: "/downloads/TRACI-HookCam-03-power-connectivity.svg" }
    ]
  }
];

export const productCategories = ["All products", ...new Set(products.map(product => product.category))];
