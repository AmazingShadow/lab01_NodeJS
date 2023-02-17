const addLocalStorage = document.querySelector('.local-storage')
const addSessionStorage = document.querySelector('.session-storage')
const submitForm = document.querySelector('.form');
const addToLocalStorage = document.querySelector('.addLocalStorage')
const addToSession = document.querySelector('.addToSession')

var fullname = document.querySelector('#fullname');
var age = document.querySelector('#age')


addLocalStorage.addEventListener('click', () => {
    let value = localStorage.getItem('data')
    let arr
    let element = {
        name: fullname.value,
        age: age.value
    }

    if (value == null) {
        arr = [element]
    } else {
        arr = JSON.parse(value)
        arr.push(element)
    }

    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('data', JSON.stringify(arr))
    } else {
        document.write('Trình duyệt của bạn không hỗ trợ local storage');
    }
    submitForm.click()
})

window.onload = function() {
    let value = localStorage.getItem('data')
    let dataParse = JSON.parse(value)

    for (let i = 0; i < dataParse.length; i++) {
        let row = document.createElement('tr')
        let stt = document.createElement('th')
        let name = document.createElement('td')
        let age = document.createElement('td');
        
        stt.innerHTML = i+1
        stt.scope = 'row'
        name.innerHTML = dataParse[i].name
        age.innerHTML = dataParse[i].age
        row.appendChild(stt)
        row.appendChild(name)
        row.appendChild(age)
        
        addToLocalStorage.appendChild(row)
    }

    let valueSession = sessionStorage.getItem('data')
    let dataSessionParse = JSON.parse(valueSession)

    for (let j = 0; j < dataSessionParse.length; j++) {
        let row = document.createElement('tr')
        let stt = document.createElement('th')
        let name = document.createElement('td')
        let age = document.createElement('td');
        
        stt.innerHTML = j+1
        stt.scope = 'row'
        name.innerHTML = dataSessionParse[j].name
        age.innerHTML = dataSessionParse[j].age
        row.appendChild(stt)
        row.appendChild(name)
        row.appendChild(age)
        
        addToSession.appendChild(row)
    }
}

addSessionStorage.addEventListener('click', () => {
    let value = sessionStorage.getItem('data')
    let arr
    let element = {
        name: fullname.value,
        age: age.value
    }

    if (value == null) {
        arr = [element]
    } else {
        arr = JSON.parse(value)
        arr.push(element)
    }

    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem('data', JSON.stringify(arr))
    } else {
        document.write('Trình duyệt của bạn không hỗ trợ local storage');
    }
    submitForm.click()
})