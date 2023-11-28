//variables golbales
let imgNivel1 = [{
    nombre: "maki",
    url: "img/maki.jpg"
},
{
    nombre: "panda",
    url: "img/panda.jpg"
},
{
    nombre: "geto",
    url: "img/getof.webp"
},
{
    nombre: "gojo",
    url: "img/gojo.jpg_large"
},
{
    nombre: "mei",
    url: "img/mei.webp"
},
{
    nombre: "sukuna",
    url: "img/sukuna.jpg"
},
{
    nombre: "maki",
    url: "img/maki.jpg"
},
{
    nombre: "panda",
    url: "img/panda.jpg"
},
{
    nombre: "geto",
    url: "img/getof.webp"
},
{
    nombre: "gojo",
    url: "img/gojo.jpg_large"
},
{
    nombre: "mei",
    url: "img/mei.webp"
},
{
    nombre: "sukuna",
    url: "img/sukuna.jpg"
}
]

//variables golbales
let imgNivel2 = [{
    nombre: "maki",
    url: "img/maki.jpg"
},
{
    nombre: "panda",
    url: "img/panda.jpg"
},

{
    nombre: "geto",
    url: "img/getof.webp"
},
{
    nombre: "gojo",
    url: "img/gojo.jpg_large"
},
{
    nombre: "mei",
    url: "img/mei.webp"
},
{
    nombre: "sukuna",
    url: "img/sukuna.jpg"
},
{
    nombre: "maki",
    url: "img/maki.jpg"
},
{
    nombre: "panda",
    url: "img/panda.jpg"
},
{
    nombre: "geto",
    url: "img/getof.webp"
},
{
    nombre: "gojo",
    url: "img/gojo.jpg_large"
},
{
    nombre: "mei",
    url: "img/mei.webp"
},
{
    nombre: "sukuna",
    url: "img/sukuna.jpg"
},
{
    nombre: "toji",
    url: "img/toji.jpg"
},
{
    nombre: "nobara",
    url: "img/nobara.webp"
},
{
    nombre: "toji",
    url: "img/toji.jpg"
},
{
    nombre: "nobara",
    url: "img/nobara.webp"
}
]

let imgNivel3 = [{
    nombre: "maki",
    url: "img/maki.jpg"
},
{
    nombre: "panda",
    url: "img/panda.jpg"
},

{
    nombre: "geto",
    url: "img/getof.webp"
},
{
    nombre: "gojo",
    url: "img/gojo.jpg_large"
},
{
    nombre: "mei",
    url: "img/mei.webp"
},
{
    nombre: "sukuna",
    url: "img/sukuna.jpg"
},
{
    nombre: "maki",
    url: "img/maki.jpg"
},
{
    nombre: "panda",
    url: "img/panda.jpg"
},
{
    nombre: "geto",
    url: "img/getof.webp"
},
{
    nombre: "gojo",
    url: "img/gojo.jpg_large"
},
{
    nombre: "mei",
    url: "img/mei.webp"
},
{
    nombre: "sukuna",
    url: "img/sukuna.jpg"
},
{
    nombre: "toji",
    url: "img/toji.jpg"
},
{
    nombre: "nobara",
    url: "img/nobara.webp"
},
{
    nombre: "toji",
    url: "img/toji.jpg"
},
{
    nombre: "nobara",
    url: "img/nobara.webp"
},
{
    nombre: "todo",
    url: "img/todo.jpg"
},
{
    nombre: "mahoraga",
    url: "img/maho.jpg"
},
{
    nombre: "todo",
    url: "img/todo.jpg"
},
{
    nombre: "mahoraga",
    url: "img/maho.jpg"
}
]

tablero = document.querySelector(".tablero")



let imagenNombre = [];
let imagenId = [];
let aciertos = 0;
let totalIntentos = 0;
let totalTiempo = 0;
let tiempoSobrante= 0;
let intentos = 0;
let tiempo = 60;
let nivel = 1;





let mostrarIntentos = document.querySelector(".Intentos");
let mostrarAciertos = document.querySelector(".aciertos");
let mostrarTiempo = document.querySelector(".Tiempo");
let tiempoTranscurrido;
let btn_iniciar = document.querySelector(".btn-iniciar")
let mostrarNivel = document.querySelector(".Nivel")
let imagenNivel;
let estoyJugando = false;
let selecSonido = new Audio("./sonidos/escoger.mp3");
let adivinarSonido = new Audio("./sonidos/adivinar.mp3");
let falloSonido = new Audio("./sonidos/fallo.mp3");
let nivelSonido = new Audio("./sonidos/level up.mp3");
let perderSonido = new Audio("./sonidos/perdio.mp3");
let MostrarJugador = document.querySelector(".Jugador");
let tabla = document.querySelector(".table tbody");
let fondo = document.querySelector("body");

document.addEventListener("DOMContentLoaded", ()=>{
    fondo.classList.add("fondo1")
    mostrarDatos()
})



btn_iniciar.addEventListener("click", function () {
    //comprobar que el juego este activo
    if (estoyJugando == false && nivel == 1) {
        ventanaModal()



    } else if (estoyJugando == false && nivel == 2) {
        estoyJugando = true;
        nivel2();
    } else if (estoyJugando == false && nivel == 3) {
        estoyJugando = true;
        nivel3();
    }



})




//setInterval()  esta se ejecuta en determinado tiempo infinitamente
//clearInterval() funciona para parar setInterval()







