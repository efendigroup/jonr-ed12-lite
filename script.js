/* =============================================
   JONR ED12 Lite — Global Landing Page Script
   ============================================= */

// ===== TRANSLATIONS =====
const translations = {
  en: {
    "nav.features": "Features",
    "nav.reels": "As Seen On",
    "nav.reviews": "Reviews",
    "nav.faq": "FAQ",
    "cta.buy": "Order Now",
    "cta.watch": "Watch it in action ↓",
    "hero.badge": "Vacuum + Mop · Cordless · Self-Cleaning",
    "hero.headline": "Stop cleaning<br/>your floors<br/><em>twice.</em>",
    "hero.sub": "The JONR ED12 Lite vacuums and mops in one single pass — then cleans itself in 35 seconds. No cords. No tangles. No drama.",
    "hero.proof": "Trusted by 1,000+ customers worldwide",
    "hero.card1": "Suction Power",
    "hero.card2": "Self-Cleaning",
    "proof.suction": "Suction",
    "proof.combo": "Vacuum + Mop",
    "proof.battery": "Battery Life",
    "proof.tank": "Clean Water Tank",
    "proof.weight": "Ultra-Light",
    "proof.cordless": "Cordless",
    "proof.freedom": "Total Freedom",
    "reels.headline": "Real people. Real floors. Real results.",
    "reels.sub": "Watch these viral clips that blew up on TikTok & YouTube — then decide for yourself.",
    "reels.youtube": "Also on YouTube",
    "reel1.quote": "\"Discover the ultimate cleaning hack! This thing is a total game changer.\"",
    "reel2.quote": "\"JONR ED12 Cordless Wet Dry Vac is a must grab this season. I'm obsessed.\"",
    "reel3.quote": "\"My floors have never been this clean. #jonr #jonred12 #fyp\"",
    "short1.quote": "\"Fantastic value for money at this price point — I'm genuinely impressed.\"",
    "short2.quote": "\"Cut our cleaning from 3 steps down to 1. With 3 young kids — this changed everything.\"",
    "short3.quote": "\"7,000 Pa suction, edge cleaning, self-cleaning. Under 3.5 kg. For that price? Unreal.\"",
    "short4.quote": "\"Very strong suction — battery lasts 35 min on low. Super easy to use.\"",
    "problem.eyebrow": "Sound familiar?",
    "problem.headline": "Sweep. Then vacuum. Then mop. Then repeat.",
    "problem.body": "Three tools, double the time, and a mop that smells like the last job. There's a smarter way.",
    "problem.p1": "Cord always in the way",
    "problem.p2": "Dirty mop water spreads bacteria",
    "problem.p3": "Pet hair wraps around every brush",
    "problem.p4": "Corners never truly clean",
    "problem.solution": "The Fix",
    "problem.caption": "One device. One pass. Done.",
    "features.eyebrow": "What makes it different",
    "features.headline": "Six reasons the ED12 Lite wins",
    "feat1.title": "Vacuum + Mop. One pass.",
    "feat1.body": "40 precision water jets distribute clean water evenly across the roller as 7,000 Pa suction lifts dry debris — simultaneously. You'll never go back to two steps.",
    "feat1.stat1": "40 jets",
    "feat1.stat2": "for streak-free coverage",
    "feat2.title": "Self-Cleans in 35 Seconds",
    "feat2.body": "One button press. The roller and pipes flush themselves automatically. No hands, no mess, no smell next time you open it.",
    "feat3.title": "Only 3.6 kg — Self-Propelled",
    "feat3.body": "Lighter than a bag of groceries. The rotating brush generates forward momentum — it practically glides on its own. Perfect for larger apartments or older users.",
    "feat4.title": "6mm Edge Cleaning",
    "feat4.body": "The roller reaches within 6mm of walls and baseboards. Those dusty strips other vacuums always miss? Gone. In tests, it outperformed models 3× the price.",
    "feat5.title": "Zero Hair Tangles",
    "feat5.body": "Dual comb scrapers slice hair before it can wrap. In independent testing: after a full session with long hair strands, zero hair found on the roller. Pet owners love this.",
    "feat6.title": "Dual Tank: Clean Stays Clean",
    "feat6.body": "850 ml fresh water tank + 450 ml dirty water tank. Clean and dirty water never mix — so you're always mopping with fresh water, not recycled grime.",
    "feat6.stat1": "100 m²",
    "feat6.stat2": "without refilling",
    "howto.eyebrow": "How it works",
    "howto.headline": "Three steps to spotless floors",
    "step1.title": "Fill the Tank",
    "step1.body": "Pop open the clean water tank, fill with up to 850 ml of water. Add a cleaning tablet if you like. Snap shut. Done.",
    "step2.title": "Switch On & Go",
    "step2.body": "Press power, choose Normal or Max mode, and glide across your floors. One pass — vacuumed and mopped.",
    "step3.title": "Self-Clean & Dock",
    "step3.body": "Hold the self-clean button for 35 seconds. Roller and pipes flush themselves. Place on the charging base. Ready for next time.",
    "specs.eyebrow": "Tech Specs",
    "specs.headline": "The numbers that matter",
    "specs.body": "No marketing fluff — just what you actually want to know before buying.",
    "spec.model": "Model",
    "spec.suction": "Suction Power",
    "spec.power": "Motor Power",
    "spec.cleantank": "Clean Water Tank",
    "spec.dirtytank": "Dirty Water Tank",
    "spec.weight": "Weight",
    "spec.runtime": "Battery Runtime",
    "spec.selfclean": "Self-Cleaning Cycle",
    "spec.noise": "Noise Level",
    "spec.modes": "Cleaning Modes",
    "spec.modes.val": "Normal + Max",
    "spec.edge": "Edge Cleaning",
    "spec.size": "Dimensions",
    "reviews.eyebrow": "Real buyers. Honest words.",
    "reviews.headline": "What customers say",
    "reviews.rating": "4.7 / 5 · 1,000+ reviews",
    "rev1": "\"I absolutely love this vacuum mop! No more being tethered to a wall outlet. The self-cleaning feature is FANTASTIC! Battery life is great. Super lightweight and self-propelled. Very functional for a mom with two messy kids!\"",
    "rev1.cite": "— Verified Purchase · USA",
    "rev2": "\"The best option I could have bought. One-step automatic cleaning, quiet, easy to use, dual-tank design. It vacuums and cleans at the same time. Compact enough for any corner.\"",
    "rev2.cite": "— Verified Purchase",
    "rev3": "\"Great for homes with pets and kids. I love how easy it is to clean! The self-cleaning feature is a lifesaver — no more pet hair in the brush!\"",
    "rev3.cite": "— Eldis F. · Verified Purchase",
    "rev4": "\"It does a great job on hardwood floors for both wet and dry messes. So happy that I bought this! Wasn't sure how well 2-in-1 would work but I'm very pleased.\"",
    "rev4.cite": "— Verified Purchase · USA",
    "rev5": "\"DONT waste your time looking further. This is by far the best wet vacuum I've bought.\"",
    "rev5.cite": "— Verified Purchase · TikTok Shop",
    "rev6": "\"It makes cleaning fun. Comes with charging base, two mop rollers, two filters, a hair tool, and cleaning solution. Worth every penny.\"",
    "rev6.cite": "— Verified Purchase · Facebook",
    "expert.eyebrow": "Expert Test Score",
    "expert.sub": "Independent review · 15 years of home tech testing",
    "score.suction": "Suction Power",
    "score.ease": "Ease of Use",
    "score.edge": "Edge Cleaning",
    "score.maint": "Maintenance",
    "score.value": "Value for Money",
    "score.battery": "Battery Life",
    "compare.eyebrow": "Side by Side",
    "compare.headline": "ED12 Lite vs. The Competition",
    "compare.feature": "Feature",
    "compare.selfclean": "Self-Cleaning",
    "compare.edge": "Edge Cleaning",
    "compare.weight": "Weight",
    "compare.battery": "Battery",
    "compare.price": "Price Range",
    "compare.tangle": "Anti-Tangle",
    "faq.eyebrow": "Got Questions?",
    "faq.headline": "We've got answers",
    "faq.q1": "Does it work on carpet?",
    "faq.a1": "No — the ED12 Lite is built for hard floors: tile, hardwood, laminate, and vinyl (LVP). It's not designed for carpet use.",
    "faq.q2": "How long does the battery actually last?",
    "faq.a2": "About 30 minutes in Normal mode, 25 in Max mode. That's enough for 2–3 rooms or up to 100 m². Then dock and charge.",
    "faq.q3": "Will pet hair wrap around the brush?",
    "faq.a3": "No. The dual comb scrapers actively cut hair before it can tangle. In independent tests: zero hair stuck on the roller after a full session.",
    "faq.q4": "How loud is it?",
    "faq.a4": "Maximum 76 dBA — quieter than most traditional vacuums. Roughly the same as a normal conversation.",
    "faq.q5": "What comes in the box?",
    "faq.a5": "The ED12 Lite unit, charging base, 2× mop rollers, 2× filters, hair cleaning tool, and a bottle of cleaning solution.",
    "faq.q6": "Can I use regular tap water?",
    "faq.a6": "Yes, tap water works perfectly. You can also add a cleaning tablet for a fresher scent — totally optional.",
    "order.badge": "Limited Stock",
    "order.title": "JONR ED12 Lite",
    "order.sub": "2-in-1 Wet & Dry Vacuum · Cordless · Self-Cleaning",
    "order.includes": "In the box:",
    "box.unit": "ED12 Lite Unit",
    "box.base": "Charging Base",
    "box.rollers": "2× Mop Rollers",
    "box.filters": "2× Filters",
    "box.tool": "Hair Cleaning Tool",
    "box.solution": "Cleaning Solution",
    "trust.secure": "🔒 Secure Checkout",
    "trust.shipping": "📦 Fast Worldwide Shipping",
    "trust.returns": "↩ 30-Day Returns",
    "popup.badge": "Limited Offer",
    "popup.discountLabel": "OFF your order",
    "popup.title": "Get 30% Off Today",
    "popup.sub": "Enter your email and we'll send your exclusive discount code instantly.",
    "popup.placeholder": "Your email address",
    "popup.cta": "Get My 30% Off",
    "popup.codeLabel": "Your code:",
    "popup.successMsg": "Paste it at checkout for 30% off.",
    "popup.shopNow": "Shop Now →",
    "popup.privacy": "No spam. Unsubscribe anytime.",
    "price.was": "$249.00",
    "price.now": "$149.00",
    "price.save": "Save 40%",
    "order.trust": "Secure checkout · 30-day money-back · Free shipping",
    "order.note": "You'll be taken to the secure product page.",
    "footer.copy": "© 2026 ED12 Lite Store. Product descriptions are based on manufacturer data and independent testing.",
    "footer.privacy": "Privacy",
    "footer.imprint": "Imprint",
    "footer.contact": "Contact"
  },
  de: {
    "nav.features": "Features",
    "nav.reels": "Im Trend",
    "nav.reviews": "Bewertungen",
    "nav.faq": "FAQ",
    "cta.buy": "Jetzt bestellen",
    "cta.watch": "In Aktion sehen ↓",
    "hero.badge": "Saugen + Wischen · Kabellos · Selbstreinigend",
    "hero.headline": "Schluss damit, Böden<br/><em>zweimal</em><br/>zu reinigen.",
    "hero.sub": "Der JONR ED12 Lite saugt und wischt in einem Durchgang — und reinigt sich in 35 Sekunden selbst. Kein Kabel. Keine Haare. Kein Stress.",
    "hero.proof": "Vertraut von über 1.000 Kunden weltweit",
    "hero.card1": "Saugkraft",
    "hero.card2": "Selbstreinigung",
    "proof.suction": "Saugkraft",
    "proof.combo": "Saugen + Wischen",
    "proof.battery": "Akkulaufzeit",
    "proof.tank": "Frischwassertank",
    "proof.weight": "Ultraleicht",
    "proof.cordless": "Kabellos",
    "proof.freedom": "Volle Freiheit",
    "reels.headline": "Echte Menschen. Echte Böden. Echte Ergebnisse.",
    "reels.sub": "Schau dir diese viralen Clips an — und entscheide selbst.",
    "reels.youtube": "Auch auf YouTube",
    "reel1.quote": "„Entdecke den ultimativen Reinigungshack! Das ist ein totaler Game Changer."",
    "reel2.quote": "„Diesen kabellosen Nass-Saug-Kombi MUSST du haben. Ich bin begeistert."",
    "reel3.quote": "„Meine Böden waren noch nie so sauber. #jonr #jonred12 #fyp"",
    "short1.quote": "„Fantastisches Preis-Leistungs-Verhältnis – wirklich beeindruckend."",
    "short2.quote": "„Von 3 Schritten auf 1 reduziert. Mit 3 Kindern – das hat alles verändert."",
    "short3.quote": "„7.000 Pa, Kantenwischen, Selbstreinigung. Unter 3,5 kg. Für den Preis? Unglaublich."",
    "short4.quote": "„Sehr starke Saugkraft – 35 Min. Akku im Sparmodus. Super einfach."",
    "problem.eyebrow": "Kennst du das?",
    "problem.headline": "Fegen. Saugen. Wischen. Wiederholen.",
    "problem.body": "Drei Geräte, doppelt so viel Zeit, und ein Mopp der nach dem letzten Einsatz riecht. Es geht auch smarter.",
    "problem.p1": "Kabel immer im Weg",
    "problem.p2": "Schmutzwasser verteilt Bakterien",
    "problem.p3": "Haare wickeln sich um die Bürste",
    "problem.p4": "Ecken bleiben nie wirklich sauber",
    "problem.solution": "Die Lösung",
    "problem.caption": "Ein Gerät. Ein Durchgang. Fertig.",
    "features.eyebrow": "Was ihn besonders macht",
    "features.headline": "Sechs Gründe, warum der ED12 Lite gewinnt",
    "feat1.title": "Saugen + Wischen. Ein Durchgang.",
    "feat1.body": "40 Präzisionsdüsen verteilen sauberes Wasser gleichmäßig auf der Walze, während 7.000 Pa Saugkraft trockenen Schmutz aufnimmt – alles gleichzeitig.",
    "feat1.stat1": "40 Düsen",
    "feat1.stat2": "für streifenfreie Reinigung",
    "feat2.title": "Selbstreinigung in 35 Sek.",
    "feat2.body": "Ein Knopfdruck. Walze und Schläuche spülen sich automatisch. Keine Hände, kein Chaos, kein Geruch.",
    "feat3.title": "Nur 3,6 kg – selbstangetrieben",
    "feat3.body": "Leichter als eine Einkaufstasche. Die rotierende Bürste erzeugt Vorwärtsbewegung – gleitet fast von selbst. Ideal für große Wohnungen.",
    "feat4.title": "6 mm Kantenwischen",
    "feat4.body": "Die Walze kommt bis auf 6 mm an Wände und Sockelleisten heran. In Tests besser als Modelle zum dreifachen Preis.",
    "feat5.title": "Null Haarwickeln",
    "feat5.body": "Doppelte Kammabstreifer schneiden Haare bevor sie sich wickeln können. Im Test: nach einer ganzen Session kein einziges Haar auf der Walze.",
    "feat6.title": "Dual-Tank: Sauber bleibt sauber",
    "feat6.body": "850 ml Frischwasser + 450 ml Schmutzwasser. Beide tanks mischen sich nie – du wischt immer mit frischem Wasser.",
    "feat6.stat1": "100 m²",
    "feat6.stat2": "ohne Nachfüllen",
    "howto.eyebrow": "So funktioniert's",
    "howto.headline": "Drei Schritte bis zum makellosen Boden",
    "step1.title": "Tank befüllen",
    "step1.body": "Frischwassertank öffnen, bis zu 850 ml Wasser einfüllen. Optional Reinigungsstein dazu. Einrasten. Fertig.",
    "step2.title": "Einschalten & loslegen",
    "step2.body": "Einschalten, Normal oder Stark wählen, über den Boden gleiten. Ein Durchgang – gesaugt und gewischt.",
    "step3.title": "Selbstreinigung & Dock",
    "step3.body": "Selbstreinigungs-Taste 35 Sekunden halten. Walze und Schläuche spülen sich. Auf die Ladestation stellen. Fertig für nächstes Mal.",
    "specs.eyebrow": "Technische Daten",
    "specs.headline": "Die Zahlen die zählen",
    "specs.body": "Kein Marketing-Blabla – nur was du wirklich wissen möchtest.",
    "spec.model": "Modell",
    "spec.suction": "Saugkraft",
    "spec.power": "Motorleistung",
    "spec.cleantank": "Frischwassertank",
    "spec.dirtytank": "Schmutzwassertank",
    "spec.weight": "Gewicht",
    "spec.runtime": "Akkulaufzeit",
    "spec.selfclean": "Selbstreinigungszyklus",
    "spec.noise": "Geräuschpegel",
    "spec.modes": "Reinigungsmodi",
    "spec.modes.val": "Normal + Stark",
    "spec.edge": "Kantenwischen",
    "spec.size": "Maße",
    "reviews.eyebrow": "Echte Käufer. Ehrliche Worte.",
    "reviews.headline": "Was Kunden sagen",
    "reviews.rating": "4,7 / 5 · Über 1.000 Bewertungen",
    "rev1": "„Ich liebe diesen Wischsauger! Keine lästigen Kabel mehr. Die Selbstreinigung ist FANTASTISCH! Akku super, leicht und selbstfahrend. Genial für eine Mama mit zwei chaotischen Kindern!"",
    "rev1.cite": "— Verifizierter Kauf · USA",
    "rev2": "„Die beste Option die ich hätte wählen können. Automatische Einschritt-Reinigung, leise, einfach zu bedienen. Saugt und wischt gleichzeitig."",
    "rev2.cite": "— Verifizierter Kauf",
    "rev3": "„Super für Haushalte mit Haustieren und Kindern. Die Selbstreinigung ist ein Lebensretter!"",
    "rev3.cite": "— Eldis F. · Verifizierter Kauf",
    "rev4": "„Macht einen tollen Job auf Hartholzböden. So froh, dass ich ihn gekauft habe!"",
    "rev4.cite": "— Verifizierter Kauf · USA",
    "rev5": "„Verschwendet eure Zeit nicht mit der Suche. Das ist bei weitem der beste Nass-Sauger den ich je gekauft habe."",
    "rev5.cite": "— Verifizierter Kauf · TikTok Shop",
    "rev6": "„Macht Spaß beim Reinigen. Mit Ladestation, zwei Mopprollen, zwei Filtern, Haarbürste und Reinigungsmittel."",
    "rev6.cite": "— Verifizierter Kauf · Facebook",
    "expert.eyebrow": "Expertentestergebnis",
    "expert.sub": "Unabhängiger Test · 15 Jahre Haushaltsgeräte-Erfahrung",
    "score.suction": "Saugkraft",
    "score.ease": "Bedienbarkeit",
    "score.edge": "Kantenwischen",
    "score.maint": "Wartung",
    "score.value": "Preis-Leistung",
    "score.battery": "Akkulaufzeit",
    "compare.eyebrow": "Vergleich",
    "compare.headline": "ED12 Lite vs. Konkurrenz",
    "compare.feature": "Feature",
    "compare.selfclean": "Selbstreinigung",
    "compare.edge": "Kantenwischen",
    "compare.weight": "Gewicht",
    "compare.battery": "Akku",
    "compare.price": "Preisklasse",
    "compare.tangle": "Anti-Tangle",
    "faq.eyebrow": "Fragen?",
    "faq.headline": "Wir haben Antworten",
    "faq.q1": "Funktioniert er auf Teppich?",
    "faq.a1": "Nein – der ED12 Lite ist für Hartböden: Fliesen, Parkett, Laminat, Vinyl. Nicht für Teppiche geeignet.",
    "faq.q2": "Wie lange hält der Akku wirklich?",
    "faq.a2": "Ca. 30 Min. im Normalmodus, 25 im Stark-Modus. Das reicht für 2–3 Zimmer oder bis zu 100 m².",
    "faq.q3": "Wickeln sich Haare in die Bürste?",
    "faq.a3": "Nein. Die doppelten Kammabstreifer schneiden Haare aktiv ab. Im Test: kein einziges Haar auf der Walze.",
    "faq.q4": "Wie laut ist er?",
    "faq.a4": "Maximal 76 dBA – leiser als die meisten Staubsauger. Vergleichbar mit einem normalen Gespräch.",
    "faq.q5": "Was ist im Lieferumfang?",
    "faq.a5": "Gerät, Ladestation, 2× Mopprollen, 2× Filter, Haarbürste und Reinigungslösung.",
    "faq.q6": "Kann ich normales Leitungswasser verwenden?",
    "faq.a6": "Ja, Leitungswasser funktioniert perfekt. Optional Reinigungsstein für frischeren Geruch.",
    "order.badge": "Begrenzte Stückzahl",
    "order.title": "JONR ED12 Lite",
    "order.sub": "2-in-1 Nass-Trocken-Sauger · Kabellos · Selbstreinigend",
    "order.includes": "Im Lieferumfang:",
    "box.unit": "ED12 Lite Gerät",
    "box.base": "Ladestation",
    "box.rollers": "2× Mopprollen",
    "box.filters": "2× Filter",
    "box.tool": "Haarreinigungswerkzeug",
    "box.solution": "Reinigungslösung",
    "trust.secure": "🔒 Sichere Zahlung",
    "trust.shipping": "📦 Schneller Weltweiter Versand",
    "trust.returns": "↩ 30 Tage Rückgabe",
    "popup.badge": "Limitiertes Angebot",
    "popup.discountLabel": "RABATT auf deine Bestellung",
    "popup.title": "30% Rabatt sichern",
    "popup.sub": "Trag deine E-Mail ein und erhalte sofort deinen exklusiven Rabattcode.",
    "popup.placeholder": "Deine E-Mail-Adresse",
    "popup.cta": "30% Rabatt holen",
    "popup.codeLabel": "Dein Code:",
    "popup.successMsg": "Code kopieren und beim Checkout einlösen.",
    "popup.shopNow": "Jetzt kaufen →",
    "popup.privacy": "Kein Spam. Jederzeit abmeldbar.",
    "price.was": "249,00 €",
    "price.now": "149,00 €",
    "price.save": "40% sparen",
    "order.trust": "Sicherer Checkout · 30 Tage Geld-zurück · Kostenloser Versand",
    "order.note": "Du wirst zur gesicherten Bestellseite weitergeleitet.",
    "footer.copy": "© 2026 ED12 Lite Store. Produktbeschreibungen basieren auf Herstellerangaben und unabhängigen Tests.",
    "footer.privacy": "Datenschutz",
    "footer.imprint": "Impressum",
    "footer.contact": "Kontakt"
  },
  fr: {
    "nav.features":"Fonctionnalités","nav.reels":"Vu sur TikTok","nav.reviews":"Avis","nav.faq":"FAQ",
    "cta.buy":"Commander maintenant","cta.watch":"Voir en action ↓",
    "hero.badge":"Aspire + Lave · Sans fil · Auto-nettoyant",
    "hero.headline":"Arrêtez de nettoyer vos sols<br/><em>deux fois.</em>",
    "hero.sub":"Le JONR ED12 Lite aspire et lave en un seul passage — puis se nettoie seul en 35 secondes. Sans fil. Sans nœuds. Sans stress.",
    "hero.proof":"Approuvé par plus de 1 000 clients dans le monde",
    "hero.card1":"Puissance d'aspiration","hero.card2":"Auto-nettoyage",
    "proof.suction":"Aspiration","proof.combo":"Aspire + Lave","proof.battery":"Autonomie","proof.tank":"Réservoir propre","proof.weight":"Ultra-léger","proof.cordless":"Sans fil","proof.freedom":"Liberté totale",
    "reels.headline":"De vraies personnes. De vrais sols. De vrais résultats.",
    "reels.sub":"Regardez ces vidéos virales sur TikTok & YouTube — puis décidez vous-même.",
    "reels.youtube":"Aussi sur YouTube",
    "reel1.quote":"\"Découvrez le hack ultime pour nettoyer ! C'est un vrai game changer.\"",
    "reel2.quote":"\"Ce aspirateur sans fil est un incontournable. Je suis obsédée.\"",
    "reel3.quote":"\"Mes sols n'ont jamais été aussi propres. #jonr #jonred12 #fyp\"",
    "short1.quote":"\"Un rapport qualité-prix fantastique — vraiment impressionné.\"",
    "short2.quote":"\"On est passé de 3 étapes à 1 seule. Avec 3 enfants — ça a tout changé.\"",
    "short3.quote":"\"7 000 Pa, nettoyage des bords, auto-nettoyage. Moins de 3,5 kg. Incroyable.\"",
    "short4.quote":"\"Aspiration très puissante — batterie 35 min en mode doux. Super facile.\"",
    "problem.eyebrow":"Ça vous parle ?","problem.headline":"Balayer. Aspirer. Laver. Répéter.",
    "problem.body":"Trois outils, deux fois plus de temps, et une serpillière qui sent le dernier usage.",
    "problem.p1":"Le fil toujours dans le chemin","problem.p2":"L'eau sale répand des bactéries","problem.p3":"Les poils d'animaux s'enroulent","problem.p4":"Les coins jamais vraiment propres",
    "problem.solution":"La solution","problem.caption":"Un appareil. Un passage. C'est fait.",
    "features.eyebrow":"Ce qui le différencie","features.headline":"Six raisons pour lesquelles l'ED12 Lite gagne",
    "feat1.title":"Aspire + Lave. Un passage.","feat1.body":"40 jets d'eau précis distribuent l'eau propre uniformément pendant que l'aspiration 7 000 Pa soulève les débris secs — simultanément.","feat1.stat1":"40 jets","feat1.stat2":"pour un nettoyage sans traces",
    "feat2.title":"Auto-nettoyage en 35 sec.","feat2.body":"Un bouton. Le rouleau et les tuyaux se rincent automatiquement.",
    "feat3.title":"Seulement 3,6 kg — autopropulsé","feat3.body":"Plus léger qu'un sac de courses. Il glisse presque tout seul.",
    "feat4.title":"Nettoyage des bords à 6 mm","feat4.body":"Le rouleau s'approche à 6 mm des murs et des plinthes.",
    "feat5.title":"Zéro enchevêtrement de poils","feat5.body":"Des racloirs doubles coupent les cheveux avant qu'ils puissent s'enrouler.",
    "feat6.title":"Double réservoir : propre reste propre","feat6.body":"850 ml d'eau propre + 450 ml d'eau sale. Jamais mélangées.","feat6.stat1":"100 m²","feat6.stat2":"sans remplissage",
    "howto.eyebrow":"Comment ça marche","howto.headline":"Trois étapes pour des sols impeccables",
    "step1.title":"Remplir le réservoir","step1.body":"Ouvrez le réservoir d'eau propre, remplissez jusqu'à 850 ml.",
    "step2.title":"Allumer et y aller","step2.body":"Appuyez sur le bouton, choisissez Normal ou Max, et glissez sur vos sols.",
    "step3.title":"Auto-nettoyage & station","step3.body":"Maintenez le bouton 35 secondes. Posez sur la base de charge.",
    "specs.eyebrow":"Caractéristiques","specs.headline":"Les chiffres qui comptent","specs.body":"Pas de marketing — juste ce que vous voulez vraiment savoir.",
    "spec.model":"Modèle","spec.suction":"Puissance d'aspiration","spec.power":"Puissance moteur","spec.cleantank":"Réservoir eau propre","spec.dirtytank":"Réservoir eau sale","spec.weight":"Poids","spec.runtime":"Autonomie batterie","spec.selfclean":"Cycle auto-nettoyage","spec.noise":"Niveau sonore","spec.modes":"Modes","spec.modes.val":"Normal + Max","spec.edge":"Nettoyage des bords","spec.size":"Dimensions",
    "reviews.eyebrow":"Vrais acheteurs. Mots honnêtes.","reviews.headline":"Ce que disent les clients","reviews.rating":"4,7 / 5 · Plus de 1 000 avis",
    "rev1":"\"J'adore cet aspirateur laveur ! Plus de fil. L'auto-nettoyage est FANTASTIQUE !\"","rev1.cite":"— Achat vérifié · USA",
    "rev2":"\"La meilleure option. Nettoyage automatique en une étape, silencieux, facile.\"","rev2.cite":"— Achat vérifié",
    "rev3":"\"Parfait pour les maisons avec animaux. L'auto-nettoyage est un sauveur !\"","rev3.cite":"— Eldis F. · Achat vérifié",
    "rev4":"\"Excellent sur parquet. Tellement content de cet achat !\"","rev4.cite":"— Achat vérifié · USA",
    "rev5":"\"Ne perdez pas de temps à chercher. Le meilleur aspirateur eau que j'aie acheté.\"","rev5.cite":"— Achat vérifié · TikTok Shop",
    "rev6":"\"Rend le nettoyage amusant. Livré avec base, deux rouleaux, deux filtres.\"","rev6.cite":"— Achat vérifié · Facebook",
    "expert.eyebrow":"Score d'expert","expert.sub":"Test indépendant · 15 ans d'expérience",
    "score.suction":"Aspiration","score.ease":"Facilité d'utilisation","score.edge":"Nettoyage des bords","score.maint":"Entretien","score.value":"Rapport qualité-prix","score.battery":"Batterie",
    "compare.eyebrow":"Comparaison","compare.headline":"ED12 Lite vs. La Concurrence","compare.feature":"Fonctionnalité","compare.selfclean":"Auto-nettoyage","compare.edge":"Bords","compare.weight":"Poids","compare.battery":"Batterie","compare.price":"Prix","compare.tangle":"Anti-enchevêtrement",
    "faq.eyebrow":"Des questions ?","faq.headline":"On a les réponses",
    "faq.q1":"Fonctionne-t-il sur moquette ?","faq.a1":"Non — conçu pour sols durs : carrelage, parquet, stratifié, vinyle.",
    "faq.q2":"Quelle est la vraie autonomie ?","faq.a2":"Environ 30 min en mode Normal, 25 en Max.",
    "faq.q3":"Les poils s'enroulent-ils ?","faq.a3":"Non. Les racloirs doubles coupent les poils. Zéro enchevêtrement.",
    "faq.q4":"C'est bruyant ?","faq.a4":"76 dBA max — moins bruyant que la plupart des aspirateurs.",
    "faq.q5":"Que contient la boîte ?","faq.a5":"L'appareil, base de charge, 2× rouleaux, 2× filtres, outil à cheveux, solution nettoyante.",
    "faq.q6":"Eau du robinet possible ?","faq.a6":"Oui, parfaitement. Vous pouvez aussi ajouter une tablette nettoyante.",
    "order.badge":"Stock limité","order.title":"JONR ED12 Lite","order.sub":"Aspirateur laveur 2-en-1 · Sans fil · Auto-nettoyant","order.includes":"Dans la boîte :","box.unit":"Appareil ED12 Lite","box.base":"Base de charge","box.rollers":"2× Rouleaux laveurs","box.filters":"2× Filtres","box.tool":"Outil à cheveux","box.solution":"Solution nettoyante",
    "trust.secure":"🔒 Paiement sécurisé","trust.shipping":"📦 Livraison mondiale rapide","trust.returns":"↩ Retours sous 30 jours",
    "popup.badge":"Offre limitée","popup.discountLabel":"DE RÉDUCTION sur votre commande","popup.title":"Obtenez -30% aujourd'hui","popup.sub":"Entrez votre email et recevez votre code de réduction instantanément.","popup.placeholder":"Votre adresse email","popup.cta":"Obtenir mes -30%","popup.codeLabel":"Votre code :","popup.successMsg":"Collez-le au checkout pour -30%.","popup.shopNow":"Commander →","popup.privacy":"Aucun spam. Désabonnement possible à tout moment.",
    "price.was":"249,00 €",
    "price.now":"149,00 €",
    "price.save":"-40%",
    "order.trust":"Paiement sécurisé · Remboursement 30 jours · Livraison offerte",
    "order.note":"Vous serez redirigé vers la page produit sécurisée.",
    "footer.copy":"© 2026 ED12 Lite Store. Descriptions basées sur les données fabricant et les tests indépendants.","footer.privacy":"Confidentialité","footer.imprint":"Mentions légales","footer.contact":"Contact"
  },
  es: {
    "nav.features":"Características","nav.reels":"En TikTok","nav.reviews":"Reseñas","nav.faq":"FAQ",
    "cta.buy":"Pedir ahora","cta.watch":"Verlo en acción ↓",
    "hero.badge":"Aspira + Friega · Inalámbrico · Autolimpiante",
    "hero.headline":"Deja de limpiar el suelo<br/><em>dos veces.</em>",
    "hero.sub":"El JONR ED12 Lite aspira y friega en un solo paso — y se limpia solo en 35 segundos. Sin cables. Sin enredos. Sin estrés.",
    "hero.proof":"Confiado por más de 1.000 clientes en todo el mundo",
    "hero.card1":"Potencia de aspiración","hero.card2":"Autolimpieza",
    "proof.suction":"Aspiración","proof.combo":"Aspira + Friega","proof.battery":"Batería","proof.tank":"Depósito de agua","proof.weight":"Ultra-ligero","proof.cordless":"Inalámbrico","proof.freedom":"Total libertad",
    "reels.headline":"Personas reales. Suelos reales. Resultados reales.",
    "reels.sub":"Mira estos clips virales de TikTok & YouTube — y decide tú mismo.",
    "reels.youtube":"También en YouTube",
    "reel1.quote":"\"¡El hack definitivo para limpiar! Es un cambio total de juego.\"",
    "reel2.quote":"\"¡Esta aspiradora inalámbrica es imprescindible! Estoy obsesionada.\"",
    "reel3.quote":"\"Mis suelos nunca han estado tan limpios. #jonr #jonred12 #fyp\"",
    "short1.quote":"\"Relación calidad-precio fantástica — genuinamente impresionado.\"",
    "short2.quote":"\"Reducimos la limpieza de 3 pasos a 1. Con 3 niños pequeños — cambió todo.\"",
    "short3.quote":"\"7.000 Pa, limpieza de bordes, autolimpieza. Menos de 3,5 kg. ¿Por ese precio? Increíble.\"",
    "short4.quote":"\"Aspiración muy potente — batería 35 min en modo bajo. Muy fácil de usar.\"",
    "problem.eyebrow":"¿Te suena familiar?","problem.headline":"Barrer. Aspirar. Fregar. Repetir.",
    "problem.body":"Tres herramientas, el doble de tiempo, y una fregona que huele al último uso.",
    "problem.p1":"El cable siempre estorba","problem.p2":"El agua sucia esparce bacterias","problem.p3":"El pelo de mascotas se enreda","problem.p4":"Las esquinas nunca quedan limpias",
    "problem.solution":"La solución","problem.caption":"Un dispositivo. Un paso. Hecho.",
    "features.eyebrow":"Lo que lo hace diferente","features.headline":"Seis razones por las que gana el ED12 Lite",
    "feat1.title":"Aspira + Friega. Un paso.","feat1.body":"40 boquillas de agua distribuyen agua limpia mientras 7.000 Pa de aspiración recoge suciedad seca — simultáneamente.","feat1.stat1":"40 boquillas","feat1.stat2":"para cobertura sin rayas",
    "feat2.title":"Se limpia en 35 seg.","feat2.body":"Un botón. El rodillo y los tubos se enjuagan automáticamente.",
    "feat3.title":"Solo 3,6 kg — autopropulsado","feat3.body":"Más ligero que la compra. Se desliza casi solo.",
    "feat4.title":"Limpieza de bordes a 6 mm","feat4.body":"El rodillo llega a 6 mm de paredes y rodapiés.",
    "feat5.title":"Cero enredos de pelo","feat5.body":"Raspadores dobles cortan el pelo antes de que pueda enredarse.",
    "feat6.title":"Doble depósito: limpio sigue limpio","feat6.body":"850 ml de agua limpia + 450 ml de agua sucia. Nunca se mezclan.","feat6.stat1":"100 m²","feat6.stat2":"sin recargar",
    "howto.eyebrow":"Cómo funciona","howto.headline":"Tres pasos para suelos impecables",
    "step1.title":"Llena el depósito","step1.body":"Abre el depósito, llena hasta 850 ml de agua.",
    "step2.title":"Enciende y empieza","step2.body":"Pulsa encendido, elige Normal o Max, y desliza por el suelo.",
    "step3.title":"Autolimpieza & base","step3.body":"Mantén el botón 35 seg. Coloca en la base de carga.",
    "specs.eyebrow":"Especificaciones","specs.headline":"Los números que importan","specs.body":"Sin marketing — solo lo que realmente quieres saber.",
    "spec.model":"Modelo","spec.suction":"Potencia aspiración","spec.power":"Potencia motor","spec.cleantank":"Depósito agua limpia","spec.dirtytank":"Depósito agua sucia","spec.weight":"Peso","spec.runtime":"Autonomía batería","spec.selfclean":"Ciclo autolimpieza","spec.noise":"Nivel de ruido","spec.modes":"Modos","spec.modes.val":"Normal + Max","spec.edge":"Limpieza de bordes","spec.size":"Dimensiones",
    "reviews.eyebrow":"Compradores reales. Palabras honestas.","reviews.headline":"Lo que dicen los clientes","reviews.rating":"4,7 / 5 · Más de 1.000 reseñas",
    "rev1":"\"¡Me encanta este aspirafregona! Sin cables. ¡La autolimpieza es FANTÁSTICA!\"","rev1.cite":"— Compra verificada · USA",
    "rev2":"\"La mejor opción. Limpieza automática en un paso, silenciosa, fácil de usar.\"","rev2.cite":"— Compra verificada",
    "rev3":"\"Perfecto para hogares con mascotas. ¡La autolimpieza es un salvavidas!\"","rev3.cite":"— Eldis F. · Compra verificada",
    "rev4":"\"Excelente en suelos de madera. ¡Tan contento de haberlo comprado!\"","rev4.cite":"— Compra verificada · USA",
    "rev5":"\"No pierdas el tiempo buscando. El mejor aspirador en húmedo que he comprado.\"","rev5.cite":"— Compra verificada · TikTok Shop",
    "rev6":"\"Hace que limpiar sea divertido. Con base, dos rodillos, filtros y solución.\"","rev6.cite":"— Compra verificada · Facebook",
    "expert.eyebrow":"Puntuación experta","expert.sub":"Test independiente · 15 años de experiencia",
    "score.suction":"Aspiración","score.ease":"Facilidad de uso","score.edge":"Limpieza bordes","score.maint":"Mantenimiento","score.value":"Calidad-precio","score.battery":"Batería",
    "compare.eyebrow":"Comparativa","compare.headline":"ED12 Lite vs. La Competencia","compare.feature":"Característica","compare.selfclean":"Autolimpieza","compare.edge":"Bordes","compare.weight":"Peso","compare.battery":"Batería","compare.price":"Precio","compare.tangle":"Anti-enredo",
    "faq.eyebrow":"¿Preguntas?","faq.headline":"Tenemos respuestas",
    "faq.q1":"¿Funciona en moqueta?","faq.a1":"No — diseñado para suelos duros: azulejos, madera, laminado, vinilo.",
    "faq.q2":"¿Cuánto dura la batería realmente?","faq.a2":"Unos 30 min en modo Normal, 25 en Max.",
    "faq.q3":"¿Se enreda el pelo?","faq.a3":"No. Los raspadores dobles cortan el pelo antes de enredarse.",
    "faq.q4":"¿Es ruidoso?","faq.a4":"Máx. 76 dBA — más silencioso que la mayoría de aspiradoras.",
    "faq.q5":"¿Qué viene en la caja?","faq.a5":"El aparato, base de carga, 2× rodillos, 2× filtros, herramienta de pelo, solución limpiadora.",
    "faq.q6":"¿Agua del grifo?","faq.a6":"Sí, perfectamente. Puedes añadir una pastilla limpiadora opcional.",
    "order.badge":"Stock limitado","order.title":"JONR ED12 Lite","order.sub":"Aspirafregona 2 en 1 · Inalámbrico · Autolimpiante","order.includes":"En la caja:","box.unit":"Aparato ED12 Lite","box.base":"Base de carga","box.rollers":"2× Rodillos de fregona","box.filters":"2× Filtros","box.tool":"Herramienta para pelo","box.solution":"Solución limpiadora",
    "trust.secure":"🔒 Pago seguro","trust.shipping":"📦 Envío mundial rápido","trust.returns":"↩ Devoluciones 30 días",
    "popup.badge":"Oferta limitada","popup.discountLabel":"DE DESCUENTO en tu pedido","popup.title":"Consigue un 30% de descuento","popup.sub":"Introduce tu email y recibe tu código exclusivo al instante.","popup.placeholder":"Tu dirección de email","popup.cta":"Obtener mi 30% de descuento","popup.codeLabel":"Tu código:","popup.successMsg":"Pégalo en el checkout para un 30% de descuento.","popup.shopNow":"Comprar ahora →","popup.privacy":"Sin spam. Cancela cuando quieras.",
    "price.was":"249,00 €",
    "price.now":"149,00 €",
    "price.save":"-40%",
    "order.trust":"Pago seguro · Devolución 30 días · Envío gratis",
    "order.note":"Serás redirigido a la página de producto segura.",
    "footer.copy":"© 2026 ED12 Lite Store. Descripciones basadas en datos del fabricante y pruebas independientes.","footer.privacy":"Privacidad","footer.imprint":"Aviso legal","footer.contact":"Contacto"
  },
  pt: {
    "nav.features":"Recursos","nav.reels":"No TikTok","nav.reviews":"Avaliações","nav.faq":"FAQ",
    "cta.buy":"Comprar agora","cta.watch":"Ver em ação ↓",
    "hero.badge":"Aspira + Lava · Sem fio · Auto-limpante",
    "hero.headline":"Pare de limpar o chão<br/><em>duas vezes.</em>",
    "hero.sub":"O JONR ED12 Lite aspira e esfrega em uma única passagem — e se limpa em 35 segundos. Sem fio. Sem enrolamento. Sem drama.",
    "hero.proof":"Confiado por mais de 1.000 clientes no mundo",
    "hero.card1":"Potência de sucção","hero.card2":"Auto-limpeza",
    "proof.suction":"Sucção","proof.combo":"Aspira + Lava","proof.battery":"Bateria","proof.tank":"Reservatório limpo","proof.weight":"Ultra-leve","proof.cordless":"Sem fio","proof.freedom":"Total liberdade",
    "reels.headline":"Pessoas reais. Pisos reais. Resultados reais.",
    "reels.sub":"Veja estes clipes virais do TikTok & YouTube — e decida por si mesmo.",
    "reels.youtube":"Também no YouTube",
    "reel1.quote":"\"O hack definitivo de limpeza! Isso é uma virada de jogo total.\"",
    "reel2.quote":"\"Este aspirador sem fio é imprescindível. Estou obcecada.\"",
    "reel3.quote":"\"Meus pisos nunca estiveram tão limpos. #jonr #jonred12 #fyp\"",
    "short1.quote":"\"Custo-benefício fantástico — genuinamente impressionado.\"",
    "short2.quote":"\"Reduzimos a limpeza de 3 etapas para 1. Com 3 filhos — isso mudou tudo.\"",
    "short3.quote":"\"7.000 Pa, limpeza de bordas, auto-limpeza. Menos de 3,5 kg. Incrível.\"",
    "short4.quote":"\"Sucção muito forte — bateria 35 min no modo baixo. Super fácil de usar.\"",
    "problem.eyebrow":"Parece familiar?","problem.headline":"Varrer. Aspirar. Esfregar. Repetir.",
    "problem.body":"Três ferramentas, o dobro do tempo, e um esfregão que cheira ao último uso.",
    "problem.p1":"O fio sempre no caminho","problem.p2":"Água suja espalha bactérias","problem.p3":"Pelos se enrolam na escova","problem.p4":"Cantos nunca ficam limpos",
    "problem.solution":"A solução","problem.caption":"Um dispositivo. Uma passagem. Pronto.",
    "features.eyebrow":"O que o diferencia","features.headline":"Seis razões pelas quais o ED12 Lite vence",
    "feat1.title":"Aspira + Lava. Uma passagem.","feat1.body":"40 jatos de água distribuem água limpa enquanto 7.000 Pa de sucção levanta detritos secos — simultaneamente.","feat1.stat1":"40 jatos","feat1.stat2":"para cobertura sem listras",
    "feat2.title":"Auto-limpa em 35 seg.","feat2.body":"Um botão. O rolo e os tubos se enxaguam automaticamente.",
    "feat3.title":"Apenas 3,6 kg — autopropulsado","feat3.body":"Mais leve que uma sacola de compras. Desliza quase sozinho.",
    "feat4.title":"Limpeza de bordas a 6 mm","feat4.body":"O rolo chega a 6 mm de paredes e rodapés.",
    "feat5.title":"Zero enrolamento de pelo","feat5.body":"Raspadores duplos cortam pelos antes de enrolarem.",
    "feat6.title":"Tanque duplo: limpo permanece limpo","feat6.body":"850 ml de água limpa + 450 ml de água suja. Nunca se misturam.","feat6.stat1":"100 m²","feat6.stat2":"sem reabastecer",
    "howto.eyebrow":"Como funciona","howto.headline":"Três passos para pisos impecáveis",
    "step1.title":"Encher o tanque","step1.body":"Abra o tanque, encha com até 850 ml de água.",
    "step2.title":"Ligar e começar","step2.body":"Pressione ligar, escolha Normal ou Máx, e deslize pelo chão.",
    "step3.title":"Auto-limpeza & base","step3.body":"Segure o botão por 35 seg. Coloque na base de carga.",
    "specs.eyebrow":"Especificações","specs.headline":"Os números que importam","specs.body":"Sem marketing — só o que você realmente quer saber.",
    "spec.model":"Modelo","spec.suction":"Potência de sucção","spec.power":"Potência do motor","spec.cleantank":"Tanque água limpa","spec.dirtytank":"Tanque água suja","spec.weight":"Peso","spec.runtime":"Autonomia da bateria","spec.selfclean":"Ciclo auto-limpeza","spec.noise":"Nível de ruído","spec.modes":"Modos","spec.modes.val":"Normal + Máx","spec.edge":"Limpeza de bordas","spec.size":"Dimensões",
    "reviews.eyebrow":"Compradores reais. Palavras honestas.","reviews.headline":"O que os clientes dizem","reviews.rating":"4,7 / 5 · Mais de 1.000 avaliações",
    "rev1":"\"Adoro este aspirador lavador! Sem fio. A auto-limpeza é FANTÁSTICA!\"","rev1.cite":"— Compra verificada · EUA",
    "rev2":"\"A melhor opção. Limpeza automática em um passo, silencioso, fácil.\"","rev2.cite":"— Compra verificada",
    "rev3":"\"Ótimo para casas com pets. A auto-limpeza é um salva-vidas!\"","rev3.cite":"— Eldis F. · Compra verificada",
    "rev4":"\"Excelente em pisos de madeira. Tão feliz com a compra!\"","rev4.cite":"— Compra verificada · EUA",
    "rev5":"\"Não perca tempo procurando. O melhor aspirador úmido que comprei.\"","rev5.cite":"— Compra verificada · TikTok Shop",
    "rev6":"\"Torna a limpeza divertida. Com base, dois rolos, filtros e solução.\"","rev6.cite":"— Compra verificada · Facebook",
    "expert.eyebrow":"Pontuação de especialista","expert.sub":"Teste independente · 15 anos de experiência",
    "score.suction":"Sucção","score.ease":"Facilidade de uso","score.edge":"Bordas","score.maint":"Manutenção","score.value":"Custo-benefício","score.battery":"Bateria",
    "compare.eyebrow":"Comparativo","compare.headline":"ED12 Lite vs. A Concorrência","compare.feature":"Recurso","compare.selfclean":"Auto-limpeza","compare.edge":"Bordas","compare.weight":"Peso","compare.battery":"Bateria","compare.price":"Preço","compare.tangle":"Anti-enrolamento",
    "faq.eyebrow":"Perguntas?","faq.headline":"Temos respostas",
    "faq.q1":"Funciona em tapete?","faq.a1":"Não — projetado para pisos duros: cerâmica, madeira, laminado, vinílico.",
    "faq.q2":"Quanto dura a bateria de verdade?","faq.a2":"Cerca de 30 min no modo Normal, 25 no Máx.",
    "faq.q3":"Pelo vai se enrolar?","faq.a3":"Não. Os raspadores duplos cortam pelos antes de enrolarem.",
    "faq.q4":"É barulhento?","faq.a4":"Máx. 76 dBA — mais silencioso que a maioria dos aspiradores.",
    "faq.q5":"O que vem na caixa?","faq.a5":"O aparelho, base de carga, 2× rolos, 2× filtros, ferramenta de pelos, solução de limpeza.",
    "faq.q6":"Água da torneira?","faq.a6":"Sim, funciona perfeitamente. Você pode adicionar um comprimido limpador opcional.",
    "order.badge":"Estoque limitado","order.title":"JONR ED12 Lite","order.sub":"Aspirador lavador 2 em 1 · Sem fio · Auto-limpante","order.includes":"Na caixa:","box.unit":"Aparelho ED12 Lite","box.base":"Base de carga","box.rollers":"2× Rolos de mopa","box.filters":"2× Filtros","box.tool":"Ferramenta de pelos","box.solution":"Solução de limpeza",
    "trust.secure":"🔒 Pagamento seguro","trust.shipping":"📦 Entrega rápida mundial","trust.returns":"↩ Devoluções em 30 dias",
    "popup.badge":"Oferta limitada","popup.discountLabel":"DE DESCONTO no seu pedido","popup.title":"Ganhe 30% de desconto","popup.sub":"Digite seu email e receba seu código exclusivo na hora.","popup.placeholder":"Seu endereço de email","popup.cta":"Pegar meus 30% de desconto","popup.codeLabel":"Seu código:","popup.successMsg":"Cole no checkout para 30% de desconto.","popup.shopNow":"Comprar agora →","popup.privacy":"Sem spam. Cancele quando quiser.",
    "price.was":"R$ 1.299,00",
    "price.now":"R$ 779,00",
    "price.save":"Economize 40%",
    "order.trust":"Pagamento seguro · Devolução 30 dias · Frete grátis",
    "order.note":"Você será redirecionado para a página segura do produto.",
    "footer.copy":"© 2026 ED12 Lite Store. Descrições baseadas em dados do fabricante e testes independentes.","footer.privacy":"Privacidade","footer.imprint":"Aviso legal","footer.contact":"Contato"
  },
  ar: {
    "nav.features":"المميزات","nav.reels":"على تيك توك","nav.reviews":"التقييمات","nav.faq":"الأسئلة",
    "cta.buy":"اطلب الآن","cta.watch":"شاهده في العمل ↓",
    "hero.badge":"شفط + مسح · لاسلكي · تنظيف ذاتي",
    "hero.headline":"توقف عن تنظيف أرضياتك<br/><em>مرتين.</em>",
    "hero.sub":"JONR ED12 Lite يشفط ويمسح في مرور واحد — ويُنظّف نفسه في 35 ثانية. بلا أسلاك. بلا تشابك. بلا متاعب.",
    "hero.proof":"موثوق به من أكثر من 1000 عميل حول العالم",
    "hero.card1":"قوة الشفط","hero.card2":"التنظيف الذاتي",
    "proof.suction":"الشفط","proof.combo":"شفط + مسح","proof.battery":"عمر البطارية","proof.tank":"خزان الماء النظيف","proof.weight":"خفيف جداً","proof.cordless":"لاسلكي","proof.freedom":"حرية تامة",
    "reels.headline":"أشخاص حقيقيون. أرضيات حقيقية. نتائج حقيقية.",
    "reels.sub":"شاهد هذه المقاطع الرائجة على تيك توك ويوتيوب — ثم قرر بنفسك.",
    "reels.youtube":"أيضاً على يوتيوب",
    "reel1.quote":"\"اكتشف الحيلة المثالية للتنظيف! هذا تغيير جذري كلي.\"",
    "reel2.quote":"\"هذا المكنسة اللاسلكية ضرورة. أنا مدمنة عليها.\"",
    "reel3.quote":"\"أرضياتي لم تكن نظيفة بهذا الشكل قط. #jonr #fyp\"",
    "short1.quote":"\"قيمة مقابل المال رائعة — معجب فعلاً.\"",
    "short2.quote":"\"قللنا التنظيف من 3 خطوات إلى خطوة واحدة. مع 3 أطفال — هذا غيّر كل شيء.\"",
    "short3.quote":"\"7000 باسكال، تنظيف الحواف، تنظيف ذاتي. أقل من 3.5 كجم. بهذا السعر؟ لا يصدق.\"",
    "short4.quote":"\"شفط قوي جداً — بطارية 35 دقيقة في الوضع المنخفض. سهل الاستخدام.\"",
    "problem.eyebrow":"يبدو مألوفاً؟","problem.headline":"كنس. شفط. مسح. تكرار.",
    "problem.body":"ثلاثة أدوات، ضعف الوقت، وممسحة تفوح منها رائحة الاستخدام الأخير.",
    "problem.p1":"السلك دائماً في الطريق","problem.p2":"الماء المتسخ ينشر البكتيريا","problem.p3":"الشعر يلتف حول كل فرشاة","problem.p4":"الزوايا لا تنظف أبداً",
    "problem.solution":"الحل","problem.caption":"جهاز واحد. مرور واحد. تمت.",
    "features.eyebrow":"ما يجعله مختلفاً","features.headline":"ستة أسباب تجعل ED12 Lite يفوز",
    "feat1.title":"شفط + مسح. مرور واحد.","feat1.body":"40 فوهة مياه دقيقة توزع الماء النظيف بالتساوي بينما يرفع الشفط 7000 باسكال الأوساخ الجافة — في آن واحد.","feat1.stat1":"40 فوهة","feat1.stat2":"لتغطية بلا خطوط",
    "feat2.title":"تنظيف ذاتي في 35 ثانية","feat2.body":"ضغطة زر واحدة. البكرة والأنابيب تُشطف تلقائياً.",
    "feat3.title":"فقط 3.6 كجم — ذاتي الدفع","feat3.body":"أخف من حقيبة مشتريات. يتحرك تقريباً وحده.",
    "feat4.title":"تنظيف الحواف حتى 6 ملم","feat4.body":"تصل البكرة إلى 6 ملم من الجدران والسيرامات.",
    "feat5.title":"صفر التفاف للشعر","feat5.body":"مكاشط مزدوجة تقطع الشعر قبل أن يلتف.",
    "feat6.title":"خزان مزدوج: النظيف يبقى نظيفاً","feat6.body":"850 مل ماء نظيف + 450 مل ماء متسخ. لا يختلطان أبداً.","feat6.stat1":"100 م²","feat6.stat2":"بدون إعادة ملء",
    "howto.eyebrow":"كيف يعمل","howto.headline":"ثلاث خطوات لأرضيات نظيفة تماماً",
    "step1.title":"ملء الخزان","step1.body":"افتح خزان الماء النظيف، املأه حتى 850 مل.",
    "step2.title":"التشغيل والبدء","step2.body":"اضغط تشغيل، اختر الوضع العادي أو الأقصى، وانزلق عبر الأرضيات.",
    "step3.title":"التنظيف الذاتي والقاعدة","step3.body":"اضغط زر التنظيف الذاتي 35 ثانية. ضعه على قاعدة الشحن.",
    "specs.eyebrow":"المواصفات","specs.headline":"الأرقام المهمة","specs.body":"بلا تسويق — فقط ما تريد معرفته حقاً.",
    "spec.model":"الموديل","spec.suction":"قوة الشفط","spec.power":"قوة المحرك","spec.cleantank":"خزان الماء النظيف","spec.dirtytank":"خزان الماء المتسخ","spec.weight":"الوزن","spec.runtime":"عمر البطارية","spec.selfclean":"دورة التنظيف الذاتي","spec.noise":"مستوى الضوضاء","spec.modes":"أوضاع التنظيف","spec.modes.val":"عادي + أقصى","spec.edge":"تنظيف الحواف","spec.size":"الأبعاد",
    "reviews.eyebrow":"مشترون حقيقيون. كلمات صادقة.","reviews.headline":"ماذا يقول العملاء","reviews.rating":"4.7 / 5 · أكثر من 1000 تقييم",
    "rev1":"\"أحب هذا المكنسة الممسحة! بلا أسلاك. التنظيف الذاتي رائع جداً!\"","rev1.cite":"— شراء موثق · الولايات المتحدة",
    "rev2":"\"أفضل خيار اتخذته. تنظيف تلقائي بخطوة واحدة، هادئ، سهل.\"","rev2.cite":"— شراء موثق",
    "rev3":"\"رائع للمنازل التي فيها حيوانات أليفة. التنظيف الذاتي منقذ!\"","rev3.cite":"— إيلديس ف. · شراء موثق",
    "rev4":"\"ممتاز على أرضيات الخشب. سعيد جداً بالشراء!\"","rev4.cite":"— شراء موثق",
    "rev5":"\"لا تضيع وقتك في البحث. أفضل مكنسة رطبة اشتريتها.\"","rev5.cite":"— شراء موثق · متجر تيك توك",
    "rev6":"\"يجعل التنظيف ممتعاً. يأتي مع قاعدة، بكرتين، فلترين وسائل تنظيف.\"","rev6.cite":"— شراء موثق",
    "expert.eyebrow":"نتيجة خبير","expert.sub":"مراجعة مستقلة · 15 عاماً خبرة",
    "score.suction":"الشفط","score.ease":"سهولة الاستخدام","score.edge":"تنظيف الحواف","score.maint":"الصيانة","score.value":"القيمة مقابل المال","score.battery":"البطارية",
    "compare.eyebrow":"مقارنة","compare.headline":"ED12 Lite مقابل المنافسة","compare.feature":"الميزة","compare.selfclean":"تنظيف ذاتي","compare.edge":"الحواف","compare.weight":"الوزن","compare.battery":"البطارية","compare.price":"السعر","compare.tangle":"مقاومة التشابك",
    "faq.eyebrow":"أسئلة؟","faq.headline":"لدينا الإجابات",
    "faq.q1":"هل يعمل على السجاد؟","faq.a1":"لا — مصمم للأرضيات الصلبة: بلاط، خشب، لامينيت، فينيل.",
    "faq.q2":"كم تدوم البطارية فعلياً؟","faq.a2":"نحو 30 دقيقة في الوضع العادي، 25 في الأقصى.",
    "faq.q3":"هل يلتف الشعر حول الفرشاة؟","faq.a3":"لا. المكاشط المزدوجة تقطع الشعر. صفر التفاف.",
    "faq.q4":"هل هو صاخب؟","faq.a4":"أقصى 76 ديسيبل — أهدأ من معظم المكانس.",
    "faq.q5":"ماذا يوجد في الصندوق؟","faq.a5":"الجهاز، قاعدة الشحن، 2× بكرات، 2× فلاتر، أداة شعر، محلول تنظيف.",
    "faq.q6":"هل يمكن استخدام ماء الصنبور؟","faq.a6":"نعم، يعمل بشكل مثالي. يمكنك إضافة قرص تنظيف اختيارياً.",
    "order.badge":"مخزون محدود","order.title":"JONR ED12 Lite","order.sub":"مكنسة ممسحة 2 في 1 · لاسلكية · تنظيف ذاتي","order.includes":"محتويات الصندوق:","box.unit":"جهاز ED12 Lite","box.base":"قاعدة الشحن","box.rollers":"2× بكرات ممسحة","box.filters":"2× فلاتر","box.tool":"أداة تنظيف الشعر","box.solution":"محلول التنظيف",
    "trust.secure":"🔒 دفع آمن","trust.shipping":"📦 شحن سريع عالمي","trust.returns":"↩ إرجاع خلال 30 يوم",
    "popup.badge":"عرض محدود","popup.discountLabel":"خصم على طلبك","popup.title":"احصل على خصم 30%","popup.sub":"أدخل بريدك وسنرسل لك كود الخصم فوراً.","popup.placeholder":"عنوان بريدك الإلكتروني","popup.cta":"احصل على خصم 30%","popup.codeLabel":"كودك:","popup.successMsg":"الصقه عند الدفع للحصول على 30% خصم.","popup.shopNow":"تسوق الآن →","popup.privacy":"لا بريد عشوائي. إلغاء الاشتراك في أي وقت.",
    "price.was":"$249.00",
    "price.now":"$149.00",
    "price.save":"وفر 40%",
    "order.trust":"دفع آمن · استرداد 30 يوم · شحن مجاني",
    "order.note":"ستُنقل إلى صفحة المنتج الآمنة.",
    "footer.copy":"© 2026 متجر ED12 Lite. الأوصاف مبنية على بيانات الشركة المصنعة واختبارات مستقلة.","footer.privacy":"الخصوصية","footer.imprint":"إشعار قانوني","footer.contact":"اتصل بنا"
  },
  zh: {
    "nav.features":"功能特点","nav.reels":"TikTok热传","nav.reviews":"用户评价","nav.faq":"常见问题",
    "cta.buy":"立即购买","cta.watch":"观看实测效果 ↓",
    "hero.badge":"吸尘+拖地·无线·自清洁",
    "hero.headline":"不再需要<br/>清洁地板<br/><em>两遍。</em>",
    "hero.sub":"JONR ED12 Lite一次完成吸尘和拖地——35秒完成自清洁。无线。无缠绕。无烦恼。",
    "hero.proof":"全球超过1000名客户的信赖之选",
    "hero.card1":"吸力","hero.card2":"自清洁",
    "proof.suction":"吸力","proof.combo":"吸尘+拖地","proof.battery":"续航","proof.tank":"清水箱","proof.weight":"超轻","proof.cordless":"无线","proof.freedom":"完全自由",
    "reels.headline":"真实用户。真实地板。真实效果。","reels.sub":"观看TikTok和YouTube上的热门视频——自己来判断。","reels.youtube":"也在YouTube上",
    "reel1.quote":"\"终极清洁技巧！这真是彻底改变了游戏规则。\"",
    "reel2.quote":"\"JONR ED12无线湿干两用吸尘器是必入佳品！我完全迷上了。\"",
    "reel3.quote":"\"我的地板从未这么干净过。#jonr #jonred12 #fyp\"",
    "short1.quote":"\"这个价位的性价比太棒了——真心佩服。\"",
    "short2.quote":"\"从3个步骤减少到1个步骤。家里有3个孩子——这改变了一切。\"",
    "short3.quote":"\"7000Pa吸力、边缘清洁、自清洁。不到3.5千克。这个价格？难以置信。\"",
    "short4.quote":"\"吸力非常强——低速模式续航35分钟。超级易用。\"",
    "problem.eyebrow":"听起来很熟悉？","problem.headline":"扫地。吸尘。拖地。重复。",
    "problem.body":"三件工具，双倍时间，拖把还有上次留下的异味。有更聪明的方法。",
    "problem.p1":"电线总是碍事","problem.p2":"脏水传播细菌","problem.p3":"宠物毛缠绕刷头","problem.p4":"角落永远清洁不到",
    "problem.solution":"解决方案","problem.caption":"一台设备。一次清洁。完成。",
    "features.eyebrow":"独特之处","features.headline":"ED12 Lite胜出的六大理由",
    "feat1.title":"吸尘+拖地。一次完成。","feat1.body":"40个精准水孔均匀分布清水，同时7000Pa吸力提起干垃圾——同步进行。","feat1.stat1":"40个喷水孔","feat1.stat2":"无条纹全覆盖",
    "feat2.title":"35秒完成自清洁","feat2.body":"一键按下。滚刷和管道自动冲洗。无需动手，无异味。",
    "feat3.title":"仅3.6千克——自推进","feat3.body":"比一袋购物轻。旋转刷头产生前进动力——几乎自己走。",
    "feat4.title":"6mm边缘清洁","feat4.body":"滚刷可清洁距墙壁和踢脚线6mm以内的区域。",
    "feat5.title":"零缠绕","feat5.body":"双梳齿刮刀在毛发缠绕前将其切断。测试证明：完整清洁后滚刷上零毛发。",
    "feat6.title":"双水箱：清洁保持清洁","feat6.body":"850ml清水箱+450ml污水箱。清水和污水永不混合。","feat6.stat1":"100平方米","feat6.stat2":"无需补水",
    "howto.eyebrow":"使用方法","howto.headline":"三步实现完美清洁",
    "step1.title":"注水","step1.body":"打开清水箱，加入最多850ml清水。",
    "step2.title":"开机清洁","step2.body":"按下电源，选择普通或强劲模式，在地板上轻松滑行。",
    "step3.title":"自清洁&充电","step3.body":"长按自清洁按钮35秒。放回充电底座。随时待命。",
    "specs.eyebrow":"技术规格","specs.headline":"关键数据","specs.body":"无营销话术——只有您真正想知道的内容。",
    "spec.model":"型号","spec.suction":"吸力","spec.power":"电机功率","spec.cleantank":"清水箱容量","spec.dirtytank":"污水箱容量","spec.weight":"重量","spec.runtime":"续航时间","spec.selfclean":"自清洁周期","spec.noise":"噪音水平","spec.modes":"清洁模式","spec.modes.val":"普通+强劲","spec.edge":"边缘清洁","spec.size":"尺寸",
    "reviews.eyebrow":"真实买家。真实评价。","reviews.headline":"用户怎么说","reviews.rating":"4.7 / 5 · 超过1000条评价",
    "rev1":"\"太喜欢这款吸拖一体机了！不再受电线束缚。自清洁功能太棒了！\"","rev1.cite":"— 认证购买 · 美国",
    "rev2":"\"我能买到的最佳选择。一步自动清洁，安静，易用，双水箱设计。\"","rev2.cite":"— 认证购买",
    "rev3":"\"非常适合有宠物和孩子的家庭。自清洁功能真是救星！\"","rev3.cite":"— Eldis F. · 认证购买",
    "rev4":"\"在实木地板上效果极好。非常庆幸买了这款产品！\"","rev4.cite":"— 认证购买 · 美国",
    "rev5":"\"别浪费时间找其他的了。这是我买过的最好的湿式吸尘器。\"","rev5.cite":"— 认证购买 · TikTok商店",
    "rev6":"\"让清洁变得有趣。附赠底座、两个滚刷、两个滤芯和清洁液。\"","rev6.cite":"— 认证购买",
    "expert.eyebrow":"专家测试评分","expert.sub":"独立测评 · 15年家用电器测试经验",
    "score.suction":"吸力","score.ease":"易用性","score.edge":"边缘清洁","score.maint":"维护","score.value":"性价比","score.battery":"续航",
    "compare.eyebrow":"对比","compare.headline":"ED12 Lite vs 竞争对手","compare.feature":"功能","compare.selfclean":"自清洁","compare.edge":"边缘清洁","compare.weight":"重量","compare.battery":"续航","compare.price":"价格","compare.tangle":"防缠绕",
    "faq.eyebrow":"有问题？","faq.headline":"我们有答案",
    "faq.q1":"可以用于地毯吗？","faq.a1":"不能——ED12 Lite专为硬地板设计：瓷砖、木地板、复合地板、乙烯基地板。",
    "faq.q2":"电池实际能用多久？","faq.a2":"普通模式约30分钟，强劲模式约25分钟。",
    "faq.q3":"毛发会缠绕刷头吗？","faq.a3":"不会。双梳齿刮刀主动切断毛发。测试中：整个清洁过程后滚刷上零毛发。",
    "faq.q4":"噪音大吗？","faq.a4":"最高76分贝——比大多数吸尘器更安静。",
    "faq.q5":"箱内包含哪些物品？","faq.a5":"主机、充电底座、2个拖布辊、2个滤芯、清发工具、清洁液。",
    "faq.q6":"可以用自来水吗？","faq.a6":"可以，自来水完全适用。也可以选择加入清洁片增加清洁效果。",
    "order.badge":"库存有限","order.title":"JONR ED12 Lite","order.sub":"2合1湿干两用吸尘器 · 无线 · 自清洁","order.includes":"箱内物品：","box.unit":"ED12 Lite主机","box.base":"充电底座","box.rollers":"2×拖布辊","box.filters":"2×滤芯","box.tool":"清发工具","box.solution":"清洁液",
    "trust.secure":"🔒 安全支付","trust.shipping":"📦 全球快速配送","trust.returns":"↩ 30天退换货",
    "popup.badge":"限时优惠","popup.discountLabel":"订单优惠","popup.title":"立即获厖7折优惠","popup.sub":"输入您的邮符1立即获得1您的专少优惠码。","popup.placeholder":"您的电子邮件地址","popup.cta":"获厖7折优惠","popup.codeLabel":"您的代码：","popup.successMsg":"在结账时粘贴即可享厗7折优惠。","popup.shopNow":"立即购买 →","popup.privacy":"不发垃圾邮件，随时可取消订阅。",
    "price.was":"¥1,799",
    "price.now":"¥1,079",
    "price.save":"节省40%",
    "order.trust":"安全结账 · 30天退款 · 免费配送",
    "order.note":"您将跳转至安全产品页面。",
    "footer.copy":"© 2026 ED12 Lite商店。产品描述基于制造商数据和独立测试。","footer.privacy":"隐私政策","footer.imprint":"法律信息","footer.contact":"联系我们"
  },
  ja: {
    "nav.features":"機能","nav.reels":"TikTokで話題","nav.reviews":"レビュー","nav.faq":"よくある質問",
    "cta.buy":"今すぐ注文","cta.watch":"実際の動きを見る ↓",
    "hero.badge":"吸引+モップ · コードレス · 自動洗浄",
    "hero.headline":"床の掃除を<br/><em>2回</em><br/>するのはやめよう。",
    "hero.sub":"JONR ED12 Liteは1回のパスで吸引&拭き掃除。35秒で自動洗浄。コードなし。絡みなし。ストレスなし。",
    "hero.proof":"世界1,000人以上のお客様に信頼されています",
    "hero.card1":"吸引力","hero.card2":"自動洗浄",
    "proof.suction":"吸引力","proof.combo":"吸引+モップ","proof.battery":"バッテリー","proof.tank":"清水タンク","proof.weight":"超軽量","proof.cordless":"コードレス","proof.freedom":"完全な自由",
    "reels.headline":"リアルな人々。リアルな床。リアルな結果。","reels.sub":"TikTokとYouTubeのバイラル動画をチェック — ご自身で確かめてください。","reels.youtube":"YouTubeでも公開中",
    "reel1.quote":"\"究極のお掃除ハック！完全にゲームチェンジャーです。\"",
    "reel2.quote":"\"JONR ED12はマストバイ！夢中になっています。\"",
    "reel3.quote":"\"床がこんなにきれいになったのは初めて。#jonr #fyp\"",
    "short1.quote":"\"この価格帯でのコスパは最高 — 本当に感動しました。\"",
    "short2.quote":"\"3ステップから1ステップへ。子供3人いる家庭で — すべてが変わりました。\"",
    "short3.quote":"\"7000Pa吸引、端部クリーニング、自動洗浄。3.5kg以下。この価格で？信じられない。\"",
    "short4.quote":"\"吸引力がとても強い — 省エネモードで35分持続。超使いやすい。\"",
    "problem.eyebrow":"よく知っていますか？","problem.headline":"掃く。吸う。拭く。繰り返す。",
    "problem.body":"3つの道具、倍の時間、そして前回の匂いがするモップ。もっとスマートな方法があります。",
    "problem.p1":"コードが常に邪魔","problem.p2":"汚れた水が菌を広げる","problem.p3":"ペットの毛がブラシに絡まる","problem.p4":"隅が本当にきれいにならない",
    "problem.solution":"解決策","problem.caption":"1台。1回。完了。",
    "features.eyebrow":"何が違うのか","features.headline":"ED12 Liteが優れている6つの理由",
    "feat1.title":"吸引+モップ。1回のパス。","feat1.body":"40個の精密ウォータージェットが均一に清水を分配しながら、7000Paの吸引力が乾いたゴミを同時に吸い取ります。","feat1.stat1":"40ジェット","feat1.stat2":"ムラのない洗浄",
    "feat2.title":"35秒で自動洗浄","feat2.body":"ボタン1つでローラーと配管が自動的にすすがれます。",
    "feat3.title":"わずか3.6kg — 自走式","feat3.body":"買い物袋より軽い。回転ブラシが前進力を生み出し、ほぼ自走します。",
    "feat4.title":"6mmエッジクリーニング","feat4.body":"ローラーは壁や巾木から6mmまで届きます。",
    "feat5.title":"髪の毛の絡まりゼロ","feat5.body":"デュアルコームスクレーパーが髪が巻きつく前に切断します。",
    "feat6.title":"デュアルタンク：清潔さを保つ","feat6.body":"850mlの清水タンク + 450mlの汚水タンク。決して混ざりません。","feat6.stat1":"100m²","feat6.stat2":"給水なし",
    "howto.eyebrow":"使い方","howto.headline":"完璧な床への3ステップ",
    "step1.title":"タンクに水を入れる","step1.body":"清水タンクを開け、最大850mlの水を入れます。",
    "step2.title":"電源を入れてスタート","step2.body":"電源を押し、ノーマルまたはマックスモードを選び、床を滑るように動かします。",
    "step3.title":"自動洗浄&ドック","step3.body":"自動洗浄ボタンを35秒押し続けます。充電ベースに置いて完了。",
    "specs.eyebrow":"技術仕様","specs.headline":"重要な数字","specs.body":"マーケティングの誇張なし — 購入前に本当に知りたいことだけ。",
    "spec.model":"モデル","spec.suction":"吸引力","spec.power":"モーター出力","spec.cleantank":"清水タンク","spec.dirtytank":"汚水タンク","spec.weight":"重量","spec.runtime":"バッテリー持続時間","spec.selfclean":"自動洗浄サイクル","spec.noise":"騒音レベル","spec.modes":"クリーニングモード","spec.modes.val":"ノーマル+マックス","spec.edge":"エッジクリーニング","spec.size":"寸法",
    "reviews.eyebrow":"リアルな購入者。正直な声。","reviews.headline":"お客様の声","reviews.rating":"4.7 / 5 · 1,000件以上のレビュー",
    "rev1":"\"このスティッククリーナー大好き！コードから解放された。自動洗浄は最高です！\"","rev1.cite":"— 購入確認済み · USA",
    "rev2":"\"最高の選択。1ステップの自動洗浄、静か、使いやすい。\"","rev2.cite":"— 購入確認済み",
    "rev3":"\"ペットや子供がいる家庭に最適。自動洗浄は命の恩人！\"","rev3.cite":"— Eldis F. · 購入確認済み",
    "rev4":"\"フローリングで素晴らしい仕事をしてくれます。購入して本当に良かった！\"","rev4.cite":"— 購入確認済み · USA",
    "rev5":"\"他を探す時間を無駄にしないで。これまで買った中で最高のウェットバキュームです。\"","rev5.cite":"— 購入確認済み · TikTokショップ",
    "rev6":"\"掃除が楽しくなります。ベース、2つのローラー、フィルター、洗浄液付き。\"","rev6.cite":"— 購入確認済み",
    "expert.eyebrow":"専門家テストスコア","expert.sub":"独立レビュー · 15年の家電テスト経験",
    "score.suction":"吸引力","score.ease":"使いやすさ","score.edge":"エッジクリーニング","score.maint":"メンテナンス","score.value":"コスパ","score.battery":"バッテリー",
    "compare.eyebrow":"比較","compare.headline":"ED12 Lite vs 競合他社","compare.feature":"機能","compare.selfclean":"自動洗浄","compare.edge":"エッジ","compare.weight":"重量","compare.battery":"バッテリー","compare.price":"価格帯","compare.tangle":"絡み防止",
    "faq.eyebrow":"ご質問は？","faq.headline":"お答えします",
    "faq.q1":"カーペットで使えますか？","faq.a1":"いいえ — ED12 Liteはフローリング専用です：タイル、フローリング、ラミネート、ビニール。",
    "faq.q2":"バッテリーは実際どのくらい持ちますか？","faq.a2":"ノーマルモードで約30分、マックスモードで約25分。",
    "faq.q3":"ペットの毛は絡まりますか？","faq.a3":"いいえ。デュアルコームスクレーパーが毛を絡まる前に切断します。",
    "faq.q4":"うるさいですか？","faq.a4":"最大76dBA — ほとんどの掃除機より静かです。",
    "faq.q5":"箱の中身は？","faq.a5":"ED12 Lite本体、充電ベース、2×モップローラー、2×フィルター、ヘアクリーニングツール、洗浄液。",
    "faq.q6":"水道水を使えますか？","faq.a6":"はい、水道水で完璧に動作します。クリーニングタブレットを追加することも可能です。",
    "order.badge":"在庫限り","order.title":"JONR ED12 Lite","order.sub":"2-in-1 ウェット&ドライバキューム · コードレス · 自動洗浄","order.includes":"同梱内容：","box.unit":"ED12 Lite本体","box.base":"充電ベース","box.rollers":"2×モップローラー","box.filters":"2×フィルター","box.tool":"ヘアクリーニングツール","box.solution":"洗浄液",
    "trust.secure":"🔒 安全な決済","trust.shipping":"📦 世界高速配送","trust.returns":"↩ 30日間返品",
    "popup.badge":"期間限定","popup.discountLabel":"注文割引","popup.title":"30%割引をゲット","popup.sub":"メールアドレスを入力すると、即座に専用コードをお送りします。","popup.placeholder":"メールアドレス","popup.cta":"30%割引をゲット","popup.codeLabel":"コード:","popup.successMsg":"チェックアウト時に貼り付けてう3割引。","popup.shopNow":"今すぐ購入 →","popup.privacy":"スパムなし。いつでも登録解除可能。",
    "price.was":"¥26,800",
    "price.now":"¥15,800",
    "price.save":"40%OFF",
    "order.trust":"安全なチェックアウト · 30日間返金 · 送料無料",
    "order.note":"安全な商品ページに移動します。",
    "footer.copy":"© 2026 ED12 Liteストア。商品説明はメーカーデータと独立テストに基づいています。","footer.privacy":"プライバシー","footer.imprint":"法的情報","footer.contact":"お問い合わせ"
  }
};

