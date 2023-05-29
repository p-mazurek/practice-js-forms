const form = document.querySelector('form')
const formElements = form.elements

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
    if (pass1.value !== pass2.value || pass1.value === '' || pass2.value === '') {
        showError(errors, pass1)
        showError(errors, pass2)
    }
    if (!checkbox.checked) {
        showError(errors, checkbox)
    }

    if (errors.length === 0) {
        for (const el of formElements) {
            if (el.getAttribute('type') !== 'submit') {
                clearErrors(el)
            }
        }
        setTimeout(() => {
            alert('Formularz został wysłany ')
            form.reset()
        }, 0)

    }
}

const showError = function (errorsArray, element, color = 'tomato') {
    errorsArray.push(element)
    element.previousElementSibling.style.color = color
    element.style.border = `2px solid ${color}`
    element.style.color = color
}
const clearErrors = function (element, color = 'black') {
    element.previousElementSibling.style.color = color
    element.style.border = `1px solid ${color}`
    element.style.color = color

}

form.addEventListener('submit', checkFormValidation)