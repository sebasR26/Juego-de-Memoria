//variables globales
let nombreJugador = document.querySelector(".Jugador")
let listaJugadores = "jugadores"; 

//funcion para tomar los datos 

function obtenerDAtos(){
    //crear objeto para los datos del jugador
    let datosJugador = {
        "nombre": nombreJugador.textContent,
        "intentos": totalIntentos,
        "tiempo_total": totalTiempo,
        "tiempo_sobrante": tiempoSobrante
    }

    //mostrar los datos en consola

    console.log(datosJugador);

    guardarDatos(datosJugador);

}

//funcion para guardar datos en localstorage

function guardarDatos(datos){
    //array para los datos antiguos y nuevos
    let jugador = [];
    //tomar los datos en localstorage previamente guardados
    let datosPrevios =JSON.parse(localStorage.getItem(listaJugadores))
    if(datosPrevios != null){
        jugador = datosPrevios;
    }

    //guardar nuevo jugador en array
    jugador.push(datos);
    //guardar todos los datos en localstorage
    localStorage.setItem(listaJugadores, JSON.stringify(jugador))
}

//funcion para mostrar datos

function mostrarDatos(){
    //array para los datos antiguos y nuevos
    let jugador = [];
    //tomar los datos en localstorage previamente guardados
    let datosPrevios =JSON.parse(localStorage.getItem(listaJugadores))
    if(datosPrevios != null){
        jugador = datosPrevios;
    }

    //organizar los datos
    jugador.sort((a,b)=>{
        if(a.tiempo_total < b.tiempo_total){
            return -1;
        }
        if(a.intentos < b.intentos){
            return 1
        }
        
    })

    //mostrar los datos en la tabla
    jugador.forEach((player,i) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td> ${i+1} </td>
            <td> ${player.nombre} </td>
            <td> ${player.tiempo_total} </td>
            <td> ${player.intentos} </td>
            <td> ${player.tiempo_sobrante} </td>
        `
        tabla.appendChild(fila);
    });
}