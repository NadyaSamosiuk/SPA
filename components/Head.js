const charset = document.createElement('meta')
const viewport = document.createElement('meta')
const title = document.createElement('title')

charset.setAttribute('charset', 'UTF-8')
viewport.setAttribute('name', 'viewport')
viewport.setAttribute('content', 'width=device-width, initial-scale=1.0')

document.head.appendChild(charset)
document.head.appendChild(viewport)
document.head.appendChild(title)

export {title}