const selector = document.querySelector('#diseases')
const addSymptomBtn = document.querySelector('#addSymptom')
const sytompsList = document.querySelector('#symptomList')
const showResultBtn = document.querySelector('#showResult')
const result = document.querySelector('#result')
const clearBtn = document.querySelector('#clear')
const showMore = document.querySelector('#showMore')

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
    sytompsList.textContent = 'Select a symptom'
    setTimeout(() => {
      sytompsList.textContent = ''
    }, 1000)
  }

  for (let i = 0; i < sytompsList.children.length; i++) {
    symptom.push(sytompsList.children[i].innerHTML)
  }

  var child = sytompsList.lastElementChild
  while (child) {
    sytompsList.removeChild(child)
    child = sytompsList.lastElementChild
  }

  for (let item in symptom) {
    var check = diseases.find((e) => {
      return e.Symtomps.some((e) => {
        return e === symptom[item]
      })
    })
    let match = false

    if (result.children.length > 0) {
      for (let i = 0; i < result.children.length; i++) {
        if (result.children[i].textContent === check.Disease) {
          match = true
        } else {
          match = false
        }
      }
    }

    let li = document.createElement('LI')
    li.textContent = check.Disease

    li.addEventListener('click', (e) => {
      showMore.style.display = 'block'
      const text = e.target.innerText
      const find = diseases.find((e) => e.Disease === text)
      if (find) {
        const div = document.createElement('DIV')
        const a = document.createElement('a')
        const index = diseases.indexOf(find)
        diseases.splice(index, 1)
        a.textContent = find.Disease
        a.setAttribute('href', find.Link)
        a.setAttribute('target', '_blank')
        div.append(a)

        for (let item of find.Symtomps) {
          const p = document.createElement('P')
          p.textContent = item
          div.append(p)
        }

        showMore.append(div)
      }
    })

    if (!match) {
      result.append(li)
    } else if (match) {
      return
    }
  }
})

clearBtn.addEventListener('click', () => {
  var child = result.lastElementChild
  while (child) {
    result.removeChild(child)
    child = result.lastElementChild
  }

  var chilren = showMore.lastElementChild
  while (chilren) {
    showMore.removeChild(chilren)
    chilren = showMore.lastElementChild
  }

  showMore.style.display = 'none'
})
