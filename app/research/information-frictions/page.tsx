"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "ja" | "zh";

const originalTitle = "Information Frictions, Ethnic Networks, and Part-Time Wage Gaps among Chinese International Students in Japan";
const ssrn = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7087178";

const text = {
  en: {
    back: "Kaibo Tang",
    chapters: "Research chapters",
    theme: "Toggle color theme",
    skip: "Skip to the research",
    nav: ["Question", "Channels", "Survey", "Models", "Identification", "Limits"],
    kicker: "Research design · Labor economics · Information economics",
    status: "Pre-analysis plan · No empirical estimates",
    title: "When job information travels through different networks, do workers see different wages?",
    standfirst: "This research design studies whether Japanese/formal and Chinese/co-ethnic job-search channels expose Chinese international students in Japan to different sets of part-time opportunities—and whether those differences appear in hourly wages.",
    author: "Kaibo Tang · School of Economics, The University of Osaka",
    open: "View or download on SSRN",
    home: "Return to personal site",
    scroll: "Read the design",
    facts: [["Manuscript", "Research design & pre-analysis plan"], ["Population", "Chinese international students in Japan"], ["Outcome", "Log hourly part-time wage"], ["Specifications", "Five pre-specified models"]],
    question: {
      label: "01 · Research question",
      title: "Does the way a job is found shape the wage eventually received?",
      body: "Job-search channels do more than transmit vacancies. They can change search costs, trust, language requirements, and the range of employers a student encounters. The design asks whether these information environments are associated with different part-time wage offers.",
      stat: "02",
      statLabel: "Contrasting information environments are defined before analysis.",
      mechanisms: [["01", "Search friction", "Native-language contacts may make trustworthy job information faster and cheaper to obtain."], ["02", "Opportunity set", "Different channels may reveal different employers, occupations, locations, and wage offers."], ["03", "Labor-market sorting", "Language ability, geography, and job type may jointly shape both channel choice and wages."]],
    },
    channels: {
      label: "02 · Information environments",
      title: "Two channels, one deliberately balanced comparison.",
      intro: "The contrast is not between a “good” and a “bad” network. Co-ethnic networks can provide trust, speed, and protection; formal channels can broaden the searchable market. The empirical question is whether their opportunity sets differ.",
      cards: [["Japanese / formal", "Japanese job platforms, university boards, store notices, and direct applications.", "Broader formal search"], ["Chinese / co-ethnic", "WeChat, Xiaohongshu, Chinese-speaking acquaintances, and ethnic business networks.", "Lower-friction search"], ["Information tax", "A hypothesized hidden wage cost if lower search friction also narrows the set of visible jobs and wage offers.", "Mechanism—not a finding"]],
      note: "“Information tax” is a hypothesis to be tested, not a reported result. The study is designed to avoid stigmatizing Chinese-language or co-ethnic networks.",
    },
    survey: {
      label: "03 · Survey design",
      title: "The unit of analysis is a student–job match.",
      intro: "Eligible respondents are Chinese international students enrolled in Japanese universities, graduate schools, language schools, or vocational schools who have part-time work experience in Japan. The preferred reference is the respondent’s current main part-time job.",
      populationLabel: "Target population",
      population: "Chinese international students with part-time work experience in Japan",
      codingLabel: "Baseline coding",
      coding: "Mixed and other search channels are excluded from the main contrast and restored in alternative-coding checks.",
      variables: [["Outcome", "Log hourly wage", "Hourly earnings in yen, transformed to the natural logarithm."], ["Main exposure", "JapaneseChannel", "1 for Japanese/formal channels; 0 for Chinese/co-ethnic channels."], ["Candidate instrument", "ChineseAreaTime", "Travel time from residence to the nearest Chinese-community or Chinese-supermarket area."], ["Pre-specified controls", "Language, gender & place", "Japanese proficiency, gender, prefecture/city, and distance to the city center."]],
      modules: "Survey modules cover employment, search channels, Japanese ability, location, background, and awareness of job information.",
    },
    models: {
      label: "04 · Pre-analysis ladder",
      title: "Five models separate description, adjustment, identification, and mechanism.",
      intro: "The sequence is fixed in advance so that increasingly demanding claims are not collapsed into a single preferred specification.",
      statusLabel: "Design status",
      levels: [["Raw association", "Bivariate channel–wage relationship with no controls.", "Model 1"], ["Core adjustment", "Adds Japanese proficiency and gender.", "Model 2"], ["Main OLS", "Adds geography and urban centrality; interpreted as associational.", "Model 3"], ["Candidate IV / 2SLS", "Uses ChineseAreaTime to predict Japanese-channel use, subject to first-stage and exclusion diagnostics.", "Model 4"], ["Robustness & mechanism", "Adds commute time, school type, and job type; attenuation after job-type controls is treated as evidence consistent with occupational sorting.", "Model 5"]],
      note: "This version reports the design only. It contains no sample estimates, coefficient signs, significance tests, or causal results.",
    },
    identification: {
      label: "05 · Identification strategy",
      title: "Spatial exposure is a candidate instrument—not a shortcut to causality.",
      intro: "The proposed instrument uses travel time to a Chinese-community or Chinese-supermarket area as a source of variation in access to co-ethnic job information. Every link in that logic is treated as an empirical or substantive assumption.",
      hypothesisLabel: "Pre-specified hypothesis",
      chain: [["01", "Residential proximity"], ["02", "Network exposure"], ["03", "Search-channel choice"], ["04", "Hourly wage"]],
      cards: [["Relevance", "Longer travel time should predict greater use of Japanese/formal channels. The first-stage coefficient and F statistic must be reported."], ["Exclusion restriction", "Travel time may also proxy urban centrality, transit access, rent, and local job density. These alternative pathways make the exclusion restriction contestable."], ["Interpretation rule", "A weak first stage means the IV estimate will not be presented as a headline result; OLS remains explicitly associational."]],
      hypothesis: "The design predicts a Japanese-channel wage premium, but the magnitude, persistence after controls, and any IV estimate remain open empirical questions.",
    },
    limits: {
      label: "06 · Limits & research ethics",
      title: "The strongest version of the study is transparent about what it cannot identify.",
      body: "Cross-sectional data, self-selection into search channels, mixed-channel classification, spatial confounding, and unobserved heterogeneity constrain interpretation. External validity is limited to Chinese international students in Japan.",
      cards: [["Cross-sectional design", "The design cannot establish temporal ordering as cleanly as a randomized or longitudinal study."], ["Channel measurement", "Respondents may use multiple channels, so baseline and alternative coding rules must be reported together."], ["Spatial instrument", "Geographic proximity can affect wages through pathways other than information networks."], ["External validity", "Results should not be generalized beyond the defined student population without further evidence."]],
      ethicsLabel: "Privacy & non-stigmatization",
      ethics: "The survey avoids precise home addresses and unnecessary employer names, separates geography from identifiers, permits skipped questions, aggregates reporting, and states that responses will not be shared with universities, employers, or public authorities.",
      takeaway: "Where a job is found may shape which jobs become visible.",
    },
    citation: "Tang, Kaibo (2026). Information Frictions, Ethnic Networks, and Part-Time Wage Gaps among Chinese International Students in Japan: A Research Design and Pre-Analysis Plan.",
    footer: "Research overview · SSRN 7087178 · Research design only",
    top: "Top",
  },
  ja: {
    back: "唐 楷博",
    chapters: "研究構成",
    theme: "配色を切り替える",
    skip: "研究本文へ移動",
    nav: ["問い", "経路", "調査", "モデル", "識別", "限界"],
    kicker: "研究デザイン · 労働経済学 · 情報の経済学",
    status: "事前分析計画 · 実証推定は未掲載",
    title: "求人情報が異なるネットワークを通るとき、目に入る賃金も変わるのか。",
    standfirst: "日本の中国人留学生を対象に、日本語・公的な求職経路と中国語・同民族ネットワークが、異なるアルバイト機会への接触につながり、それが時給に表れるかを検討する研究デザインです。",
    author: "唐 楷博 · 大阪大学経済学部",
    open: "SSRNで閲覧・ダウンロード",
    home: "個人サイトへ戻る",
    scroll: "研究設計を読む",
    facts: [["原稿", "研究デザイン・事前分析計画"], ["対象", "日本の中国人留学生"], ["主要アウトカム", "アルバイト時給の対数"], ["仕様", "事前に定めた5モデル"]],
    question: {
      label: "01 · 研究課題",
      title: "仕事の見つけ方は、最終的に得る賃金と関係するのか。",
      body: "求職経路は求人を伝えるだけではありません。探索費用、信頼、必要な日本語能力、接触できる雇用主の範囲を変え得ます。本研究は、こうした情報環境の違いがアルバイトの賃金提示と関連するかを問います。",
      stat: "02",
      statLabel: "分析前に、対照的な二つの情報環境を定義します。",
      mechanisms: [["01", "探索摩擦", "母語のつながりは、信頼できる求人情報をより早く低コストで得られる可能性があります。"], ["02", "機会集合", "経路によって、目に入る雇用主・職種・場所・賃金提示が異なる可能性があります。"], ["03", "労働市場での選別", "日本語能力、地理、職種が、経路選択と賃金の双方に関係し得ます。"]],
    },
    channels: {
      label: "02 · 情報環境",
      title: "二つの経路を、優劣を決めつけずに比較する。",
      intro: "「良い」ネットワークと「悪い」ネットワークを比べる設計ではありません。同民族ネットワークは信頼、速さ、保護を提供し得る一方、公的経路は探索できる市場を広げ得ます。検証するのは、その機会集合が異なるかどうかです。",
      cards: [["日本語・公的経路", "日本語求人サイト、大学掲示板、店頭掲示、直接応募。", "より広い公的探索"], ["中国語・同民族経路", "WeChat、小紅書、中国語話者の知人、エスニック・ビジネスのネットワーク。", "摩擦の小さい探索"], ["情報税", "探索摩擦の低下と同時に、目に入る仕事や賃金提示の範囲が狭まる場合に生じ得る、仮説上の隠れた賃金費用。", "メカニズムであり結果ではない"]],
      note: "「情報税」は検証対象の仮説であり、確認済みの結果ではありません。中国語・同民族ネットワークを否定的に描かないことを研究上の原則とします。",
    },
    survey: {
      label: "03 · 調査設計",
      title: "分析単位は、学生とアルバイトの組合せ。",
      intro: "対象は、日本の大学・大学院・日本語学校・専門学校に在籍し、日本でのアルバイト経験を持つ中国人留学生です。原則として、現在の主なアルバイトを回答対象とします。",
      populationLabel: "対象母集団",
      population: "日本でのアルバイト経験を持つ中国人留学生",
      codingLabel: "基準となる符号化",
      coding: "混合・その他の求職経路は主分析の二項比較から除き、別の符号化による頑健性確認で戻します。",
      variables: [["アウトカム", "時給の対数", "円建て時給を自然対数に変換。"], ["主要な説明変数", "JapaneseChannel", "日本語・公的経路なら1、中国語・同民族経路なら0。"], ["候補操作変数", "ChineseAreaTime", "居住地から最寄りの中華街・中国系スーパー地域までの移動時間。"], ["事前指定の統制", "言語・性別・場所", "日本語能力、性別、都道府県／市、都心までの距離。"]],
      modules: "調査票は、就労、求職経路、日本語能力、位置情報、背景属性、求人情報の認知を扱います。",
    },
    models: {
      label: "04 · 事前分析の階段",
      title: "記述、調整、識別、メカニズムを五つのモデルで分ける。",
      intro: "要求水準の異なる主張を一つの好都合な仕様にまとめないため、分析の順序を事前に固定します。",
      statusLabel: "研究設計の状態",
      levels: [["未調整の関連", "統制変数を含まない求職経路と賃金の二変量関係。", "モデル1"], ["基本調整", "日本語能力と性別を追加。", "モデル2"], ["主要OLS", "地理と都市中心性を追加し、関連として解釈。", "モデル3"], ["候補IV / 2SLS", "ChineseAreaTimeで日本語経路の利用を予測。第一段階と除外制約の診断を条件とします。", "モデル4"], ["頑健性・メカニズム", "通勤時間、学校種別、職種を追加。職種追加後の係数縮小は、職業選別と整合的な証拠として扱います。", "モデル5"]],
      note: "この版は研究デザインのみを報告します。標本推定値、係数の符号、有意性検定、因果結果は含まれていません。",
    },
    identification: {
      label: "05 · 識別戦略",
      title: "空間的な接触は候補操作変数であり、因果推論への近道ではない。",
      intro: "中華街・中国系スーパー地域までの移動時間を、同民族の求人情報への接触を変える要因として用います。ただし、その論理の各段階は実証的・実質的な仮定です。",
      hypothesisLabel: "事前に定めた仮説",
      chain: [["01", "居住地からの近さ"], ["02", "ネットワーク接触"], ["03", "求職経路の選択"], ["04", "時給"]],
      cards: [["関連性", "移動時間が長いほど日本語・公的経路を使うと予想します。第一段階係数とF統計量を報告します。"], ["除外制約", "移動時間は都市中心性、交通、家賃、求人密度も代理し得るため、賃金への別経路を排除できるかは争点になります。"], ["解釈ルール", "第一段階が弱ければ、IV推定を主要結果として扱いません。OLSは明示的に関連として解釈します。"]],
      hypothesis: "日本語経路の賃金プレミアムを予測しますが、その大きさ、統制後の持続性、IV推定値はいずれも未解決の実証課題です。",
    },
    limits: {
      label: "06 · 限界と研究倫理",
      title: "識別できないことを明確にするほど、研究設計は強くなる。",
      body: "横断データ、求職経路への自己選択、混合経路の分類、空間的交絡、観測されない異質性が解釈を制限します。外的妥当性は日本の中国人留学生に限定されます。",
      cards: [["横断研究", "無作為化研究や縦断研究ほど明確に時間的順序を確立できません。"], ["経路の測定", "複数経路を使う回答者がいるため、基準と代替の符号化を併記します。"], ["空間的な操作変数", "地理的近接性は情報ネットワーク以外の経路でも賃金に影響し得ます。"], ["外的妥当性", "追加証拠なしに、定義された学生集団以外へ一般化しません。"]],
      ethicsLabel: "プライバシーと非スティグマ化",
      ethics: "正確な住所や不要な雇用主名を収集せず、地理情報を識別子から分離します。回答のスキップ、集計報告、大学・雇用主・行政機関への非共有を明記します。",
      takeaway: "仕事をどこで見つけるかは、どの仕事が見えるかを形づくり得る。",
    },
    citation: "Tang, Kaibo (2026). Information Frictions, Ethnic Networks, and Part-Time Wage Gaps among Chinese International Students in Japan: A Research Design and Pre-Analysis Plan.",
    footer: "研究紹介 · SSRN 7087178 · 研究デザインのみ",
    top: "先頭へ",
  },
  zh: {
    back: "唐楷博",
    chapters: "研究章节",
    theme: "切换明暗模式",
    skip: "跳转到研究正文",
    nav: ["问题", "渠道", "调查", "模型", "识别", "边界"],
    kicker: "研究设计 · 劳动经济学 · 信息经济学",
    status: "预分析计划 · 尚无实证估计",
    title: "当招聘信息经过不同网络传播，劳动者看到的工资也会不同吗？",
    standfirst: "本研究设计考察：日语/正式求职渠道与中文/同族网络，是否会让在日中国留学生接触到不同的兼职机会集合，以及这种差异是否体现在时薪上。",
    author: "唐楷博 · 大阪大学经济学部",
    open: "在 SSRN 查看或下载",
    home: "返回个人网站",
    scroll: "阅读研究设计",
    facts: [["文稿", "研究设计与预分析计划"], ["对象", "在日中国留学生"], ["主要结果变量", "兼职时薪的对数"], ["设定", "五个预先指定模型"]],
    question: {
      label: "01 · 研究问题",
      title: "找到工作的方式，会不会影响最终得到的工资？",
      body: "求职渠道不只是传递职位空缺。它还可能改变搜索成本、信任、语言门槛，以及学生能够接触到的雇主范围。本设计询问：这些信息环境是否与不同的兼职工资报价相关。",
      stat: "02",
      statLabel: "在分析之前，先定义两个对照的信息环境。",
      mechanisms: [["01", "搜索摩擦", "母语关系网络可能让可信的招聘信息更快、更低成本地到达求职者。"], ["02", "机会集合", "不同渠道可能呈现不同的雇主、职业、地点和工资报价。"], ["03", "劳动力市场分流", "日语能力、地理位置和工作类型可能同时影响渠道选择与工资。"]],
    },
    channels: {
      label: "02 · 信息环境",
      title: "比较两类渠道，但不预设谁优谁劣。",
      intro: "这不是“好网络”与“坏网络”的对比。同族网络可以提供信任、速度和保护；正式渠道则可能扩大可搜索的市场。真正需要检验的是，它们所提供的机会集合是否不同。",
      cards: [["日语 / 正式渠道", "日语招聘平台、大学公告栏、店铺告示与直接应聘。", "更广的正式搜索"], ["中文 / 同族渠道", "微信、小红书、中文熟人和族群商业网络。", "更低摩擦的搜索"], ["信息税", "如果较低的搜索摩擦同时缩小了可见职位和工资报价的范围，便可能形成一种假设性的隐性工资成本。", "机制假说，而非研究结果"]],
      note: "“信息税”是待检验的假说，不是已经报告的结果。研究设计明确避免污名化中文或同族网络。",
    },
    survey: {
      label: "03 · 调查设计",
      title: "分析单位是“学生—工作”匹配。",
      intro: "符合条件者为就读于日本大学、大学院、语言学校或专门学校，且拥有日本兼职经验的中国留学生。原则上，以受访者目前的主要兼职为回答对象。",
      populationLabel: "目标总体",
      population: "在日本有兼职经验的中国留学生",
      codingLabel: "基准编码",
      coding: "混合及其他求职渠道不进入主要二元比较，并在替代编码的稳健性检验中重新纳入。",
      variables: [["结果变量", "时薪对数", "以日元计的时薪取自然对数。"], ["核心解释变量", "JapaneseChannel", "日语/正式渠道为1，中文/同族渠道为0。"], ["候选工具变量", "ChineseAreaTime", "从居住地到最近中国社区或中国超市区域的出行时间。"], ["预先指定的控制变量", "语言、性别与地点", "日语能力、性别、都道府县/城市、距市中心距离。"]],
      modules: "问卷模块覆盖就业、求职渠道、日语能力、位置、背景特征和招聘信息认知。",
    },
    models: {
      label: "04 · 预分析阶梯",
      title: "用五个模型区分描述、调整、识别与机制。",
      intro: "分析顺序在事前固定，避免把要求不同的主张压缩为一个最有利的模型设定。",
      statusLabel: "研究设计状态",
      levels: [["原始相关", "不加入控制变量，描述求职渠道与工资的二元关系。", "模型1"], ["核心调整", "加入日语能力与性别。", "模型2"], ["主要OLS", "加入地理和城市中心性；明确作相关性解释。", "模型3"], ["候选IV / 2SLS", "用ChineseAreaTime预测日语渠道使用，但须通过第一阶段与排除限制诊断。", "模型4"], ["稳健性与机制", "加入通勤时间、学校类型和工作类型；加入工作类型后系数减小，可视为与职业分流机制相符的证据。", "模型5"]],
      note: "当前版本只报告研究设计，不包含样本估计、系数方向、显著性检验或因果结论。",
    },
    identification: {
      label: "05 · 识别策略",
      title: "空间接触只是候选工具变量，不是通往因果推断的捷径。",
      intro: "设计拟以到中国社区或中国超市区域的出行时间，作为接触同族招聘信息的变化来源。但这条逻辑链中的每一步都是需要检验或论证的假设。",
      hypothesisLabel: "预先设定的假说",
      chain: [["01", "居住地接近程度"], ["02", "网络接触"], ["03", "求职渠道选择"], ["04", "时薪"]],
      cards: [["相关性", "出行时间越长，预期越可能使用日语/正式渠道。必须报告第一阶段系数与F统计量。"], ["排除限制", "出行时间也可能代理城市中心性、交通、房租与岗位密度，因此排除其他工资路径具有争议。"], ["解释规则", "若第一阶段较弱，IV估计不会作为主要结果；OLS始终明确解释为相关关系。"]],
      hypothesis: "研究设计预测日语渠道工资溢价，但其大小、加入控制后的持续性，以及任何IV估计，都仍是开放的实证问题。",
    },
    limits: {
      label: "06 · 局限与研究伦理",
      title: "对无法识别的内容保持透明，才是更强的研究设计。",
      body: "横截面数据、求职渠道的自我选择、混合渠道分类、空间混杂与不可观测异质性都会限制解释。外部效度仅限于在日中国留学生。",
      cards: [["横截面设计", "它不像随机或纵向研究那样能够清晰建立时间顺序。"], ["渠道测量", "受访者可能同时使用多个渠道，因此必须并列报告基准与替代编码。"], ["空间工具变量", "地理接近程度可能通过信息网络之外的路径影响工资。"], ["外部效度", "没有额外证据时，不应把结果推广到所定义学生群体之外。"]],
      ethicsLabel: "隐私与避免污名化",
      ethics: "问卷不收集精确住址和不必要的雇主名称；地理信息与身份标识分离；允许跳过问题；仅进行汇总报告，并明确回答不会提供给学校、雇主或公共机关。",
      takeaway: "在哪里找到工作，可能决定哪些工作会被看见。",
    },
    citation: "Tang, Kaibo (2026). Information Frictions, Ethnic Networks, and Part-Time Wage Gaps among Chinese International Students in Japan: A Research Design and Pre-Analysis Plan.",
    footer: "研究介绍 · SSRN 7087178 · 仅为研究设计",
    top: "回到顶部",
  },
} as const;

