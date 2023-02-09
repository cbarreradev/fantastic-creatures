const sectionseleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("REINICIAR")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonreiniciar = document.getElementById("boton-reiniciar")
sectionReiniciar.style.display= "none"
const sectionseleccionarTuMascota = document.getElementById("selecciona-tu-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
let sectionMensajes=document.getElementById('Resultado')
const ataqueDelJugador = document.getElementById("Ataques-Del-jugador")
const ataqueDelEnemigo = document.getElementById("Ataques-Del-enemigos")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques =   document.getElementById("contenedorAtaques")



const fuego = "Fuego🔥";
const agua = "Agua💧";
const tierra = "Tierra🪴";

let animales = []
let ataqueJugador = []
let ataqueEnmigo  = []
let opcionDeAnimales
let inputHippoHaven
let inputcapipepo
let inputRatihuey
let inputtucapalma
let inputlangostelvis 
let inputpydos
let MascotaJugador
let ataquesAnimalesfan
let botonFuego 
let botonAgua 
let botonTierra
let ataquesAnimalesEnemigo
let botones = []
let VidasEnemigo = 3
let VidasJugador = 3

class Animalesfantasticos{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []}
}

let hippoHaven = new Animalesfantasticos("HippoHaven","./imagenes/1/hipodoge.png",5)
let capipepo = new Animalesfantasticos("Capipepo","./imagenes/1/capipepo-.png", 5)
let ratihuey = new Animalesfantasticos("Ratihuey","./imagenes/1/ratigueya-.png", 5)
let langostelvis = new Animalesfantasticos("Langostelvis","./imagenes/1/langostelvis.png",5)
let tucapalma = new Animalesfantasticos("Tucapalma","./imagenes/1/tucapalma.png", 5)
let pydos = new Animalesfantasticos("Pydos","./imagenes/1/pydos.png", 5)

hippoHaven.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🪴", id: "boton-tierra"},
)

capipepo.ataques.push(
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
)

ratihuey.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    
)

langostelvis.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🪴", id: "boton-tierra"},
)

tucapalma.ataques.push(
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
)

pydos.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
)

animales.push(hippoHaven,capipepo,ratihuey,langostelvis,tucapalma,pydos)

function iniciarJuego(){

    sectionseleccionarAtaque.style.display = "none"

        animales.forEach((animales) =>{
        opcionDeAnimales =` 
        <input type="radio" name="mascota" id= ${ animales.nombre} />
        <label  class="tarjeta-de-mokpon" for=${ animales.nombre}> 
        <p> ${ animales.nombre}</p>
        <img src=${ animales.foto}
        alt=${ animales.nombre}>
        </label> `
        contenedorTarjetas.innerHTML += opcionDeAnimales

    inputHippoHaven = document.getElementById("HippoHaven")
    inputcapipepo = document.getElementById("Capipepo")
    inputRatihuey  = document.getElementById("Ratihuey")
    inputtucapalma= document.getElementById("Tucapalma")
    inputlangostelvis = document.getElementById("Langostelvis")
    inputpydos= document.getElementById("Pydos")
    } ) 
    botonMascotaJugador.addEventListener("click",selectionMascotaJugador)
    botonreiniciar.addEventListener("click", reiniciarJuego)
 }

