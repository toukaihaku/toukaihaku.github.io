"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "ja" | "zh";

const copy = {
  en: {
    nav: { about: "Profile", academic: "Academic", research: "Research", publications: "Writing", contact: "Contact" },
    hero: {
      issue: "Academic profile · Osaka, Japan · 2026",
      role: "Second-year undergraduate",
      school: "School of Economics, The University of Osaka",
      lead: "Exploring how behavioral insights, institutional design, and digital public services can make public administration more accessible and effective.",
      portrait: "Portrait study · 2026",
      photoAlt: "Portrait photograph of Kaibo Tang",
      illustrationAlt: "Illustrated portrait of Kaibo Tang",
      explore: "Explore research",
      selected: "Selected paper",
    },
    about: {
      label: "Profile",
      title: "Economics at the point where institutions meet everyday decisions.",
      body: "I am an undergraduate student at The University of Osaka. My academic interests span labor economics and behavioral economics, with a particular focus on how institutional design, digital public services, and behavioral insights such as nudging can improve administrative procedures and public communication.",
      location: "Based in Osaka, Japan",
      affiliation: "The University of Osaka · School of Economics",
      interests: ["Labor Economics", "Behavioral Economics", "Digital Government", "Administrative Burden", "Nudging"],
    },
    academic: {
      label: "Education & academic activities",
      title: "Learning in the classroom, testing ideas in the field.",
      intro: "My academic path combines undergraduate study, seminar discussion, independent research, and engagement with the behavioral-economics community.",
      education: "Education",
      university: "The University of Osaka",
      school: "Undergraduate program · School of Economics",
      universityPeriod: "2025 — 2029 (expected)",
      zemi: "Ohtake Zemi",
      zemiRole: "Seminar led by Professor Fumio Ohtake",
      zemiBody: "Member of Professor Fumio Ohtake’s seminar at the School of Economics.",
      current: "Current",
      supportLabel: "Research support",
      supportTitle: "Undergraduate Independent Research Program",
      supportBody: "Information Frictions, Ethnic Networks, and Part-Time Wage Gaps among Chinese International Students in Japan",
      supportMeta: "The University of Osaka · Jul–Dec 2026",
      membershipLabel: "Academic membership",
      membershipTitle: "Association of Behavioral Economics and Finance",
      membershipBody: "Student Member",
      membershipMeta: "Since July 2026",
      teachingLabel: "Part-time teaching",
      teachingTitle: "Chinichi Juku Osaka",
      teachingBody: "EJU Japanese · Japan and the World · Mathematics Course 1",
      teachingMeta: "Instructor · Osaka",
      learnMore: "Official information",
    },
    research: {
      label: "Research experience",
      title: "Current lines of inquiry",
      intro: "Three current projects examine how information environments, behavioral insights, and forecasting tools shape public and labor-market decisions.",
      projectLabel: "Working paper",
      protocolLabel: "Study protocol",
      designLabel: "Research design",
      projectOneTitle: "Digital administration & behavioral public policy",
      projectOneBody: "Designing a pragmatic randomized controlled trial in Osaka Prefecture to test whether redesigned envelopes, renewal forms, and procedural instructions can increase timely online filing for motor vehicle tax exemption renewals.",
      projectTwoTitle: "Behavioral forecasting & intervention choice",
      projectTwoBody: "Auditing archived GPT-4 forecasts to test whether directional accuracy adds useful quantitative information and improves choices among behavioral interventions.",
      projectThreeTitle: "Information frictions & student labor markets",
      projectThreeBody: "A pre-specified study of how Japanese/formal and Chinese/co-ethnic job-search channels may shape the part-time opportunities and wages visible to Chinese international students in Japan.",
      supportOne: "Study protocol · The University of Osaka",
      supportTwo: "Working paper · SSRN 7127120",
      supportThree: "Research design · SSRN 7087178",
      period: "2026 — present",
    },
    publications: {
      label: "Publications & working papers",
      title: "Selected writing",
      intro: "Research protocols and working papers in behavioral economics, public administration, and labor economics.",
      author: "Kaibo Tang",
      latest: "Working paper · SSRN · 2026",
      preprint: "Preprint · SSRN · 19 pages · Posted 13 July 2026",
      working: "Working paper · SSRN",
      auditPaper: "Beyond Directional Accuracy: Auditing Archived GPT-4 Forecasts for Behavioral Intervention Choice",
      auditPaperShort: "An incremental-information audit showing why correct directions need not imply calibrated forecasts or better intervention choices—and why simple baselines, named comparators, and winner uncertainty matter.",
      paperOne: "Nudge Interventions to Increase Online Filing for Annual Motor Vehicle Tax (Category-Based) Exemption Renewals — Protocol for a Pragmatic Randomized Controlled Trial in the Kitakawachi Area of Osaka Prefecture",
      paperOneShort: "This protocol evaluates whether a nudge package can increase timely completed online filings, while explicitly measuring access, equity, administrative burden, and possible harms of digitalization.",
      paperTwo: "Information Frictions, Ethnic Networks, and Part-Time Wage Gaps among Chinese International Students in Japan",
      paperTwoShort: "This research design examines whether Japanese/formal and Chinese/co-ethnic job-search channels expose Chinese international students in Japan to different part-time opportunities and wages.",
      overview: "Research overview",
      view: "View on SSRN",
      pdf: "Open PDF",
      jel: "JEL D91 · C93 · H71 · H83",
      auditJel: "JEL C44 · C52 · C53 · D91",
    },
    contact: {
      label: "Contact",
      title: "Research starts with a good question—and often, a conversation.",
      body: "For research correspondence, potential collaboration, or questions about my work, please feel free to get in touch.",
      email: "Write an email",
      orcid: "View ORCID",
      ssrn: "View SSRN profile",
    },
    footer: "Kaibo Tang · 唐楷博",
    theme: "Toggle color theme",
    skip: "Skip to content",
  },
  ja: {
    nav: { about: "プロフィール", academic: "学術経歴", research: "研究", publications: "論文", contact: "連絡先" },
    hero: {
      issue: "Academic profile · 大阪 · 2026",
      role: "経済学部 2年生",
      school: "大阪大学 経済学部",
      lead: "行動科学の知見、制度設計、デジタル公共サービスを通じて、行政手続と公共コミュニケーションをより利用しやすく、効果的にする方法を研究しています。",
      portrait: "Portrait study · 2026",
      photoAlt: "唐楷博のポートレート写真",
      illustrationAlt: "唐楷博のイラストポートレート",
      explore: "研究を見る",
      selected: "注目論文",
    },
    about: {
      label: "プロフィール",
      title: "制度と日常の意思決定が交わる場所から、経済学を考える。",
      body: "大阪大学経済学部の学部生です。労働経済学と行動経済学に関心があり、特に制度設計、デジタル公共サービス、ナッジなどの行動科学的知見が、行政手続や公共コミュニケーションの改善にどのように役立つかを研究しています。",
      location: "大阪を拠点に活動",
      affiliation: "大阪大学 · 経済学部",
      interests: ["労働経済学", "行動経済学", "デジタル政府", "行政負担", "ナッジ"],
    },
    academic: {
      label: "教育・学術活動",
      title: "教室で学び、現場で問いを確かめる。",
      intro: "学部での学修、ゼミでの議論、自主研究、行動経済学コミュニティへの参加を通じて研究を進めています。",
      education: "学歴",
      university: "大阪大学",
      school: "経済学部 · 学部課程",
      universityPeriod: "2025 — 2029（予定）",
      zemi: "大竹ゼミ",
      zemiRole: "大竹文雄教授",
      zemiBody: "大阪大学経済学部・大竹文雄教授の大竹ゼミに所属しています。",
      current: "在籍中",
      supportLabel: "研究支援",
      supportTitle: "学部学生による自主研究奨励事業",
      supportBody: "日本の中国人留学生における情報摩擦、エスニック・ネットワークとアルバイト賃金格差",
      supportMeta: "大阪大学 · 2026年7月–12月",
      membershipLabel: "学会所属",
      membershipTitle: "行動経済学会",
      membershipBody: "学生会員",
      membershipMeta: "2026年7月より",
      teachingLabel: "アルバイト・教育経験",
      teachingTitle: "知日塾 大阪校",
      teachingBody: "EJU日本語 · 総合科目 · 文科数学",
      teachingMeta: "講師 · 大阪",
      learnMore: "公式情報",
    },
    research: {
      label: "研究経験",
      title: "現在の研究テーマ",
      intro: "情報環境、行動科学の知見、予測手法が公共部門と労働市場の意思決定にどう関わるかを、三つの研究で検討しています。",
      projectLabel: "ワーキングペーパー",
      protocolLabel: "研究プロトコル",
      designLabel: "研究デザイン",
      projectOneTitle: "デジタル行政と行動公共政策",
      projectOneBody: "大阪府における自動車税（種別割）減免更新を対象に、封筒、更新申請書、手続案内の改善が期限内のオンライン申請を促進するかを検証する、実用的ランダム化比較試験を設計しています。",
      projectTwoTitle: "行動予測と介入選択",
      projectTwoBody: "保存済みGPT-4予測を監査し、方向の正しさが有用な数量情報を加え、行動介入の選択を改善するかを検証しています。",
      projectThreeTitle: "情報摩擦と留学生の労働市場",
      projectThreeBody: "日本の中国人留学生を対象に、日本語・公的経路と中国語・同民族ネットワークを通じた求職が、目に入るアルバイト機会と賃金にどう関わるかを事前に定めた設計で検討します。",
      supportOne: "研究プロトコル · 大阪大学",
      supportTwo: "ワーキングペーパー · SSRN 7127120",
      supportThree: "研究デザイン · SSRN 7087178",
      period: "2026 — 現在",
    },
    publications: {
      label: "論文・ワーキングペーパー",
      title: "研究成果",
      intro: "行動経済学、公共行政、労働経済学に関する研究プロトコルとワーキングペーパーです。",
      author: "Kaibo Tang（唐 楷博）",
      latest: "ワーキングペーパー · SSRN · 2026年",
      preprint: "プレプリント · SSRN · 19頁 · 2026年7月13日公開",
      working: "ワーキングペーパー · SSRN",
      auditPaper: "方向の正しさを超えて――行動介入選択のための保存済みGPT-4予測の監査",
      auditPaperShort: "方向を正しく当てることが、数値的に較正された予測やより良い介入選択を意味しない理由を検証し、単純な基準、比較対象の明示、勝者の不確実性の重要性を示します。",
      paperOne: "自動車税（種別割）減免更新のオンライン申請を促進するナッジ介入――大阪府北河内地域における実用的ランダム化比較試験のプロトコル",
      paperOneShort: "オンライン申請の期限内完了率を高められるかを検証するとともに、デジタル化に伴うアクセス、公平性、行政負担、潜在的な不利益も評価する研究プロトコルです。",
      paperTwo: "日本の中国人留学生における情報摩擦、エスニック・ネットワークとアルバイト賃金格差",
      paperTwoShort: "日本の中国人留学生を対象に、日本語・公的経路と中国語・同民族ネットワークを通じた求職が、接触するアルバイト機会と賃金にどう関わるかを検討する研究デザインです。",
      overview: "研究紹介",
      view: "SSRNで見る",
      pdf: "PDFを開く",
      jel: "JEL D91 · C93 · H71 · H83",
      auditJel: "JEL C44 · C52 · C53 · D91",
    },
    contact: {
      label: "連絡先",
      title: "研究は、よい問いから。そして多くの場合、対話から始まります。",
      body: "研究に関するご連絡、共同研究のご相談、研究内容へのご質問がありましたら、お気軽にお問い合わせください。",
      email: "メールを送る",
      orcid: "ORCIDを見る",
      ssrn: "SSRNプロフィールを見る",
    },
    footer: "Kaibo Tang · 唐楷博",
    theme: "配色を切り替える",
    skip: "本文へ移動",
  },
  zh: {
    nav: { about: "简介", academic: "学术经历", research: "研究", publications: "文章", contact: "联系" },
    hero: {
      issue: "Academic profile · 日本大阪 · 2026",
      role: "经济学部二年级本科生",
      school: "大阪大学经济学部",
      lead: "关注如何运用行为科学洞见、制度设计和数字公共服务，使行政程序与公共沟通更易使用、更具成效。",
      portrait: "Portrait study · 2026",
      photoAlt: "唐楷博的正式肖像照片",
      illustrationAlt: "唐楷博的插画肖像",
      explore: "浏览研究",
      selected: "重点文章",
    },
    about: {
      label: "个人简介",
      title: "在制度与日常决策交汇之处，思考经济学。",
      body: "我是大阪大学经济学部本科生，研究兴趣包括劳动经济学与行为经济学。我尤其关注制度设计、数字公共服务，以及助推等行为科学洞见如何改善行政程序和公共沟通。",
      location: "现居日本大阪",
      affiliation: "大阪大学 · 经济学部",
      interests: ["劳动经济学", "行为经济学", "数字政府", "行政负担", "助推"],
    },
    academic: {
      label: "教育与学术活动",
      title: "在课堂中学习，在现实中检验问题。",
      intro: "我的学术经历连接本科课程、研讨班讨论、自主研究与行为经济学共同体。",
      education: "教育经历",
      university: "大阪大学",
      school: "经济学部 · 本科课程",
      universityPeriod: "2025 — 2029（预计）",
      zemi: "大竹ゼミ",
      zemiRole: "大竹文雄教授研讨班",
      zemiBody: "现为大阪大学经济学部大竹文雄教授“大竹ゼミ”成员。",
      current: "在读",
      supportLabel: "研究支持",
      supportTitle: "本科生自主研究项目",
      supportBody: "在日中国留学生的信息摩擦、族群网络与兼职工资差距",
      supportMeta: "大阪大学 · 2026年7月–12月",
      membershipLabel: "学术会员",
      membershipTitle: "日本行为经济学会",
      membershipBody: "学生会员",
      membershipMeta: "自2026年7月起",
      teachingLabel: "兼职教学",
      teachingTitle: "知日塾大阪校",
      teachingBody: "EJU日语 · 综合科目 · 文科数学",
      teachingMeta: "讲师 · 大阪",
      learnMore: "官方信息",
    },
    research: {
      label: "研究经历",
      title: "当前研究方向",
      intro: "通过三项研究考察信息环境、行为科学洞见与预测工具如何影响公共部门和劳动力市场中的决策。",
      projectLabel: "工作论文",
      protocolLabel: "研究方案",
      designLabel: "研究设计",
      projectOneTitle: "数字行政与行为公共政策",
      projectOneBody: "围绕大阪府汽车税（按类别）减免续办程序，设计务实型随机对照试验，检验重新设计信封、续办表格和程序说明能否提高按时完成在线申报的比例。",
      projectTwoTitle: "行为预测与干预选择",
      projectTwoBody: "审计存档GPT-4预测，检验方向准确性是否提供有用的增量数量信息，并改善行为干预的选择。",
      projectThreeTitle: "信息摩擦与留学生劳动力市场",
      projectThreeBody: "以预先设定的研究设计，考察日本的中国留学生通过日语/正式渠道或中文/同族网络求职，是否会影响其可见的兼职机会与工资。",
      supportOne: "研究方案 · 大阪大学",
      supportTwo: "工作论文 · SSRN 7127120",
      supportThree: "研究设计 · SSRN 7087178",
      period: "2026 — 至今",
    },
    publications: {
      label: "论文与工作论文",
      title: "研究文章",
      intro: "关于行为经济学、公共行政和劳动经济学的研究方案与工作论文。",
      author: "唐楷博（Kaibo Tang）",
      latest: "工作论文 · SSRN · 2026年",
      preprint: "预印本 · SSRN · 19页 · 2026年7月13日发布",
      working: "工作论文 · SSRN",
      auditPaper: "超越方向准确性：面向行为干预选择的存档GPT-4预测审计",
      auditPaperShort: "通过增量信息审计说明：方向判断正确并不等于数值预测校准，也不必然带来更优的干预选择；评估还需要简单基准、清晰的比较对象与对“赢家”不确定性的处理。",
      paperOne: "提高汽车税（按类别）减免续办在线申报率的助推干预——大阪府北河内地区务实型随机对照试验方案",
      paperOneShort: "该研究方案评估一组助推措施能否提高按时完成在线申报的比例，同时考察数字化带来的可及性、公平性、行政负担与潜在不利影响。",
      paperTwo: "在日中国留学生的信息摩擦、族群网络与兼职工资差距",
      paperTwoShort: "本研究设计考察日语／正式渠道与中文／同族网络求职，是否会让在日中国留学生接触到不同的兼职机会与工资。",
      overview: "研究介绍",
      view: "在 SSRN 查看",
      pdf: "打开 PDF",
      jel: "JEL D91 · C93 · H71 · H83",
      auditJel: "JEL C44 · C52 · C53 · D91",
    },
    contact: {
      label: "联系方式",
      title: "研究始于一个好问题，也常常始于一次交流。",
      body: "如需研究交流、探讨合作，或对我的工作有任何问题，欢迎与我联系。",
      email: "发送邮件",
      orcid: "查看 ORCID",
      ssrn: "查看 SSRN 主页",
    },
    footer: "Kaibo Tang · 唐楷博",
    theme: "切换明暗模式",
    skip: "跳转到正文",
  },
} as const;

