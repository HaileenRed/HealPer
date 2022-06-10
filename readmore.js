// const readMoreBtn = document.querySelector('.readmore-btn')
// const text = document.querySelector('.text')

// readMoreBtn.addEventListener('click', (e) => {
//   text.classList.toggle('more')
//   if (readMoreBtn.innerText === 'Read More') {
//     readMoreBtn.innerText = 'Read Less'
//   } else {
//     readMoreBtn.innerText = 'Read More'
//   }
// })

// let diseases = [
//   {
//     Disease: 'Allergy',
//     Symtomps: [
//       'eye irritation',
//       'runny nose',
//       'stuffy nose',
//       'puffy, watery eyes',
//       'sneezing',
//       'inflamed, itchy nose and throat',
//     ],
//   },
//   {
// Disease: 'Achalasia g',
// Symtomps: [
//   'trouble swallowing food (dysphagia)',
//    'food or liquid flowing back up into the throat (regurgitation)', 
//    'waking up at night coughing or choking due to regurgitation',
//    'chest pain',
//    'trouble burping',
//    'hiccups', 
//    'weight loss due to reduced intake of food'.
//    ],
//  }, 
//  { 
//  Disease: 'Addison Disease (Adrenal Insufficiency)',
//  Symtomps: [ 
//  'Depression',
//  'Diarrhea',
//  'Fatigue',
//  'Hyperpigmentation of Skin (Skin Darkening)', 
//  'Irregular Menstrual Periods',
//  'Irritability',
//  'Loss of Appetite',
//  'Low Blood Pressure',
//  'Muscle Weakness',
//  'Feeling like you need to vomit',
//  'Salt Cravings',
//  'Vomiting',
//  'Weight Loss',
// ],
//  },
// {
//  
// Disease: 'Alkapeonuria',
// Symtomps: ['Discoloration of the Earwax',
//  'Heart Problems',
//  'Kidney Stones',
//  'Ochronosis (Bluish-Black Pigmentation in Connective Tissue) * Prostate Stones',
//  'Urine That Turns Black When Exposed to Air',
// ],
// },
// {
//  Disease:'Aortic Stenosis',
//  Symtomps: [
//   'Abnormal Heart Rhythms',
//   'Chest Pain',
//  'Fainting',
//  'Fatigue',
//  'Heart Murmur',
//   'Inability to Exercise',
//  'Lightheadedness',
// 'Shortness of Breath',
//    ],
// },
// { 
//   Disease: 'ARDS (Acute Respiratory Distress Syndrome)',
//   Symtomps: [
//   'Confusion',
//   'Cough',
//   'Bluish Nails or Lips', 
//   'Dizziness',
//   'Exhaustion (Tiredness)',
//   'Fever',
//   'Headache',
//   'Low Blood Pressure',
//   ],
//  },
//  {
//  Disease: 'Absence seizure',
//  Symptomps: [
//  'Sudden stop in motion without falling',
//  'Lip smacking',
//  'Eyelid flutters',
//  'Chewing motions',
//  'Finger rubbing',
//  'Small movements of both hands',
//   ],
//  },
//  {
//  Disease: 'Acanthosis nigricans', 
//  Symtomps: [
//  'Skin changes are the only signs of acanthosis nigricans',
//  'You will notice dark, thickened, velvety skin on body folds and creases', 
//  'typically in your armpits, groin and back of the neck',
//   'The affected skin changes usually appear slowly',
//   'The affected skin may also have an odor or itch',
//    ],
//  },
//  {
//  Disease: 'Achilles tendinitis', 
//  Symtomps: [
//  'The pain associated with Achilles tendinitis typically begins as a mild ache in the back of the leg or above the heel after running or other sports activity',
//  'Episodes of more-severe pain may occur after prolonged running, stair climbing or sprinting',
//  'You might also experience tenderness or stiffness, especially in the morning, which usually improves with mild activity',
//    ],
//  },
//  {
// Disease: 'ADHD (Hyperactive Disorder)',
// Symtomps: [
// 'Impulsiveness',
// 'Disorganization and problems prioritizing. Poor time management skills',
// 'Problems focusing on a task',
// 'Trouble multitasking',
// 'Excessive activity or restlessness',
// 'Poor planning',
// 'Low frustration tolerance',
//    ],
//  },
//  {
// Disease: 'Autism',
// Symtomps: [
// 'Abnormal Body Posturing or Facial Expressions. Abnormal Tone of Voice',
// 'Avoidance of Eye Contact or Poor Eye Contact. Behavioral Disturbances', 
// 'Deficits in Language Comprehension',
// 'Delay in Learning to Speak',
// 'Flat or Monotonous Speech',
// 'Inappropriate Social Interaction',
//    ],
//  },
//  {
// Disease: 'Achilles tendon rupture',
// Symtomps: [
// 'The feeling of having been kicked in the calf',
//  'Pain, possibly severe, and swelling near the heel',
//  'An inability to bend the foot downward or "push off" the injured leg when walking',
//  'An inability to stand on the toes on the injured leg',
// 'A popping or snapping sound when the injury occurs',
//   ],
//  },
//  {
// Disease: 'Acid reflux',
//  Symtomps: [
//  'Is not gaining weight',
//  'Consistently spits up forcefully, causing stomach contents to shoot out of his or her mouth',
//  'Spits up green or yellow fluid',
//  'Spits up blood or a material that looks like coffee grounds',
//   'Refuses food',
//  'Has blood in his or her stool',
//  'Has difficulty breathing or a chronic cough',
// 'Begins spitting up at age 6 months or older',
// 'Is unusually irritable after eating',
//      Disease: 'Alkaptonuria',
//       Symtomps: [
//      'dark spots in the sclera (white) of your eyes',
//      'thickened and darkened cartilage in your ears',
//      'blue speckled discoloration of your skin, particularly around sweat glands',
//      'dark-colored sweat or sweat stains',
//      'black earwax',
//    ],
//   },
//   {
//     Disease: 'Abdominal Aortic Aneurysm',
//     Symtomps: [
//      'back or flank pain',
//      'severe or worsening abdominal pain',
//      'feeling a pulse near the bellybutton',
//     ],
//   },
//   {
//     Disease: 'Cold and Flu',
//     Symtomps: [
//       'fever',
//       'headache',
//       'more intense pain and fatigue',
//       'more severe, often dry cough',
//     ],
//   },
//   {
//     Disease: 'Conjunctivitis (“pink eye“)',
//     Symtomps: [
//       'redness, itching, tearing, burning sensation',
//       'pus-like discharge and/or crusting of the eyelids',
//     ],
//   },
//   {
//      Disease: 'Migraine',
//      Symtomps: [
//        'sensitive to light or sound', 
//        'feeling you need to vomit',
//     ],
//   },
//   {
//     Disease: 'Diarrhea',
//     Symtomps: [
//       'watery, loose stools',
//       'frequent bowel movements',
//       'cramping or pain in the abdomen, nausea, bloating',
//       'possibly fever or bloody stools, depending on the cause',
//     ],
//   },
//   {
//     Disease: 'Headaches',
//     Symtomps: ['redness, itching, tearing, burning sensation in the eyes',
//      'pus-like discharge and/or crusting of the eyelids'],
//   },
//   {
//     Disease: 'Mononucleosis',
//     Symtomps: [
//       'nap frequently',
//       'swollen lymph glands and spleen',
//       'sore throat',
//       'fever',
//       'loss of appetite',
//       'muscle aches',
//     ],
//   },
// ]

