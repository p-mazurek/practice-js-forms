const form = document.querySelector('form')

const checkFormValidation = function (e) {
    e.preventDefault()
    const email = e.target.elements.login
    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
    const pass1 = e.target.elements.pass1
    const pass2 = e.target.elements.pass2
    const checkbox = e.target.elements.accept
    const errors = []

    if (!reg.test(email.value)) {
        showError(errors, email)
    }
    if (pass1.value !== pass2.value) {
        showError(errors, pass1)
        showError(errors, pass2)
    }
    if (!checkbox.checked) {
        showError(errors, checkbox)
    }

    if (errors.length === 0) alert('Formularz został wysłany ')
}

const showError = function (errorsArray, element) {
    errorsArray.push(element)
    element.previousElementSibling.style.color = 'tomato'
    element.style.border = '2px solid tomato'
    element.style.color = 'tomato'
}

form.addEventListener('submit', checkFormValidation)