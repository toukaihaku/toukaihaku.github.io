"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Lang = "en" | "ja" | "zh";

const englishTitle = "Justification as a revisable state: a behavioral risk–friction fit framework for digital public services";

const text = {
  en: {
    back: "Kaibo Tang",
    chapters: "Research chapters",
    theme: "Toggle color theme",
    skip: "Skip to research content",
    nav: ["Question", "Framework", "States", "Application", "Limits"],
    kicker: "Published article · Conceptual Analysis · Behavioral Public Policy",
    status: "Frontiers in Behavioral Economics · 14 Aug 2026",
    title: englishTitle,
    standfirst: "A conceptual framework for deciding when a specific friction in a digital public service should be retained, redesigned, tested, suspended, or removed as evidence changes.",
    author: "Kaibo Tang · School of Economics, The University of Osaka",
    open: "Read the published article",
    pdf: "Publisher PDF",
    home: "Return to personal website",
    scroll: "Explore the framework",
    facts: [["Article", "Conceptual Analysis"], ["Journal", "Frontiers in Behavioral Economics"], ["Record", "Volume 5 · Article 1936872"], ["DOI", "10.3389/frbhe.2026.1936872"]],
    question: {
      label: "01 · The question",
      title: "When does a protective step become unjustified friction?",
      body: "Digital public services must control fraud, error, and consequential mistakes without excluding legitimate users. BRFF therefore asks whether one specified friction is justified for one specified risk, service stage, user group, and review period—not whether friction is good or bad in the abstract.",
      formula: "J(f, r, s, g, t | E, A)",
      formulaLabel: "Justification is conditional on the friction, risk, stage, group, time, evidence, and available alternatives.",
      contrasts: [["01", "Claimed protection", "What risk is the step meant to reduce, and what incremental protection does it actually add?"], ["02", "Experienced burden", "Who bears the time, uncertainty, cognitive demand, delay, or exclusion created by the design?"], ["03", "Revisable evidence", "What is known, unknown, or no longer current—and when must the decision be reopened?"]],
    },
    framework: {
      label: "02 · Evidence-to-status framework",
      title: "Separate design, mechanism, burden, outcome, and judgment.",
      intro: "BRFF prevents a stated purpose from being treated as proof. It records how a design is meant to work, how people experience it, what outcomes follow, and only then assigns a provisional status.",
      layers: [["Design form", "The concrete step, default, delay, document, channel, or interface being assessed."], ["Claimed mechanism", "The behavior or information pathway through which protection is expected."], ["Experienced burden", "The group-conditioned effort, uncertainty, delay, stigma, or access loss."], ["Behavioral outcomes", "Protection-side and user-side consequences measured separately."], ["Normative status", "A time-limited decision linked to evidence and an operational action."]],
      gatesTitle: "The conditional gate sequence",
      gates: [["G0", "Authority & rights", "Record legal authority and non-compensable rights floors before behavioral balancing begins."], ["G1", "Functional fit", "Test whether the friction adds protection for the specified risk, rather than merely appearing prudent."], ["G2", "Comparative fit", "Compare lower-burden alternatives across all material protection outcomes using prespecified loss margins."], ["G3", "Distributional fit", "Examine who gains, who bears the burden, and whether the current or candidate design respects access and rights floors."]],
      note: "BRFF is not a weighted score. Protection-loss margins apply only to protection outcomes; access and rights floors remain non-compensable.",
    },
    states: {
      label: "03 · Revisable states",
      title: "The same evidence does not lead symmetrically to every status.",
      intro: "Pass, Fail, and Unknown assessments map to four operational states. Unknown evidence cannot be silently converted into approval, while even a positive status expires and must be reassessed.",
      items: [["Justified for the Current Review Period", "Required gates pass with adequate evidence.", "Retain with monitoring, an expiry date, and a defined review trigger."], ["Evidence-Uncertain", "Gate 0 passes, but a decision-relevant behavioral gate remains Unknown.", "Suspend or defer by default. Provisional use requires severe target harm, at least Grade C support for every material protection outcome, safeguards, independent approval, evidence milestones, and expiry."], ["Correctable Misfit", "Gate 1 passes and finalized Gate 2 or G3(f) fails, while an independently testable protective core and a feasible time-bounded repair remain.", "Redesign, target, accommodate, or replace the failing delivery feature, then retest every affected gate."], ["Sludge", "The friction fails protection, comparative, or distributional fit without a defensible route to correction.", "Remove, suspend, or replace the friction and document the decision."]],
      quote: "Justification is a time-indexed state—not a permanent label attached to an administrative requirement.",
    },
    application: {
      label: "04 · Worked application",
      title: "A measured access gain can reveal, rather than settle, the next policy question.",
      intro: "The paper applies BRFF to SNAP interview scheduling. The example shows how a published access result and an unmeasured integrity effect should be routed through the framework.",
      items: [["What is known", "Flexible scheduling improved access and participation in the cited setting."], ["What remains unknown", "The published record did not estimate whether fixed scheduling supplied incremental fraud or program-integrity protection."], ["What BRFF changes", "The missing protection evidence becomes an explicit test, safeguard, milestone, and review deadline—not an assumption of no loss."]],
      noteLabel: "Interpretation boundary",
      note: "This is an evidence-gap demonstration, not a new empirical estimate. The two completed records in the article use hypothetical values and do not validate the framework.",
    },
    limits: {
      label: "05 · Scope and limits",
      title: "An auditable decision structure, not an automated decision rule.",
      body: "BRFF organizes the consequences of incomplete evidence. It does not remove the need for legal judgment, institutional capacity, measurement, or public accountability.",
      cards: [["Conceptual synthesis", "The article is not a systematic review or meta-analysis and does not estimate a pooled effect."], ["No validated scale", "BRFF is not a psychometric instrument, causal model, or mechanically weighted index."], ["Illustrations are not evidence", "The worked records are deliberately hypothetical and should not be read as empirical validation."], ["Implementation matters", "Evidence quality, monitoring, expiry rules, and the ability to change service design determine whether the framework can discipline practice."]],
      takeaway: "Purpose cannot substitute for performance; unknown cannot become approval; positive status cannot persist without renewal.",
    },
    citation: "Tang K (2026). Justification as a revisable state: a behavioral risk–friction fit framework for digital public services. Frontiers in Behavioral Economics 5:1936872.",
    footer: "Published article · Frontiers in Behavioral Economics · CC BY 4.0",
    top: "Top",
  },
  ja: {
    back: "唐 楷博",
    chapters: "研究構成",
    theme: "配色を切り替える",
    skip: "研究本文へ移動",
    nav: ["問い", "枠組み", "状態", "適用例", "限界"],
    kicker: "掲載論文 · Conceptual Analysis · 行動公共政策",
    status: "Frontiers in Behavioral Economics · 2026年8月14日",
    title: "改訂可能な状態としての正当化――デジタル公共サービスのための行動的リスク・フリクション適合フレームワーク",
    standfirst: "変化する証拠に応じて、デジタル公共サービスの特定のフリクションを維持・再設計・検証・停止・撤去すべきかを判断するための概念枠組みです。",
    author: "唐 楷博 · 大阪大学経済学部",
    open: "掲載論文を読む",
    pdf: "出版社PDF",
    home: "個人サイトへ戻る",
    scroll: "枠組みを見る",
    facts: [["論文種別", "Conceptual Analysis"], ["掲載誌", "Frontiers in Behavioral Economics"], ["書誌情報", "第5巻 · Article 1936872"], ["DOI", "10.3389/frbhe.2026.1936872"]],
    question: {
      label: "01 · 問い",
      title: "保護のための手続は、いつ正当化できないフリクションになるのか。",
      body: "デジタル公共サービスは、不正・誤り・重大なミスを抑えつつ、正当な利用者を排除してはなりません。BRFFは、フリクション一般の善悪ではなく、特定のリスク、手続段階、利用者集団、審査期間に対して、一つの具体的なフリクションが正当化されるかを問います。",
      formula: "J(f, r, s, g, t | E, A)",
      formulaLabel: "正当化は、フリクション、リスク、段階、集団、時点、証拠、利用可能な代替案に条件づけられます。",
      contrasts: [["01", "主張される保護", "その手続は何のリスクを減らすのか。実際にどの程度の追加的保護をもたらすのか。"], ["02", "経験される負担", "時間、不確実性、認知的負荷、遅延、排除を誰が負うのか。"], ["03", "改訂可能な証拠", "何が既知・未知・陳腐化しているのか。いつ判断を再開するのか。"]],
    },
    framework: {
      label: "02 · 証拠から状態への枠組み",
      title: "設計、メカニズム、負担、結果、判断を分けて考える。",
      intro: "BRFFは、掲げられた目的をそのまま効果の証明として扱いません。設計の働き方、利用者の経験、保護側・利用者側の結果を記録した後にのみ、暫定的な状態を割り当てます。",
      layers: [["設計形態", "評価対象となる具体的な手順、既定値、待ち時間、書類、チャネル、画面。"], ["主張される機序", "保護が生じると期待される行動・情報経路。"], ["経験される負担", "集団ごとに異なる労力、不確実性、遅延、スティグマ、アクセス損失。"], ["行動上の結果", "保護側と利用者側の帰結を別々に測定。"], ["規範的状態", "証拠と運用上の行動に結び付く、期限付きの判断。"]],
      gatesTitle: "条件付きゲートの順序",
      gates: [["G0", "権限と権利", "行動的な比較の前に、法的根拠と相殺できない権利の下限を記録する。"], ["G1", "機能的適合", "慎重に見えるかではなく、特定リスクへの追加的保護があるかを検証する。"], ["G2", "比較的適合", "全ての重要な保護結果について、事前設定した損失幅を用いて低負担の代替案と比較する。"], ["G3", "分配的適合", "誰が利益と負担を受けるか、現行案・候補案がアクセスと権利の下限を守るかを検討する。"]],
      note: "BRFFは加重スコアではありません。保護損失の許容幅は保護結果だけに適用され、アクセスと権利の下限は相殺できません。",
    },
    states: {
      label: "03 · 改訂可能な状態",
      title: "同じ証拠不足が、全ての状態へ対称的に導くわけではない。",
      intro: "Pass・Fail・Unknownの評価は、四つの運用状態へ非対称に対応します。未知を暗黙の承認に変えることはできず、肯定的な状態にも期限と再評価が必要です。",
      items: [["現審査期間において正当化", "必要なゲートを十分な証拠で通過。", "監視、失効日、再審査の契機を伴って維持する。"], ["証拠不確実", "Gate 0を通過したが、判断に必要な行動ゲートがUnknownのまま。", "原則として停止または延期する。暫定運用には、重大な対象リスク、全ての重要な保護結果にGrade C以上の根拠、保護措置、独立承認、証拠到達点、失効期限が必要。"], ["修正可能な不適合", "Gate 1を通過し、確定したGate 2またはG3(f)がFailだが、独立に検証できる保護上の中核と、期限内に実行可能な修正が残る。", "問題のある提供形態を再設計・対象化・配慮・置換し、影響を受ける全ゲートを再検証する。"], ["スラッジ", "保護・比較・分配の適合に失敗し、妥当な修正経路がない。", "フリクションを撤去・停止・置換し、判断を記録する。"]],
      quote: "正当化とは、行政要件に恒久的に付くラベルではなく、時点に依存する状態です。",
    },
    application: {
      label: "04 · 適用例",
      title: "アクセス改善の測定は、次の政策課題を解決するのではなく可視化し得る。",
      intro: "論文はSNAPの面接日程設定にBRFFを適用し、公開されたアクセス改善と未測定の制度保護効果をどう扱うかを示します。",
      items: [["分かっていること", "柔軟な日程設定は、引用された状況でアクセスと参加を改善しました。"], ["分かっていないこと", "公開研究は、固定日程が不正防止や制度の完全性に追加的保護を与えたかを推定していません。"], ["BRFFが変えること", "保護効果の欠測を「損失なし」と仮定せず、検証、保護措置、到達点、再審査期限へ変換します。"]],
      noteLabel: "解釈上の境界",
      note: "これは証拠ギャップの扱いを示す例であり、新しい実証推定ではありません。二つの完成記録も仮想値を用いた説明で、枠組みの検証結果ではありません。",
    },
    limits: {
      label: "05 · 範囲と限界",
      title: "監査可能な意思決定構造であり、自動判断規則ではない。",
      body: "BRFFは不完全な証拠の帰結を整理しますが、法的判断、組織能力、測定、公共的説明責任を不要にはしません。",
      cards: [["概念的統合", "システマティックレビューやメタ分析ではなく、統合効果を推定しません。"], ["検証済み尺度ではない", "心理尺度、因果モデル、機械的な加重指標ではありません。"], ["説明例は証拠ではない", "完成記録は意図的に仮想であり、実証的検証として読めません。"], ["実装能力が必要", "証拠の質、監視、失効規則、設計変更能力が、実務を律する力を左右します。"]],
      takeaway: "目的は実績の代わりにならず、未知は承認にならず、肯定的状態は更新なしに存続できない。",
    },
    citation: "Tang K (2026). Justification as a revisable state: a behavioral risk–friction fit framework for digital public services. Frontiers in Behavioral Economics 5:1936872.",
    footer: "掲載論文 · Frontiers in Behavioral Economics · CC BY 4.0",
    top: "先頭へ",
  },
  zh: {
    back: "唐楷博",
    chapters: "研究章节",
    theme: "切换明暗模式",
    skip: "跳转到研究正文",
    nav: ["问题", "框架", "状态", "应用", "边界"],
    kicker: "正式发表 · Conceptual Analysis · 行为公共政策",
    status: "Frontiers in Behavioral Economics · 2026年8月14日",
    title: "作为可修正状态的正当性：数字公共服务的行为风险—摩擦适配框架",
    standfirst: "提出一套概念框架，用于依据不断更新的证据判断数字公共服务中的具体摩擦应被保留、重新设计、继续检验、暂停还是移除。",
    author: "唐楷博 · 大阪大学经济学部",
    open: "阅读正式发表文章",
    pdf: "出版社 PDF",
    home: "返回个人网站",
    scroll: "浏览框架",
    facts: [["文章类型", "Conceptual Analysis"], ["期刊", "Frontiers in Behavioral Economics"], ["出版信息", "第5卷 · Article 1936872"], ["DOI", "10.3389/frbhe.2026.1936872"]],
    question: {
      label: "01 · 研究问题",
      title: "一个保护性步骤何时会变成缺乏正当性的摩擦？",
      body: "数字公共服务必须控制欺诈、错误和重大失误，同时不能排斥正当用户。因此，BRFF不抽象地判断“摩擦是好是坏”，而是考察某一具体摩擦对于特定风险、服务阶段、用户群体和审查周期是否正当。",
      formula: "J(f, r, s, g, t | E, A)",
      formulaLabel: "正当性取决于摩擦、风险、阶段、群体、时点、证据与可用替代方案。",
      contrasts: [["01", "声称的保护", "该步骤要降低什么风险？它实际增加了多少保护？"], ["02", "实际承受的负担", "设计产生的时间、不确定性、认知要求、延迟或排斥由谁承担？"], ["03", "可修正的证据", "哪些已知、未知或已失效？何时必须重新审查？"]],
    },
    framework: {
      label: "02 · 从证据到状态的框架",
      title: "把设计、机制、负担、结果与判断分开。",
      intro: "BRFF不把声称的目的当作有效性的证明。它先记录设计如何发挥作用、用户如何体验，以及保护端和用户端的结果，之后才赋予暂时状态。",
      layers: [["设计形式", "被评估的具体步骤、默认项、等待、文件、渠道或界面。"], ["声称的机制", "预期产生保护效果的行为或信息路径。"], ["实际负担", "因群体而异的努力、不确定性、延迟、污名或可及性损失。"], ["行为结果", "分别衡量保护端与用户端的后果。"], ["规范状态", "与证据和行动相连、具有期限的决定。"]],
      gatesTitle: "有条件的门槛顺序",
      gates: [["G0", "权限与权利", "在行为权衡之前，先记录法律依据和不可补偿的权利底线。"], ["G1", "功能适配", "检验摩擦是否为特定风险增加保护，而非仅仅看起来谨慎。"], ["G2", "比较适配", "依据预先设定的保护损失界限，在所有重要保护结果上比较低负担替代方案。"], ["G3", "分配适配", "考察谁受益、谁承担负担，以及现行或候选设计是否守住可及性与权利底线。"]],
      note: "BRFF不是加权总分。保护损失界限只适用于保护结果；可及性与权利底线不能被其他收益抵消。",
    },
    states: {
      label: "03 · 可修正状态",
      title: "同样的证据状况不会对称地导向所有状态。",
      intro: "Pass、Fail 与 Unknown 被非对称地映射到四种运行状态。未知不能悄然转化为批准；即使是正面状态，也会到期并需要重新评估。",
      items: [["本审查期内正当", "必要门槛均由充分证据支持。", "保留并持续监测，同时设置失效日期和复审触发条件。"], ["证据不确定", "Gate 0已通过，但一个影响决定的行为门槛仍为Unknown。", "默认应暂停或延期。任何暂时使用都必须同时具备严重的目标风险、每项重要保护结果至少Grade C支持、保护措施、独立批准、证据里程碑和到期日。"], ["可纠正的不适配", "Gate 1通过；最终的Gate 2或G3(f)失败；但仍有可独立检验的保护核心和可在限定时间内完成的修复。", "重新设计、定向调整、提供合理便利或替换失败的交付特征，并重新检验所有受影响门槛。"], ["淤塞（Sludge）", "保护、比较或分配适配失败，且没有可信的纠正路径。", "移除、暂停或替换该摩擦，并记录决定。"]],
      quote: "正当性是一个具有时间索引的状态，而不是附着在行政要求上的永久标签。",
    },
    application: {
      label: "04 · 应用示例",
      title: "测得可及性改善，可能是揭示下一项政策问题，而非终结问题。",
      intro: "文章把BRFF用于SNAP面谈安排，展示如何处理已发表的可及性结果与尚未测量的制度保护效果。",
      items: [["已经知道", "灵活安排在所引用的情境中改善了可及性和参与。"], ["仍然未知", "已发表研究没有估计固定安排是否提供额外的反欺诈或项目完整性保护。"], ["BRFF带来的改变", "不把缺失的保护证据当成“没有损失”，而是转化为明确的检验、保护措施、证据节点和复审期限。"]],
      noteLabel: "解释边界",
      note: "这是证据缺口的演示，并非新的实证估计。文中两份完整记录使用的是假设数值，也不构成对框架的实证验证。",
    },
    limits: {
      label: "05 · 适用范围与边界",
      title: "这是可审计的决策结构，不是自动决策规则。",
      body: "BRFF整理不完整证据应带来的决策后果，但不能取代法律判断、组织能力、测量或公共问责。",
      cards: [["概念性综合", "文章不是系统综述或元分析，也不估计汇总效应。"], ["并非已验证量表", "它不是心理测量工具、因果模型或机械加权指数。"], ["示例不等于证据", "完整记录刻意使用假设数值，不能被视为实证验证。"], ["实施能力很重要", "证据质量、监测、失效规则以及改变服务设计的能力，决定框架能否约束实践。"]],
      takeaway: "目的不能代替表现，未知不能变成批准，正面状态不能在未经更新时永久延续。",
    },
    citation: "Tang K (2026). Justification as a revisable state: a behavioral risk–friction fit framework for digital public services. Frontiers in Behavioral Economics 5:1936872.",
    footer: "正式发表 · Frontiers in Behavioral Economics · CC BY 4.0",
    top: "回到顶部",
  },
} as const;

