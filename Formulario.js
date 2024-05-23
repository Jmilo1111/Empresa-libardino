const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function () {
    const name = document.getElementById('name').value
    const lastname = document.getElementById('lastname').value
    const identificacion = document.getElementById('identificacion').value
    const email = document.getElementById('email').value
    const direccion = document.getElementById('direccion').value
    const telefono = document.getElementById('telefono').value
    
    console.log('el nombre es' + name)
    console.log('el apellido es'+ lastname)
    console.log('la identificacion es'+ identificacion)     
    console.log('el email es' + email)
    console.log('la direccion es'+ direccion)
    console.log('el telefono es' + telefono)
    alert="Tu compra fue realizada con exito"
})