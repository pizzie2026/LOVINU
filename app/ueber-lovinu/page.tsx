import type { Metadata } from 'next';
import { existsSync } from 'node:fs';
import path from 'node:path';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Über LOVINU | Persönliche Medizin',
  description: 'Die Menschen und die Idee hinter LOVINU: medizinische Präzision, Zeit zum Zuhören und persönliche Begleitung.',
};

const links = [['/', 'Home'], ['/personal-longevity', 'Personal Longevity'], ['/was-wir-tun', 'Was wir tun'], ['/dein-plan', 'Dein Plan'], ['/ueber-lovinu', 'Über LOVINU'], ['#', 'Wissen'], ['#contact', 'Kontakt']];
const team = [
  { name: 'Dr. med. Sandra Nasikkol', image: '/images/sandra.png', role: 'Fachärztliche Betreuung', bio: 'Als Gefäßchirurgin erlebt Sandra Nasikkol täglich, wohin Erkrankungen führen können, die sich oft über viele Jahre entwickeln. Bei LOVINU möchte sie deshalb früher ansetzen: Menschen kennenlernen, bevor Krankheit ihr Leben bestimmt. Medizinische Erfahrung, Prävention und das persönliche Gespräch gehören für sie dabei untrennbar zusammen.' },
  { name: 'Stefanie Sprinke', image: '/images/stefanie.png', role: 'Beratung und Management', bio: 'Stefanie Sprinke bringt jahrzehntelange Erfahrung in Beratung, Benefits und betrieblicher Gesundheitsvorsorge mit. Ihr Ansatz beginnt nicht mit einer fertigen Lösung, sondern mit einer Frage: Was braucht dieser Mensch wirklich? Bei LOVINU verbindet sie strukturiertes Denken mit der Überzeugung, dass gute Beratung vor allem eines braucht: Menschlichkeit.' },
  { name: 'Peter Brudny', image: '/images/peter.png', role: 'Fachärztliche Betreuung', bio: 'Peter Brudny ist Anästhesist mit langjähriger klinischer und intensivmedizinischer Erfahrung. Ihn beschäftigt die Frage, wie Medizin nicht nur immer besser behandeln, sondern Gesundheit früher erhalten kann. Bei LOVINU bringt er medizinische Erfahrung und einen wissenschaftlich kritischen Blick auf neue Möglichkeiten der Longevity-Medizin zusammen.' },
];
const principles = [
  ['Genau hinschauen.', 'Nicht einzelne Werte betrachten, sondern Zusammenhänge erkennen. Medizinische Daten sind Ausgangspunkt für ein umfassenderes Verständnis.'],
  ['Zusammenhänge verstehen.', 'Labor, Diagnostik, Lebensweise, Vorgeschichte und persönliche Ziele gehören zusammen. Erst daraus entsteht ein Bild, mit dem sich sinnvoll arbeiten lässt.'],
  ['Verständlich bleiben.', 'Medizinisches Wissen hilft wenig, wenn es nicht verstanden wird. Deshalb erklären wir Ergebnisse und Empfehlungen so, dass daraus Entscheidungen werden können.'],
];
function Navigation() {
  return <>{links.map(([href, label]) => <a key={label} href={href} className={href === '/ueber-lovinu' ? 'active' : undefined} aria-current={href === '/ueber-lovinu' ? 'page' : undefined}>{label}</a>)}</>;
}
export default function AboutLovinu() {
  const hasSelfCarePhoto = existsSync(path.join(process.cwd(), 'public/images/lovinu-selbstfuersorge.jpg'));
  return <>
    <header className={`siteHeader ${styles.header}`}>
      <a className="brand" href="/" aria-label="LOVINU – Home"><img src="/brand/lovinu-logo.svg" alt="LOVINU" /></a>
      <nav aria-label="Hauptnavigation"><Navigation /></nav>
      <a className="pill headerCta" href="#contact">LOVINU kennenlernen →</a>
      <details className={styles.mobileMenu}><summary>Menü</summary><nav aria-label="Mobile Navigation"><Navigation /></nav></details>
    </header>
    <main className={`subPage ${styles.page}`}>
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.heroCopy}>
          <span className="eyebrow">ÜBER LOVINU</span>
          <h1 id="about-title">Persönliche Medizin,<br className={styles.mobileHeroBreak} /> wie sie einmal gedacht war.<br />Mit den Möglichkeiten von heute.</h1>
          <p>LOVINU verbindet etwas, das in der Medizin manchmal verloren gegangen ist – den Menschen zu kennen, sich Zeit zu nehmen und Zusammenhänge zu verstehen – mit den diagnostischen Möglichkeiten und dem medizinischen Wissen von heute.</p>
          <p className={styles.leitline}>Medizin beginnt für uns mit Hinhören.</p>
        </div>
        <div className={styles.heroMedia}>
          <img src="/images/lovinu-team.jpg" width={7360} height={4912} alt="Sandra Nasikkol, Stefanie Sprinke und Peter Brudny – die Menschen hinter LOVINU" />
        </div>
      </section>
      <section className={`${styles.section} ${styles.why}`}>
        <div className="sectionHead"><span className="rule" /><div><span className="eyebrow">WARUM ES LOVINU GIBT</span><h2>Gute Medizin beginnt nicht erst mit Krankheit.</h2></div></div>
        <div><p>Viele medizinische Entscheidungen werden getroffen, wenn Beschwerden bereits da sind. Wir möchten früher hinschauen.</p><p>Was verändert sich im Körper? Welche Entwicklungen lassen sich erkennen? Was können wir heute sinnvoll beeinflussen, damit möglichst viele gute Jahre vor uns liegen?</p><p>LOVINU ist aus der Überzeugung entstanden, dass moderne Medizin mehr kann, wenn sie Menschen nicht nur punktuell behandelt, sondern über längere Zeit kennt und begleitet.</p></div>
      </section>
      <section className={styles.section} aria-labelledby="team-title">
        <div className={styles.intro}><span className="eyebrow">DIE MENSCHEN HINTER LOVINU</span><h2 id="team-title">Unterschiedliche Perspektiven.<br />Eine gemeinsame Idee.</h2><p>Gute Medizin braucht Wissen. Aber auch Erfahrung, Neugier und Menschen, die einander zuhören.</p><p>Bei LOVINU kommen unterschiedliche Kompetenzen zusammen. Was uns verbindet, ist der Wunsch, Gesundheit verständlicher zu machen und Menschen dabei zu unterstützen, informierte Entscheidungen für ihre Zukunft zu treffen.</p></div>
        <div className={styles.team}>{team.map(person => <article key={person.name}><img src={person.image} alt={person.name} width={800} height={800} loading="lazy" /><h3>{person.name}</h3><p className={styles.profileRole}>{person.role}</p><p className={styles.profileBio}>{person.bio}</p></article>)}</div>
      </section>
      <section className={`${styles.section} ${styles.principles}`}>
        <div className={styles.intro}><span className="eyebrow">WAS UNS VERBINDET</span><h2>Nicht alles, was messbar ist, ist wichtig.<br />Aber Wichtiges sollten wir messen können.</h2></div>
        <div className={styles.principleGrid}>{principles.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className={`${styles.section} ${styles.competence}`}>
        <div><span className="eyebrow">KOMPETENZ</span><h2>Wissenschaftlich fundiert.<br />Persönlich zugeschnitten.</h2></div>
        <div><p>LOVINU orientiert sich an aktuellen medizinischen Erkenntnissen und nutzt moderne diagnostische Möglichkeiten dort, wo sie einen sinnvollen Beitrag leisten.</p><p>Technologie ersetzt dabei nicht das ärztliche Gespräch. Daten ersetzen nicht Erfahrung. Und ein Laborwert kennt weder die Geschichte noch die Ziele eines Menschen.</p><p>Deshalb verbindet LOVINU medizinische Präzision und persönliche Begleitung.</p></div>
      </section>
      <section className={`${styles.section} ${styles.together}`}>
        <div className={styles.intro}><span className="eyebrow">ZUSAMMENARBEIT</span><h2>Deine Gesundheit bleibt deine.</h2><p>Wir können untersuchen, analysieren, erklären und Empfehlungen geben. Entscheidend ist aber, was daraus im Leben des Menschen entsteht.</p><p>Personal Longevity ist deshalb kein Programm, das man einfach absolviert. Der persönliche Plan entsteht gemeinsam und entwickelt sich weiter.</p><p className={styles.closingLine}>LOVINU begleitet.<br />Du gestaltest.</p></div>
        <div className={styles.selfCareMedia}>
          {hasSelfCarePhoto ? <img src="/images/lovinu-selbstfuersorge.jpg" alt="Eine erwachsene Frau umarmt sich selbst – Selbstfürsorge und Eigenverantwortung" loading="lazy" /> : <div className={styles.selfCarePlaceholder}><span className="eyebrow">BILDPLATZHALTER · SELBSTFÜRSORGE</span><p>Eine Frau, die sich selbst umarmt.</p><span>Hier folgt ein Schwarzweiß-Motiv.</span></div>}
        </div>
      </section>
      <section className={`${styles.section} ${styles.cta}`} id="contact"><div><h2>Vielleicht sollten wir uns kennenlernen.</h2><p>Gesundheit ist persönlich. Deshalb beginnt auch der Weg bei LOVINU nicht mit einem Formular voller Laborwerte, sondern mit einem kostenlosen Gespräch.</p></div><div className={styles.actions}><a className="pill whitePill" href="mailto:kontakt@lovinu.de">LOVINU kennenlernen</a><a href="/dein-plan">Deinen Plan entdecken →</a></div></section>
    </main>
    <footer className={styles.footer}><img className="footerLogo" src="/brand/lovinu-logo-white.png" alt="LOVINU" /><span>Lebensfreude durch Gesundheit.</span><div className="legal"><a href="#">Impressum</a><a href="#">Datenschutz</a><a href="#contact">Kontakt</a></div><div className="footerClaim"><img src="/brand/lovinu-heart-white.png" alt="" /><b>Länger gut leben.</b></div></footer>
  </>;
}
