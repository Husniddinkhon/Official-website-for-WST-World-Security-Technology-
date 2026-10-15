import React from "react";

const copy = {
  en: {
    nav: ["Solutions", "Industries", "Projects", "Partners", "About", "Contact"],
    eyebrow: "SECURITY TECHNOLOGY • SYSTEM INTEGRATION • CENTRAL ASIA",
    title: "Security infrastructure built for real-world operations.",
    subtitle:
      "WST designs, supplies and integrates CCTV, access control, AI video analytics, networking, fire & security systems, and solar-powered surveillance solutions for commercial, industrial and public-sector projects.",
    primary: "Become a Partner",
    secondary: "Request a Project Quote",
    since: "Since 2007",
    based: "Uzbekistan",
    coverage: "Project supply across Central Asia",
    solutionsTitle: "One partner. Complete security stack.",
    solutionsLead:
      "From device selection and system design to commissioning, support and lifecycle service.",
    industriesTitle: "Built for demanding environments",
    projectsTitle: "Selected project capability",
    projectsLead:
      "We focus on systems that remain manageable after handover — not just installation day.",
    partnersTitle: "International cooperation",
    partnersLead:
      "For distributors, integrators, EPC contractors and project owners who need reliable supply from Uzbekistan.",
    partnerPoints: [
      "Wholesale and project supply",
      "Dealer / distributor cooperation",
      "Technical design and BOM support",
      "Cross-border logistics coordination",
      "Tender and project documentation",
      "After-sales technical support",
    ],
    ctaTitle: "Planning a security project or distribution partnership?",
    ctaLead:
      "Send us your project scope, target market or product list. We will respond with the right commercial and technical route.",
    whatsapp: "WhatsApp Business",
    call: "Call WST",
    footer: "World Security Technology",
  },
  ru: {
    nav: ["Решения", "Отрасли", "Проекты", "Партнёры", "О компании", "Контакты"],
    eyebrow: "БЕЗОПАСНОСТЬ • СИСТЕМНАЯ ИНТЕГРАЦИЯ • ЦЕНТРАЛЬНАЯ АЗИЯ",
    title: "Инфраструктура безопасности для реальных объектов.",
    subtitle:
      "WST проектирует, поставляет и интегрирует CCTV, СКУД, AI-видеоаналитику, сети, охранно-пожарные системы и автономное видеонаблюдение на солнечной энергии.",
    primary: "Стать партнёром",
    secondary: "Запросить расчёт проекта",
    since: "С 2007 года",
    based: "Узбекистан",
    coverage: "Проектные поставки по Центральной Азии",
    solutionsTitle: "Один партнёр. Полный стек безопасности.",
    solutionsLead:
      "От подбора оборудования и проектирования до пусконаладки, поддержки и сервиса.",
    industriesTitle: "Для объектов с высокими требованиями",
    projectsTitle: "Проектные компетенции",
    projectsLead:
      "Мы строим системы, которыми удобно управлять после сдачи объекта, а не только в день монтажа.",
    partnersTitle: "Международное сотрудничество",
    partnersLead:
      "Для дистрибьюторов, интеграторов, EPC-подрядчиков и заказчиков, которым нужна надёжная поставка из Узбекистана.",
    partnerPoints: [
      "Оптовые и проектные поставки",
      "Дилерское и дистрибьюторское сотрудничество",
      "Проектирование и поддержка BOM",
      "Координация международной логистики",
      "Тендерная и проектная документация",
      "Техническая поддержка после продажи",
    ],
    ctaTitle: "Планируете проект или дистрибьюторское партнёрство?",
    ctaLead:
      "Отправьте техническое задание, рынок или список оборудования. Мы предложим оптимальный коммерческий и технический сценарий.",
    whatsapp: "WhatsApp Business",
    call: "Позвонить WST",
    footer: "World Security Technology",
  },
  uz: {
    nav: ["Yechimlar", "Sohalar", "Loyihalar", "Hamkorlar", "Biz haqimizda", "Aloqa"],
    eyebrow: "XAVFSIZLIK TEXNOLOGIYALARI • TIZIMLI INTEGRATSIYA • MARKAZIY OSIYO",
    title: "Real obyektlar uchun professional xavfsizlik infratuzilmasi.",
    subtitle:
      "WST CCTV, kirishni nazorat qilish, AI videoanalitika, tarmoq, yong‘in va xavfsizlik tizimlari hamda quyosh energiyasida ishlovchi kuzatuv yechimlarini loyihalaydi, yetkazib beradi va integratsiya qiladi.",
    primary: "Hamkor bo‘lish",
    secondary: "Loyiha hisobini olish",
    since: "2007 yildan beri",
    based: "O‘zbekiston",
    coverage: "Markaziy Osiyo bo‘ylab loyiha ta’minoti",
    solutionsTitle: "Bitta hamkor. To‘liq xavfsizlik ekotizimi.",
    solutionsLead:
      "Uskuna tanlash va loyihalashdan tortib ishga tushirish, texnik yordam va servisgacha.",
    industriesTitle: "Talab yuqori bo‘lgan obyektlar uchun",
    projectsTitle: "Loyiha salohiyati",
    projectsLead:
      "Biz faqat o‘rnatib ketmaymiz — topshirilgandan keyin ham boshqarilishi oson bo‘lgan tizim quramiz.",
    partnersTitle: "Xalqaro hamkorlik",
    partnersLead:
      "O‘zbekistondan ishonchli ta’minot izlayotgan distributorlar, integratorlar, EPC pudratchilar va loyiha egalari uchun.",
    partnerPoints: [
      "Ulgurji va loyiha ta’minoti",
      "Diler / distributor hamkorligi",
      "Loyiha va BOM bo‘yicha texnik yordam",
      "Xalqaro logistika koordinatsiyasi",
      "Tender va loyiha hujjatlari",
      "Sotuvdan keyingi texnik yordam",
    ],
    ctaTitle: "Xavfsizlik loyihasi yoki distributor hamkorligini rejalashtiryapsizmi?",
    ctaLead:
      "Texnik topshiriq, bozor yoki mahsulot ro‘yxatini yuboring. Biz eng to‘g‘ri tijoriy va texnik yo‘lni taklif qilamiz.",
    whatsapp: "WhatsApp Business",
    call: "WST ga qo‘ng‘iroq",
    footer: "World Security Technology",
  },
};

