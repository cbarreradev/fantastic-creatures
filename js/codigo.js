function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min ) 
}
    function eleccion (jugada) {
    let resultado = "";
    if(jugador == 1) {
    resultado = "elijes piedra"
// alert ("elejiste piedra")

} else if (jugador == 2){
   resultado = "elijes  papel"
// alert ("elejiste papel")

} else if(jugador == 3) {
   resultado = "elijes  tijera"
// alert ("elejiste tijera")
} else{
alert("elijes perder")
} 
return resultado
}
// 1 es piedra , 2 es papel , 3 es tijera 
    let jugador = 0
    let pc = 0
    let triunfos = 0
    let perdidas = 0

while ( triunfos < 3 && perdidas < 3) { 
    pc =  aleatorio(1,3)
    jugador= prompt("elige: 1 para piedra, 2 para papel o 3 para tijera")
    // alert("elejiste"+ jugador)

alert("pc " + eleccion(pc))
alert ("tu " + eleccion(jugador))

// combate  
    if(pc == jugador){
    alert("EMPATE")
    } else if( jugador == 1 && pc == 3 ){
    alert("GANASTE")
    triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) { 
    alert("GANASTE")
    triunfos = triunfos + 1
    }else if (jugador == 3 && pc == 2) {
    alert("GANASTE")
    triunfos = triunfos + 1
    } else {
    alert("PERDISTE")
    perdidas = perdidas + 1
    }

}
alert("Ganastes " + triunfos + " veces. perdiste " + perdidas + " veces.")     