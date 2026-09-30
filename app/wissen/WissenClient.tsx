'use client';

import { useMemo, useState } from 'react';
import { glossaryEntries, type GlossaryEntry } from './data/glossary';
import { processQuestions, responsibilityQuestions } from './data/questions';
import { magazineItems } from './data/magazine';
import styles from './page.module.css';

type Format = 'Lesen' | 'Sehen' | 'Hören' | 'Kurz erklärt';
const formats: Array<{ title: Format; description: string; tone: 'lesen' | 'sehen' | 'hoeren' | 'kompakt'; image: string }> = [
  { title: 'Lesen', description: 'Texte & Einordnung', tone: 'lesen', image: '/images/wissen/wissen-magazin-lesen.png' },
  { title: 'Sehen', description: 'Videos', tone: 'sehen', image: '/images/wissen/wissen-magazin-sehen.png' },
  { title: 'Hören', description: 'Gespräche & Gedanken', tone: 'hoeren', image: '/images/wissen/wissen-magazin-hoeren.png' },
  { title: 'Kurz erklärt', description: 'LOVINU KOMPAKT', tone: 'kompakt', image: '/images/wissen/wissen-magazin-kurz-erklaert.png' },
];

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  return <details className={styles.accordion}><summary>{title}<span>+</span></summary><div>{children}</div></details>;
}

function matchesFormat(type: string, filter: Format | 'Alle') {
  if (filter === 'Alle') return true;
  if (filter === 'Sehen') return type.startsWith('Video');
  return type.toLowerCase().startsWith(filter.toLowerCase());
}

function GlossaryDetail({ entry }: { entry: GlossaryEntry }) {
  return <aside className={styles.glossaryExample}><span className="eyebrow">GLOSSAR</span><h3>{entry.term}</h3>{entry.summary ? <><p>{entry.summary}</p>{entry.detail && <p>{entry.detail}</p>}{entry.relevance && <><strong>Warum kann das für mich relevant sein?</strong><p>{entry.relevance}</p></>}</> : <p>Dieser Begriff wird redaktionell vorbereitet.</p>}</aside>;
}