const anchors = ["question", "channels", "survey", "models", "identification", "limits"];

export default function InformationFrictionsPage() {
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
    <div className="paper-page network-page">
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
        <section className="paper-hero network-hero">
          <div className="paper-hero-number" aria-hidden="true">03</div>
          <div className="paper-hero-copy">
            <div className="paper-kicker"><span>{t.kicker}</span><span>{t.status}</span></div>
            <h1>{t.title}</h1>
            {lang !== "en" && <p className="network-original-title">{originalTitle}</p>}
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
          <div className="bottleneck-grid network-mechanisms">{t.question.mechanisms.map(([n, title, body]) => <article key={n}><span>{n}</span><h4>{title}</h4><p>{body}</p></article>)}</div>
        </section>

        <section className="paper-chapter intervention-chapter" id="channels">
          <div className="chapter-heading"><p>{t.channels.label}</p><h2>{t.channels.title}</h2><div className="chapter-intro">{t.channels.intro}</div></div>
          <div className="channel-contrast">{t.channels.cards.map(([title, body, tag], index) => <article className={index === 2 ? "information-tax" : ""} key={title}><span>0{index + 1}</span><p>{tag}</p><h3>{title}</h3><div>{body}</div></article>)}</div>
          <div className="safety-note"><span>i</span><p>{t.channels.note}</p></div>
        </section>

        <section className="paper-chapter survey-chapter" id="survey">
          <div className="chapter-heading"><p>{t.survey.label}</p><h2>{t.survey.title}</h2><div className="chapter-intro">{t.survey.intro}</div></div>
          <div className="survey-summary"><article><span>{t.survey.populationLabel}</span><p>{t.survey.population}</p></article><article><span>{t.survey.codingLabel}</span><p>{t.survey.coding}</p></article></div>
          <div className="variable-grid">{t.survey.variables.map(([label, title, body], index) => <article key={title}><span>0{index + 1} · {label}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <p className="survey-modules">{t.survey.modules}</p>
        </section>

        <section className="paper-chapter intervention-chapter" id="models">
          <div className="chapter-heading"><p>{t.models.label}</p><h2>{t.models.title}</h2><div className="chapter-intro">{t.models.intro}</div></div>
          <div className="audit-ladder model-ladder">{t.models.levels.map(([title, body, tag], index) => <article key={title}><span className="audit-level">0{index + 1}</span><div><p>{tag}</p><h3>{title}</h3><span>{body}</span></div></article>)}</div>
          <div className="primary-outcome design-only"><span>{t.models.statusLabel}</span><p>{t.models.note}</p></div>
        </section>

        <section className="paper-chapter identification-chapter" id="identification">
          <div className="chapter-heading"><p>{t.identification.label}</p><h2>{t.identification.title}</h2><div className="chapter-intro">{t.identification.intro}</div></div>
          <div className="instrument-chain">{t.identification.chain.map(([number, label], index) => <article key={number}><span>{number}</span><strong>{label}</strong>{index < t.identification.chain.length - 1 && <i aria-hidden="true">→</i>}</article>)}</div>
          <div className="identification-grid">{t.identification.cards.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <div className="status-card"><span>{t.identification.hypothesisLabel}</span><p>{t.identification.hypothesis}</p></div>
        </section>

        <section className="paper-chapter principles-chapter" id="limits">
          <div className="chapter-heading"><p>{t.limits.label}</p><h2>{t.limits.title}</h2><div className="chapter-intro">{t.limits.body}</div></div>
          <div className="principle-list network-limits">{t.limits.cards.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <div className="status-card ethics-card"><span>{t.limits.ethicsLabel}</span><p>{t.limits.ethics}</p></div>
          <blockquote className="network-takeaway">{t.limits.takeaway}</blockquote>
        </section>

        <section className="paper-citation"><p>{t.citation}</p><div><a href={ssrn} target="_blank" rel="noreferrer">SSRN ↗</a><a href="/">{t.home} →</a></div></section>
      </main>
      <footer className="paper-footer"><span>{t.footer}</span><a href="#paper-content">{t.top} ↑</a></footer>
    </div>
  );
}
