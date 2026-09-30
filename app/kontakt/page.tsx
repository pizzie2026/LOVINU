import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Kontakt | LOVINU', description: 'Sprich mit LOVINU über deine Fragen und nächsten Schritte.' };

const links = [['/', 'Home'], ['/personal-longevity', 'Personal Longevity'], ['/was-wir-tun', 'Was wir tun'], ['/dein-plan', 'Dein Plan'], ['/ueber-lovinu', 'Über LOVINU'], ['/wissen', 'Wissen'], ['/kontakt', 'Kontakt']];
const portraits = [
  ['/images/team/sandra.png%2012-56-40-984.png', 'Dr. med. Sandra Nasikkol'],
  ['/images/team/peter.png%2012-56-40-960.png', 'Peter Brudny'],
  ['/images/team/stefanie.png%2012-56-40-995.png', 'Stefanie Sprinke'],
];

function Nav() { return <>{links.map(([href, label]) => <a key={label} href={href} className={href === '/kontakt' ? 'active' : undefined}>{label}</a>)}</>; }

export default function Kontakt() {
  return <><header className={`siteHeader ${styles.header}`}><a className="brand" href="/"><img src="/brand/lovinu-logo.svg" alt="LOVINU" /></a><nav><Nav /></nav><a className="pill headerCta" href="#termin">LOVINU kennenlernen →</a><details className={styles.mobileMenu}><summary>Menü</summary><nav><Nav /></nav></details></header>
    <main className={styles.page}>
      <section className={styles.hero}><span className="eyebrow">KONTAKT</span><h1>Lass uns miteinander sprechen.</h1><p>Vielleicht weißt du schon genau, was du verändern möchtest. Vielleicht hast du zunächst nur Fragen. Beides ist ein guter Anfang.</p></section>
      <section className={styles.intro} id="termin"><div><h2>Dein erstes Gespräch mit LOVINU ist kostenlos.</h2><p>In einem unverbindlichen Gespräch lernen wir uns kennen und klären, was dich beschäftigt – und ob LOVINU der richtige nächste Schritt für dich ist.</p><a className="pill" href="#terminbereich">Kostenloses Erstgespräch vereinbaren →</a></div><aside><h3>Du möchtest uns erst etwas fragen oder sagen, bevor du deinen persönlichen Termin buchst?</h3><p>Schreib uns gern an <a href="mailto:questions@lovinu.de">questions@lovinu.de</a>.</p><a href="mailto:questions@lovinu.de">Nachricht senden →</a></aside><div className={styles.booking} id="terminbereich"><span className="eyebrow">TERMINBUCHUNG</span><h3>Kostenloses Erstgespräch vereinbaren</h3><p>Hier wird vor dem Going Live die Calendly-Terminbuchung eingebunden.</p><button type="button" disabled aria-disabled="true">Terminbuchung wird vorbereitet</button><div className={styles.notice}><strong>Bitte schick uns hier KEINE medizinischen Details oder Befunde.</strong><p>Medizinische Informationen besprechen und übermitteln wir ausschließlich über die dafür vorgesehenen sicheren Wege. Wie das funktioniert, erklären wir dir persönlich.</p></div></div></section>
      <section className={styles.people}><div><h2>Du sprichst mit Menschen. Nicht mit einem System.</h2><p>Wir melden uns persönlich bei dir zurück.</p></div><div className={styles.portraits}>{portraits.map(([src, name]) => <figure key={name}><img src={src} alt={name} /><figcaption>{name}</figcaption></figure>)}</div></section>
      <section className={styles.location}><span className="eyebrow">LOVINU VOR ORT</span><h2>Hier findest du uns.</h2><div><p><strong>ADRESSE</strong><br />[Adresse folgt]</p><p><strong>TELEFON</strong><br />[Telefon folgt]</p><p><strong>E-MAIL</strong><br />[E-Mail folgt]</p></div><button type="button">Route planen →</button></section>
    </main>
    <footer className={styles.footer}><img className="footerLogo" src="/brand/lovinu-logo-white.png" alt="LOVINU" /><span>Lebensfreude durch Gesundheit.</span><div className="legal"><a href="#">Impressum</a><a href="#">Datenschutz</a><a href="/kontakt">Kontakt</a></div><div className="footerClaim"><img src="/brand/lovinu-heart-white.png" alt="" /><b>Länger gut leben.</b></div></footer>
  </>;
}
