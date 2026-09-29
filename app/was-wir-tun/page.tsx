import type { Metadata } from 'next';
export const metadata: Metadata={title:'Was wir tun | LOVINU',description:'LOVINU verbindet Diagnostik, medizinische Einordnung und persönliche Begleitung.'};
export default function Work(){return <><Header/><main className="subPage workV5">
<section className="workV5Hero workV5PhotoHero"><div><span className="eyebrow">WAS WIR TUN</span><h1>Deine Gesundheit verstehen.<br/>Dann handeln.</h1><p>Deine <strong>Gesundheit</strong> besteht nicht nur aus einzelnen Laborwerten. Deshalb betrachten wir Zusammenhänge – medizinisch fundiert, persönlich und mit Blick auf das, was du erreichen möchtest.</p><p>Von der Diagnostik bis zur langfristigen Begleitung.</p><a className="pill" href="#approach">LOVINU kennenlernen →</a></div></section>
<section className="workV5Approach" id="approach"><span className="eyebrow">UNSER ANSATZ</span><h2>Nicht <em>mehr</em> Medizin. Sondern die richtige.</h2><p>Nicht jede Untersuchung ist für jeden Menschen sinnvoll. Und nicht jeder auffällige Wert verlangt nach einer Therapie.<br/>Wir schauen deshalb zuerst genau hin, ordnen die Ergebnisse medizinisch ein und entscheiden gemeinsam mit dir, was wirklich relevant ist. So entsteht aus vielen Informationen ein verständliches Bild deiner Gesundheit.</p></section>
<section className="workV5Row workV5DiagnosticPhoto"><div className="workV5Text"><span className="workNum">01</span><span className="eyebrow">DIAGNOSTIK</span><h2>Wissen, wo du heute stehst.</h2><p>Am Anfang steht eine gründliche Bestandsaufnahme. Welche Untersuchungen sinnvoll sind, richtet sich nach deiner persönlichen Situation, deinen Zielen und deiner medizinischen Vorgeschichte.<br/>Nicht alles, was messbar ist, muss gemessen werden.</p><p>Wir klären gemeinsam, welche Untersuchungen für dich wirklich sinnvoll sind.</p></div></section>
<section className="workV5Row reverse"><img src="/images/mood/work-interpret-clean.png" alt="Medizinische Einordnung"/><div className="workV5Text"><span className="workNum">02</span><span className="eyebrow">MEDIZIN & PRÄVENTION</span><h2>Aus Daten wird Verständnis.</h2><p>Ein einzelner Messwert erzählt selten die ganze Geschichte. Entscheidend ist, Ergebnisse im <strong>Zusammenhang</strong> zu betrachten: Was bedeutet ein Befund für dich persönlich? Welche Entwicklungen verdienen Aufmerksamkeit? Und wo gibt es Ansatzpunkte, die für deine Gesundheit relevant sein können?</p><p>Wir verbinden medizinische Erfahrung mit aktuellen wissenschaftlichen Erkenntnissen – und machen aus Daten eine Grundlage für nachvollziehbare Entscheidungen.</p><blockquote>Nicht möglichst viele Befunde.<br/>Sondern die richtigen Schlüsse.</blockquote></div></section>
<section className="workV5Editorial">
  <div className="work03">
    <span className="workNum">03</span>
    <span className="eyebrow">ERNÄHRUNG · STOFFWECHSEL · REGENERATION</span>
    <h2>Was du verändern kannst,<br/>soll in dein Leben passen.</h2>
    <p>Wir übersetzen medizinische Erkenntnisse in konkrete Maßnahmen. Je nach Ausgangssituation können dazu Veränderungen bei Ernährung, Bewegung, Regeneration oder Lebensgewohnheiten gehören – ebenso wie eine medizinisch begründete Supplementierung oder weitere therapeutische Maßnahmen.</p>
  </div>

  <aside className="sandraQuote workV5Quote">
    <blockquote className="quoteMarks">
      Ich möchte Menschen nicht erst kennenlernen,<br/>
      wenn sie auf meinem Operationstisch liegen.<br/>
      Ich möchte sie dreißig Jahre vorher kennenlernen.
    </blockquote>
    <p>Dr. med. Sandra Nasikkol</p>
  </aside>

  <div
    className="workTimeImage"
    role="img"
    aria-label="Konzeptbild Zeit und langfristige Gesundheit">
  </div>

  <div className="work04">
    <span className="workNum">04</span>
    <span className="eyebrow">THERAPIE &amp; BEGLEITUNG</span>
    <h2>Gesundheit ist kein Projekt mit<br/>kurzfristigem Enddatum.</h2>
    <p>Eine Untersuchung ist eine Momentaufnahme. Entscheidend ist, was danach passiert. Wir begleiten dich dabei, Veränderungen umzusetzen, Entwicklungen zu beobachten und deinen Plan anzupassen, wenn sich dein Leben oder deine gesundheitliche Situation verändert.</p>
  </div>
</section>
<section className="workV5Close" id="contact"><div><span className="eyebrow">WAS WIR ERREICHEN MÖCHTEN</span><h2>Mehr gute Jahre sind ein Ziel. Kein Versprechen.</h2><p>Medizin kann Risiken erkennen, Möglichkeiten aufzeigen und dabei helfen, Gesundheit zu erhalten oder positiv zu beeinflussen.<br/>Wie sich Gesundheit entwickelt, hängt jedoch von vielen Faktoren ab – und lässt sich nicht versprechen.</p><p>Ein entscheidender Faktor bist du selbst. Personal Longevity bedeutet deshalb auch, Verantwortung für die eigene Gesundheit zu übernehmen. Veränderungen im Alltag brauchen deine Bereitschaft, selbst etwas dafür zu tun.</p><strong>Heute das tun, was sinnvoll ist – für möglichst viele gute Jahre morgen.</strong></div><img src="/brand/lovinu-heart-blue.svg" alt=""/></section>
</main><Footer/></>}
function Header(){return <header className="siteHeader"><a className="brand" href="/"><img src="/brand/lovinu-logo.svg" alt="LOVINU"/></a><nav><a href="/">Home</a><a href="/personal-longevity">Personal Longevity</a><a className="active" href="/was-wir-tun">Was wir tun</a><a href="/dein-plan">Dein Plan</a><a href="/ueber-lovinu">Über LOVINU</a><a href="/wissen">Wissen</a><a href="#contact">Kontakt</a></nav><a className="pill headerCta" href="#contact">Kontakt</a></header>}
function Footer(){return <footer><img className="footerLogo" src="/brand/lovinu-logo-white.png" alt="LOVINU"/><span>Lebensfreude durch Gesundheit.</span><div className="legal"><a href="#">Impressum</a><a href="#">Datenschutz</a><a href="#contact">Kontakt</a></div><div className="footerClaim"><img src="/brand/lovinu-heart-white.png" alt=""/> <b>Länger gut leben.</b></div></footer>}
