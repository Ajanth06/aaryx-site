import { company } from "../company";
import type { Dictionary } from "./types";

export const de: Dictionary = {
  meta: {
    title: "AARYX | Beschaffung & operative Systeme",
    description:
      "Moderne Beschaffungs-, Workflow- und digitale Infrastruktursysteme für Unternehmen in Europa und Asien.",
  },
  logo: {
    claim: "Alleine bist du gut. Mit AARYX bist du ein Superheld.",
  },
  langSwitcher: {
    label: "Sprache",
    de: "DE",
    en: "EN",
  },
  nav: {
    services: "Leistungen",
    network: "Netzwerk",
    industries: "Branchen",
    contact: "Kontakt",
    startProject: "Projekt starten",
  },
  hero: {
    label: "Beschaffung & internationales Geschäft",
    title: "Beschaffungs- & Business-Lösungen zwischen Europa und Asien",
    description:
      "Wir helfen Unternehmen, Produkte zu beschaffen, Lieferanten zu managen und verlässliche Beschaffungsnetzwerke in Europa und Asien aufzubauen.",
    ctaProject: "Projekt starten",
    ctaCall: "Gespräch vereinbaren",
    facts: [
      { value: "Deutschland", label: "Standort" },
      { value: "Europa / Asien", label: "Märkte" },
      { value: "B2B", label: "Fokus" },
    ],
    mailSubjectProject: "AARYX Projekt",
    mailSubjectCall: "Gespräch mit AARYX vereinbaren",
  },
  dashboard: {
    illustration: "Illustration – keine Live-Daten",
    commandCenter: "Lieferanten-Kommandozentrale",
    live: "LIVE",
    metrics: [
      { label: "Lieferanten-Score", value: "92", note: "Freigegebenes Netzwerk" },
      { label: "Offene RFQs", value: "18", note: "4 dringende Prüfungen" },
      { label: "Lieferstatus", value: "96%", note: "Im Plan" },
    ],
    approvalPipeline: "Freigabe-Pipeline",
    approvalSub: "Transparenz von RFQ bis Bestellung",
    workflow: [
      { stage: "Beschaffungsanfragen", status: "34 offen", value: 82 },
      { stage: "Freigabe-Workflow", status: "Rechtsprüfung", value: 58 },
      { stage: "Lieferverfolgung", status: "12 Sendungen", value: 74 },
    ],
    analytics: "Beschaffungs-Analytik",
    analyticsSub: "Lieferanten-Antwortrate",
    operationalStatus: "Betriebsstatus",
    running: "Aktiv",
    clocks: {
      title: "Marktuhren",
      live: "Live",
      mapAria: "Weltkarte der Marktstandorte",
    },
  },
  trust: [
    {
      title: "Lieferantensuche",
      copy: "Strukturierte Lieferantenrecherche und Qualifizierung auf internationalen Märkten.",
      icon: "network",
    },
    {
      title: "Internationaler Handel",
      copy: "Geschäftsunterstützung zwischen Europa und asiatischen Beschaffungsregionen.",
      icon: "globe",
    },
    {
      title: "Beschaffungssysteme",
      copy: "Digitale Workflows für RFQs, Freigaben und Lieferantenmanagement.",
      icon: "package",
    },
    {
      title: "Operative Exzellenz",
      copy: "Klare Beschaffungsprozesse für Transparenz und Kontrolle.",
      icon: "shield",
    },
  ],
  services: {
    label: "Leistungen",
    title: "Beschaffungssysteme für komplexe Lieferantenoperationen.",
    items: [
      {
        title: "Beschaffungssysteme",
        copy: "Lieferanten-Onboarding, Sourcing-Pipelines und Beschaffungsinfrastruktur.",
        icon: "package",
      },
      {
        title: "Operative Dashboards",
        copy: "Internes Tracking, Freigaben, Lieferstatus und operative Transparenz.",
        icon: "analytics",
      },
      {
        title: "Internationaler Handel",
        copy: "Lieferantensuche und Geschäftsunterstützung zwischen Europa und Asien.",
        icon: "globe",
      },
    ],
  },
  network: {
    label: "Internationales Netzwerk",
    title: "Beschaffungskoordination zwischen Europa und Asien.",
    description:
      "AARYX verbindet Lieferantensuche, Handelsunterstützung und operative Systeme zu einer strukturierten Beschaffungsebene.",
    mapTitle: "Europa- & Asien-Netzwerk",
    mapSub: "Lieferantensuche und Beschaffungskoordination",
    mapAria: "AARYX internationale Beschaffungskarte",
    nodes: ["Deutschland", "Indien", "Sri Lanka", "Vietnam", "Asien"],
  },
  kpis: [
    { value: "Europa & Asien", label: "Netzwerk" },
    { value: "Lieferanten", label: "Management" },
    { value: "Beschaffung", label: "Support" },
    { value: "Business", label: "Lösungen" },
  ],
  industries: {
    label: "Branchen",
    title: "Für operativ anspruchsvolle Sektoren gebaut.",
    items: [
      "Medizintechnik",
      "Industriekomponenten",
      "Fertigung",
      "Logistik",
      "Lebensmittel & Landwirtschaft",
    ],
  },
  contact: {
    title: "Lassen Sie uns Ihre Lieferkette aufbauen",
    description:
      "Kontaktieren Sie AARYX, um Sourcing, Beschaffung und internationale Geschäftsmöglichkeiten zu besprechen.",
    cta: "Projekt starten",
    mailSubject: "AARYX Lieferketten-Projekt",
  },
  footer: {
    description:
      "Beschaffung, operative Systeme und internationaler Handel zwischen Europa und Asien.",
    services: "Leistungen",
    serviceItems: ["Beschaffung", "Operations", "Internationaler Handel"],
    company: "Unternehmen",
    about: "Über uns",
    contact: "Kontakt",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
  },
  legal: {
    backHome: "Zur Startseite",
    imprint: {
      metaTitle: "Impressum | AARYX",
      metaDescription:
        "Impressum und Anbieterkennzeichnung der AARYX Website gemäß deutschem Recht.",
      label: "Rechtliches",
      title: "Impressum",
      intro:
        "Angaben gemäß § 5 TMG.",
      fields: [
        { label: "Anbieter", value: company.name },
        { label: "Anschrift", value: company.address },
        { label: "E-Mail", value: company.email },
        { label: "Vertreten durch", value: company.representative },
        { label: "USt-IdNr.", value: company.vatId },
      ],
      responsibleTitle: "Verantwortlich für den Inhalt",
      responsibleBody: `${company.responsibleForContent} (Anschrift wie oben)`,
      disclaimerTitle: "Haftung für Inhalte",
      disclaimerBody:
        "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      disputeTitle: "Streitschlichtung",
      disputeBody:
        "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    },
    privacy: {
      metaTitle: "Datenschutz | AARYX",
      metaDescription:
        "Datenschutzerklärung der AARYX Website – Informationen zur Verarbeitung personenbezogener Daten.",
      label: "Datenschutz",
      title: "Datenschutzerklärung",
      intro:
        "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Erklärung beschreibt, welche Daten wir beim Besuch dieser Website verarbeiten. Ergänzen Sie die TODO-Abschnitte mit Ihren tatsächlichen Hosting- und Verarbeitungsdetails vor dem Launch.",
      lastUpdated: "Stand: Juni 2026 (Entwurf – vor Launch rechtlich prüfen)",
      sections: [
        {
          title: "1. Verantwortlicher",
          body: `Verantwortlich für die Datenverarbeitung auf dieser Website ist ${company.name}, ${company.address}. Kontakt: ${company.email}.`,
        },
        {
          title: "2. Hosting und Server-Logfiles",
          body: "Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen in sogenannten Server-Logfiles gespeichert (z. B. IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene URL, Browsertyp). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb). TODO: Hosting-Anbieter, Standort und Aufbewahrungsfristen ergänzen.",
        },
        {
          title: "3. Kontakt per E-Mail",
          body: `Wenn Sie uns per E-Mail (${company.email}) kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO.`,
        },
        {
          title: "4. Cookies und Analyse-Tools",
          body: "Diese Website setzt derzeit keine Tracking-Cookies oder Analyse-Tools ein. Sollten Sie künftig Dienste wie Google Analytics, Matomo oder vergleichbare Tools nutzen, muss dieser Abschnitt entsprechend ergänzt und – falls erforderlich – eine Einwilligung eingeholt werden.",
        },
        {
          title: "5. Ihre Rechte",
          body: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren. TODO: Zuständige Aufsichtsbehörde ergänzen.",
        },
        {
          title: "6. SSL-/TLS-Verschlüsselung",
          body: "Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am Schloss-Symbol in der Browserzeile und an „https://“ in der Adresszeile.",
        },
      ],
    },
  },
};
