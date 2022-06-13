let diseases = [
  {
    Disease: 'Allergies',
    Link: 'https://www.mayoclinic.org/diseases-conditions/allergies/symptoms-causes/syc-20351497',
    Symtomps: [
      'eye irritation',
      'runny nose',
      'stuffy nose',
      'puffy, watery eyes',
      'sneezing',
      'inflamed, itchy nose and throat',
    ],
  },
  {
    Disease: 'Common cold',
    Link: 'https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605',
    Symtomps: [
      'runny or stuffy nose',
      'sore throat',
      'coughing',
      'congestion',
      'slight body aches or a mild headache',
      'sneezing',
      'low-grade fever',
      'generally feeling unwell',
    ],
  },
  {
    Disease: 'Conjunctivitis',
    Link: 'https://www.mayoclinic.org/diseases-conditions/pink-eye/symptoms-causes/syc-20376355',
    Symtomps: [
      'redness, itching, tearing, burning sensation',
      'pus-like discharge and/or crusting of the eyelids',
    ],
  },
  {
    Disease: 'Diarrhea',
    Link: 'https://www.mayoclinic.org/symptoms/diarrhea/basics/causes/sym-20050926',
    Symtomps: [
      'watery, loose stools',
      'frequent bowel movements',
      'cramping or pain in the abdomen, nausea, bloating',
      'possibly fever or bloody stools, depending on the cause',
    ],
  },
  {
    Disease: 'Mononucleosis',
    Link: 'https://www.mayoclinic.org/diseases-conditions/mononucleosis/symptoms-causes/syc-20350328',
    Symtomps: [
      'nap frequently',
      'swollen lymph glands and spleen',
      'sore throat',
      'fever',
      'loss of appetite',
      'muscle aches',
    ],
  },
  {
    Disease: 'Heart Attack',
    Link: 'https://www.mayoclinic.org/diseases-conditions/heart-attack/symptoms-causes/syc-20373106',
    Symtomps: [
      'pain',
      'pressure',
      'shortness of breath',
      'lightheadedness',
      'nausea',
    ],
  },
  {
    Disease: 'Stroke',
    Link: 'https://www.mayoclinic.org/diseases-conditions/stroke/symptoms-causes/syc-20350113',
    Symtomps: [
      'facial drooping',
      'arm weakness',
      'difficulty with speech',
      'rapidly developing dizziness',
      'loss of vision',
      'confusion',
    ],
  },
  {
    Disease: 'Breast cancer',
    Link: 'https://www.mayoclinic.org/diseases-conditions/breast-cancer/symptoms-causes/syc-20352470',
    Symtomps: [
      'redness or pitting of the skin over your breast',
      'a newly inverted nipple',
      'a breast lump',
    ],
  },
  {
    Disease: "Addison's disease",
    Link: 'https://www.mayoclinic.org/diseases-conditions/addisons-disease/doctors-departments/ddc-20350298',
    Symtomps: [
      'fatigue',
      'muscle weakness',
      'low mood',
      'loss of appetite and unintentional weight loss',
      'increased thirst',
    ],
  },
  {
    Disease: 'Allergic rhinitis',
    Link: 'https://www.mayoclinic.org/departments-centers/allergic-rhinitis-specialty-group/overview/ovc-20485381',
    Symtomps: [
      'cold-like symptoms',
      'itchiness',
      'sneezing',
      'blocked or runny nose',
    ],
  },
  {
    Disease: "Alzheimer's disease",
    Link: 'https://www.mayoclinic.org/diseases-conditions/alzheimers-disease/symptoms-causes/syc-20350447',
    Symtomps: [
      'confusion',
      'difficulty planning or making decisions',
      'problems with speech and language',
      'problems moving around',
      'personality changes',
      'hallucinations',
      'low mood',
    ],
  },
  {
    Disease: 'Anxiety',
    Link: 'https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961',
    Symtomps: ['having trouble concentrating or sleeping', 'feeling restless'],
  },
  {
    Disease: 'Asbestosis',
    Link: 'https://www.mayoclinic.org/diseases-conditions/asbestosis/symptoms-causes/syc-20354637',
    Symtomps: [
      'shortness of breath',
      'a persistent cough',
      'wheezing',
      'fatigue',
      'chest pain',
      'clubbed fingertips',
    ],
  },
  {
    Disease: 'Asthma',
    Link: 'https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653',
    Symtomps: ['coughing', 'wheezing', 'chest tightness', 'breathlessness'],
  },
  {
    Disease: 'Acute lymphoblastic leukaemia',
    Link: 'https://www.mayoclinic.org/diseases-conditions/acute-lymphocytic-leukemia/symptoms-causes/syc-20369077',
    Symtomps: [
      'pale skin',
      'tiredness',
      'breathlessness',
      'having repeated infections over a short space of time',
      'unusual and frequent bleeding',
    ],
  },
  {
    Disease: 'Benign prostate enlargement',
    Link: 'https://www.mayoclinic.org/diseases-conditions/benign-prostatic-hyperplasia/symptoms-causes/syc-20370087',
    Symtomps: [
      'difficulty starting urination',
      'a frequent need to urinate',
      'difficulty fully emptying the bladder',
    ],
  },
  {
    Disease: 'Bile duct cancer',
    Link: 'https://www.mayoclinic.org/diseases-conditions/cholangiocarcinoma/symptoms-causes/syc-20352408',
    Symtomps: ['jaundice', 'unintentional weight loss', 'abdominal pain'],
  },
  {
    Disease: 'Brain tumours',
    Link: 'https://www.mayoclinic.org/diseases-conditions/pediatric-brain-tumor/symptoms-causes/syc-20361694',
    Symtomps: [
      'severe, persistent headaches',
      'seizures',
      'persistent nausea, vomiting and drowsiness',
      'mental or behavioural changes',
      'progressive weakness or paralysis on one side of the body',
    ],
  },
  {
    Disease: 'Bipolar disorder',
    Link: 'https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955',
    Symtomps: ['depression', 'mania'],
  },
  {
    Disease: 'Bladder cancer',
    Link: 'https://www.mayoclinic.org/diseases-conditions/bladder-cancer/symptoms-causes/syc-20356104',
    Symtomps: ['blood in urine'],
  },
  {
    Disease: 'Bone cancer',
    Link: 'https://www.mayoclinic.org/diseases-conditions/bone-cancer/symptoms-causes/syc-20350217',
    Symtomps: [
      'persistent bone pain',
      'swelling and redness over the bone',
      'a noticeable lump over the bone',
      'a weak bone that breaks more easily than normal',
    ],
  },
  {
    Disease: 'Bowel cancer',
    Link: 'https://www.mayoclinic.org/diseases-conditions/small-bowel-cancer/symptoms-causes/syc-20352497',
    Symtomps: [
      'a persistent change in bowel',
      'blood in the stools',
      'abdominal pain',
    ],
  },
  {
    Disease: 'Bronchitis',
    Link: 'https://www.mayoclinic.org/diseases-conditions/bronchitis/symptoms-causes/syc-20355566',
    Symtomps: [
      'cough is severe or lasts longer than three weeks',
      'cough up mucus streaked with blood',
      'constant fever',
    ],
  },
  {
    Disease: 'Bronchiectasis',
    Link: 'https://www.mayoclinic.org/departments-centers/mycobacterial-and-bronchiectasis-clinic/overview/ovc-20398963',
    Symtomps: ['persistent cough', 'breathlessness'],
  },
  {
    Disease: 'Bunion',
    Link: 'https://www.mayoclinic.org/diseases-conditions/bunions/symptoms-causes/syc-20354799',
    Symtomps: [
      'pain and stiffness of the big toe joint',
      'swelling of the big toe joint',
      'difficulty walking',
      'arthritis in the big toe',
    ],
  },
]

/*


{
  Disease: '',
  Link: '',
  Symtomps: [
    '',
  ],
},


*/
