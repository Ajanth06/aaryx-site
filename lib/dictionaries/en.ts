import { company } from "../company";
import { hosting, legalMeta, supervisoryAuthority } from "../legal";
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
        "Information pursuant to § 5 of the German Digital Services Act (DDG) and applicable telemedia disclosure requirements.",
      fields: [
        { label: "Provider", value: company.name },
        { label: "Address", value: company.address },
        { label: "Website", value: legalMeta.website },
        { label: "Email", value: company.email },
        { label: "Represented by", value: company.representative },
        { label: "VAT ID", value: company.vatIdEn },
      ],
      responsibleTitle: "Responsible for content",
      responsibleBody: `${company.responsibleForContent}, ${company.address}`,
      disclaimerTitle: "Liability for content",
      disclaimerBody:
        "As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 (1) DDG. However, pursuant to §§ 8 to 10 DDG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances indicating illegal activity. Obligations to remove or block the use of information under general laws remain unaffected.",
      linkLiabilityTitle: "Liability for links",
      linkLiabilityBody:
        "Our website may contain links to external third-party websites over whose content we have no control. We therefore cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content. Unlawful content was not recognisable at the time the link was created.",
      copyrightTitle: "Copyright",
      copyrightBody:
        "The content and works created by the site operator on these pages are subject to German copyright law. Duplication, processing, distribution or any form of commercialisation beyond the scope of copyright law requires the written consent of the respective author or creator.",
      disputeTitle: "Consumer dispute resolution",
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
        "Protecting your personal data is important to us. This privacy policy explains what personal data we process when you visit www.aaryx.de, for what purpose, and what rights you have.",
      lastUpdated: legalMeta.lastUpdatedEn,
      sections: [
        {
          title: "1. Data controller",
          body: `The controller responsible for data processing on this website is:\n\n${company.name}\n${company.addressStreet}\n${company.addressCity}\n${company.addressCountryEn}\nEmail: ${company.email}`,
        },
        {
          title: "2. Hosting and server log files",
          body: `When you access this website, the hosting provider automatically stores information in server log files. This includes in particular:\n• IP address\n• date and time of the request\n• browser type and version\n• operating system\n• referrer URL\n• pages and files accessed\n\nProcessing is based on Art. 6 (1) lit. f GDPR. Our legitimate interest is the secure provision and trouble-free operation of our website.\n\nHosting provider: ${hosting.provider}, ${hosting.address}.\nFurther information is available at: ${hosting.privacyPolicy}\n\nLog files are retained in accordance with the hosting provider's policies and only for as long as required for secure operation of the website. As the hosting provider is based in the USA, a transfer of data to a third country cannot be ruled out; such transfers are carried out on the basis of appropriate safeguards pursuant to Art. 46 GDPR.`,
        },
        {
          title: "3. Contact by email",
          body: `If you contact us by email at ${company.email}, we process the data you provide (e.g. name, email address, message content and any other voluntary details) to handle and respond to your enquiry.\n\nLegal basis: Art. 6 (1) lit. b GDPR where your enquiry relates to the performance of a contract or pre-contractual measures, otherwise Art. 6 (1) lit. f GDPR (legitimate interest in handling enquiries).\n\nWe retain your message until your enquiry has been fully processed and thereafter only for as long as statutory retention obligations apply or legitimate interests in documentation require – as a rule no longer than three years.`,
        },
        {
          title: "4. Cookies and analytics tools",
          body:
            "This website currently does not use tracking cookies or analytics tools such as Google Analytics, Google Tag Manager, Microsoft Clarity or Meta Pixel. No reach measurement or user profiling takes place.\n\nFor technical operation, our hosting provider may carry out short-lived, technically necessary processing. If we introduce consent-based technologies in the future, we will update this privacy policy in advance and obtain consent where required.",
        },
        {
          title: "5. External services and embedded content",
          body:
            "This website does not embed third-party content such as Google Fonts, YouTube, Google Maps, reCAPTCHA or social media plugins. Fonts are provided via system fonts (Arial, Helvetica); no external font servers are accessed.",
        },
        {
          title: "6. Your rights",
          body: `You have the right to:\n• access\n• rectification\n• erasure\n• restriction of processing\n• data portability\n• object to processing\n\nYou also have the right to lodge a complaint with a data protection supervisory authority. To exercise your rights, an informal message to ${company.email} is sufficient.\n\nCompetent supervisory authority:\n${supervisoryAuthority.nameEn}\n${supervisoryAuthority.streetEn}\n${supervisoryAuthority.cityEn}\n${supervisoryAuthority.countryEn}\n${supervisoryAuthority.website}`,
        },
        {
          title: "7. SSL/TLS encryption",
          body:
            "This website uses SSL/TLS encryption for security. You can recognise an encrypted connection by the lock symbol in your browser and by “https://” in the address bar.",
        },
      ],
    },
  },
};
