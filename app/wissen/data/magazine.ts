export type MagazineItem={type:string;title:string;subtitle?:string;tone:'sun'|'coral'|'blue'|'lime'|'violet'|'rose';image?:string};
export const magazineItems:MagazineItem[]=[
{type:'Kurz erklärt',title:'A, D, E, K – vier Vitamine, die Fett brauchen.',tone:'sun'},
{type:'Lesen · 6 Min.',title:'Gesund – aber wie lange noch?',subtitle:'Warum Vorsorge früher beginnen kann.',tone:'blue'},
{type:'Video · 03:40',title:'Was Blutwerte erzählen.',subtitle:'Und was nicht.',tone:'lime'},
{type:'Kurz erklärt',title:'Mineralstoffe:',subtitle:'Kleine Mengen, große Aufgaben.',tone:'coral'},
{type:'Hören · 11 Min.',title:'Was bedeutet eigentlich „persönliche Medizin“?',tone:'violet'},
{type:'Lesen · 5 Min.',title:'Schlaf ist keine Pause.',subtitle:'Was nachts in unserem Körper passiert.',tone:'blue'},
{type:'Kurz erklärt',title:'Fettlösliche Vitamine',subtitle:'LOVINU KOMPAKT',tone:'sun',image:'/images/wissen/kompakt/lovinu-kompakt-fettloesliche-vitamine.png'},
{type:'Kurz erklärt',title:'Wasserlösliche Vitamine',subtitle:'LOVINU KOMPAKT',tone:'coral',image:'/images/wissen/kompakt/lovinu-kompakt-wasserloesliche-vitamine.png'},
{type:'Kurz erklärt',title:'Mineralien',subtitle:'LOVINU KOMPAKT',tone:'sun',image:'/images/wissen/kompakt/lovinu-kompakt-mineralien.png'},
{type:'Kurz erklärt',title:'Spurenelemente',subtitle:'LOVINU KOMPAKT',tone:'coral',image:'/images/wissen/kompakt/lovinu-kompakt-spurenelemente.png'},
{type:'Kurz erklärt',title:'Schwermetalle',subtitle:'LOVINU KOMPAKT',tone:'sun',image:'/images/wissen/kompakt/lovinu-kompakt-schwermetalle.png'}];
