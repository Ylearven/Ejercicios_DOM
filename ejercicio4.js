//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const boton = document.createElement('button')
boton.id = 'btntoClick'
boton.addEventListener('click', (info) => console.log(info))
document.body.appendChild(boton)

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input = document.querySelector('focus')
input.addEventListener('focus', (valor) => console.log(valor.target.value))

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input2 = document.querySelector('input')
input.addEventListener('input', (valor) => console.log(valor.target.value))
