export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  logo: {
    claim: string;
  };
  langSwitcher: {
    label: string;
    de: string;
    en: string;
  };
  nav: {
    services: string;
    network: string;
    industries: string;
    contact: string;
    startProject: string;
  };
  hero: {
    label: string;
    title: string;
    description: string;
    ctaProject: string;
    ctaCall: string;
    facts: Array<{ value: string; label: string }>;
    mailSubjectProject: string;
    mailSubjectCall: string;
  };
  dashboard: {
    commandCenter: string;
    live: string;
    metrics: Array<{ label: string; value: string; note: string }>;
    approvalPipeline: string;
    approvalSub: string;
    workflow: Array<{ stage: string; status: string; value: number }>;
    analytics: string;
    analyticsSub: string;
    operationalStatus: string;
    running: string;
    clocks: {
      title: string;
      live: string;
      mapAria: string;
    };
  };
  competencies: {
    label: string;
    title: string;
    items: Array<{ title: string; icon: string }>;
  };
  cases: {
    label: string;
    title: string;
    disclaimer: string;
    situationLabel: string;
    actionLabel: string;
    resultLabel: string;
    items: Array<{
      industry: string;
      situation: string;
      actions: string[];
      result: string;
    }>;
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: Array<{ title: string; copy: string; icon: string }>;
  };
  network: {
    label: string;
    title: string;
    description: string;
    mapTitle: string;
    mapSub: string;
    mapAria: string;
    nodes: string[];
  };
  industries: {
    label: string;
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    description: string;
    cta: string;
    ctaCall: string;
    mailSubject: string;
  };
  contactPage: {
    metaTitle: string;
    metaDescription: string;
    label: string;
    title: string;
    description: string;
    fields: {
      name: string;
      email: string;
      company: string;
      message: string;
      privacyBefore: string;
      privacyLink: string;
      privacyAfter: string;
    };
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    errorTitle: string;
    errorBody: string;
    errorNotConfigured: string;
    mailFallback: string;
  };
  footer: {
    description: string;
    services: string;
    serviceItems: string[];
    company: string;
    contact: string;
    legal: string;
    imprint: string;
    privacy: string;
  };
  legal: {
    backHome: string;
    imprint: {
      metaTitle: string;
      metaDescription: string;
      label: string;
      title: string;
      intro: string;
      fields: Array<{ label: string; value: string }>;
      responsibleTitle: string;
      responsibleBody: string;
      disclaimerTitle: string;
      disclaimerBody: string;
      linkLiabilityTitle: string;
      linkLiabilityBody: string;
      copyrightTitle: string;
      copyrightBody: string;
      disputeTitle: string;
      disputeBody: string;
    };
    privacy: {
      metaTitle: string;
      metaDescription: string;
      label: string;
      title: string;
      intro: string;
      lastUpdated: string;
      sections: Array<{ title: string; body: string }>;
    };
  };
};
