import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  ClipboardCheck,
  Construction,
  Factory,
  FileCheck,
  FileText,
  Flame,
  Fuel,
  Gauge,
  GitBranch,
  Layers3,
  MapPin,
  Maximize,
  Menu,
  Ruler,
  ScanSearch,
  Settings2,
  Shield,
  ShieldCheck,
  Wind,
  Waves,
  X,
  Check,
  CircleDot,
  HardHat,
  Warehouse,
  Building2,
  Truck,
  Zap,
  Wrench,
  ImageIcon,
} from "lucide-react";
import { ScrollReveal, StaggerGroup, StaggerItem, StaggerArticle } from "@/components/reveal";
import pebproLogo from "@/assets/pebpro.png";
import heroImage from "@/assets/pebpro-hero.jpg";
import fabricationImage from "@/assets/pebpro-fabrication.jpg";
import pipingImage from "@/assets/pebpro-piping.jpg";
import industrialImage from "@/assets/pebpro-industrial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Underground Fuel Storage Tanks | PEB PRO" },
      {
        name: "description",
        content:
          "Engineered underground fuel storage solutions for industrial, commercial and infrastructure projects from PEB PRO.",
      },
      { property: "og:title", content: "Underground Fuel Storage Tanks | PEB PRO" },
      {
        property: "og:description",
        content:
          "Engineered underground fuel storage solutions for industrial, commercial and infrastructure projects from PEB PRO.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type IconType = typeof Fuel;

const requirements: [string, IconType][] = [
  ["Type of petroleum product or fuel", Fuel],
  ["Required storage capacity", Gauge],
  ["Site conditions", MapPin],
  ["Soil and groundwater conditions", Layers3],
  ["Available space", Maximize],
  ["Tank configuration", Settings2],
  ["Corrosion protection", Shield],
  ["Product piping requirements", GitBranch],
  ["Monitoring and leak detection", ScanSearch],
  ["Fire and safety requirements", Flame],
  ["Applicable regulatory requirements", FileText],
];

const systemComponents = [
  "Storage tank",
  "Tank access/manhole arrangements",
  "Fill connections",
  "Vent piping",
  "Product piping",
  "Valves and fittings",
  "Leak detection and monitoring systems",
  "Corrosion protection",
  "Fuel dispensing equipment, where applicable",
  "Earthing and electrical systems",
  "Associated civil and installation works",
];

const solutions = [
  {
    n: "01",
    title: "Underground Diesel Storage Tanks",
    intro:
      "We provide solutions for projects requiring underground diesel storage for applications such as:",
    items: [
      "DG backup systems",
      "Industrial facilities",
      "Warehouses",
      "Logistics operations",
      "Commercial buildings",
      "Infrastructure projects",
      "Fleet operations",
    ],
    close:
      "Tank capacity and configuration can be planned according to fuel consumption, operating requirements and site conditions.",
    image: heroImage,
  },
  {
    n: "02",
    title: "Underground Petrol Storage Tanks",
    intro:
      "Underground petrol storage systems can be used for applications requiring storage and dispensing of petrol.\n\nThese systems require careful attention to:",
    items: [
      "Tank construction",
      "Fuel compatibility",
      "Venting",
      "Product piping",
      "Leak monitoring",
      "Fire safety",
      "Hazardous-area requirements",
      "Regulatory compliance",
    ],
    image: pipingImage,
  },
  {
    n: "03",
    title: "Industrial Fuel Storage Tanks",
    intro:
      "Industrial facilities often require fuel storage as part of their overall infrastructure.\n\nApplications can include:",
    items: [
      "Manufacturing plants",
      "Industrial units",
      "Warehouses",
      "Process facilities",
      "Power backup systems",
      "Heavy equipment operations",
    ],
    close:
      "PEB PRO can help integrate fuel storage requirements with the wider industrial infrastructure project.",
    image: industrialImage,
  },
  {
    n: "04",
    title: "Custom Underground Fuel Storage Solutions",
    intro:
      "Not every project fits a standard configuration.\n\nDepending on the requirements, underground fuel storage solutions can be planned around:",
    items: [
      "Required capacity",
      "Tank dimensions",
      "Multiple fuel products",
      "Compartment requirements",
      "Site constraints",
      "Piping configuration",
      "Existing infrastructure",
      "Future expansion",
    ],
    close:
      "Our engineering-led approach helps identify the appropriate configuration for the project.",
    image: fabricationImage,
  },
];

const features = [
  {
    icon: Wrench,
    title: "Durable Tank Construction",
    text: "The tank should be designed and manufactured according to the applicable specifications and intended service conditions.",
  },
  {
    icon: Shield,
    title: "Corrosion Protection",
    text: "Underground tanks require appropriate protection against corrosion.",
    items: [
      "Tank material",
      "Soil conditions",
      "Groundwater",
      "Coating system",
      "Cathodic protection, where applicable",
      "Applicable standards and regulatory requirements",
    ],
  },
  {
    icon: ScanSearch,
    title: "Leak Monitoring",
    text: "Underground tanks are not easily accessible for visual inspection.\n\nAppropriate monitoring and leak detection measures can therefore play an important role in identifying potential problems.",
  },
  {
    icon: Wind,
    title: "Safe Venting",
    text: "Tank venting is an essential part of an underground fuel storage system and must be designed appropriately for the stored product and system configuration.",
  },
  {
    icon: GitBranch,
    title: "Efficient Piping Integration",
    text: "Product piping, fill lines, vents and associated equipment should be planned as part of the complete storage system.",
  },
  {
    icon: Ruler,
    title: "Site-Specific Engineering",
    text: "Ground conditions, available space, groundwater level and existing underground utilities can all influence the installation.",
  },
];

const applications = [
  {
    icon: Fuel,
    title: "Fuel Stations",
    text: "Underground storage tanks can support fuel storage and dispensing infrastructure at petroleum retail outlets.",
    image: pipingImage,
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial Facilities",
    text: "Fuel storage can support generators, machinery and other industrial operations.",
    image: fabricationImage,
  },
  {
    icon: Warehouse,
    title: "Warehouses & Logistics",
    text: "Fuel storage can support backup power and fleet or equipment requirements.",
    image: industrialImage,
  },
  {
    icon: Building2,
    title: "Commercial Facilities",
    text: "Large commercial properties may require fuel storage for emergency power systems.",
    image: industrialImage,
  },
  {
    icon: Construction,
    title: "Infrastructure Projects",
    text: "Large infrastructure projects can require dedicated fuel storage for equipment and operational requirements.",
    image: heroImage,
  },
  {
    icon: Zap,
    title: "DG Backup Systems",
    text: "Underground diesel storage can provide fuel storage for facilities that depend on diesel generator systems for backup power.",
    image: pipingImage,
  },
];

const process = [
  {
    icon: ClipboardCheck,
    title: "Understand Your Requirement",
    text: "We begin by understanding:",
    items: [
      "Fuel type",
      "Required capacity",
      "Application",
      "Fuel consumption",
      "Site location",
      "Project timeline",
      "Existing infrastructure",
    ],
  },
  {
    icon: MapPin,
    title: "Site & Technical Assessment",
    text: "Important site factors are evaluated, including:",
    items: [
      "Available space",
      "Soil conditions",
      "Groundwater",
      "Existing underground utilities",
      "Access for installation",
      "Drainage",
      "Site layout",
    ],
  },
  {
    icon: Ruler,
    title: "Engineering & Design",
    text: "The storage system is planned according to the project's technical requirements and applicable standards.\n\nThis can include consideration of:",
    items: [
      "Tank configuration",
      "Dimensions",
      "Connections",
      "Piping",
      "Venting",
      "Monitoring",
      "Corrosion protection",
      "Installation requirements",
    ],
  },
  {
    icon: Factory,
    title: "Fabrication",
    text: "The tank is fabricated according to the approved design and required quality specifications.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection & Testing",
    text: "Appropriate inspections and testing are performed according to the project requirements.",
  },
  {
    icon: Construction,
    title: "Installation",
    text: "Installation involves coordination of:",
    items: [
      "Excavation",
      "Tank positioning",
      "Support/bedding",
      "Anchoring where required",
      "Piping",
      "Connections",
      "Backfilling",
      "Associated civil works",
    ],
  },
  {
    icon: Settings2,
    title: "Testing & Commissioning",
    text: "The completed system is tested and prepared for commissioning in accordance with the applicable requirements.",
  },
  {
    icon: FileCheck,
    title: "Project Handover",
    text: "Relevant project documentation and operational information are provided as applicable.",
  },
];

const reasons = [
  [
    "Engineering-Led Approach",
    "We focus on understanding the complete project requirement before finalizing the storage solution.",
  ],
  [
    "Integrated Project Capabilities",
    "PEB PRO's broader capabilities across engineering, structural solutions, steel fabrication, civil infrastructure and EPC execution can help coordinate different aspects of an industrial project.",
  ],
  [
    "Customized Solutions",
    "Every site has different requirements. We develop solutions based on project-specific conditions rather than relying solely on a standard configuration.",
  ],
  [
    "Quality-Focused Fabrication",
    "Tank manufacturing and associated fabrication should follow the approved engineering requirements and applicable quality specifications.",
  ],
  [
    "Project Coordination",
    "Underground fuel storage can involve civil, structural, mechanical, electrical and safety considerations. Coordinating these requirements early can help reduce project complications.",
  ],
  [
    "Safety-Conscious Planning",
    "Fuel storage requires careful consideration of fire safety, hazardous areas, venting, electrical systems, earthing, leak detection and applicable regulations.",
  ],
];

const faqs = [
  [
    "What is an underground fuel storage tank?",
    "An underground fuel storage tank is a storage vessel installed below ground level for storing petroleum products or fuel. It can be integrated with piping, venting, monitoring and dispensing systems depending on the application.",
  ],
  [
    "What fuels can be stored in underground tanks?",
    "The permitted fuel depends on the tank design, materials, applicable regulations and intended application. Common petroleum-storage applications include petrol and diesel.",
  ],
  [
    "Are underground fuel tanks safer than above-ground tanks?",
    "Neither option should automatically be considered safer in every situation. Safety depends on proper engineering, installation, corrosion protection, monitoring, fire protection and regulatory compliance.",
  ],
  [
    "How long does an underground fuel storage tank last?",
    "Service life depends on tank construction, corrosion protection, soil and groundwater conditions, maintenance, operating conditions and other project-specific factors. A specific service-life figure should be established based on the selected tank and protection system.",
  ],
  [
    "How is corrosion prevented in an underground fuel tank?",
    "Corrosion protection can involve suitable protective coatings, cathodic protection or other appropriate measures depending on the tank design and applicable requirements.",
  ],
  [
    "How do you detect leakage from an underground tank?",
    "Depending on the system, leak detection and monitoring can involve tank monitoring, interstitial monitoring, product-level monitoring or other appropriate methods.",
  ],
  [
    "Do underground fuel storage tanks require regulatory approval?",
    "Applicable approvals and licences depend on the petroleum product, storage quantity, installation and other project factors. The relevant regulatory requirements should be identified before starting the project.",
  ],
  [
    "Can underground fuel storage tanks be customized?",
    "Yes. Tank capacity, dimensions, configuration, compartments and connections can be planned according to the project requirements, subject to applicable engineering and regulatory requirements.",
  ],
  [
    "Can PEB PRO handle the complete project?",
    "PEB PRO provides engineering, fabrication, civil infrastructure and EPC capabilities. The exact scope for an underground fuel storage project can be defined based on the client's requirements.",
  ],
];

const LinkButton = ({
  children,
  secondary = false,
}: {
  children: ReactNode;
  secondary?: boolean;
}) => (
  <a href="#consultation" className={secondary ? "btn btn-secondary" : "btn btn-primary"}>
    {children}
    <ArrowUpRight size={17} strokeWidth={1.5} />
  </a>
);

function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: ReactNode }) {
  return (
    <div className="section-title">
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{children}</h2>
    </div>
  );
}