//funcion para agregar imagenes al tablero
function agregarImagen() {
    //agregar imagenes dependiendo del nivel
    if (nivel == 1) {
        imagenNivel = imgNivel1
    } else if (nivel == 2) {
        imagenNivel = imgNivel2
    } else if (nivel == 3) {
        imagenNivel = imgNivel3
    }


    //colocar imagenes aleatorias

    imagenNivel.sort(() => Math.random() - 0.5);


    imagenNivel.forEach((imagen, i) => {
        let div = document.createElement("div"); //crear el div
        div.className = "col-3";//agregar clase col-3 al div
        let img = document.createElement("img") //crear la etiqueta img
        img.className = "img-fluid alto-img my-2" //agregamos clase img-fluid a la etiqueta img
        img.id = i; //enumeracion de imagenes
        img.src = "img/ini.webp"; //agregar la ubicacion url a la imagen
        img.addEventListener("click", mostrarImg); //agregar evento click a la imagen
        div.appendChild(img); //agregar etiqueta img al div
        tablero.appendChild(div); // agregar los div al tablero
    });
}

//funcion para mostrar las imagenes ocultas

function mostrarImg() {
    selecSonido.play();
    let ImgID = this.getAttribute("id");
    // alert("# de imagen: " + ImgID)
    this.src = imagenNivel[ImgID].url; //modificar url de la imagen
    imagenNombre.push(imagenNivel[ImgID].nombre); // guardar los nombres de la imagen
    imagenId.push(ImgID); //guardar la posicion de la imagen

    if (imagenNombre.length == 2) {
        setTimeout(compararImg, 100)

    }
}

//fucnoin para comparar imagenes
function compararImg() {
    let imagenesTablero = document.querySelectorAll(".tablero > div > img");
    if (imagenNombre[0] == imagenNombre[1]) {
        if (imagenId[0] != imagenId[1]) {
            adivinarSonido.play();

            imagenesTablero[imagenId[0]].src = "img/geto.jpg"
            imagenesTablero[imagenId[1]].src = "img/geto.jpg"
            imagenesTablero[imagenId[0]].removeEventListener("click", mostrarImg)
            imagenesTablero[imagenId[1]].removeEventListener("click", mostrarImg)
            aciertos++
            mostrarAciertos.textContent = aciertos;
            intentos++
            mostrarIntentos.textContent = intentos;
        } else {
            alert("debes escoger otra imagen")
            imagenesTablero[imagenId[0]].src = "img/ini.webp"
            intentos++
            mostrarIntentos.textContent = intentos;
        }


    } else {
        falloSonido.play();

        imagenesTablero[imagenId[0]].src = "img/ini.webp"
        imagenesTablero[imagenId[1]].src = "img/ini.webp"
        intentos++
        mostrarIntentos.textContent = intentos;
    }

    imagenNombre = [];
    imagenId = [];

    //comprobar los aciertos esten completados
    if (nivel == 1 && aciertos == 6) {
        totalIntentos += intentos;
        totalTiempo += tiempo;
        tiempoSobrante += (60 - tiempo);
        obtenerDAtos();
        nivelSonido.play();
        tablero.innerHTML = "";
        nivel++
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 50;
        mostrarTiempo.textContent = tiempo;
        alert("ganaste")
        estoyJugando = false;


    } else if (nivel == 2 && aciertos == 8) {
        
        nivelSonido.play();
        tablero.innerHTML = "";
        nivel++
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 40;
        mostrarTiempo.textContent = tiempo;
        alert("ganaste")
        estoyJugando = false;
    } else if (nivel == 3 && aciertos == 10) {
        nivelSonido.play();
        alert("GANASTE EL JUEGO");
        location.reload();
    }
}



function nivel1() {
    //agregar las imagenes al tablero
    agregarImagen();
    mostrarNivel.textContent = nivel;

    //llamar el tiempo
    tiempoJuego();
}

function nivel2() {
    //agregar las imagenes al tablero
    agregarImagen();


    //llamar el tiempo
    tiempoJuego();
}

function nivel3() {
    //agregar las imagenes al tablero
    agregarImagen();


    //llamar el tiempo
    tiempoJuego();
}


function tiempoJuego() {
    tiempoTranscurrido = setInterval(() => {
        tiempo--;
        mostrarTiempo.textContent = tiempo
        if (tiempo == 10) {
            mostrarTiempo.classList.add("fast")

        } else if (tiempo == 0) {
            perderSonido.play();

            alert("Perdiste. FIN DEL TIEMPO")

            clearInterval(tiempoTranscurrido);
            location.reload();
        }
    }, 1000);


}


//mostrar ventana modal
function ventanaModal() {
    let modal = document.querySelector("#exampleModal")
    let cerrarModal = document.querySelectorAll(".cerrar")
    let player = document.querySelector(".nombre-jugador")
    let btnJugador = document.querySelector(".registro-jugador")

    //botones para cerrar la ventana modal
    cerrarModal.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.classList.remove("show")
            modal.style.display = "none";

        })
    })

    //mostrar ventana modal 
    modal.classList.add("show");
    modal.style.display = "block";

    //evento click al boton azul del modal
    btnJugador.addEventListener("click", () => {
        //mostrar el nombre en el tablero
        MostrarJugador.textContent = player.value;

        //cerrar el modal
        modal.classList.remove("show")
        modal.style.display = "none";

        //iniciar juego con el nombre
        estoyJugando = true;
        nivel1();
    })
}

