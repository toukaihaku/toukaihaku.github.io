"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "ja" | "zh";

const text = {
  en: {
    back: "Kaibo Tang",
    chapters: "Teaching page sections",
    theme: "Toggle color theme",
    skip: "Skip to teaching content",
    nav: ["Role", "Courses", "Campus"],
    kicker: "Teaching experience · EJU preparation · Osaka",
    status: "Current part-time role",
    title: "Teaching across language, society, and mathematics.",
    standfirst: "At Chinichi Juku Osaka, I teach three areas for students preparing for the Examination for Japanese University Admission for International Students (EJU): Japanese, Japan and the World, and liberal-arts mathematics.",
    author: "Kaibo Tang · Instructor",
    map: "Open campus in Google Maps",
    home: "Return to personal website",
    scroll: "Explore teaching",
    facts: [["Institution", "Chinichi Juku Osaka"], ["Role", "Part-time instructor"], ["Examination", "EJU preparation"], ["Location", "Honmachi · Osaka"]],
    role: {
      label: "01 · Teaching role",
      title: "Supporting students across three different ways of thinking.",
      body: "My teaching spans language proficiency, social-science knowledge, and quantitative reasoning. The role brings together subjects that international students encounter while preparing for undergraduate admission in Japan.",
      stat: "03",
      statLabel: "EJU subject areas currently taught at the Osaka campus.",
      points: [["01", "Language", "EJU Japanese as a Foreign Language"], ["02", "Society", "Japan and the World · Comprehensive Subjects"], ["03", "Quantitative", "Mathematics Course 1 · Liberal arts"]],
    },
    courses: {
      label: "02 · Courses",
      title: "A compact teaching portfolio for EJU preparation.",
      intro: "Each course represents a distinct part of the entrance-examination pathway, from academic Japanese to social-science understanding and mathematical reasoning.",
      items: [["EJU Japanese", "Japanese as a Foreign Language for students preparing to study at a Japanese university.", "日本語"], ["Japan and the World", "The EJU subject commonly taught as Comprehensive Subjects, covering the social-science portion of the examination.", "総合科目"], ["Liberal-arts mathematics", "EJU Mathematics Course 1 for applicants following a humanities or social-sciences pathway.", "文科数学"]],
      note: "The courses are presented here as a record of my teaching experience; admissions and enrollment information should be confirmed directly with the school.",
    },
    campus: {
      label: "03 · Campus",
      title: "Teaching in central Osaka, close to Honmachi Station.",
      body: "Chinichi Juku Osaka is located in Chuo Ward, Osaka. The school’s official campus information lists the address below.",
      addressLabel: "Campus address",
      address: "3F, Daiichi Juken Midosuji-Honmachi Building, 3-4-7 Minamihonmachi, Chuo-ku, Osaka 541-0054",
      map: "View on Google Maps",
      official: "Official Osaka campus page",
      note: "Current role",
      noteBody: "Part-time instructor teaching EJU Japanese, Japan and the World, and liberal-arts mathematics at Chinichi Juku Osaka.",
    },
    end: "Chinichi Juku Osaka · EJU teaching experience",
    footer: "Teaching profile · Osaka, Japan",
    top: "Top",
  },
  ja: {
    back: "唐 楷博",
    chapters: "教育経験ページ",
    theme: "配色を切り替える",
    skip: "教育経験の本文へ移動",
    nav: ["担当", "科目", "校舎"],
    kicker: "教育経験 · EJU対策 · 大阪",
    status: "現在のアルバイト",
    title: "日本語・総合科目・数学を横断して教える。",
    standfirst: "知日塾大阪校で、日本留学試験（EJU）を受験する学生に日本語、総合科目、文科数学を教えています。",
    author: "唐 楷博 · 講師",
    map: "Google Mapsで校舎を見る",
    home: "個人サイトへ戻る",
    scroll: "教育経験を見る",
    facts: [["勤務先", "知日塾 大阪校"], ["役割", "アルバイト講師"], ["試験", "日本留学試験（EJU）"], ["場所", "大阪 · 本町"]],
    role: {
      label: "01 · 担当",
      title: "三つの異なる思考領域を横断して、学習を支える。",
      body: "言語運用、社会科学の知識、数量的な思考という異なる領域を担当しています。日本の大学進学を目指す留学生のEJU対策に関わる教育経験です。",
      stat: "03",
      statLabel: "大阪校で現在担当しているEJU科目領域。",
      points: [["01", "言語", "EJU日本語"], ["02", "社会", "EJU総合科目"], ["03", "数量", "EJU文科数学 · 数学コース1"]],
    },
    courses: {
      label: "02 · 担当科目",
      title: "EJU対策を構成する三つの科目。",
      intro: "アカデミックな日本語、社会科学の理解、数学的思考という、大学進学に向けた異なる領域を担当しています。",
      items: [["EJU日本語", "日本の大学で学ぶことを目指す留学生向けの日本語科目です。", "日本語"], ["EJU総合科目", "日本留学試験の社会科学領域に対応する総合科目です。", "総合科目"], ["文科数学", "文系・社会科学系の志願者を主な対象とするEJU数学コース1です。", "文科数学"]],
      note: "本ページは私の教育経験を紹介するものです。入塾・受講に関する情報は、知日塾へ直接ご確認ください。",
    },
    campus: {
      label: "03 · 大阪校",
      title: "大阪の中心部、本町駅近くの校舎。",
      body: "知日塾大阪校は大阪市中央区にあり、公式校舎案内には以下の所在地が掲載されています。",
      addressLabel: "所在地",
      address: "〒541-0054 大阪府大阪市中央区南本町3丁目4-7 第一住建御堂筋本町ビル3F",
      map: "Google Mapsで見る",
      official: "大阪校の公式ページ",
      note: "現在の担当",
      noteBody: "知日塾大阪校のアルバイト講師として、EJU日本語、総合科目、文科数学を担当しています。",
    },
    end: "知日塾 大阪校 · EJU教育経験",
    footer: "教育経験 · 大阪",
    top: "先頭へ",
  },
  zh: {
    back: "唐楷博",
    chapters: "教学经历页面",
    theme: "切换明暗模式",
    skip: "跳转到教学内容",
    nav: ["职责", "课程", "校区"],
    kicker: "教学经历 · EJU备考 · 大阪",
    status: "当前兼职工作",
    title: "跨越语言、社会与数学的教学。",
    standfirst: "我在知日塾大阪校为准备日本留学试验（EJU）的学生教授日语、综合科目与文科数学。",
    author: "唐楷博 · 讲师",
    map: "在 Google Maps 查看校区",
    home: "返回个人网站",
    scroll: "浏览教学经历",
    facts: [["任职机构", "知日塾大阪校"], ["角色", "兼职讲师"], ["考试", "日本留学试验（EJU）"], ["地点", "大阪 · 本町"]],
    role: {
      label: "01 · 教学职责",
      title: "连接三种不同的思考方式，支持学生备考。",
      body: "我的教学涵盖语言能力、社会科学知识与数量推理，面向准备进入日本大学本科阶段学习的留学生。",
      stat: "03",
      statLabel: "目前在大阪校教授的EJU科目领域。",
      points: [["01", "语言", "EJU日语"], ["02", "社会", "EJU综合科目"], ["03", "数量", "EJU文科数学 · 数学Course 1"]],
    },
    courses: {
      label: "02 · 教授课程",
      title: "构成EJU备考的三个科目。",
      intro: "课程分别对应学术日语、社会科学理解与数学推理，是大学升学准备中的不同能力模块。",
      items: [["EJU日语", "面向计划进入日本大学学习的留学生的日语科目。", "日本語"], ["EJU综合科目", "对应日本留学试验社会科学部分的综合科目。", "総合科目"], ["文科数学", "主要面向文科与社会科学方向申请者的EJU数学Course 1。", "文科数学"]],
      note: "本页面用于介绍我的教学经历。入学与课程报名信息请直接向知日塾确认。",
    },
    campus: {
      label: "03 · 大阪校",
      title: "位于大阪市中心、本町站附近的校区。",
      body: "知日塾大阪校位于大阪市中央区，学校官方校区信息列出的地址如下。",
      addressLabel: "校区地址",
      address: "〒541-0054 大阪府大阪市中央区南本町3丁目4-7 第一住建御堂筋本町ビル3F",
      map: "在 Google Maps 查看",
      official: "大阪校官方网站",
      note: "当前职责",
      noteBody: "作为知日塾大阪校兼职讲师，教授EJU日语、综合科目与文科数学。",
    },
    end: "知日塾大阪校 · EJU教学经历",
    footer: "教学经历 · 日本大阪",
    top: "回到顶部",
  },
} as const;

