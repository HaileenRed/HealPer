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
//     Disease: 'Allergies',
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
//     Disease: 'Cold and Flu',
//     Symtomps: [
//       'fever (100° F)',
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
//     Symtomps: ['symptoms of a migraine', 'symptoms of a tension-type headache'],
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
