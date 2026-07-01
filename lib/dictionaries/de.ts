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
    medsafeUdi: "MedSafe UDI",
    cases: "Beispielprojekte",
    network: "Netzwerk",
    industries: "Branchen",
    contact: "Kontakt",
    startProject: "Projekt starten",
  },
  hero: {
    label: "Beschaffung & internationales Geschäft",
    title: "Beschaffungs & Business Lösungen zwischen Europa und Asien",
    description:
      "Von der Lieferantensuche in Asien bis zum strukturierten RFQ in Europa. AARYX macht internationale Beschaffung beherrschbar.",
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
  competencies: {
    label: "Kernkompetenzen",
    title: "Unsere Kernkompetenzen für internationale Beschaffung, Qualität und Compliance.",
    items: [
      { title: "Lieferantenqualifizierung", icon: "clipboard" },
      { title: "Qualitätsmanagement", icon: "shield" },
      { title: "System Audits", icon: "approval" },
      { title: "Beschaffungssysteme", icon: "package" },
      { title: "Regulatory Affairs", icon: "document" },
      { title: "Operative Prozesse", icon: "workflow" },
    ],
  },
  cases: {
    label: "Beispielprojekte",
    title: "So unterstützen wir Unternehmen in der Praxis.",
    disclaimer:
      "Die folgenden Szenarien veranschaulichen typische Projekte und Unterstützungsleistungen von AARYX.",
    situationLabel: "Ausgangslage",
    actionLabel: "Mögliche Unterstützung durch AARYX",
    resultLabel: "Ziel",
    items: [
      {
        industry: "Medizintechnik",
        situation:
          "Ein mittelständischer Hersteller in Deutschland sucht CE-konforme Komponentenlieferanten in Asien, verfügt jedoch über kein eigenes Sourcing-Team vor Ort.",
        actions: [
          "Strukturierte Lieferantenrecherche",
          "Erstellung einer qualifizierten Shortlist",
          "RFQ-Koordination",
          "Prüfung der Lieferantendokumentation",
        ],
        result:
          "Aufbau einer fundierten Entscheidungsgrundlage für die Lieferantenauswahl.",
      },
      {
        industry: "Qualitätsmanagement (Beispielszenario)",
        situation:
          "Ein Medizintechnik-Unternehmen möchte einen neuen Lieferanten in Asien qualifizieren. Die QM-Dokumentation entspricht noch nicht vollständig den Anforderungen.",
        actions: [
          "Dokumentenprüfung",
          "Gap-Analyse",
          "Lieferantenbewertung",
          "Maßnahmenplan",
        ],
        result:
          "Strukturierte Bewertung des Lieferanten und Unterstützung des Qualifizierungsprozesses.",
      },
      {
        industry: "Fertigung (Beispielszenario)",
        situation:
          "Ein Fertigungsunternehmen möchte seine RFQ-Prozesse strukturieren und den Überblick über Lieferantenanfragen verbessern.",
        actions: [
          "Aufbau eines RFQ-Workflows",
          "Lieferanten-Onboarding",
          "Freigabeprozess",
          "Transparente Prozesssteuerung",
        ],
        result: "Mehr Transparenz und effizientere Beschaffungsprozesse.",
      },
      {
        industry: "Industriekomponenten (Beispielszenario)",
        situation:
          "Ein Einkaufsteam möchte alternative Lieferanten in Vietnam und Indien identifizieren.",
        actions: [
          "Marktanalyse",
          "Lieferantenrecherche",
          "Erstqualifizierung",
          "Technische und kommerzielle Bewertung",
        ],
        result:
          "Vergleich geeigneter Bezugsquellen für strategische Beschaffungsentscheidungen.",
      },
    ],
  },
  services: {
    label: "Leistungen",
    title: "Beschaffung, Qualität und Geschäftsentwicklung",
    description:
      "Ganzheitliche Dienstleistungen für internationale Beschaffung, Qualitätsmanagement, Regulatory Affairs und den Aufbau leistungsfähiger Lieferantennetzwerke.",
    items: [
      {
        title: "Internationale Beschaffung",
        copy: "Lieferantenrecherche, Sourcing und Beschaffungskoordination für Unternehmen mit internationalen Lieferketten zwischen Europa und Asien.",
        icon: "globe",
      },
      {
        title: "Lieferantenentwicklung",
        copy: "Identifikation, Qualifizierung und Entwicklung leistungsfähiger Lieferantennetzwerke mit Fokus auf Qualität, Zuverlässigkeit und nachhaltige Partnerschaften.",
        icon: "network",
      },
      {
        title: "Risiko und Lieferkettenmanagement",
        copy: "Analyse von Lieferkettenrisiken, Entwicklung robuster Beschaffungsstrategien sowie Unterstützung beim Aufbau widerstandsfähiger und nachhaltiger Liefernetzwerke.",
        icon: "alert",
      },
      {
        title: "Lieferanten und Systemaudits",
        copy: "Planung und Durchführung von Audits bei Lieferanten, Prozessen und Compliance einschließlich Auditbericht, Maßnahmenverfolgung und Wirksamkeitsprüfung.",
        icon: "approval",
      },
      {
        title: "Qualitätsmanagement & Regulatory Affairs",
        copy: "Unterstützung bei Qualitätsmanagement, Lieferantenqualifizierung sowie regulatorischen Anforderungen nach EU MDR, ISO 13485 und weiteren internationalen Standards.",
        icon: "shield",
      },
      {
        title: "Compliance & Dokumentation",
        copy: "Prüfung von Zertifikaten, technischen Dokumentationen, Qualitätsunterlagen und regulatorischen Nachweisen zur Unterstützung sicherer und normgerechter Lieferketten.",
        icon: "document",
      },
      {
        title: "Technische Beratung",
        copy: "Technische Bewertung von Produkten, Komponenten und Fertigungspartnern sowie Unterstützung bei der Auswahl geeigneter Lösungen unter Berücksichtigung von Qualität, Funktionalität und regulatorischen Anforderungen.",
        icon: "factory",
      },
      {
        title: "Beschaffungssysteme",
        copy: "Entwicklung strukturierter Beschaffungsprozesse mit RFQ-Management, Freigabeworkflows, Lieferanten-Onboarding und digitaler Beschaffungsinfrastruktur.",
        icon: "package",
      },
      {
        title: "Operative Dashboards",
        copy: "Digitale Lösungen für Lieferstatus, Freigaben, RFQs und operative Transparenz entlang des gesamten Beschaffungsprozesses.",
        icon: "analytics",
      },
      {
        title: "Business Development",
        copy: "Aufbau internationaler Geschäftspartnerschaften, Entwicklung neuer Beschaffungsstrategien sowie Unterstützung bei Lieferantenkommunikation und Markteintritt zwischen Europa und Asien.",
        icon: "briefcase",
      },
    ],
  },
  medsafeUdi: {
    label: "MedSafe UDI",
    title: "MedSafe UDI Solutions",
    subtitle: "Digitale Rückverfolgbarkeit für Medizinprodukte",
    description:
      "AARYX unterstützt Hersteller von Medizinprodukten bei der Einführung und Implementierung der MedSafe UDI-Lösung für digitales UDI-Management, Rückverfolgbarkeit und regulatorische Compliance gemäß EU MDR und ISO 13485.",
    detail:
      "Mit MedSafe UDI lassen sich Basic UDI-DI, UDI-DI und weitere produktbezogene UDI-Daten zentral verwalten und für den EUDAMED-konformen XML Bulk Upload vorbereiten. Dadurch werden manuelle Dateneingaben reduziert, Datenqualität verbessert und regulatorische Prozesse deutlich effizienter gestaltet.",
    supportTitle: "Unsere Unterstützung",
    supportItems: [
      "Einführung der MedSafe UDI-Lösung",
      "UDI-Datenmanagement",
      "Rückverfolgbarkeit von Medizinprodukten",
      "Integration in Qualitätsmanagementsysteme",
      "Unterstützung bei regulatorischen Anforderungen",
    ],
    cta: "Mehr über MedSafe UDI",
    href: "https://medsafe-udi.com",
  },
  network: {
    label: "Internationales Netzwerk",
    title: "Qualifizierte Partner in Schlüsselmärkten.",
    description:
      "AARYX verbindet Qualitätsmanagement, Lieferantenbewertung und operative Systeme zu einer strukturierten Zusammenarbeit zwischen Europa und Asien.",
    mapTitle: "Europa- & Asien-Netzwerk",
    mapSub: "Partnerstandorte und operative Koordination",
    mapAria: "AARYX Netzwerk Europa und Asien",
    nodes: ["Deutschland", "Indien", "Sri Lanka", "Vietnam", "Asien"],
  },
  industries: {
    label: "Branchen",
    title: "Branchen, die auf Qualität, Zuverlässigkeit und internationale Lieferketten angewiesen sind.",
    items: [
      "Medizintechnik",
      "Industriekomponenten",
      "Fertigung",
      "Logistik",
      "Lebensmittel & Landwirtschaft",
    ],
  },
  contact: {
    title: "Sprechen Sie mit uns über Ihre nächste Beschaffungsstrategie.",
    description:
      "Kontaktieren Sie AARYX, um Sourcing, Beschaffung und internationale Geschäftsmöglichkeiten zu besprechen.",
    cta: "Projekt starten",
    ctaCall: "Gespräch vereinbaren",
    mailSubject: "AARYX Lieferketten-Projekt",
  },
  contactPage: {
    metaTitle: "Kontakt | AARYX",
    metaDescription:
      "Projektanfrage an AARYX: Beschaffung und internationale Geschäftslösungen zwischen Europa und Asien.",
    label: "Kontakt",
    title: "Projekt starten",
    description:
      "Beschreiben Sie kurz Ihr Vorhaben. Wir melden uns in der Regel innerhalb von 1 bis 2 Werktagen.",
    fields: {
      name: "Name",
      email: "E-Mail",
      company: "Unternehmen (optional)",
      message: "Nachricht",
      privacyBefore: "Ich habe die ",
      privacyLink: "Datenschutzerklärung",
      privacyAfter:
        " gelesen und willige in die Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage ein.",
    },
    submit: "Anfrage senden",
    sending: "Wird gesendet …",
    successTitle: "Vielen Dank",
    successBody:
      "Ihre Anfrage ist bei uns eingegangen. Wir melden uns in Kürze bei Ihnen.",
    errorTitle: "Senden fehlgeschlagen",
    errorBody:
      "Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an contact@aaryx.de.",
    errorNotConfigured:
      "Das Kontaktformular ist vorübergehend nicht verfügbar. Bitte schreiben Sie uns direkt per E-Mail.",
    mailFallback: "Per E-Mail kontaktieren",
  },
  footer: {
    description:
      "Qualitätsmanagement, operative Systeme und Lieferantenpartnerschaften zwischen Europa und Asien.",
    services: "Leistungen",
    serviceItems: [
      "Lieferantenentwicklung",
      "Qualitätsmanagement",
      "System Audits",
      "Regulatory Affairs",
    ],
    company: "Unternehmen",
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
        "Datenschutzerklärung der AARYX Website, Informationen zur Verarbeitung personenbezogener Daten.",
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
          title: "3. Kontakt per E-Mail und Kontaktformular",
          body: `Wenn Sie uns per E-Mail unter ${company.email} kontaktieren oder unser Kontaktformular auf www.aaryx.de nutzen, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Unternehmen, Inhalt der Nachricht sowie ggf. weitere freiwillige Angaben) zur Bearbeitung und Beantwortung Ihrer Anfrage.\n\nRechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags oder vorvertraglichen Maßnahmen zusammenhängt, andernfalls Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen). Bei Nutzung des Kontaktformulars erfolgt die Verarbeitung zusätzlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit widerrufen können.\n\nWir speichern Ihre Nachricht, bis die Anfrage abschließend bearbeitet ist und darüber hinaus nur solange, wie gesetzliche Aufbewahrungspflichten bestehen oder berechtigte Interessen einer Dokumentation entgegenstehen, in der Regel höchstens drei Jahre.`,
        },
        {
          title: "4. Cookies und Analyse-Tools",
          body:
            "Diese Website setzt derzeit keine Tracking-Cookies ein und verwendet keine Analyse-Tools wie Google Analytics, Google Tag Manager, Microsoft Clarity oder Meta Pixel. Es findet keine Reichweitenmessung und kein nutzerbezogenes Profiling statt.\n\nFür den technischen Betrieb kann unser Hosting-Anbieter kurzlebige, technisch erforderliche Verarbeitungen vornehmen. Sollten wir künftig einwilligungspflichtige Technologien einsetzen, werden wir diese Datenschutzerklärung vorab ergänzen und, soweit erforderlich, eine Einwilligung einholen.",
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