const links = {
  paperOverview: "/research/nudge-study",
  auditOverview: "/research/gpt4-forecast-audit",
  auditSsrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7127120",
  ssrnProfile: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=11293568",
  orcid: "https://orcid.org/0009-0004-2637-8025",
  independentResearch: "https://www.osaka-u.ac.jp/ja/education/ug_jishuken",
  abef: "https://www.abef.jp/",
  osakaEconomics: "https://www.econ.osaka-u.ac.jp/",
  ohtakeSeminar: "https://sites.google.com/view/ohtakeseminar/",
  teaching: "/teaching/chinichi-osaka",
  informationOverview: "/research/information-frictions",
  informationSsrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7087178",
  email: "mailto:u300863g@ecs.osaka-u.ac.jp",
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [dark, setDark] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const savedLang = window.localStorage.getItem("kaibo-lang") as Lang | null;
    if (savedLang && savedLang in copy) setLang(savedLang);

    const savedTheme = window.localStorage.getItem("kaibo-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(savedTheme ? savedTheme === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    window.localStorage.setItem("kaibo-lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("kaibo-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <a className="skip-link" href="#main-content">{t.skip}</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Kaibo Tang home">
          <span className="wordmark-mark">KT</span>
          <span className="wordmark-name">Kaibo Tang</span>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#about">{t.nav.about}</a>
          <a href="#academic">{t.nav.academic}</a>
          <a href="#research">{t.nav.research}</a>
          <a href="#publications">{t.nav.publications}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="header-actions">
          <div className="language-switcher" role="group" aria-label="Language">
            {(["en", "ja", "zh"] as Lang[]).map((item) => (
              <button
                className={lang === item ? "active" : ""}
                key={item}
                onClick={() => setLang(item)}
                type="button"
                aria-pressed={lang === item}
              >
                {item === "en" ? "EN" : item === "ja" ? "日本語" : "中文"}
              </button>
            ))}
          </div>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={t.theme}
            title={t.theme}
          >
            <span aria-hidden="true">{dark ? "☼" : "◐"}</span>
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow reveal delay-one">{t.hero.issue}</p>
            <h1 className="display-name reveal delay-two">
              <span>Kaibo</span>
              <span>Tang</span>
            </h1>
            <div className="hero-bottom reveal delay-three">
              <div>
                <p className="cjk-name">唐楷博</p>
                <p className="hero-role">{t.hero.role}</p>
                <p className="hero-school">{t.hero.school}</p>
              </div>
              <p className="hero-lead">{t.hero.lead}</p>
            </div>
            <div className="hero-actions reveal delay-four">
              <a className="button button-primary" href="#research">
                {t.hero.explore}<span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href={links.auditOverview}>
                {t.hero.selected}<span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="portrait-panel reveal delay-three" aria-label={t.hero.portrait}>
            <div className="portrait-frame">
              <div className="portrait-photo">
                <img src="/kaibo-tang-portrait.jpg" alt={t.hero.photoAlt} />
              </div>
              <p>{t.hero.portrait}</p>
            </div>
            <div className="illustration-frame">
              <img src="/kaibo-tang-illustration.png" alt={t.hero.illustrationAlt} />
              <span aria-hidden="true">02</span>
            </div>
            <div className="portrait-index" aria-hidden="true">
              <span>34.6937° N</span>
              <span>135.5023° E</span>
            </div>
          </aside>

          <div className="hero-edition" aria-hidden="true">Vol. 01</div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-index">01</div>
          <div className="section-heading">
            <p className="section-label">{t.about.label}</p>
            <h2>{t.about.title}</h2>
          </div>
          <div className="about-grid">
            <p className="dropcap">{t.about.body}</p>
            <div className="about-aside">
              <div className="micro-fact">
                <span>01</span>
                <p>{t.about.location}</p>
              </div>
              <div className="micro-fact">
                <span>02</span>
                <p>{t.about.affiliation}</p>
              </div>
              <a className="orcid-link" href={links.orcid} target="_blank" rel="noreferrer">
                <span className="orcid-dot">iD</span>
                <span>0009-0004-2637-8025</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="interest-marquee" aria-label="Research interests">
            {t.about.interests.map((interest, index) => (
              <span key={interest}><b>0{index + 1}</b>{interest}</span>
            ))}
          </div>
        </section>

        <section className="section academic-section" id="academic">
          <div className="section-index">02</div>
          <div className="section-heading split-heading">
            <div>
              <p className="section-label">{t.academic.label}</p>
              <h2>{t.academic.title}</h2>
            </div>
            <p>{t.academic.intro}</p>
          </div>

          <div className="academic-layout">
            <div className="education-column">
              <p className="academic-column-label">{t.academic.education}</p>
              <a className="education-entry" href={links.osakaEconomics} target="_blank" rel="noreferrer">
                <div className="education-period">{t.academic.universityPeriod}</div>
                <div>
                  <h3>{t.academic.university}</h3>
                  <p>{t.academic.school}</p>
                </div>
                <span className="education-entry-link" aria-hidden="true">↗</span>
              </a>
              <a className="education-entry" href={links.ohtakeSeminar} target="_blank" rel="noreferrer">
                <div className="education-period">{t.academic.current}</div>
                <div>
                  <h3>{t.academic.zemi}</h3>
                  <p className="education-role">{t.academic.zemiRole}</p>
                  <p>{t.academic.zemiBody}</p>
                </div>
                <span className="education-entry-link" aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="academic-cards">
              <a className="academic-card teaching-card" href={links.teaching}>
                <div className="academic-card-top"><span>{t.academic.teachingLabel}</span><span>↗</span></div>
                <h3>{t.academic.teachingTitle}</h3>
                <p>{t.academic.teachingBody}</p>
                <div className="academic-card-meta">{t.academic.teachingMeta}</div>
              </a>
              <a className="academic-card support-card" href={links.independentResearch} target="_blank" rel="noreferrer">
                <div className="academic-card-top"><span>{t.academic.supportLabel}</span><span>↗</span></div>
                <h3>{t.academic.supportTitle}</h3>
                <p>{t.academic.supportBody}</p>
                <div className="academic-card-meta">{t.academic.supportMeta}</div>
              </a>
              <a className="academic-card membership-card" href={links.abef} target="_blank" rel="noreferrer">
                <div className="academic-card-top"><span>{t.academic.membershipLabel}</span><span>↗</span></div>
                <h3>{t.academic.membershipTitle}</h3>
                <p>{t.academic.membershipBody}</p>
                <div className="academic-card-meta">{t.academic.membershipMeta}</div>
              </a>
            </div>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-index">03</div>
          <div className="section-heading split-heading">
            <div>
              <p className="section-label">{t.research.label}</p>
              <h2>{t.research.title}</h2>
            </div>
            <p>{t.research.intro}</p>
          </div>

          <div className="research-list">
            <a className="research-card" href={links.paperOverview} aria-label={t.publications.overview}>
              <div className="card-number">01</div>
              <div className="card-main">
                <div className="card-meta">
                  <span>{t.research.protocolLabel}</span>
                  <span>{t.research.period}</span>
                </div>
                <h3>{t.research.projectOneTitle}</h3>
                <p>{t.research.projectOneBody}</p>
              </div>
              <div className="card-foot">
                <span>{t.research.supportOne}</span>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>

            <a className="research-card research-card-alt" href={links.auditOverview} aria-label={t.publications.overview}>
              <div className="card-number">02</div>
              <div className="card-main">
                <div className="card-meta">
                  <span>{t.research.projectLabel}</span>
                  <span>{t.research.period}</span>
                </div>
                <h3>{t.research.projectTwoTitle}</h3>
                <p>{t.research.projectTwoBody}</p>
              </div>
              <div className="card-foot">
                <span>{t.research.supportTwo}</span>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>

            <a className="research-card research-card-wide research-card-network" href={links.informationOverview} aria-label={t.publications.overview}>
              <div className="card-number">03</div>
              <div className="card-main">
                <div className="card-meta">
                  <span>{t.research.designLabel}</span>
                  <span>{t.research.period}</span>
                </div>
                <h3>{t.research.projectThreeTitle}</h3>
                <p>{t.research.projectThreeBody}</p>
              </div>
              <div className="card-foot">
                <span>{t.research.supportThree}</span>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="section-index">04</div>
          <div className="section-heading split-heading">
            <div>
              <p className="section-label">{t.publications.label}</p>
              <h2>{t.publications.title}</h2>
            </div>
            <p>{t.publications.intro}</p>
          </div>

          <div className="publication-stack">
            <article className="publication featured-publication">
              <div className="publication-side">
                <span className="publication-number">01</span>
                <span className="publication-year">2026</span>
              </div>
              <div className="publication-body">
                <p className="publication-type">{t.publications.latest}</p>
                <h3>{t.publications.auditPaper}</h3>
                {lang !== "en" && <p className="original-title">Beyond Directional Accuracy: Auditing Archived GPT-4 Forecasts for Behavioral Intervention Choice</p>}
                <p className="publication-author">{t.publications.author} · {t.publications.auditJel}</p>
                <p className="publication-teaser">{t.publications.auditPaperShort}</p>
                <div className="publication-actions">
                  <a href={links.auditOverview}>{t.publications.overview}<span aria-hidden="true">→</span></a>
                </div>
              </div>
            </article>

            <article className="publication">
              <div className="publication-side">
                <span className="publication-number">02</span>
                <span className="publication-year">2026</span>
              </div>
              <div className="publication-body">
                <p className="publication-type">{t.publications.preprint}</p>
                <h3>{t.publications.paperOne}</h3>
                {lang !== "en" && <p className="original-title">Nudge Interventions to Increase Online Filing for Annual Motor Vehicle Tax (Category-Based) Exemption Renewals — Protocol for a Pragmatic Randomized Controlled Trial in the Kitakawachi Area of Osaka Prefecture</p>}
                <p className="publication-author">{t.publications.author} · {t.publications.jel}</p>
                <p className="publication-teaser">{t.publications.paperOneShort}</p>
                <div className="publication-actions">
                  <a href={links.paperOverview}>{t.publications.overview}<span aria-hidden="true">→</span></a>
                </div>
              </div>
            </article>

            <article className="publication">
              <div className="publication-side">
                <span className="publication-number">03</span>
                <span className="publication-year">2026</span>
              </div>
              <div className="publication-body">
                <p className="publication-type">{t.publications.working}</p>
                <h3>{t.publications.paperTwo}</h3>
                {lang !== "en" && <p className="original-title">Information Frictions, Ethnic Networks, and Part-Time Wage Gaps among Chinese International Students in Japan</p>}
                <p className="publication-author">{t.publications.author}</p>
                <p className="publication-teaser">{t.publications.paperTwoShort}</p>
                <div className="publication-actions">
                  <a href={links.informationOverview}>{t.publications.overview}<span aria-hidden="true">→</span></a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-topline">
            <p className="section-label">05 · {t.contact.label}</p>
            <span>OSAKA · JP</span>
          </div>
          <div className="contact-grid">
            <h2>{t.contact.title}</h2>
            <div className="contact-copy">
              <p>{t.contact.body}</p>
              <a className="email-address" href={links.email}>u300863g@ecs.osaka-u.ac.jp</a>
            </div>
          </div>
          <div className="contact-links">
            <a href={links.email}>{t.contact.email}<span aria-hidden="true">↗</span></a>
            <a href={links.orcid} target="_blank" rel="noreferrer">{t.contact.orcid}<span aria-hidden="true">↗</span></a>
            <a href={links.ssrnProfile} target="_blank" rel="noreferrer">{t.contact.ssrn}<span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{t.footer}</p>
        <p>© 2026 · The University of Osaka</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
