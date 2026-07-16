"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "ja" | "zh";

const text = {
  en: {
    back: "Kaibo Tang",
    chapters: "Research chapters",
    theme: "Toggle color theme",
    skip: "Skip to research content",
    nav: ["Question", "Audit", "Evidence", "Choice", "Limits"],
    kicker: "Working paper · Behavioral forecasting · Decision analysis",
    status: "Retrospective fixed-archive audit",
    title: "When a forecast gets the direction right, how much has it actually told us?",
    standfirst: "This paper audits archived GPT-4 forecasts against deliberately simple baselines, then asks whether forecast rankings improve choices among behavioral interventions once comparator identity and winner uncertainty are made explicit.",
    author: "Kaibo Tang · School of Economics, The University of Osaka",
    open: "View or download on SSRN",
    home: "Return to personal website",
    scroll: "Explore the audit",
    facts: [["Archive", "Fixed, versioned third-party forecasts"], ["Matched frames", "12 contrasts · 4 topics"], ["Choice archive", "51 outcomes · 8 study clusters"], ["JEL", "C44 · C52 · C53 · D91"]],
    question: {
      label: "01 · The question",
      title: "Direction is only the first rung of useful forecasting.",
      body: "A sign score rewards an arbitrarily small positive forecast exactly as it rewards a well-calibrated positive forecast. But intervention choice often depends on magnitude, variation across contexts, and which option is best—not merely which way an average effect points.",
      stat: "12/12",
      statLabel: "Both archived GPT-4 and a vanishingly small positive rule matched every realized point-estimate sign in the matched-frame module.",
      thresholds: [["01", "Direction", "Does the forecast identify the realized sign?"], ["02", "Calibration", "Is its magnitude close, and does it recover contextual variation?"], ["03", "Decision", "Does its ranking leave less opportunity on the table?"]],
    },
    audit: {
      label: "02 · Information audit",
      title: "Credit a forecast only for information beyond a weaker rule.",
      intro: "The first module uses a nested ladder. Each rung adds a specific type of information, making the evaluation threshold visible rather than burying it in a single score.",
      levels: [["Zero effect", "No direction and no magnitude.", "Baseline"], ["Direction +ε", "The realized common sign, with magnitude approaching zero.", "Direction"], ["LOTO common effect", "A topic-held-out empirical base rate, without within-topic ordering.", "Magnitude"], ["Archived forecast", "Potential topic- and outcome-specific deviations.", "Context"]],
      note: "The +ε rule is a diagnostic constructed from the realized common orientation—not a prospective theory-based forecast.",
    },
    evidence: {
      label: "03 · Matched-frame evidence",
      title: "Perfect directional agreement concealed substantial differences in error.",
      intro: "The strict sample contains four topics crossed with anger, seriousness, and worry. Forecast values and randomized outcomes were hidden during the material-equivalence screen.",
      metrics: [["GPT-4", "0.132", "Mean absolute error"], ["Direction +ε", "0.086", "Mean absolute error"], ["LOTO common effect", "0.038", "Mean absolute error"]],
      findingTitle: "Contextual ordering",
      finding: "GPT-4 did not recover the observed ordering of the four topics: its largest forecasted topic mean corresponded to the smallest observed mean, while its smallest forecasted mean corresponded to the largest observed mean.",
      interpretation: "In this archive, recognizing a familiar direction was not evidence of incremental quantitative information.",
    },
    choice: {
      label: "04 · Intervention choice",
      title: "A separate archive asks what each ranking would have selected.",
      intro: "For 51 outcomes in eight study clusters, every rule is evaluated inside the same focal feasible sets. Regret is normalized so that zero is the draw-specific feasible oracle and one is uniform random choice.",
      random: "Uniform random benchmark",
      rules: [["Mean individual-expert", "1.039"], ["Matched-set crowd mean", "0.988"], ["Expert + GPT-4 equal rank", "0.878"], ["Crowd + GPT-4 equal rank", "0.915"], ["GPT-4", "0.755"]],
      result: "GPT-4 had the lowest posterior-mean regret in this fixed archive. Pairwise posterior comparisons, however, did not support lower regret for either equal-rank combination than for GPT-4 alone.",
      adjustmentLabel: "Winner-selection adjustment",
      adjustment: "Recomputing the latent feasible winner in every posterior draw raised GPT-4 regret from the observed-winner plug-in value of 0.651 to 0.755, tempering the most favorable plug-in result.",
    },
    limits: {
      label: "05 · Interpretation",
      title: "What this audit does—and does not—establish.",
      body: "The contribution is procedural: subtract achievements available to simple rules, identify the expert comparator precisely, and evaluate rankings against a noise-aware feasible oracle.",
      cards: [["Fixed archive", "The intervals condition on these archived forecasts, outcomes, and specified posterior models; they are not guarantees for future models or studies."], ["No human–AI synergy claim", "Equal-rank combinations are analytic constructions, not observed expert deliberation or randomized advice uptake."], ["No welfare claim", "The archive lacks intervention costs, an outside option, distributional consequences, and a social welfare function."], ["No autonomous policy claim", "The analysis evaluates offline screening among archived arms, not whether any forecast-guided intervention should be deployed."]],
      takeaway: "Directional accuracy is not the same as a useful forecast.",
    },
    citation: "Tang, Kaibo (2026). Beyond Directional Accuracy: Auditing Archived GPT-4 Forecasts for Behavioral Intervention Choice.",
    footer: "Research overview · SSRN 7127120 · JEL C44, C52, C53, D91",
    top: "Top",
  },
  ja: {
    back: "唐 楷博",
    chapters: "研究構成",
    theme: "配色を切り替える",
    skip: "研究本文へ移動",
    nav: ["問い", "監査", "証拠", "選択", "限界"],
    kicker: "ワーキングペーパー · 行動予測 · 意思決定分析",
    status: "固定アーカイブの回顧的監査",
    title: "予測の方向が当たったとき、実際にはどれだけの情報が得られたのか。",
    standfirst: "保存済みGPT-4予測を意図的に単純な基準と比較し、比較対象と「真の勝者」の不確実性を明示した上で、行動介入の選択に予測順位が役立つかを検証します。",
    author: "唐 楷博 · 大阪大学経済学部",
    open: "SSRNで閲覧・ダウンロード",
    home: "個人サイトへ戻る",
    scroll: "監査を読む",
    facts: [["資料", "固定・版管理された第三者予測"], ["フレーム比較", "12コントラスト · 4テーマ"], ["選択アーカイブ", "51アウトカム · 8研究クラスター"], ["JEL", "C44 · C52 · C53 · D91"]],
    question: {
      label: "01 · 研究課題",
      title: "方向は、有用な予測に至る最初の一段にすぎない。",
      body: "符号の評価では、限りなく小さい正の予測も、適切に較正された正の予測も同じ得点になります。しかし介入選択では、効果の大きさ、文脈間の差、どの選択肢が最善かが重要です。",
      stat: "12/12",
      statLabel: "保存済みGPT-4と限りなく小さい正のルールは、フレーム比較における全ての点推定の符号を一致させました。",
      thresholds: [["01", "方向", "実現した符号を当てたか。"], ["02", "較正", "大きさは近く、文脈差を捉えたか。"], ["03", "意思決定", "順位は機会損失を減らしたか。"]],
    },
    audit: {
      label: "02 · 情報監査",
      title: "より弱いルールを超えた情報だけを評価する。",
      intro: "第1モジュールでは情報を段階化します。各段階が追加する情報を限定し、評価基準を一つのスコアの中に隠しません。",
      levels: [["ゼロ効果", "方向も大きさも含まない。", "基準"], ["方向 +ε", "実現した共通符号のみを与え、大きさはゼロに近づける。", "方向"], ["LOTO共通効果", "他テーマから学ぶ経験的基準。テーマ内順位は含まない。", "大きさ"], ["保存済み予測", "テーマ・アウトカム固有の差を含み得る。", "文脈"]],
      note: "+εルールは実現後の共通方向から作る診断用基準であり、事前の理論予測ではありません。",
    },
    evidence: {
      label: "03 · フレーム比較の結果",
      title: "完全な方向一致の背後で、誤差には大きな差があった。",
      intro: "厳格なサンプルは4テーマと、怒り・深刻さ・心配の3指標から構成されます。素材の同等性判定では予測値と実験結果を非表示にしました。",
      metrics: [["GPT-4", "0.132", "平均絶対誤差"], ["方向 +ε", "0.086", "平均絶対誤差"], ["LOTO共通効果", "0.038", "平均絶対誤差"]],
      findingTitle: "文脈順位",
      finding: "GPT-4は4テーマの観測順位を再現しませんでした。予測が最大のテーマは観測平均が最小で、予測が最小のテーマは観測平均が最大でした。",
      interpretation: "このアーカイブでは、よく知られた方向を認識することは、追加的な数量情報の証拠ではありませんでした。",
    },
    choice: {
      label: "04 · 介入選択",
      title: "別のアーカイブで、各順位が何を選ぶかを検証する。",
      intro: "8研究クラスター・51アウトカムについて、全ルールを同一の実行可能集合で評価します。正規化後悔値は、0が各ドローの実行可能オラクル、1が一様ランダム選択です。",
      random: "一様ランダム基準",
      rules: [["平均個人専門家", "1.039"], ["同一集合クラウド平均", "0.988"], ["専門家 + GPT-4 等順位", "0.878"], ["クラウド + GPT-4 等順位", "0.915"], ["GPT-4", "0.755"]],
      result: "この固定アーカイブではGPT-4の事後平均後悔値が最小でした。ただしペア比較は、どちらの等順位組合せもGPT-4単独より後悔値が低いことを支持しませんでした。",
      adjustmentLabel: "勝者選択の調整",
      adjustment: "各事後ドローで潜在的な最良介入を再計算すると、GPT-4の後悔値は観測勝者を使う0.651から0.755へ上昇し、最も有利な見かけの結果が緩和されました。",
    },
    limits: {
      label: "05 · 解釈",
      title: "この監査が示すこと、示さないこと。",
      body: "貢献は手続的です。単純ルールでも達成できる部分を差し引き、専門家比較を正確に定義し、ノイズを考慮した実行可能オラクルで順位を評価します。",
      cards: [["固定アーカイブ", "区間は保存済み資料と指定モデルに条件づけられ、将来のモデルや研究を保証しません。"], ["人間とAIの相乗効果ではない", "等順位の組合せは分析上の構成であり、専門家の協議やAI助言の受容を観察したものではありません。"], ["厚生評価ではない", "介入費用、非介入の選択肢、分配効果、社会厚生関数はアーカイブに含まれません。"], ["自動政策選択ではない", "保存済み介入候補のオフライン選別を評価するもので、導入の是非を決めるものではありません。"]],
      takeaway: "方向の正しさは、有用な予測と同じではない。",
    },
    citation: "Tang, Kaibo (2026). Beyond Directional Accuracy: Auditing Archived GPT-4 Forecasts for Behavioral Intervention Choice.",
    footer: "研究紹介 · SSRN 7127120 · JEL C44, C52, C53, D91",
    top: "先頭へ",
  },
  zh: {
    back: "唐楷博",
    chapters: "研究章节",
    theme: "切换明暗模式",
    skip: "跳转到研究正文",
    nav: ["问题", "审计", "证据", "选择", "边界"],
    kicker: "工作论文 · 行为预测 · 决策分析",
    status: "固定档案的回顾性审计",
    title: "当预测方向正确时，它究竟提供了多少信息？",
    standfirst: "本文将存档GPT-4预测与有意设置的简单基准进行比较，并在明确比较对象与“赢家”不确定性之后，考察预测排序能否改善行为干预选择。",
    author: "唐楷博 · 大阪大学经济学部",
    open: "在 SSRN 查看或下载",
    home: "返回个人网站",
    scroll: "浏览研究",
    facts: [["资料", "固定、版本化的第三方预测档案"], ["框架比较", "12个对比 · 4个主题"], ["选择档案", "51个结果 · 8个研究组"], ["JEL", "C44 · C52 · C53 · D91"]],
    question: {
      label: "01 · 研究问题",
      title: "方向只是有用预测的第一层。",
      body: "在符号评分中，一个无限接近于零的正向预测与一个校准良好的正向预测得分相同。但干预选择通常取决于效应大小、不同情境间的变化，以及哪个选项真正更优。",
      stat: "12/12",
      statLabel: "在框架比较模块中，存档GPT-4与无限接近于零的正向规则都匹配了全部已实现点估计的方向。",
      thresholds: [["01", "方向", "预测是否判断出已实现效应的符号？"], ["02", "校准", "数值是否接近，并能否识别情境差异？"], ["03", "决策", "该排序是否减少了可避免的机会损失？"]],
    },
    audit: {
      label: "02 · 信息审计",
      title: "只把超出更弱规则的部分计为预测信息。",
      intro: "第一模块建立逐层增强的信息阶梯。每一层只增加一种信息，使评价门槛保持清晰，而不是被压缩进单一分数。",
      levels: [["零效应", "不包含方向或大小。", "基准"], ["方向 +ε", "赋予已实现的共同符号，预测大小趋近于零。", "方向"], ["留一主题共同效应", "从其他主题学习经验基准，但不包含主题内排序。", "大小"], ["存档预测", "可能包含主题和结果层面的特定偏差。", "情境"]],
      note: "+ε规则依据已实现的共同方向构造，仅用于诊断，并非事前的理论预测。",
    },
    evidence: {
      label: "03 · 框架比较证据",
      title: "完美的方向一致掩盖了显著的误差差异。",
      intro: "严格样本由4个主题与愤怒、严重性、担忧3项结果交叉组成。判断材料是否等价时，预测值和随机实验结果均被隐藏。",
      metrics: [["GPT-4", "0.132", "平均绝对误差"], ["方向 +ε", "0.086", "平均绝对误差"], ["留一主题共同效应", "0.038", "平均绝对误差"]],
      findingTitle: "情境排序",
      finding: "GPT-4未能复现4个主题的实际排序：预测均值最大的主题对应最小的实际均值，而预测最小的主题对应最大的实际均值。",
      interpretation: "在这份档案中，识别熟悉的方向并不能证明预测提供了增量性的数量信息。",
    },
    choice: {
      label: "04 · 干预选择",
      title: "另一份档案考察不同排序实际会选择什么。",
      intro: "针对8个研究组中的51个结果，所有规则都在相同的可选集合内评价。标准化后悔值中，0代表每次抽样中的可行最优选择，1代表均匀随机选择。",
      random: "均匀随机基准",
      rules: [["平均个体专家", "1.039"], ["匹配集合专家均值", "0.988"], ["专家 + GPT-4 等权排序", "0.878"], ["专家均值 + GPT-4 等权排序", "0.915"], ["GPT-4", "0.755"]],
      result: "在这份固定档案中，GPT-4的后验平均后悔值最低。但成对后验比较并不支持任一等权组合的后悔值低于GPT-4单独排序。",
      adjustmentLabel: "赢家选择调整",
      adjustment: "在每次后验抽样中重新确定潜在的可行最优干预后，GPT-4后悔值从使用观察赢家的0.651上升到0.755，从而削弱了最有利的代入式结果。",
    },
    limits: {
      label: "05 · 解释边界",
      title: "这项审计说明了什么，又没有说明什么。",
      body: "本文的贡献是评价程序：扣除简单规则已经能实现的成绩，准确界定专家比较对象，并使用考虑噪声的可行最优基准评估排序。",
      cards: [["固定档案", "区间以现有预测、结果和指定后验模型为条件，不构成对未来模型或研究的保证。"], ["不证明人机协同", "等权排序组合是分析构造，并非对专家讨论或接受AI建议的随机观察。"], ["不构成福利判断", "档案不包含干预成本、不干预选项、分配影响或社会福利函数。"], ["不支持自动政策选择", "研究评价存档候选干预的离线筛选，并不决定某项预测引导的干预是否应当实施。"]],
      takeaway: "方向准确性并不等同于有用的预测。",
    },
    citation: "Tang, Kaibo (2026). Beyond Directional Accuracy: Auditing Archived GPT-4 Forecasts for Behavioral Intervention Choice.",
    footer: "研究介绍 · SSRN 7127120 · JEL C44, C52, C53, D91",
    top: "回到顶部",
  },
} as const;