// RTL languages
const RTL_LANGS = ['ar'];

// ===== I18N ENGINE =====
let currentLang = 'en';

function applyTranslations(lang) {
  const t = translations[lang] || translations['en'];
  currentLang = lang;

  // Set html lang & dir
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';

  // Apply placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });

  // Apply all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t[key];
    if (!val) return;
    // Allow HTML in headings
    if (el.tagName.match(/^H[1-6]$/) || el.classList.contains('hero-heading')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // Update page title & meta
  document.title = lang === 'de' ? 'JONR ED12 Lite – Saugen & Wischen in einem' :
                   lang === 'fr' ? 'JONR ED12 Lite – Aspirer & Laver en un seul passage' :
                   lang === 'es' ? 'JONR ED12 Lite – Aspira y Friega a la vez' :
                   lang === 'pt' ? 'JONR ED12 Lite – Aspira e Lava de uma vez' :
                   lang === 'ar' ? 'JONR ED12 Lite – الشفط والمسح معاً' :
                   lang === 'zh' ? 'JONR ED12 Lite – 吸尘拖地一步完成' :
                   lang === 'ja' ? 'JONR ED12 Lite – 吸引&拭き掃除を同時に' :
                   'JONR ED12 Lite – Vacuum & Mop in One';
}

// ===== LANGUAGE PICKER =====
(function () {
  const picker = document.getElementById('langPicker');
  const btn = picker.querySelector('.lang-current');
  const dropdown = picker.querySelector('.lang-dropdown');
  const currentFlag = document.getElementById('currentFlag');
  const currentLangEl = document.getElementById('currentLang');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = picker.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', (e) => {
    if (!picker.contains(e.target)) {
      picker.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  dropdown.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      const lang = li.dataset.lang;
      const flag = li.dataset.flag;
      currentFlag.textContent = flag;
      currentLangEl.textContent = lang.toUpperCase();
      dropdown.querySelectorAll('li').forEach(l => l.classList.remove('active'));
      li.classList.add('active');
      picker.classList.remove('open');
      applyTranslations(lang);
    });
  });

  // Auto-detect browser language
  const browserLang = (navigator.language || 'en').split('-')[0];
  if (translations[browserLang]) {
    const matchLi = dropdown.querySelector(`[data-lang="${browserLang}"]`);
    if (matchLi && browserLang !== 'en') {
      matchLi.click();
    }
  }
})();

