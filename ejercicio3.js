//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const lista = document.createElement('ul')
for (const elementos of countries1) {
  const elm = document.createElement('li')
  elm.textContent = elementos
  lista.appendChild(elm)
}
document.body.appendChild(lista)
//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elemento = document.querySelector('.fn-remove-me')
elemento.remove()

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const inser = document.querySelector('[data-function= "printHere]')
const listaCoche = document.createElement('ul')
for (const coches of cars) {
  const coche = document.createElement('li')
  coche.textContent = coches
  listaCoche.appendChild(coche)
  document.inser.appendChild(listaCoche)
}
//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const pais of countries2) {
  const caja = document.createElement('div')
  const nombre = document.createElement('h4')
  nombre.textContent = pais.title
  const imagen = document.createElement('img')
  imagen.url = pais.imgUrl
  caja.appendChild(nombre)
  caja.appendChild(imagen)
  document.body.appendChild(caja)
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const botonElimi = document.createElement('button')
botonElimi.textContent = 'Elimar'
function eliminaElemento() {
  const quitarDiv = document.querySelectorAll('div')
  for (let i = 0; i < quitarDiv, length - 1; i++) {
    elimina.remove()
  }
}
botonElimi.addEventListener('click', eliminaElemento)
document.body.appendChild(botonElimi)

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const quitarDiv2 = document.querySelectorAll('div')
for (const elimina of quitarDiv2) {
  const boton2 = document.createElement('button')
  boton2.textContent = 'Elimar'
  boton2.addEventListener('click', (eliminar) =>
    eliminar.parentElement.remove()
  )
  elimina.appendChild(boton2)
}
