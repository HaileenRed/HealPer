const selector = document.querySelector('#diseases')
const addSymptomBtn = document.querySelector('#addSymptom')
const sytompsList = document.querySelector('#symptomList')
const showResultBtn = document.querySelector('#showResult')
const result = document.querySelector('#result')
const clearBtn = document.querySelector('#clear')
const showMore = document.querySelector('#showMore')
const resultText = document.querySelector('#resultContainer p')
const resultContainer = document.querySelector('#resultContainer')

//Read More
const readmoreBtn = document.querySelector('.readmore-btn')
const more = document.querySelector('.more')
const dot = document.querySelector('.dot')

let isClick = true

readmoreBtn.addEventListener('click', () => {
  if (isClick) {
    dot.style.display = 'none'
    more.style.display = 'inline'
    readmoreBtn.textContent = 'Read Less'
    isClick = false
  } else if (!isClick) {
    dot.style.display = 'inline'
    more.style.display = 'none'
    readmoreBtn.textContent = 'Read More'
    isClick = true
  }
})
//Read More End

addSymptomBtn.addEventListener('click', () => {
  let value = selector.options[selector.selectedIndex].text

  let match

  if (sytompsList.children.length > 0) {
    for (let i = 0; i < sytompsList.children.length; i++) {
      if (sytompsList.children[i].innerHTML === value) {
        return (match = true)
      } else {
        match = false
      }
    }
  }

  let li = document.createElement('LI')
  li.textContent = value

  if (!match) {
    sytompsList.append(li)
  }
})

showResultBtn.addEventListener('click', () => {
  let symptom = []

  if (sytompsList.children.length < 1) {
    return
  }

  for (let i = 0; i < sytompsList.childNodes.length; i++) {
    symptom.push(sytompsList.childNodes[i].textContent)
  }

  for (let i = 0; i < symptom.length; i++) {
    let found = diseases.find((e) => {
      return e.Symtomps.some((e) => e === symptom[i])
    })

    if (found) {
      let match = false

      if (result.children.length > 0) {
        const diseasesTitle = document.querySelectorAll('.diseasesTitle')
        for (let i = 0; i < diseasesTitle.length; i++) {
          if (diseasesTitle[i].textContent == found.Disease) {
            match = true
          } else {
            match = false
          }
        }
      }

      let li = document.createElement('LI')
      let a = document.createElement('A')
      a.textContent = found.Disease
      a.classList.add('diseasesTitle')
      a.setAttribute('href', found.Link)
      a.setAttribute('target', '_blank')
      li.append(a)

      for (let item of found.Symtomps) {
        let p = document.createElement('P')
        p.textContent = item
        li.append(p)
      }

      if (!match) {
        result.append(li)
      } else if (match) {
        return
      }
    }
  }
  showResultBtn.disabled = true
  showResultBtn.style.pointerEvents = 'none'
  clearBtn.style.visibility = 'visible'
  resultText.textContent = 'Click a Disease to know more'
  resultContainer.style.display = 'block'
})

clearBtn.addEventListener('click', () => {
  let child = result.lastElementChild
  while (child) {
    result.removeChild(child)
    child = result.lastElementChild
  }

  let child2 = sytompsList.lastElementChild
  while (child2) {
    sytompsList.removeChild(child2)
    child2 = sytompsList.lastElementChild
  }

  showResultBtn.disabled = false
  showResultBtn.style.pointerEvents = 'auto'
  clearBtn.style.visibility = 'hidden'
  resultContainer.style.display = 'none'

  alert('cleared!')
})
