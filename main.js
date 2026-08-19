(() => {
  "use strict";

  const LINKS = {
    email: "mailto:u300863g@ecs.osaka-u.ac.jp",
    orcid: "https://orcid.org/0009-0004-2637-8025",
    ssrnProfile: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=11293568",
    osaka: "https://www.econ.osaka-u.ac.jp/",
    ohtake: "https://sites.google.com/view/ohtakeseminar/",
    independentResearch: "https://www.osaka-u.ac.jp/ja/education/ug_jishuken",
    abef: "https://www.abef.jp/",
    chinichi: "https://chinichi-edu.jp/xiaoquDetail/osaka.html",
    map: "https://maps.app.goo.gl/uZMq1k3jL5CSSRwF9?g_st=ic",
    brff: "https://doi.org/10.3389/frbhe.2026.1936872",
    brffPdf: "https://www.frontiersin.org/journals/behavioral-economics/articles/10.3389/frbhe.2026.1936872/pdf",
    audit: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7127120",
    nudge: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7097298",
    information: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7087178",
  };

  const COUNTER_ROOT = "https://page-views-api.ratneshc.com/api/v1";
  const COUNTER_QUERY = "site=toukaihaku.github.io&path=%2Fsite-visit";
  const COUNTER_TRACK_URL = `${COUNTER_ROOT}/track?${COUNTER_QUERY}`;
  const COUNTER_VIEWS_URL = `${COUNTER_ROOT}/views?${COUNTER_QUERY}`;
  const COUNTER_COUNTED_KEY = "kaibo-site-visitor-counted-v2";

  const WORK_META = [
    { slug: "risk-friction-fit", number: "01", source: LINKS.brff, pdf: LINKS.brffPdf, featured: true },
    { slug: "nudge-study", number: "02", source: LINKS.nudge },
    { slug: "gpt4-forecast-audit", number: "03", source: LINKS.audit },
    { slug: "information-frictions", number: "04", source: LINKS.information },
  ];

  const COPY = {
    en: {
      nav: { home: "Home", profile: "Profile", work: "Work", research: "Research", writing: "Writing", contact: "Contact" },
      home: {
        trust: "The University of Osaka · Economics",
        lead: "Exploring how behavioral insights, institutional design, and digital public services can make public administration more accessible and effective.",
        cta: "Explore research",
      },
      stats: { research: "Research works", published: "Published article", subjects: "EJU subjects", languages: "Site languages" },
      profile: {
        kicker: "Profile · Osaka, Japan · 2026",
        title: "Economics where institutions meet everyday decisions.",
        intro: "An undergraduate path connecting behavioral economics, labor markets, digital government, and public-facing teaching.",
        tabs: { about: "About", academic: "Academic" },
        aboutTitle: "Questions grounded in how people actually meet institutions.",
        body: "I am an undergraduate student at The University of Osaka. My academic interests span labor economics and behavioral economics, with a particular focus on how institutional design, digital public services, and behavioral insights such as nudging can improve administrative procedures and public communication.",
        locationLabel: "Based in", location: "Osaka, Japan",
        affiliationLabel: "Affiliation", affiliation: "The University of Osaka · School of Economics",
        roleLabel: "Current role", role: "Second-year undergraduate",
        orcidLabel: "ORCID iD",
        interests: ["Labor Economics", "Behavioral Economics", "Digital Government", "Administrative Burden", "Nudging"],
        academicTitle: "Learning in the classroom, testing ideas in the field.",
        academicIntro: "My academic path combines undergraduate study, seminar discussion, independent research, membership in the behavioral-economics community, and teaching.",
        timeline: [
          ["2025 — 2029 (expected)", "The University of Osaka", "Undergraduate program · School of Economics", LINKS.osaka],
          ["Current", "Ohtake Zemi", "Member of Professor Fumio Ohtake’s seminar at the School of Economics.", LINKS.ohtake],
        ],
        activities: [
          ["01", "Part-time teaching", "Chinichi Juku Osaka", "EJU Japanese · Japan and the World · Mathematics Course 1", "Instructor · Osaka", "#teaching/chinichi-osaka"],
          ["02", "Research support", "Undergraduate Independent Research Program", "Information Frictions, Ethnic Networks, and Part-Time Wage Gaps among Chinese International Students in Japan", "The University of Osaka · Jul–Dec 2026", LINKS.independentResearch],
          ["03", "Academic membership", "Association of Behavioral Economics and Finance", "Student Member", "Since July 2026", LINKS.abef],
        ],
      },
      work: {
        kicker: "Research & writing · 2026",
        title: "Four inquiries, one concern: better public decisions.",
        intro: "Current work examines information environments, behavioral insights, administrative friction, and forecasting tools across public and labor-market decisions.",
        tabs: { research: "Research", writing: "Writing" },
        overview: "Open overview",
        source: "Published source",
        works: [
          {
            type: "Published article · Conceptual Analysis",
            shortTitle: "Risk–friction fit for digital public services",
            title: "Justification as a revisable state: a behavioral risk–friction fit framework for digital public services",
            summary: "A published conceptual framework for deciding whether a specific administrative friction should be retained, redesigned, tested, suspended, or removed as evidence changes.",
            meta: "Frontiers in Behavioral Economics 5:1936872 · 14 August 2026 · DOI 10.3389/frbhe.2026.1936872",
          },
          {
            type: "Study protocol · Behavioral public policy",
            shortTitle: "Digital administration & behavioral public policy",
            title: "Nudge Interventions to Increase Online Filing for Annual Motor Vehicle Tax (Category-Based) Exemption Renewals — Protocol for a Pragmatic Randomized Controlled Trial in the Kitakawachi Area of Osaka Prefecture",
            summary: "A pragmatic randomized controlled trial protocol testing whether redesigned mailed materials can increase timely completed online filings while monitoring access, equity, administrative burden, and possible harms.",
            meta: "SSRN 7097298 · 19 pages · Posted 13 July 2026 · JEL D91 · C93 · H71 · H83",
          },
          {
            type: "Working paper · Behavioral forecasting",
            shortTitle: "Behavioral forecasting & intervention choice",
            title: "Beyond Directional Accuracy: Auditing Archived GPT-4 Forecasts for Behavioral Intervention Choice",
            summary: "An incremental-information audit asking why correct directions need not imply calibrated forecasts or better intervention choices—and why simple baselines and winner uncertainty matter.",
            meta: "SSRN 7127120 · 2026 · JEL C44 · C52 · C53 · D91",
          },
          {
            type: "Research design · Labor economics",
            shortTitle: "Information frictions & student labor markets",
            title: "Information Frictions, Ethnic Networks, and Part-Time Wage Gaps among Chinese International Students in Japan",
            summary: "A pre-analysis plan studying whether Japanese/formal and Chinese/co-ethnic search channels expose Chinese international students to different part-time opportunities and wages.",
            meta: "SSRN 7087178 · Research design only · No empirical estimates reported",
          },
        ],
      },
      contact: {
        kicker: "Contact · Research correspondence",
        title: "A good question often starts a conversation.",
        body: "For research correspondence, potential collaboration, or questions about my work, please feel free to get in touch.",
        email: "Write an email",
        visitors: "Approx. visitors",
        links: [
          ["<", "Email", "u300863g@ecs.osaka-u.ac.jp", LINKS.email],
          ["%", "ORCID", "0009-0004-2637-8025", LINKS.orcid],
          ["#", "SSRN", "Author profile and papers", LINKS.ssrnProfile],
          ["*", "The University of Osaka", "School of Economics", LINKS.osaka],
        ],
      },
      common: { close: "Close", return: "BACK", returnAria: "Back to previous page", view: "View source", pdf: "Publisher PDF", back: "Back to top", updated: "Updated 2026", detail: "Research overview" },
      teaching: {
        cardType: "Teaching experience · EJU preparation · Osaka",
        shortTitle: "Teaching across language, society, and mathematics",
        cardSummary: "At Chinichi Juku Osaka, I teach EJU Japanese, Japan and the World, and liberal-arts mathematics.",
      },
    },
    ja: {
      nav: { home: "ホーム", profile: "プロフィール", work: "研究成果", research: "研究", writing: "論文", contact: "連絡先" },
      home: {
        trust: "大阪大学 · 経済学部",
        lead: "行動科学の知見、制度設計、デジタル公共サービスを通じて、行政手続と公共コミュニケーションをより利用しやすく、効果的にする方法を研究しています。",
        cta: "研究を見る",
      },
      stats: { research: "研究プロジェクト", published: "掲載論文", subjects: "EJU担当科目", languages: "サイト言語" },
      profile: {
        kicker: "プロフィール · 大阪 · 2026",
        title: "制度と日常の意思決定が交わる場所から、経済学を考える。",
        intro: "行動経済学、労働市場、デジタル行政、教育経験を結ぶ学部での研究活動です。",
        tabs: { about: "プロフィール", academic: "学術経歴" },
        aboutTitle: "人が制度と実際に出会う場面から、問いを立てる。",
        body: "大阪大学経済学部の学部生です。労働経済学と行動経済学に関心があり、特に制度設計、デジタル公共サービス、ナッジなどの行動科学的知見が、行政手続や公共コミュニケーションの改善にどのように役立つかを研究しています。",
        locationLabel: "拠点", location: "大阪",
        affiliationLabel: "所属", affiliation: "大阪大学 · 経済学部",
        roleLabel: "現在", role: "経済学部 2年生",
        orcidLabel: "ORCID iD",
        interests: ["労働経済学", "行動経済学", "デジタル政府", "行政負担", "ナッジ"],
        academicTitle: "教室で学び、現場で問いを確かめる。",
        academicIntro: "学部での学修、ゼミでの議論、自主研究、行動経済学コミュニティへの参加、教育経験を通じて研究を進めています。",
        timeline: [
          ["2025 — 2029（予定）", "大阪大学", "経済学部 · 学部課程", LINKS.osaka],
          ["在籍中", "大竹ゼミ", "大阪大学経済学部・大竹文雄教授の大竹ゼミに所属しています。", LINKS.ohtake],
        ],
        activities: [
          ["01", "アルバイト・教育経験", "知日塾 大阪校", "EJU日本語 · 総合科目 · 文科数学", "講師 · 大阪", "#teaching/chinichi-osaka"],
          ["02", "研究支援", "学部学生による自主研究奨励事業", "日本の中国人留学生における情報摩擦、エスニック・ネットワークとアルバイト賃金格差", "大阪大学 · 2026年7月–12月", LINKS.independentResearch],
          ["03", "学会所属", "行動経済学会", "学生会員", "2026年7月より", LINKS.abef],
        ],
      },
      work: {
        kicker: "研究・論文 · 2026",
        title: "よりよい公共の意思決定",
        intro: "情報環境、行動科学の知見、行政上のフリクション、予測手法が、公共部門と労働市場の意思決定にどう関わるかを検討しています。",
        tabs: { research: "研究", writing: "論文" },
        overview: "研究紹介を開く",
        source: "掲載元を見る",
        works: [
          {
            type: "掲載論文 · Conceptual Analysis",
            shortTitle: "デジタル公共サービスのリスク・フリクション適合",
            title: "改訂可能な状態としての正当化――デジタル公共サービスのための行動的リスク・フリクション適合フレームワーク",
            summary: "変化する証拠に応じて、特定の行政フリクションを維持・再設計・検証・停止・撤去すべきかを判断する概念枠組みです。",
            meta: "Frontiers in Behavioral Economics 5:1936872 · 2026年8月14日 · DOI 10.3389/frbhe.2026.1936872",
          },
          {
            type: "研究プロトコル · 行動公共政策",
            shortTitle: "デジタル行政と行動公共政策",
            title: "自動車税（種別割）減免更新のオンライン申請を促進するナッジ介入――大阪府北河内地域における実用的ランダム化比較試験のプロトコル",
            summary: "郵送資料の再設計が期限内のオンライン申請完了を促すかを検証し、アクセス、公平性、行政負担、デジタル化の不利益も評価する計画です。",
            meta: "SSRN 7097298 · 19頁 · 2026年7月13日公開 · JEL D91 · C93 · H71 · H83",
          },
          {
            type: "ワーキングペーパー · 行動予測",
            shortTitle: "行動予測と介入選択",
            title: "方向の正しさを超えて――行動介入選択のための保存済みGPT-4予測の監査",
            summary: "方向を正しく当てても、数量的に較正された予測やよりよい介入選択になるとは限らない理由を、単純な基準と勝者の不確実性から検証します。",
            meta: "SSRN 7127120 · 2026 · JEL C44 · C52 · C53 · D91",
          },
          {
            type: "研究デザイン · 労働経済学",
            shortTitle: "情報摩擦と留学生の労働市場",
            title: "日本の中国人留学生における情報摩擦、エスニック・ネットワークとアルバイト賃金格差",
            summary: "日本語・公的経路と中国語・同民族経路が、留学生の目に入るアルバイト機会と賃金にどう関わるかを検討する事前分析計画です。",
            meta: "SSRN 7087178 · 研究デザインのみ · 実証推定は未報告",
          },
        ],
      },
      contact: {
        kicker: "連絡先 · 研究に関するお問い合わせ",
        title: "研究は、よい問いから。そして多くの場合、対話から始まります。",
        body: "研究に関するご連絡、共同研究のご相談、研究内容へのご質問がありましたら、お気軽にお問い合わせください。",
        email: "メールを送る",
        visitors: "概算訪問者数",
        links: [
          ["<", "メール", "u300863g@ecs.osaka-u.ac.jp", LINKS.email],
          ["%", "ORCID", "0009-0004-2637-8025", LINKS.orcid],
          ["#", "SSRN", "著者プロフィール・論文", LINKS.ssrnProfile],
          ["*", "大阪大学", "経済学部", LINKS.osaka],
        ],
      },
      common: { close: "閉じる", return: "戻る", returnAria: "前のページに戻る", view: "掲載元を見る", pdf: "出版社PDF", back: "先頭へ", updated: "2026年更新", detail: "研究紹介" },
      teaching: {
        cardType: "教育経験 · EJU対策 · 大阪",
        shortTitle: "日本語・総合科目・数学を横断して教える",
        cardSummary: "知日塾大阪校で、EJU日本語、総合科目、文科数学を担当しています。",
      },
    },
    zh: {
      nav: { home: "首页", profile: "简介", work: "成果", research: "研究", writing: "文章", contact: "联系" },
      home: {
        trust: "大阪大学 · 经济学部",
        lead: "关注如何运用行为科学洞见、制度设计和数字公共服务，使行政程序与公共沟通更易使用、更具成效。",
        cta: "浏览研究",
      },
      stats: { research: "研究项目", published: "正式发表", subjects: "EJU课程", languages: "网站语言" },
      profile: {
        kicker: "个人简介 · 日本大阪 · 2026",
        title: "在制度与日常决策交汇之处，思考经济学。",
        intro: "连接行为经济学、劳动力市场、数字政府与公共教学的本科研究经历。",
        tabs: { about: "个人简介", academic: "学术经历" },
        aboutTitle: "从人们真正接触制度的地方提出问题。",
        body: "我是大阪大学经济学部本科生，研究兴趣包括劳动经济学与行为经济学。我尤其关注制度设计、数字公共服务，以及助推等行为科学洞见如何改善行政程序和公共沟通。",
        locationLabel: "所在地", location: "日本大阪",
        affiliationLabel: "所属", affiliation: "大阪大学 · 经济学部",
        roleLabel: "当前身份", role: "经济学部二年级本科生",
        orcidLabel: "ORCID iD",
        interests: ["劳动经济学", "行为经济学", "数字政府", "行政负担", "助推"],
        academicTitle: "在课堂中学习，在现实中检验问题。",
        academicIntro: "我的学术经历连接本科课程、研讨班讨论、自主研究、行为经济学共同体与教学实践。",
        timeline: [
          ["2025 — 2029（预计）", "大阪大学", "经济学部 · 本科课程", LINKS.osaka],
          ["在读", "大竹ゼミ", "现为大阪大学经济学部大竹文雄教授“大竹ゼミ”成员。", LINKS.ohtake],
        ],
        activities: [
          ["01", "兼职教学", "知日塾大阪校", "EJU日语 · 综合科目 · 文科数学", "讲师 · 大阪", "#teaching/chinichi-osaka"],
          ["02", "研究支持", "本科生自主研究项目", "在日中国留学生的信息摩擦、族群网络与兼职工资差距", "大阪大学 · 2026年7月–12月", LINKS.independentResearch],
          ["03", "学术会员", "日本行为经济学会", "学生会员", "自2026年7月起", LINKS.abef],
        ],
      },
      work: {
        kicker: "研究与文章 · 2026",
        title: "围绕更好公共决策的四项研究。",
        intro: "考察信息环境、行为科学洞见、行政摩擦与预测工具如何影响公共部门和劳动力市场中的决策。",
        tabs: { research: "研究", writing: "文章" },
        overview: "打开研究介绍",
        source: "查看发表来源",
        works: [
          {
            type: "正式发表 · Conceptual Analysis",
            shortTitle: "数字公共服务的风险—摩擦适配",
            title: "作为可修正状态的正当性：数字公共服务的行为风险—摩擦适配框架",
            summary: "提出一套概念框架，用于根据不断更新的证据判断具体行政摩擦应被保留、重新设计、继续检验、暂停还是移除。",
            meta: "Frontiers in Behavioral Economics 5:1936872 · 2026年8月14日 · DOI 10.3389/frbhe.2026.1936872",
          },
          {
            type: "研究方案 · 行为公共政策",
            shortTitle: "数字行政与行为公共政策",
            title: "提高汽车税（按类别）减免续办在线申报率的助推干预——大阪府北河内地区务实型随机对照试验方案",
            summary: "检验重新设计邮寄材料能否提高按时完成线上申报的比例，同时衡量可及性、公平性、行政负担与数字化的潜在伤害。",
            meta: "SSRN 7097298 · 19页 · 2026年7月13日公开 · JEL D91 · C93 · H71 · H83",
          },
          {
            type: "工作论文 · 行为预测",
            shortTitle: "行为预测与干预选择",
            title: "超越方向准确性：面向行为干预选择的存档GPT-4预测审计",
            summary: "通过简单基准与赢家不确定性，检验方向正确为何不一定意味着预测得到校准或干预选择得到改善。",
            meta: "SSRN 7127120 · 2026 · JEL C44 · C52 · C53 · D91",
          },
          {
            type: "研究设计 · 劳动经济学",
            shortTitle: "信息摩擦与留学生劳动力市场",
            title: "在日中国留学生的信息摩擦、族群网络与兼职工资差距",
            summary: "预先设定研究设计，考察日语/正式渠道与中文/同族网络是否让在日中国留学生看到不同的兼职机会与工资。",
            meta: "SSRN 7087178 · 仅为研究设计 · 尚无实证估计",
          },
        ],
      },
      contact: {
        kicker: "联系方式 · 研究交流",
        title: "研究始于一个好问题，也常常始于一次交流。",
        body: "如需研究交流、探讨合作，或对我的工作有任何问题，欢迎与我联系。",
        email: "发送邮件",
        visitors: "累计访客（约）",
        links: [
          ["<", "邮箱", "u300863g@ecs.osaka-u.ac.jp", LINKS.email],
          ["%", "ORCID", "0009-0004-2637-8025", LINKS.orcid],
          ["#", "SSRN", "作者主页与文章", LINKS.ssrnProfile],
          ["*", "大阪大学", "经济学部", LINKS.osaka],
        ],
      },
      common: { close: "关闭", return: "返回", returnAria: "返回之前的页面", view: "查看来源", pdf: "出版社 PDF", back: "回到顶部", updated: "更新于2026年", detail: "研究介绍" },
      teaching: {
        cardType: "教学经历 · EJU备考 · 大阪",
        shortTitle: "跨越语言、社会与数学的教学",
        cardSummary: "我在知日塾大阪校教授EJU日语、综合科目与文科数学。",
      },
    },
  };

  const DETAILS = {
    "risk-friction-fit": {
      number: "1936872",
      source: LINKS.brff,
      pdf: LINKS.brffPdf,
      originalTitle: "Justification as a revisable state: a behavioral risk–friction fit framework for digital public services",
      en: {
        kicker: "Published article · Conceptual Analysis · Behavioral Public Policy",
        status: "Frontiers in Behavioral Economics · 14 Aug 2026",
        title: "Justification as a revisable state: a behavioral risk–friction fit framework for digital public services",
        standfirst: "A conceptual framework for deciding when a specific friction in a digital public service should be retained, redesigned, tested, suspended, or removed as evidence changes.",
        author: "Kaibo Tang · School of Economics, The University of Osaka",
        facts: [["Article", "Conceptual Analysis"], ["Journal", "Frontiers in Behavioral Economics"], ["Record", "Volume 5 · Article 1936872"], ["DOI", "10.3389/frbhe.2026.1936872"]],
        sections: [
          { label: "The question", title: "When does a protective step become unjustified friction?", intro: "Digital public services must control fraud, error, and consequential mistakes without excluding legitimate users. BRFF evaluates one specified friction for one specified risk, service stage, user group, and review period.", cards: [["Claimed protection", "What risk is the step meant to reduce, and what incremental protection does it actually add?"], ["Experienced burden", "Who bears the time, uncertainty, cognitive demand, delay, or exclusion created by the design?"], ["Revisable evidence", "What is known, unknown, or no longer current—and when must the decision be reopened?"]], note: "J(f, r, s, g, t | E, A): justification is conditional on friction, risk, stage, group, time, evidence, and alternatives." },
          { label: "Evidence-to-status framework", title: "Separate design, mechanism, burden, outcome, and judgment.", intro: "BRFF prevents a stated purpose from being treated as proof. Five recorded layers feed a gated review before any provisional status is assigned.", cards: [["01 · Design form", "Specify the exact friction, service stage, risk, affected group, and review period."], ["02 · Claimed mechanism", "State how the design is expected to protect against the specified risk."], ["03 · Burden pathway", "Record time, uncertainty, cognitive demand, delay, and exclusion for different groups."], ["04 · Measured outcomes", "Keep protection-side and user-side evidence separate, including what remains Unknown."], ["05 · Provisional judgment", "Assign a time-limited status with actions, evidence milestones, and an expiry trigger."], ["G0 · Authority & rights", "Record legal authority and non-compensable rights floors before behavioral balancing begins."], ["G1 · Functional fit", "Test whether the friction adds protection for the specified risk."], ["G2 · Comparative fit", "Compare lower-burden alternatives across all material protection outcomes."], ["G3 · Distributional fit", "Examine who gains, who bears burden, and whether access and rights floors hold."]], note: "BRFF is not a weighted score. Protection-loss margins apply only to protection outcomes; access and rights floors remain non-compensable." },
          { label: "Revisable states", title: "Unknown evidence cannot be silently converted into approval.", intro: "Pass, Fail, and Unknown assessments map asymmetrically to four operational states; even a positive state expires and must be reassessed.", cards: [["Justified for the Current Review Period", "Retain with monitoring, an expiry date, and a defined review trigger."], ["Evidence-Uncertain", "Gate 0 passes, but a decision-relevant behavioral gate remains Unknown; suspend or defer by default."], ["Correctable Misfit", "A protective core remains but a feasible, time-bounded repair is needed; redesign and retest."], ["Sludge", "Remove, suspend, or replace friction that lacks fit and a defensible route to correction."]], note: "Justification is a time-indexed state—not a permanent label attached to an administrative requirement." },
          { label: "Worked application", title: "A measured access gain can reveal the next policy question.", intro: "A SNAP scheduling example shows how a published access result and an unmeasured integrity effect should move through the framework.", cards: [["What is known", "Flexible scheduling improved access and participation in the cited setting."], ["What remains unknown", "The record did not estimate whether fixed scheduling supplied incremental integrity protection."], ["What BRFF changes", "The missing evidence becomes a test, safeguard, milestone, and review deadline—not an assumption of no loss."]], note: "The example and completed records use illustrative values; they are not new empirical estimates or validation." },
          { label: "Scope and limits", title: "An auditable decision structure, not an automated rule.", intro: "BRFF organizes the consequences of incomplete evidence. It does not remove the need for legal judgment, institutional capacity, measurement, or public accountability.", cards: [["Conceptual synthesis", "Not a systematic review or meta-analysis."], ["No validated scale", "Not a psychometric instrument, causal model, or mechanically weighted index."], ["Illustrations are not evidence", "Hypothetical worked records are not empirical validation."], ["Implementation matters", "Evidence quality, monitoring, expiry rules, and capacity to change design determine practical value."]], note: "Purpose cannot substitute for performance; unknown cannot become approval; positive status cannot persist without renewal." },
        ],
        citation: "Tang K (2026). Justification as a revisable state: a behavioral risk–friction fit framework for digital public services. Frontiers in Behavioral Economics 5:1936872.",
      },
      ja: {
        kicker: "掲載論文 · Conceptual Analysis · 行動公共政策", status: "Frontiers in Behavioral Economics · 2026年8月14日",
        title: "改訂可能な状態としての正当化――デジタル公共サービスのための行動的リスク・フリクション適合フレームワーク",
        standfirst: "変化する証拠に応じて、デジタル公共サービスの特定のフリクションを維持・再設計・検証・停止・撤去すべきかを判断するための概念枠組みです。",
        author: "唐 楷博 · 大阪大学経済学部",
        facts: [["論文種別", "Conceptual Analysis"], ["掲載誌", "Frontiers in Behavioral Economics"], ["書誌情報", "第5巻 · Article 1936872"], ["DOI", "10.3389/frbhe.2026.1936872"]],
        sections: [
          { label: "問い", title: "保護のための手続は、いつ正当化できないフリクションになるのか。", intro: "デジタル公共サービスは、不正・誤り・重大なミスを抑えつつ、正当な利用者を排除してはなりません。BRFFは特定のリスク、段階、集団、審査期間に対して具体的なフリクションを評価します。", cards: [["主張される保護", "何のリスクを減らし、実際にどの程度の追加的保護をもたらすのか。"], ["経験される負担", "時間、不確実性、認知的負荷、遅延、排除を誰が負うのか。"], ["改訂可能な証拠", "何が既知・未知・陳腐化しており、いつ判断を再開するのか。"]], note: "J(f, r, s, g, t | E, A)：正当化はフリクション、リスク、段階、集団、時点、証拠、代替案に条件づけられます。" },
          { label: "証拠から状態への枠組み", title: "設計、メカニズム、負担、結果、判断を分けて考える。", intro: "掲げられた目的を効果の証明として扱わず、五つの記録層をゲート審査へ接続してから暫定状態を割り当てます。", cards: [["01 · 設計形態", "具体的なフリクション、サービス段階、リスク、対象集団、審査期間を特定する。"], ["02 · 主張されるメカニズム", "設計が特定リスクをどう抑えると想定されるかを明記する。"], ["03 · 負担経路", "時間、不確実性、認知負荷、遅延、排除を集団別に記録する。"], ["04 · 測定結果", "保護側と利用者側の証拠を分け、Unknownも明示する。"], ["05 · 暫定判断", "行動、証拠到達点、失効条件を伴う期限付き状態を割り当てる。"], ["G0 · 権限と権利", "法的根拠と相殺できない権利の下限を先に記録する。"], ["G1 · 機能的適合", "特定リスクへの追加的保護を検証する。"], ["G2 · 比較的適合", "低負担の代替案と全ての重要な保護結果を比較する。"], ["G3 · 分配的適合", "利益と負担の分布、アクセスと権利の下限を検討する。"]], note: "BRFFは加重スコアではなく、アクセスと権利の下限は相殺できません。" },
          { label: "改訂可能な状態", title: "未知を暗黙の承認に変えることはできない。", intro: "Pass・Fail・Unknownは四つの運用状態へ非対称に対応し、肯定的な状態にも期限と再評価が必要です。", cards: [["現審査期間において正当化", "監視、失効日、再審査の契機を伴って維持。"], ["証拠不確実", "Gate 0通過後も重要な行動ゲートがUnknownなら原則停止または延期。"], ["修正可能な不適合", "保護上の中核を残しつつ、提供形態を修正して全ゲートを再検証。"], ["スラッジ", "妥当な修正経路がなければ撤去・停止・置換。"]], note: "正当化は行政要件に恒久的に付くラベルではなく、時点に依存する状態です。" },
          { label: "適用例", title: "アクセス改善の測定は、次の政策課題を可視化し得る。", intro: "SNAPの面接日程設定に適用し、公開されたアクセス改善と未測定の制度保護効果をどう扱うかを示します。", cards: [["分かっていること", "柔軟な日程設定はアクセスと参加を改善。"], ["分かっていないこと", "固定日程の追加的な不正防止・完全性効果は未推定。"], ["BRFFが変えること", "欠測を仮定で埋めず、検証、保護措置、到達点、再審査期限へ変換。"]], note: "説明例は新しい実証推定や枠組みの検証結果ではありません。" },
          { label: "範囲と限界", title: "監査可能な意思決定構造であり、自動判断規則ではない。", intro: "不完全な証拠の帰結を整理しますが、法的判断、組織能力、測定、公共的説明責任を不要にはしません。", cards: [["概念的統合", "システマティックレビューやメタ分析ではない。"], ["検証済み尺度ではない", "心理尺度、因果モデル、機械的な加重指標ではない。"], ["説明例は証拠ではない", "仮想記録は実証的検証ではない。"], ["実装能力が必要", "証拠、監視、失効規則、設計変更能力が実務上の価値を左右。"]], note: "目的は実績の代わりにならず、未知は承認にならず、肯定的状態は更新なしに存続できません。" },
        ],
        citation: "Tang K (2026). Justification as a revisable state: a behavioral risk–friction fit framework for digital public services. Frontiers in Behavioral Economics 5:1936872.",
      },
      zh: {
        kicker: "正式发表 · Conceptual Analysis · 行为公共政策", status: "Frontiers in Behavioral Economics · 2026年8月14日",
        title: "作为可修正状态的正当性：数字公共服务的行为风险—摩擦适配框架",
        standfirst: "提出一套概念框架，用于依据不断更新的证据判断数字公共服务中的具体摩擦应被保留、重新设计、继续检验、暂停还是移除。",
        author: "唐楷博 · 大阪大学经济学部",
        facts: [["文章类型", "Conceptual Analysis"], ["期刊", "Frontiers in Behavioral Economics"], ["出版信息", "第5卷 · Article 1936872"], ["DOI", "10.3389/frbhe.2026.1936872"]],
        sections: [
          { label: "研究问题", title: "一个保护性步骤何时会变成缺乏正当性的摩擦？", intro: "数字公共服务必须控制欺诈、错误和重大失误，同时不能排斥正当用户。BRFF针对特定风险、服务阶段、用户群体和审查周期评估一项具体摩擦。", cards: [["声称的保护", "该步骤要降低什么风险？实际增加了多少保护？"], ["实际承受的负担", "设计产生的时间、不确定性、认知要求、延迟或排斥由谁承担？"], ["可修正的证据", "哪些已知、未知或已失效？何时必须重新审查？"]], note: "J(f, r, s, g, t | E, A)：正当性取决于摩擦、风险、阶段、群体、时点、证据与替代方案。" },
          { label: "从证据到状态", title: "把设计、机制、负担、结果与判断分开。", intro: "不把声称的目的当作有效性的证明；五层记录进入门槛审查后，才赋予暂时状态。", cards: [["01 · 设计形态", "明确具体摩擦、服务阶段、风险、受影响群体和审查周期。"], ["02 · 声称的机制", "说明该设计预计如何针对特定风险提供保护。"], ["03 · 负担路径", "按群体记录时间、不确定性、认知要求、延迟与排斥。"], ["04 · 测量结果", "分开保护侧与用户侧证据，并明确哪些仍为Unknown。"], ["05 · 暂时判断", "赋予有期限的状态，同时设定行动、证据里程碑和失效条件。"], ["G0 · 权限与权利", "先记录法律依据与不可补偿的权利底线。"], ["G1 · 功能适配", "检验摩擦是否为特定风险增加保护。"], ["G2 · 比较适配", "在所有重要保护结果上比较低负担替代方案。"], ["G3 · 分配适配", "考察收益与负担分布，以及可及性和权利底线。"]], note: "BRFF不是加权总分；可及性与权利底线不能被其他收益抵消。" },
          { label: "可修正状态", title: "未知不能悄然转化为批准。", intro: "Pass、Fail 与 Unknown被非对称地映射到四种运行状态；即使是正面状态也会到期。", cards: [["本审查期内正当", "保留并监测，设置失效日期和复审条件。"], ["证据不确定", "Gate 0通过后仍有关键Unknown时，默认暂停或延期。"], ["可纠正的不适配", "保留可检验的保护核心，修正失败的交付特征并重新测试。"], ["Sludge", "缺乏适配和可辩护修正路径时，应移除、暂停或替换。"]], note: "正当性是一种随时间变化的状态，而不是永久标签。" },
          { label: "应用示例", title: "测得的可及性改善会揭示下一项政策问题。", intro: "SNAP预约示例说明如何同时处理已发表的可及性结果和未测量的项目完整性影响。", cards: [["已知", "灵活预约改善了相关情境中的可及性和参与。"], ["未知", "固定预约是否增加了项目完整性保护尚未估计。"], ["BRFF的变化", "把证据缺口转化为检验、保护措施、里程碑和复审期限。"]], note: "示例不是新的实证估计，假设性记录也不是框架验证。" },
          { label: "范围与局限", title: "这是可审计的决策结构，不是自动规则。", intro: "框架组织不完整证据的后果，但不取代法律判断、组织能力、衡量与公共问责。", cards: [["概念综合", "不是系统综述或元分析。"], ["不是验证量表", "不是心理测量工具、因果模型或机械指数。"], ["示例不是证据", "假设性记录不构成实证验证。"], ["实施能力重要", "证据质量、监测、到期规则与改变设计的能力决定实际价值。"]], note: "目的不能替代绩效；未知不能变成批准；正面状态不能在不更新的情况下延续。" },
        ],
        citation: "Tang K (2026). Justification as a revisable state: a behavioral risk–friction fit framework for digital public services. Frontiers in Behavioral Economics 5:1936872.",
      },
    },

    "gpt4-forecast-audit": {
      number: "7127120", source: LINKS.audit,
      originalTitle: "Beyond Directional Accuracy: Auditing Archived GPT-4 Forecasts for Behavioral Intervention Choice",
      en: {
        kicker: "Working paper · Behavioral forecasting · Decision analysis", status: "Retrospective fixed-archive audit",
        title: "When a forecast gets the direction right, how much has it actually told us?",
        standfirst: "Archived GPT-4 forecasts are compared with deliberately simple baselines, then tested for whether their rankings improve choices among behavioral interventions.",
        author: "Kaibo Tang · School of Economics, The University of Osaka",
        facts: [["Archive", "Fixed, versioned third-party forecasts"], ["Matched frames", "12 contrasts · 4 topics"], ["Choice archive", "51 outcomes · 8 study clusters"], ["JEL", "C44 · C52 · C53 · D91"]],
        sections: [
          { label: "The question", title: "Direction is only the first rung of useful forecasting.", intro: "A sign score rewards an arbitrarily small positive forecast exactly as it rewards a calibrated positive forecast, while decisions depend on magnitude, contextual variation, and the best available option.", cards: [["Direction", "Does the forecast identify the realized sign?"], ["Calibration", "Is its magnitude close, and does it recover contextual variation?"], ["Decision", "Does its ranking leave less opportunity on the table?"]], note: "12/12: both archived GPT-4 and a vanishingly small positive rule matched every realized point-estimate sign." },
          { label: "Information audit", title: "Credit a forecast only for information beyond a weaker rule.", intro: "A nested ladder makes each information increment explicit instead of hiding the threshold inside one score.", cards: [["Zero effect", "No direction and no magnitude."], ["Direction +ε", "The realized common sign, with magnitude approaching zero."], ["LOTO common effect", "A topic-held-out empirical base rate, without within-topic ordering."], ["Archived forecast", "Potential topic- and outcome-specific deviations."]], note: "The +ε rule is a retrospective diagnostic, not a prospective theory-based forecast." },
          { label: "Matched-frame evidence", title: "Perfect directional agreement concealed substantial error differences.", intro: "The strict sample crosses four topics with anger, seriousness, and worry; forecast values and randomized outcomes were hidden during the equivalence screen.", cards: [["GPT-4 · 0.132", "Mean absolute error"], ["Direction +ε · 0.086", "Mean absolute error"], ["LOTO common effect · 0.038", "Mean absolute error"]], note: "GPT-4 did not recover the observed topic ordering; recognizing a familiar direction was not evidence of incremental quantitative information." },
          { label: "Intervention choice", title: "A separate archive asks what each ranking would have selected.", intro: "For 51 outcomes in eight clusters, regret is normalized so zero is the draw-specific feasible oracle and one is uniform random choice.", cards: [["GPT-4 · 0.755", "Lowest posterior-mean regret in this fixed archive."], ["Expert + GPT-4 · 0.878", "Pairwise comparisons did not support improvement over GPT-4 alone."], ["Crowd + GPT-4 · 0.915", "Equal-rank combination did not establish synergy."], ["Matched-set crowd mean · 0.988", "A matched crowd benchmark remained close to normalized random choice."], ["Mean individual expert · 1.039", "Worse than the normalized random benchmark in posterior mean."]], note: "Recomputing the latent winner in every posterior draw raised GPT-4 regret from 0.651 to 0.755." },
          { label: "Interpretation", title: "What this audit does—and does not—establish.", intro: "The contribution is procedural: subtract simple-rule achievements, identify comparators precisely, and use a noise-aware feasible oracle.", cards: [["Fixed archive", "Not a guarantee for future models or studies."], ["No human–AI synergy claim", "Equal-rank combinations are analytic constructions."], ["No welfare claim", "Costs, outside options, distribution, and welfare are absent."], ["No autonomous policy claim", "Offline screening is not authorization to deploy an intervention."]], note: "Directional accuracy is not the same as a useful forecast." },
        ],
        citation: "Tang, Kaibo (2026). Beyond Directional Accuracy: Auditing Archived GPT-4 Forecasts for Behavioral Intervention Choice.",
      },
      ja: {
        kicker: "ワーキングペーパー · 行動予測 · 意思決定分析", status: "固定アーカイブの回顧的監査",
        title: "予測の方向が当たったとき、実際にはどれだけの情報が得られたのか。",
        standfirst: "保存済みGPT-4予測を単純な基準と比較し、比較対象と勝者の不確実性を明示した上で、行動介入の選択に予測順位が役立つかを検証します。",
        author: "唐 楷博 · 大阪大学経済学部",
        facts: [["資料", "固定・版管理された第三者予測"], ["フレーム比較", "12コントラスト · 4テーマ"], ["選択アーカイブ", "51アウトカム · 8研究クラスター"], ["JEL", "C44 · C52 · C53 · D91"]],
        sections: [
          { label: "研究課題", title: "方向は、有用な予測に至る最初の一段にすぎない。", intro: "符号評価では限りなく小さい正の予測も適切に較正された予測も同じ得点ですが、介入選択では大きさ、文脈差、最善の選択肢が重要です。", cards: [["方向", "実現した符号を当てたか。"], ["較正", "大きさは近く、文脈差を捉えたか。"], ["意思決定", "順位は機会損失を減らしたか。"]], note: "12/12：GPT-4と限りなく小さい正のルールはいずれも全ての符号を一致させました。" },
          { label: "情報監査", title: "より弱いルールを超えた情報だけを評価する。", intro: "情報を段階化し、各段階が追加する情報を限定して評価基準を可視化します。", cards: [["ゼロ効果", "方向も大きさも含まない。"], ["方向 +ε", "実現した共通符号のみ。"], ["LOTO共通効果", "他テーマから学ぶ経験的基準。"], ["保存済み予測", "テーマ・アウトカム固有の差を含み得る。"]], note: "+εは事後的な診断基準であり、事前予測ではありません。" },
          { label: "フレーム比較", title: "完全な方向一致の背後で、誤差には大きな差があった。", intro: "4テーマと怒り・深刻さ・心配の3指標を用い、同等性判定では予測値と実験結果を非表示にしました。", cards: [["GPT-4 · 0.132", "平均絶対誤差"], ["方向 +ε · 0.086", "平均絶対誤差"], ["LOTO共通効果 · 0.038", "平均絶対誤差"]], note: "GPT-4は観測されたテーマ順位を再現せず、方向認識は追加的数量情報の証拠になりませんでした。" },
          { label: "介入選択", title: "別のアーカイブで、各順位が何を選ぶかを検証する。", intro: "8研究クラスター・51アウトカムで、0を実行可能オラクル、1を一様ランダム選択として後悔値を標準化します。", cards: [["GPT-4 · 0.755", "固定アーカイブで事後平均後悔値が最小。"], ["専門家 + GPT-4 · 0.878", "GPT-4単独より良いとは支持されず。"], ["クラウド + GPT-4 · 0.915", "相乗効果を確立せず。"], ["対応集合クラウド平均 · 0.988", "対応するクラウド基準は標準化ランダム選択に近い値。"], ["平均個人専門家 · 1.039", "事後平均でランダム基準を上回る後悔。"]], note: "潜在的な勝者を各ドローで再計算するとGPT-4後悔値は0.651から0.755へ上昇しました。" },
          { label: "解釈", title: "この監査が示すこと、示さないこと。", intro: "単純ルールでも達成できる部分を差し引き、比較対象を正確に定義し、ノイズを考慮した基準で順位を評価します。", cards: [["固定アーカイブ", "将来のモデルや研究を保証しない。"], ["人間とAIの相乗効果ではない", "等順位は分析上の構成。"], ["厚生評価ではない", "費用、非介入、分配、厚生関数は未収録。"], ["自動政策選択ではない", "オフライン選別は導入判断ではない。"]], note: "方向の正しさは、有用な予測と同じではありません。" },
        ],
        citation: "Tang, Kaibo (2026). Beyond Directional Accuracy: Auditing Archived GPT-4 Forecasts for Behavioral Intervention Choice.",
      },
      zh: {
        kicker: "工作论文 · 行为预测 · 决策分析", status: "固定档案的回顾性审计",
        title: "当预测方向正确时，它究竟提供了多少信息？",
        standfirst: "将存档GPT-4预测与简单基准进行比较，并在明确比较对象与赢家不确定性之后，考察预测排序能否改善行为干预选择。",
        author: "唐楷博 · 大阪大学经济学部",
        facts: [["资料", "固定、版本化的第三方预测档案"], ["框架比较", "12个对比 · 4个主题"], ["选择档案", "51个结果 · 8个研究组"], ["JEL", "C44 · C52 · C53 · D91"]],
        sections: [
          { label: "研究问题", title: "方向只是有用预测的第一层。", intro: "符号评分让无限接近零的正向预测与校准良好的正向预测得分相同，但干预选择取决于大小、情境差异和真正更优的选项。", cards: [["方向", "是否判断出效应符号？"], ["校准", "数值是否接近并识别情境差异？"], ["决策", "排序是否减少机会损失？"]], note: "12/12：GPT-4与无限接近零的正向规则都匹配了全部方向。" },
          { label: "信息审计", title: "只把超出更弱规则的部分计为预测信息。", intro: "逐层增强的信息阶梯让每一项增量保持清晰。", cards: [["零效应", "不含方向和大小。"], ["方向 +ε", "仅赋予已实现的共同符号。"], ["留一主题共同效应", "从其他主题学习经验基准。"], ["存档预测", "可能包含主题和结果层面的特定偏差。"]], note: "+ε是事后诊断，不是事前理论预测。" },
          { label: "框架比较证据", title: "完美方向一致掩盖了明显的误差差异。", intro: "严格样本交叉4个主题与3项结果，等价性筛选时隐藏预测与实验结果。", cards: [["GPT-4 · 0.132", "平均绝对误差"], ["方向 +ε · 0.086", "平均绝对误差"], ["留一主题共同效应 · 0.038", "平均绝对误差"]], note: "GPT-4未复现主题排序；识别熟悉方向不能证明存在增量数量信息。" },
          { label: "干预选择", title: "另一份档案考察不同排序实际会选择什么。", intro: "针对8个研究组的51个结果，0代表可行最优选择，1代表均匀随机选择。", cards: [["GPT-4 · 0.755", "固定档案中后验平均后悔最低。"], ["专家 + GPT-4 · 0.878", "未证明优于GPT-4单独排序。"], ["群体 + GPT-4 · 0.915", "未建立协同。"], ["匹配集合群体均值 · 0.988", "匹配后的群体基准仍接近标准化随机选择。"], ["平均个体专家 · 1.039", "后验平均差于随机基准。"]], note: "每次后验抽样重新确定赢家后，GPT-4后悔值从0.651升至0.755。" },
          { label: "解释边界", title: "这项审计说明了什么，又没有说明什么。", intro: "贡献在于评价程序：扣除简单规则成绩、准确界定比较对象，并使用考虑噪声的可行最优基准。", cards: [["固定档案", "不保证未来模型或研究。"], ["不证明人机协同", "等权组合只是分析构造。"], ["不构成福利判断", "成本、外部选项和分配影响缺失。"], ["不支持自动政策选择", "离线筛选不是部署许可。"]], note: "方向准确性并不等同于有用的预测。" },
        ],
        citation: "Tang, Kaibo (2026). Beyond Directional Accuracy: Auditing Archived GPT-4 Forecasts for Behavioral Intervention Choice.",
      },
    },

    "nudge-study": {
      number: "7097298", source: LINKS.nudge,
      originalTitle: "Nudge Interventions to Increase Online Filing for Annual Motor Vehicle Tax (Category-Based) Exemption Renewals — Protocol for a Pragmatic Randomized Controlled Trial in the Kitakawachi Area of Osaka Prefecture",
      en: {
        kicker: "Study protocol · Behavioral economics · Digital government", status: "Protocol — no results yet",
        title: "Can better information design move an administrative procedure online?",
        standfirst: "A pragmatic randomized controlled trial in Osaka Prefecture tests whether carefully redesigned mailed renewal materials can reduce friction—without leaving anyone behind.",
        author: "Kaibo Tang · School of Economics, The University of Osaka",
        facts: [["Setting", "Kitakawachi, Osaka Prefecture"], ["Planned sample", "400–1,000 prior-year applicants"], ["Allocation", "1:1 intervention vs. control"], ["Design", "Pragmatic randomized controlled trial"]],
        sections: [
          { label: "The question", title: "Online filing exists. Why do most eligible applicants still use post?", intro: "Preliminary FY2025 operational figures suggest 73.7% of applicants recorded as having no changes still filed by post. The study treats the gap as limited attention, information design, status quo bias, and administrative burden—not lack of motivation.", cards: [["Open", "The recipient may not recognize the mailing’s importance or urgency."], ["Notice", "The online option or relevant instruction sheet may never enter attention."], ["Switch", "Familiar paper filing may feel safer than registration and online data entry."]], note: "The denominator and missing-data rules for the preliminary 73.7% figure will be reconfirmed before analysis." },
          { label: "The intervention", title: "One nudge package, applied at three decision points.", intro: "Only existing printed touchpoints change. Paper remains available and nobody is automatically enrolled online.", cards: [["Outer envelope", "Make importance and the real consequence of missing the deadline salient without intimidation."], ["Renewal form", "Place a clear prompt near relevant fields so recipients reach the right instructions."], ["Instruction sheets", "Organize guidance around eligibility and preference while keeping paper equally accessible."]], note: "A return-envelope prompt reminds applicants that postal submission is unnecessary after completed online filing, helping prevent duplicates." },
          { label: "Trial design", title: "A field experiment built for ordinary administrative operations.", intro: "Prior-year applicants in Kitakawachi will receive either redesigned or conventional materials during the same filing window.", cards: [["Pragmatic", "Delivered through the real mailing process."], ["Objective", "Outcomes come from administrative acceptance logs."], ["Intention-to-treat", "Analyze everyone in the group originally assigned."], ["Transparent", "Retain random seed, program, input-list hash, and execution time."]], note: "Planned population: 400–1,000 applicants; random assignment 1:1." },
          { label: "Outcomes", title: "Success means more than moving one number upward.", intro: "The primary outcome is on-time completion of a valid electronic application among all randomized participants.", cards: [["Service continuity", "Overall on-time filing, late filing, and nonfiling."], ["Safety", "Duplicate, incomplete, or returned applications."], ["Process", "Days to application, inquiries, and intervention fidelity."], ["Equity & economics", "Heterogeneity and cost per additional online application."]], note: "Policy decisions combine effect size, uncertainty, overall filing, harms, equity, and cost—not significance alone." },
          { label: "Ethics & inclusion", title: "Digital by choice, never digital by exclusion.", intro: "Paper, telephone, in-person, and permitted assistance remain substantive alternatives; fabricated norms, false scarcity, and excessive pressure are prohibited.", cards: [["Freedom of choice", "Paper filing remains clearly available."], ["Accessibility", "Check contrast, plain language, keyboard, screen reader, and assistance needs."], ["Privacy", "Pseudonymize analysis data and exclude direct identifiers."], ["Preregistration", "Approvals and registration must precede randomization and mailing."]], note: "The design treats non-digital access as part of the outcome, not an afterthought." },
          { label: "Planned timeline", title: "From design review to public reporting.", intro: "The protocol specifies design review, operational preparation, mailing, monitoring, data lock, analysis, and reporting.", cards: [["Jul–Sep 2026", "Rules verification, ethics review, interviews, materials, preregistration."], ["Oct–Nov 2026", "Participant list, randomization, printing, packing inspection."], ["Nov 2026", "Simultaneous mailing."], ["Dec 2026–Jan 2027", "Monitor filings, inquiries, system issues, and adverse events."], ["Jan–Feb 2027", "Data lock, analysis, cost-effectiveness assessment, and public reporting."]], note: "This is a study protocol. No randomization, intervention, individual-level analysis, or results are reported." },
        ],
        citation: "Tang, Kaibo (2026). Nudge Interventions to Increase Online Filing for Annual Motor Vehicle Tax (Category-Based) Exemption Renewals.",
      },
      ja: {
        kicker: "研究プロトコル · 行動経済学 · デジタル政府", status: "プロトコル — 結果は未報告",
        title: "情報設計を改善すれば、行政手続のオンライン化は進むのか。",
        standfirst: "大阪府の実際の行政現場で、減免更新書類への慎重な変更が手続上の摩擦を減らせるかを、誰も取り残さない形で検証します。",
        author: "唐 楷博 · 大阪大学経済学部",
        facts: [["実施地域", "大阪府北河内地域"], ["予定標本", "前年度申請者 400–1,000人"], ["割付", "介入群・対照群 1:1"], ["研究デザイン", "実用的ランダム化比較試験"]],
        sections: [
          { label: "研究課題", title: "オンライン申請があるのに、なぜ多くの対象者は郵送を選ぶのか。", intro: "FY2025の予備的業務集計では「変更なし」と記録された層の73.7%が郵送を利用。本研究は限定的注意、情報設計、現状維持バイアス、行政負担の問題として捉えます。", cards: [["開封", "郵便物の重要性や緊急性に気づかない。"], ["認知", "オンライン申請や該当案内にたどり着かない。"], ["転換", "登録や入力への不安から慣れた郵送を選ぶ。"]], note: "73.7%の分母と欠測の扱いは分析前に再確認します。" },
          { label: "介入", title: "三つの意思決定点に、一つのナッジ・パッケージを。", intro: "既存の印刷物のみを変更し、紙申請を廃止せず、自動的なオンライン登録も行いません。", cards: [["送付用封筒", "重要性と期限徒過の実際の不利益を簡潔に示す。"], ["更新申告書", "関連欄の近くに案内を置き、適切な説明書へ注意を向ける。"], ["手続案内", "適格性と選好で整理し、郵送も同等に利用可能にする。"]], note: "返信用封筒にオンライン完了後は郵送不要と明記し、重複申請を防ぎます。" },
          { label: "試験デザイン", title: "通常の行政実務の中で行うフィールド実験。", intro: "北河内地域の前年度申請者を、再設計資料または従来資料を受け取る群へ同一期間で無作為割付します。", cards: [["実用的", "実際の郵送業務で介入。"], ["客観的", "行政受付ログで結果を測定。"], ["ITT", "当初の割付群で分析。"], ["透明性", "乱数シード、プログラム、ハッシュ、実行日時を保存。"]], note: "予定標本400–1,000人、1:1無作為割付。" },
          { label: "評価項目", title: "成功は、オンライン率だけでは測れない。", intro: "主要評価項目は全無作為化対象者における期限内の有効なオンライン申請完了率です。", cards: [["サービス継続", "期限内申請、遅延申請、未申請。"], ["安全性", "重複、不備、返戻。"], ["プロセス", "申請までの日数、問い合わせ、介入忠実度。"], ["公平性・経済性", "異質性と追加申請1件当たり費用。"]], note: "有意性だけでなく、効果量、不確実性、害、公平性、費用を統合します。" },
          { label: "倫理と包摂性", title: "デジタルは選択肢であり、排除の条件ではない。", intro: "紙、電話、対面、許容される支援を実質的な代替として維持し、虚偽の規範、希少性、過度な圧力を禁止します。", cards: [["選択の自由", "紙申請を明確に維持。"], ["アクセシビリティ", "コントラスト、平易な日本語、支援技術を確認。"], ["プライバシー", "仮名化し直接識別子を除外。"], ["事前登録", "承認と登録を無作為化・郵送前に完了。"]], note: "非デジタルなアクセスも評価の一部です。" },
          { label: "予定日程", title: "デザイン検証から公開報告まで。", intro: "デザイン審査、実務準備、郵送、監視、データ固定、分析、報告を事前に定めます。", cards: [["2026年7–9月", "規則確認、倫理審査、面接、資料、事前登録。"], ["2026年10–11月", "対象者リスト、無作為化、印刷、封入検査。"], ["2026年11月", "介入・対照資料を同時発送。"], ["2026年12月–2027年1月", "申請、問い合わせ、システム障害、有害事象を監視。"], ["2027年1–2月", "データ固定、分析、費用対効果評価、公開報告。"]], note: "研究プロトコルであり、無作為化・介入・個人データ分析・結果報告は未実施です。" },
        ],
        citation: "Tang, Kaibo (2026). Nudge Interventions to Increase Online Filing for Annual Motor Vehicle Tax (Category-Based) Exemption Renewals.",
      },
      zh: {
        kicker: "研究方案 · 行为经济学 · 数字政府", status: "研究方案 — 暂无结果",
        title: "改善信息设计，能否推动行政程序转向线上？",
        standfirst: "在大阪府真实行政环境中，检验谨慎调整减免续办材料能否降低程序摩擦，同时确保数字化不让任何人掉队。",
        author: "唐楷博 · 大阪大学经济学部",
        facts: [["实施地区", "大阪府北河内地区"], ["计划样本", "400–1,000名前一年度申请者"], ["分组", "干预组与对照组 1:1"], ["设计", "务实型随机对照试验"]],
        sections: [
          { label: "研究问题", title: "线上申报已经存在，为何多数符合条件者仍选择邮寄？", intro: "2025财年初步汇总显示，“无变化”群体中73.7%仍邮寄申报。研究将其视为有限注意、信息设计、现状偏好与行政负担，而非动机不足。", cards: [["开封", "可能未意识到邮件的重要性。"], ["注意", "线上选项或正确说明未进入注意。"], ["转换", "纸质申报比注册和在线填写更安心。"]], note: "正式分析前将重新确认73.7%的分母和缺失规则。" },
          { label: "干预", title: "一套助推方案，作用于三个决策节点。", intro: "只调整现有纸质材料，不取消纸质渠道，也不自动转为线上。", cards: [["外层信封", "突出重要性和错过期限的真实后果。"], ["续办申报表", "在相关栏附近设置清晰提示。"], ["程序说明", "按资格与偏好组织，同时保持纸质渠道可用。"]], note: "回复信封提示线上完成后无需邮寄，以减少重复。" },
          { label: "试验设计", title: "嵌入日常行政流程的现场试验。", intro: "北河内地区前一年度申请者在同一申报期随机收到重新设计或现行材料。", cards: [["务实", "通过真实邮寄流程实施。"], ["客观", "结果来自行政受理记录。"], ["意向性分析", "按最初随机分组分析。"], ["透明", "保留随机种子、程序、哈希和执行时间。"]], note: "计划样本400–1,000人，1:1随机分配。" },
          { label: "衡量什么", title: "成功不只是让一个比例上升。", intro: "主要结局是全部随机对象中按期完成有效线上申报的比例。", cards: [["服务连续性", "按时、延迟与未申报。"], ["安全", "重复、不完整或退回。"], ["过程", "申报用时、咨询、执行一致性。"], ["公平与经济性", "异质性与每增加一份线上申报的成本。"]], note: "综合效果、不确定性、伤害、公平与成本，而非只看显著性。" },
          { label: "伦理与包容", title: "数字化应是一种选择，而不是排除条件。", intro: "保留纸质、电话、现场和允许的协助填写，禁止虚构规范、虚假稀缺与过度心理压力。", cards: [["选择自由", "明确保留纸质渠道。"], ["无障碍", "检查对比度、简明语言和辅助技术。"], ["隐私", "分析数据假名化并排除直接身份信息。"], ["预注册", "审批与注册须先于随机分组和邮寄。"]], note: "非数字渠道可及性本身也是评价内容。" },
          { label: "计划时间表", title: "从设计审查到公开报告。", intro: "预先设定设计审查、行政准备、寄送、监测、锁定数据、分析和报告。", cards: [["2026年7–9月", "规则核对、伦理审查、访谈、材料、预注册。"], ["2026年10–11月", "名单、随机分组、印刷与装袋检查。"], ["2026年11月", "同时寄出两组材料。"], ["2026年12月–2027年1月", "监测申报、咨询、系统问题和不良事件。"], ["2027年1–2月", "锁定数据、分析、成本效果评估与公开报告。"]], note: "这是研究方案；尚未随机分组、实施干预、分析个体数据或报告结果。" },
        ],
        citation: "Tang, Kaibo (2026). Nudge Interventions to Increase Online Filing for Annual Motor Vehicle Tax (Category-Based) Exemption Renewals.",
      },
    },

    "information-frictions": {
      number: "7087178", source: LINKS.information,
      originalTitle: "Information Frictions, Ethnic Networks, and Part-Time Wage Gaps among Chinese International Students in Japan",
      en: {
        kicker: "Research design · Labor economics · Economics of information", status: "Pre-analysis plan · No empirical estimates",
        title: "When job information travels through different networks, do workers see different wages?",
        standfirst: "A research design examining whether Japanese/formal and Chinese/co-ethnic job-search channels expose Chinese international students in Japan to different part-time opportunities and wages.",
        author: "Kaibo Tang · School of Economics, The University of Osaka",
        facts: [["Manuscript", "Research design & pre-analysis plan"], ["Population", "Chinese international students in Japan"], ["Primary outcome", "Log hourly part-time wage"], ["Specification", "Five pre-specified models"]],
        sections: [
          { label: "The question", title: "Does how a job is found relate to the wage ultimately received?", intro: "Search channels can change search costs, trust, language requirements, and the range of employers visible to a student.", cards: [["Search friction", "Native-language ties may deliver trusted information faster and at lower cost."], ["Opportunity sets", "Channels may reveal different employers, occupations, places, and wage offers."], ["Labor-market sorting", "Language, geography, and job type may shape both channel and wage."]], note: "The design defines two contrasting information environments before analysis." },
          { label: "Information environments", title: "Compare two routes without assuming one is better.", intro: "Co-ethnic networks may provide trust, speed, and protection; formal channels may widen the searchable market. The study tests whether opportunity sets differ.", cards: [["Japanese / formal", "Japanese platforms, university boards, storefront notices, direct application."], ["Chinese / co-ethnic", "Chinese social media, acquaintances, and ethnic-business networks."], ["Information tax", "A hypothesized wage cost if low-friction search also narrows visible jobs and offers."]], note: "‘Information tax’ is a hypothesis, not a result; the design avoids stigmatizing Chinese or co-ethnic networks." },
          { label: "Survey design", title: "The analytical unit is the student–job match.", intro: "Eligible respondents are Chinese international students enrolled in Japan with part-time work experience; the current main job is the default reference.", cards: [["Outcome · ln(wage)", "Natural logarithm of hourly wage in JPY."], ["JapaneseChannel", "1 for Japanese/formal; 0 for Chinese/co-ethnic channels."], ["ChineseAreaTime", "Travel time to the nearest Chinese-community or supermarket area."], ["Controls", "Japanese ability, gender, prefecture/city, distance to the city center."]], note: "Mixed and other channels are excluded from the baseline binary comparison and restored in robustness coding." },
          { label: "Pre-analysis ladder", title: "Separate description, adjustment, identification, and mechanism.", intro: "Five models are fixed in advance so claims with different evidentiary demands are not collapsed into one favorable specification.", cards: [["M1–M2", "Raw association, then Japanese ability and gender."], ["M3", "Main OLS with geography and urban centrality; still associational."], ["M4", "Candidate IV/2SLS using ChineseAreaTime, conditional on diagnostics."], ["M5", "Robustness and mechanism with commute, school, and job type."]], note: "Design only: no sample estimates, coefficient signs, significance tests, or causal results are reported." },
          { label: "Identification strategy", title: "Spatial exposure is a candidate instrument—not a shortcut to causality.", intro: "Travel time to a Chinese-community area is proposed as variation in access to co-ethnic job information, but every link remains an assumption to test.", cards: [["Relevance", "Longer travel time should predict greater use of Japanese/formal channels; report first stage and F statistic."], ["Exclusion restriction", "Centrality, transit, rent, job density, residential choice, and school location may create other paths."], ["Interpretation", "Weak first stage means no headline IV result; OLS remains explicitly associational."]], note: "The pre-specified hypothesis predicts a positive Japanese-channel wage premium; its magnitude, persistence after controls, and any IV estimate remain open questions—not results. Any IV interpretation would at most apply locally to students whose channel choice responds to spatial exposure." },
          { label: "Limits & research ethics", title: "The strongest design is transparent about what it cannot identify.", intro: "Cross-sectional data, channel self-selection, mixed-channel measurement, spatial confounding, and unobserved heterogeneity constrain interpretation; external validity is limited to the target population.", cards: [["Cross-sectional design", "Cannot establish timing as cleanly as randomized or longitudinal evidence."], ["Channel measurement", "Multiple channels require baseline and alternative coding."], ["Spatial instrument", "Geographic proximity may affect wages through other pathways."], ["External validity", "Do not generalize beyond Chinese international students in Japan without evidence."]], note: "No precise addresses; geography is separated from identifiers; reporting is aggregated; responses are not shared with schools, employers, or public authorities." },
        ],
        citation: "Tang, Kaibo (2026). Information Frictions, Ethnic Networks, and Part-Time Wage Gaps among Chinese International Students in Japan: A Research Design and Pre-Analysis Plan.",
      },
      ja: {
        kicker: "研究デザイン · 労働経済学 · 情報の経済学", status: "事前分析計画 · 実証推定は未掲載",
        title: "求人情報が異なるネットワークを通るとき、目に入る賃金も変わるのか。",
        standfirst: "日本語・公的な求職経路と中国語・同民族ネットワークが、異なるアルバイト機会への接触につながり、それが時給に表れるかを検討します。",
        author: "唐 楷博 · 大阪大学経済学部",
        facts: [["原稿", "研究デザイン・事前分析計画"], ["対象", "日本の中国人留学生"], ["主要アウトカム", "アルバイト時給の対数"], ["仕様", "事前に定めた5モデル"]],
        sections: [
          { label: "研究課題", title: "仕事の見つけ方は、最終的に得る賃金と関係するのか。", intro: "求職経路は探索費用、信頼、日本語要件、接触できる雇用主の範囲を変え得ます。", cards: [["探索摩擦", "母語のつながりは信頼できる情報を早く低コストで届け得る。"], ["機会集合", "経路により雇用主・職種・場所・賃金提示が異なり得る。"], ["労働市場での選別", "言語、地理、職種が経路と賃金の双方に関連し得る。"]], note: "分析前に対照的な二つの情報環境を定義します。" },
          { label: "情報環境", title: "二つの経路を、優劣を決めつけずに比較する。", intro: "同民族ネットワークは信頼・速さ・保護を、公的経路は広い探索市場を提供し得ます。検証するのは機会集合の違いです。", cards: [["日本語・公的経路", "求人サイト、大学掲示板、店頭掲示、直接応募。"], ["中国語・同民族経路", "中国語SNS、知人、エスニック・ビジネス。"], ["情報税", "低摩擦の探索が可視的な仕事と賃金提示を狭める場合の仮説的費用。"]], note: "情報税は仮説であり結果ではなく、同民族ネットワークを否定的に描きません。" },
          { label: "調査設計", title: "分析単位は、学生とアルバイトの組合せ。", intro: "日本でのアルバイト経験を持つ中国人留学生を対象に、原則として現在の主な仕事を回答対象とします。", cards: [["アウトカム · ln(wage)", "円建て時給の自然対数。"], ["JapaneseChannel", "日本語・公的経路1、中国語・同民族経路0。"], ["ChineseAreaTime", "最寄りの中国コミュニティ地域までの移動時間。"], ["統制", "日本語能力、性別、地域、都心距離。"]], note: "混合・その他経路は基準比較から除き、頑健性確認で戻します。" },
          { label: "事前分析の階段", title: "記述、調整、識別、メカニズムを分ける。", intro: "要求水準の異なる主張を一つの有利な仕様にまとめないため、五つのモデルを事前固定します。", cards: [["M1–M2", "未調整の関連、次に日本語能力と性別。"], ["M3", "地理と都心性を加えた主要OLS。関連として解釈。"], ["M4", "ChineseAreaTimeを用いる候補IV/2SLS。"], ["M5", "通勤、学校、職種による頑健性・メカニズム。"]], note: "研究デザインのみで、推定値、符号、有意性、因果結果は含みません。" },
          { label: "識別戦略", title: "空間的接触は候補操作変数であり、因果推論への近道ではない。", intro: "中国コミュニティ地域までの移動時間を情報接触の変動源としますが、論理の各段階は検証すべき仮定です。", cards: [["関連性", "移動時間が長いほど日本語経路を使うと予想し、第一段階とF値を報告。"], ["除外制約", "都心性、交通、家賃、求人密度、居住選択、学校分布が別経路になり得る。"], ["解釈", "第一段階が弱ければIVを主要結果にせず、OLSは関連として扱う。"]], note: "事前仮説は日本語経路の賃金プレミアムを正と予測しますが、大きさ、統制後の持続、IV推定は未解決であり結果ではありません。IVの解釈も空間接触に反応する学生に限られます。" },
          { label: "限界と研究倫理", title: "識別できないことを明確にするほど、研究設計は強くなる。", intro: "横断データ、自己選択、混合経路、空間的交絡、観測されない異質性が解釈を制限します。", cards: [["横断研究", "時間順序の確立に限界。"], ["経路測定", "複数経路に基準・代替符号化が必要。"], ["空間IV", "情報以外の経路で賃金に影響し得る。"], ["外的妥当性", "日本の中国人留学生に限定。"]], note: "正確な住所を収集せず、地理と識別子を分離し、集計報告し、回答を学校・雇用主・行政へ共有しません。" },
        ],
        citation: "Tang, Kaibo (2026). Information Frictions, Ethnic Networks, and Part-Time Wage Gaps among Chinese International Students in Japan: A Research Design and Pre-Analysis Plan.",
      },
      zh: {
        kicker: "研究设计 · 劳动经济学 · 信息经济学", status: "预分析计划 · 尚无实证估计",
        title: "当招聘信息经过不同网络传播，劳动者看到的工资也会不同吗？",
        standfirst: "考察日语/正式求职渠道与中文/同族网络，是否让在日中国留学生接触到不同的兼职机会集合及工资。",
        author: "唐楷博 · 大阪大学经济学部",
        facts: [["文稿", "研究设计与预分析计划"], ["对象", "在日中国留学生"], ["主要结果变量", "兼职时薪的对数"], ["设定", "五个预先指定模型"]],
        sections: [
          { label: "研究问题", title: "找到工作的方式，会不会影响最终得到的工资？", intro: "求职渠道可能改变搜索成本、信任、语言门槛与可接触的雇主范围。", cards: [["搜索摩擦", "母语网络可能更快、更低成本地传递可信信息。"], ["机会集合", "渠道可能呈现不同雇主、职业、地点和工资。"], ["劳动力市场分流", "语言、地理、工作类型可能同时影响渠道与工资。"]], note: "分析之前先定义两个对照的信息环境。" },
          { label: "信息环境", title: "比较两类渠道，但不预设谁优谁劣。", intro: "同族网络可提供信任、速度与保护；正式渠道可能扩大市场。需要检验的是机会集合是否不同。", cards: [["日语 / 正式渠道", "日语平台、大学公告栏、店铺告示、直接应聘。"], ["中文 / 同族渠道", "中文社交媒体、熟人和族群商业网络。"], ["信息税", "低摩擦搜索若缩小可见职位与报价，可能形成假设性工资成本。"]], note: "信息税是待检验假说，不是结果；研究避免污名化中文或同族网络。" },
          { label: "调查设计", title: "分析单位是“学生—工作”匹配。", intro: "对象为在日本就读且有兼职经验的中国留学生，原则上回答当前主要兼职。", cards: [["结果 · ln(wage)", "日元时薪取自然对数。"], ["JapaneseChannel", "日语/正式渠道为1，中文/同族为0。"], ["ChineseAreaTime", "到最近中国社区区域的出行时间。"], ["控制变量", "日语、性别、地区、距市中心距离。"]], note: "混合与其他渠道不进入基准二元比较，在稳健性编码中重新纳入。" },
          { label: "预分析阶梯", title: "区分描述、调整、识别与机制。", intro: "五个模型预先固定，避免把证据要求不同的主张压缩为最有利的设定。", cards: [["M1–M2", "原始相关，再加入日语与性别。"], ["M3", "加入地理与中心性；明确作相关解释。"], ["M4", "使用ChineseAreaTime的候选IV/2SLS。"], ["M5", "加入通勤、学校、工作类型的稳健性与机制。"]], note: "仅报告研究设计，不含样本估计、系数方向、显著性或因果结论。" },
          { label: "识别策略", title: "空间接触只是候选工具变量，不是因果捷径。", intro: "到中国社区区域的出行时间拟作为同族招聘信息接触变化来源，但每一环都是需要检验的假设。", cards: [["相关性", "出行时间越长，预计越常使用日语渠道；报告第一阶段与F值。"], ["排除限制", "中心性、交通、房租、岗位密度、居住选择与学校分布可构成其他路径。"], ["解释规则", "第一阶段弱时不把IV作为主要结果，OLS始终作相关解释。"]], note: "预设假说预测日语渠道工资溢价为正；其大小、加入控制后是否持续以及IV估计均是开放问题，而不是结果。即便IV成立，也最多解释对空间接触有反应者的局部效应。" },
          { label: "局限与研究伦理", title: "对无法识别的内容保持透明，才是更强的设计。", intro: "横截面、自我选择、混合渠道、空间混杂与不可观测异质性限制解释。", cards: [["横截面", "时间顺序识别有限。"], ["渠道测量", "多渠道需要基准与替代编码。"], ["空间IV", "可能通过信息以外路径影响工资。"], ["外部效度", "仅限在日中国留学生。"]], note: "不收集精确住址；地理与身份分离；只作汇总报告；回答不提供给学校、雇主或公共机关。" },
        ],
        citation: "Tang, Kaibo (2026). Information Frictions, Ethnic Networks, and Part-Time Wage Gaps among Chinese International Students in Japan: A Research Design and Pre-Analysis Plan.",
      },
    },

    "chinichi-osaka": {
      number: "EJU", source: LINKS.map, pdf: LINKS.chinichi,
      en: {
        kicker: "Teaching experience · EJU preparation · Osaka", status: "Current part-time role",
        title: "Teaching across language, society, and mathematics.",
        standfirst: "At Chinichi Juku Osaka, I teach Japanese, Japan and the World, and liberal-arts mathematics for students preparing for the EJU.",
        author: "Kaibo Tang · Instructor",
        facts: [["Institution", "Chinichi Juku Osaka"], ["Role", "Part-time instructor"], ["Examination", "EJU preparation"], ["Location", "Honmachi · Osaka"]],
        sections: [
          { label: "Teaching role", title: "Supporting students across three different ways of thinking.", intro: "My teaching spans language proficiency, social-science knowledge, and quantitative reasoning for international students preparing for undergraduate admission in Japan.", cards: [["Language", "EJU Japanese as a Foreign Language."], ["Society", "Japan and the World · Comprehensive Subjects."], ["Quantitative", "Mathematics Course 1 · Liberal arts."]], note: "Three EJU subject areas are currently taught at the Osaka campus." },
          { label: "Courses", title: "A compact teaching portfolio for EJU preparation.", intro: "Each course represents a distinct part of the entrance-examination pathway.", cards: [["EJU Japanese", "Japanese as a Foreign Language for students preparing to study at a Japanese university."], ["Japan and the World", "The social-science portion commonly taught as Comprehensive Subjects."], ["Liberal-arts mathematics", "EJU Mathematics Course 1 for humanities and social-science applicants."]], note: "This page records teaching experience; admissions and enrollment information should be confirmed with the school." },
          { label: "Campus", title: "Teaching in central Osaka, close to Honmachi Station.", intro: "3F, Daiichi Juken Midosuji-Honmachi Building, 3-4-7 Minamihonmachi, Chuo-ku, Osaka 541-0054.", cards: [["Current role", "Part-time instructor at Chinichi Juku Osaka."], ["Subjects", "EJU Japanese, Japan and the World, and liberal-arts mathematics."], ["Location", "Chuo Ward · Honmachi · Osaka."]], note: "Use the map and official school links above for current campus information." },
        ],
        citation: "Chinichi Juku Osaka · EJU teaching experience · Kaibo Tang",
      },
      ja: {
        kicker: "教育経験 · EJU対策 · 大阪", status: "現在のアルバイト",
        title: "日本語・総合科目・数学を横断して教える。",
        standfirst: "知日塾大阪校で、日本留学試験（EJU）を受験する学生に日本語、総合科目、文科数学を教えています。",
        author: "唐 楷博 · 講師",
        facts: [["勤務先", "知日塾 大阪校"], ["役割", "アルバイト講師"], ["試験", "日本留学試験（EJU）"], ["場所", "大阪 · 本町"]],
        sections: [
          { label: "担当", title: "三つの異なる思考領域を横断して、学習を支える。", intro: "言語運用、社会科学の知識、数量的な思考を担当し、日本の大学進学を目指す留学生のEJU対策に関わっています。", cards: [["言語", "EJU日本語。"], ["社会", "EJU総合科目。"], ["数量", "EJU文科数学 · 数学コース1。"]], note: "大阪校で現在担当する三つのEJU科目領域です。" },
          { label: "担当科目", title: "EJU対策を構成する三つの科目。", intro: "アカデミックな日本語、社会科学の理解、数学的思考という異なる領域を担当しています。", cards: [["EJU日本語", "日本の大学で学ぶことを目指す留学生向け。"], ["EJU総合科目", "日本留学試験の社会科学領域。"], ["文科数学", "文系・社会科学系向け数学コース1。"]], note: "入塾・受講情報は知日塾へ直接ご確認ください。" },
          { label: "大阪校", title: "大阪の中心部、本町駅近くの校舎。", intro: "〒541-0054 大阪府大阪市中央区南本町3丁目4-7 第一住建御堂筋本町ビル3F。", cards: [["現在の担当", "知日塾大阪校のアルバイト講師。"], ["科目", "EJU日本語、総合科目、文科数学。"], ["場所", "大阪市中央区 · 本町。"]], note: "現行の校舎情報は地図と公式ページでご確認ください。" },
        ],
        citation: "知日塾 大阪校 · EJU教育経験 · 唐 楷博",
      },
      zh: {
        kicker: "教学经历 · EJU备考 · 大阪", status: "当前兼职工作",
        title: "跨越语言、社会与数学的教学。",
        standfirst: "我在知日塾大阪校为准备日本留学试验（EJU）的学生教授日语、综合科目与文科数学。",
        author: "唐楷博 · 讲师",
        facts: [["任职机构", "知日塾大阪校"], ["角色", "兼职讲师"], ["考试", "日本留学试验（EJU）"], ["地点", "大阪 · 本町"]],
        sections: [
          { label: "教学职责", title: "连接三种不同的思考方式，支持学生备考。", intro: "教学涵盖语言能力、社会科学知识与数量推理，面向准备进入日本大学本科阶段学习的留学生。", cards: [["语言", "EJU日语。"], ["社会", "EJU综合科目。"], ["数量", "EJU文科数学 · 数学Course 1。"]], note: "目前在大阪校教授三个EJU科目领域。" },
          { label: "教授课程", title: "构成EJU备考的三个科目。", intro: "课程对应学术日语、社会科学理解与数学推理。", cards: [["EJU日语", "面向计划进入日本大学学习的留学生。"], ["EJU综合科目", "对应日本留学试验社会科学部分。"], ["文科数学", "主要面向文科与社会科学申请者的数学Course 1。"]], note: "本页面用于介绍教学经历，报名信息请直接向知日塾确认。" },
          { label: "大阪校", title: "位于大阪市中心、本町站附近的校区。", intro: "〒541-0054 大阪府大阪市中央区南本町3丁目4-7 第一住建御堂筋本町ビル3F。", cards: [["当前职责", "知日塾大阪校兼职讲师。"], ["课程", "EJU日语、综合科目与文科数学。"], ["地点", "大阪市中央区 · 本町。"]], note: "请通过地图与学校官网确认最新校区信息。" },
        ],
        citation: "知日塾大阪校 · EJU教学经历 · 唐楷博",
      },
    },
  };

  const escapeHTML = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const externalAttrs = (href) => href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";
  const byPath = (object, path) => path.split(".").reduce((value, key) => value?.[key], object);
  const languageName = { en: "English", ja: "日本語", zh: "中文" };
  const baseTitle = "Kaibo Tang | Behavioral Economics & Public Policy";

  const page = document.querySelector(".page");
  const views = [...document.querySelectorAll(".view")];
  const profilePanel = document.querySelector("#profile-panel");
  const workPanel = document.querySelector("#work-panel");
  const contactPanel = document.querySelector("#contact-panel");
  const detailDialog = document.querySelector("#detail-dialog");
  const detailShell = detailDialog.querySelector(".detail-shell");
  const detailContent = document.querySelector("#detail-content");
  const detailClose = document.querySelector(".detail-close");
  const detailReturn = document.querySelector(".detail-return");
  const detailReturnLabel = document.querySelector(".detail-return-label");
  const routeStatus = document.querySelector("#route-status");
  const burger = document.querySelector(".burger");
  const menuWrap = document.querySelector(".mobile-menu-wrap");
  const overlay = document.querySelector(".mobile-overlay");
  const mobileClose = document.querySelector(".mobile-close");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const motionBackdrop = document.querySelector(".bg");
  const video = document.querySelector(".bg-video");

  let storedLanguage = null;
  try {
    storedLanguage = localStorage.getItem("kaibo-lang");
  } catch {
    // Fall back to English when storage is unavailable.
  }
  let language = ["en", "ja", "zh"].includes(storedLanguage) ? storedLanguage : "en";
  let currentRoute = "home";
  let lastBaseRoute = "work/research";
  let counted = false;
  let visitorCount = null;
  let detailPhase = "closed";
  let activeDetailRoute = null;
  let detailTransitionToken = 0;
  let detailTransitionTimer = 0;
  let detailTransitionCleanup = null;
  let detailTitleFocusTimer = 0;
  let returnNavigationFallbackTimer = 0;
  let returnNavigationPending = false;
  let pendingDetailOriginRoute = null;
  let pendingDetailFocus = false;

  const visitorCountText = () => visitorCount === null
    ? "—"
    : String(visitorCount).padStart(6, "0");

  const syncVisitorPlaque = () => {
    const plaque = document.querySelector(".visitor-plaque");
    const value = plaque?.querySelector("[data-visitor-count]");
    if (!plaque || !value) return;
    value.textContent = visitorCountText();
    plaque.setAttribute("aria-label", visitorCount === null
      ? COPY[language].contact.visitors
      : `${COPY[language].contact.visitors}: ${visitorCount}`);
  };

  const loadVisitorCount = async () => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 6000);
    const isLocalHost = ["localhost", "127.0.0.1", "::1"].includes(location.hostname);
    const isPublicSite = location.protocol === "https:" && !isLocalHost;
    let wasCounted = false;

    try {
      wasCounted = localStorage.getItem(COUNTER_COUNTED_KEY) === "1";
    } catch {
      // Local storage can be unavailable in strict privacy modes.
    }

    const requestOptions = {
      cache: "no-store",
      credentials: "omit",
      referrerPolicy: "no-referrer",
      signal: controller.signal,
    };

    try {
      if (isPublicSite && !wasCounted) {
        const trackingResponse = await fetch(COUNTER_TRACK_URL, requestOptions);
        if (!trackingResponse.ok) throw new Error("Visitor tracking is unavailable");
        try {
          localStorage.setItem(COUNTER_COUNTED_KEY, "1");
          localStorage.removeItem("kaibo-site-visitor-counted-v1");
          localStorage.removeItem("kaibo-site-visitor-id-v1");
        } catch {
          // The count still works when storage is blocked; only deduplication is lost.
        }
      }

      const response = await fetch(COUNTER_VIEWS_URL, requestOptions);
      if (!response.ok) throw new Error("Visitor counter is unavailable");
      const data = await response.json();
      const nextCount = Number(data.views);
      if (!Number.isFinite(nextCount) || nextCount < 0) throw new Error("Invalid visitor count");
      visitorCount = Math.trunc(nextCount);
    } catch {
      visitorCount = null;
    } finally {
      window.clearTimeout(timeoutId);
      syncVisitorPlaque();
    }
  };

  const aliases = {
    "": "home", top: "home", about: "profile/about", academic: "profile/academic",
    research: "work/research", publications: "work/writing",
  };

  const normalizeRoute = () => {
    const encoded = location.hash.replace(/^#\/?/, "");
    let raw = encoded;
    try {
      raw = decodeURIComponent(encoded);
    } catch {
      // A malformed hash should fall back to the normal route guard.
    }
    raw = raw.replace(/\/+$/, "");
    return aliases[raw] || raw || "home";
  };

  const setMenu = (open, returnFocus = false) => {
    if (!burger || !menuWrap) return;
    menuWrap.hidden = !open;
    page.inert = open;
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", open);
    if (open) window.setTimeout(() => mobileClose?.focus(), 0);
    if (!open && returnFocus) burger.focus();
  };

  const updateGlobalCopy = () => {
    const t = COPY[language];
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;
    document.querySelectorAll("[data-copy]").forEach((element) => {
      const value = byPath(t, element.dataset.copy);
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll(".desktop-nav [data-nav]").forEach((link) => {
      link.textContent = t.nav[link.dataset.nav];
    });
    const mobileLinks = [...document.querySelectorAll(".mobile-menu > a")];
    [t.nav.home, t.nav.profile, t.nav.research, t.nav.writing, t.nav.contact].forEach((label, index) => {
      if (mobileLinks[index]) mobileLinks[index].textContent = label;
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    document.querySelector(".skip-link").textContent = language === "en" ? "Skip to content" : language === "ja" ? "本文へ移動" : "跳转到正文";
    detailClose.setAttribute("aria-label", t.common.close);
    detailReturn.setAttribute("aria-label", t.common.returnAria);
    detailReturnLabel.textContent = t.common.return;
  };

  const panelHeader = (kicker, title, intro, id) => `
    <header class="panel-heading">
      <div><p class="panel-kicker">${escapeHTML(kicker)}</p><h1 id="${id}" tabindex="-1">${escapeHTML(title)}</h1></div>
      <p>${escapeHTML(intro)}</p>
    </header>`;

  const panelTabs = (items) => `
    <nav class="panel-tabs" aria-label="Section view">
      ${items.map(([label, href, active]) => `<a class="route-link${active ? " active" : ""}" href="#${href}"${active ? ' aria-current="page"' : ""}>${escapeHTML(label)}</a>`).join("")}
    </nav>`;

  const renderProfile = (mode = "about") => {
    const t = COPY[language].profile;
    const tabs = panelTabs([
      [t.tabs.about, "profile/about", mode === "about"],
      [t.tabs.academic, "profile/academic", mode === "academic"],
    ]);

    const about = `
      <div class="about-layout">
        <div class="about-copy">
          <h2>${escapeHTML(t.aboutTitle)}</h2>
          <p>${escapeHTML(t.body)}</p>
          <div class="about-facts">
            <div class="about-fact"><span>${escapeHTML(t.locationLabel)}</span><strong>${escapeHTML(t.location)}</strong></div>
            <div class="about-fact"><span>${escapeHTML(t.affiliationLabel)}</span><strong>${escapeHTML(t.affiliation)}</strong></div>
            <div class="about-fact"><span>${escapeHTML(t.roleLabel)}</span><strong>${escapeHTML(t.role)}</strong></div>
            <div class="about-fact"><span>${escapeHTML(t.orcidLabel)}</span><strong>0009-0004-2637-8025</strong></div>
          </div>
          <ul class="interest-list">${t.interests.map((interest) => `<li>${escapeHTML(interest)}</li>`).join("")}</ul>
          <a class="profile-id-link" href="${LINKS.orcid}" target="_blank" rel="noopener noreferrer"><i>iD</i><span>0009-0004-2637-8025 ↗</span></a>
        </div>
        <div class="profile-visual">
          <figure class="profile-photo"><img src="assets/kaibo-tang-city-night.jpg" alt="Portrait photograph of Kaibo Tang" width="1200" height="900" /></figure>
          <figure class="profile-mini"><img src="assets/kaibo-tang-illustration.png" alt="" width="1254" height="1254" loading="lazy" decoding="async" /></figure>
        </div>
      </div>`;

    const academic = `
      <div class="academic-intro"><h2>${escapeHTML(t.academicTitle)}</h2><p>${escapeHTML(t.academicIntro)}</p></div>
      <div class="timeline">
        ${t.timeline.map(([period, title, body, href]) => `
          <a class="timeline-row" href="${href}"${externalAttrs(href)}>
            <span>${escapeHTML(period)}</span><div><h3>${escapeHTML(title)}</h3><p>${escapeHTML(body)}</p></div><b aria-hidden="true">↗</b>
          </a>`).join("")}
      </div>
      <div class="activity-list">
        ${t.activities.map(([number, label, title, body, meta, href]) => `
          <article class="activity-row">
            <span class="activity-index">${escapeHTML(number)} · ${escapeHTML(label)}</span>
            <h3>${escapeHTML(title)}</h3><p>${escapeHTML(body)}</p>
            <span class="activity-meta">${escapeHTML(meta)}</span>
            <a class="inline-link" href="${href}"${externalAttrs(href)}>${COPY[language].common.detail} <span aria-hidden="true">↗</span></a>
          </article>`).join("")}
      </div>`;

    profilePanel.innerHTML = `<div class="panel-shell">${panelHeader(t.kicker, t.title, t.intro, "profile-title")}${tabs}${mode === "academic" ? academic : about}<footer class="panel-footer"><span>Kaibo Tang · 唐楷博</span><span>${COPY[language].common.updated}</span></footer></div>`;
  };

  const renderWork = (mode = "research") => {
    const t = COPY[language].work;
    const order = mode === "writing" ? [0, 2, 1, 3] : [0, 1, 2, 3];
    const tabs = panelTabs([
      [t.tabs.research, "work/research", mode === "research"],
      [t.tabs.writing, "work/writing", mode === "writing"],
    ]);
    const rows = order.map((workIndex, position) => {
      const work = t.works[workIndex];
      const meta = WORK_META[workIndex];
      const title = mode === "research" ? work.shortTitle : work.title;
      const original = language !== "en" && mode === "writing"
        ? `<p class="work-original-title">${escapeHTML(COPY.en.work.works[workIndex].title)}</p>`
        : "";
      return `
        <article class="work-row${meta.featured ? " featured" : ""}">
          <span class="work-number">${mode === "writing" ? String(position + 1).padStart(2, "0") : meta.number}</span>
          <div>
            <p class="item-kicker">${escapeHTML(work.type)}</p>
            <h2>${escapeHTML(title)}</h2>${original}
            <p class="work-summary">${escapeHTML(work.summary)}</p>
            <p class="work-meta">${escapeHTML(work.meta)}</p>
          </div>
          <div class="work-actions">
            <a class="detail-button" href="#research/${meta.slug}">${escapeHTML(t.overview)} <span aria-hidden="true">→</span></a>
          </div>
        </article>`;
    }).join("");

    workPanel.innerHTML = `<div class="panel-shell">${panelHeader(t.kicker, t.title, t.intro, "work-title")}${tabs}<div class="work-list">${rows}</div><footer class="panel-footer"><span>Kaibo Tang · 唐楷博</span><span>Frontiers · SSRN</span></footer></div>`;
  };

  const renderContact = () => {
    const t = COPY[language].contact;
    contactPanel.innerHTML = `
      <div class="panel-shell contact-panel">
        <div class="contact-hero">
          <p class="panel-kicker">${escapeHTML(t.kicker)}</p>
          <h1 class="contact-title" id="contact-title" tabindex="-1">${escapeHTML(t.title)}</h1>
          <p class="contact-body">${escapeHTML(t.body)}</p>
          <a class="email-cta" href="${LINKS.email}">${escapeHTML(t.email)} <span aria-hidden="true">↗</span></a>
          <div class="visitor-plaque" aria-live="polite" aria-label="${escapeHTML(t.visitors)}">
            <span class="visitor-label">${escapeHTML(t.visitors)}</span>
            <strong class="visitor-count" data-visitor-count aria-hidden="true">${visitorCountText()}</strong>
          </div>
        </div>
        <div class="contact-links">
          ${t.links.map(([icon, title, label, href]) => `
            <a class="contact-link" href="${href}"${externalAttrs(href)}>
              <i aria-hidden="true">${escapeHTML(icon)}</i><strong>${escapeHTML(title)}</strong><span>${escapeHTML(label)}</span><b aria-hidden="true">↗</b>
            </a>`).join("")}
        </div>
        <footer class="panel-footer"><span>OSAKA · JP</span><span>© 2026 Kaibo Tang</span></footer>
      </div>`;
    syncVisitorPlaque();
  };

  const isDetailRoute = (routeName) => routeName.startsWith("research/") || routeName.startsWith("teaching/");

  const clearDetailTransitionWait = () => {
    if (detailTransitionTimer) {
      window.clearTimeout(detailTransitionTimer);
      detailTransitionTimer = 0;
    }
    detailTransitionCleanup?.();
    detailTransitionCleanup = null;
  };

  const clearReturnNavigationFallback = () => {
    if (!returnNavigationFallbackTimer) return;
    window.clearTimeout(returnNavigationFallbackTimer);
    returnNavigationFallbackTimer = 0;
  };

  const setDetailPhase = (phase) => {
    detailPhase = phase;
    detailDialog.dataset.detailPhase = phase;
  };

  const rememberDetailOrigin = (trigger) => {
    const rect = trigger.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    detailDialog.style.setProperty("--detail-origin-x", `${((centerX / Math.max(1, window.innerWidth)) * 100).toFixed(2)}%`);
    detailDialog.style.setProperty("--detail-origin-y", `${((centerY / Math.max(1, window.innerHeight)) * 100).toFixed(2)}%`);
  };

  const waitForDetailExit = (token, complete) => {
    if (reduceMotion.matches) {
      complete();
      return;
    }

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      clearDetailTransitionWait();
      if (token === detailTransitionToken) complete();
    };
    const onTransitionEnd = (event) => {
      if (event.target === detailShell && event.propertyName === "transform") finish();
    };

    detailShell.addEventListener("transitionend", onTransitionEnd);
    detailTransitionCleanup = () => detailShell.removeEventListener("transitionend", onTransitionEnd);
    detailTransitionTimer = window.setTimeout(finish, 320);
  };

  const focusAfterDetailExit = () => {
    if (!pendingDetailFocus) return;
    const originRoute = pendingDetailOriginRoute;
    window.requestAnimationFrame(() => {
      const view = page.dataset.activeView;
      const focusTarget = originRoute
        ? document.querySelector(`[data-view="${view}"] a[href="#${originRoute}"]`)
        : null;
      (focusTarget?.isConnected ? focusTarget : document.querySelector(`[data-view="${view}"] h1`))
        ?.focus({ preventScroll: true });
    });
  };

  const finishDetailExit = (token) => {
    if (token !== detailTransitionToken || isDetailRoute(currentRoute)) return;
    clearDetailTransitionWait();
    if (detailDialog.open) detailDialog.close();
    setDetailPhase("closed");
    activeDetailRoute = null;
    returnNavigationPending = false;
    document.title = baseTitle;
    focusAfterDetailExit();
    pendingDetailOriginRoute = null;
    pendingDetailFocus = false;
  };

  const beginDetailExit = ({ originRoute, focus }) => {
    pendingDetailOriginRoute = originRoute || pendingDetailOriginRoute || activeDetailRoute;
    pendingDetailFocus ||= Boolean(focus);
    if (!detailDialog.open) {
      setDetailPhase("closed");
      activeDetailRoute = null;
      returnNavigationPending = false;
      document.title = baseTitle;
      focusAfterDetailExit();
      pendingDetailOriginRoute = null;
      pendingDetailFocus = false;
      return;
    }
    if (detailPhase === "closing") return;

    clearDetailTransitionWait();
    window.clearTimeout(detailTitleFocusTimer);
    const token = ++detailTransitionToken;
    setDetailPhase("closing");
    waitForDetailExit(token, () => finishDetailExit(token));
  };

  const cancelDetailExit = () => {
    clearDetailTransitionWait();
    ++detailTransitionToken;
    returnNavigationPending = false;
    pendingDetailOriginRoute = null;
    pendingDetailFocus = false;
    setDetailPhase("open");
  };

  const openDetailDialog = (routeName, { focusTitle }) => {
    clearDetailTransitionWait();
    window.clearTimeout(detailTitleFocusTimer);
    const token = ++detailTransitionToken;
    activeDetailRoute = routeName;
    returnNavigationPending = false;
    pendingDetailOriginRoute = null;
    pendingDetailFocus = false;
    setDetailPhase("opening");
    if (!detailDialog.open) detailDialog.showModal();

    const reveal = () => {
      if (token !== detailTransitionToken || !detailDialog.open || currentRoute !== routeName) return;
      setDetailPhase("open");
    };
    if (reduceMotion.matches) reveal();
    else window.requestAnimationFrame(() => window.requestAnimationFrame(reveal));

    if (focusTitle) {
      detailTitleFocusTimer = window.setTimeout(
        () => document.querySelector("#detail-title")?.focus({ preventScroll: true }),
        reduceMotion.matches ? 0 : 60,
      );
    }
  };

  const renderDetail = (slug, { resetScroll = true } = {}) => {
    const record = DETAILS[slug];
    if (!record) return false;
    window.clearTimeout(detailTitleFocusTimer);
    detailTitleFocusTimer = 0;
    const previousScrollTop = detailContent.scrollTop;
    const t = record[language];
    const common = COPY[language].common;
    const originalTitle = language !== "en" && record.originalTitle
      ? `<p class="detail-original-title">${escapeHTML(record.originalTitle)}</p>` : "";
    const sourceLabel = slug === "chinichi-osaka" ? (language === "en" ? "Open Google Maps" : language === "ja" ? "Google Mapsで見る" : "在 Google Maps 查看") : common.view;
    const secondLabel = slug === "chinichi-osaka" ? (language === "en" ? "Official school page" : language === "ja" ? "学校公式ページ" : "学校官网") : common.pdf;

    detailContent.innerHTML = `
      <header class="detail-hero">
        <div class="detail-number" aria-hidden="true">${escapeHTML(record.number)}</div>
        <div class="detail-title-wrap">
          <p class="detail-kicker">${escapeHTML(t.kicker)} · ${escapeHTML(t.status)}</p>
          <h1 id="detail-title" tabindex="-1">${escapeHTML(t.title)}</h1>
          ${originalTitle}
          <p class="detail-standfirst">${escapeHTML(t.standfirst)}</p>
          <p class="detail-author">${escapeHTML(t.author)}</p>
          <div class="detail-hero-actions">
            <a class="external-button" href="${record.source}" target="_blank" rel="noopener noreferrer">${escapeHTML(sourceLabel)} <span aria-hidden="true">↗</span></a>
            ${record.pdf ? `<a class="external-button secondary" href="${record.pdf}" target="_blank" rel="noopener noreferrer">${escapeHTML(secondLabel)} <span aria-hidden="true">↗</span></a>` : ""}
          </div>
          <div class="detail-facts">${t.facts.map(([label, value]) => `<div class="detail-fact"><span>${escapeHTML(label)}</span><strong>${escapeHTML(value)}</strong></div>`).join("")}</div>
        </div>
      </header>
      ${t.sections.map((section, index) => `
        <section class="detail-section" id="detail-${index + 1}">
          <div class="detail-section-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</div>
          <div>
            <p class="detail-section-label">${String(index + 1).padStart(2, "0")} · ${escapeHTML(section.label)}</p>
            <h2>${escapeHTML(section.title)}</h2>
            <p class="detail-section-intro">${escapeHTML(section.intro)}</p>
            <div class="detail-cards">${section.cards.map(([title, body], cardIndex) => `<article class="detail-card"><span>${String(cardIndex + 1).padStart(2, "0")}</span><h3>${escapeHTML(title)}</h3><p>${escapeHTML(body)}</p></article>`).join("")}</div>
            ${section.note ? `<p class="detail-note">${escapeHTML(section.note)}</p>` : ""}
          </div>
        </section>`).join("")}
      <footer class="detail-endcap"><p>${escapeHTML(t.citation)}</p><button class="detail-button detail-back" type="button">${escapeHTML(common.back)} ↑</button></footer>`;

    detailContent.scrollTop = resetScroll ? 0 : previousScrollTop;
    document.title = `${t.title} | Kaibo Tang`;
    return true;
  };

  const setActiveView = (name) => {
    views.forEach((view) => {
      const active = view.dataset.view === name;
      view.hidden = !active;
      view.inert = !active;
      view.classList.toggle("is-active", active);
    });
    page.dataset.activeView = name;
    document.querySelectorAll("[data-nav]").forEach((link) => {
      const active = link.dataset.nav === name;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };

  const route = ({ focus = true } = {}) => {
    const previousRoute = currentRoute;
    currentRoute = normalizeRoute();
    if (currentRoute !== previousRoute) clearReturnNavigationFallback();
    const parts = currentRoute.split("/");
    let view = "home";
    let mode = "";
    let detailSlug = "";

    if (parts[0] === "profile") {
      view = "profile";
      mode = parts[1] === "academic" ? "academic" : "about";
      lastBaseRoute = `profile/${mode}`;
    } else if (parts[0] === "work") {
      view = "work";
      mode = parts[1] === "writing" ? "writing" : "research";
      lastBaseRoute = `work/${mode}`;
    } else if (parts[0] === "contact") {
      view = "contact";
      lastBaseRoute = "contact";
    } else if (parts[0] === "research" && DETAILS[parts[1]]) {
      view = "work";
      mode = "research";
      detailSlug = parts[1];
      lastBaseRoute = previousRoute.startsWith("work/")
        ? previousRoute
        : previousRoute.startsWith("research/")
          ? lastBaseRoute
          : "work/research";
    } else if (parts[0] === "teaching" && parts[1] === "chinichi-osaka") {
      view = "profile";
      mode = "academic";
      detailSlug = "chinichi-osaka";
      lastBaseRoute = previousRoute.startsWith("profile/") || previousRoute.startsWith("work/")
        ? previousRoute
        : previousRoute.startsWith("teaching/")
          ? lastBaseRoute
          : "profile/academic";
    }

    const arrivedFromBaseView = detailSlug && (
      previousRoute.startsWith("work/") || previousRoute.startsWith("profile/")
    );
    if (arrivedFromBaseView) {
      history.replaceState({ ...(history.state || {}), kaiboDetailOrigin: lastBaseRoute }, "");
    }

    setActiveView(view);
    document.querySelectorAll(".mobile-menu > a[data-nav]").forEach((link) => {
      const href = link.getAttribute("href");
      const active = view === "work"
        ? href === `#work/${mode || "research"}`
        : link.dataset.nav === view;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    if (view === "profile") renderProfile(mode);
    if (view === "work") renderWork(mode);
    if (view === "contact") renderContact();
    const returningFromDetail = previousRoute.startsWith("research/") || previousRoute.startsWith("teaching/");
    if (!detailSlug && currentRoute !== previousRoute && !returningFromDetail) {
      document.querySelector(`[data-view="${view}"] .panel-scroll`)?.scrollTo({ top: 0, behavior: "auto" });
    }

    if (detailSlug) {
      const sameDetail = detailDialog.open && activeDetailRoute === currentRoute;
      if (sameDetail && detailPhase === "closing") cancelDetailExit();
      renderDetail(detailSlug, { resetScroll: !sameDetail });
      if (!sameDetail) openDetailDialog(currentRoute, { focusTitle: focus });
    } else if (detailDialog.open) {
      beginDetailExit({
        originRoute: returningFromDetail ? previousRoute : activeDetailRoute,
        focus,
      });
    } else {
      setDetailPhase("closed");
      activeDetailRoute = null;
      returnNavigationPending = false;
      document.title = baseTitle;
      if (focus) {
        window.requestAnimationFrame(() => {
          const focusTarget = returningFromDetail
            ? document.querySelector(`[data-view="${page.dataset.activeView}"] a[href="#${previousRoute}"]`)
            : document.querySelector(`[data-view="${page.dataset.activeView}"] h1`);
          focusTarget?.focus({ preventScroll: true });
        });
      }
    }

    const announcement = view === "home" ? COPY[language].nav.home
      : view === "profile" ? COPY[language].nav.profile
      : view === "work" ? COPY[language].nav[mode]
      : COPY[language].nav.contact;
    routeStatus.textContent = detailSlug ? DETAILS[detailSlug][language].title : announcement;
    setMenu(false);
    if (view === "home") armCounters();
  };

  const setLanguage = (next) => {
    if (!COPY[next]) return;
    language = next;
    try {
      localStorage.setItem("kaibo-lang", language);
    } catch {
      // The current session still switches language when storage is blocked.
    }
    updateGlobalCopy();
    route({ focus: false });
    routeStatus.textContent = languageName[language];
  };

  const values = [...document.querySelectorAll(".stat-value")];
  const formatValue = (element, value) => {
    const decimals = Number(element.dataset.decimals || 0);
    element.textContent = `${value.toFixed(decimals)}${element.dataset.suffix || ""}`;
  };

  function runCounters() {
    if (counted) return;
    counted = true;
    values.forEach((element, index) => {
      const target = Number(element.dataset.target || 0);
      if (reduceMotion.matches) {
        formatValue(element, target);
        return;
      }
      const duration = 1500 + index * 80;
      window.setTimeout(() => {
        const start = performance.now();
        const frame = (now) => {
          const progress = Math.min(1, (now - start) / duration);
          formatValue(element, target * (1 - Math.pow(1 - progress, 3)));
          if (progress < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      }, 480 + index * 90);
    });
  }

  let counterObserver;
  const armCounters = () => {
    if (counted) return;
    const stats = document.querySelector(".stats");
    if (reduceMotion.matches || !("IntersectionObserver" in window) || !stats) {
      runCounters();
      return;
    }
    if (counterObserver) return;
    counterObserver = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      runCounters();
      counterObserver.disconnect();
      counterObserver = undefined;
    }, { threshold: 0.25 });
    counterObserver.observe(stats);
  };

  let motionFrame = 0;
  let motionLastTime = 0;
  let motionX = 0;
  let motionY = 0;
  let motionTargetX = 0;
  let motionTargetY = 0;

  const writeBackdropMotion = () => {
    if (!motionBackdrop) return;
    motionBackdrop.style.setProperty("--motion-x", `${motionX.toFixed(2)}px`);
    motionBackdrop.style.setProperty("--motion-y", `${motionY.toFixed(2)}px`);
  };

  const animateBackdrop = (now) => {
    motionFrame = 0;
    if (!motionBackdrop || document.hidden || reduceMotion.matches || !finePointer.matches) return;

    const elapsed = Math.min(64, Math.max(0, now - motionLastTime));
    motionLastTime = now;
    const blend = 1 - Math.exp(-elapsed / 72);
    motionX += (motionTargetX - motionX) * blend;
    motionY += (motionTargetY - motionY) * blend;
    writeBackdropMotion();

    if (Math.abs(motionTargetX - motionX) > 0.015 || Math.abs(motionTargetY - motionY) > 0.015) {
      motionFrame = requestAnimationFrame(animateBackdrop);
    } else {
      motionBackdrop.classList.remove("is-motion-active");
    }
  };

  const requestBackdropFrame = () => {
    if (motionFrame || !motionBackdrop || reduceMotion.matches || !finePointer.matches || document.hidden) return;
    motionBackdrop.classList.add("is-motion-active");
    motionLastTime = performance.now();
    motionFrame = requestAnimationFrame(animateBackdrop);
  };

  const resetBackdropMotion = () => {
    motionTargetX = 0;
    motionTargetY = 0;
    if (reduceMotion.matches || !finePointer.matches) {
      if (motionFrame) cancelAnimationFrame(motionFrame);
      motionFrame = 0;
      motionX = 0;
      motionY = 0;
      writeBackdropMotion();
      motionBackdrop?.classList.remove("is-motion-active");
      return;
    }
    requestBackdropFrame();
  };

  const trackBackdropMotion = (event) => {
    if (reduceMotion.matches || !finePointer.matches) return;
    motionTargetX = ((event.clientX / Math.max(1, window.innerWidth)) - 0.5) * -10;
    motionTargetY = ((event.clientY / Math.max(1, window.innerHeight)) - 0.5) * -7;
    requestBackdropFrame();
  };

  const syncMotion = () => {
    if (reduceMotion.matches || document.hidden) {
      video?.pause();
      resetBackdropMotion();
      return;
    }
    video?.play().catch(() => {});
    resetBackdropMotion();
  };

  burger?.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
  overlay?.addEventListener("click", () => setMenu(false, true));
  mobileClose?.addEventListener("click", () => setMenu(false, true));
  document.querySelectorAll(".mobile-menu a").forEach((link) => link.addEventListener("click", () => setMenu(false, true)));
  document.addEventListener("keydown", (event) => {
    const menuOpen = burger?.getAttribute("aria-expanded") === "true";
    if (event.key === "Escape" && menuOpen) {
      setMenu(false, true);
      return;
    }
    if (event.key === "Tab" && menuOpen) {
      const focusable = [mobileClose, ...menuWrap.querySelectorAll(".mobile-menu a, .mobile-menu button")].filter(Boolean);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  window.addEventListener("resize", () => { if (window.innerWidth > 720) setMenu(false); });
  document.addEventListener("click", (event) => {
    const detailTrigger = event.target.closest('a[href^="#research/"], a[href^="#teaching/"]');
    if (detailTrigger) rememberDetailOrigin(detailTrigger);
    const languageButton = event.target.closest("[data-lang]");
    if (languageButton) {
      const inMobileMenu = Boolean(languageButton.closest(".mobile-menu"));
      setLanguage(languageButton.dataset.lang);
      if (inMobileMenu) setMenu(false, true);
    }
    if (event.target.closest(".detail-back")) detailContent.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
  });
  const requestDetailReturn = () => {
    if (returnNavigationPending || detailPhase === "closing") return;
    returnNavigationPending = true;
    const requestedDetailRoute = currentRoute;
    const fallbackRoute = lastBaseRoute;
    if (history.state?.kaiboDetailOrigin === lastBaseRoute && history.length > 1) {
      clearReturnNavigationFallback();
      returnNavigationFallbackTimer = window.setTimeout(() => {
        returnNavigationFallbackTimer = 0;
        if (returnNavigationPending && currentRoute === requestedDetailRoute && isDetailRoute(normalizeRoute())) {
          location.replace(`#${fallbackRoute}`);
        }
      }, 420);
      history.back();
      return;
    }
    location.replace(`#${lastBaseRoute}`);
  };
  detailReturn?.addEventListener("click", requestDetailReturn);
  detailClose?.addEventListener("click", requestDetailReturn);
  detailDialog?.addEventListener("cancel", (event) => {
    event.preventDefault();
    requestDetailReturn();
  });
  document.querySelector(".skip-link")?.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(`[data-view="${page.dataset.activeView}"] h1`)?.focus({ preventScroll: true });
  });
  window.addEventListener("hashchange", () => route());
  window.addEventListener("pointermove", trackBackdropMotion, { passive: true });
  document.documentElement.addEventListener("pointerleave", resetBackdropMotion);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && motionFrame) {
      cancelAnimationFrame(motionFrame);
      motionFrame = 0;
      motionBackdrop?.classList.remove("is-motion-active");
    }
    syncMotion();
  });
  reduceMotion.addEventListener?.("change", syncMotion);
  finePointer.addEventListener?.("change", resetBackdropMotion);

  updateGlobalCopy();
  syncMotion();
  void loadVisitorCount();
  if (!location.hash) history.replaceState(null, "", "#home");
  route({ focus: false });
})();
