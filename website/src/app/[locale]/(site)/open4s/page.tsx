import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { ActionLink, ContactBand, PageIntro } from "@/components/shared";
import { useCopy } from "@/i18n/copy";
import { pageMetadata } from "@/lib/metadata";

const integrations = [
  ["TRACI devices → Your platform", "Integrate TRACI devices and safety events into your existing CMP, SSSS platform, BMS, dashboard or enterprise system."],
  ["Your devices → TRACI", "Connect compatible third-party devices into TRACI and manage their alerts, evidence and workflows through one interface."],
  ["TRACI → Your wider digital environment", "Push safety events and operational data into other applications through APIs, webhooks and standard integration methods."],
];

const traceability = ["Device identity", "Access permissions", "Event history", "Evidence", "System health", "Integration status"];
const benefits = [
  "Reduce vendor lock-in",
  "Protect existing hardware investments",
  "Add new devices without replacing the whole system",
  "Consolidate safety information across different vendors",
  "Give system integrators more flexibility",
  "Let owners and contractors retain control of their data",
  "Build a safety technology stack that can evolve over time",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return pageMetadata("/open4s", "Open4S interoperability", "Open safety infrastructure for connecting TRACI, third-party devices and the platforms your site already uses.");
}

export default function Open4SPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useCopy();

  return <>
    <PageIntro
      scene="site"
      label={t("OPEN4S / TRACI 4S")}
      title={<>{t("Open safety infrastructure.")}<br /><span>{t("Built to work with what you already have.")}</span></>}
      description={t("Construction sites should not be forced into closed technology ecosystems.")}
    >
      <ActionLink href="/contact?service=Open4S">{t("Discuss Open4S")}</ActionLink>
    </PageIntro>

    <section className="section wrap open4s-intro">
      <div>
        <span className="mono">{t("INTEROPERABILITY BY DESIGN")}</span>
        <h2>{t("Your site.")}<br />{t("Your data. Your choice.")}</h2>
      </div>
      <div className="open4s-prose">
        <p>{t("Open4S is the interoperability approach behind TRACI 4S. Our devices are designed with open APIs so they can connect to your existing platform. TRACI is also designed to accept compatible third-party sensors, cameras and safety devices.")}</p>
        <p>{t("Use our hardware with your software. Use your hardware with TRACI. Or connect everything together.")}</p>
        <p>{t("A typical smart site may already use cameras, gas detectors, worker wearables, access systems, environmental sensors and equipment from multiple vendors.")}</p>
        <p>{t("Open4S is designed around that reality. Instead of forcing every device into a separate application, Open4S makes it easier for safety data to move between systems and become part of one operational workflow.")}</p>
      </div>
    </section>

    <section className="page-panel open4s-connections">
      <div className="wrap">
        <div className="section-heading">
          <h2>{t("Built for two-way integration")}</h2>
          <p>{t("Connect the physical safety systems operating across a site while retaining technology that already works.")}</p>
        </div>
        <div className="open4s-flow">
          {integrations.map(([title, description], index) => <article key={title} data-reveal>
            <span className="mono">0{index + 1}</span>
            <h3>{t(title)}</h3>
            <p>{t(description)}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="open4s-control">
      <div className="wrap">
        <div className="open4s-control-copy">
          <span className="mono">{t("CONTROL WITHIN AN OPEN SYSTEM")}</span>
          <h2>{t("Open does not mean uncontrolled.")}</h2>
          <p>{t("Open4S is designed to make integration easier without compromising operational control.")}</p>
        </div>
        <div className="open4s-trace">
          {traceability.map((item, index) => <div key={item} data-reveal><span>0{index + 1}</span>{t(item)}</div>)}
        </div>
        <p className="open4s-trace-note">{t("Device identity, access permissions, event history, evidence, system health and integration status can remain traceable within the platform.")}</p>
      </div>
    </section>

    <section className="section wrap open4s-benefits">
      <div className="section-heading">
        <span className="mono">{t("WHY OPEN4S")}</span>
        <h2>{t("One site should not need ten disconnected safety systems.")}</h2>
        <p>{t("Open4S gives contractors, owners, technology vendors and system integrators a common way to connect the physical safety systems operating across a site.")}</p>
      </div>
      <ul className="check-list open4s-benefit-list">
        {benefits.map(item => <li key={item}><Check size={18} aria-hidden="true" />{t(item)}</li>)}
      </ul>
    </section>

    <section className="open4s-statement">
      <div className="wrap">
        <span className="mono">{t("OPEN BY DESIGN")}</span>
        <h2>{t("Your sensors. Our sensors.")}<br />{t("Your platform. TRACI.")}<br /><span>{t("They should work together.")}</span></h2>
      </div>
    </section>
    <ContactBand title={t("Connect the systems already on your site.")} description={t("Tell us about your devices, platforms and operational workflow. We will help define the interfaces.")} />
  </>;
}