const solutions = [
  ["CCTV & VMS", "IP cameras, NVR, enterprise VMS and multi-site video management."],
  ["AI Video Analytics", "Face, vehicle, perimeter and operational video analytics."],
  ["Access Control", "Biometric access, attendance, intercom and controlled entry."],
  ["Network Infrastructure", "PoE switching, wireless bridges, structured cabling and backbone."],
  ["Fire & Security", "Intrusion, fire alarm and integrated incident response systems."],
  ["Solar Security", "Off-grid CCTV with solar, battery and 4G / wireless connectivity."],
];

const industries = [
  "Industrial & Manufacturing",
  "Solar & Energy",
  "Construction & EPC",
  "Hotels & Hospitality",
  "Retail & Commercial",
  "Warehouses & Logistics",
  "Public Infrastructure",
  "Residential & Mixed-use",
];

const projectStats = [
  ["300+", "camera-class deployments"],
  ["4", "regional branches"],
  ["19+", "years in security technology"],
  ["24/7", "technical support mindset"],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  const [lang, setLang] = React.useState("en");
  const t = copy[lang];
  const navTargets = ["solutions", "industries", "projects", "partners", "about", "contact"];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="WST Home">
          <span className="brand-mark">W</span>
          <span className="brand-copy">
            <strong>WST</strong>
            <small>World Security Technology</small>
          </span>
        </button>

        <nav className="nav-desktop" aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <button key={item} onClick={() => scrollTo(navTargets[index])}>{item}</button>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch" aria-label="Language selector">
            {Object.keys(copy).map((key) => (
              <button key={key} className={lang === key ? "active" : ""} onClick={() => setLang(key)}>{key.toUpperCase()}</button>
            ))}
          </div>
          <a className="header-cta" href="https://wa.me/998949081331" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid-pattern" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-content">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-subtitle">{t.subtitle}</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo("partners")}>{t.primary}<ArrowIcon /></button>
              <button className="btn btn-secondary" onClick={() => scrollTo("contact")}>{t.secondary}</button>
            </div>
            <div className="hero-meta">
              <span>{t.since}</span>
              <span>{t.based}</span>
              <span>{t.coverage}</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="signal-card card-a">
              <span className="signal-label">VIDEO SECURITY</span>
              <strong>LIVE</strong>
              <div className="waveform"><i /><i /><i /><i /><i /><i /></div>
            </div>
            <div className="signal-card card-b">
              <span className="signal-label">AI ANALYTICS</span>
              <div className="analytic-row"><b>98.4%</b><small>event confidence</small></div>
              <div className="progress"><span /></div>
            </div>
            <div className="signal-card card-c">
              <span className="signal-label">SYSTEM STATUS</span>
              <div className="status-list">
                <span><i className="dot ok" /> Cameras online</span>
                <span><i className="dot ok" /> Network healthy</span>
                <span><i className="dot ok" /> Recording active</span>
              </div>
            </div>
            <div className="orbital orbital-one" />
            <div className="orbital orbital-two" />
            <div className="core"><span>WST</span></div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Company facts">
          {projectStats.map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </section>

        <section className="section" id="solutions">
          <div className="section-heading">
            <p className="kicker">CAPABILITIES</p>
            <h2>{t.solutionsTitle}</h2>
            <p>{t.solutionsLead}</p>
          </div>
          <div className="solution-grid">
            {solutions.map(([title, text], index) => (
              <article className="solution-card" key={title}>
                <span className="card-index">0{index + 1}</span>
                <div className="card-icon"><span /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-dark" id="industries">
          <div className="section-heading left-light">
            <p className="kicker">INDUSTRIES</p>
            <h2>{t.industriesTitle}</h2>
          </div>
          <div className="industry-grid">
            {industries.map((name, index) => (
              <div className="industry-item" key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{name}</strong>
                <ArrowIcon />
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="kicker">PROJECT DELIVERY</p>
            <h2>{t.projectsTitle}</h2>
            <p>{t.projectsLead}</p>
          </div>

          <div className="project-feature">
            <div className="project-visual">
              <div className="project-map-grid" />
              <div className="project-badge">300+ CAMERAS</div>
              <div className="project-rings"><span /><span /><span /></div>
              <div className="project-node node-1" />
              <div className="project-node node-2" />
              <div className="project-node node-3" />
              <div className="project-node node-4" />
            </div>
            <div className="project-copy">
              <p className="project-type">LARGE-SCALE VIDEO SURVEILLANCE</p>
              <h3>Multi-zone park & public-space security architecture</h3>
              <p>
                Enterprise-scale camera planning, NVR / VMS architecture, network backbone, storage sizing, commissioning and operational handover.
              </p>
              <div className="project-tags">
                <span>IP CCTV</span><span>VMS</span><span>Networking</span><span>Storage</span><span>AI-ready</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section partner-section" id="partners">
          <div className="partner-grid">
            <div>
              <p className="kicker">FOR DEALERS & PROJECT PARTNERS</p>
              <h2>{t.partnersTitle}</h2>
              <p className="partner-lead">{t.partnersLead}</p>
              <div className="brand-row" aria-label="Technology ecosystem">
                <span>UNV</span><span>TIANDY</span><span>HIKVISION</span><span>EZVIZ</span><span>WI-TEK</span>
              </div>
            </div>
            <div className="partner-list">
              {t.partnerPoints.map((point, index) => (
                <div key={point}><span>{String(index + 1).padStart(2, "0")}</span><strong>{point}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-layout">
            <div className="about-number">2007</div>
            <div className="about-copy">
              <p className="kicker">ABOUT WST</p>
              <h2>Engineering-first security technology company from Uzbekistan.</h2>
              <p>
                WST works across supply, design, installation, integration and support. Our focus is practical: correct equipment, clean architecture, accountable commissioning and a system the customer can operate with confidence.
              </p>
              <div className="about-facts">
                <span><strong>HQ</strong> Uzbekistan</span>
                <span><strong>Branches</strong> Tashkent · Namangan · Samarkand · Kashkadarya</span>
                <span><strong>Core</strong> CCTV · AI · Access · Network · Fire · Solar</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <p className="kicker">START A CONVERSATION</p>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaLead}</p>
            <div className="contact-actions">
              <a className="btn btn-primary" href="https://wa.me/998949081331" target="_blank" rel="noreferrer">{t.whatsapp}<ArrowIcon /></a>
              <a className="btn btn-secondary light" href="tel:+998949081331">{t.call}</a>
            </div>
            <div className="contact-number">+998 94 908 13 31</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><strong>WST</strong><span>{t.footer}</span></div>
        <div className="footer-meta">Uzbekistan · Central Asia · International Projects</div>
        <div className="footer-copy">© {new Date().getFullYear()} WST</div>
      </footer>
    </div>
  );
}
