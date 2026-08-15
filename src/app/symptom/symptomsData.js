export const symptomsData = {
  // ==========================================
  // 1. HEART SYMPTOMS (5 Symptoms)
  // ==========================================

  "chest-pain": {
    slug: "chest-pain",
    name: "Chest Pain",
    category: "Heart Symptoms",
    categoryKey: "heart",
    heroDesc:
      "A sensation of tightness, pressure, aching, or sharpness in the chest area. Understanding what it feels like and when to seek medical evaluation provides clarity and peace of mind.",
    understanding: {
      overview:
        "Chest discomfort is one of the most common reasons patients seek medical advice. It can feel like a heavy band around the chest, an aching pressure, a sharp pinch when breathing deeply, or a burning sensation. It can develop gradually over weeks during physical activity, or occur intermittently when you are resting or feeling stressed. In plain terms, while chest discomfort can sometimes indicate a cardiac issue, it is also frequently caused by muscle strain, digestion, or stress.",
      feelings: [
        "A sensation of heaviness, squeezing, or tightness across the central chest",
        "A dull ache or burning sensation that may spread toward the left shoulder, arm, or jaw",
        "Sharp discomfort when taking a deep breath or changing body positions",
        "Brief fluttering or fleeting twinges lasting only a few seconds",
      ],
      development:
        "Chest sensations often develop in predictable patterns—such as during brisk walking, climbing stairs, or after a heavy meal—or they may appear without an obvious trigger during moments of fatigue or anxiety.",
      meaning:
        "Experiencing chest discomfort simply means your body is signaling that sensitive nerves in the chest wall, esophagus, lungs, or cardiovascular system are being stimulated. A structured clinical review helps identify the precise origin.",
    },
    causes: {
      reassuranceNote:
        "Experiencing chest pain does not automatically mean you are having a heart attack or have serious heart disease. In fact, many cases seen in clinic turn out to be related to muscle tension, acid reflux, or minor inflammation.",
      commonCauses: [
        {
          title: "Musculoskeletal Strain & Costochondritis",
          desc: "Tension in chest wall muscles or temporary inflammation of the rib cartilage, often tender to touch.",
        },
        {
          title: "Gastroesophageal Reflux (Acid Reflux)",
          desc: "Stomach acid traveling up into the esophagus causing a burning chest sensation often mistaken for heart pain.",
        },
        {
          title: "Stress, Anxiety & Hyperventilation",
          desc: "Adrenaline spikes and shallow breathing patterns that cause chest tightness and heightened body awareness.",
        },
      ],
      cardiovascularCauses: [
        {
          title: "Coronary Artery Disease & Angina",
          desc: "Narrowing in the coronary blood vessels temporarily reducing oxygen delivery to the heart muscle during exertion.",
        },
        {
          title: "Pericarditis (Pericardial Irritation)",
          desc: "Mild inflammation of the protective sac surrounding the heart, often sharper when lying flat.",
        },
        {
          title: "Heart Valve Changes",
          desc: "Conditions such as aortic stenosis where the heart works harder to pump blood through a narrow valve.",
        },
      ],
    },
    findingTheCause: {
      intro:
        "Diagnostic evaluation always begins with a careful review of your medical history and a gentle physical examination. Based on your symptoms, your cardiologist selects targeted non-invasive tests to evaluate your heart rhythm, structure, and blood flow.",
      tests: [
        {
          name: "12-Lead Electrocardiogram (ECG)",
          desc: "A quick, painless test that records the electrical activity of your heart to check rhythm stability and rule out acute strain.",
          icon: "Activity",
        },
        {
          name: "Echocardiogram (Cardiac Ultrasound)",
          desc: "A gentle sound-wave scan providing real-time moving images of your heart chambers, muscle pumping strength, and heart valves.",
          icon: "HeartPulse",
        },
        {
          name: "Exercise Stress Test / Stress Echo",
          desc: "Monitors your heart’s electrical signals and blood flow response while walking gently on a treadmill.",
          icon: "TrendingUp",
        },
        {
          name: "Targeted Cardiac Blood Tests",
          desc: "Measures cardiac enzyme biomarkers (such as Troponin and hs-CRP) and cholesterol levels to evaluate cardiovascular health.",
          icon: "TestTube",
        },
      ],
    },
    urgentCare: {
      emergencyIntro:
        "Seek immediate emergency medical care (call 911 / 999 or go to the nearest emergency department) if you notice any of these urgent warning signs:",
      warningSigns: [
        "Crushing, heavy pressure or squeezing in the center of your chest lasting more than 10 minutes",
        "Chest pain radiating down your left arm, both arms, or into your neck, jaw, or upper back",
        "Chest tightness accompanied by sudden shortness of breath, cold sweating, nausea, or lightheadedness",
        "Sudden, tearing chest or upper back pain that begins with maximum intensity",
      ],
      routineAssessment: [
        "Mild chest twinges that occur only when pressing on a specific rib or muscle",
        "Discomfort that clearly improves after taking an antacid or resting after a meal",
        "Fleeting, needle-like sensations lasting only a fraction of a second without other symptoms",
        "Gradual, mild exertional aching that resolves within 3–5 minutes of sitting down (schedule a standard clinic consultation)",
      ],
    },
    whatCanHelp: {
      practicalGuidance: [
        "Stop physical exertion immediately and sit in a comfortable, upright position if discomfort arises during activity.",
        "Practice slow, diaphragmatic breathing to reduce autonomic tension if anxiety or stress is present.",
        "Avoid heavy or spicy late-night meals if reflux or indigestion triggers your chest symptoms.",
        "Keep a concise symptom diary noting the date, time, activity, duration, and what provided relief.",
      ],
      whatToMonitor: [
        "Whether the discomfort is predictable during exertion or occurs at complete rest",
        "How many minutes the episode lasts before easing completely",
        "Any accompanying symptoms like breathlessness, palpitations, or lightheadedness",
      ],
      whenToArrangeAssessment:
        "Arrange a routine cardiovascular consultation if you experience recurrent chest discomfort during daily activities, if symptoms are new or changing, or if you have risk factors such as high blood pressure or family history of heart disease.",
    },
    faqs: [
      {
        question: "How do I tell if my chest pain is from my heart or acid reflux?",
        answer:
          "Cardiac chest discomfort is typically described as a heavy pressure or squeezing triggered by physical exertion or emotional stress, which eases with rest. Acid reflux usually feels like a burning sensation behind the breastbone that worsens when lying down or after meals and improves with antacids. Because symptoms can overlap, a doctor will perform simple tests like an ECG to confirm the true cause.",
      },
      {
        question: "Does having chest pain mean I will have a heart attack?",
        answer:
          "No. Most episodes of chest pain evaluated in outpatient clinics are not caused by a heart attack. Non-cardiac causes such as muscular strain, costochondritis, and digestive issues are extremely common. However, because your heart is vital, it is always wise to have any new or unexplained chest discomfort professionally assessed.",
      },
      {
        question: "What should I expect during my first clinic appointment for chest pain?",
        answer:
          "Dr. Almahmoud will listen closely to your description of the symptoms, review your medical history, and check your blood pressure and pulse. A painless resting ECG is typically performed on the spot. If needed, you may be scheduled for an echocardiogram or stress test to give you clear, definitive answers.",
      },
    ],
  },

  "shortness-of-breath": {
    slug: "shortness-of-breath",
    name: "Shortness of Breath",
    category: "Heart Symptoms",
    categoryKey: "heart",
    heroDesc:
      "Feeling breathless or unable to catch a full breath during ordinary activities. Professional evaluation identifies whether your heart or lungs need support.",
    understanding: {
      overview:
        "Shortness of breath (medically known as dyspnea) is the sensation that you are working harder than usual to breathe, or that you cannot draw enough air into your lungs. It can happen after climbing a flight of stairs that used to be easy, when lying flat in bed at night, or suddenly during rest. In everyday terms, breathing is coordinated closely between your lungs, heart, and blood circulation. When any part of this system is under extra demand, your body prompts you to breathe more deeply.",
      feelings: [
        "Feeling winded after light physical tasks like grocery shopping or climbing one flight of stairs",
        "Needing to prop yourself up on extra pillows at night to breathe comfortably",
        "A sensation of chest tightness or air hunger where you feel the need to sigh or yawn",
        "Waking up abruptly a few hours after falling asleep feeling the urge to sit upright",
      ],
      development:
        "Breathlessness can develop slowly over months as physical conditioning changes, or it can appear more noticeably after a viral illness, a change in blood pressure, or weight fluctuations.",
      meaning:
        "It is a protective signal from your body indicating that oxygen exchange or circulation needs assessment. In many cases, it is completely reversible once the underlying trigger is addressed.",
    },
    causes: {
      reassuranceNote:
        "Feeling short of breath does not automatically point to heart failure or lung disease. Common factors like recent deconditioning, seasonal allergies, mild asthma, anemia, or high stress levels are very frequently responsible.",
      commonCauses: [
        {
          title: "Physical Deconditioning & Sedentary Routine",
          desc: "Muscles and heart adapting to reduced activity, causing breathlessness during sudden exertion.",
        },
        {
          title: "Anemia (Low Red Blood Cell Count)",
          desc: "Fewer hemoglobin carriers in the bloodstream, requiring faster breathing to deliver oxygen to tissues.",
        },
        {
          title: "Respiratory Conditions (Asthma / Bronchial Reactivity)",
          desc: "Temporary narrowing of the airways in response to weather changes, dust, or respiratory infections.",
        },
      ],
      cardiovascularCauses: [
        {
          title: "Heart Muscle Strain & Heart Failure",
          desc: "When the heart muscle pumps less efficiently or becomes stiff, fluid can back up into lung tissues.",
        },
        {
          title: "Coronary Artery Narrowing (Angina Equivalent)",
          desc: "In some patients, reduced blood supply presents as breathlessness rather than classic chest pain.",
        },
        {
          title: "Heart Rhythm Irregularities (AFib)",
          desc: "Rapid or irregular heartbeats that reduce the efficiency of blood being pumped through the lungs.",
        },
      ],
    },
    findingTheCause: {
      intro:
        "Investigating shortness of breath involves examining both the cardiovascular and respiratory systems to determine why oxygen delivery is being strained.",
      tests: [
        {
          name: "Transthoracic Echocardiogram",
          desc: "Evaluates left and right ventricular pumping function, relaxation capacity, and heart valve operation.",
          icon: "HeartPulse",
        },
        {
          name: "12-Lead ECG & Rhythm Recording",
          desc: "Checks for hidden arrhythmias or signs of cardiac enlargement that could hinder normal breathing.",
          icon: "Activity",
        },
        {
          name: "BNP / NT-proBNP & Complete Blood Count",
          desc: "Specialized blood tests that distinguish between cardiac fluid strain and non-cardiac causes like anemia.",
          icon: "TestTube",
        },
        {
          name: "Chest X-Ray / Pulmonary Function Testing",
          desc: "Examines lung fields and bronchial airflow to rule out primary respiratory or bronchial restrictions.",
          icon: "ShieldCheck",
        },
      ],
    },
    urgentCare: {
      emergencyIntro:
        "Call emergency services (911 / 999) or visit the nearest emergency room immediately if breathlessness occurs with any of the following:",
      warningSigns: [
        "Sudden, severe shortness of breath that starts abruptly without any warning",
        "Breathlessness accompanied by crushing chest pressure, blue lips, or coughing up pink frothy fluid",
        "Sudden inability to speak in full sentences due to severe air hunger",
        "Breathlessness coupled with fainting, acute dizziness, or severe leg swelling in one calf (clot warning)",
      ],
      routineAssessment: [
        "Mild breathlessness only when walking up steep hills or multiple flights of stairs",
        "Gradual reduction in exercise tolerance over several weeks or months",
        "Occasional sighing or breathlessness associated with stressful work days",
      ],
    },
    whatCanHelp: {
      practicalGuidance: [
        "Pace your daily activities and take scheduled rest breaks during exertional tasks.",
        "Sleep with an extra pillow or slightly elevated head of bed if you notice congestion when lying flat.",
        "Maintain a low-sodium dietary pattern to help your body avoid unwanted fluid retention.",
        "Stay hydrated and avoid smoking or exposure to secondhand smoke and industrial fumes.",
      ],
      whatToMonitor: [
        "How far you can walk on level ground before needing to pause for breath",
        "Whether breathlessness changes when lying flat versus sitting upright",
        "Your daily morning body weight to catch subtle fluid accumulation early",
      ],
      whenToArrangeAssessment:
        "Book a cardiovascular consultation if your breathing tolerance is decreasing over time, if everyday tasks like climbing stairs become difficult, or if you notice mild swelling in your ankles.",
    },
    faqs: [
      {
        question: "Why does my shortness of breath get worse when I lie down flat?",
        answer:
          "When you lie flat, gravity shifts blood from your legs and abdomen into your chest circulation. If the heart muscle is stiff or pumping under elevated pressure, this shift can cause fluid pressure to rise in the lungs, creating breathlessness (orthopnea) that improves when you sit upright.",
      },
      {
        question: "Can shortness of breath be a sign of a heart problem without chest pain?",
        answer:
          "Yes. In many patients—especially women, elderly individuals, and people with diabetes—shortness of breath during exertion can be the primary symptom of coronary artery disease or heart valve changes, acting as an 'angina equivalent.'",
      },
      {
        question: "How will my cardiologist find out if the problem is my heart or my lungs?",
        answer:
          "A combined diagnostic workup—including a simple blood test (NT-proBNP), an echocardiogram to assess cardiac pumping, and lung evaluations—allows your doctor to precisely pinpoint whether the primary cause is cardiac, respiratory, or a mix of both.",
      },
    ],
  },

  "palpitations": {
    slug: "palpitations",
    name: "Palpitations",
    category: "Heart Symptoms",
    categoryKey: "heart",
    heroDesc:
      "Feelings of a fluttering, racing, pounding, or skipped heartbeat. Reassuring evaluation determines the underlying electrical rhythm.",
    understanding: {
      overview:
        "Palpitations are sensations where you become suddenly aware of your own heartbeat. You might feel like your heart just skipped a beat, added an extra thumping beat, or started fluttering rapidly like a butterfly in your chest. In everyday life, the heart beats roughly 100,000 times each day. Most of the time your brain filters this out, but changes in adrenaline, hydration, sleep, or electrical conduction can make you acutely aware of individual beats.",
      feelings: [
        "A momentary pause followed by a noticeable 'hard thump' or flip-flop in the chest",
        "Rapid, fluttering heartbeats that start and stop suddenly",
        "A pounding pulse felt strongly in the neck, throat, or ears when lying quietly in bed",
        "A racing pulse that seems out of proportion to your physical activity level",
      ],
      development:
        "Palpitations can happen at any time—often while relaxing on the sofa, after drinking an espresso, during a stressful meeting, or during athletic workouts.",
      meaning:
        "In the vast majority of people, palpitations represent harmless extra beats (ectopic beats). A rhythm assessment provides definitive confirmation.",
    },
    causes: {
      reassuranceNote:
        "Most people who experience palpitations have completely normal heart structures. Common triggers like coffee, poor sleep, dehydration, hormonal fluctuations, or stress are far more common than dangerous rhythm disorders.",
      commonCauses: [
        {
          title: "Premature Beats (PACs & PVCs)",
          desc: "Harmless early electrical beats originating in the upper or lower chambers, followed by a reassuring pause.",
        },
        {
          title: "Caffeine, Alcohol & Stimulants",
          desc: "Dietary substances that increase adrenaline and heighten cardiac cell excitability.",
        },
        {
          title: "Stress, Dehydration & Electrolyte Imbalance",
          desc: "Low potassium, low magnesium, or high cortisol levels that temporarily increase heartbeat sensitivity.",
        },
      ],
      cardiovascularCauses: [
        {
          title: "Supraventricular Tachycardia (SVT)",
          desc: "Episodes of fast, regular heartbeats (140–200 bpm) caused by an extra electrical connection pathway in the heart.",
        },
        {
          title: "Atrial Fibrillation (AFib)",
          desc: "An irregular, chaotic rhythm in the heart’s upper chambers that requires medical management to prevent blood clots.",
        },
        {
          title: "Heart Valve & Muscle Conditions",
          desc: "Mitral valve prolapse or heart muscle enlargement that can trigger mechanical rhythm sensitivity.",
        },
      ],
    },
    findingTheCause: {
      intro:
        "Because palpitations often come and go, diagnosing them involves capturing your electrical heart rhythm while the fluttering is actively occurring.",
      tests: [
        {
          name: "12-Lead Resting ECG",
          desc: "Measures baseline electrical pathways, conduction intervals (like QT duration), and checks for resting arrhythmias.",
          icon: "Activity",
        },
        {
          name: "24-Hour to 7-Day Holter / Event Monitor",
          desc: "A small, lightweight wearable patch that records every heartbeat during your regular daily activities and sleep.",
          icon: "HeartPulse",
        },
        {
          name: "Echocardiogram (Ultrasound)",
          desc: "Examines the physical heart structure to confirm that heart chambers, muscle walls, and valves are healthy.",
          icon: "ShieldCheck",
        },
        {
          name: "Electrolyte & Thyroid Blood Panel",
          desc: "Checks thyroid hormone levels (TSH), potassium, magnesium, and kidney markers that influence heart rhythm.",
          icon: "TestTube",
        },
      ],
    },
    urgentCare: {
      emergencyIntro:
        "Seek emergency medical evaluation (call 911 / 999) if palpitations are accompanied by any of the following:",
      warningSigns: [
        "Palpitations that occur with fainting (syncope), blackouts, or a sudden loss of consciousness",
        "A rapid racing heart (>150 bpm) paired with severe chest pain, pressure, or tightness",
        "Palpitations accompanied by severe, overwhelming shortness of breath or blue-tinted fingertips",
        "A sudden sustained racing rhythm in a person with a known history of heart attacks or heart failure",
      ],
      routineAssessment: [
        "Occasional isolated skipped beats or brief flutters lasting 1–2 seconds with no dizziness",
        "A pounding pulse after drinking coffee, exercising, or during a stressful presentation",
        "A racing pulse that gradually slows back down within a couple of minutes of taking deep breaths",
      ],
    },
    whatCanHelp: {
      practicalGuidance: [
        "Cut back on excess caffeine, energy drinks, nicotine, and late-night alcohol.",
        "Drink plenty of water and maintain adequate electrolyte balance throughout the day.",
        "Try gentle vagal techniques (such as deep, slow belly breathing or washing your face with cold water) during mild fluttering.",
        "Maintain regular sleep hygiene, as chronic fatigue significantly lowers your rhythm threshold.",
      ],
      whatToMonitor: [
        "Whether your pulse feels regular like a clock or completely irregular and jumpy",
        "How fast the heart is beating during episodes (you can check with a smartwatch or pulse reading)",
        "How long each episode lasts and what you were doing right before it started",
      ],
      whenToArrangeAssessment:
        "Schedule an assessment if palpitations occur multiple times a week, last longer than a few minutes, interfere with your peace of mind, or occur during exercise.",
    },
    faqs: [
      {
        question: "Are skipped heartbeats dangerous?",
        answer:
          "In the vast majority of cases, isolated skipped beats (premature atrial or ventricular contractions) are completely benign and do not damage your heart. An ambulatory ECG monitor helps quantify how frequently they occur and verifies that your overall heart rhythm is safe.",
      },
      {
        question: "Can anxiety alone trigger rapid palpitations?",
        answer:
          "Yes. When your body enters a fight-or-flight response, surges of adrenaline stimulate your heart's natural pacemaker (the sinus node), making your heart beat both faster and with greater force. Learning relaxation strategies often significantly reduces these episodes.",
      },
      {
        question: "How does a wearable heart monitor help my doctor?",
        answer:
          "A wearable monitor records your heart’s electrical activity 24/7. When you press a button during a flutter, your cardiologist can match your exact symptom to the recorded ECG trace to see exactly what rhythm occurred.",
      },
    ],
  },

  "dizziness-and-fainting": {
    slug: "dizziness-and-fainting",
    name: "Dizziness & Fainting",
    category: "Heart Symptoms",
    categoryKey: "heart",
    heroDesc:
      "Lightheadedness, unsteadiness, or temporary loss of consciousness (syncope). Structured cardiovascular evaluation clarifies the root cause.",
    understanding: {
      overview:
        "Dizziness can range from feeling lightheaded when standing up quickly, to feeling unsteady on your feet, to a sudden blackout or fainting episode (syncope). In simple terms, your brain requires a continuous, stable supply of oxygenated blood and constant blood pressure. If blood pressure dips momentarily, or if the heart rhythm slows down or speeds up too dramatically, the brain briefly receives less blood flow, creating lightheadedness or causing the body to faint to restore blood flow.",
      feelings: [
        "A feeling that the room is dimming or that you might pass out when standing up from a chair",
        "Unsteadiness or a floaty sensation in your head without the room actually spinning",
        "A sudden warm flush, tunnel vision, or ringing in the ears right before a near-faint",
        "A brief blackout where you wake up on the floor with no memory of the fall",
      ],
      development:
        "Episodes can occur after prolonged standing in warm environments, after dehydration, during intense emotional moments, or unexpectedly without any warning.",
      meaning:
        "While many fainting spells are benign vasovagal reflexes, unexplained fainting warrants careful cardiac screening to rule out rhythm pauses or valve conditions.",
    },
    causes: {
      reassuranceNote:
        "Occasional lightheadedness upon standing up quickly is very common and usually harmless. Simple hydration, posture adjustments, or medication reviews often resolve the issue.",
      commonCauses: [
        {
          title: "Orthostatic Hypotension",
          desc: "A brief drop in blood pressure when standing up from a lying or sitting position, common with dehydration.",
        },
        {
          title: "Vasovagal Syncope (Common Faint)",
          desc: "A benign reflex triggered by prolonged standing, heat, sight of blood, or emotional distress.",
        },
        {
          title: "Medication Side Effects",
          desc: "Blood pressure medications, water pills (diuretics), or prostate treatments lowering pressure too much.",
        },
      ],
      cardiovascularCauses: [
        {
          title: "Bradycardia & Heart Block (Slow Rhythms)",
          desc: "The heart beating too slowly (under 40 bpm) or pausing momentarily due to conduction system aging.",
        },
        {
          title: "Tachyarrhythmias (Rapid Rhythms)",
          desc: "Very rapid heartbeat episodes that prevent the heart chambers from filling properly before pumping.",
        },
        {
          title: "Aortic Valve Stenosis",
          desc: "A narrowed heart valve restricting the amount of blood pumped to the brain during exertion.",
        },
      ],
    },
    findingTheCause: {
      intro:
        "Cardiovascular workup aims to determine whether dizziness or fainting is related to blood pressure regulation, cardiac rhythm pauses, or structural heart changes.",
      tests: [
        {
          name: "12-Lead ECG & Rhythm Monitoring",
          desc: "Records baseline electrical conduction to detect sinus pauses, AV blocks, or QT interval abnormalities.",
          icon: "Activity",
        },
        {
          name: "Echocardiogram (Cardiac Ultrasound)",
          desc: "Visualizes aortic valve opening, ventricular muscle thickness, and cardiac outflow tract dynamics.",
          icon: "HeartPulse",
        },
        {
          name: "Orthostatic Blood Pressure Testing / Tilt Table",
          desc: "Measures blood pressure and heart rate changes in lying, sitting, and standing positions.",
          icon: "TrendingUp",
        },
        {
          name: "Extended Patch Monitor or Loop Recorder",
          desc: "Continuous multi-day or multi-week heart monitoring to capture infrequent fainting episodes.",
          icon: "ShieldCheck",
        },
      ],
    },
    urgentCare: {
      emergencyIntro:
        "Seek immediate emergency medical attention (call 911 / 999) if dizziness or fainting occurs with any of the following:",
      warningSigns: [
        "Fainting that occurs during vigorous physical exercise or exertion",
        "Fainting that happens suddenly with zero warning, lightheadedness, or aura beforehand",
        "Fainting in a person with a known history of heart failure, previous heart attack, or pacemaker",
        "Dizziness or fainting accompanied by sudden chest pain, severe palpitations, facial drooping, or speech difficulty",
      ],
      routineAssessment: [
        "Mild lightheadedness when rising quickly after sitting for several hours",
        "Fainting clearly preceded by warm room exposure, standing in line, or needle/blood phobia",
        "Gradual unsteadiness that resolves after drinking a glass of water and resting",
      ],
    },
    whatCanHelp: {
      practicalGuidance: [
        "Rise slowly from lying to sitting, pause for a few seconds, then stand up to allow blood pressure to adjust.",
        "Drink adequate water and stay hydrated throughout the day, especially in warm weather.",
        "If you feel lightheaded, sit down or lie flat immediately and elevate your feet above heart level.",
        "Review your blood pressure prescriptions with your doctor to ensure dosages are optimal.",
      ],
      whatToMonitor: [
        "Your home blood pressure readings in both sitting and standing positions",
        "Any warning signs (nausea, cold sweat, visual dimming) that occur right before dizziness",
        "How frequently episodes occur and what activity you were performing",
      ],
      whenToArrangeAssessment:
        "Book a clinical consultation if you have experienced a blackout or fainting episode, if dizziness is recurring frequently, or if episodes happen while driving or exercising.",
    },
    faqs: [
      {
        question: "What is the difference between dizziness and true vertigo?",
        answer:
          "Dizziness often feels like lightheadedness, faintness, or feeling disconnected or floaty, frequently related to blood pressure or heart rhythm. Vertigo feels like the room is actively spinning around you or that you are tilting, which is typically caused by an inner ear issue.",
      },
      {
        question: "When does fainting indicate a heart problem rather than dehydration?",
        answer:
          "Fainting that occurs without warning, happens while lying down, happens during active physical exertion, or occurs in someone with existing heart conditions strongly suggests a cardiac rhythm or valve issue and requires prompt evaluation.",
      },
      {
        question: "Can blood pressure medication cause sudden dizziness?",
        answer:
          "Yes. If your blood pressure medication dose is too high, or if you become dehydrated, your resting blood pressure may drop too low when you stand up. A doctor can easily adjust your medications to restore balance.",
      },
    ],
  },

  "fatigue": {
    slug: "fatigue",
    name: "Fatigue",
    category: "Heart Symptoms",
    categoryKey: "heart",
    heroDesc:
      "Persistent, unexplained tiredness or low stamina that does not improve with standard rest. Comprehensive cardiac evaluation rules out circulatory strain.",
    understanding: {
      overview:
        "Fatigue is more than just feeling sleepy after a busy day—it is an overwhelming lack of energy and physical stamina that makes ordinary daily tasks feel exhausting. You may find that your legs feel heavy, that walking across the room takes effort, or that you need frequent daytime naps. In plain language, your heart is the central pump delivering oxygen-rich and nutrient-dense blood to every muscle and organ in your body. When the pump is working under extra resistance or reduced efficiency, your body prioritizes vital organs, leaving your muscles feeling drained.",
      feelings: [
        "Waking up in the morning feeling unrefreshed despite a full night of sleep",
        "Feeling a heavy, sluggish exhaustion in your legs and arms during simple chores",
        "A noticeable drop in physical endurance compared to your normal energy levels a few months ago",
        "Needing several hours of rest after minor activities like grocery shopping or gardening",
      ],
      development:
        "Cardiac fatigue typically builds gradually over weeks to months, often disguised as normal aging or stress until exercise tolerance becomes visibly restricted.",
      meaning:
        "Fatigue is your body's universal cue that energy delivery is reduced. A targeted cardiac assessment ensures your heart and circulation are supporting your lifestyle.",
    },
    causes: {
      reassuranceNote:
        "Fatigue is one of the most common symptoms in medicine and is very often due to everyday factors like sleep quality, stress, thyroid changes, or vitamin deficiencies rather than heart disease.",
      commonCauses: [
        {
          title: "Sleep Apnea & Poor Sleep Architecture",
          desc: "Nighttime breathing pauses that fragment sleep cycles and deprive tissues of restorative oxygen.",
        },
        {
          title: "Iron Deficiency / Anemia & Vitamin D Levels",
          desc: "Reduced oxygen-carrying capacity in the blood causing generalized muscular sluggishness.",
        },
        {
          title: "Hypothyroidism & Endocrine Shifts",
          desc: "An underactive thyroid gland slowing down the body's baseline metabolic rate.",
        },
      ],
      cardiovascularCauses: [
        {
          title: "Heart Failure / Reduced Ejection Fraction",
          desc: "Decreased cardiac output meaning less oxygenated blood reaches peripheral muscles during activity.",
        },
        {
          title: "Coronary Artery Disease",
          desc: "Subtle microvascular or coronary blockages that cause exertion-related fatigue rather than classic pain.",
        },
        {
          title: "Undiagnosed Arrhythmias (AFib)",
          desc: "A rapid or irregular rhythm that reduces pumping efficiency by 20–30%, leading to chronic tiredness.",
        },
      ],
    },
    findingTheCause: {
      intro:
        "Evaluating chronic fatigue begins with comprehensive laboratory testing and cardiovascular imaging to assess pump function, rhythm stability, and metabolic health.",
      tests: [
        {
          name: "Echocardiogram (Ultrasound)",
          desc: "Measures cardiac output, ejection fraction, and assesses diastolic relaxation to rule out heart failure.",
          icon: "HeartPulse",
        },
        {
          name: "12-Lead ECG & Ambulatory Rhythm Check",
          desc: "Detects intermittent arrhythmias (like silent AFib) or slow conduction pauses that drain daily stamina.",
          icon: "Activity",
        },
        {
          name: "Comprehensive Metabolic & Thyroid Panel",
          desc: "Evaluates kidney function, electrolytes, liver enzymes, hemoglobin, ferritin, and thyroid hormone.",
          icon: "TestTube",
        },
        {
          name: "Cardiopulmonary Exercise Stress Test",
          desc: "Objectively measures aerobic capacity, heart rate recovery, and oxygen consumption under exertion.",
          icon: "TrendingUp",
        },
      ],
    },
    urgentCare: {
      emergencyIntro:
        "Seek emergency medical evaluation (call 911 / 999) if profound fatigue is accompanied by any of these warning signs:",
      warningSigns: [
        "Sudden, overwhelming exhaustion paired with chest heaviness, pressure, or tightness",
        "Severe fatigue with sudden inability to catch your breath even while resting quietly",
        "Fatigue accompanied by confusion, slurred speech, facial asymmetry, or fainting",
        "Profound weakness accompanied by blue or gray-tinged lips, fingernails, or skin",
      ],
      routineAssessment: [
        "Gradual tiredness that has developed over several weeks or months",
        "Feeling sleepy in the afternoon after poor nighttime rest",
        "Low energy associated with periods of work stress, travel, or dietary changes",
      ],
    },
    whatCanHelp: {
      practicalGuidance: [
        "Maintain consistent sleep and wake schedules, aiming for 7–8 hours of quality rest.",
        "Incorporate light, daily walking as tolerated to stimulate circulation and mitochondrial energy production.",
        "Eat balanced, nutrient-rich meals with lean proteins, leafy vegetables, and adequate hydration.",
        "Undergo a sleep study if you snore heavily or wake up with a dry mouth or morning headaches.",
      ],
      whatToMonitor: [
        "Whether your fatigue worsens immediately after physical exertion or stays constant all day",
        "Any signs of fluid retention, such as tighter shoes, swollen ankles, or sudden weight gain",
        "Your resting heart rate and blood pressure throughout the week",
      ],
      whenToArrangeAssessment:
        "Schedule a cardiology appointment if your stamina has declined significantly, if fatigue limits your ability to work or exercise, or if you also experience mild breathlessness or swelling.",
    },
    faqs: [
      {
        question: "Can heart problems cause fatigue without any chest pain?",
        answer:
          "Yes. Many cardiac conditions—particularly heart failure, valve disease, and silent arrhythmias like Atrial Fibrillation—present primarily as unexplained fatigue and decreased exercise tolerance rather than chest discomfort.",
      },
      {
        question: "How is heart-related fatigue different from normal tiredness?",
        answer:
          "Normal tiredness usually improves after a good night's sleep or a restful weekend. Heart-related fatigue is persistent, directly limits physical activities like walking or climbing stairs, and is often accompanied by breathlessness or ankle swelling.",
      },
      {
        question: "What tests are most important to rule out a cardiac cause for my fatigue?",
        answer:
          "An echocardiogram (to check pumping efficiency), a resting and ambulatory ECG (to check for rhythm disruptions), and blood tests (including NT-proBNP, complete blood count, and thyroid panel) provide a thorough evaluation.",
      },
    ],
  },

  // ==========================================
  // 2. VASCULAR SYMPTOMS (5 Symptoms)
  // ==========================================

  "leg-pain-when-walking": {
    slug: "leg-pain-when-walking",
    name: "Leg Pain When Walking",
    category: "Vascular Symptoms",
    categoryKey: "vascular",
    heroDesc:
      "Cramping, aching, or tightness in the calf, thigh, or buttock muscles during walking that resolves with rest (Claudication). Expert vascular screening evaluates blood flow.",
    understanding: {
      overview:
        "Leg pain that predictably occurs while walking and goes away when you stop and rest is medically referred to as intermittent claudication. It feels like a tight, cramping ache in your calf, thigh, or buttock muscles. In plain language, when you walk, your leg muscles require more oxygen-rich blood. If the arteries supplying your legs are narrowed, the blood flow cannot keep up with the muscles' demand during movement, causing an ache that subsides once you rest.",
      feelings: [
        "A cramp-like ache in the calf or thigh after walking a predictable distance (e.g., two blocks)",
        "A sensation of heavy, tired, or tight muscles that forces you to pause for a few minutes",
        "Prompt relief of muscle discomfort within 2 to 5 minutes of standing still",
        "Pain that returns when you resume walking the same distance",
      ],
      development:
        "It usually begins gradually, starting on inclines or brisk walks, and over time may occur after shorter walking distances.",
      meaning:
        "This is a classic sign of Peripheral Artery Disease (PAD). Because arteries throughout the body are connected, detecting it early protects both your legs and your heart.",
    },
    causes: {
      reassuranceNote:
        "Not all leg pain is vascular. Muscle soreness, sciatica, arthritis, and spinal stenosis can also cause leg discomfort. A straightforward, non-invasive vascular check can quickly identify if blood flow is the reason.",
      commonCauses: [
        {
          title: "Musculoskeletal & Tendon Strain",
          desc: "Tension or minor tears in calf or hamstring muscles from sports, walking on hard surfaces, or uneven footing.",
        },
        {
          title: "Lumbar Spinal Stenosis (Pseudoclaudication)",
          desc: "Nerve compression in the lower back causing leg heaviness that improves with bending forward rather than just standing still.",
        },
        {
          title: "Sciatica & Nerve Irritation",
          desc: "Sharp, shooting nerve pain traveling down the back of the leg, often present even while sitting.",
        },
      ],
      cardiovascularCauses: [
        {
          title: "Peripheral Artery Disease (PAD)",
          desc: "Plaque buildup (atherosclerosis) in the leg arteries narrowing blood flow to walking muscles.",
        },
        {
          title: "Iliac or Femoral Artery Stenosis",
          desc: "Localized narrowing in upper leg or pelvic arteries causing buttock and thigh cramping during exertion.",
        },
        {
          title: "Arterial Vasospasm",
          desc: "Temporary constriction of smaller blood vessels in response to cold weather or smoking.",
        },
      ],
    },
    findingTheCause: {
      intro:
        "Vascular evaluation starts with checking the pulses in your feet and legs, followed by simple, non-invasive ultrasound and pressure measurements.",
      tests: [
        {
          name: "Ankle-Brachial Index (ABI)",
          desc: "A fast, painless test comparing blood pressure in your ankles to blood pressure in your arms using inflatable cuffs.",
          icon: "TrendingUp",
        },
        {
          name: "Lower Extremity Arterial Duplex Ultrasound",
          desc: "Sound-wave imaging that directly visualizes blood flow velocity and pinpoints narrowed arterial segments.",
          icon: "Activity",
        },
        {
          name: "Treadmill Exercise ABI Testing",
          desc: "Measures ankle pressure drops immediately after walking on a gentle treadmill to confirm exertional claudication.",
          icon: "HeartPulse",
        },
        {
          name: "Lipid & Cardiovascular Risk Blood Panel",
          desc: "Evaluates cholesterol levels (LDL-C, triglycerides), HbA1c (blood sugar), and hs-CRP inflammatory markers.",
          icon: "TestTube",
        },
      ],
    },
    urgentCare: {
      emergencyIntro:
        "Seek immediate emergency medical care (call 911 / 999 or visit the emergency room) if you develop any of these critical vascular warning signs:",
      warningSigns: [
        "Sudden, severe leg pain accompanied by a pale, cold, or bluish foot and loss of sensation (Acute Limb Ischemia)",
        "Severe, continuous foot pain at rest (especially at night) that forces you to dangle your leg over the bed edge",
        "Non-healing sores, black spots, or ulcers on your toes or foot",
        "Sudden leg pain paired with acute chest pain or shortness of breath",
      ],
      routineAssessment: [
        "Predictable cramping in the calf after walking that resolves reliably after 3–5 minutes of rest",
        "Mild aching after long daily walks that has stayed stable over several months",
        "Tired leg muscles that feel better with supportive shoes and gentle stretching",
      ],
    },
    whatCanHelp: {
      practicalGuidance: [
        "Participate in a supervised walking program: walk until mild discomfort, rest until it clears, then repeat.",
        "Quit smoking completely, as tobacco is the single strongest factor causing artery narrowing.",
        "Wear comfortable, well-cushioned footwear and inspect your feet daily for any pressure spots or cuts.",
        "Maintain healthy blood pressure, cholesterol, and blood sugar levels through medical guidance.",
      ],
      whatToMonitor: [
        "The exact number of blocks or minutes you can walk before muscle discomfort starts",
        "Whether your feet feel unusually cold or look pale when elevated compared to when standing",
        "The condition of your toenails and skin on your lower legs",
      ],
      whenToArrangeAssessment:
        "Book a vascular consultation if you experience cramping when walking, if your walking distance is decreasing, or if you have diabetes, high blood pressure, or a smoking history.",
    },
    faqs: [
      {
        question: "How is arterial leg pain different from nerve or sciatica pain?",
        answer:
          "Arterial pain (claudication) happens predictably during walking and disappears within minutes of standing still. Sciatica or nerve pain often shoots down the leg like an electric shock, can occur while sitting or resting, and often improves with changing posture or bending forward.",
      },
      {
        question: "Can Peripheral Artery Disease (PAD) be treated without surgery?",
        answer:
          "Yes. In most cases, early to moderate PAD is successfully treated with structured exercise therapy, smoking cessation, cholesterol-lowering medications, and blood pressure optimization. Minimally invasive catheter procedures are reserved for advanced blockages.",
      },
      {
        question: "What is an Ankle-Brachial Index (ABI) test?",
        answer:
          "An ABI test is completely painless and takes only about 10 minutes. The clinician places blood pressure cuffs on your arms and ankles and uses a small ultrasound probe to compare pressures. A normal ratio confirms healthy blood flow.",
      },
    ],
  },

  "leg-swelling": {
    slug: "leg-swelling",
    name: "Leg Swelling",
    category: "Vascular Symptoms",
    categoryKey: "vascular",
    heroDesc:
      "Fluid accumulation in the lower legs, ankles, or feet (Edema). Specialized vascular and cardiac evaluations determine the precise origin.",
    understanding: {
      overview:
        "Leg swelling (peripheral edema) occurs when excess fluid collects in the tissues of your lower legs, ankles, or feet. You might notice that your socks leave deep indentations, your shoes feel tight by evening, or pressing a finger against your shin leaves a temporary dimple (pitting). In everyday terms, veins in your legs work against gravity to carry blood back up to your heart with the help of tiny one-way valves and calf muscles. If these valves weaken or if the heart is pumping under elevated fluid pressure, fluid seeps into surrounding tissues.",
      feelings: [
        "Puffy, swollen ankles that look visibly larger at the end of the day",
        "Shoes or sandals that feel uncomfortably tight by afternoon or evening",
        "A sensation of tightness or stretched skin over the lower calves and feet",
        "A temporary indent left behind when you press your thumb firmly against the ankle bone",
      ],
      development:
        "Swelling often builds gradually throughout the day, especially after long periods of sitting or standing, and typically improves overnight after elevating your legs in bed.",
      meaning:
        "Leg swelling can stem from local vein valve leakage (venous insufficiency), medication side effects, or general fluid retention related to heart, kidney, or liver function.",
    },
    causes: {
      reassuranceNote:
        "Leg swelling is extremely common and frequently due to simple lifestyle factors such as prolonged sitting during travel, hot weather, high dietary salt, or superficial vein changes.",
      commonCauses: [
        {
          title: "Chronic Venous Insufficiency (CVI)",
          desc: "Weakened one-way valves in leg veins allowing blood to pool in the lower extremities due to gravity.",
        },
        {
          title: "Medications (Calcium Channel Blockers, NSAIDs)",
          desc: "Common blood pressure drugs (like amlodipine) or anti-inflammatory painkillers causing fluid retention.",
        },
        {
          title: "Prolonged Sitting or Inactivity",
          desc: "Lack of calf muscle pumping action during long flights, desk work, or periods of recovery.",
        },
      ],
      cardiovascularCauses: [
        {
          title: "Congestive Heart Failure (Right-Sided Strain)",
          desc: "The heart working under elevated fluid pressure, causing systemic venous fluid to back up into the legs.",
        },
        {
          title: "Deep Vein Thrombosis (DVT)",
          desc: "A blood clot in a deep leg vein obstructing upward blood return, usually affecting one leg suddenly.",
        },
        {
          title: "Pulmonary Hypertension",
          desc: "Elevated pressure in lung blood vessels creating backward resistance into the right heart and lower limbs.",
        },
      ],
    },
    findingTheCause: {
      intro:
        "Pinpointing the cause of leg swelling involves distinguishing between venous valve reflux, deep vein clots, and overall cardiac fluid regulation.",
      tests: [
        {
          name: "Venous Duplex Ultrasound",
          desc: "A comprehensive sound-wave scan of the deep and superficial leg veins to rule out blood clots (DVT) and evaluate valve function.",
          icon: "Activity",
        },
        {
          name: "Echocardiogram (Cardiac Ultrasound)",
          desc: "Assesses heart chamber size, right ventricular pressure, and inferior vena cava collapsibility.",
          icon: "HeartPulse",
        },
        {
          name: "Kidney, Liver & Electrolyte Blood Panel",
          desc: "Checks serum creatinine, glomerular filtration, albumin protein levels, and liver function.",
          icon: "TestTube",
        },
        {
          name: "NT-proBNP / BNP Cardiac Biomarker",
          desc: "A highly sensitive blood test that confirms or excludes elevated fluid pressure in the heart.",
          icon: "ShieldCheck",
        },
      ],
    },
    urgentCare: {
      emergencyIntro:
        "Seek urgent emergency medical care (call 911 / 999) if your leg swelling is accompanied by any of the following warning signs:",
      warningSigns: [
        "Sudden swelling in one leg or calf accompanied by warmth, redness, and tenderness (DVT warning)",
        "Leg swelling that occurs alongside sudden shortness of breath, chest pain, or coughing up blood (PE warning)",
        "Skin on the swollen leg turning dusky, blue, or developing rapid blistering or severe pain",
        "Sudden, massive fluid swelling developing over just a few hours",
      ],
      routineAssessment: [
        "Mild swelling in both ankles that appears toward the evening and goes away overnight",
        "Puffy ankles after sitting through a long flight or car ride",
        "Gradual swelling associated with visible varicose veins on the calves",
      ],
    },
    whatCanHelp: {
      practicalGuidance: [
        "Elevate your legs above heart level for 15–20 minutes several times a day to encourage venous return.",
        "Wear graduated medical compression stockings (20–30 mmHg) during the day as recommended by your doctor.",
        "Reduce dietary sodium and processed foods to minimize bodily water retention.",
        "Take regular walking breaks every hour if you work at a desk or travel long distances.",
      ],
      whatToMonitor: [
        "Whether both legs are swollen equally or if one leg is noticeably larger",
        "Your daily body weight to catch rapid fluid gains early",
        "Any changes in the color, texture, or thickness of the skin around your ankles",
      ],
      whenToArrangeAssessment:
        "Schedule a vascular consultation if swelling is persistent, does not resolve after elevating your legs overnight, or is associated with aching, heaviness, or skin discoloration.",
    },
    faqs: [
      {
        question: "Why do my legs swell more in the evening than in the morning?",
        answer:
          "Gravity pulls fluid downward throughout the day while you stand or sit. When you lie down flat in bed at night, gravity no longer opposes venous return, allowing your veins and kidneys to clear the fluid, so you wake up with less swelling.",
      },
      {
        question: "Can blood pressure pills cause ankle swelling?",
        answer:
          "Yes. Calcium channel blockers (such as amlodipine) dilate small arteries, which can increase fluid leakage into surrounding tissues near the ankles. Your doctor can often adjust the dosage or switch medications to resolve this.",
      },
      {
        question: "What is the difference between venous swelling and heart failure swelling?",
        answer:
          "Venous swelling is usually isolated to the legs, often worse in one leg, and linked to visible varicose veins. Heart failure swelling usually affects both legs equally and is typically accompanied by shortness of breath when lying flat and sudden weight gain.",
      },
    ],
  },

  "leg-heaviness-and-aching": {
    slug: "leg-heaviness-and-aching",
    name: "Leg Heaviness & Aching",
    category: "Vascular Symptoms",
    categoryKey: "vascular",
    heroDesc:
      "A tired, full, throbbing, or restless sensation in the lower limbs, especially after standing. Targeted vascular assessment identifies venous valve function.",
    understanding: {
      overview:
        "Leg heaviness and aching feels like carrying extra weight in your lower limbs, often described as a dull, throbbing, or tired sensation in the calves. It tends to worsen after standing on hard surfaces or sitting for hours, and often feels significantly better when you put your feet up. In everyday language, your veins rely on healthy internal one-way valves to prevent blood from flowing backward toward your feet. When these valves become stretched or inefficient, venous blood pressure builds in the lower leg, stretching tissue nerves and causing an aching, heavy sensation.",
      feelings: [
        "A heavy, lead-like feeling in the calves and thighs at the end of a workday",
        "A dull, persistent ache that improves almost immediately when you elevate your legs",
        "An uncomfortable restlessness or urge to move your legs in the evening while sitting",
        "A tight, throbbing sensation in the lower calves after standing in one place",
      ],
      development:
        "It typically progresses slowly over years, often aggravated by occupations requiring prolonged standing (such as teachers, nurses, or retail workers) or warm weather.",
      meaning:
        "This is the hallmark symptom of early Chronic Venous Insufficiency (CVI). Modern, non-invasive therapies can restore comfortable circulation.",
    },
    causes: {
      reassuranceNote:
        "Leg heaviness and aching is rarely life-threatening, but it can significantly impact your daily comfort and energy levels. Early assessment prevents progression to skin changes or varicose veins.",
      commonCauses: [
        {
          title: "Venous Valvular Incompetence & Reflux",
          desc: "Malfunctioning micro-valves in superficial leg veins allowing blood to flow backward toward the feet.",
        },
        {
          title: "Occupational Prolonged Standing / Sitting",
          desc: "Gravity causing hydrostatic pressure buildup in leg veins without active calf muscle contractions.",
        },
        {
          title: "Restless Legs Syndrome (RLS)",
          desc: "Neurological sensation causing an irresistible urge to move the legs, especially when falling asleep.",
        },
      ],
      cardiovascularCauses: [
        {
          title: "Deep Venous Reflux (Post-Thrombotic Syndrome)",
          desc: "Long-term valve changes following a previous clot in deep leg veins.",
        },
        {
          title: "Pelvic Venous Congestion",
          desc: "Enlarged veins in the lower pelvis causing downward venous pressure into the upper thighs.",
        },
        {
          title: "Combined Venous & Arterial Circulatory Strain",
          desc: "Co-existing venous pooling and mild arterial narrowing in mature adults.",
        },
      ],
    },
    findingTheCause: {
      intro:
        "Evaluating leg heaviness begins with a standing clinical examination and a detailed venous reflux ultrasound mapping session.",
      tests: [
        {
          name: "Standing Venous Reflux Ultrasound",
          desc: "A specialized ultrasound performed while standing to measure exact backward flow times in saphenous and deep veins.",
          icon: "Activity",
        },
        {
          name: "Ankle-Brachial Index (ABI) Screening",
          desc: "Rules out concurrent arterial disease before prescribing therapeutic compression therapy.",
          icon: "TrendingUp",
        },
        {
          name: "High-Resolution Skin & Microvascular Inspection",
          desc: "Evaluates the skin for subtle signs of venous stasis, hemosiderin staining, or telangiectasias.",
          icon: "ShieldCheck",
        },
        {
          name: "Electrolyte & Iron Status Blood Tests",
          desc: "Checks ferritin, magnesium, and potassium levels to rule out nutritional contributors to restless leg aching.",
          icon: "TestTube",
        },
      ],
    },
    urgentCare: {
      emergencyIntro:
        "Seek urgent medical evaluation (call 911 / 999 or go to the nearest emergency clinic) if your leg aching is accompanied by:",
      warningSigns: [
        "Sudden, intense calf pain with hot, red, firm swelling in one leg (DVT indicator)",
        "Sudden onset of severe chest pain, racing pulse, or breathlessness alongside leg discomfort",
        "A sudden open wound or bleeding from an enlarged surface vein that does not stop with direct pressure",
        "Sudden loss of pulse or pale, cold numbness in the foot",
      ],
      routineAssessment: [
        "Dull aching and heaviness in both legs after standing all day that clears after putting your feet up",
        "Tired legs that feel better after wearing supportive socks or walking around",
        "Mild evening aching that has been present for months with no sudden changes",
      ],
    },
    whatCanHelp: {
      practicalGuidance: [
        "Elevate your legs above hip level for 15–30 minutes at the end of the day.",
        "Wear calibrated gradient compression socks (15–20 or 20–30 mmHg) during work hours.",
        "Perform simple calf pump exercises (raising up on your toes 15 times) every hour when standing or sitting.",
        "Engage in regular low-impact exercises like walking, swimming, or cycling to strengthen your calf muscle pump.",
      ],
      whatToMonitor: [
        "Whether leg aching is relieved immediately when you elevate your legs",
        "Any development of small spider veins or rope-like varicose veins on your calves or thighs",
        "How your legs feel in warm weather compared to cooler environments",
      ],
      whenToArrangeAssessment:
        "Book a consultation if leg heaviness interferes with your daily activities, if compression socks alone do not provide full relief, or if you notice visible bulging veins.",
    },
    faqs: [
      {
        question: "Why do my legs feel so much heavier at the end of the day?",
        answer:
          "Throughout the day, gravity causes blood to pool in the lower leg veins if the internal valves are leaky. By late afternoon, the pressure in the vein walls peaks, which causes the surrounding tissues to feel tight, heavy, and tired.",
      },
      {
        question: "Do compression socks actually help with heavy legs?",
        answer:
          "Yes. Graduated compression socks apply gentle, calibrated pressure at the ankle that gradually decreases up the calf. This supports vein walls, helps one-way valves close, and boosts blood return to the heart.",
      },
      {
        question: "What treatments exist if ultrasound confirms venous reflux?",
        answer:
          "Today's treatments are gentle and minimally invasive. In-office options like endovenous radiofrequency ablation or medical vein closure require no general anesthesia, involve minimal downtime, and provide lasting relief.",
      },
    ],
  },

  "varicose-veins": {
    slug: "varicose-veins",
    name: "Varicose Veins",
    category: "Vascular Symptoms",
    categoryKey: "vascular",
    heroDesc:
      "Enlarged, twisted, or bulging veins visible beneath the skin surface. Modern, minimally invasive vascular care restores comfort and circulation.",
    understanding: {
      overview:
        "Varicose veins are swollen, twisted, blue or dark purple blood vessels that bulge noticeably beneath the surface of the skin, most commonly along the calves, inner thighs, or ankles. In everyday terms, veins are designed with delicate one-way valves that allow blood to travel up toward the heart while preventing it from sliding back down. When these valves stretch or weaken, blood pools in the superficial veins, causing them to expand, twist, and become prominent.",
      feelings: [
        "Visible bulging, rope-like blue or purple cords along the leg",
        "An uncomfortable burning, throbbing, or itching sensation over the enlarged veins",
        "A sensation of heaviness or muscle tiredness in the legs after standing",
        "Tenderness or mild aching when pressing directly over a bulging vein",
      ],
      development:
        "They often develop gradually over years, influenced by genetics, pregnancy, standing occupations, and age.",
      meaning:
        "While many people view them as a cosmetic concern, varicose veins are a true medical condition representing underlying venous reflux that can be easily treated.",
    },
    causes: {
      reassuranceNote:
        "Varicose veins are very common and highly treatable. Having them does not mean you have a dangerous condition, but a vascular evaluation helps protect your skin and circulation over time.",
      commonCauses: [
        {
          title: "Genetic Predisposition & Family History",
          desc: "Inherited vein wall elasticity and valve architecture that makes veins more susceptible to stretching.",
        },
        {
          title: "Pregnancy & Hormonal Influences",
          desc: "Increased blood volume and hormone-induced vein relaxation during pregnancy.",
        },
        {
          title: "Prolonged Standing Occupations",
          desc: "Hydrostatic pressure placed on lower extremity veins over many years of standing work.",
        },
      ],
      cardiovascularCauses: [
        {
          title: "Great or Small Saphenous Vein Reflux",
          desc: "Incompetence in the main superficial feeder veins transmitting backward pressure to surface branches.",
        },
        {
          title: "Perforator Vein Incompetence",
          desc: "Weakened connecting veins between the deep and superficial venous systems.",
        },
        {
          title: "Superficial Thrombophlebitis",
          desc: "Localized inflammation or small clotted segments within a surface varicose vein.",
        },
      ],
    },
    findingTheCause: {
      intro:
        "Diagnostic evaluation maps the entire superficial and deep venous architecture to find the exact leaky valves feeding the surface veins.",
      tests: [
        {
          name: "Complete Venous Duplex Ultrasound Mapping",
          desc: "Visualizes the saphenous veins from groin to ankle, measuring vessel diameters and exact reflux duration in seconds.",
          icon: "Activity",
        },
        {
          name: "Deep Vein Patency & Flow Assessment",
          desc: "Verifies that the deep femoral and popliteal veins are completely open and healthy prior to treating surface veins.",
          icon: "ShieldCheck",
        },
        {
          name: "Dermatological & Stasis Skin Exam",
          desc: "Evaluates the lower ankle skin for early signs of pigmentation, eczema, or tissue thinning.",
          icon: "HeartPulse",
        },
        {
          name: "Ankle-Brachial Index (ABI)",
          desc: "Ensures healthy arterial circulation to safely guide compression recommendations.",
          icon: "TrendingUp",
        },
      ],
    },
    urgentCare: {
      emergencyIntro:
        "Seek urgent medical evaluation (call 911 / 999 or go to the nearest emergency facility) if you experience any of the following:",
      warningSigns: [
        "A varicose vein that begins bleeding profusely (elevate the leg and apply firm, direct pressure with a clean cloth immediately)",
        "A vein that suddenly becomes red, hot, hard like a cord, and extremely painful (thrombophlebitis)",
        "An open, non-healing skin sore or ulcer near the inner ankle",
        "Sudden severe swelling in the entire leg accompanied by chest tightness or shortness of breath",
      ],
      routineAssessment: [
        "Bulging veins that ache mildly after standing for long periods",
        "Spider veins or cosmetic concerns on the thighs or calves",
        "Gradual appearance of new surface veins without severe pain or sudden redness",
      ],
    },
    whatCanHelp: {
      practicalGuidance: [
        "Wear graduated compression stockings during the day to prevent blood from pooling in surface veins.",
        "Elevate your legs on cushions whenever relaxing, reading, or watching television.",
        "Avoid long stretches of motionless standing or sitting; flex your ankles frequently.",
        "Keep the skin over your lower legs moisturized to maintain a healthy skin barrier.",
      ],
      whatToMonitor: [
        "Any increase in the size or prominence of the bulging veins",
        "Any changes in skin pigmentation (brownish discoloration) around your inner ankles",
        "How well your symptoms respond to compression socks and leg elevation",
      ],
      whenToArrangeAssessment:
        "Schedule a vascular consultation if your veins cause aching, itching, or throbbing, if you notice skin color changes, or if you want to explore modern, in-office treatment options.",
    },
    faqs: [
      {
        question: "Are varicose veins just a cosmetic issue, or a real medical condition?",
        answer:
          "While they are visibly noticeable, varicose veins are a true medical vascular condition caused by faulty vein valves (venous reflux). Left unmanaged, they can lead to chronic aching, swelling, and skin changes.",
      },
      {
        question: "How are varicose veins treated today?",
        answer:
          "Gone are the days of painful surgical vein stripping. Modern treatments—like Radiofrequency Ablation (RFA) and ultrasound-guided sclerotherapy—are performed in the office under local anesthetic in under 45 minutes with immediate return to walking.",
      },
      {
        question: "Will varicose veins return after treatment?",
        answer:
          "Treated veins are permanently closed and absorbed by your body. While your body can occasionally develop new varicose veins in other untreated vessels over time, maintaining healthy habits and periodic check-ups keeps your legs comfortable.",
      },
    ],
  },

  "cold-or-discolored-feet": {
    slug: "cold-or-discolored-feet",
    name: "Cold or Discolored Feet",
    category: "Vascular Symptoms",
    categoryKey: "vascular",
    heroDesc:
      "Feet that feel unusually cold to the touch, or look pale, blue, purple, or mottled. Non-invasive vascular assessment checks microcirculation and arterial flow.",
    understanding: {
      overview:
        "Having feet that feel noticeably colder than the rest of your body, or noticing that your toes turn white, pale, bluish-purple, or reddish, indicates changes in blood circulation or temperature regulation. In simple terms, your arterial system pumps warm, oxygen-rich blood from your heart all the way down to the tiny capillary blood vessels in your toes. If blood flow is slowed by narrowed arteries or if tiny vessels overreact to cool temperatures, the skin loses its warm pink tone and feels chilled.",
      feelings: [
        "Feet that feel icy cold even when wearing warm wool socks or under blankets",
        "Toes turning noticeably white or bluish in cool air, followed by redness and tingling when warming up",
        "A numb, tingling, or 'pins and needles' sensation in the toes",
        "Skin on the feet appearing pale, shiny, or unusually smooth with slow toenail growth",
      ],
      development:
        "It can occur suddenly in response to cold weather, air conditioning, or emotional stress (spasm), or develop gradually as a sign of reduced arterial inflow.",
      meaning:
        "A clinical vascular exam distinguishes between harmless cold sensitivity (Raynaud's phenomenon) and arterial blockages that need protection.",
    },
    causes: {
      reassuranceNote:
        "Many people naturally have cold hands and feet due to benign circulation patterns or room temperature. A quick check of your foot pulses provides immediate clarity.",
      commonCauses: [
        {
          title: "Raynaud’s Phenomenon / Vasospasm",
          desc: "Temporary, reversible constriction of micro-vessels in the toes triggered by cool air, ice, or stress.",
        },
        {
          title: "Peripheral Neuropathy",
          desc: "Nerve changes (frequently related to diabetes or vitamin B12) that make feet feel cold even when skin temperature is normal.",
        },
        {
          title: "Hypothyroidism & Slowed Metabolism",
          desc: "An underactive thyroid reducing basal heat production and peripheral blood flow.",
        },
      ],
      cardiovascularCauses: [
        {
          title: "Peripheral Artery Disease (PAD)",
          desc: "Narrowing in the leg or foot arteries reducing the volume of warm blood reaching the toes.",
        },
        {
          title: "Microvascular Atheroembolism",
          desc: "Small cholesterol particles lodging in digital toe capillaries (Blue Toe Syndrome).",
        },
        {
          title: "Chronic Venous Congestion (Stasis Cyanosis)",
          desc: "Sluggish, pooled venous blood creating a dusky bluish-purple appearance when feet are dangling.",
        },
      ],
    },
    findingTheCause: {
      intro:
        "Cardiovascular and vascular tests evaluate both large artery pulses and distal microvascular skin perfusion.",
      tests: [
        {
          name: "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
          desc: "Measures blood pressure in the great toes and ankles using sensitive infrared light sensors to evaluate small vessels.",
          icon: "TrendingUp",
        },
        {
          name: "Lower Extremity Arterial Duplex Ultrasound",
          desc: "Maps arterial blood flow velocity from the groin down to the dorsalis pedis and posterior tibial foot arteries.",
          icon: "Activity",
        },
        {
          name: "Pulse Volume Recording (PVR)",
          desc: "Calculates wave-shape contours of blood flow pulses at the thigh, calf, ankle, and trans-metatarsal levels.",
          icon: "HeartPulse",
        },
        {
          name: "Autoimmune & Diabetes Blood Panel",
          desc: "Tests fasting glucose, HbA1c, ANA antibodies, and inflammatory markers associated with vascular sensitivity.",
          icon: "TestTube",
        },
      ],
    },
    urgentCare: {
      emergencyIntro:
        "Seek immediate emergency medical attention (call 911 / 999 or visit the nearest emergency room) if you notice:",
      warningSigns: [
        "A foot or toe that suddenly becomes pale, marble-white, or blue, accompanied by severe pain and numbness (Acute Ischemia)",
        "A dark purple or black discoloration developing on a toe or heel (gangrene warning)",
        "A break in the skin, cut, or ulcer on the foot that is red, draining, or failing to heal",
        "Sudden coldness in one foot paired with the inability to wiggle your toes",
      ],
      routineAssessment: [
        "Feet that feel cold when getting into bed but warm up under blankets",
        "Toes that turn pale in air-conditioned rooms and return to normal color within a few minutes of warming",
        "Gradual coldness in both feet without pain, color changes, or skin breakdown",
      ],
    },
    whatCanHelp: {
      practicalGuidance: [
        "Wear warm, breathable socks (such as merino wool) and avoid walking barefoot on cold tile or hardwood floors.",
        "Never use direct high-heat sources like heating pads or hot water bottles directly on your feet if sensation is reduced.",
        "Inspect your feet daily for any pressure sores, redness, blisters, or toenail changes.",
        "Avoid smoking and tobacco products, as nicotine causes immediate constriction of peripheral blood vessels.",
      ],
      whatToMonitor: [
        "Whether your feet turn pale when elevated and dark reddish-purple when dangling over the side of the bed (dependent rubor)",
        "How long it takes for normal color to return after exposure to cool temperatures",
        "Any tingling, numbness, or burning sensations in your toes",
      ],
      whenToArrangeAssessment:
        "Book a vascular consultation if cold feet are accompanied by leg cramping while walking, skin color changes, non-healing spots, or if you have diabetes or smoke.",
    },
    faqs: [
      {
        question: "How do I know if cold feet are from poor circulation or just cold weather?",
        answer:
          "If your feet warm up quickly with socks and have strong, easily felt pulses at the top of the foot and ankle, it is usually normal temperature sensitivity. If your feet stay cold, look pale or bluish, or cramp when walking, it suggests a vascular circulation issue.",
      },
      {
        question: "What is Raynaud's Phenomenon?",
        answer:
          "Raynaud's is a common, benign condition where cold temperatures or stress cause the tiny blood vessels in the fingers and toes to temporarily clamp shut. The digits turn white, then blue, and finally red as circulation returns.",
      },
      {
        question: "Why is foot care so critical for people with poor circulation or diabetes?",
        answer:
          "When blood flow to the feet is reduced, minor cuts, blisters, or ingrown toenails heal much more slowly and carry a higher risk of infection. Early vascular evaluation ensures proper blood flow is maintained.",
      },
    ],
  },

  // ==========================================
  // 3. HYPERTENSION (3 Symptoms / Concerns)
  // ==========================================

  "high-blood-pressure": {
    slug: "high-blood-pressure",
    name: "High Blood Pressure",
    category: "Hypertension",
    categoryKey: "hypertension",
    heroDesc:
      "Elevated blood pressure readings (Hypertension). Understanding blood pressure ranges, monitoring techniques, and individualized care protects your heart.",
    understanding: {
      overview:
        "Blood pressure is the force of your blood pushing against the walls of your arteries as your heart pumps. A reading consists of two numbers: the top number (systolic) measures the pressure when your heart beats, and the bottom number (diastolic) measures the pressure when your heart rests between beats. In everyday terms, think of blood pressure like water pressure in a garden hose. When the pressure stays consistently too high (above 130/80 mmHg), the artery walls become stiffer, requiring your heart to work harder.",
      feelings: [
        "High blood pressure is famously called the 'silent condition' because most people feel completely normal",
        "Occasional morning occipital tension or a sensation of mild pressure behind the eyes",
        "Mild facial flushing or feelings of warmth during stressful moments",
        "A sensation of hearing your pulse in your ears (pulsatile tinnitus) when resting quietly",
      ],
      development:
        "It typically develops gradually over years, shaped by genetics, diet, stress, kidney function, and arterial elasticity.",
      meaning:
        "Having high blood pressure readings simply means your vascular resistance is elevated. With modern guidance, it is highly manageable and treatable.",
    },
    causes: {
      reassuranceNote:
        "A single high reading at a doctor's office does not necessarily mean you have chronic hypertension. Factors like 'white-coat' anxiety, coffee, or a rushed commute can temporarily elevate numbers.",
      commonCauses: [
        {
          title: "Essential (Primary) Hypertension",
          desc: "The most common form, developing gradually from combined genetic, dietary, and lifestyle factors.",
        },
        {
          title: "Dietary Sodium & Processed Foods",
          desc: "Excess salt causing the kidneys to hold onto water, increasing total blood volume and vessel pressure.",
        },
        {
          title: "Stress, Sedentary Habits & Sleep Apnea",
          desc: "Elevated sympathetic nervous system output and nighttime oxygen drops raising baseline vascular tone.",
        },
      ],
      cardiovascularCauses: [
        {
          title: "Arterial Stiffness & Atherosclerosis",
          desc: "Loss of natural vessel elasticity in the aorta and large arteries with age.",
        },
        {
          title: "Renal Artery Stenosis (Secondary Hypertension)",
          desc: "Narrowing in the arteries supplying the kidneys triggering hormone releases that spike blood pressure.",
        },
        {
          title: "Endocrine & Adrenal Factors",
          desc: "Overproduction of hormones like aldosterone or cortisol regulating fluid and sodium balance.",
        },
      ],
    },
    findingTheCause: {
      intro:
        "Accurate diagnosis begins with verified, standardized blood pressure measurements and non-invasive screening to assess cardiovascular impact.",
      tests: [
        {
          name: "24-Hour Ambulatory Blood Pressure Monitoring (ABPM)",
          desc: "The gold standard test: a compact wearable cuff measuring blood pressure throughout the day and during sleep.",
          icon: "Activity",
        },
        {
          name: "12-Lead Electrocardiogram (ECG)",
          desc: "Checks for signs of Left Ventricular Hypertrophy (LVH) or heart muscle thickening from prolonged pressure.",
          icon: "HeartPulse",
        },
        {
          name: "Echocardiogram (Cardiac Ultrasound)",
          desc: "Directly visualizes heart wall thickness, left ventricular mass, and diastolic relaxation capacity.",
          icon: "ShieldCheck",
        },
        {
          name: "Renal & Comprehensive Metabolic Panel",
          desc: "Evaluates kidney function (eGFR, creatinine), electrolytes (potassium, sodium), and urine protein.",
          icon: "TestTube",
        },
      ],
    },
    urgentCare: {
      emergencyIntro:
        "Seek emergency medical evaluation (call 911 / 999 or visit the nearest emergency room) if high blood pressure occurs with any of these acute warning signs:",
      warningSigns: [
        "A blood pressure reading over 180/120 mmHg accompanied by chest pain, shortness of breath, or back pain (Hypertensive Crisis)",
        "Severely high blood pressure paired with sudden severe headache, blurred vision, numbness, or speech difficulty",
        "Extremely high readings accompanied by nausea, vomiting, or confusion",
        "Sudden loss of vision or seizure-like activity during an acute blood pressure spike",
      ],
      routineAssessment: [
        "A reading between 130–145 / 85–92 mmHg on your home monitor without any symptoms",
        "A high reading taken immediately after exercise, caffeine, or an argument (rest 10 minutes and re-check)",
        "Occasional variations in your readings throughout the week (record them in a log for your doctor)",
      ],
    },
    whatCanHelp: {
      practicalGuidance: [
        "Adopt the DASH or Mediterranean diet: rich in fruits, vegetables, potassium, and low in sodium (<2,300 mg/day).",
        "Engage in 150 minutes of moderate aerobic activity weekly (such as brisk walking, cycling, or swimming).",
        "Limit alcohol consumption and practice daily stress-reduction techniques like slow breathing.",
        "Take prescribed blood pressure medications consistently at the same time each day without skipping doses.",
      ],
      whatToMonitor: [
        "Take home blood pressure readings twice daily: once in the morning before medication and once in the evening.",
        "Rest quietly for 5 minutes with your feet flat on the floor before pressing the start button on your cuff.",
        "Keep a written or digital log of your numbers to share with Dr. Almahmoud at your review.",
      ],
      whenToArrangeAssessment:
        "Schedule a cardiovascular appointment if your home readings consistently average above 130/80 mmHg, if your medications are causing side effects, or if you need an individualized treatment plan.",
    },
    faqs: [
      {
        question: "Why is high blood pressure called a 'silent killer' if I feel completely fine?",
        answer:
          "High blood pressure usually causes zero day-to-day symptoms. However, over years, the silent friction against artery walls strains your heart muscle, kidneys, and brain. Early proactive management completely prevents long-term complications.",
      },
      {
        question: "What is 'White-Coat Syndrome'?",
        answer:
          "White-Coat Syndrome occurs when anxiety or nervousness in a clinical setting causes your blood pressure to spike temporarily during a doctor's visit, even though your readings are normal at home. A 24-hour ambulatory monitor helps confirm this.",
      },
      {
        question: "Can lifestyle changes alone lower my blood pressure?",
        answer:
          "Yes! For many patients with mild hypertension, reducing dietary sodium, regular aerobic walking, weight management, and stress reduction can lower systolic blood pressure by 10 to 15 points, sometimes avoiding the need for medication.",
      },
    ],
  },

  "headaches": {
    slug: "headaches",
    name: "Headaches",
    category: "Hypertension",
    categoryKey: "hypertension",
    heroDesc:
      "Headaches that may be related to blood pressure fluctuations or cardiovascular tone. Expert evaluation clarifies the relationship between blood pressure and cranial discomfort.",
    understanding: {
      overview:
        "A headache is pain or discomfort in any region of the head, varying from a dull tension band across the forehead to throbbing pressure at the back of the neck or skull (occipital region). In everyday terms, while everyday headaches are most commonly caused by muscle tension, eye strain, poor sleep, or dehydration, significant spikes in blood pressure can affect cranial blood vessel resistance. When blood pressure rises sharply, the pressure on cerebral micro-vessels can produce a characteristic morning throbbing sensation.",
      feelings: [
        "A dull, throbbing pressure felt primarily at the back of the head or neck upon waking up in the morning",
        "A tight band-like sensation squeezing across the forehead and temples during stressful periods",
        "A feeling of fullness or pulsing in the temples that corresponds with your heartbeat",
        "Head discomfort accompanied by mild visual fuzziness or fatigue",
      ],
      development:
        "Hypertension-related headaches often appear in the morning and gradually ease after sitting upright and moving around, whereas tension headaches typically build toward the end of a long workday.",
      meaning:
        "Checking your blood pressure when a headache occurs helps determine whether the headache is vascular, tension-related, or a sign of elevated pressure.",
    },
    causes: {
      reassuranceNote:
        "The vast majority of headaches are not dangerous and are related to tension, migraines, neck stiffness, or dehydration rather than severe high blood pressure. Checking your blood pressure provides reassuring answers.",
      commonCauses: [
        {
          title: "Tension-Type Headache & Neck Strain",
          desc: "Tightness in scalp, neck, and shoulder muscles caused by screen time, poor posture, or stress.",
        },
        {
          title: "Migraines & Neurovascular Changes",
          desc: "Episodic throbbing headaches, often one-sided, triggered by hormonal shifts, foods, or light sensitivity.",
        },
        {
          title: "Dehydration, Caffeine Withdrawal & Sinus Congestion",
          desc: "Everyday metabolic triggers affecting cerebral hydration and sinus cavity pressure.",
        },
      ],
      cardiovascularCauses: [
        {
          title: "Acute Blood Pressure Spikes (Hypertensive Headache)",
          desc: "Significantly elevated blood pressure (often >160–180 mmHg systolic) creating increased cranial vascular resistance.",
        },
        {
          title: "Sleep Apnea-Induced Morning Headaches",
          desc: "Nighttime oxygen drops and carbon dioxide retention causing cerebral vessel dilation upon waking.",
        },
        {
          title: "Carotid or Vertebral Artery Vascular Tone",
          desc: "Changes in cranial arterial blood flow velocity or rare vascular dissections.",
        },
      ],
    },
    findingTheCause: {
      intro:
        "Evaluation focuses on linking headache episodes with objective blood pressure measurements and ruling out neurovascular strain.",
      tests: [
        {
          name: "24-Hour Ambulatory Blood Pressure Monitor (ABPM)",
          desc: "Tracks blood pressure patterns around the clock to detect morning blood pressure surges coinciding with headaches.",
          icon: "Activity",
        },
        {
          name: "Carotid & Cranial Doppler Ultrasound",
          desc: "Examines blood flow velocity in the main neck arteries delivering blood to the brain.",
          icon: "HeartPulse",
        },
        {
          name: "12-Lead Electrocardiogram (ECG)",
          desc: "Screens for underlying cardiac remodeling or chronic hypertensive changes.",
          icon: "ShieldCheck",
        },
        {
          name: "Complete Blood Count & Metabolic Panel",
          desc: "Checks for anemia, electrolyte imbalances, kidney function, and inflammatory markers.",
          icon: "TestTube",
        },
      ],
    },
    urgentCare: {
      emergencyIntro:
        "Seek emergency medical evaluation (call 911 / 999 or go to the nearest emergency department) if a headache occurs with any of these critical warning signs:",
      warningSigns: [
        "A sudden, severe headache that peaks within seconds like a 'thunderclap' (the worst headache of your life)",
        "A headache accompanied by high blood pressure (>180/120 mmHg), chest pain, or shortness of breath",
        "A headache with sudden numbness, weakness on one side of the body, facial drooping, or speech difficulty",
        "A headache accompanied by a high fever, stiff neck, confusion, or a seizure",
      ],
      routineAssessment: [
        "A mild tension headache after a stressful workday that eases with rest and hydration",
        "Occasional morning headaches that improve once you get out of bed and drink water",
        "A dull ache with normal home blood pressure readings (<125/80 mmHg)",
      ],
    },
    whatCanHelp: {
      practicalGuidance: [
        "Check your blood pressure when you experience a headache and note the numbers in a diary.",
        "Drink a large glass of water and rest in a quiet, dimly lit room with good neck support.",
        "Maintain regular meal, hydration, and sleep schedules to minimize headache triggers.",
        "Avoid overusing over-the-counter painkillers (like NSAIDs), which can raise blood pressure over time.",
      ],
      whatToMonitor: [
        "Whether headaches occur specifically upon waking in the morning",
        "Your blood pressure readings during a headache versus when you are pain-free",
        "Any associated symptoms like neck stiffness, visual flashes, or nausea",
      ],
      whenToArrangeAssessment:
        "Schedule a clinical consultation if headaches occur frequently alongside elevated blood pressure readings, if over-the-counter measures fail, or to rule out sleep apnea.",
    },
    faqs: [
      {
        question: "Can high blood pressure actually cause headaches?",
        answer:
          "Mild to moderate high blood pressure typically does not cause headaches. However, sudden or severe blood pressure spikes (especially systolic above 160–180 mmHg) can cause throbbing headaches, especially at the back of the head in the morning.",
      },
      {
        question: "What should I do if I have a headache and my blood pressure reading is high?",
        answer:
          "Sit down, rest quietly for 10 minutes, and take your blood pressure again. If the reading remains very high (>180/120 mmHg) or is accompanied by chest pain, visual changes, or shortness of breath, seek emergency care immediately.",
      },
      {
        question: "Can pain itself cause blood pressure to go up?",
        answer:
          "Yes. Pain from a regular migraine, tension headache, or neck spasm causes your body to release stress hormones (like adrenaline), which naturally raises your blood pressure temporarily until the pain is relieved.",
      },
    ],
  },

  "dizziness": {
    slug: "dizziness",
    name: "Dizziness",
    category: "Hypertension",
    categoryKey: "hypertension",
    heroDesc:
      "Lightheadedness or unsteadiness related to blood pressure regulation and vascular tone. Comprehensive cardiovascular assessment ensures stable cerebral perfusion.",
    understanding: {
      overview:
        "Dizziness associated with blood pressure often feels like lightheadedness, wooziness, or a momentary feeling of unsteadiness when changing positions. In plain language, your body relies on sensitive pressure sensors (baroreceptors) in your neck and heart to fine-tune blood pressure from second to second. If blood pressure fluctuates too rapidly—either spiking or dropping too low from medications—the brain experiences brief changes in blood flow, creating a fleeting sensation of lightheadedness.",
      feelings: [
        "Feeling lightheaded or faint when standing up from a chair or bed (postural dizziness)",
        "A floaty, woozy sensation when walking through busy environments or under bright lights",
        "Brief dizziness that occurs an hour or two after taking blood pressure medications",
        "Unsteadiness paired with a feeling of warmth or mild nausea",
      ],
      development:
        "It can occur after starting a new blood pressure prescription, increasing a dosage, after prolonged bed rest, or in warm weather when blood vessels naturally dilate.",
      meaning:
        "Dizziness is a sign that blood pressure regulation needs fine-tuning. Adjusting hydration, posture habits, or medication doses usually restores stability.",
    },
    causes: {
      reassuranceNote:
        "Occasional lightheadedness upon standing quickly is very common and usually easy to fix. In many cases, it simply means your blood pressure medication is working a little too well and needs a minor adjustment.",
      commonCauses: [
        {
          title: "Orthostatic Hypotension (Postural Drop)",
          desc: "A temporary drop in blood pressure when moving from sitting or lying to standing.",
        },
        {
          title: "Blood Pressure Medication Peak Effect",
          desc: "Prescriptions lowering blood pressure slightly too much 1–3 hours after ingestion.",
        },
        {
          title: "Dehydration & Warm Weather Vasodilation",
          desc: "Reduced circulating fluid volume causing lower venous return to the heart and brain.",
        },
      ],
      cardiovascularCauses: [
        {
          title: "Labile Hypertension (Wide Pressure Swings)",
          desc: "Blood pressure fluctuating rapidly between very high and lower readings throughout the day.",
        },
        {
          title: "Autonomic Nervous System Dysregulation",
          desc: "Sluggish baroreceptor reflexes failing to quickly tighten blood vessels upon standing.",
        },
        {
          title: "Carotid Artery Atherosclerosis",
          desc: "Narrowing in the main neck arteries reducing reserve blood flow during pressure shifts.",
        },
      ],
    },
    findingTheCause: {
      intro:
        "Cardiovascular testing evaluates how your blood pressure and heart rate respond to positional changes and daily activities.",
      tests: [
        {
          name: "Orthostatic (Lying & Standing) Blood Pressure Check",
          desc: "Measures blood pressure and pulse lying down, after 1 minute standing, and after 3 minutes standing.",
          icon: "TrendingUp",
        },
        {
          name: "24-Hour Ambulatory Blood Pressure Monitor (ABPM)",
          desc: "Records blood pressure every 20 minutes to pinpoint exact times when pressure dips or surges.",
          icon: "Activity",
        },
        {
          name: "12-Lead ECG & Holter Monitor",
          desc: "Rules out intermittent slow heart rates (bradycardia) or rhythm pauses coinciding with dizzy spells.",
          icon: "HeartPulse",
        },
        {
          name: "Electrolyte & Kidney Blood Panel",
          desc: "Checks potassium, sodium, and renal filtration to optimize fluid and medication balance.",
          icon: "TestTube",
        },
      ],
    },
    urgentCare: {
      emergencyIntro:
        "Seek emergency medical evaluation (call 911 / 999 or visit the nearest emergency department) if dizziness is accompanied by:",
      warningSigns: [
        "Dizziness that leads to a complete loss of consciousness or fainting (syncope)",
        "Dizziness paired with sudden chest pain, crushing pressure, or difficulty breathing",
        "Dizziness accompanied by sudden weakness in an arm or leg, facial droop, or slurred speech (stroke warning)",
        "Severe dizziness with an irregularly rapid racing heart (>140 bpm) or severe visual loss",
      ],
      routineAssessment: [
        "Mild lightheadedness lasting 5–10 seconds right after standing up from a low chair",
        "A brief woozy feeling when getting out of a hot bath or shower",
        "Occasional unsteadiness after missing a meal or during warm summer afternoons",
      ],
    },
    whatCanHelp: {
      practicalGuidance: [
        "Pause before standing: sit on the edge of the bed for 30 seconds before rising to full standing height.",
        "Drink a glass of water before getting out of bed in the morning to support blood volume.",
        "Do not stop or change your blood pressure medications without speaking with your doctor first.",
        "Perform simple leg crossing and calf contraction exercises before standing up to pump blood upward.",
      ],
      whatToMonitor: [
        "Your blood pressure readings when you feel dizzy compared to when you feel normal",
        "What time you take your medications and what time dizzy spells occur",
        "How much fluid and water you drink each day",
      ],
      whenToArrangeAssessment:
        "Schedule a cardiology appointment if dizziness happens frequently, if you feel near-faint, or if you suspect your blood pressure medications need adjusting.",
    },
    faqs: [
      {
        question: "Why do I feel dizzy an hour after taking my blood pressure pill?",
        answer:
          "Many blood pressure medications reach their peak concentration in the bloodstream 1 to 2 hours after ingestion. If your blood pressure drops too quickly during this peak, you may feel lightheaded. Your doctor can easily adjust the dose or timing.",
      },
      {
        question: "Can high blood pressure and low blood pressure both cause dizziness?",
        answer:
          "Yes. High blood pressure can cause dizziness through vascular resistance changes, while low blood pressure (or sudden drops upon standing) directly reduces cerebral blood flow, causing lightheadedness.",
      },
      {
        question: "What is orthostatic hypotension and how is it diagnosed?",
        answer:
          "Orthostatic hypotension is diagnosed when your systolic blood pressure drops by 20 mmHg or diastolic by 10 mmHg within 3 minutes of standing. It is easily confirmed in the clinic by taking your blood pressure lying down and then standing.",
      },
    ],
  },
};

// Aliases for seamless routing and legacy link compatibility
symptomsData["leg-pain"] = symptomsData["leg-pain-when-walking"];
symptomsData["lower-limb-swelling"] = symptomsData["leg-swelling"];
symptomsData["cramping-while-walking"] = symptomsData["leg-pain-when-walking"];
symptomsData["cold-feet-numbness"] = symptomsData["cold-or-discolored-feet"];
symptomsData["skin-discoloration"] = symptomsData["cold-or-discolored-feet"];
symptomsData["chest-tightness"] = symptomsData["chest-pain"];
symptomsData["visual-changes"] = symptomsData["high-blood-pressure"];
