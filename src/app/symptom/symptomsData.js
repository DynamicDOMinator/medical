export const symptomsData = {
  "chest-pain": {
    slug: "chest-pain",
    name: "Chest Pain",
    category: "Heart (Cardiac)",
    categoryBadge: "Cardiac Symptom Evaluation",
    heroDesc:
      "Chest pain or pressure is a cardinal warning sign of reduced blood flow to the heart muscle. Immediate diagnostic evaluation is critical to rule out life-threatening conditions such as Coronary Artery Disease (CAD) or Acute Coronary Syndrome.",
    overview:
      "Chest pain (angina) often presents as squeezing, tightness, heaviness, or burning across the center or left side of the chest. It may radiate to the jaw, neck, shoulder, arm, or back. Prompt diagnostic testing identifies whether pain stems from coronary blockages, valve failure, or pericardial inflammation.",
    causes: [
      "Coronary Artery Disease (CAD) & Myocardial Ischemia",
      "Acute Coronary Syndrome (Heart Attack)",
      "Aortic Valve Stenosis or Regurgitation",
      "Pericarditis (Inflammation of the pericardial sac)",
      "Microvascular Angina & Coronary Spasm",
    ],
    redFlags: [
      "Sudden crushing chest pressure or tightness lasting >5 minutes",
      "Radiation of pain to the left arm, jaw, neck, or back",
      "Associated cold sweats, severe shortness of breath, or dizziness",
      "Pain triggered by physical exertion or stress and unrelieved by rest",
    ],
    diagnosticReasoning:
      "Dr. Mohamed Faher Almahmoud utilizes advanced cardiac imaging to non-invasively map coronary arteries, detect silent ischemia, and stratify cardiac risk before major cardiac events occur.",
    diagnostics: [
      {
        title: "12-Lead Resting ECG & Holter",
        desc: "Detects ST-T wave ischemia, silent heart attacks, and electrical conduction abnormalities.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Treadmill Stress Echocardiogram",
        desc: "Evaluates myocardial wall motion and blood flow under physical stress.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Coronary CT Angiography (CCTA)",
        desc: "Provides 3D non-invasive visualization of soft and calcified coronary plaque.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Cardiac Biomarkers (Troponin / hs-CRP)",
        desc: "Measures cardiac muscle injury and systemic arterial inflammation.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
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
      "Shortness of breath (dyspnea) during routine activities or while lying flat often indicates elevated cardiac filling pressures, heart failure, or severe hypertensive heart strain.",
    overview:
      "Breathing difficulty occurs when the heart muscle is unable to pump efficiently (Heart Failure), causing fluid accumulation in the lungs (pulmonary congestion), or when severe blood pressure spikes strain the left ventricle.",
    causes: [
      "Congestive Heart Failure (HFrEF / HFpEF)",
      "Coronary Artery Disease & Silent Ischemia",
      "Valvular Dysfunction (Aortic / Mitral Regurgitation)",
      "Severe Uncontrolled Hypertension",
      "Pulmonary Embolism & Venous Thromboembolism",
    ],
    redFlags: [
      "Sudden severe breathlessness woke you up from sleep (Paroxysmal Nocturnal Dyspnea)",
      "Inability to breathe unless sitting upright (Orthopnea)",
      "Shortness of breath accompanied by leg swelling or rapid weight gain",
      "Associated chest discomfort, bluish lips, or confusion",
    ],
    diagnosticReasoning:
      "Pinpointing the exact cause of shortness of breath requires measuring ejection fraction, valve gradients, and biomarker stress markers.",
    diagnostics: [
      {
        title: "Transthoracic Echocardiogram (TTE)",
        desc: "Calculates Left Ventricular Ejection Fraction (LVEF) and measures valve gradients.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "NT-proBNP Biomarker Assay",
        desc: "Measures cardiac wall tension and strain to diagnose fluid overload.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "12-Lead ECG & Chest X-Ray",
        desc: "Assesses conduction delay, hypertrophy, and pulmonary vascular congestion.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Cardiac PET / MRI",
        desc: "Evaluates myocardial scar burden, tissue viability, and infiltrative diseases.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
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
      "Heart palpitations are sensations of racing, fluttering, pounding, or skipped heartbeats. Precise electrophysiology testing captures transient arrhythmias to prevent stroke and cardiac event risks.",
    overview:
      "While some palpitations are benign extra beats (PVCs/PACs), others reflect serious cardiac rhythm disorders such as Atrial Fibrillation (AFib), Supraventricular Tachycardia (SVT), or Ventricular Tachycardia.",
    causes: [
      "Atrial Fibrillation (AFib) & Atrial Flutter",
      "Premature Ventricular Contractions (PVCs) & PACs",
      "Sick Sinus Syndrome & Bradycardia",
      "Valvular Prolapse or Structural Cardiomyopathy",
      "Electrolyte Imbalances & Thyroid Dysfunction",
    ],
    redFlags: [
      "Palpitations associated with fainting (syncope) or near-fainting",
      "Rapid racing heart (>140 bpm) accompanied by chest pain",
      "Family history of sudden cardiac death or unexplained loss of consciousness",
      "Sensation of severe dizziness or shortness of breath during episode",
    ],
    diagnosticReasoning:
      "Capturing your heart's rhythm during symptomatic episodes is key to definitive diagnosis and guiding antiarrhythmic or ablation therapies.",
    diagnostics: [
      {
        title: "24–48 Hr Holter Monitor",
        desc: "Continuous ECG rhythm logging during daily activities and sleep.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "14-Day Extended Patch Monitor",
        desc: "Captures infrequent paroxysmal arrhythmias missed by shorter tests.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Transthoracic Echocardiography",
        desc: "Evaluates atrial size, valve function, and structural muscle integrity.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Treadmill Exercise Stress Test",
        desc: "Assesses exertion-triggered rhythm spikes and ischemic triggers.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
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
      "Dizziness, lightheadedness, or feeling faint can indicate transient drops in cerebral blood flow caused by heart block, blood pressure fluctuations, or vascular stenosis.",
    overview:
      "Cardiovascular causes of dizziness range from orthostatic hypotension and severe hypertension spikes to bradycardia, sinus pauses, or carotid artery blockages restricting blood flow to the brain.",
    causes: [
      "Sinus Node Dysfunction & Heart Block (Bradycardia)",
      "Severe Blood Pressure Spikes or Orthostatic Hypotension",
      "Carotid Artery Stenosis & Subclavian Steal",
      "Aortic Valve Stenosis",
      "Autonomic Nervous System Dysfunction",
    ],
    redFlags: [
      "Loss of consciousness (Syncope) or blackout episode",
      "Dizziness accompanied by numbness, weakness, or slurred speech",
      "Dizziness triggered by exertion or exercising",
      "Associated chest pain, severe headache, or palpitations",
    ],
    diagnosticReasoning:
      "A combined cardiac and vascular evaluation pinpoints whether dizziness stems from heart rhythm slowdowns, blood pressure dysregulation, or carotid artery narrowing.",
    diagnostics: [
      {
        title: "24-Hour Ambulatory BP & Holter",
        desc: "Monitors blood pressure fluctuations and cardiac rhythm over a full 24-hour cycle.",
        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Echocardiography",
        desc: "Rules out structural outflow tract obstruction such as severe aortic stenosis.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Carotid Duplex Ultrasound",
        desc: "Evaluates carotid arteries supplying blood to the brain for plaque stenosis.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "12-Lead ECG & Autonomic Testing",
        desc: "Assesses conduction disease, QT interval, and orthostatic reflex responses.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
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
      "Unexplained chronic fatigue or low exercise tolerance is frequently an early symptom of reduced cardiac output, heart failure, or occult coronary artery disease.",
    overview:
      "When the heart muscle fails to pump sufficient oxygenated blood to meet body demands, muscles fatigue quickly. Patients often mistake cardiac fatigue for aging or lack of sleep.",
    causes: [
      "Congestive Heart Failure (Low Cardiac Output)",
      "Coronary Artery Disease & Ischemic Cardiomyopathy",
      "Heart Valve Insufficiency (Mitral / Aortic Regurgitation)",
      "Uncontrolled Hypertension & Diastolic Stiffness",
      "Anemia secondary to chronic vascular conditions",
    ],
    redFlags: [
      "Inability to climb one flight of stairs due to muscle exhaustion",
      "Progressive worsening of stamina over weeks or months",
      "Fatigue accompanied by swelling in legs, ankles, or abdomen",
      "Associated breathlessness when performing mild daily tasks",
    ],
    diagnosticReasoning:
      "Uncovering cardiac fatigue requires measuring cardiac pump efficiency, valve leakage, and biomarker indicators of heart strain.",
    diagnostics: [
      {
        title: "Echocardiogram (LVEF Assessment)",
        desc: "Measures cardiac output, stroke volume, and diastolic filling pressures.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "NT-proBNP & Cardiac Panels",
        desc: "Quantifies ventricular stretch and checks for underlying cardiac stress.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Treadmill Exercise Stress Test",
        desc: "Assesses functional capacity, chronotropic response, and exertional ischemia.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "12-Lead ECG",
        desc: "Detects ischemic changes, prior silent heart damage, and bundle branch blocks.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
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
      "Leg pain, cramping, heaviness, or throbbing can indicate compromised arterial blood flow (PAD) or venous valve failure (Venous Insufficiency / DVT).",
    overview:
      "Vascular leg pain differs by etiology: arterial pain typically worsens during walking (claudication) due to oxygen deprivation, while venous leg pain produces dull aching and heaviness that worsens after prolonged standing.",
    causes: [
      "Peripheral Artery Disease (PAD) & Arterial Stenosis",
      "Chronic Venous Insufficiency & Varicose Veins",
      "Deep Vein Thrombosis (DVT) & Blood Clots",
      "Iliac Vein Compression (May-Thurner Syndrome)",
      "Diabetic Peripheral Vascular Neuropathy",
    ],
    redFlags: [
      "Sudden coldness, pale/bluish color, and severe pain in one leg (Acute Limb Ischemia)",
      "Swelling in one leg accompanied by warmth and redness",
      "Non-healing leg ulcers or sores near the ankle or toes",
      "Pain in the leg at rest or while lying in bed at night",
    ],
    diagnosticReasoning:
      "Non-invasive vascular testing rapidly distinguishes between arterial blockages and venous blood flow reversal to guide targeted therapy.",
    diagnostics: [
      {
        title: "Ankle-Brachial Index (ABI)",
        desc: "Non-invasive Doppler blood pressure test comparing arm and ankle pressures.",
        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Arterial Duplex Ultrasound",
        desc: "Visualizes arterial plaque, vessel narrowing, and blood flow velocity.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Venous Compression Ultrasound",
        desc: "Evaluates vein valve reflux and screens for Deep Vein Thrombosis (DVT).",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "CT / MR Angiography (CTA/MRA)",
        desc: "Produces 3D anatomical roadmaps of limb arteries and veins before stenting.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
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
      "Swelling in the ankles, calves, or thighs (edema) is a key symptom of venous valve incompetence, deep vein blood clots (DVT), or congestive heart failure.",
    overview:
      "Fluid accumulation in lower limbs occurs when blood pool in the veins due to leaky venous valves (venous insufficiency), when a clot blocks venous return (DVT), or when elevated cardiac pressures push fluid into peripheral tissues.",
    causes: [
      "Chronic Venous Insufficiency (Venous Stasis)",
      "Deep Vein Thrombosis (DVT)",
      "Congestive Heart Failure (Right & Left Heart Stress)",
      "Hypertension Medication Side Effects (Calcium Channel Blockers)",
      "Post-Thrombotic Syndrome & Lymphedema",
    ],
    redFlags: [
      "Sudden swelling in only ONE leg accompanied by pain or tenderness",
      "Swelling accompanied by sudden shortness of breath or chest pain (PE risk)",
      "Skin tightness, weeping fluid, or reddish-brown discoloration",
      "Rapid swelling spreading above the knee to the thigh or groin",
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
    causes: [
      "Peripheral Artery Disease (PAD) & Arterial Occlusion",
      "Atherosclerotic Plaque Buildup in Femoral/Popliteal Arteries",
      "Diabetic Microvascular Disease",
      "Raynaud's Phenomenon & Vasospastic Disorders",
      "Buerger's Disease (Thromboangiitis Obliterans)",
    ],
    redFlags: [
      "Foot or toes turning pale, blue, or black",
      "Sudden numbness accompanied by inability to move the foot",
      "Pain in toes or foot while resting in bed that improves when hanging foot over bed",
      "Non-healing sores or ulcers on toes or feet",
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
    causes: [
      "Peripheral Artery Disease (PAD) & Claudication",
      "Iliac or Superficial Femoral Artery Stenosis",
      "Aortoiliac Occlusive Disease (Leriche Syndrome)",
      "Popliteal Artery Entrapment",
      "Spinal Stenosis (Neurogenic Claudication differential)",
    ],
    redFlags: [
      "Cramping distance progressively shortening over time",
      "Cramping occurring at rest without walking (Rest Pain)",
      "Associated numbness, foot coldness, or skin discoloration",
      "Development of sores or dark spots on feet or toes",
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
    causes: [
      "Stasis Dermatitis & Chronic Venous Insufficiency",
      "Advanced Peripheral Artery Disease (Pale / Cyanotic Skin)",
      "Post-Thrombotic Syndrome following DVT",
      "Lipodermatosclerosis (Hardened, inflamed leg skin)",
      "Venous Ulceration & Microvascular Damage",
    ],
    redFlags: [
      "Open sore or ulcer near ankle that won't heal",
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
    causes: [
      "Primary Essential Hypertension",
      "Hypertensive Urgency / Crisis (BP >180/120 mmHg)",
      "Renovascular Hypertension (Renal Artery Stenosis)",
      "Secondary Endocrine Hypertension (Aldosteronism / Pheochromocytoma)",
      "Obstructive Sleep Apnea-Induced Hypertension",
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
    causes: [
      "Coronary Artery Disease (CAD) & Exertional Angina",
      "Severe Hypertensive Ventricular Wall Tension",
      "Microvascular Angina (Syndrome X)",
      "Coronary Vasospasm (Prinzmetal Angina)",
      "Aortic Stenosis or Hypertrophic Cardiomyopathy",
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
    causes: [
      "Severe Hypertensive Retinopathy & Arteriolar Narrowing",
      "Hypertensive Urgency / Crisis",
      "Carotid Artery Stenosis & Microemboli (Amaurosis Fugax)",
      "Retinal Artery or Vein Occlusion",
      "Cerebrovascular Transient Ischemic Attack (TIA)",
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
    ctaMessage:
      "Protect your vision and blood pressure health. Schedule your comprehensive evaluation today.",
  },
};
