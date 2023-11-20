//variables golbales
let imgNivel1 = [{
    nombre: "all might",
    url: "img/all.jpeg"
},
{
    nombre: "panda",
    url: "img/rem.jpg"
},
{
    nombre: "makima",
    url: "img/makima.webp"
},
{
    nombre: "gojo",
    url: "img/gojo.jpg_large"
},
{
    nombre: "reze",
    url: "img/reze1.jpg"
},
{
    nombre: "sukuna",
    url: "img/sukuna.jpg"
},
{
    nombre: "all might",
    url: "img/all.jpeg"
},
{
    nombre: "panda",
    url: "img/rem.jpg"
},
{
    nombre: "makima",
    url: "img/makima.webp"
},
{
    nombre: "gojo",
    url: "img/gojo.jpg_large"
},
{
    nombre: "reze",
    url: "img/reze1.jpg"
},
{
    nombre: "sukuna",
    url: "img/sukuna.jpg"
}
]

//variables golbales
let imgNivel2 = [{
    nombre: "all might",
    url: "img/all.jpeg"
},
{
    nombre: "panda",
    url: "img/rem.jpg"
},

{
    nombre: "makima",
    url: "img/makima.webp"
},
{
    nombre: "gojo",
    url: "img/gojo.jpg_large"
},
{
    nombre: "reze",
    url: "img/reze1.jpg"
},
{
    nombre: "sukuna",
    url: "img/sukuna.jpg"
},
{
    nombre: "all might",
    url: "img/all.jpeg"
},
{
    nombre: "panda",
    url: "img/rem.jpg"
},
{
    nombre: "makima",
    url: "img/makima.webp"
},
{
    nombre: "gojo",
    url: "img/gojo.jpg_large"
},
{
    nombre: "reze",
    url: "img/reze1.jpg"
},
{
    nombre: "sukuna",
    url: "img/sukuna.jpg"
},
{
    nombre: "gohan",
    url: "img/gohan.jpg"
},
{
    nombre: "baki",
    url: "img/baki.jpeg"
},
{
    nombre: "gohan",
    url: "img/gohan.jpg"
},
{
    nombre: "baki",
    url: "img/baki.jpeg"
}
]

tablero = document.querySelector(".tablero")

let imagenNombre = [];
let imagenId = [];
let aciertos = 0;
let intentos = 0;
let tiempo = 20;
let nivel = 1;

let mostrarIntentos = document.querySelector(".Intentos");
let mostrarAciertos = document.querySelector(".aciertos");
let mostrarTiempo = document.querySelector(".Tiempo");
let tiempoTranscurrido;
let btn_iniciar = document.querySelector(".btn-iniciar")
let mostrarNivel = document.querySelector(".Nivel")
let imagenNivel;

//agregar el evento para iniciar el juego

btn_iniciar.addEventListener("click", function(){
    tiempoTranscurrido = setInterval(()=>{
        tiempo--;
        mostrarTiempo.textContent = tiempo
        if(tiempo == 10){
            mostrarTiempo.classList.add("fast")

        }else if(tiempo == 0){
            alert("Perdiste. FIN DEL TIEMPO")
            clearInterval(tiempoTranscurrido);
            location.reload();
        }
    }, 1000);

    agregarImagen();
    mostrarNivel.textContent = nivel;

})



//setInterval()  esta se ejecuta en determinado tiempo infinitamente
//clearInterval() funciona para parar setInterval()

 





//funcion para agregar imagenes al tablero
function agregarImagen() {
    //agregar imagenes dependiendo del nivel
    if(nivel == 1){
        imagenNivel = imgNivel1
    }else if(nivel == 2){
        imagenNivel = imgNivel2
    }


    imagenNivel.forEach((imagen, i) => {
        let div = document.createElement("div"); //crear el div
        div.className = "col-3";//agregar clase col-3 al div
        let img = document.createElement("img") //crear la etiqueta img
        img.className = "img-fluid alto-img my-2" //agregamos clase img-fluid a la etiqueta img
        img.id = i; //enumeracion de imagenes
        img.src = "img/panda.jpg"; //agregar la ubicacion url a la imagen
        img.addEventListener("click", mostrarImg); //agregar evento click a la imagen
        div.appendChild(img); //agregar etiqueta img al div
        tablero.appendChild(div); // agregar los div al tablero
    });
}

//funcion para mostrar las imagenes ocultas

function mostrarImg() {
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
            alert("felicidades adivinaste una imagen")
            imagenesTablero[imagenId[0]].src = "img/gano.png"
            imagenesTablero[imagenId[1]].src = "img/gano.png"
            imagenesTablero[imagenId[0]].removeEventListener("click", mostrarImg)
            imagenesTablero[imagenId[1]].removeEventListener("click", mostrarImg)
            aciertos++
            mostrarAciertos.textContent = aciertos;
            intentos++
            mostrarIntentos.textContent = intentos;
        } else {
            alert("debes escoger otra imagen")
            imagenesTablero[imagenId[0]].src = "img/panda.jpg"
            intentos++
            mostrarIntentos.textContent = intentos;
        }


    } else {
        alert("Mala suerte")
        imagenesTablero[imagenId[0]].src = "img/panda.jpg"
        imagenesTablero[imagenId[1]].src = "img/panda.jpg"
        intentos++
        mostrarIntentos.textContent = intentos;
    }

    imagenNombre = [];
    imagenId = [];

    //comprobar los aciertos esten completados
    if(nivel == 1 && aciertos == 6){
        nivel ++
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 50;
        mostrarTiempo.textContent = tiempo;

        if(nivel == 2 && aciertos==8){
            alert("ganaste")
        }
    }
}