// const selector = document.querySelector('#diseases')
// const addSymptomBtn = document.querySelector('#addSymptom')
// const sytompsList = document.querySelector('#symptomList')
// const showResultBtn = document.querySelector('#showResult')
// const result = document.querySelector('#result')
// const clearBtn = document.querySelector('#clear')
// const showMore = document.querySelector('#showMore')

// addSymptomBtn.addEventListener('click', () => {
//   let value = selector.options[selector.selectedIndex].text

//   let match

//   if (sytompsList.children.length > 0) {
//     for (let i = 0; i < sytompsList.children.length; i++) {
//       if (sytompsList.children[i].innerHTML === value) {
//         return (match = true)
//       } else {
//         match = false
//       }
//     }
//   }

//   let li = document.createElement('LI')
//   li.textContent = value

//   if (!match) {
//     sytompsList.append(li)
//   }
// })

// showResultBtn.addEventListener('click', () => {
//   let symptom = []

//   if (sytompsList.children.length < 1) {
//     sytompsList.textContent = 'Select a symptom'
//     setTimeout(() => {
//       sytompsList.textContent = ''
//     }, 1000)
//   }

//   for (let i = 0; i < sytompsList.children.length; i++) {
//     symptom.push(sytompsList.children[i].innerHTML)
//   }

//   var child = sytompsList.lastElementChild
//   while (child) {
//     sytompsList.removeChild(child)
//     child = sytompsList.lastElementChild
//   }

//   for (let item in symptom) {
//     var check = diseases.find((e) => {
//       return e.Symtomps.some((e) => {
//         return e === symptom[item]
//       })
//     })
//     let match = false

//     if (result.children.length > 0) {
//       for (let i = 0; i < result.children.length; i++) {
//         if (result.children[i].textContent === check.Disease) {
//           match = true
//         } else {
//           match = false
//         }
//       }
//     }

//     let li = document.createElement('LI')
//     li.textContent = check.Disease

//     li.addEventListener('click', (e) => {
//       const text = e.target.innerText
//       const find = diseases.find((e) => e.Disease === text)

//       const h2 = document.createElement('H2')
//       h2.textContent = find.Disease
//       showMore.append(h2)
//       for (let item of find.Symtomps) {
//         const p = document.createElement('P')
//         p.textContent = item
//         showMore.append(p)
//       }
//     })

//     if (!match) {
//       result.append(li)
//     } else if (match) {
//       return
//     }
//   }
// })

// clearBtn.addEventListener('click', () => {
//   var child = result.lastElementChild
//   while (child) {
//     result.removeChild(child)
//     child = result.lastElementChild
//   }

//   var chilren = showMore.lastElementChild
//   while (chilren) {
//     showMore.removeChild(chilren)
//     chilren = showMore.lastElementChild
//   }
// })