const anchors = ["question", "framework", "states", "application", "limits"];
const article = "https://doi.org/10.3389/frbhe.2026.1936872";
const publisherPdf = "https://www.frontiersin.org/journals/behavioral-economics/articles/10.3389/frbhe.2026.1936872/pdf";

export default function RiskFrictionFitPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [dark, setDark] = useState(false);
  const t = text[lang];

  useEffect(() => {
    const savedLang = window.localStorage.getItem("kaibo-lang") as Lang | null;
    // Restore persisted UI preferences only after hydration so the static HTML stays deterministic.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedLang && savedLang in text) setLang(savedLang);
    const savedTheme = window.localStorage.getItem("kaibo-theme");
    setDark(savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
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
    <div className="paper-page brff-page">
      <a className="skip-link" href="#paper-content">{t.skip}</a>
      <header className="paper-header">
        <Link className="paper-brand" href="/"><span>KT</span><b>{t.back}</b></Link>
        <nav aria-label={t.chapters}>{anchors.map((anchor, index) => <a href={`#${anchor}`} key={anchor}>{t.nav[index]}</a>)}</nav>
        <div className="paper-actions">
          <div className="language-switcher" role="group" aria-label="Language">
            {(["en", "ja", "zh"] as Lang[]).map((item) => <button className={lang === item ? "active" : ""} key={item} onClick={() => setLang(item)} type="button" aria-pressed={lang === item}>{item === "en" ? "EN" : item === "ja" ? "日本語" : "中文"}</button>)}
          </div>
          <button className="theme-toggle" onClick={() => setDark((value) => !value)} type="button" aria-label={t.theme}>{dark ? "☼" : "◐"}</button>
        </div>
      </header>

      <main id="paper-content">
        <section className="paper-hero brff-hero">
          <div className="brff-hero-grid" aria-hidden="true"><i /><i /><i /><i /></div>
          <div className="paper-hero-number" aria-hidden="true">1936872</div>
          <div className="paper-hero-copy">
            <div className="paper-kicker"><span>{t.kicker}</span><span>{t.status}</span></div>
            <h1>{t.title}</h1>
            {lang !== "en" && <p className="paper-original-title">{englishTitle}</p>}
            <p className="paper-standfirst">{t.standfirst}</p>
            <p className="paper-author">{t.author}</p>
            <div className="paper-hero-actions">
              <a className="button button-primary" href={article} target="_blank" rel="noreferrer">{t.open}<span>↗</span></a>
              <a className="text-link" href={publisherPdf} target="_blank" rel="noreferrer">{t.pdf}<span>↗</span></a>
            </div>
          </div>
          <aside className="paper-fact-grid">{t.facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</aside>
          <a className="paper-scroll" href="#question">{t.scroll}<span>↓</span></a>
        </section>

        <section className="paper-chapter brff-question-chapter" id="question">
          <div className="chapter-heading"><p>{t.question.label}</p><h2>{t.question.title}</h2></div>
          <div className="problem-layout">
            <p className="chapter-lead">{t.question.body}</p>
            <aside className="brff-formula"><strong>{t.question.formula}</strong><p>{t.question.formulaLabel}</p></aside>
          </div>
          <div className="bottleneck-grid brff-contrasts">{t.question.contrasts.map(([n, title, body]) => <article key={n}><span>{n}</span><h4>{title}</h4><p>{body}</p></article>)}</div>
        </section>

        <section className="paper-chapter brff-framework-chapter" id="framework">
          <div className="chapter-heading"><p>{t.framework.label}</p><h2>{t.framework.title}</h2><div className="chapter-intro">{t.framework.intro}</div></div>
          <div className="brff-layer-grid">{t.framework.layers.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <h3 className="subchapter-title">{t.framework.gatesTitle}</h3>
          <div className="brff-gate-flow">{t.framework.gates.map(([code, title, body]) => <article key={code}><span>{code}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <div className="safety-note"><span>i</span><p>{t.framework.note}</p></div>
        </section>

        <section className="paper-chapter brff-states-chapter" id="states">
          <div className="chapter-heading"><p>{t.states.label}</p><h2>{t.states.title}</h2><div className="chapter-intro">{t.states.intro}</div></div>
          <div className="brff-state-grid">{t.states.items.map(([name, trigger, action], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{trigger}</p><strong>{action}</strong></article>)}</div>
          <blockquote className="audit-quote brff-quote">{t.states.quote}</blockquote>
        </section>

        <section className="paper-chapter brff-application-chapter" id="application">
          <div className="chapter-heading"><p>{t.application.label}</p><h2>{t.application.title}</h2><div className="chapter-intro">{t.application.intro}</div></div>
          <div className="brff-application-grid">{t.application.items.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <div className="primary-outcome brff-application-note"><span>{t.application.noteLabel}</span><p>{t.application.note}</p></div>
        </section>

        <section className="paper-chapter principles-chapter" id="limits">
          <div className="chapter-heading"><p>{t.limits.label}</p><h2>{t.limits.title}</h2><div className="chapter-intro">{t.limits.body}</div></div>
          <div className="principle-list brff-limits">{t.limits.cards.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <blockquote className="audit-takeaway brff-takeaway">{t.limits.takeaway}</blockquote>
        </section>

        <section className="paper-citation"><p>{t.citation}</p><div><a href={article} target="_blank" rel="noreferrer">DOI ↗</a><a href={publisherPdf} target="_blank" rel="noreferrer">PDF ↗</a><Link href="/">{t.home} →</Link></div></section>
      </main>
      <footer className="paper-footer"><span>{t.footer}</span><a href="#paper-content">{t.top} ↑</a></footer>
    </div>
  );
}
