import { company } from "../company";
import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "AARYX | Procurement & Operational Systems",
    description:
      "Modern procurement, workflow and digital infrastructure systems for companies across Europe and Asia.",
  },
  logo: {
    claim: "Good alone. Unstoppable with AARYX.",
  },
  langSwitcher: {
    label: "Language",
    de: "DE",
    en: "EN",
  },
  nav: {
    services: "Services",
    network: "Network",
    industries: "Industries",
    contact: "Contact",
    startProject: "Start project",
  },
  hero: {
    label: "Procurement & international business",
    title: "Procurement & Business Solutions Between Europe and Asia",
    description:
      "We help companies source products, manage suppliers and build reliable procurement networks across Europe and Asia.",
    ctaProject: "Start a Project",
    ctaCall: "Schedule a Call",
    facts: [
      { value: "Germany", label: "Base" },
      { value: "Europe / Asia", label: "Markets" },
      { value: "B2B", label: "Focus" },
    ],
    mailSubjectProject: "AARYX project",
    mailSubjectCall: "Schedule a call with AARYX",
  },
  dashboard: {
    illustration: "Illustration – not live data",
    commandCenter: "Supplier Command Center",
    live: "LIVE",
    metrics: [
      { label: "Supplier Score", value: "92", note: "Approved network" },
      { label: "Open RFQs", value: "18", note: "4 urgent reviews" },
      { label: "Delivery Status", value: "96%", note: "On schedule" },
    ],
    approvalPipeline: "Approval Pipeline",
    approvalSub: "RFQ to purchase order visibility",
    workflow: [
      { stage: "Procurement Requests", status: "34 open", value: 82 },
      { stage: "Approval Workflow", status: "Legal review", value: 58 },
      { stage: "Delivery Tracking", status: "12 shipments", value: 74 },
    ],
    analytics: "Procurement Analytics",
    analyticsSub: "Supplier response rate",
    operationalStatus: "Operational Status",
    running: "Running",
    clocks: {
      title: "Market clocks",
      live: "Live",
      mapAria: "World market map",
    },
  },
  trust: [
    {
      title: "Supplier Sourcing",
      copy: "Structured supplier discovery and qualification across international markets.",
      icon: "network",
    },
    {
      title: "International Trade",
      copy: "Business support between Europe and Asian sourcing regions.",
      icon: "globe",
    },
    {
      title: "Procurement Systems",
      copy: "Digital workflows for RFQs, approvals and supplier management.",
      icon: "package",
    },
    {
      title: "Operational Excellence",
      copy: "Clear procurement processes built for visibility and control.",
      icon: "shield",
    },
  ],
  services: {
    label: "Services",
    title: "Procurement systems for complex supplier operations.",
    items: [
      {
        title: "Procurement Systems",
        copy: "Supplier onboarding, sourcing pipelines and procurement infrastructure.",
        icon: "package",
      },
      {
        title: "Operational Dashboards",
        copy: "Internal tracking, approvals, delivery status and operational visibility.",
        icon: "analytics",
      },
      {
        title: "International Trade",
        copy: "Supplier sourcing and business support between Europe and Asia.",
        icon: "globe",
      },
    ],
  },
  network: {
    label: "International network",
    title: "Procurement coordination across Europe and Asia.",
    description:
      "AARYX connects supplier sourcing, trade support and operational systems into one structured procurement layer.",
    mapTitle: "Europe & Asia Network",
    mapSub: "Supplier sourcing and procurement coordination",
    mapAria: "AARYX international procurement map",
    nodes: ["Germany", "India", "Sri Lanka", "Vietnam", "Asia"],
  },
  kpis: [
    { value: "Europe & Asia", label: "Network" },
    { value: "Supplier", label: "Management" },
    { value: "Procurement", label: "Support" },
    { value: "Business", label: "Solutions" },
  ],
  industries: {
    label: "Industries",
    title: "Built for operationally demanding sectors.",
    items: [
      "Medical Technology",
      "Industrial Components",
      "Manufacturing",
      "Logistics",
      "Food & Agriculture",
    ],
  },
  contact: {
    title: "Let's Build Your Supply Chain",
    description:
      "Connect with AARYX to discuss sourcing, procurement and international business opportunities.",
    cta: "Start a Project",
    mailSubject: "AARYX supply chain project",
  },
  footer: {
    description:
      "Procurement, operations and international trade systems between Europe and Asia.",
    services: "Services",
    serviceItems: ["Procurement", "Operations", "International Trade"],
    company: "Company",
    about: "About",
    contact: "Contact",
    legal: "Legal",
    imprint: "Imprint",
    privacy: "Privacy",
  },
  legal: {
    backHome: "Back home",
    imprint: {
      metaTitle: "Imprint | AARYX",
      metaDescription:
        "Legal notice and provider information for the AARYX website.",
      label: "Legal",
      title: "Imprint / Legal Notice",
      intro:
        "Information pursuant to § 5 TMG (German Telemedia Act).",
      fields: [
        { label: "Provider", value: company.name },
        { label: "Address", value: company.address },
        { label: "Email", value: company.email },
        { label: "Represented by", value: company.representative },
        { label: "VAT ID", value: company.vatIdEn },
      ],
      responsibleTitle: "Responsible for content",
      responsibleBody: `${company.responsibleForContent} (address as above)`,
      disclaimerTitle: "Liability for content",
      disclaimerBody:
        "As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 (1) TMG. However, pursuant to §§ 8 to 10 TMG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances indicating illegal activity.",
      disputeTitle: "Dispute resolution",
      disputeBody:
        "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr. We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",
    },
    privacy: {
      metaTitle: "Privacy Policy | AARYX",
      metaDescription:
        "Privacy policy for the AARYX website – how we process personal data.",
      label: "Privacy",
      title: "Privacy Policy",
      intro:
        "Protecting your personal data is important to us. This policy describes what data we process when you visit this website. Complete the TODO sections with your actual hosting and processing details before launch.",
      lastUpdated: "Last updated: June 2026 (draft – legal review required before launch)",
      sections: [
        {
          title: "1. Data controller",
          body: `The controller responsible for data processing on this website is ${company.name}, ${company.address}. Contact: ${company.email}.`,
        },
        {
          title: "2. Hosting and server log files",
          body: "When you access this website, the hosting provider automatically stores information in server log files (e.g. IP address, date and time of request, URL accessed, browser type). Legal basis: Art. 6 (1) lit. f GDPR (legitimate interest in secure operation). TODO: Add hosting provider, server location and retention periods.",
        },
        {
          title: "3. Contact by email",
          body: `If you contact us by email (${company.email}), we process the data you provide (e.g. name, email address, message content) to handle your enquiry. Legal basis: Art. 6 (1) lit. b GDPR (pre-contractual measures) or Art. 6 (1) lit. f GDPR.`,
        },
        {
          title: "4. Cookies and analytics",
          body: "This website currently does not use tracking cookies or analytics tools. If you add services such as Google Analytics, Matomo or similar in the future, this section must be updated and consent obtained where required.",
        },
        {
          title: "5. Your rights",
          body: "You have the right to access, rectification, erasure, restriction of processing, data portability and objection. You may lodge a complaint with a data protection supervisory authority. TODO: Add the competent supervisory authority.",
        },
        {
          title: "6. SSL/TLS encryption",
          body: "This website uses SSL/TLS encryption for security. You can recognise an encrypted connection by the lock symbol in your browser and by “https://” in the address bar.",
        },
      ],
    },
  },
};