export default function WissenClient() {
  const [query, setQuery] = useState('');
  const [letter, setLetter] = useState('B');
  const [selectedTerm, setSelectedTerm] = useState(glossaryEntries.find((entry) => entry.term.startsWith('B')) ?? glossaryEntries[0]);
  const [filter, setFilter] = useState<Format | 'Alle'>('Alle');
  const [selectedMagazineItem, setSelectedMagazineItem] = useState<(typeof magazineItems)[number] | null>(null);
  const terms = useMemo(() => glossaryEntries.filter((entry) => (
    query ? entry.term.toLowerCase().includes(query.toLowerCase()) : entry.term.toUpperCase().startsWith(letter)
  )), [query, letter]);

  function chooseLetter(nextLetter: string) {
    setLetter(nextLetter);
    setQuery('');
    const next = glossaryEntries.find((entry) => entry.term.toUpperCase().startsWith(nextLetter));
    if (next) setSelectedTerm(next);
  }

  function searchTerms(nextQuery: string) {
    setQuery(nextQuery);
    const next = glossaryEntries.find((entry) => entry.term.toLowerCase().includes(nextQuery.toLowerCase()));
    if (next) setSelectedTerm(next);
  }

  return <>
    <section className={styles.glossary} id="glossar"><div className={styles.glossaryGrid}>
      <div><span className="eyebrow">GLOSSAR</span><h2>Longevity. Von A bis Z verständlich.</h2><p>Was bedeutet HRV? Was sagt der Phasenwinkel aus? Und was unterscheidet biologisches vom kalendarischen Alter? Begriffe werden dann hilfreich, wenn man versteht, was dahintersteckt.</p><input className={styles.search} aria-label="Glossar durchsuchen" value={query} onChange={(event) => searchTerms(event.target.value)} placeholder="Welchen Begriff möchtest du verstehen?" /><nav className={styles.alphabet} aria-label="Glossar alphabetisch filtern">{[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((item) => <button key={item} className={letter === item && !query ? styles.selected : ''} onClick={() => chooseLetter(item)}>{item}</button>)}</nav><div className={styles.termList}>{terms.map((entry) => <button key={entry.term} type="button" className={selectedTerm.term === entry.term ? styles.termSelected : ''} onClick={() => setSelectedTerm(entry)}>{entry.term}<span>→</span></button>)}</div><a className={styles.glossaryCta} href="#magazin">Mehr verstehen →</a></div>
      <GlossaryDetail entry={selectedTerm} />
    </div></section>

    <section className={styles.questions} id="fragen"><span className="eyebrow">FRAGEN &amp; ANTWORTEN</span><h2>Gute Fragen verdienen kompetente Antworten.</h2><div className={styles.questionsGrid}><div className={styles.accordions}>{processQuestions.map(([title, answer]) => <Accordion key={title} title={title}><p>{answer}</p></Accordion>)}</div><aside className={styles.questionCard}><h3>Deine Frage ist nicht dabei?</h3><p>Dann schick sie uns gern an <a href="mailto:questions@lovinu.de">questions@lovinu.de</a>. Wir antworten dir persönlich – und nehmen regelmäßig neue Fragen in diese F&amp;A auf.</p><a href="mailto:questions@lovinu.de">Frage senden →</a></aside></div></section>

    <section className={styles.magazine} id="magazin"><span className="eyebrow">MAGAZIN</span><h2>Wissen, das weiterführt.</h2><p>Medizinisches Wissen verändert sich. Und manches versteht man besser als Bild, im Gespräch oder in drei Minuten Video als auf zehn Seiten Papier.</p><div className={styles.formatGrid}>{formats.map((format) => <button key={format.title} type="button" className={`${styles.formatCard} ${styles[format.tone]} ${filter === format.title ? styles.formatActive : ''}`} aria-pressed={filter === format.title} onClick={() => setFilter(format.title)}><img className={styles.formatArtwork} src={format.image} alt="" /><span className={styles.formatCopy}><strong>{format.title}</strong><small>{format.description}</small></span></button>)}</div><button type="button" className={styles.allArticles} onClick={() => setFilter('Alle')}>Alle Beiträge</button><div className={styles.magazineGrid}>{magazineItems.filter((item) => matchesFormat(item.type, filter)).map((item) => <article key={item.title} className={`${styles.magazineCard} ${styles[item.tone]} ${item.image ? styles.magazineInteractive : ''}`} onClick={() => item.image && setSelectedMagazineItem(item)} onKeyDown={(event) => { if (item.image && (event.key === 'Enter' || event.key === ' ')) setSelectedMagazineItem(item); }} role={item.image ? 'button' : undefined} tabIndex={item.image ? 0 : undefined}><span>{item.type}</span><h3>{item.title}</h3>{item.subtitle && <p>{item.subtitle}</p>}<b>→</b></article>)}</div>{selectedMagazineItem?.image && <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={selectedMagazineItem.title}><button type="button" className={styles.lightboxClose} onClick={() => setSelectedMagazineItem(null)}>Schließen ×</button><div className={styles.lightboxContent}><img src={selectedMagazineItem.image} alt={`LOVINU KOMPAKT: ${selectedMagazineItem.title}`} /></div></div>}</section>

    <section className={styles.responsibility} id="grenzen"><div className={styles.responsibilityInner}><span className="eyebrow">VERANTWORTUNG</span><h2>Was LOVINU kann.<br />Und wo die Grenzen liegen.</h2><p>Gute Gesundheitsvorsorge bedeutet für uns auch, zu erkennen, wann Vorsorge nicht mehr genügt.</p><div className={styles.scopeCards}>{[['Erhalten', 'Gesund bleiben.', 'Du fühlst dich gesund und möchtest besser verstehen, was dazu beiträgt, dass das möglichst lange so bleibt.'], ['Verbessern', 'Potenziale erkennen.', 'Werte, Lebensstil oder körperliche Voraussetzungen zeigen Möglichkeiten zur Veränderung. Gemeinsam leiten wir daraus sinnvolle Handlungsfelder ab.'], ['Beheben', 'Auffälligkeiten ernst nehmen.', 'Wenn Diagnostik oder Beschwerden auf gesundheitliche Probleme hinweisen, werden sie medizinisch eingeordnet. Liegt die erforderliche Therapie innerhalb der LOVINU-Kompetenz, kann dort begleitet bzw. behandelt werden. Wo eine weiterführende fachärztliche Behandlung erforderlich ist, wird gezielt übergeben.']].map(([label, title, text]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className={styles.responsibilityQuestions}>{responsibilityQuestions.map((question) => <Accordion key={question} title={question}><p>Antwort wird medizinisch abgestimmt.</p></Accordion>)}</div></div></section>
  </>;
}
