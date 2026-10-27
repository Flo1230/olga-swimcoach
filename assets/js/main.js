/**
 * OLGA BELLER — Swim & Mindset Coaching
 * Central Configuration, Strict DE/EN Switcher, Video Control, and Contact Form
 */

const OLGA_CONFIG = {
  phoneRaw: "+41790000000",
  phoneDisplay: "+41 79 000 00 00",
  whatsappNumber: "41790000000",
  email: "olga@swimcoach-olga.ch",
  linkedin: "https://www.linkedin.com/in/olga-beller-476a40143/"
};

const TRANSLATIONS = {
  de: {
    skip_link: "Direkt zum Inhalt springen",
    brand_role: "Schwimm- & Mentalcoach",
    nav_about: "Über mich",
    nav_services: "Angebot",
    nav_experience: "Erfahrung",
    nav_how: "Coaching-Ansatz",
    nav_insights: "Einblicke",
    nav_faq: "FAQ",
    nav_contact: "Kontakt",
    cta_book: "Beratung buchen",
    menu_open: "Menü öffnen",
    menu_close: "Menü schliessen",
    hero_title: "Schwimmcoaching & Persönlichkeits\u00ADentwicklung im Einklang.",
    hero_sub: "Präzise Schwimmtechnik, ruhige Wasserlage und mentale Stärke. Individuelles Eins-zu-eins-Training mit Olga Beller, das deinen Körper im Wasser und deine Persönlichkeit im Sport voranbringt.",
    pill_1: "1:1 Schwimmcoaching",
    pill_2: "Technik & Wasserlage",
    pill_3: "Erwachsene & Sicherheit",
    pill_4: "Mindset & Motivation",
    video_pause: "Video pausieren",
    video_play: "Video abspielen",
    video_caption: "Echte Technik-Aufnahme im Becken: Kraultechnik & Wasserlage",
    about_heading: "Dein Coach: Olga Beller",
    about_lead: "Aus dem deutschen Leistungssport am Olympiastützpunkt Heidelberg ins individuelle Eins-zu-eins-Coaching.",
    about_p1: "Ich arbeite primär als Schwimmcoach, mit dem besonderen Pluspunkt, dass ich zugleich Coach für Persönlichkeitsentwicklung bin. Mein Fokus im Becken liegt auf einer sauberen, kraftsparenden Schwimmtechnik, deiner Körperhaltung und einer ruhigen Lage im Wasser, individuell abgestimmt auf deine Voraussetzungen.",
    about_p2: "Meine eigene Laufbahn im Leistungsschwimmen hat mich über das Teilzeitinternat am Olympiastützpunkt in Heidelberg (u. a. SV Nikar Heidelberg und Deutsche Hochschulmeisterschaften) bis in den deutschen Kader geführt. Ergänzt durch mein Hochschulstudium und meine Arbeit in der Persönlichkeitsentwicklung verbinde ich präzise Bewegungsanalyse im Wasser mit dem Blick darauf, was dich innerlich motiviert und stärkt.",
    btn_book: "Beratung buchen",
    btn_whatsapp: "WhatsApp",
    btn_email: "E-Mail schreiben",
    btn_linkedin: "LinkedIn Profil",
    meta_phone_label: "Telefon / Mobil:",
    meta_email_label: "E-Mail:",
    portrait_tag: "Olympiastützpunkt Heidelberg · Deutscher Kader",
    stat_1_title: "Heidelberg <span>OSP</span>",
    stat_1: "Teilzeitinternat und tägliches Leistungstraining am Olympiastützpunkt Heidelberg.",
    stat_2_title: "Deutscher <span>Kader</span>",
    stat_2: "Mehrjährige Berufung und Wettkampfpraxis auf nationalem Kaderniveau.",
    stat_3_title: "Studium <span>&amp; Methodik</span>",
    stat_3: "Akademisches Fundament für strukturierte Trainingsplanung und Bewegungsanalyse.",
    stat_4_title: "Schwimmen <span>&amp; Mindset</span>",
    stat_4: "Schwimmcoaching verbunden mit gezieltem Coaching für Persönlichkeitsentwicklung.",
    services_heading: "Coaching-Angebot & Formate",
    services_intro: "Ich coache nicht nach einer starren Schablone, sondern gehe auf dich als Menschen ein. Wähle das Format, das zu deinem aktuellen Trainingsstand und deinen persönlichen Zielen passt.",
    srv_1_badge: "1:1 Einzeltraining",
    srv_1_title: "1:1 Technik- & Wasserlage-Coaching",
    srv_1_body: "Präzise Analyse deiner Körperhaltung und wie dein Körper im Wasser liegt. Gemeinsam optimieren wir Kopf- und Rumpfposition, Wasserfassen, Armzug und Atmung für spürbar leichteres, kraftsparendes Gleiten.",
    srv_1_p1: "Individuelle Korrektur von Wasserlage & Körperhaltung",
    srv_1_p2: "Aktive Technik-Demonstration direkt im Wasser durch Olga",
    srv_1_p3: "Einheiten à 45 bis 60 Minuten, flexibel abgestimmt",
    srv_2_badge: "Olgas Kern-Kombination",
    srv_2_title: "Swim & Mindset: Schwimm- & Persönlichkeitscoaching",
    srv_2_body: "Die ganzheitliche Verbindung aus Schwimmcoaching im Becken und Coaching für Persönlichkeitsentwicklung. Wir schauen uns an, wie du trainierst, wie dein Körper im Wasser liegt und was dich in deiner Psyche motiviert.",
    srv_2_p1: "Kombination aus Schwimmtechnik & mentaler Reflexion",
    srv_2_p2: "Intrinsische Motivation klären & mentale Blockaden lösen",
    srv_2_p3: "Deine Persönlichkeit und dich selbst im Sport gezielt fördern",
    srv_3_badge: "Sicherheit & Vertrauen",
    srv_3_title: "Erwachsene, Einsteiger & Wassersicherheit",
    srv_3_body: "Als Erwachsener neu einzusteigen oder Unsicherheit im Wasser abzubauen erfordert Vertrauen. In deinem eigenen Tempo schaffen wir ein ruhiges Umfeld, in dem du Wassergefühl, entspannte Atmung und sichere Grundtechnik entwickelst.",
    srv_3_p1: "Geduldiger 1:1 Aufbau ohne Zeit- oder Leistungsdruck",
    srv_3_p2: "Atemtechnik, ruhiges Schweben und Kraultechnik von Grund auf",
    srv_3_p3: "Mentale Begleitung bei Wasserangst oder Verkrampfung",
    srv_4_badge: "Performance & Wettkampf",
    srv_4_title: "Leistungsschwimmen, Masters & Triathlon",
    srv_4_body: "Für ambitionierte Schwimmerinnen, Schwimmer und Triathleten, die effizienter und schneller schwimmen wollen. Mit Know-how aus dem Olympiastützpunkt Heidelberg und dem deutschen Kader verfeinern wir jedes Detail.",
    srv_4_p1: "Video- & Bewegungsanalyse zur Optimierung des Vortriebs",
    srv_4_p2: "Kraftsparende Technik für Langstrecke, Freiwasser & Triathlon",
    srv_4_p3: "Trainingssteuerung & mentale Wettkampfvorbereitung",
    srv_cta: "Einheit anfragen",
    consult_banner_title: "Starte mit einem unverbindlichen Vorgespräch & einer ersten Analyse-Einheit",
    consult_banner_copy: "Am besten beginnen wir mit einem kurzen Telefonat oder einer ersten 60 bis 90-minütigen Kennenlern-Session im Bad. So lernen wir uns kennen, schauen uns deine aktuelle Lage im Wasser und dein Training an und definieren deinen klaren Weg nach vorn.",
    consult_banner_btn: "Erstgespräch vereinbaren",
    exp_heading: "Meine Erfahrung & Laufbahn",
    exp_intro: "Was ich im Training weitergebe, stammt aus meiner eigenen Schwimmkarriere im Leistungssport, meinem Hochschulstudium und der persönlichen Arbeit mit einzelnen Sportlerinnen und Sportlern.",
    exp_1_title: "Teilzeitinternat am Olympia\u00ADstützpunkt Heidelberg",
    exp_1_body: "Intensive leistungssportliche Ausbildung und tägliches Training im Umfeld eines der führenden olympischen Schwimmstützpunkte in Deutschland.",
    exp_2_title: "Mitglied im deutschen Kader",
    exp_2_body: "Mehrjährige Erfahrung im deutschen Schwimmkader mit Fokus auf technische Präzision, Trainingssteuerung und nationale Wettkämpfe.",
    exp_3_title: "Hochschulstudium & analytischer Hintergrund",
    exp_3_body: "Strukturierte Wissensvermittlung und methodisches Vorgehen, damit du jede Korrektur im Wasser nachvollziehen und dauerhaft umsetzen kannst.",
    exp_4_title: "Coaching für Persönlichkeits\u00ADentwicklung",
    exp_4_body: "Begleitung auf mentaler und persönlicher Ebene: Motivation klären, innere Hürden abbauen und persönliche Stärken im Sport bewusst nutzen.",
    exp_5_title: "Wettkampfpraxis & Deutsche Hochschulmeisterschaften",
    exp_5_body: "Langjährige Starts für renommierte Vereine wie den SV Nikar Heidelberg sowie Erfolge bei Deutschen Hochschulmeisterschaften über die Freistil- und Sprintstrecken.",
    exp_6_title: "Individuelles Eins-zu-eins-Coaching",
    exp_6_body: "Persönliche Betreuung für Erwachsene, Triathleten und ambitionierte Schwimmerinnen und Schwimmer, abgestimmt auf deinen Trainingsalltag.",
    inwater_title: "Aktiv im Wasser: Technik direkt erleben statt nur Zurufe vom Beckenrand",
    inwater_copy: "Gutes Schwimmcoaching entsteht durch echtes Bewegungsgefühl. Ich coache nicht nur theoretisch vom Beckenrand aus, sondern demonstriere dir Wasserlage, Armzug und Körperrotation direkt im Wasser, damit du das visuelle Bild sofort in deine eigene Bewegung übertragen kannst.",
    inwater_li1: "Direkte Demonstration von horizontaler Wasserlage und hohem Ellbogen",
    inwater_li2: "Blick über und unter Wasser auf Kopf-, Rumpf- und Beinachse",
    inwater_li3: "Verbindung von Technik, Atmung, Erholung und mentalem Fokus",
    inwater_vid_cap: "Unterwasser-Perspektive: Horizontale Wasserlage & Zugphase",
    how_heading: "Wie ich coache",
    how_lead: "Jeder Mensch bewegt sich im Wasser anders. Im Coaching gehe ich individuell auf dich ein: Ich möchte verstehen, wie du grundsätzlich trainierst, welche Körperhaltung du einnimmst, wie dein Körper im Wasser liegt und was dich in deiner Psyche motiviert.",
    plate_caption_left: "Wasserlage · Körperhaltung · Psyche",
    stage_1_title: "Verstehen, wie du grundsätzlich trainierst",
    stage_1_body: "Am Anfang steht das genaue Hinschauen: Wie sieht dein bisheriges Training aus, wie lernst du neue Bewegungen am besten und wo verlierst du aktuell Kraft oder Ruhe im Wasser? Darauf bauen wir jede Einheit auf.",
    stage_1_tag1: "Trainingsanalyse",
    stage_1_tag2: "Individuelle Ausgangslage",
    stage_2_title: "Körperhaltung und wie der Körper im Wasser liegt",
    stage_2_body: "Wir analysieren deine Körperhaltung und dein Gefühl für das Wasser. Du lernst wahrzunehmen, wie dein Körper im Wasser liegt, wie Kopf-, Rumpf- und Beinposition zusammenspielen und wie ein sauberer Armzug Vortrieb erzeugt.",
    stage_2_tag1: "Wasserlage",
    stage_2_tag2: "Körperhaltung",
    stage_2_tag3: "Schwimmtechnik",
    stage_3_title: "Psyche, Motivation und Persönlichkeits\u00ADentwicklung",
    stage_3_body: "Technik und Kopf gehören zusammen. Deshalb gehe ich auch auf deine Psyche ein: Was motiviert dich, wie gehst du mit Rückschlägen oder Wettkampfdruck um? Elemente aus der Persönlichkeitsentwicklung fliessen gezielt ein, um deine Persönlichkeit und dich selbst im Sport zu fördern.",
    stage_3_tag1: "Intrinsische Motivation",
    stage_3_tag2: "Mentale Stärke",
    stage_3_tag3: "Persönlichkeitsentwicklung",
    insights_heading: "Einblicke: Beckenrand, Wasserlage & Mindset",
    insights_intro: "Wie technisches Feedback am Beckenrand, biomechanische Wasserlage und persönliches Coaching ineinandergreifen.",
    ins_1_tag: "Direktes Feedback",
    ins_1_title: "Eins-zu-eins am Beckenrand",
    ins_1_body: "Unmittelbare Rückmeldung nach jeder Bahn: Wir besprechen Körperhaltung und Bewegungsgefühl direkt am Wasser, damit du Korrekturen sofort spürst.",
    ins_2_tag: "Biomechanik & Ruhe",
    ins_2_title: "Wasserlage & Vortrieb verstehen",
    ins_2_body: "Weniger Wasserwiderstand statt blossem Krafteinsatz: Wenn Kopf, Rumpf und Hüfte horizontal ausgerichtet sind, wird jeder Armzug leicht und effizient.",
    ins_3_tag: "Persönlichkeitsentwicklung",
    ins_3_title: "Psyche, Fokus & Motivation",
    ins_3_body: "Raum für das, was dich innerlich bewegt: Ziele klären, Vertrauen aufbauen und mentale Stärke entwickeln, die im Becken und im Alltag trägt.",
    faq_heading: "Häufige Fragen zum Coaching",
    faq_intro: "Direkte Antworten zum Ablauf des Schwimmcoachings und zur Verbindung mit Persönlichkeitsentwicklung.",
    faq_q1: "Für wen eignet sich das Schwimmcoaching bei Olga Beller?",
    faq_a1: "Das Coaching richtet sich an Erwachsene jeden Niveaus, von Einsteigern, die Sicherheit und eine saubere Grundtechnik im Wasser suchen, bis hin zu fortgeschrittenen Schwimmern, Masters-Athleten und Triathleten, die ihre Wasserlage und Effizienz gezielt verbessern möchten.",
    faq_q2: "Wie verbindet Olga Schwimmtraining und Persönlichkeits\u00ADentwicklung?",
    faq_a2: "Primär arbeiten wir an deiner Schwimmtechnik, deiner Körperhaltung und deiner Lage im Wasser. Da körperliche Haltung, Atmung und mentale Einstellung im Wasser unmittelbar zusammenhängen, beziehen wir auf Wunsch deine Motivation, deinen Umgang mit Leistungsdruck und persönliche Entwicklungsziele in das Coaching ein.",
    faq_q3: "Wie läuft die erste Kontaktaufnahme und Beratung ab?",
    faq_a3: "Über den Button „Beratung buchen“ erreichst du mich direkt telefonisch oder per WhatsApp, alternativ über den sichtbaren E-Mail-Button oder das Kontaktformular. In einem kurzen Vorgespräch klären wir deinen aktuellen Trainingsstand, deine Ziele und vereinbaren unsere erste gemeinsame Einheit.",
    faq_q4: "Wie lange dauert eine Coaching-Einheit?",
    faq_a4: "Eine reguläre 1:1 Schwimmeinheit dauert in der Regel 45 bis 60 Minuten. Für den ersten Termin oder für eine kombinierte Einheit aus Schwimmtechnik und Persönlichkeitsentwicklung empfehlen sich 60 bis 90 Minuten, um Technik und Ziele in Ruhe abzustimmen.",
    contact_heading: "Kontakt & Beratung buchen",
    contact_copy: "Du möchtest an deiner Schwimmtechnik und Wasserlage arbeiten oder interessierst dich für die Kombination aus Schwimmcoaching und Persönlichkeitsentwicklung? Hier erreichst du mich direkt per Klick.",
    btn_book_footer: "Beratung buchen (Telefon / Mobil)",
    btn_whatsapp_footer: "Direkt per WhatsApp schreiben",
    btn_email_footer: "E-Mail direkt senden",
    cred_phone_label: "Telefon & WhatsApp",
    cred_email_label: "Direkte E-Mail-Adresse",
    form_title: "Kurze Nachricht schreiben",
    form_name_label: "Dein Name *",
    form_name_placeholder: "Vor- und Nachname",
    form_email_label: "Deine E-Mail-Adresse *",
    form_email_placeholder: "name@beispiel.ch",
    form_topic_label: "Schwerpunkt",
    form_opt_1: "1:1 Technik- & Wasserlage-Coaching",
    form_opt_2: "Swim & Mindset (Schwimmen + Persönlichkeitsentwicklung)",
    form_opt_3: "Erwachsene, Einsteiger & Wassersicherheit",
    form_opt_4: "Leistungsschwimmen, Masters & Triathlon",
    form_msg_label: "Deine Nachricht *",
    form_msg_placeholder: "Wie trainierst du aktuell und wobei darf ich dich unterstützen?",
    form_submit: "Nachricht senden",
    form_err: "Bitte fülle deinen Namen, deine E-Mail-Adresse und eine kurze Nachricht aus.",
    form_ok: "Vielen Dank! Dein E-Mail-Programm öffnet sich jetzt mit deiner vorbereiteten Nachricht.",
    footer_imprint: "Impressum",
    footer_privacy: "Datenschutz"
  },
  en: {
    skip_link: "Skip to main content",
    brand_role: "Swim & Mindset Coach",
    nav_about: "Meet your coach",
    nav_services: "Coaching",
    nav_experience: "My experience",
    nav_how: "How I coach",
    nav_insights: "Insights",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    cta_book: "Book a consultation",
    menu_open: "Open menu",
    menu_close: "Close menu",
    hero_title: "Swim coaching & personal development in unison.",
    hero_sub: "Precise swimming technique, calm water alignment, and mental strength. Individual one-to-one coaching with Olga Beller that advances both your body in the water and your personality in sport.",
    pill_1: "1:1 Private Coaching",
    pill_2: "Stroke & Water Alignment",
    pill_3: "Adult Water Confidence",
    pill_4: "Mindset & Motivation",
    video_pause: "Pause video",
    video_play: "Play video",
    video_caption: "Live pool footage: Front crawl technique & water alignment",
    about_heading: "Meet your coach: Olga Beller",
    about_lead: "From German competitive elite swimming at the Olympic Training Center Heidelberg to individual one-to-one coaching.",
    about_p1: "I work primarily as a swim coach, with the added advantage that I am also a coach for personal development. My focus in the pool is on building clean, energy-efficient swimming technique, body posture, and calm balance in the water tailored to your individual structure.",
    about_p2: "My own competitive swimming career took me through the part-time boarding school at the Olympic Training Center in Heidelberg (including SV Nikar Heidelberg and the German University Championships) and into the German national squad. Combined with my university degree and my work in personal development, I bring biomechanical precision in the water together with a clear understanding of what motivates you mentally.",
    btn_book: "Book a consultation",
    btn_whatsapp: "WhatsApp",
    btn_email: "Send Email",
    btn_linkedin: "LinkedIn Profile",
    meta_phone_label: "Mobile / Phone:",
    meta_email_label: "Email:",
    portrait_tag: "Olympic Training Center Heidelberg · German Squad",
    stat_1_title: "Heidelberg <span>OTC</span>",
    stat_1: "Part-time boarding school and daily elite training at the Olympic Training Center Heidelberg.",
    stat_2_title: "German <span>Squad</span>",
    stat_2: "Years of national squad selection and competitive racing experience in Germany.",
    stat_3_title: "University <span>&amp; Method</span>",
    stat_3: "Academic foundation for structured training design and movement analysis.",
    stat_4_title: "Swim <span>&amp; Mindset</span>",
    stat_4: "Swim coaching combined with dedicated personal development coaching.",
    services_heading: "Coaching & Packages",
    services_intro: "I do not coach a rigid template; I coach the individual swimmer. Choose the format that matches your current experience and personal goals.",
    srv_1_badge: "1:1 Private Session",
    srv_1_title: "1:1 Stroke Technique & Water Alignment",
    srv_1_body: "Detailed analysis of your body posture and how your body lies in the water. Together we refine head and core position, catch mechanics, stroke timing, and breathing for noticeably smoother gliding.",
    srv_1_p1: "Individual correction of water position & body posture",
    srv_1_p2: "Active in-water technique demonstration by Olga",
    srv_1_p3: "45 to 60-minute private sessions tailored to your pace",
    srv_2_badge: "Olga's Signature Format",
    srv_2_title: "Swim & Mindset: Swimming + Personal Development",
    srv_2_body: "The holistic combination of in-water swim coaching and personal development coaching. We look at how you train, how your body moves in the water, and what drives you psychologically.",
    srv_2_p1: "Combines pool biomechanics with personal mindset coaching",
    srv_2_p2: "Clarify intrinsic motivation & dissolve mental blocks",
    srv_2_p3: "Advance both your personality and your athletic performance",
    srv_3_badge: "Confidence & Safety",
    srv_3_title: "Adult Beginners & Water Confidence",
    srv_3_body: "Starting or returning to swimming as an adult takes trust. At your own pace, we create a calm, supportive environment where you build water feel, relaxed breathing, and reliable fundamentals.",
    srv_3_p1: "Patient 1:1 progression free of pressure or rush",
    srv_3_p2: "Breathing mechanics, effortless floating & freestyle basics",
    srv_3_p3: "Empathetic mental support for overcoming water anxiety",
    srv_4_badge: "Performance & Racing",
    srv_4_title: "Performance Swimming, Masters & Triathlon",
    srv_4_body: "For ambitious swimmers, Masters athletes, and triathletes aiming to swim faster with less effort. Drawing on experience from the Olympic Training Center Heidelberg and the German national squad.",
    srv_4_p1: "Video & biomechanical stroke analysis for propulsion efficiency",
    srv_4_p2: "Energy-saving pacing for long-distance, open water & triathlon",
    srv_4_p3: "Training structure & mental race preparation",
    srv_cta: "Request this session",
    consult_banner_title: "Start with an initial conversation & a 60–90 minute assessment session",
    consult_banner_copy: "The best way to begin is a brief call or a 60 to 90-minute introductory session at the pool. This gives us time to assess your current swimming, understand how you learn, begin hands-on coaching right away, and map out your personal plan.",
    consult_banner_btn: "Schedule your consultation",
    exp_heading: "My experience",
    exp_intro: "Everything I pass on in coaching comes from my own competitive swimming career, my university background, and one-to-one work with individual athletes.",
    exp_1_title: "Part-time boarding school at Olympic Training Center Heidelberg",
    exp_1_body: "Intensive high-performance development and daily training at one of Germany's premier Olympic swimming centers.",
    exp_2_title: "German National Squad member",
    exp_2_body: "Extensive experience in the German national swimming squad with a focus on stroke precision, pacing, and race preparation.",
    exp_3_title: "University degree & analytical background",
    exp_3_body: "Structured methodology so you understand the purpose behind every technical adjustment and can apply it consistently.",
    exp_4_title: "Personal development coaching",
    exp_4_body: "Guidance on a mental and personal level: clarifying motivation, overcoming mental blocks, and growing personally through sport.",
    exp_5_title: "Competitive racing & German University Championships",
    exp_5_body: "Years of national competition for clubs such as SV Nikar Heidelberg as well as podiums at the German University Championships in sprint and freestyle events.",
    exp_6_title: "Individual one-to-one coaching",
    exp_6_body: "Personal sessions tailored to adults, triathletes, and ambitious swimmers around your individual training schedule.",
    inwater_title: "In the water: Active demonstration rather than poolside-only instruction",
    inwater_copy: "Great swim coaching comes from genuine water feel. I do not only instruct from the deck; I get into the water to demonstrate horizontal alignment, catch mechanics, and core rotation directly so you can translate the visual cue immediately into your own stroke.",
    inwater_li1: "Direct in-water demonstration of horizontal streamline and high-elbow catch",
    inwater_li2: "Above- and underwater perspective on head, core, and kick alignment",
    inwater_li3: "Connecting stroke mechanics, breathing rhythm, and mental calm",
    inwater_vid_cap: "Underwater view: Horizontal water alignment & catch phase",
    how_heading: "How I coach",
    how_lead: "Every swimmer moves differently in the water. In my coaching, I approach each person individually: I want to understand how you fundamentally train, what your body posture looks like, how your body lies in the water, and what motivates you psychologically.",
    plate_caption_left: "Water Position · Body Posture · Mindset",
    stage_1_title: "Understanding how you fundamentally train",
    stage_1_body: "We start by looking closely at your current training habits, how you learn new movements best, and where you currently lose energy or balance in the water.",
    stage_1_tag1: "Training Analysis",
    stage_1_tag2: "Individual Baseline",
    stage_2_title: "Body posture and how your body lies in the water",
    stage_2_body: "We analyze your posture and water feel. You learn to sense how your body aligns in the water, how head, core, and kick work together, and how an effective catch creates effortless propulsion.",
    stage_2_tag1: "Water Alignment",
    stage_2_tag2: "Body Posture",
    stage_2_tag3: "Stroke Mechanics",
    stage_3_title: "Psyche, motivation, and personal development",
    stage_3_body: "Technique and mindset belong together. I address your psyche and what truly motivates you: how you handle pressure or plateaus, integrating personal development elements to foster both your personality and your sport.",
    stage_3_tag1: "Intrinsic Motivation",
    stage_3_tag2: "Mental Clarity",
    stage_3_tag3: "Personal Growth",
    insights_heading: "From the water & coaching insights",
    insights_intro: "How direct poolside feedback, biomechanical water balance, and personal mindset coaching work together.",
    ins_1_tag: "Direct Feedback",
    ins_1_title: "One-to-one at the poolside",
    ins_1_body: "Immediate feedback after every length: we discuss posture and movement feel right at the pool edge so you can apply adjustments right away.",
    ins_2_tag: "Biomechanics & Calm",
    ins_2_title: "Understanding water alignment & propulsion",
    ins_2_body: "Reducing drag instead of forcing power: when head, core, and hips align horizontally, every stroke becomes lighter and more effective.",
    ins_3_tag: "Personal Development",
    ins_3_title: "Mindset, focus & motivation",
    ins_3_body: "Dedicated space for what drives you: clarifying goals, building confidence, and developing mental strength that carries through sport and everyday life.",
    faq_heading: "Frequently asked questions",
    faq_intro: "Direct answers about swim coaching sessions and how personal development integrates into training.",
    faq_q1: "Who is Olga Beller's swim coaching for?",
    faq_a1: "Coaching is tailored to adults of all levels, from beginners looking for water confidence and clean fundamentals to advanced swimmers, Masters athletes, and triathletes aiming to refine their body position and stroke efficiency.",
    faq_q2: "How does Olga combine swim coaching with personal development?",
    faq_a2: "Our primary focus is swim coaching: technique, posture, and how your body moves in the water. Because posture, breathing, and mindset are closely linked in swimming, we also look at what motivates you mentally so you grow both personally and athletically.",
    faq_q3: "How do I book a consultation?",
    faq_a3: "Click the 'Book a consultation' button to call or reach out via WhatsApp directly, or click the visible 'Send Email' button. In a brief initial conversation, we discuss your current training and schedule your first session.",
    faq_q4: "How long is a typical coaching session?",
    faq_a4: "A standard 1:1 pool session lasts 45 to 60 minutes. For an initial assessment or a combined Swim & Mindset session, 60 to 90 minutes is ideal so we have ample time for both in-water work and personal goal alignment.",
    contact_heading: "Contact & Book a consultation",
    contact_copy: "Want to refine your swimming technique and water alignment or interested in combining swim coaching with personal development? Reach me directly with one click.",
    btn_book_footer: "Book a consultation (Phone / Mobile)",
    btn_whatsapp_footer: "Message directly on WhatsApp",
    btn_email_footer: "Send an Email directly",
    cred_phone_label: "Phone & WhatsApp",
    cred_email_label: "Direct Email Address",
    form_title: "Send a quick message",
    form_name_label: "Your name *",
    form_name_placeholder: "First and last name",
    form_email_label: "Your email address *",
    form_email_placeholder: "name@example.com",
    form_topic_label: "Focus area",
    form_opt_1: "1:1 Stroke Technique & Water Alignment",
    form_opt_2: "Swim & Mindset (Swimming + Personal Development)",
    form_opt_3: "Adult Beginners & Water Confidence",
    form_opt_4: "Performance Swimming, Masters & Triathlon",
    form_msg_label: "Your message *",
    form_msg_placeholder: "How do you currently train and how can I support you?",
    form_submit: "Send message",
    form_err: "Please enter your name, your email address, and a brief message.",
    form_ok: "Thank you! Your email client is opening with your prepared message.",
    footer_imprint: "Imprint",
    footer_privacy: "Privacy Policy"
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var currentLang = "de";

  // 1. Apply central contact config to all links & displays
  document.querySelectorAll(".js-phone-link").forEach(function (el) {
    el.setAttribute("href", "tel:" + OLGA_CONFIG.phoneRaw);
  });
  document.querySelectorAll(".js-phone-display").forEach(function (el) {
    el.textContent = OLGA_CONFIG.phoneDisplay;
  });
  document.querySelectorAll(".js-whatsapp-link").forEach(function (el) {
    el.setAttribute("href", "https://wa.me/" + OLGA_CONFIG.whatsappNumber);
  });
  document.querySelectorAll(".js-email-link").forEach(function (el) {
    el.setAttribute("href", "mailto:" + OLGA_CONFIG.email);
  });
  document.querySelectorAll(".js-email-display").forEach(function (el) {
    el.textContent = OLGA_CONFIG.email;
  });

  // 2. Language Switcher (Strict DE | EN separation)
  var langButtons = document.querySelectorAll(".lang-btn");
  var htmlKeys = {
    stat_1_title: true,
    stat_2_title: true,
    stat_3_title: true,
    stat_4_title: true
  };

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);

    langButtons.forEach(function (btn) {
      var isMatch = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });

    var dict = TRANSLATIONS[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) {
        if (htmlKeys[key]) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    var menuBtnEl = document.getElementById("mobile-menu-toggle");
    if (menuBtnEl) {
      var isMenuOpen = menuBtnEl.getAttribute("aria-expanded") === "true";
      menuBtnEl.setAttribute("aria-label", isMenuOpen ? dict.menu_close : dict.menu_open);
    }

    var video = document.getElementById("hero-video");
    var videoLabel = document.getElementById("video-toggle-label");
    if (video && videoLabel) {
      videoLabel.textContent = video.paused ? dict.video_play : dict.video_pause;
    }
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });

  if (/[?&]lang=en\b/i.test(window.location.search)) {
    setLanguage("en");
  }

  // 3. Top Video Banner Play/Pause Control
  var heroVideo = document.getElementById("hero-video");
  var videoToggle = document.getElementById("video-toggle");
  var videoToggleLabel = document.getElementById("video-toggle-label");

  if (heroVideo && videoToggle && videoToggleLabel) {
    videoToggle.addEventListener("click", function () {
      var dict = TRANSLATIONS[currentLang];
      if (heroVideo.paused) {
        heroVideo.play();
        videoToggle.setAttribute("aria-pressed", "false");
        videoToggleLabel.textContent = dict.video_pause;
      } else {
        heroVideo.pause();
        videoToggle.setAttribute("aria-pressed", "true");
        videoToggleLabel.textContent = dict.video_play;
      }
    });
  }

  // 4. Mobile Navigation Toggle
  var menuBtn = document.getElementById("mobile-menu-toggle");
  var navMenu = document.getElementById("nav-menu");
  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
      var dict = TRANSLATIONS[currentLang];
      var isOpen = navMenu.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuBtn.setAttribute("aria-label", isOpen ? dict.menu_close : dict.menu_open);
    });
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        var dict = TRANSLATIONS[currentLang];
        navMenu.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", dict.menu_open);
      });
    });
  }

  // 5. Contact Form with Validation & Mailto Fallback
  var form = document.getElementById("contact-form");
  var statusBox = document.getElementById("form-status");
  if (form && statusBox) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var dict = TRANSLATIONS[currentLang];
      var name = document.getElementById("field-name").value.trim();
      var email = document.getElementById("field-email").value.trim();
      var topic = document.getElementById("field-topic").value;
      var message = document.getElementById("field-message").value.trim();

      if (!name || !email || !message) {
        statusBox.textContent = dict.form_err;
        statusBox.className = "form-status is-visible is-error";
        return;
      }

      statusBox.textContent = dict.form_ok;
      statusBox.className = "form-status is-visible is-success";

      var subject = encodeURIComponent("Coaching-Anfrage: " + topic + " (" + name + ")");
      var body = encodeURIComponent(
        "Name: " + name + "\nE-Mail: " + email + "\nSchwerpunkt: " + topic + "\n\nNachricht:\n" + message
      );
      window.location.href = "mailto:" + OLGA_CONFIG.email + "?subject=" + subject + "&body=" + body;
    });
  }

  // 6. Optional Live Tweak Panel (?tweaks=1)
  if (/[?&]tweaks=1\b/i.test(window.location.search)) {
    var script = document.createElement("script");
    script.src = "tweak/tweak.js";
    document.body.appendChild(script);
  }
});
