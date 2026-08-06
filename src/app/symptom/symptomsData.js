export const symptomsData = {
  "chest-pain": {
    slug: "chest-pain",
    name: "Chest Pain",
    category: "Heart (Cardiac)",
    categoryBadge: "Cardiac Symptom Evaluation",
    heroDesc:
      "Chest pain, tightness, or pressure is a cardinal clinical symptom indicating localized myocardial ischemia, coronary artery narrowing, or structural cardiac strain. Immediate diagnostic stratification is imperative to differentiate benign causes from high-risk Acute Coronary Syndromes (ACS).",
    overview:
      "Angina pectoris typically manifests as a squeezing, constricting, or heavy pressure felt substernally across the anterior chest wall. The pain may radiate to the left shoulder, inner arm, neck, lower jaw, or epigastrium. It occurs when myocardial oxygen demand exceeds coronary blood supply, often precipitated by physical exertion, cold exposure, or emotional stress.",
    pathophysiology:
      "At the cellular level, coronary artery luminal stenosis exceeding 70% restricts blood flow velocity during elevated metabolic demand. Anaerobic cardiac metabolism produces adenosine and bradykinin, which stimulate sympathetic sensory nerve endings in the myocardium, transmitting visceral pain signals to the T1-T5 spinal cord segments.",
    characteristics: [
      "Substernal pressure, squeezing, or burning sensation",
      "Radiation to left arm, neck, jaw, or interscapular region",
      "Exertional onset lasting between 2 to 15 minutes",
      "Relief with rest or sublingual nitroglycerin within 3–5 minutes",
      "Associated diaphoresis, dyspnea, or nausea",
    ],
    causes: [
      "Coronary Artery Disease (CAD) & Obstructive Atherosclerosis",
      "Acute Myocardial Infarction (STEMI / NSTEMI)",
      "Severe Aortic Valve Stenosis or Regurgitation",
      "Acute Pericarditis & Myocarditis",
      "Coronary Vasospasm (Prinzmetal Angina) & Microvascular Dysfunction",
    ],
    associatedConditions: [
      {
        title: "Coronary Artery Disease (CAD)",
        desc: "Fixed atherosclerotic plaques in the epicardial coronary arteries restricting exercise-induced blood flow.",
      },
      {
        title: "Hypertrophic Cardiomyopathy",
        desc: "Thickened left ventricular myocardium increasing oxygen demand and outflow tract obstruction.",
      },
      {
        title: "Aortic Dissection",
        desc: "Life-threatening tearing of the aortic intimal layer presenting with sudden severe tearing chest pain.",
      },
    ],
    redFlags: [
      "Crushing chest pressure lasting continuously for >15 minutes",
      "Pain accompanied by profuse cold sweating, fainting, or acute shortness of breath",
      "Sudden tearing chest pain radiating straight through to the upper back",
      "Pain occurring at rest or escalating rapidly in frequency and intensity (Unstable Angina)",
    ],
    diagnosticReasoning:
      "According to ACC/AHA guidelines, patients presenting with stable or atypical chest pain require non-invasive functional or anatomical risk stratification to identify severe multi-vessel disease and prevent sudden cardiac arrest.",
    diagnostics: [
      {
        title: "12-Lead Resting ECG & Holter",
        desc: "Detects ST-segment depression/elevation, T-wave inversions, ischemic Q waves, and transient rhythm instability.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Treadmill Stress Echocardiogram",
        desc: "Evaluates left ventricular wall motion abnormalities under stress to locate specific ischemic coronary territories.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Coronary CT Angiography (CCTA)",
        desc: "Non-invasive 3D imaging visualizes epicardial lumen stenosis, calcified plaque, and non-calcified soft plaque burden.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "High-Sensitivity Biomarkers (Troponin / hs-CRP)",
        desc: "Ultra-sensitive assays quantify micro-myocardial cellular injury and vascular systemic inflammatory risk.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      },
    ],
    preventionTips: [
      "Maintain tight blood pressure control (<120/80 mmHg)",
      "Target LDL-C levels according to cardiovascular risk profile (<70 mg/dL for high risk)",
      "Engage in 150 minutes of moderate aerobic physical activity weekly",
      "Adopt a Mediterranean cardio-protective dietary regimen",
    ],
    faqs: [
      {
        q: "What is the difference between stable angina and a heart attack?",
        a: "Stable angina occurs predictably during exertion and subsides with rest or nitroglycerin. A heart attack involves prolonged ischemia causing permanent heart muscle damage, occurring even at rest.",
      },
      {
        q: "Can chest pain be non-cardiac?",
        a: "Yes. Gastroesophageal reflux (GERD), musculoskeletal costochondritis, and anxiety can mimic angina. However, cardiac causes must always be ruled out first through objective testing.",
      },
      {
        q: "Why is Coronary CT Angiography recommended for chest pain?",
        a: "CCTA provides definitive anatomical visualization of coronary blockages without invasive catheterization, allowing early lifestyle and medical optimization.",
      },
    ],
    ctaMessage:
      "Do not ignore chest pain. Schedule your comprehensive cardiac diagnostic testing with Dr. Almahmoud today.",
  },

  "shortness-of-breath": {
    slug: "shortness-of-breath",
    name: "Shortness of Breath",
    category: "Heart & Hypertension",
    categoryBadge: "Cardiorespiratory Evaluation",
    heroDesc:
      "Shortness of breath (dyspnea) during routine activity or while lying flat reflects elevated left atrial filling pressures, pulmonary venous congestion, or reduced stroke volume.",
    overview:
      "Dyspnea manifests as a distressing awareness of breathing effort. In cardiac pathology, impaired left ventricular contraction or relaxation causes blood to back up into the pulmonary vasculature, resulting in interstitial fluid extravasation and decreased lung compliance.",
    pathophysiology:
      "Elevated left ventricular end-diastolic pressure (LVEDP) increases pulmonary capillary wedge pressure (PCWP). When PCWP exceeds 18–20 mmHg, transudative fluid leaks into pulmonary alveoli, impairing gas exchange and stimulating pulmonary J-receptors.",
    characteristics: [
      "Exertional dyspnea occurring at lower workloads over time",
      "Orthopnea requiring elevation on multiple pillows to sleep",
      "Paroxysmal Nocturnal Dyspnea (waking up gasping 1-2 hours after falling asleep)",
      "Unexplained dry cough when lying down flat",
      "Peripheral edema in ankles and lower legs",
    ],
    causes: [
      "Heart Failure with Reduced Ejection Fraction (HFrEF)",
      "Heart Failure with Preserved Ejection Fraction (HFpEF)",
      "Severe Mitral or Aortic Valve Stenosis/Regurgitation",
      "Uncontrolled Hypertensive Heart Disease",
      "Pulmonary Arterial Hypertension & Venous Thromboembolism",
    ],
    associatedConditions: [
      {
        title: "Congestive Heart Failure",
        desc: "Inability of the heart to pump adequate oxygenated blood or relax normally, elevating pulmonary filling pressures.",
      },
      {
        title: "Valvular Failure",
        desc: "Mitral valve regurgitation leaking blood backward into the left atrium during ventricular systole.",
      },
      {
        title: "Hypertensive Crisis",
        desc: "Acute blood pressure spikes elevating afterload and forcing fluid into pulmonary air sacs.",
      },
    ],
    redFlags: [
      "Sudden severe breathlessness woke you from sleep gasping for air",
      "Inability to speak complete sentences without pausing for breath",
      "Associated chest pressure, cold sweating, or bluish lips/fingertips",
      "Rapid fluid accumulation with >3 lbs weight gain in 24-48 hours",
    ],
    diagnosticReasoning:
      "Establishing ejection fraction, diastolic relaxation parameters, and cardiac biomarkers allows Dr. Almahmoud to tailor modern medical therapy (GUIDELINE-DIRECTED MEDICAL THERAPY - GDMT).",
    diagnostics: [
      {
        title: "Transthoracic Echocardiogram (TTE)",
        desc: "Measures Left Ventricular Ejection Fraction (LVEF), wall thickness, E/e' diastolic pressures, and valve gradients.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "NT-proBNP Biomarker Assay",
        desc: "Measures ventricular wall stretch and distinguishes cardiac heart failure from pulmonary primary lung causes.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "12-Lead ECG & Chest X-Ray",
        desc: "Evaluates conduction delays (LBBB), atrial enlargement, pulmonary vascular congestion, and pleural effusions.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Cardiac PET / CMR Tissue Characterization",
        desc: "Evaluates myocardial scar tissue, ischemic viability, amyloidosis, and myocarditis infiltrative diseases.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      },
    ],
    preventionTips: [
      "Restrict daily sodium intake to <2,000 mg/day",
      "Monitor daily morning weight after voiding and report >3 lb increases",
      "Adhere strictly to prescribed heart failure medications (SGLT2i, ARNI, Beta-blockers, MRAs)",
      "Engage in supervised cardiac rehabilitation exercise programs",
    ],
    faqs: [
      {
        q: "Why do I get short of breath when lying flat?",
        a: "Lying flat causes venous blood from your legs to return to your heart and chest, increasing pulmonary capillary pressure when heart relaxation is impaired.",
      },
      {
        q: "How does Echocardiography help evaluate dyspnea?",
        a: "Echocardiography visualizes your heart valves in motion and calculates exact ejection fraction and filling pressures non-invasively.",
      },
      {
        q: "What is NT-proBNP?",
        a: "NT-proBNP is a protein released by heart muscle cells when strained by fluid overload, serving as a key biomarker for heart failure.",
      },
    ],
    ctaMessage:
      "Breathe easier with an accurate diagnosis. Schedule your cardiopulmonary testing with Dr. Almahmoud.",
  },

  "palpitations": {
    slug: "palpitations",
    name: "Palpitations",
    category: "Heart (Cardiac)",
    categoryBadge: "Electrophysiology Workup",
    heroDesc:
      "Heart palpitations encompass sensations of skipped beats, fluttering, thumping, or rapid racing. Precise ambulatory rhythm mapping isolates electrical conduction anomalies before severe thromboembolic risks occur.",
    overview:
      "Palpitations are experienced when cardiac electrical impulse generation or conduction becomes ectopic or re-entrant. While isolated premature beats (PVCs/PACs) are common, paroxysmal arrhythmias such as Atrial Fibrillation (AFib) drastically increase ischemic stroke risk if undiagnosed.",
    pathophysiology:
      "Ectopic foci in pulmonary veins or cardiac ventricles initiate premature depolarizations. Re-entry circuits in the AV node or accessory pathways cause sustained tachyarrhythmias (>150 bpm), shortening diastolic filling time and compromising cardiac output.",
    characteristics: [
      "Flip-flopping, thumping, or pounding sensation in chest or throat",
      "Sudden onset racing heartbeat lasting seconds to hours",
      "Irregular irregular pulse cadence indicative of Atrial Fibrillation",
      "Exertional or adrenaline-triggered rhythm spikes",
      "Post-palpitation lightheadedness or fatigue",
    ],
    causes: [
      "Atrial Fibrillation (AFib) & Atrial Flutter",
      "Premature Ventricular Contractions (PVCs) & PACs",
      "Supraventricular Tachycardia (AVNRT / AVRT / WOLFF-PARKINSON-WHITE)",
      "Ventricular Tachycardia (VT) & Channelopathies",
      "Valvular Heart Disease (Mitral Valve Prolapse)",
    ],
    associatedConditions: [
      {
        title: "Atrial Fibrillation",
        desc: "Chaotic atrial electrical activity causing ineffective atrial contraction and stagnant blood predisposing to embolic stroke.",
      },
      {
        title: "Ventricular Arrhythmias",
        desc: "Potential life-threatening rapid rhythms originating in the lower ventricles, requiring ICD or antiarrhythmic evaluation.",
      },
      {
        title: "Valvular Disease",
        desc: "Mitral or tricuspid valve insufficiency causing atrial enlargement and electrical stretching.",
      },
    ],
    redFlags: [
      "Palpitations accompanied by syncope (loss of consciousness) or blackouts",
      "Rapid racing pulse (>150 bpm) with chest pain or severe dizziness",
      "Family history of unexplainable sudden cardiac death at a young age",
      "Palpitations occurring during intense exercise or exertion",
    ],
    diagnosticReasoning:
      "Ambulatory continuous rhythm logging is mandatory to correlate patient-reported symptoms with true electrophysiological tracings.",
    diagnostics: [
      {
        title: "24–48 Hr Holter Monitor",
        desc: "Continuous 2-channel ECG logging records ectopic beat burden, sinus pauses, and paroxysmal AFib episodes.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "14-Day Extended Patch Monitor",
        desc: "Waterproof continuous adhesive monitor captures infrequent, paroxysmal arrhythmias missed during short recordings.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Transthoracic Echocardiography",
        desc: "Evaluates left atrial volume index, ejection fraction, valve motion, and structural cardiomyopathy features.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Treadmill Exercise Stress Test",
        desc: "Evaluates catecholamine-induced arrhythmias, ischemic triggers, and post-exercise recovery heart rate dynamics.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      },
    ],
    preventionTips: [
      "Limit excessive caffeine, alcohol, and OTC stimulant decongestants",
      "Ensure adequate serum electrolyte balance (Magnesium & Potassium)",
      "Manage emotional stress through mindfulness and adequate sleep",
      "Treat underlying thyroid dysfunction or sleep apnea",
    ],
    faqs: [
      {
        q: "Are all heart palpitations dangerous?",
        a: "No. Many palpitations are harmless extra beats. However, objective continuous monitoring is required to rule out stroke-causing arrhythmias like Atrial Fibrillation.",
      },
      {
        q: "What should I do during a sudden episode of palpitations?",
        a: "Sit down, remain calm, take slow deep breaths, and record the pulse rate or time. Seek emergency care if accompanied by chest pain or fainting.",
      },
      {
        q: "How does a 14-day patch monitor work?",
        a: "A small, lightweight patch is applied to your chest. It continuously records every single heartbeat for 2 weeks while you go about normal daily activities.",
      },
    ],
    ctaMessage:
      "Capture and clarify your heart rhythm. Request diagnostic Holter monitoring with Dr. Almahmoud today.",
  },

  "dizziness": {
    slug: "dizziness",
    name: "Dizziness",
    category: "Heart & Hypertension",
    categoryBadge: "Hemodynamic Evaluation",
    heroDesc:
      "Dizziness, unsteadiness, or near-fainting (presyncope) reflects transient cerebral hypoperfusion driven by cardiac block, severe blood pressure drops, or carotid artery obstruction.",
    overview:
      "Cardiovascular dizziness occurs when cerebral blood flow falls below the critical threshold required for normal brain function. Etiologies range from sinus node pause and advanced heart block to carotid plaque narrowing or hypertensive blood pressure lability.",
    pathophysiology:
      "Mean arterial pressure (MAP) determines cerebral perfusion pressure. Transient sinus arrest (>3 seconds) or high-grade AV block drops cardiac output instantaneously, reducing cerebral oxygenation and stimulating vasomotor presyncopal prodromes.",
    characteristics: [
      "Lightheadedness upon standing rapidly from a sitting or lying position",
      "Translucent grey-out or dimming of vision prior to unsteadiness",
      "Episodic dizziness synchronized with racing pulse or slow heart rate",
      "Positional unsteadiness accompanied by neck stiffness or carotid bruits",
      "Presyncopal warm flush or diaphoresis",
    ],
    causes: [
      "Sick Sinus Syndrome & High-Grade AV Block (Bradycardia)",
      "Orthostatic Hypotension & Autonomic Failure",
      "Carotid Artery Stenosis & Vertebrobasilar Insufficiency",
      "Critical Aortic Valve Stenosis (Outflow obstruction)",
      "Hypertensive Blood Pressure Lability & Over-Medication",
    ],
    associatedConditions: [
      {
        title: "Heart Block & Bradycardia",
        desc: "Slow ventricular rates (<40 bpm) failing to maintain adequate cerebral arterial perfusion pressures.",
      },
      {
        title: "Carotid Artery Stenosis",
        desc: "Atherosclerotic narrowing of primary brain-supplying arteries compromising cerebrovascular flow reserve.",
      },
      {
        title: "Aortic Stenosis",
        desc: "Rigid aortic valve leaflets restricting exertional cardiac output increase.",
      },
    ],
    redFlags: [
      "Loss of consciousness (Syncope) or sudden fall with injury",
      "Dizziness accompanied by neurological deficits (facial droop, arm weakness, speech slurring)",
      "Dizziness occurring while exercising or performing physical exertion",
      "Dizziness accompanied by acute crushing chest pain",
    ],
    diagnosticReasoning:
      "A comprehensive dual cardiac and vascular evaluation pinpoints whether dizziness stems from heart rhythm slowdowns, BP drops, or carotid artery narrowing.",
    diagnostics: [
      {
        title: "24-Hour Ambulatory BP & Holter",
        desc: "Correlates dizziness episodes with simultaneous continuous ECG rhythm and ambulatory blood pressure measurements.",
        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Echocardiography",
        desc: "Rules out severe valvular aortic stenosis, hypertrophic obstructive cardiomyopathy, and intracardiac shunts.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Carotid Duplex Ultrasound",
        desc: "Visualizes carotid plaque buildup, peak systolic flow velocities, and stenosis percentage supplying the brain.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "12-Lead ECG & Orthostatic Hemodynamics",
        desc: "Assesses QT interval prolongation, bundle branch blocks, and postural blood pressure dipping responses.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      },
    ],
    preventionTips: [
      "Stay hydrated with adequate daily water intake",
      "Stand up gradually from seated or supine positions",
      "Avoid prolonged standing in high-temperature environments",
      "Review blood pressure medications regularly with your cardiologist",
    ],
    faqs: [
      {
        q: "What is the difference between dizziness and vertigo?",
        a: "Vertigo involves a spinning sensation often linked to inner ear issues. Cardiac dizziness presents as lightheadedness, faintness, or grey-out linked to blood flow.",
      },
      {
        q: "Why are Carotid Ultrasounds performed for dizziness?",
        a: "Carotid ultrasounds check if plaque blockages in neck arteries are restricting oxygenated blood flow to your brain.",
      },
      {
        q: "Can high blood pressure cause dizziness?",
        a: "Yes. Both severe blood pressure spikes and sudden drops from medication over-dosing can trigger lightheadedness.",
      },
    ],
    ctaMessage:
      "Find the cause of your dizziness before a fall or syncope occurs. Schedule your diagnostic workup today.",
  },

  "fatigue": {
    slug: "fatigue",
    name: "Fatigue",
    category: "Heart (Cardiac)",
    categoryBadge: "Cardiac Stamina Assessment",
    heroDesc:
      "Unexplained chronic fatigue or declining exercise capacity is frequently an early clinical manifestation of reduced cardiac output, silent myocardial ischemia, or heart failure.",
    overview:
      "Cardiac fatigue occurs when failing heart pump function fails to deliver oxygenated blood at rates matching systemic peripheral metabolic requirements. Patients often misattribute cardiac fatigue to normal aging, stress, or deconditioning.",
    pathophysiology:
      "Impaired left ventricular contractile reserve or elevated diastolic filling pressures lead to skeletal muscle hypoperfusion during activity. Peripheral tissue metabolic acidosis activates muscle ergoreceptors, causing overwhelming systemic exhaustion.",
    characteristics: [
      "Profound leg muscle heaviness during mild walking",
      "Inability to complete routine daily household chores without rest",
      "Worsening stamina over weeks to months",
      "Fatigue associated with ankle swelling or shortness of breath",
      "Feeling unrefreshed despite adequate night sleep",
    ],
    causes: [
      "Congestive Heart Failure (HFrEF & HFpEF)",
      "Ischemic Cardiomyopathy & CAD",
      "Severe Valvular Insufficiency (Mitral / Aortic Regurgitation)",
      "Uncontrolled Hypertensive Heart Disease",
      "Bradycardia & Chronotropic Incompetence",
    ],
    associatedConditions: [
      {
        title: "Heart Failure",
        desc: "Reduced forward stroke volume triggering systemic vasoconstriction and muscular fatigue.",
      },
      {
        title: "Valvular Disease",
        desc: "Backflow across mitral or aortic valves causing volume overload and low forward cardiac output.",
      },
      {
        title: "Ischemic CAD",
        desc: "Silent myocardial ischemia decreasing cardiac pumping efficiency during exercise.",
      },
    ],
    redFlags: [
      "Inability to walk 50 feet without severe physical exhaustion",
      "Fatigue accompanied by swelling in legs, ankles, or abdomen",
      "Associated exertional chest discomfort or shortness of breath",
      "Progressive decline in functional capacity over a short time frame",
    ],
    diagnosticReasoning:
      "Uncovering cardiac fatigue requires quantifying ejection fraction, valve regurgitation volumes, and biomarker indicators of heart muscle stress.",
    diagnostics: [
      {
        title: "Echocardiogram (LVEF Assessment)",
        desc: "Calculates left ventricular ejection fraction, stroke volume index, and measures valvular regurgitation severity.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "NT-proBNP & Cardiac Biomarker Panel",
        desc: "Measures ventricular wall stress and screens for underlying heart strain and inflammatory markers.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Treadmill Exercise Stress Test",
        desc: "Assesses functional MET capacity, exertional blood pressure response, and chronotropic heart rate acceleration.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "12-Lead ECG",
        desc: "Detects ischemic changes, prior silent myocardial infarcts, and cardiac conduction delays.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      },
    ],
    preventionTips: [
      "Maintain regular light-to-moderate aerobic exercise daily",
      "Optimize heart failure medical therapy under expert guidance",
      "Eat a nutritious, low-sodium, nutrient-dense diet",
      "Monitor blood pressure and pulse rates routinely",
    ],
    faqs: [
      {
        q: "How do I know if my fatigue is coming from my heart?",
        a: "Cardiac fatigue is often accompanied by shortness of breath, leg swelling, or decreased exercise tolerance that worsens over time.",
      },
      {
        q: "Can an Echocardiogram explain my low energy?",
        a: "Yes. An echocardiogram measures how much blood your heart pumps out with each beat (Ejection Fraction) and checks for leaky valves.",
      },
      {
        q: "What is chronotropic incompetence?",
        a: "It is the inability of your heart rate to increase properly during physical exertion, leading to exercise fatigue.",
      },
    ],
    ctaMessage:
      "Reclaim your energy and protect your heart. Book your comprehensive cardiac evaluation with Dr. Almahmoud.",
  },

  "leg-pain": {
    slug: "leg-pain",
    name: "Leg Pain",
    category: "Blood Vessels (Vascular)",
    categoryBadge: "Vascular Circulation Evaluation",
    heroDesc:
      "Vascular leg pain, aching, heaviness, or throbbing signals compromised arterial lower limb perfusion (PAD) or venous valve failure (Venous Insufficiency / DVT).",
    overview:
      "Vascular leg pain differs by etiology: arterial pain typically worsens during walking (claudication) due to oxygen deprivation, while venous leg pain produces dull aching and heaviness that worsens after prolonged standing.",
    pathophysiology:
      "Atherosclerotic stenosis of the iliac, femoral, or popliteal arteries reduces distal blood perfusion. During ambulation, metabolic ischemia triggers painful muscle lactic acidosis. Conversely, venous valve incompetence causes hydrostatic hypertension, stretching venous walls.",
    characteristics: [
      "Cramping or tightness in calves, thighs, or buttocks triggered by walking",
      "Dull aching, heaviness, or throbbing in lower legs after standing",
      "Rest pain in toes or foot aggravated by elevating legs",
      "Relief of walking pain within 5–10 minutes of standing still",
      "Associated ankle swelling, varicose veins, or skin discoloration",
    ],
    causes: [
      "Peripheral Artery Disease (PAD) & Arterial Stenosis",
      "Chronic Venous Insufficiency & Varicose Veins",
      "Deep Vein Thrombosis (DVT) & Blood Clots",
      "Iliac Vein Compression (May-Thurner Syndrome)",
      "Diabetic Peripheral Vascular Neuropathy",
    ],
    associatedConditions: [
      {
        title: "Peripheral Artery Disease (PAD)",
        desc: "Arterial plaque narrowing decreasing blood flow to leg muscles during exercise.",
      },
      {
        title: "Venous Insufficiency",
        desc: "Failing leg vein valves causing blood pooling, pressure buildup, and leg heaviness.",
      },
      {
        title: "Deep Vein Thrombosis (DVT)",
        desc: "Acute blood clot blocking deep venous return requiring immediate medical anticoagulant therapy.",
      },
    ],
    redFlags: [
      "Sudden coldness, severe pain, and paleness in one leg (Acute Limb Ischemia)",
      "Sudden swelling in one calf or leg accompanied by tenderness and warmth",
      "Non-healing leg ulcers or black sores near ankles or toes",
      "Severe leg pain occurring at rest while lying flat in bed",
    ],
    diagnosticReasoning:
      "Non-invasive vascular lab testing rapidly distinguishes between arterial blockages and venous blood flow reversal to guide targeted therapy.",
    diagnostics: [
      {
        title: "Ankle-Brachial Index (ABI)",
        desc: "Non-invasive Doppler blood pressure test comparing arm and ankle pressures (<0.90 confirms PAD).",
        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Arterial Duplex Ultrasound",
        desc: "Visualizes arterial plaque, vessel narrowing, and measures peak blood flow velocities.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Venous Compression Ultrasound",
        desc: "Evaluates vein valve reflux and screens for Deep Vein Thrombosis (DVT).",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "CT / MR Angiography (CTA/MRA)",
        desc: "Produces 3D anatomical roadmaps of limb arteries and veins before stenting or ablation.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      },
    ],
    preventionTips: [
      "Engage in structured leg walking exercise programs",
      "Avoid long periods of uninterrupted sitting or standing",
      "Wear medical-grade gradient compression stockings if advised",
      "Stop all tobacco use to prevent arterial plaque progression",
    ],
    faqs: [
      {
        q: "How do I know if my leg pain is arterial or venous?",
        a: "Arterial leg pain typically cramps when walking and improves with rest. Venous leg pain aches and feels heavy after standing and improves when elevating your legs.",
      },
      {
        q: "What is an Ankle-Brachial Index (ABI) test?",
        a: "An ABI test compares blood pressure in your ankle to blood pressure in your arm using Doppler ultrasound cuffs. It is pain-free and highly accurate.",
      },
      {
        q: "Can leg pain lead to dangerous complications?",
        a: "Yes. Untreated arterial blockages can lead to non-healing wounds, while deep vein clots can travel to the lungs (Pulmonary Embolism).",
      },
    ],
    ctaMessage:
      "Protect your leg health and mobility. Schedule your non-invasive vascular lab testing today.",
  },

  "lower-limb-swelling": {
    slug: "lower-limb-swelling",
    name: "Lower Limb Swelling",
    category: "Blood Vessels (Vascular)",
    categoryBadge: "Venous & Lymphatic Workup",
    heroDesc:
      "Lower limb swelling (edema) in ankles, calves, or thighs reflects elevated venous pressure, damaged venous valves, deep vein blood clots (DVT), or congestive heart failure.",
    overview:
      "Fluid accumulation in lower limbs occurs when blood pools in the veins due to leaky venous valves (venous insufficiency), when a clot blocks venous return (DVT), or when elevated cardiac pressures push fluid into peripheral tissues.",
    pathophysiology:
      "Increased capillary hydrostatic pressure or deep venous outflow obstruction forces intravascular fluid into interstitial lower limb space. Over time, chronic edema damages skin tissue, causing hyperpigmentation and stasis dermatitis.",
    characteristics: [
      "Ankle and leg swelling that worsens towards the end of the day",
      "Pitting edema (leaving a thumb imprint when pressed firmly)",
      "Tightness or shiny appearance of calf and ankle skin",
      "Heaviness or ache in legs relieved by elevating feet above heart level",
      "Indented sock bands or shoe tightness",
    ],
    causes: [
      "Chronic Venous Insufficiency (Venous Reflux)",
      "Deep Vein Thrombosis (DVT)",
      "Congestive Heart Failure (Right & Left Ventricular Strain)",
      "May-Thurner Syndrome (Iliac Vein Compression)",
      "Side Effects of Calcium Channel Blocker BP Medications",
    ],
    associatedConditions: [
      {
        title: "Venous Insufficiency",
        desc: "Damaged vein valves letting gravity pull blood backward into the lower legs.",
      },
      {
        title: "Deep Vein Thrombosis",
        desc: "Acute blood clot obstructing major deep venous channels requiring prompt anticoagulant therapy.",
      },
      {
        title: "Right Heart Failure",
        desc: "Elevated right atrial filling pressures backing up venous flow into systemic veins.",
      },
    ],
    redFlags: [
      "Sudden swelling in only ONE leg accompanied by calf pain or redness",
      "Leg swelling accompanied by sudden chest pain or shortness of breath",
      "Skin discoloration, weeping fluid, or non-healing leg wounds",
      "Rapid swelling extending above the knee into thigh or groin",
    ],
    diagnosticReasoning:
      "Dr. Almahmoud utilizes high-resolution color duplex ultrasound and blood biomarkers to rapidly rule out dangerous clots and map incompetent vein segments.",
    diagnostics: [
      {
        title: "Lower Extremity Venous Duplex",
        desc: "Maps saphenous vein reflux and evaluates deep vein patency.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "High-Sensitivity D-Dimer Assay",
        desc: "Rapid blood biomarker test to rule out acute Deep Vein Thrombosis.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Echocardiogram (Right Ventricular Assessment)",
        desc: "Evaluates cardiac pump pressures and right atrial filling.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Pelvic CT / MR Venography",
        desc: "Screens for iliac vein stenosis, May-Thurner compression, or deep pelvic clots.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      },
    ],
    preventionTips: [
      "Elevate legs above heart level for 15-20 minutes several times daily",
      "Wear prescription gradient compression stockings daily",
      "Avoid prolonged stationary sitting or standing",
      "Reduce dietary sodium consumption",
    ],
    faqs: [
      {
        q: "Why is swelling worse in one leg than the other?",
        a: "Unilateral (one-sided) swelling is a primary sign of Deep Vein Thrombosis (DVT), localized venous insufficiency, or vein compression like May-Thurner syndrome.",
      },
      {
        q: "What is a Venous Duplex Ultrasound scan?",
        a: "A painless ultrasound scan that uses sound waves to check blood flow direction in your leg veins and search for blood clots.",
      },
      {
        q: "Can heart problems cause leg swelling?",
        a: "Yes. When the heart's pumping power decreases, blood backs up into the veins, pushing fluid into ankle and leg tissues.",
      },
    ],
    ctaMessage:
      "Relieve leg swelling and prevent clot complications. Schedule your venous duplex scan today.",
  },

  "cold-feet-numbness": {
    slug: "cold-feet-numbness",
    name: "Cold Feet / Numbness",
    category: "Blood Vessels (Vascular)",
    categoryBadge: "Arterial Perfusion Workup",
    heroDesc:
      "Persistent coldness, numbness, or tingling in the feet and toes indicates severely reduced arterial blood supply to the lower extremities.",
    overview:
      "When peripheral arteries are choked by atherosclerotic plaque, distal tissues in the feet and toes receive inadequate warm, oxygenated blood. If left untreated, severe ischemia can lead to non-healing ulcers or gangrene.",
    pathophysiology:
      "Atherosclerotic occlusive disease of infra-popliteal or tibial arteries impairs distal capillary flow. Deprived of oxygenated arterial blood, cutaneous thermoregulation fails, nerve fibers undergo ischemic injury, causing numbness and paresthesias.",
    characteristics: [
      "Foot or toes feel noticeably cold to the touch compared to upper limbs",
      "Numbness or pins-and-needles sensation in toes",
      "Pale or bluish color changes when legs are elevated",
      "Slow nail growth and loss of toe hair",
      "Rest pain in foot when lying flat",
    ],
    causes: [
      "Peripheral Artery Disease (PAD) & Arterial Occlusion",
      "Atherosclerotic Plaque Buildup in Femoral/Popliteal Arteries",
      "Diabetic Microvascular Occlusive Disease",
      "Raynaud's Phenomenon & Vasospastic Disorders",
      "Buerger's Disease (Thromboangiitis Obliterans)",
    ],
    associatedConditions: [
      {
        title: "Peripheral Artery Disease",
        desc: "Advanced plaque blockage restricting oxygenated blood from reaching feet and toes.",
      },
      {
        title: "Critical Limb Threatening Ischemia (CLTI)",
        desc: "Severe impairment of blood flow putting the foot at risk of tissue death or amputation.",
      },
      {
        title: "Diabetic Vascular Disease",
        desc: "Combined nerve damage and small vessel arterial narrowing common in long-standing diabetes.",
      },
    ],
    redFlags: [
      "Foot or toes turning dark purple or black (Gangrene)",
      "Sudden onset of severe numbness and foot weakness",
      "Severe pain in foot at rest relieved only by dangling leg over the bed",
      "Non-healing cuts, blisters, or ulcers on feet or toes",
    ],
    diagnosticReasoning:
      "Early non-invasive arterial mapping identifies blood flow deficits before permanent tissue loss occurs.",
    diagnostics: [
      {
        title: "Ankle-Brachial Index (ABI) & PPG",
        desc: "Measures arterial pressure ratios and digital pulse volume recordings.",
        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Segmental Arterial Pressures",
        desc: "Pinpoints the exact anatomical level of arterial blockage in thigh, calf, or foot.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Toe-Brachial Index (TBI)",
        desc: "Evaluates microvascular blood flow in calcified diabetic small vessels.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "CTA / MRA Peripheral Mapping",
        desc: "3D high-resolution arterial imaging prior to balloon angioplasty or stenting.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      },
    ],
    preventionTips: [
      "Inspect feet daily for cuts, blisters, or color changes",
      "Never walk barefoot; wear comfortable, protective footwear",
      "Keep feet warm with clean, dry wool socks",
      "Maintain tight blood glucose control if diabetic",
    ],
    faqs: [
      {
        q: "Can cold feet mean I have blocked arteries?",
        a: "Yes. When arteries in your legs become narrowed by plaque, warm blood cannot reach your feet, making them feel chronically cold.",
      },
      {
        q: "What is a Toe-Brachial Index (TBI) test?",
        a: "TBI measures blood pressure specifically in your big toe using miniature cuffs, essential for patients with diabetic vessel calcification.",
      },
      {
        q: "How can blocked leg arteries be opened?",
        a: "Dr. Almahmoud performs minimally invasive endovascular procedures like balloon angioplasty and stenting to restore blood flow.",
      },
    ],
    ctaMessage:
      "Restore warmth and circulation to your feet. Request an arterial evaluation with Dr. Almahmoud.",
  },

  "cramping-while-walking": {
    slug: "cramping-while-walking",
    name: "Cramping while Walking",
    category: "Blood Vessels (Vascular)",
    categoryBadge: "Claudication Evaluation",
    heroDesc:
      "Muscle cramping, tightness, or fatigue in the calves, thighs, or buttocks during walking that subsides with rest is a textbook sign of Intermittent Claudication caused by PAD.",
    overview:
      "During exercise, leg muscles require increased oxygenated blood. Narrowed leg arteries cannot supply enough blood, creating muscle ischemia and painful cramping. Rest reduces oxygen demand, causing pain to disappear within minutes.",
    pathophysiology:
      "Exertional arterial blood flow mismatch leads to anaerobic muscle respiration, accumulation of lactate, and stimulation of nociceptive unmyelinated C-fibers. Ceasing ambulation reduces oxygen demand, allowing reperfusion and symptom resolution.",
    characteristics: [
      "Cramping pain predictably occurring after walking a specific distance",
      "Pain localized to calf, thigh, or buttock muscle groups",
      "Complete relief of cramping after 2–5 minutes of standing still",
      "Symptom reproducibility during treadmill or walking exertion",
      "Associated coolness or pale skin color in the affected leg",
    ],
    causes: [
      "Peripheral Artery Disease (PAD) & Claudication",
      "Superficial Femoral Artery (SFA) Stenosis",
      "Aortoiliac Occlusive Disease (Leriche Syndrome)",
      "Popliteal Artery Entrapment Syndrome",
      "Spinal Stenosis (Neurogenic Claudication differential)",
    ],
    associatedConditions: [
      {
        title: "Intermittent Claudication",
        desc: "Exercise-induced muscle pain caused by atherosclerotic arterial blockages.",
      },
      {
        title: "Aortoiliac Disease",
        desc: "Blockages at the aortic bifurcation causing buttock and thigh cramping during ambulation.",
      },
      {
        title: "Systemic Atherosclerosis",
        desc: "Plaque buildup in leg arteries indicating high co-existing risk of coronary artery disease.",
      },
    ],
    redFlags: [
      "Walking distance before onset of cramping rapidly decreases",
      "Cramping pain begins occurring while resting or lying in bed",
      "Development of non-healing sores or black spots on toes or heel",
      "Foot becomes pale, cold, and numb suddenly",
    ],
    diagnosticReasoning:
      "Exercise testing combined with Doppler ultrasound quantifies walking tolerance and locates arterial stenoses.",
    diagnostics: [
      {
        title: "Exercise Ankle-Brachial Index (ABI)",
        desc: "Measures drop in ankle blood pressure after treadmill walking to confirm vascular claudication.",
        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Arterial Duplex Ultrasound",
        desc: "Maps plaque narrowing and flow velocities in femoral and popliteal arteries.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Coronary & Peripheral Calcium Scoring",
        desc: "Evaluates systemic vascular calcification risk.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "CT Angiography Roadmapping",
        desc: "3D vascular map for planning minimally invasive balloon revascularization.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      },
    ],
    preventionTips: [
      "Participate in supervised treadmill exercise walking therapy",
      "Quit all tobacco products completely",
      "Manage cholesterol with high-intensity statin therapy",
      "Keep blood pressure under control (<130/80 mmHg)",
    ],
    faqs: [
      {
        q: "Why does leg cramping stop when I stand still?",
        a: "Standing still reduces your leg muscles' demand for oxygen. Blood flow catches up, lactic acid clears, and the pain stops within minutes.",
      },
      {
        q: "How does an Exercise ABI test work?",
        a: "Your ankle pressure is measured before and after walking on a treadmill to see if blood pressure drops after exercise due to blocked arteries.",
      },
      {
        q: "Is claudication related to heart attack risk?",
        a: "Yes. Plaque in your leg arteries is a strong indicator of plaque in your heart arteries, requiring comprehensive cardiovascular evaluation.",
      },
    ],
    ctaMessage:
      "Walk without pain again. Book your vascular claudication testing with Dr. Almahmoud.",
  },

  "skin-discoloration": {
    slug: "skin-discoloration",
    name: "Skin Discoloration",
    category: "Blood Vessels (Vascular)",
    categoryBadge: "Dermatovascular Assessment",
    heroDesc:
      "Reddish-brown staining, dark patches, persistent redness, or paleness on lower legs and ankles indicates advanced venous stasis or severe arterial insufficiency.",
    overview:
      "Venous hypertension causes red blood cells to leak into skin tissues, breaking down into iron deposits (hemosiderin staining) that darken the skin. Conversely, pale or shiny hairless skin indicates poor arterial blood supply.",
    pathophysiology:
      "Venous hypertension increases dermal capillary permeability. Extravasated erythrocytes degrade into hemosiderin pigment, triggering chronic dermal inflammation, lipodermatosclerosis (skin hardening), and eventual ulceration.",
    characteristics: [
      "Rusty brown or dark hyperpigmentation around ankles (Gaiter zone)",
      "Redness, itching, or eczema-like skin scaling (Stasis Dermatitis)",
      "Hardened, tight skin texture resembling an inverted champagne bottle",
      "Pale, white, or bluish discoloration of toes when legs are elevated",
      "Weeping, swollen lower leg skin",
    ],
    causes: [
      "Stasis Dermatitis & Chronic Venous Insufficiency",
      "Advanced Peripheral Artery Disease (Pale / Cyanotic Skin)",
      "Post-Thrombotic Syndrome following DVT",
      "Lipodermatosclerosis (Hardened, inflamed leg skin)",
      "Venous Ulceration & Microvascular Damage",
    ],
    associatedConditions: [
      {
        title: "Stasis Dermatitis",
        desc: "Inflammatory skin condition caused by chronic venous blood pooling and high venous capillary pressures.",
      },
      {
        title: "Venous Ulcers",
        desc: "Open non-healing leg wounds resulting from untreated venous skin breakdown.",
      },
      {
        title: "Arterial Cyanosis",
        desc: "Bluish skin tone caused by severe lack of oxygenated arterial blood.",
      },
    ],
    redFlags: [
      "Open sore or ulcer near ankle that fails to heal within 2 weeks",
      "Rapidly spreading skin redness, warmth, or severe pain (Cellulitis)",
      "Blackened skin tissue on toes or heels (Gangrene)",
      "Severe skin tightness and painful inflammatory flare-ups",
    ],
    diagnosticReasoning:
      "Distinguishing venous skin breakdown from arterial ischemia is essential to choose the correct therapy and prevent chronic ulcers.",
    diagnostics: [
      {
        title: "Venous Reflux Duplex Mapping",
        desc: "Identifies leaky saphenous and perforator vein valves causing skin pigmentation.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Perforator Vein Inspection",
        desc: "Pinpoints incompetent calf perforator veins directly feeding skin stasis zones.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Transcutaneous Oxygen Pressure (TcPO2)",
        desc: "Measures skin tissue oxygenation to evaluate wound healing potential.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "High-Resolution Arterial Duplex",
        desc: "Evaluates co-existing arterial occlusive disease before applying compression.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      },
    ],
    preventionTips: [
      "Moisturize leg skin daily to prevent cracking and infection",
      "Wear prescription compression stockings as directed",
      "Elevate legs above heart level several times a day",
      "Treat underlying vein valve leakage early",
    ],
    faqs: [
      {
        q: "Why do my lower legs turn brown?",
        a: "Leaky leg veins cause blood to pool. Iron from red blood cells leaks into your skin, causing permanent brownish staining called hemosiderin pigmentation.",
      },
      {
        q: "Can skin discoloration turn into leg ulcers?",
        a: "Yes. Dark, hardened skin is a precursor to skin breakdown and open venous ulcers if vein valve reflux is left untreated.",
      },
      {
        q: "How does vein treatment clear up skin changes?",
        a: "Minimally invasive vein procedures close incompetent saphenous veins, stopping blood pooling and allowing skin tissue to heal.",
      },
    ],
    ctaMessage:
      "Protect your skin and underlying veins. Schedule a comprehensive vascular scan today.",
  },

  "headaches": {
    slug: "headaches",
    name: "Headaches",
    category: "Hypertension",
    categoryBadge: "Hypertensive Cerebrovascular Assessment",
    heroDesc:
      "Throbbing headaches—especially at the back of the head upon waking—can be a key indicator of dangerously high blood pressure or Hypertensive Urgency.",
    overview:
      "Hypertensive headaches occur when blood pressure exceeds autoregulatory limits, creating pressure on cerebral blood vessels. Uncontrolled high blood pressure silently damages heart, brain, and kidney tissue.",
    pathophysiology:
      "Systemic mean arterial pressure elevation overcomes cerebral autoregulatory vessel constriction, causing microvascular endothelial stretching, mild cerebral edema, and stimulation of meningeal pain receptors.",
    characteristics: [
      "Throbbing or pulsating pain at the back of the head (occipital region)",
      "Headaches most prominent upon waking in the morning",
      "Headaches that worsen during physical exertion or bending forward",
      "Associated feeling of head pressure or ear ringing (tinnitus)",
      "Headaches accompanied by elevated home blood pressure readings (>160/100 mmHg)",
    ],
    causes: [
      "Primary Essential Hypertension",
      "Hypertensive Urgency / Crisis (BP >180/120 mmHg)",
      "Renovascular Hypertension (Renal Artery Stenosis)",
      "Secondary Endocrine Hypertension (Aldosteronism / Pheochromocytoma)",
      "Obstructive Sleep Apnea-Induced Hypertension",
    ],
    associatedConditions: [
      {
        title: "Hypertensive Crisis",
        desc: "Severe acute blood pressure elevation endangering brain, heart, and kidney microvasculature.",
      },
      {
        title: "Renovascular Hypertension",
        desc: "Renal artery narrowing activating the renin-angiotensin system and causing severe secondary high BP.",
      },
      {
        title: "Hypertensive Retinopathy",
        desc: "High BP damaging small blood vessels supplying the eyes and brain.",
      },
    ],
    redFlags: [
      "Sudden 'thunderclap' headache with BP >180/120 mmHg",
      "Headache accompanied by blurred vision, confusion, or vomiting",
      "Associated chest pain, shortness of breath, or nosebleeds",
      "Neurological symptoms such as facial drooping or arm weakness",
    ],
    diagnosticReasoning:
      "Accurate 24-hour blood pressure tracking and target organ evaluation determine if headaches are driven by hypertensive vascular strain.",
    diagnostics: [
      {
        title: "24-Hour Ambulatory Blood Pressure Monitor",
        desc: "Eliminates white-coat effect and records nocturnal blood pressure dipping patterns.",
        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Renal Duplex Ultrasound",
        desc: "Evaluates renal artery flow velocities to rule out renovascular hypertension.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Echocardiogram (LVH Assessment)",
        desc: "Detects Left Ventricular Hypertrophy caused by long-standing high BP.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Endocrine & Renal Biomarkers",
        desc: "Checks eGFR, urine albumin, serum electrolytes, and renin-aldosterone ratio.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      },
    ],
    preventionTips: [
      "Adhere strictly to anti-hypertensive medications as prescribed",
      "Reduce daily dietary sodium to <1,500–2,000 mg",
      "Monitor home blood pressure twice daily",
      "Engage in regular aerobic exercise and stress-reduction techniques",
    ],
    faqs: [
      {
        q: "What blood pressure level causes headaches?",
        a: "Headaches commonly occur when blood pressure spikes significantly, typically above 180/120 mmHg (Hypertensive Crisis).",
      },
      {
        q: "Why is 24-hour Ambulatory BP Monitoring important?",
        a: "It tracks your blood pressure continuously throughout the day and night, capturing spikes that occur during sleep or morning hours.",
      },
      {
        q: "Can high blood pressure headaches cause a stroke?",
        a: "Severe uncontrolled blood pressure increases stroke risk. Prompt evaluation and BP control protect cerebral blood vessels.",
      },
    ],
    ctaMessage:
      "Control your blood pressure before complications arise. Book your hypertension evaluation today.",
  },

  "chest-tightness": {
    slug: "chest-tightness",
    name: "Chest Tightness",
    category: "Heart & Hypertension",
    categoryBadge: "Ischemic & Hypertensive Evaluation",
    heroDesc:
      "Chest tightness or a constricted band-like sensation across the chest is a key manifestation of myocardial ischemia, hypertensive ventricular strain, or coronary artery spasm.",
    overview:
      "Chest tightness occurs when the heart muscle demands more oxygen than obstructed coronary arteries or severely elevated arterial blood pressure can deliver.",
    pathophysiology:
      "Subendocardial ischemia activates cardiac afferent sympathetic nerve fibers. Elevated left ventricular wall stress (afterload) increases myocardial oxygen consumption, resulting in uncomfortable chest constriction.",
    characteristics: [
      "Sensation of a heavy band or weight constricted around chest",
      "Tightness provoked by walking up inclines, stairs, or cold winds",
      "Relief of tightness upon resting within 3–5 minutes",
      "Radiation to neck, jaw, or upper back",
      "Associated mild shortness of breath or anxiety",
    ],
    causes: [
      "Coronary Artery Disease (CAD) & Exertional Angina",
      "Severe Hypertensive Ventricular Wall Tension",
      "Microvascular Angina (Syndrome X)",
      "Coronary Vasospasm (Prinzmetal Angina)",
      "Aortic Stenosis or Hypertrophic Cardiomyopathy",
    ],
    associatedConditions: [
      {
        title: "Coronary Artery Disease",
        desc: "Atherosclerotic plaque narrowing coronary arteries and restricting myocardial blood flow.",
      },
      {
        title: "Hypertensive Wall Stress",
        desc: "High systemic blood pressure forcing the heart muscle to pump against severe resistance.",
      },
      {
        title: "Coronary Microvascular Dysfunction",
        desc: "Spasm or dysfunction in microscopic coronary blood vessels.",
      },
    ],
    redFlags: [
      "Chest tightness triggered by emotional stress or exercise",
      "Tightness spreading to the neck, back, or left arm",
      "Associated dizziness, cold sweating, or nausea",
      "Tightness unreleased by rest within 5–10 minutes",
    ],
    diagnosticReasoning:
      "Differentiating ischemic chest tightness from severe hypertensive wall stress requires comprehensive ECG stress testing and CCTA imaging.",
    diagnostics: [
      {
        title: "12-Lead ECG & Continuous Monitor",
        desc: "Identifies ST-segment changes, ischemia, and ventricular strain patterns.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Stress Echocardiography",
        desc: "Evaluates heart wall contraction dynamics under physical exertion.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Coronary CT Angiography (CCTA)",
        desc: "3D imaging visualization of soft and calcified coronary artery blockages.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "High-Sensitivity Troponin Assay",
        desc: "Ultra-sensitive blood biomarker test to detect acute myocardial cell injury.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      },
    ],
    preventionTips: [
      "Avoid sudden heavy exertion without warming up",
      "Take prescribed anti-anginal or blood pressure medications as directed",
      "Maintain a heart-healthy diet low in saturated fats",
      "Manage emotional stress and practice relaxation techniques",
    ],
    faqs: [
      {
        q: "What causes chest tightness when walking in cold air?",
        a: "Cold air causes blood vessels to constrict, increasing blood pressure and cardiac workload, which can trigger chest tightness.",
      },
      {
        q: "Is chest tightness always a sign of CAD?",
        a: "Not always, but CAD is a primary cause. It can also stem from microvascular angina, high blood pressure, or esophageal spasms.",
      },
      {
        q: "How does Coronary CT Angiography help?",
        a: "CCTA visualizes your coronary arteries non-invasively, showing plaque blockages and allowing early targeted treatment.",
      },
    ],
    ctaMessage:
      "Clarify your chest tightness with expert testing. Schedule your appointment with Dr. Almahmoud.",
  },

  "visual-changes": {
    slug: "visual-changes",
    name: "Visual Changes",
    category: "Hypertension",
    categoryBadge: "Hypertensive Retinopathy & Microvascular Workup",
    heroDesc:
      "Blurred vision, double vision, dimming, or floaters can be signs of severe high blood pressure damaging delicate retinal blood vessels (Hypertensive Retinopathy).",
    overview:
      "Sustained high blood pressure causes retinal arterioles to thicken, leak, or spasm. Severe BP spikes can lead to optic disk swelling (papilledema) or transient ischemic attacks (TIA).",
    pathophysiology:
      "Chronic elevated intravascular pressure leads to retinal arteriolar sclerosis, cotton wool spots (micro-infarcts), flame hemorrhages, and macular edema, severely threatening visual acuity.",
    characteristics: [
      "Blurry or hazy vision in one or both eyes",
      "Sudden dimming or grey curtain over field of vision",
      "Double vision (diplopia) when looking in certain directions",
      "Floaters or dark spots in field of vision",
      "Associated throbbing headache or elevated home BP",
    ],
    causes: [
      "Severe Hypertensive Retinopathy & Arteriolar Narrowing",
      "Hypertensive Urgency / Crisis",
      "Carotid Artery Stenosis & Microemboli (Amaurosis Fugax)",
      "Retinal Artery or Vein Occlusion",
      "Cerebrovascular Transient Ischemic Attack (TIA)",
    ],
    associatedConditions: [
      {
        title: "Hypertensive Retinopathy",
        desc: "Damage to the micro-vessels in the retina caused by chronic high blood pressure.",
      },
      {
        title: "Carotid Artery Stenosis",
        desc: "Plaque in carotid neck arteries throwing off micro-clots to retinal arteries.",
      },
      {
        title: "TIA / Stroke Warning",
        desc: "Transient ischemic attack presenting as sudden fleeting vision loss.",
      },
    ],
    redFlags: [
      "Sudden loss of vision in one eye ('curtain coming down')",
      "Blurred vision accompanied by severe headache and BP >180/120",
      "Double vision accompanied by facial weakness or confusion",
      "Associated chest pain, shortness of breath, or dizziness",
    ],
    diagnosticReasoning:
      "Uncovering microvascular hypertension damage protects both vision and systemic vascular health.",
    diagnostics: [
      {
        title: "24-Hour Ambulatory Blood Pressure Monitor",
        desc: "Continuously tracks blood pressure spikes causing retinal arteriolar strain.",
        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Carotid & Ophthalmic Duplex Ultrasound",
        desc: "Evaluates carotid flow velocities and screens for microembolic sources.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Echocardiogram & End Organ Workup",
        desc: "Checks for left ventricular hypertrophy and systemic end-organ damage.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Microvascular Biomarkers",
        desc: "Evaluates urine albumin-to-creatinine ratio and renal filtration function.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      },
    ],
    preventionTips: [
      "Keep blood pressure rigorously controlled (<130/80 mmHg)",
      "Undergo annual dilated eye exams",
      "Take prescribed antihypertensive medications consistently",
      "Manage cholesterol and blood sugar levels",
    ],
    faqs: [
      {
        q: "Can high blood pressure cause permanent vision loss?",
        a: "Yes. Long-standing uncontrolled high blood pressure damages retinal blood vessels and optic nerves, which can lead to vision loss.",
      },
      {
        q: "What is Amaurosis Fugax?",
        a: "It is a sudden, temporary loss of vision in one eye like a curtain falling, often caused by small plaque pieces traveling from a carotid artery blockage.",
      },
      {
        q: "Why is a Carotid Ultrasound recommended for vision changes?",
        a: "Carotid ultrasounds check if plaque blockages in your neck arteries are throwing off tiny clots to your eye arteries.",
      },
    ],
    ctaMessage:
      "Protect your vision and blood pressure health. Schedule your comprehensive evaluation today.",
  },
};
