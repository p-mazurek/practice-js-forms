const form = document.querySelector('form')
const messages = document.querySelector('.messages')

const checkInputsValidate = function (element, array) {
    const label = element.parentElement.innerText
    if (element.getAttribute('type') === 'number') {
        if ((!Number(element.value))) {
            array.push(`Pole ${label} musi być liczbą`)
        }
    }
    if (element.getAttribute('type') === 'text' && !element.hasAttribute('pattern')) {
        if (element.value.length === 0) {
            array.push(`Pole ${label} jest niepoprawne`)
        }
    }
    if (element.getAttribute('name') === 'voivodeship') {
        if (element.value.length === 0) {
            array.push(`Pole Województwo jest niepoprawne`)
        }
    }
    if (element.getAttribute('pattern')) {
        const reg = new RegExp("[0-9]{2}-[0-9]{3}")
        if (!reg.test(element.value)) {
            array.push(`Pole ${label} jest niepoprawne`)
        }
    }


}
const showError = function (array) {
    array.forEach(error => {
        const li = document.createElement('li')
        li.innerText = error
        messages.appendChild(li)
    });



}

const checkForm = function (e) {
    e.preventDefault()
    const errors = []

    for (const input of form.elements) {
        if (input.getAttribute('type') === 'submit') continue
        checkInputsValidate(input, errors)

    }
    messages.innerHTML = ''
    if (errors.length > 0) {
        showError(errors)
    } else {
        alert('Formularz wysłany!')
    }

}














form.addEventListener('submit', checkForm)