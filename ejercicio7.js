const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
const div = document.querySelector('[data-function= printHere')
const lista = document.createElement('ul')
for (const lugar of places) {
  const li = document.createElement('li')
  li.textContent = lugar
  lista.appendChild(li)
}
div.appendChild(lista)
