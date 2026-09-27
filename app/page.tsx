const steps = ['Kennenlernen','Hinschauen','Verstehen','Planen','Handeln','Weitergehen'];
const benefits = [
  ['energy','Mehr Energie','im Alltag'],['heart','Gesund älter','werden'],['bulb','Klarheit durch','Wissen'],['people','Individuelle','Begleitung']
];
function BenefitIcon({type}:{type:string}){
 const common={width:54,height:54,viewBox:'0 0 64 64',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round' as const,strokeLinejoin:'round' as const};
 if(type==='energy') return <svg {...common}><path d="M35 4 16 34h15l-4 26 21-34H33z"/></svg>;
 if(type==='heart') return <svg {...common}><path d="M32 55S8 40 8 22c0-9 7-15 15-15 5 0 8 2 9 6 2-4 5-6 10-6 8 0 14 6 14 15 0 18-24 33-24 33Z"/></svg>;
 if(type==='bulb') return <svg {...common}><path d="M20 27c0-8 5-15 12-15s12 7 12 15c0 6-3 9-6 13-2 2-2 4-2 7h-8c0-3 0-5-2-7-3-4-6-7-6-13Z"/><path d="M27 51h10M29 56h6"/></svg>;
 return <svg {...common}><circle cx="22" cy="22" r="7"/><circle cx="42" cy="22" r="7"/><path d="M9 49c0-9 5-15 13-15s13 6 13 15M29 49c0-9 5-15 13-15s13 6 13 15"/></svg>;
}
const team = [
  {img:'/images/sandra.png',name:'Dr. med. Sandra Nasikkol',role:'Gefäßchirurgin, ästhetische Medizin & medizinische Ernährungsberatung'},
  {img:'/images/peter.png',name:'Peter Brudny',role:'Anästhesiologie, Mikronährstofftherapie, Schmerztherapie'},
  {img:'/images/stefanie.png',name:'Stefanie Sprinke',role:'Organisation und Umsetzungsmanagement'}
];

export default function Home(){
 return <>
  <header className="siteHeader"><a className="brand" href="#"><img src="/brand/lovinu-logo.svg" alt="LOVINU"/></a><nav><a href="#">Home</a><a href="/personal-longevity">Personal Longevity</a><a href="/was-wir-tun">Was wir tun</a><a href="/dein-plan">Dein Plan</a><a href="#team">Über LOVINU</a><a href="#">Wissen</a><a href="#contact">Kontakt</a></nav><a className="pill headerCta" href="#contact">LOVINU kennenlernen →</a><button className="menu" aria-label="Menü">☰</button></header>

  <main>
   <section className="hero"><div className="heroPhoto"/><div className="heroCopy"><h1>Länger gut leben.</h1><a className="pill" href="#contact">LOVINU kennenlernen →</a><div className="heroNote"><img src="/brand/lovinu-heart-blue.svg" alt=""/><p>Lebensfreude<br/>durch Gesundheit.</p></div></div></section>

   <section className="band intro" id="longevity"><div className="sectionHead"><span className="rule"/><div><h2>Es geht um mehr als <strong>nur</strong> ein langes Leben.</h2><p>Es geht um möglichst viele <strong>gute</strong> Jahre. Unser Ansatz: früh verstehen, gezielt handeln – für mehr Energie, Klarheit und Lebensfreude.</p></div></div><div className="benefits">{benefits.map(([i,a,b])=><div className="benefit" key={a}><span className="icon"><BenefitIcon type={i}/></span><span>{a}<br/>{b}</span></div>)}</div></section>

   <section className="split" id="work"><div className="copy"><div className="sectionHead"><span className="rule"/><div><h2>Wie gut kennst du dich?</h2><p>Sich selbst zu kennen, bedeutet auch, die eigene Gesundheit zu verstehen. Wir schauen für dich genauer hin – mit medizinischer Expertise, modernen Untersuchungen und einem ganzheitlichen Blick.</p><a className="pill" href="/was-wir-tun">Mehr erfahren →</a></div></div></div><div className="knowledge"><img src="/images/knowledge.jpg" alt="Bewegte Schwarzweiß-Aufnahme als Motiv für genaues Hinschauen"/></div></section>

   <section className="band plan" id="plan"><div className="planIntro"><span className="eyebrow">DER LOVINU-PLAN</span><h2>Dein persönlicher<br/>Gesundheitsplan.</h2><p>Vom unverbindlichen Kennenlernen bis zu deinem Ziel. In sechs klaren Schritten – menschlich begleitet, medizinisch fundiert, persönlich auf dich abgestimmt.</p><a className="pill" href="/dein-plan">Den Plan entdecken →</a></div><div className="steps">{steps.map((s,i)=><div className="step" key={s}><span>{String(i+1).padStart(2,'0')}</span><small>{s}</small></div>)}</div><blockquote>Nicht jeder braucht dasselbe.<br/>Du bekommst das, was für dich sinnvoll ist.</blockquote></section>

   <section className="team" id="team"><div className="teamTitle"><div className="sectionHead"><span className="rule"/><div><h2>Die Menschen hinter deinem Plan.</h2><p>Medizinische Erfahrung, wissenschaftliche Kompetenz, verständliche Sprache – für eine moderne Gesundheitsmedizin, die den Menschen in den Mittelpunkt stellt.</p></div></div><a href="#">Unser Team kennenlernen →</a></div><div className="teamGrid">{team.map(m=><article key={m.name}><img src={m.img} alt={m.name}/><h3>{m.name}</h3><p>{m.role}</p></article>)}</div></section>
  </main>

  <footer id="contact"><img className="footerLogo" src="/brand/lovinu-logo-white.png" alt="LOVINU"/><span>Lebensfreude durch Gesundheit.</span><div className="legal"><a href="#">Impressum</a><a href="#">Datenschutz</a><a href="#">Kontakt</a></div><div className="footerClaim"><img src="/brand/lovinu-heart-white.png" alt=""/> <b>Länger gut leben.</b></div></footer>
 </>
}