const anchors = ["question", "audit", "evidence", "choice", "limits"];
const ssrn = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7127120";

export default function ForecastAuditPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [dark, setDark] = useState(false);
  const t = text[lang];

  useEffect(() => {
    const savedLang = window.localStorage.getItem("kaibo-lang") as Lang | null;
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
    <div className="paper-page audit-page">
      <a className="skip-link" href="#paper-content">{t.skip}</a>
      <header className="paper-header">
        <a className="paper-brand" href="/"><span>KT</span><b>{t.back}</b></a>
        <nav aria-label={t.chapters}>{anchors.map((anchor, index) => <a href={`#${anchor}`} key={anchor}>{t.nav[index]}</a>)}</nav>
        <div className="paper-actions">
          <div className="language-switcher" role="group" aria-label="Language">
            {(["en", "ja", "zh"] as Lang[]).map((item) => <button className={lang === item ? "active" : ""} key={item} onClick={() => setLang(item)} type="button" aria-pressed={lang === item}>{item === "en" ? "EN" : item === "ja" ? "日本語" : "中文"}</button>)}
          </div>
          <button className="theme-toggle" onClick={() => setDark((value) => !value)} type="button" aria-label={t.theme}>{dark ? "☼" : "◐"}</button>
        </div>
      </header>

      <main id="paper-content">
        <section className="paper-hero audit-hero">
          <div className="paper-hero-number" aria-hidden="true">7127120</div>
          <div className="paper-hero-copy">
            <div className="paper-kicker"><span>{t.kicker}</span><span>{t.status}</span></div>
            <h1>{t.title}</h1>
            <p className="paper-standfirst">{t.standfirst}</p>
            <p className="paper-author">{t.author}</p>
            <div className="paper-hero-actions"><a className="button button-primary" href={ssrn} target="_blank" rel="noreferrer">{t.open}<span>↗</span></a><a className="text-link" href="/">{t.home}<span>←</span></a></div>
          </div>
          <aside className="paper-fact-grid">{t.facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</aside>
          <a className="paper-scroll" href="#question">{t.scroll}<span>↓</span></a>
        </section>

        <section className="paper-chapter problem-chapter" id="question">
          <div className="chapter-heading"><p>{t.question.label}</p><h2>{t.question.title}</h2></div>
          <div className="problem-layout"><p className="chapter-lead">{t.question.body}</p><aside className="evidence-stat"><strong>{t.question.stat}</strong><p>{t.question.statLabel}</p></aside></div>
          <div className="bottleneck-grid audit-thresholds">{t.question.thresholds.map(([n, title, body]) => <article key={n}><span>{n}</span><h4>{title}</h4><p>{body}</p></article>)}</div>
        </section>

        <section className="paper-chapter intervention-chapter" id="audit">
          <div className="chapter-heading"><p>{t.audit.label}</p><h2>{t.audit.title}</h2><div className="chapter-intro">{t.audit.intro}</div></div>
          <div className="audit-ladder">{t.audit.levels.map(([title, body, tag], index) => <article key={title}><span className="audit-level">0{index}</span><div><p>{tag}</p><h3>{title}</h3><span>{body}</span></div></article>)}</div>
          <div className="safety-note"><span>i</span><p>{t.audit.note}</p></div>
        </section>

        <section className="paper-chapter audit-evidence-chapter" id="evidence">
          <div className="chapter-heading"><p>{t.evidence.label}</p><h2>{t.evidence.title}</h2><div className="chapter-intro">{t.evidence.intro}</div></div>
          <div className="audit-metrics">{t.evidence.metrics.map(([name, value, label]) => <article key={name}><span>{name}</span><strong>{value}</strong><p>{label}</p></article>)}</div>
          <div className="audit-finding"><span>{t.evidence.findingTitle}</span><p>{t.evidence.finding}</p></div>
          <blockquote className="audit-quote">{t.evidence.interpretation}</blockquote>
        </section>

        <section className="paper-chapter outcomes-chapter" id="choice">
          <div className="chapter-heading"><p>{t.choice.label}</p><h2>{t.choice.title}</h2><div className="chapter-intro">{t.choice.intro}</div></div>
          <div className="regret-panel"><div className="regret-benchmark"><span>1.000</span><p>{t.choice.random}</p></div>{t.choice.rules.map(([name, value]) => <article key={name}><div><span>{name}</span><strong>{value}</strong></div><i style={{ width: `${Math.min(Number(value) / 1.15 * 100, 100)}%` }} /></article>)}</div>
          <div className="primary-outcome audit-result"><span>Fixed-archive result</span><p>{t.choice.result}</p></div>
          <div className="status-card"><span>{t.choice.adjustmentLabel}</span><p>{t.choice.adjustment}</p></div>
        </section>

        <section className="paper-chapter principles-chapter" id="limits">
          <div className="chapter-heading"><p>{t.limits.label}</p><h2>{t.limits.title}</h2><div className="chapter-intro">{t.limits.body}</div></div>
          <div className="principle-list audit-limits">{t.limits.cards.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <blockquote className="audit-takeaway">{t.limits.takeaway}</blockquote>
        </section>

        <section className="paper-citation"><p>{t.citation}</p><div><a href={ssrn} target="_blank" rel="noreferrer">SSRN ↗</a><a href="/">{t.home} →</a></div></section>
      </main>
      <footer className="paper-footer"><span>{t.footer}</span><a href="#paper-content">{t.top} ↑</a></footer>
    </div>
  );
}
