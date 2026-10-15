import type { PageHeroScene } from "@/components/shared";

export type InsightCategory = "Product" | "Case study" | "Open4S" | "Industry";

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  /** ISO date, displayed localized. */
  date: string;
  minutes: number;
  scene: PageHeroScene;
  sections: { heading?: string; paragraphs: string[] }[];
  related?: { label: string; href: string }[];
};

export const insightCategories: ("All insights" | InsightCategory)[] = ["All insights", "Product", "Case study", "Open4S", "Industry"];

export const insights: Insight[] = [
  {
    slug: "hook-cam-lifting-visibility",
    scene: "crane",
    title: "Hook Cam: a closer view of every lift",
    excerpt: "One connected kit brings 4K video, height sensing, 4G connectivity and local alerts directly to the hook block — see the lift, understand the moment.",
    category: "Product",
    date: "2026-10-15",
    minutes: 4,
    sections: [
      {
        paragraphs: [
          "Lifting operations concentrate risk into a few square metres around the hook. The Hook Cam kit is built around a simple idea: put a connected set of eyes and a height reference exactly where the lift happens, and link that picture to the people who need it."
        ]
      },
      {
        heading: "What is in the kit",
        paragraphs: [
          "The preliminary configuration combines six components: a reCamera Pro 4K edge AI camera, a Benewake TF02-Pro single-point ToF LiDAR for height reference, a 4G router, a local siren, a PoE power module and a quick-swap LiFePO4 battery pack. Video, sensing, connectivity, alerting and power arrive as one considered kit rather than separate procurement exercises.",
          "The camera captures up to 4K at 30 fps with 3 TOPS of on-device AI compute, while the height sensor reads from 0.1 to 40 m with ±5 cm close-range accuracy. A 500–600 Wh battery design target supports shift-length deployment without fixed power at the hook."
        ]
      },
      {
        heading: "Connected from day one",
        paragraphs: [
          "4G connectivity links the kit to site teams and TRACI workflows, and a local siren gives immediate audible alerts at the point of lift. Through Open4S, camera and sensor data can also flow into an existing CMP, SSSS platform or dashboard in the formats those systems already accept."
        ]
      },
      {
        heading: "An honest configuration",
        paragraphs: [
          "The published configuration is preliminary. Final component models, enclosure and battery housing are confirmed against each project's lifting environment during scoping — so the kit you deploy is specified for your cranes, not for a catalogue page."
        ]
      }
    ],
    related: [
      { label: "Explore the Hook Cam kit", href: "/products/hook-cam" },
      { label: "The HookCam solution", href: "/solutions/hookcam" }
    ]
  },
  {
    slug: "hnag1000-4-stx-connected-gas-detection",
    scene: "industrial",
    title: "Portable gas detection that stays connected",
    excerpt: "The HNAG1000-4-STX portable online four gas detector pairs 24-hour monitoring of EX, O2, CO and H2S with remote transmission over 4G, Wi-Fi, LoRa or ZigBee.",
    category: "Product",
    date: "2026-10-08",
    minutes: 3,
    sections: [
      {
        paragraphs: [
          "Fixed gas detection covers known hazard points. Portable connected detection covers everything else — confined spaces, temporary works and areas where conditions change faster than infrastructure. The HNAG1000-4-STX is built for that gap."
        ]
      },
      {
        heading: "Four gases, one picture",
        paragraphs: [
          "A 2.5-inch colour display presents one to four gas concentrations simultaneously, with local audible and visual alarms when limits are exceeded. Temperature and humidity sensing adds environmental context to every reading.",
          "Readings transmit remotely over GPRS, 4G, Wi-Fi, LoRa or ZigBee, so site teams and control rooms see the same live picture without manual patrols or paper logs."
        ]
      },
      {
        heading: "Built for hazardous areas",
        paragraphs: [
          "The die-cast aluminium enclosure carries IP66 protection and an Ex d IIC T6 rating, with battery operation beyond 16 hours in single-gas configuration. Measuring ranges cover EX 0–100 %LEL, O₂ 0–30 %vol, CO 0–500 ppm and H₂S 0–100 ppm at ±2 % F.S. accuracy."
        ]
      }
    ],
    related: [
      { label: "View product specifications", href: "/products/multi-gas-detector" },
      { label: "The gas monitoring solution", href: "/solutions/gas-monitoring" }
    ]
  },
  {
    slug: "open4s-two-way-integration",
    scene: "buildings",
    title: "Open4S: connect your way, in both directions",
    excerpt: "Two-way integration means TRACI devices can feed your existing platforms, compatible third-party devices can feed TRACI, and nobody has to replace infrastructure that already works.",
    category: "Open4S",
    date: "2026-10-01",
    minutes: 4,
    sections: [
      {
        paragraphs: [
          "Most site technology decisions are framed as replacements: rip out the old platform, adopt the new one. Open4S starts from a different premise — the systems you already run hold value, and new capability should connect to them, not compete with them."
        ]
      },
      {
        heading: "Two directions, one approach",
        paragraphs: [
          "TRACI devices can feed an existing CMP, SSSS platform, BMS, dashboard or enterprise system. In the other direction, compatible third-party devices can feed TRACI. Safety events and operational data move through APIs, webhooks and standard integration methods — in the formats each system already prefers.",
          "This is paired with traceable device identity, permissions, event history, evidence, system health and integration status, so openness never means losing sight of what is connected and what it is doing."
        ]
      },
      {
        heading: "What that means commercially",
        paragraphs: [
          "Reduced vendor lock-in, protection of existing hardware, incremental expansion and multi-vendor consolidation. Integrators keep flexibility; customers keep control of their data. Expansion becomes an additive decision rather than a platform bet."
        ]
      }
    ],
    related: [
      { label: "The Open4S approach", href: "/open4s" },
      { label: "TRACI platform", href: "/traci" }
    ]
  },
  {
    slug: "lifting-visibility-safety-workflow",
    scene: "tower",
    title: "Why lifting visibility belongs in the safety workflow",
    excerpt: "Camera coverage of the site is common. A considered view of the lift itself — with height context and connected alerts — is what turns footage into operational awareness.",
    category: "Industry",
    date: "2026-09-24",
    minutes: 3,
    sections: [
      {
        paragraphs: [
          "Most construction sites already have cameras. Yet lifting teams still work blind at the moment that matters most: when the load leaves the ground, the operator's view of the hook is often partial, distant or obstructed."
        ]
      },
      {
        heading: "From footage to awareness",
        paragraphs: [
          "A camera pointed at the hook answers 'what happened'. A connected view with a live height reference answers 'what is happening' — and gives the lifting team a shared picture while there is still time to act on it.",
          "Adding local audible alerts and remote connectivity moves the system from passive recording into the active safety workflow, alongside permits, briefings and exclusion zones rather than behind them."
        ]
      },
      {
        heading: "Start where the risk is",
        paragraphs: [
          "Lifting visibility does not demand a site-wide rollout. A single crane with a connected hook-view kit establishes the workflow, and the same integration approach extends to additional cranes, sites and sensor types as operations grow."
        ]
      }
    ],
    related: [
      { label: "Explore the Hook Cam kit", href: "/products/hook-cam" },
      { label: "Site vision solution", href: "/solutions/site-vision" }
    ]
  }
];
