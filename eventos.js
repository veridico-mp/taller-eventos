//Crea un nuevo archivo eventos.js, asocia el mismo al HTML.
//En eventos.js agrega un manejador de eventos para el "click" en el div utilizando el método addEventListener. Debes programar que al dar click en el div salga una alerta con el texto "Hola! Soy el div".
document.addEventListener('DOMContentLoaded', function () {//En eventos.js agrega un manejador de eventos para el "click" en el div utilizando el método addEventListener. Debes programar que al dar click en el div salga una alerta con el texto "Hola! Soy el div".
    const contenedor = document.getElementById('eldiv');
    const boton = document.getElementById('boton');
    let reg = "";
    boton.addEventListener('click', function(){
        reg="1";
    });
    contenedor.addEventListener('click', function () {
        if (reg==="1"){
             alert("Hola!");
             reg="";
        }else {
            alert('Hola! Soy el div');
        }
    })
})