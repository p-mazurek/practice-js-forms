const imagesList = document.querySelector('.images-list')
const input = document.querySelector('input')

const showAllImages = function (e) {
    const filesList = Array.from(e.target.files)
    console.log(filesList)

    for (const file of filesList) {
        const reader = new FileReader();

        if (file && file.type.includes('image')) {
            reader.onload = (e) => {
                const imgSRC = e.target.result
                const fileSizeMB = (file.size / 1000000).toFixed(2)
                const container = renderImage(imgSRC, file.name, fileSizeMB)
                imagesList.appendChild(container)
            }
            reader.readAsDataURL(file)
        }

    }
}

const renderImage = function (src, name, size) {
    const prototypeContainer = document.querySelector(`.images-list__item--prototype`)
    const container = prototypeContainer.cloneNode(true)
    container.className = 'images-list__item'

    const header = container.querySelector('.images-list__item-name')
    header.innerText = name

    const img = container.querySelector('.images-list__item-img')
    img.setAttribute('src', src)

    const footer = container.querySelector('.images-list__item-size')
    footer.innerText = `${size} MB`


    return container
}

input.addEventListener('change', showAllImages)