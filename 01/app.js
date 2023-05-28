
const usersList = document.querySelector('.users-list')
const form = document.querySelector('form')
const formElements = form.elements

function addData() {
    const firstName = formElements["firstName"]
    const lastName = formElements["lastName"]

    return { firstName: firstName.value, lastName: lastName.value }

}

function renderUser() {
    const person = addData()

    const li = document.createElement('li')
    li.className = 'user-list__person'
    li.innerText = `${person.firstName} ${person.lastName}`

    usersList.appendChild(li)

    form.reset()
}

form.addEventListener('submit', e => {
    e.preventDefault()
    renderUser()
})