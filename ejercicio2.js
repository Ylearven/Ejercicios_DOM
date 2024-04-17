//1.1 Inserta dinamicamente en un html un div vacio con javascript.
let nuevodiv = document.createElement('div')
document.body.appendChild('nuevodiv')
//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let NuD = document.createElement('div')
const parrafo = document.createElement('p')
document.appendChild(NuD)
document.body.appendChild('NuD')
//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let NuD2 = document.createElement('div')
for (let i = o; i < 6; i++) {
  const parrafo2 = document.createElement('p')
  nuD2.appendChild(parrafo2)
}
document.body.appendChild('NuD2')
//1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let din = documet.createElement('p')
din.textContent = 'Soy dinámico'

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let instH2 = document.querySelector('.fn-insert-here')
instH2.textContent = 'wubba Lubba dub dub'
//1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const lista = document.createElement('ul')
const lisApp = docuemnt.createElement('li')
for (let i = 0; i < apps.length; i++) {
  lisApp.textContent = i
  lista.appendChild(lisApp)
}
document.body.appendChild('lista')

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const remove = document.querySelector('.fn-remove-me')
for (const eliminar of remove) {
  eliminar.remove()
}
//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll('div')
const txt = document.createElement('p')
txt.textContent = 'Voy en medio'
document.body.insertBefore(txt, divs[1])

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const here = document.querySelector('div.fn-insert-here')
for (const nuevop of here) {
  const Np = document.createElement('p')
  Np.textContent = ' Voy dentro'
  nuevop.appendChild(Np)
}
