import { company } from "../company";
import { hosting, legalMeta, supervisoryAuthority } from "../legal";
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
        "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) bzw. den für Telemedien geltenden Informationspflichten.",
      fields: [
        { label: "Anbieter", value: company.name },
        { label: "Anschrift", value: company.address },
        { label: "Website", value: legalMeta.website },
        { label: "E-Mail", value: company.email },
        { label: "Vertreten durch", value: company.representative },
        { label: "USt-IdNr.", value: company.vatId },
      ],
      responsibleTitle: "Verantwortlich für den Inhalt",
      responsibleBody: `${company.responsibleForContent}, ${company.address}`,
      disclaimerTitle: "Haftung für Inhalte",
      disclaimerBody:
        "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.",
      linkLiabilityTitle: "Haftung für Links",
      linkLiabilityBody:
        "Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
      copyrightTitle: "Urheberrecht",
      copyrightBody:
        "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
      disputeTitle: "Verbraucherstreitbeilegung",
      disputeBody:
        "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    },
    privacy: {
      metaTitle: "Datenschutz | AARYX",
      metaDescription:
        "Datenschutzerklärung der AARYX Website – Informationen zur Verarbeitung personenbezogener Daten.",
      label: "Datenschutz",
      title: "Datenschutzerklärung",
      intro:
        "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten wir beim Besuch von www.aaryx.de verarbeiten, zu welchem Zweck dies geschieht und welche Rechte Ihnen zustehen.",
      lastUpdated: legalMeta.lastUpdatedDe,
      sections: [
        {
          title: "1. Verantwortlicher",
          body: `Verantwortlich für die Datenverarbeitung auf dieser Website ist:\n\n${company.name}\n${company.addressStreet}\n${company.addressCity}\n${company.addressCountryDe}\nE-Mail: ${company.email}`,
        },
        {
          title: "2. Hosting und Server-Logfiles",
          body: `Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen in sogenannten Server-Logfiles gespeichert. Hierzu gehören insbesondere:\n• IP-Adresse\n• Datum und Uhrzeit der Anfrage\n• Browsertyp und Browserversion\n• Betriebssystem\n• Referrer-URL\n• aufgerufene Seiten und Dateien\n\nDie Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht in der sicheren Bereitstellung und dem störungsfreien Betrieb unserer Website.\n\nHosting-Anbieter: ${hosting.provider}, ${hosting.address}.\nWeitere Informationen finden Sie unter: ${hosting.privacyPolicy}\n\nDie Speicherdauer der Server-Logfiles richtet sich nach den Vorgaben des Hosting-Anbieters und erfolgt nur so lange, wie dies für den sicheren Betrieb der Website erforderlich ist. Da der Hosting-Anbieter seinen Sitz in den USA hat, kann eine Datenübermittlung in ein Drittland nicht ausgeschlossen werden; diese erfolgt auf Grundlage geeigneter Garantien gemäß Art. 46 DSGVO.`,
        },
        {
          title: "3. Kontakt per E-Mail",
          body: `Wenn Sie uns per E-Mail unter ${company.email} kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Inhalt der Nachricht sowie ggf. weitere freiwillige Angaben) zur Bearbeitung und Beantwortung Ihrer Anfrage.\n\nRechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags oder vorvertraglichen Maßnahmen zusammenhängt, andernfalls Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).\n\nWir speichern Ihre Nachricht, bis die Anfrage abschließend bearbeitet ist und darüber hinaus nur solange, wie gesetzliche Aufbewahrungspflichten bestehen oder berechtigte Interessen einer Dokumentation entgegenstehen – in der Regel höchstens drei Jahre.`,
        },
        {
          title: "4. Cookies und Analyse-Tools",
          body:
            "Diese Website setzt derzeit keine Tracking-Cookies ein und verwendet keine Analyse-Tools wie Google Analytics, Google Tag Manager, Microsoft Clarity oder Meta Pixel. Es findet keine Reichweitenmessung und kein nutzerbezogenes Profiling statt.\n\nFür den technischen Betrieb kann unser Hosting-Anbieter kurzlebige, technisch erforderliche Verarbeitungen vornehmen. Sollten wir künftig einwilligungspflichtige Technologien einsetzen, werden wir diese Datenschutzerklärung vorab ergänzen und – soweit erforderlich – eine Einwilligung einholen.",
        },
        {
          title: "5. Externe Dienste und eingebettete Inhalte",
          body:
            "Diese Website bindet keine Inhalte von Drittanbietern ein, etwa Google Fonts, YouTube, Google Maps, reCAPTCHA oder Social-Media-Plugins. Schriften werden über Systemschriften (Arial, Helvetica) bereitgestellt; es erfolgt kein Abruf externer Font-Server.",
        },
        {
          title: "6. Ihre Rechte",
          body: `Sie haben das Recht auf:\n• Auskunft\n• Berichtigung\n• Löschung\n• Einschränkung der Verarbeitung\n• Datenübertragbarkeit\n• Widerspruch gegen die Verarbeitung\n\nAußerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an ${company.email}.\n\nZuständige Aufsichtsbehörde:\n${supervisoryAuthority.nameDe}\n${supervisoryAuthority.streetDe}\n${supervisoryAuthority.cityDe}\n${supervisoryAuthority.countryDe}\n${supervisoryAuthority.website}`,
        },
        {
          title: "7. SSL-/TLS-Verschlüsselung",
          body:
            "Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am Schloss-Symbol in der Browserzeile und daran, dass die Adresszeile mit „https://“ beginnt.",
        },
      ],
    },
  },
};
