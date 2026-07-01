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
    medsafeUdi: "MedSafe UDI",
    cases: "Example projects",
    network: "Network",
    industries: "Industries",
    contact: "Contact",
    startProject: "Start project",
  },
  hero: {
    label: "Procurement & international business",
    title: "Procurement & Business Solutions Between Europe and Asia",
    description:
      "From supplier discovery in Asia to structured RFQs in Europe. AARYX makes international procurement manageable.",
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
  competencies: {
    label: "Core competencies",
    title: "Our core competencies for international procurement, quality and compliance.",
    items: [
      { title: "Supplier Qualification", icon: "clipboard" },
      { title: "Quality Management", icon: "shield" },
      { title: "System Audits", icon: "approval" },
      { title: "Procurement Systems", icon: "package" },
      { title: "Regulatory Affairs", icon: "document" },
      { title: "Operational Processes", icon: "workflow" },
    ],
  },
  cases: {
    label: "Example projects",
    title: "How we support companies in practice.",
    disclaimer:
      "The following scenarios illustrate typical projects and support services provided by AARYX.",
    situationLabel: "Starting point",
    actionLabel: "How AARYX could support",
    resultLabel: "Goal",
    items: [
      {
        industry: "Medical technology",
        situation:
          "A mid-sized manufacturer in Germany is looking for CE-compliant component suppliers in Asia but has no in-house sourcing team on the ground.",
        actions: [
          "Structured supplier research",
          "Creation of a qualified shortlist",
          "RFQ coordination",
          "Review of supplier documentation",
        ],
        result:
          "Building a sound basis for supplier selection decisions.",
      },
      {
        industry: "Quality management (example scenario)",
        situation:
          "A medical technology company wants to qualify a new supplier in Asia. QM documentation does not yet fully meet the requirements.",
        actions: [
          "Document review",
          "Gap analysis",
          "Supplier evaluation",
          "Action plan",
        ],
        result:
          "Structured supplier assessment and support for the qualification process.",
      },
      {
        industry: "Manufacturing (example scenario)",
        situation:
          "A manufacturing company wants to structure its RFQ processes and improve visibility over supplier enquiries.",
        actions: [
          "RFQ workflow setup",
          "Supplier onboarding",
          "Approval process",
          "Transparent process management",
        ],
        result: "Greater transparency and more efficient procurement processes.",
      },
      {
        industry: "Industrial components (example scenario)",
        situation:
          "A purchasing team wants to identify alternative suppliers in Vietnam and India.",
        actions: [
          "Market analysis",
          "Supplier research",
          "Initial qualification",
          "Technical and commercial evaluation",
        ],
        result:
          "Comparison of suitable sources for strategic procurement decisions.",
      },
    ],
  },
  services: {
    label: "Services",
    title: "Procurement, quality and business development",
    description:
      "Comprehensive services for international procurement, quality management, regulatory affairs and building capable supplier networks.",
    items: [
      {
        title: "International Procurement",
        copy: "Supplier research, sourcing and procurement coordination for companies with international supply chains between Europe and Asia.",
        icon: "globe",
      },
      {
        title: "Supplier Development",
        copy: "Identification, qualification and development of capable supplier networks with a focus on quality, reliability and sustainable partnerships.",
        icon: "network",
      },
      {
        title: "Risk and Supply Chain Management",
        copy: "Analysis of supply chain risks, development of robust procurement strategies and support in building resilient and sustainable supplier networks.",
        icon: "alert",
      },
      {
        title: "Supplier and System Audits",
        copy: "Planning and execution of supplier, process and compliance audits including audit reports, action tracking and effectiveness reviews.",
        icon: "approval",
      },
      {
        title: "Quality Management & Regulatory Affairs",
        copy: "Support with quality management, supplier qualification and regulatory requirements under EU MDR, ISO 13485 and other international standards.",
        icon: "shield",
      },
      {
        title: "Compliance & Documentation",
        copy: "Review of certificates, technical documentation, quality records and regulatory evidence to support secure and standards-compliant supply chains.",
        icon: "document",
      },
      {
        title: "Technical Consulting",
        copy: "Technical evaluation of products, components and manufacturing partners, plus support in selecting suitable solutions with regard to quality, functionality and regulatory requirements.",
        icon: "factory",
      },
      {
        title: "Procurement Systems",
        copy: "Development of structured procurement processes with RFQ management, approval workflows, supplier onboarding and digital procurement infrastructure.",
        icon: "package",
      },
      {
        title: "Operational Dashboards",
        copy: "Digital solutions for delivery status, approvals, RFQs and operational transparency across the entire procurement process.",
        icon: "analytics",
      },
      {
        title: "Business Development",
        copy: "Building international business partnerships, developing new procurement strategies and supporting supplier communication and market entry between Europe and Asia.",
        icon: "briefcase",
      },
    ],
  },
  medsafeUdi: {
    label: "MedSafe UDI",
    title: "MedSafe UDI Solutions",
    subtitle: "Digital traceability for medical devices",
    description:
      "AARYX supports medical device manufacturers with the introduction and implementation of the MedSafe UDI solution for digital UDI management, traceability and regulatory compliance under EU MDR and ISO 13485.",
    detail:
      "With MedSafe UDI, Basic UDI-DI, UDI-DI and other product-related UDI data can be managed centrally and prepared for EUDAMED-compliant XML bulk upload. This reduces manual data entry, improves data quality and makes regulatory processes significantly more efficient.",
    supportTitle: "Our support",
    supportItems: [
      "Introduction of the MedSafe UDI solution",
      "UDI data management",
      "Medical device traceability",
      "Integration into quality management systems",
      "Support with regulatory requirements",
    ],
    cta: "Learn more about MedSafe UDI",
    href: "https://medsafe-udi.com",
  },
  network: {
    label: "International network",
    title: "Qualified partners in key markets.",
    description:
      "AARYX connects quality management, supplier evaluation and operational systems into structured collaboration between Europe and Asia.",
    mapTitle: "Europe & Asia Network",
    mapSub: "Partner locations and operational coordination",
    mapAria: "AARYX Europe and Asia network",
    nodes: ["Germany", "India", "Sri Lanka", "Vietnam", "Asia"],
  },
  industries: {
    label: "Industries",
    title: "Industries that depend on quality, reliability and international supply chains.",
    items: [
      "Medical Technology",
      "Industrial Components",
      "Manufacturing",
      "Logistics",
      "Food & Agriculture",
    ],
  },
  contact: {
    title: "Talk to us about your next procurement strategy.",
    description:
      "Connect with AARYX to discuss sourcing, procurement and international business opportunities.",
    cta: "Start a Project",
    ctaCall: "Schedule a Call",
    mailSubject: "AARYX supply chain project",
  },
  contactPage: {
    metaTitle: "Contact | AARYX",
    metaDescription:
      "Send a project enquiry to AARYX: procurement and international business solutions between Europe and Asia.",
    label: "Contact",
    title: "Start a project",
    description:
      "Tell us briefly about your project. We usually reply within 1 to 2 business days.",
    fields: {
      name: "Name",
      email: "Email",
      company: "Company (optional)",
      message: "Message",
      privacyBefore: "I have read the ",
      privacyLink: "privacy policy",
      privacyAfter:
        " and consent to the processing of my data to handle my enquiry.",
    },
    submit: "Send enquiry",
    sending: "Sending …",
    successTitle: "Thank you",
    successBody: "Your enquiry has been received. We will get back to you shortly.",
    errorTitle: "Could not send",
    errorBody: "Please try again or email us directly at contact@aaryx.de.",
    errorNotConfigured:
      "The contact form is temporarily unavailable. Please email us directly.",
    mailFallback: "Contact by email",
  },
  footer: {
    description:
      "Quality management, operational systems and supplier partnerships between Europe and Asia.",
    services: "Services",
    serviceItems: [
      "Supplier development",
      "Quality management",
      "System audits",
      "Regulatory affairs",
    ],
    company: "Company",
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
        "Privacy policy for the AARYX website, how we process personal data.",
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
          title: "3. Contact by email and contact form",
          body: `If you contact us by email at ${company.email} or use our contact form at www.aaryx.de, we process the data you provide (e.g. name, email address, company, message content and any other voluntary details) to handle and respond to your enquiry.\n\nLegal basis: Art. 6 (1) lit. b GDPR where your enquiry relates to the performance of a contract or pre-contractual measures, otherwise Art. 6 (1) lit. f GDPR (legitimate interest in handling enquiries). When using the contact form, processing is additionally based on your consent (Art. 6 (1) lit. a GDPR), which you may withdraw at any time.\n\nWe retain your message until your enquiry has been fully processed and thereafter only for as long as statutory retention obligations apply or legitimate interests in documentation require, as a rule no longer than three years.`,
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
