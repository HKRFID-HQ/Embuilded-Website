export type ProductComponent = {
  name: string;
  detail: string;
  image?: string;
  specs?: [string, string][];
  note?: string;
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
    components: [
      {
        name: "reCamera Pro 4GB",
        detail: "4K edge AI camera",
        image: "/images/products/hookcam-camera.jpg",
        specs: [
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
        name: "Benewake TF02-Pro",
        detail: "Height / distance reference",
        image: "/images/products/hookcam-sensor.png",
        note: "Sensor range depends on target reflectivity and viewing conditions. Manufacturer accuracy is specified on a 90% reflective target at 25 °C. Height reference depends on sensor alignment and mounting position.",
        specs: [
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
        name: "Quick-swap battery",
        detail: "24 V-class / 500–600 Wh target",
        image: "/images/products/hookcam-battery.jpg",
        note: "Battery values are configuration targets. A 24 V-class battery must not be connected directly; regulated DC / PoE distribution matched to each device is required.",
        specs: [
          ["Battery chemistry", "Lithium iron phosphate (LiFePO4)"],
          ["System voltage", "24 V-class; final nominal voltage to be confirmed"],
          ["Energy capacity", "500–600 Wh design target"],
          ["Battery exchange", "Quick-swap pack; connector and latch to be confirmed"],
          ["Protection", "BMS and fused output"]
        ]
      },
      {
        name: "4G router",
        detail: "Cellular connectivity",
        image: "/images/products/hookcam-router.png",
        specs: [
          ["Connectivity", "4G LTE with deployment-region bands; Ethernet uplink; external antennas"]
        ]
      },
      {
        name: "PoE power module",
        detail: "Camera power + Ethernet",
        image: "/images/products/hookcam-poe.jpg",
        specs: [
          ["Power delivery", "DC-input PoE injector with regulated output"]
        ]
      },
      {
        name: "Local siren",
        detail: "Audible site alerts",
        image: "/images/products/hookcam-siren.jpg",
        specs: [
          ["Alert output", "External audible alert unit with matched DC supply and control interface"]
        ]
      }
    ],
    applications: [
      "Tower crane lifting", "Mobile crane operations", "Material hoisting", "Blind-lift support", "Lifting-zone safety", "Heavy plant handling"
    ],
    image: "/images/products/hookcam-kit.jpg",
    heroImage: "/images/products/hookcam-kit.jpg",
    solution: "hookcam",
    dataSheets: [
      { label: "Download data sheet", href: "/downloads/TRACI-HookCam-datasheet.pdf" }
    ]
  },
  {
    slug: "outrigger-monitoring-kit",
    model: "TRACI Outrigger Kit",
    title: "Outrigger Monitoring Kit",
    category: "Plant monitoring",
    summary: "Four points. One connected kit — track each extending outrigger with magnetic-mount ToF sensing, 4G connectivity and local siren and strobe alerts.",
    description: "The Outrigger Monitoring Kit watches all four outriggers at once. Each extending section carries a magnetic target board while a ToF laser distance sensor fixed inboard measures the horizontal relative distance, so crews see extension status per point without manual checks. Readings travel over LoRaWAN to a 4G gateway inside the kit's waterproof case, and a siren and strobe give immediate audible and visual alerts on site. Magnetic mounting keeps deployment fast with no permanent modification to the machine. Final mounting positions, alarm thresholds and integration scope are confirmed against each machine during scoping.",
    features: [
      "Four matched sensor–target pairs track each extending outrigger, with a 2–350 cm detection range.",
      "EM400-TLD ToF laser distance sensing with ±2 cm accuracy from −20 °C to +70 °C.",
      "Magnetic mounting for sensors and target boards — no permanent modification to the machine.",
      "8-channel LoRaWAN gateway with 4G LTE / Ethernet backhaul links the kit to monitoring workflows.",
      "Local siren and strobe provide audible and visual alerts at the machine.",
      "Waterproof case protects the central equipment; kit deploys as one portable unit."
    ],
    tags: ["ToF distance sensing", "Magnetic mounting", "LoRaWAN + 4G", "Siren & strobe alerts", "Waterproof case"],
    components: [
      {
        name: "EM400-TLD ToF sensor ×4",
        detail: "One sensor per outrigger, fixed inboard",
        image: "/images/products/outrigger-sensor.jpg",
        note: "Sensor fixed inboard; the target moves with the extending section. Horizontal relative distance; final mounting and orientation to confirm.",
        specs: [
          ["Technology", "Time-of-flight (ToF) laser distance sensing"],
          ["Detection range", "2–350 cm; 4 matched pairs"],
          ["Detection accuracy", "±2 cm (−20 °C to +70 °C)"],
          ["Resolution / field of view", "1 mm / 27°"],
          ["Sensor protection", "IP67 rated sensor enclosure"],
          ["Link / configuration", "LoRaWAN / NFC via Milesight ToolBox"]
        ]
      },
      {
        name: "Target boards ×4",
        detail: "One matching target per sensor",
        image: "/images/products/outrigger-target.jpg",
        specs: [
          ["Target alignment", "Upright board facing the inboard sensor"],
          ["Mounting", "Magnetic mounts, matched to each sensor"]
        ]
      },
      {
        name: "UG63 · 4G gateway ×1",
        detail: "LoRaWAN gateway with cellular backhaul",
        image: "/images/products/outrigger-gateway.jpg",
        specs: [
          ["Sensor network", "8-channel LoRaWAN gateway"],
          ["Backhaul", "4G LTE / Ethernet"],
          ["Housing", "Installed in the kit's waterproof case"],
          ["Gateway protection", "IP30 — protected installation required"]
        ]
      },
      {
        name: "Siren & strobe",
        detail: "Audible and visual local alerting",
        image: "/images/products/outrigger-siren.jpg",
        note: "Power, cellular service and the local alarm interface are matched during integration.",
        specs: [
          ["Alert output", "Siren / strobe via a matched control interface"]
        ]
      },
      {
        name: "Waterproof case",
        detail: "Protective housing for the central equipment",
        image: "/images/products/outrigger-case.jpg",
        specs: [
          ["Role in the kit", "Protects gateway, power and alarm interface in one portable enclosure"]
        ]
      }
    ],
    applications: [
      "Mobile crane setup", "Outrigger position checks", "Aerial work platforms", "Heavy plant stabilisation", "Lifting operations", "Depot and yard handling"
    ],
    image: "/images/products/outrigger-crane.jpg",
    heroImage: "/images/products/outrigger-crane.jpg",
    solution: "outrigger-monitoring",
    dataSheets: [
      { label: "Download data sheet", href: "/downloads/TRACI-Outrigger-Kit-datasheet.pdf" }
    ]
  },
  {
    slug: "confined-space-sensor-kit",
    model: "TRACI Confined Space Kit",
    title: "Confined Space Sensor Kit",
    category: "Personnel safety",
    summary: "Know who is inside — BLE location beacons and a wearable LoRaWAN tracker connect personnel to a 4G-enabled gateway and tablet. Portable equipment, one connected kit.",
    description: "The Confined Space Sensor Kit keeps personnel visible inside tanks, shafts and enclosed work areas. Three fixed BLE beacons broadcast reference IDs; a wearable T1000 tracker reads them for zone-based location and uplinks over LoRaWAN to a UG63 gateway at the surface, where 4G carries data to the monitoring platform and a tablet site view. An SOS button, LED and buzzer on the tracker give workers a direct alert channel. The whole kit — gateway, battery, beacons and trackers — packs into a protective case for portable deployment. Scope is personnel location; gas and oxygen sensing is outside this kit. Validated radio coverage, beacon placement and platform integration are confirmed on site.",
    features: [
      "Three fixed BLE reference points support zone-based personnel location.",
      "Card-size T1000 wearable tracker with SOS button, LED and buzzer, IP65.",
      "LoRaWAN uplinks reach the surface gateway; 4G carries data to the platform.",
      "External antenna with 5 m cable keeps the gateway connected from the surface.",
      "Tablet site view shows personnel location and SOS events through the integrated platform.",
      "Open4S-ready: connect location data to TRACI or your preferred platform."
    ],
    tags: ["Wearable LoRaWAN tracker", "BLE location beacons", "4G gateway", "SOS alerts", "Portable kit"],
    components: [
      {
        name: "T1000 wearable tracker",
        detail: "Card-size personnel tracker; quantity matched to crew size",
        image: "/images/products/confined-tracker.jpg",
        note: "Indoor location is resolved by the application using beacon IDs and RSSI.",
        specs: [
          ["Positioning", "GNSS / Wi-Fi scanning / BLE scanning"],
          ["Data link", "LoRaWAN v1.0.4 Class A"],
          ["Dimensions", "85 × 55 × 6.5 mm"],
          ["Power", "700 mAh rechargeable lithium battery"],
          ["User interface", "SOS button, LED and buzzer"],
          ["Protection", "IP65"]
        ]
      },
      {
        name: "BC02 location beacons ×3",
        detail: "Fixed BLE location references",
        image: "/images/products/confined-beacon.jpg",
        note: "Beacon positions and zone mapping are verified during site commissioning.",
        specs: [
          ["Bluetooth", "Bluetooth LE 5.0 / iBeacon"],
          ["Dimensions", "115 × 100 × 29 mm"],
          ["Battery", "4,000 mAh replaceable Li/SOCl₂"],
          ["Protection", "IP68 ingress / IK08 impact resistance"],
          ["Role in the kit", "Broadcast fixed reference IDs to the tracker"]
        ]
      },
      {
        name: "UG63 gateway + antenna",
        detail: "4G LoRaWAN gateway with external antenna",
        image: "/images/products/confined-gateway.jpg",
        note: "UG63 is IP30; keep it in protected housing. SIM / data service required.",
        specs: [
          ["LoRaWAN gateway", "8 channels"],
          ["Backhaul", "4G LTE / Ethernet"],
          ["Antenna extension", "External antenna with a 5 m cable"],
          ["Site display", "Tablet via the connected monitoring platform"]
        ]
      },
      {
        name: "Battery supply",
        detail: "Portable gateway power",
        specs: [
          ["Role in the kit", "Portable power for the gateway and surface equipment"],
          ["Capacity / runtime", "To confirm against shift pattern"]
        ]
      },
      {
        name: "Protective casing",
        detail: "Housing for central equipment",
        image: "/images/products/confined-case.jpg",
        specs: [
          ["Role in the kit", "Carries gateway, battery and accessories as one portable kit"],
          ["Final enclosure", "To confirm"]
        ]
      },
      {
        name: "Tablet",
        detail: "Site monitoring interface",
        specs: [
          ["Role in the kit", "Personnel location and SOS events via the platform"],
          ["Model / platform", "To confirm"]
        ]
      }
    ],
    applications: [
      "Confined space entry", "Tanks and vessels", "Tunnels and shafts", "Maintenance shutdowns", "Manhole works", "Lone-work zones"
    ],
    image: "/images/products/confined-hero.jpg",
    heroImage: "/images/products/confined-hero.jpg",
    solution: "worker-tracking",
    dataSheets: [
      { label: "Download data sheet", href: "/downloads/TRACI-ConfinedSpace-Kit-datasheet.pdf" }
    ]
  }
];

export const productCategories = ["All products", ...new Set(products.map(product => product.category))];