function selectionMascotaJugador () {
    sectionseleccionarTuMascota.style.display = "none"
    sectionseleccionarAtaque.style.display = "flex"
    
    if (inputHippoHaven.checked)
    {spanMascotaJugador.innerHTML = inputHippoHaven.id
        MascotaJugador =  inputHippoHaven.id}
    else if (inputcapipepo.checked) 
    {spanMascotaJugador.innerHTML = inputcapipepo.id
        MascotaJugador =  inputcapipepo.id}
    else if (inputRatihuey.checked)
    {spanMascotaJugador.innerHTML = inputRatihuey.id
        MascotaJugador = inputRatihuey.id}
    else if (inputlangostelvis.checked) 
    {spanMascotaJugador.innerHTML = inputlangostelvis.id
        MascotaJugador = inputlangostelvis.id}
    else if (inputtucapalma.checked) 
    {spanMascotaJugador.innerHTML = inputtucapalma.id
        MascotaJugador = inputtucapalma.id}
    else if (inputpydos.checked) 
    {spanMascotaJugador.innerHTML = inputpydos.id  
        MascotaJugador = inputpydos.id}
    else {alert("selecciona una mascota") }
    
    extraerAtaques(MascotaJugador)
    SelectionMascotaEnemigo()

}
function extraerAtaques(MascotaJugador) {let ataques
for (let i = 0; i < animales.length;i++) {
    if (MascotaJugador === animales[i].nombre) {
        ataques = animales[i].ataques
    } 
  }
 mostrarAtaques(ataques)
}
function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{ 
        ataquesAnimalesfan = `
        <button  id="${ataque.id}" class="boton-ataque BAtaque">${ataque.nombre}</button> <br>   
        `
        contenedorAtaques.innerHTML += ataquesAnimalesfan
    })

    botones = document.querySelectorAll(".BAtaque")
    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")

}
function secuenciaAtaques() {
    botones.forEach((boton) => {
        boton.addEventListener("click",(e) => {
            if (e.target.textcontent === "🔥") {
                ataqueJugador.push("Fuego")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"      
            } else if (e.target.textcontent === "💧"){
                ataqueJugador.push("Agua")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"  
            } else {
                ataqueJugador.push("Tierra")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"  
            }
            ataqueAleatorioEnemigo ()
        })
    })
}
 function SelectionMascotaEnemigo() {
    let comandoAleatorio = aleatorio(0, animales.length - 1)
    spanMascotaEnemigo.innerHTML = animales[comandoAleatorio].nombre
     ataquesAnimalesEnemigo = animales[comandoAleatorio].ataques
    secuenciaAtaques()
 }
function ataqueAleatorioEnemigo () {
let ataqueAleatorio = aleatorio (0,ataquesAnimalesEnemigo.length -1)
    if (ataqueAleatorio == 0||ataqueAleatorio == 1){
        ataqueEnmigo.push("Fuego")}
    else if (ataqueAleatorio == 3||ataqueAleatorio == 4)
    {ataqueEnmigo.push("Agua")}
    else{ataqueEnmigo.push("Tierra")}
    console.log(ataqueEnmigo)
    iniciarPelea()
}
function iniciarPelea(){
}
function combate() {
  
    if(ataqueEnmigo == ataqueJugador) {
        crearmensaje("EMPATE 🥹")

    } else if( ataqueJugador == fuego && ataqueEnmigo == tierra){
        crearmensaje("GANASTE 🥳")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo

    } else if (ataqueJugador ==agua && ataqueEnmigo == fuego) { 
        crearmensaje("GANASTE 🥳")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo

    }else if (ataqueJugador == tierra && ataqueEnmigo == agua) {
        crearmensaje("GANASTE 🥳")
        VidasEnemigo--
        spanVidasEnemigo.innerHTML = VidasEnemigo

    } else {
        crearmensaje("PERDISTE 😭")
        VidasJugador--
        spanVidasJugador.innerHTML = VidasJugador
        
    }
    revisarvidas()
  
}
function revisarvidas (){
    if(VidasEnemigo == 0) {
        crearmensajefinal("FELICITACIONES GANASTE 🥳")
    }  else if (VidasJugador == 0){
        crearmensajefinal (" LO SIENTO PERDISTE 😭")
    }
}

function crearmensaje(resultado) {
    
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo .innerHTML =ataqueEnmigo

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}
function crearmensajefinal(resltadofianl)
    {sectionMensajes.innerHTML = resltadofianl

        botonFuego.disabled = true
        botonAgua.disabled = true
        botonTierra.disabled = true

    sectionReiniciar.style.display = "block"}



function reiniciarJuego() {
    location.reload()
}


function aleatorio(min,max) {
return Math.floor( Math.random()* ( max - min + 1 ) + min)
}

  
    window.addEventListener("load",iniciarJuego);