function BulletList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={columns ? "bullet-list bullet-columns" : "bullet-list"}>
      {items.map((item) => (
        <li key={item}>
          <Check size={15} strokeWidth={1.8} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-container">
          <div className="brand-group">
            <a href="#top" className="brand" aria-label="PEB PRO home">
              <img src={pebproLogo} alt="PEB PRO by NRE" />
            </a>
            <span className="division">a division of NRE</span>
          </div>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#solutions">Products & Services</a>
            <a href="#applications">Gallery</a>
            <a href="#process">Blog</a>
            <a href="#consultation">Download Brochure</a>
          </nav>
          <div className="header-actions">
            <a href="#consultation" className="header-cta">
              Get in Touch <ArrowUpRight size={16} />
            </a>
            <button
              className="menu-button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <div className="container mobile-nav-inner">
              <a onClick={() => setMenuOpen(false)} href="#top">
                Home
              </a>
              <a onClick={() => setMenuOpen(false)} href="#about">
                About
              </a>
              <a onClick={() => setMenuOpen(false)} href="#solutions">
                Products & Services
              </a>
              <a onClick={() => setMenuOpen(false)} href="#applications">
                Gallery
              </a>
              <a onClick={() => setMenuOpen(false)} href="#process">
                Blog
              </a>
              <a onClick={() => setMenuOpen(false)} href="#consultation">
                Download Brochure
              </a>
              <a onClick={() => setMenuOpen(false)} href="#consultation" className="mobile-cta">
                Get in Touch <ArrowUpRight size={16} />
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <motion.img
            initial={{ scale: 1.05, opacity: 0.85 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={heroImage}
            width={1920}
            height={1080}
            alt="Underground steel fuel storage tank installation at an industrial facility"
          />
          <div className="hero-overlay" />
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-kicker">
              <span /> PEB PRO Fuel Infrastructure
            </div>
            <h1 id="hero-heading">Underground Fuel Storage Tanks</h1>
            <LinkButton>Plan Your Fuel Storage Project With PEB PRO</LinkButton>
          </motion.div>
        </section>

        <section id="about" className="section intro-section">
          <div className="container">
            <ScrollReveal yOffset={24}>
              <SectionTitle eyebrow="About PEB PRO">
                Reliable Underground Fuel Storage Solutions for Industrial &amp; Commercial
                Applications
              </SectionTitle>
              <div className="intro-grid">
                <p className="lead">
                  Looking for a reliable underground fuel storage tank solution for your industrial,
                  commercial or infrastructure project?
                </p>
                <div className="intro-body">
                  <p>
                    PEB PRO provides engineered fuel storage solutions designed around your
                    project's fuel type, storage capacity, site conditions, safety requirements and
                    operational needs.
                  </p>
                  <p>
                    From tank selection and engineering to fabrication, installation coordination
                    and commissioning support, we help businesses develop underground fuel storage
                    infrastructure with a focus on quality, safety, durability and efficient project
                    execution.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="requirements" className="section requirements-section">
          <div className="container split-intro">
            <ScrollReveal yOffset={24}>
              <SectionTitle eyebrow="Project requirements">
                Underground Fuel Storage Tanks Designed Around Your Project
              </SectionTitle>
              <p className="lead">Every fuel storage project has different requirements.</p>
              <p>The right underground storage solution depends on factors such as:</p>
            </ScrollReveal>
            <StaggerGroup className="requirement-list" staggerDelay={0.05} viewportAmount={0.1}>
              {requirements.map(([label, Icon]) => (
                <StaggerItem key={label}>
                  <Icon size={20} strokeWidth={1.5} />
                  <span>{label}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <motion.p
              className="closing-note"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              PEB PRO works with project requirements to develop a suitable underground fuel storage
              solution rather than treating the tank as an isolated product.
            </motion.p>
          </div>
        </section>

        <section className="section section-neutral">
          <div className="container image-split">
            <ScrollReveal yOffset={24}>
              <SectionTitle eyebrow="System overview">
                What Are Underground Fuel Storage Tanks?
              </SectionTitle>
              <p>
                An <strong>underground fuel storage tank (UST)</strong> is a storage vessel
                installed below ground level for storing petroleum products or fuel.
              </p>
              <p>
                These systems are commonly used where businesses need dependable fuel storage while
                making efficient use of available surface space.
              </p>
              <p>An underground fuel storage system can include:</p>
              <BulletList items={systemComponents} columns />
              <p className="small-closing">
                The exact configuration is determined by the project requirements and applicable
                standards and regulations.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15} yOffset={28}>
              <figure className="technical-image">
                <img
                  loading="lazy"
                  src={pipingImage}
                  width={1600}
                  height={1200}
                  alt="Underground fuel tanks with integrated product piping"
                />
                <figcaption>Integrated underground storage infrastructure</figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </section>

        <section id="solutions" className="section">
          <div className="container">
            <ScrollReveal yOffset={20}>
              <SectionTitle eyebrow="Engineered capabilities">
                Our Underground Fuel Storage Tank Solutions
              </SectionTitle>
            </ScrollReveal>
            <StaggerGroup className="solution-grid" staggerDelay={0.12} viewportAmount={0.08}>
              {solutions.map((s) => (
                <StaggerArticle className="solution-card" key={s.title}>
                  <div className="card-image">
                    <img loading="lazy" src={s.image} width={1600} height={1200} alt="" />
                  </div>
                  <div className="card-body">
                    <span className="card-number">{s.n}</span>
                    <h3>{s.title}</h3>
                    {s.intro.split("\n").map((p, i) => p && <p key={i}>{p}</p>)}
                    <BulletList items={s.items} columns />
                    {s.close && <p>{s.close}</p>}
                  </div>
                </StaggerArticle>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <ScrollReveal yOffset={20}>
              <SectionTitle eyebrow="Technical priorities">
                Key Features of a Well-Designed Underground Fuel Storage System
              </SectionTitle>
            </ScrollReveal>
            <StaggerGroup className="feature-grid" staggerDelay={0.08} viewportAmount={0.08}>
              {features.map((f, i) => (
                <StaggerArticle key={f.title} className="feature-item">
                  <div className="feature-top">
                    <span>0{i + 1}</span>
                    <f.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3>{f.title}</h3>
                  {f.text.split("\n").map((p, j) => p && <p key={j}>{p}</p>)}
                  {f.items && <BulletList items={f.items} />}
                </StaggerArticle>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section id="applications" className="section">
          <div className="container">
            <ScrollReveal className="title-row" yOffset={20}>
              <SectionTitle eyebrow="Project environments">
                Applications of Underground Fuel Storage Tanks
              </SectionTitle>
              <p>
                Our underground fuel storage solutions can be considered for a range of
                applications.
              </p>
            </ScrollReveal>
            <StaggerGroup className="application-grid" staggerDelay={0.09} viewportAmount={0.08}>
              {applications.map((a) => (
                <StaggerArticle className="application-card" key={a.title}>
                  <img loading="lazy" src={a.image} width={1600} height={1200} alt="" />
                  <div className="application-shade" />
                  <div className="application-copy">
                    <a.icon size={23} strokeWidth={1.5} />
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                </StaggerArticle>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section id="process" className="section section-neutral">
          <div className="container process-layout">
            <ScrollReveal className="process-heading" yOffset={24}>
              <SectionTitle eyebrow="End-to-end execution">
                Our Underground Fuel Storage Tank Process
              </SectionTitle>
              <img
                loading="lazy"
                src={fabricationImage}
                width={1600}
                height={1200}
                alt="Steel fuel tank fabrication and engineering inspection"
              />
            </ScrollReveal>
            <StaggerGroup className="timeline" staggerDelay={0.09} viewportAmount={0.05}>
              {process.map((step, i) => (
                <StaggerArticle className="process-step" key={step.title}>
                  <div className="step-marker">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <step.icon size={21} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    {step.text.split("\n").map((p, j) => p && <p key={j}>{p}</p>)}
                    {step.items && <BulletList items={step.items} columns />}
                  </div>
                </StaggerArticle>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <ScrollReveal className="editorial-head" yOffset={20}>
              <SectionTitle eyebrow="PEB PRO capability">
                Why Choose PEB PRO for Underground Fuel Storage?
              </SectionTitle>
              <p>
                Engineering, fabrication and execution aligned around the complete project
                requirement.
              </p>
            </ScrollReveal>
            <StaggerGroup className="reasons-grid" staggerDelay={0.08} viewportAmount={0.08}>
              {reasons.map(([title, text], i) => (
                <StaggerArticle key={title}>
                  <span>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </StaggerArticle>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="section compliance-section">
          <div className="container image-split">
            <ScrollReveal yOffset={24}>
              <SectionTitle eyebrow="Standards & approvals">
                Underground Fuel Storage Tank Regulations &amp; Compliance
              </SectionTitle>
              <p>
                Petroleum storage projects in India may be subject to requirements under the{" "}
                <strong>Petroleum Rules, 2002</strong>, along with applicable standards, regulations
                and approvals.
              </p>
              <p>
                The <strong>Petroleum and Explosives Safety Organisation (PESO)</strong> is an
                important regulatory authority for petroleum storage and related installations.
              </p>
              <p>Depending on the application, project owners may also need to consider:</p>
              <BulletList
                items={[
                  "Petroleum Rules",
                  "PESO requirements",
                  "Applicable Indian Standards",
                  "OISD standards",
                  "Fire and safety requirements",
                  "Environmental requirements",
                  "Electrical safety requirements",
                  "Local authority requirements",
                ]}
                columns
              />
              <p>
                For example, OISD publishes standards relevant to petroleum storage, handling and
                dispensing, while PESO provides licensing-related information for applicable
                petroleum storage installations.
              </p>
              <p>
                Requirements can vary according to{" "}
                <strong>fuel type, quantity, installation type and site</strong>, so the applicable
                requirements should be confirmed before design and installation.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15} yOffset={28} className="compliance-visual">
              <img
                loading="lazy"
                src={industrialImage}
                width={1600}
                height={1200}
                alt="Industrial facility fuel infrastructure"
              />
              <div className="compliance-badges">
                <div>
                  <FileText />
                  <span>Regulatory requirements</span>
                </div>
                <div>
                  <ShieldCheck />
                  <span>Safety considerations</span>
                </div>
                <div>
                  <ClipboardCheck />
                  <span>Project approvals</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section section-neutral">
          <div className="container">
            <ScrollReveal yOffset={20}>
              <SectionTitle eyebrow="Project planning">
                Underground Fuel Storage Tank vs Above-Ground Storage
              </SectionTitle>
              <p className="lead">
                Choosing between underground and above-ground storage depends on the specific
                project.
              </p>
            </ScrollReveal>
            <StaggerGroup className="comparison" staggerDelay={0.1}>
              <StaggerItem>
                <h3>Underground Fuel Storage</h3>
                <BulletList
                  items={[
                    "Makes efficient use of surface space",
                    "Provides low visual impact",
                    "Can support integrated site layouts",
                    "Requires excavation",
                    "Requires careful consideration of groundwater",
                    "Requires appropriate corrosion protection",
                    "Requires planned inspection and monitoring",
                  ]}
                />
              </StaggerItem>
              <StaggerItem>
                <h3>Above-Ground Fuel Storage</h3>
                <BulletList
                  items={[
                    "Easier visual access",
                    "Generally simpler to inspect",
                    "Does not require underground excavation",
                    "Requires dedicated surface space",
                    "Can have a greater visual impact",
                  ]}
                />
              </StaggerItem>
            </StaggerGroup>
            <motion.p
              className="closing-note"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              The best option depends on your{" "}
              <strong>
                site, fuel requirements, safety considerations, regulations and long-term
                operational needs
              </strong>
              .
            </motion.p>
          </div>
        </section>

        <section className="section cost-section">
          <div className="container cost-grid">
            <ScrollReveal yOffset={24}>
              <SectionTitle eyebrow="Project estimate">
                How Much Does an Underground Fuel Storage Tank Cost?
              </SectionTitle>
              <p className="lead">
                The cost of an underground fuel storage tank project depends on more than the tank
                itself.
              </p>
              <p>
                For this reason, there is no reliable single price for an underground fuel storage
                tank.
              </p>
              <div className="estimate-callout">
                <h3>Want an accurate project estimate?</h3>
                <p>
                  Share your{" "}
                  <strong>fuel type, required capacity, project location and application</strong>{" "}
                  with our team.
                </p>
                <p>We can evaluate your requirements and help identify the appropriate solution.</p>
                <LinkButton>Request a Project Consultation</LinkButton>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12} yOffset={24} className="cost-factors">
              <span className="factor-label">Key cost factors include:</span>
              <BulletList
                items={[
                  "Tank capacity",
                  "Tank configuration",
                  "Material and specifications",
                  "Number of compartments",
                  "Corrosion protection",
                  "Excavation requirements",
                  "Soil conditions",
                  "Groundwater conditions",
                  "Piping length",
                  "Monitoring systems",
                  "Civil works",
                  "Installation",
                  "Testing and commissioning",
                  "Engineering and documentation",
                ]}
                columns
              />
              <div
                className="cost-image-placeholder"
                role="img"
                aria-label="Underground fuel tank installation and cost factors technical layout placeholder"
              >
                <svg
                  className="cost-placeholder-graphic"
                  viewBox="0 0 460 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern id="cad-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeOpacity="0.12"
                      />
                    </pattern>
                  </defs>
                  <rect width="460" height="120" rx="6" fill="currentColor" fillOpacity="0.03" />
                  <rect width="460" height="120" fill="url(#cad-grid)" />

                  <line
                    x1="20"
                    y1="36"
                    x2="440"
                    y2="36"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                    strokeOpacity="0.45"
                  />
                  <text
                    x="24"
                    y="28"
                    fill="currentColor"
                    fontSize="8"
                    fontWeight="600"
                    letterSpacing="0.08em"
                    opacity="0.65"
                  >
                    FINISH GRADE / GROUND LEVEL ▼
                  </text>

                  <path
                    d="M 60 36 L 80 106 L 380 106 L 400 36"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    strokeOpacity="0.3"
                    fill="none"
                  />

                  <rect
                    x="110"
                    y="50"
                    width="240"
                    height="50"
                    rx="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                  <line
                    x1="110"
                    y1="75"
                    x2="350"
                    y2="75"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    strokeDasharray="6 3"
                    strokeOpacity="0.3"
                  />

                  <path
                    d="M 134 50 C 122 50 110 61 110 75 C 110 89 122 100 134 100"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                    fill="none"
                  />
                  <path
                    d="M 326 50 C 338 50 350 61 350 75 C 350 89 338 100 326 100"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                    fill="none"
                  />

                  <rect
                    x="160"
                    y="32"
                    width="36"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="currentColor"
                    fillOpacity="0.12"
                  />
                  <rect
                    x="264"
                    y="32"
                    width="36"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="currentColor"
                    fillOpacity="0.12"
                  />

                  <line
                    x1="178"
                    y1="14"
                    x2="178"
                    y2="32"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.8"
                  />
                  <circle
                    cx="178"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                  />

                  <line
                    x1="282"
                    y1="20"
                    x2="282"
                    y2="32"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.8"
                  />
                  <line
                    x1="282"
                    y1="20"
                    x2="310"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.8"
                  />

                  <text
                    x="230"
                    y="78"
                    fill="currentColor"
                    fontSize="9"
                    fontWeight="600"
                    textAnchor="middle"
                    opacity="0.85"
                  >
                    Ø UST STORAGE PROFILE
                  </text>
                  <text x="388" y="98" fill="currentColor" fontSize="7.5" opacity="0.55">
                    SOIL BEDDING
                  </text>
                </svg>
                <div className="cost-placeholder-meta">
                  <span className="cost-placeholder-title">
                    <ImageIcon size={16} strokeWidth={1.75} />
                    Project Specification &amp; GA Layout Diagram
                  </span>
                  <span className="cost-placeholder-caption">
                    Site-specific CAD blueprint, excavation profile &amp; compartment engineering
                    schematics
                  </span>
                </div>
                <span className="cost-placeholder-badge">Schematic Preview Placeholder</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section section-neutral faq-section">
          <div className="container faq-layout">
            <ScrollReveal yOffset={24}>
              <SectionTitle eyebrow="Technical questions">
                Common Questions About Underground Fuel Storage Tanks
              </SectionTitle>
            </ScrollReveal>
            <StaggerGroup className="accordion" staggerDelay={0.06} viewportAmount={0.05}>
              {faqs.map(([q, a], i) => {
                const open = openFaq === i;
                return (
                  <StaggerItem className={`faq-item ${open ? "open" : ""}`} key={q}>
                    <button
                      aria-expanded={open}
                      aria-controls={`faq-answer-${i}`}
                      onClick={() => setOpenFaq(open ? null : i)}
                    >
                      <span>{q}</span>
                      <span className="faq-icon">{open ? "−" : "+"}</span>
                    </button>
                    <div id={`faq-answer-${i}`} className="faq-answer" hidden={!open}>
                      <p>{a}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </section>

        <section id="consultation" className="section consultation-section">
          <div className="container consultation-grid">
            <ScrollReveal yOffset={24}>
              <SectionTitle eyebrow="Start the conversation">
                Plan Your Underground Fuel Storage Project
              </SectionTitle>
              <p className="lead">
                Whether you need an underground diesel storage tank for a generator system, fuel
                storage for an industrial facility or a larger integrated fuel storage solution, the
                project should start with the right engineering and site assessment.
              </p>
              <p>
                <strong>PEB PRO can help you plan the right solution for your project.</strong>
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.12} yOffset={28}>
              <form className="consultation-form" onSubmit={submitForm}>
                <h3>Tell Us About Your Requirement</h3>
                <div className="form-grid">
                  <label>
                    Fuel Type:
                    <select required defaultValue="">
                      <option value="" disabled>
                        Select fuel type
                      </option>
                      <option>Petrol</option>
                      <option>Diesel</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown size={17} />
                  </label>
                  <label>
                    Required Capacity:
                    <input required placeholder="Enter required capacity" />
                  </label>
                  <label>
                    Project Type:
                    <select required defaultValue="">
                      <option value="" disabled>
                        Select project type
                      </option>
                      <option>Industrial</option>
                      <option>Commercial</option>
                      <option>Fuel Station</option>
                      <option>Infrastructure</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown size={17} />
                  </label>
                  <label>
                    Project Location:
                    <input required placeholder="Enter location" />
                  </label>
                  <label className="form-wide">
                    Your Requirement:
                    <textarea required placeholder="Tell us about your project" />
                  </label>
                </div>
                <button className="btn btn-primary form-submit" disabled={sent}>
                  {sent ? (
                    <>
                      <Check size={17} /> Request received
                    </>
                  ) : (
                    <>
                      Get a Project Consultation <ArrowUpRight size={17} />
                    </>
                  )}
                </button>
                {sent && (
                  <p className="form-success" role="status">
                    Your requirement has been received.
                  </p>
                )}
              </form>
            </ScrollReveal>
          </div>
        </section>

        <section className="final-cta">
          <img
            loading="lazy"
            src={fabricationImage}
            width={1600}
            height={1200}
            alt="Industrial tank fabrication facility"
          />
          <div className="final-shade" />
          <ScrollReveal className="container final-content" yOffset={24}>
            <div>
              <span>Industrial infrastructure</span>
              <h2>Build Your Fuel Storage Infrastructure With PEB PRO</h2>
              <p>
                From{" "}
                <strong>
                  engineering and fabrication to civil infrastructure and project execution
                </strong>
                , PEB PRO brings an integrated approach to industrial infrastructure.
              </p>
              <p className="final-statement">
                Reliable Engineering. Quality Fabrication. Efficient Execution.
              </p>
              <h3>Talk to PEB PRO Today</h3>
              <div className="cta-row">
                <LinkButton>Get a Quote</LinkButton>
                <LinkButton secondary>Discuss Your Project</LinkButton>
                <LinkButton secondary>Request Consultation</LinkButton>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div>
            <img src={pebproLogo} alt="PEB PRO by NRE" />
            <p>pebpro.in</p>
          </div>
          <nav aria-label="Legal navigation">
            <a href="#top">Privacy Policy</a>
            <a href="#top">Terms and Conditions</a>
            <a href="#top">Cookie Policy</a>
          </nav>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 PEB PRO | All Rights Reserved</span>
          <a href="#top" aria-label="Back to top">
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
      </footer>
    </div>
  );
}