const anchors = ["role", "courses", "campus"];
const mapUrl = "https://maps.app.goo.gl/uZMq1k3jL5CSSRwF9?g_st=ic";
const schoolUrl = "https://chinichi-edu.jp/xiaoquDetail/osaka.html";

export default function ChinichiTeachingPage() {
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
    <div className="paper-page teaching-page">
      <a className="skip-link" href="#teaching-content">{t.skip}</a>
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

      <main id="teaching-content">
        <section className="paper-hero teaching-hero">
          <div className="paper-hero-number" aria-hidden="true">EJU</div>
          <div className="paper-hero-copy">
            <div className="paper-kicker"><span>{t.kicker}</span><span>{t.status}</span></div>
            <h1>{t.title}</h1>
            <p className="paper-standfirst">{t.standfirst}</p>
            <p className="paper-author">{t.author}</p>
            <div className="paper-hero-actions"><a className="button button-primary" href={mapUrl} target="_blank" rel="noreferrer">{t.map}<span>↗</span></a><a className="text-link" href="/">{t.home}<span>←</span></a></div>
          </div>
          <aside className="paper-fact-grid">{t.facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</aside>
          <a className="paper-scroll" href="#role">{t.scroll}<span>↓</span></a>
        </section>

        <section className="paper-chapter problem-chapter" id="role">
          <div className="chapter-heading"><p>{t.role.label}</p><h2>{t.role.title}</h2></div>
          <div className="problem-layout"><p className="chapter-lead">{t.role.body}</p><aside className="evidence-stat"><strong>{t.role.stat}</strong><p>{t.role.statLabel}</p></aside></div>
          <div className="bottleneck-grid teaching-domains">{t.role.points.map(([n, title, body]) => <article key={n}><span>{n}</span><h4>{title}</h4><p>{body}</p></article>)}</div>
        </section>

        <section className="paper-chapter intervention-chapter" id="courses">
          <div className="chapter-heading"><p>{t.courses.label}</p><h2>{t.courses.title}</h2><div className="chapter-intro">{t.courses.intro}</div></div>
          <div className="touchpoint-flow teaching-course-flow">{t.courses.items.map(([title, body, subject], index) => <article key={title}><span className="touchpoint-number">0{index + 1}</span><p className="touchpoint-mechanism">{subject}</p><h3>{title}</h3><p>{body}</p></article>)}</div>
          <div className="safety-note"><span>i</span><p>{t.courses.note}</p></div>
        </section>

        <section className="paper-chapter teaching-campus" id="campus">
          <div className="chapter-heading"><p>{t.campus.label}</p><h2>{t.campus.title}</h2><div className="chapter-intro">{t.campus.body}</div></div>
          <div className="teaching-campus-grid">
            <div className="teaching-address"><span>{t.campus.addressLabel}</span><p>{t.campus.address}</p><div><a href={mapUrl} target="_blank" rel="noreferrer">{t.campus.map} ↗</a><a href={schoolUrl} target="_blank" rel="noreferrer">{t.campus.official} ↗</a></div></div>
            <div className="status-card"><span>{t.campus.note}</span><p>{t.campus.noteBody}</p></div>
          </div>
        </section>

        <section className="paper-citation teaching-endcap"><p>{t.end}</p><div><a href={mapUrl} target="_blank" rel="noreferrer">Google Maps ↗</a><a href="/">{t.home} →</a></div></section>
      </main>
      <footer className="paper-footer"><span>{t.footer}</span><a href="#teaching-content">{t.top} ↑</a></footer>
    </div>
  );
}