// ===== DARK MODE =====
(function () {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let current = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', current);
  const sun = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  const moon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  const updateBtn = () => { if(toggle) toggle.innerHTML = current === 'dark' ? sun : moon; };
  updateBtn();
  if (toggle) toggle.addEventListener('click', () => {
    current = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', current);
    updateBtn();
  });
})();

// ===== STICKY HEADER =====
(function () {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 80);
  }, { passive: true });
})();

// ===== SCROLL REVEAL =====
(function () {
  if (!('IntersectionObserver' in window)) return;
  const items = document.querySelectorAll('.feature-card,.review-card,.step-card,.short-card,.reel-card,.faq-item,.score-item');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  items.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${(i % 6) * 60}ms, transform 0.5s ease ${(i % 6) * 60}ms`;
    obs.observe(el);
  });
})();

// ===== SCORE BARS ANIMATE =====
(function () {
  const bars = document.querySelectorAll('.score-bar');
  if (!bars.length || !('IntersectionObserver' in window)) return;
  const saved = new Map();
  bars.forEach(b => { saved.set(b, b.style.getPropertyValue('--score')); b.style.setProperty('--score','0%'); });
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.style.setProperty('--score', saved.get(e.target)), 200);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(b => obs.observe(b));
})();

// ===== SMOOTH ANCHORS =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior:'smooth', block:'start' }); }
  });
});

// ===== EMAIL POPUP =====
(function () {
  const overlay  = document.getElementById('emailPopup');
  const closeBtn = document.getElementById('popupClose');
  const form     = document.getElementById('popupForm');
  const success  = document.getElementById('popupSuccess');
  const copyBtn  = document.getElementById('popupCopy');
  const codeEl   = document.getElementById('popupCode');

  let shown = false;

  function showPopup() {
    if (shown) return;
    shown = true;
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function hidePopup() {
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  // Trigger 1: 5 seconds after page load
  setTimeout(showPopup, 5000);

  // Trigger 2: Exit-intent (mouse leaves viewport upward)
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 10) showPopup();
  });

  // Close button
  closeBtn.addEventListener('click', hidePopup);

  // Click outside card
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) hidePopup();
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hidePopup();
  });

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('popupEmail').value;
    // Here you'd normally POST to your email provider (Klaviyo, Mailchimp, etc.)
    // For now: reveal the code
    form.hidden = true;
    success.hidden = false;
    codeEl.textContent = 'SAVE30';
  });

  // Copy code
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(codeEl.textContent).then(() => {
      copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
      setTimeout(() => {
        copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
      }, 2000);
    });
  });
})();

/* =============================================
   WAITLIST FORM HANDLER
   ============================================= */
(function() {
  const waitlistForm = document.getElementById('waitlistForm');
  const waitlistSuccess = document.getElementById('waitlistSuccess');
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const btn = waitlistForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      try {
        const resp = await fetch(waitlistForm.action, {
          method: 'POST',
          body: new FormData(waitlistForm),
          headers: { 'Accept': 'application/json' }
        });
        if (resp.ok) {
          waitlistForm.hidden = true;
          if (waitlistSuccess) waitlistSuccess.hidden = false;
        } else {
          btn.textContent = 'Try again';
          btn.disabled = false;
        }
      } catch {
        btn.textContent = 'Try again';
        btn.disabled = false;
      }
    });
  }

  // Also update popup form to use fetch (waitlist mode)
  const popupForm = document.getElementById('popupForm');
  const popupSuccess = document.getElementById('popupSuccess');
  if (popupForm) {
    popupForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const btn = popupForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      try {
        const resp = await fetch(popupForm.action, {
          method: 'POST',
          body: new FormData(popupForm),
          headers: { 'Accept': 'application/json' }
        });
        if (resp.ok) {
          popupForm.hidden = true;
          if (popupSuccess) popupSuccess.hidden = false;
        } else {
          btn.textContent = 'Try again';
          btn.disabled = false;
        }
      } catch {
        btn.textContent = 'Try again';
        btn.disabled = false;
      }
    });
  }
})();

/* =============================================
   LEGAL MODAL
   ============================================= */
function showLegal(type) {
  event.preventDefault();
  var modal = document.getElementById('legalModal');
  var imprint = document.getElementById('legalImprint');
  var privacy = document.getElementById('legalPrivacy');
  if (type === 'imprint') {
    imprint.style.display = 'block';
    privacy.style.display = 'none';
  } else {
    imprint.style.display = 'none';
    privacy.style.display = 'block';
  }
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLegal() {
  document.getElementById('legalModal').hidden = true;
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLegal();
});
