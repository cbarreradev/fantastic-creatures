const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("REINICIAR")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonreiniciar = document.getElementById("boton-reiniciar")
sectionReiniciar.style.display = "none"
const sectionseleccionarTuMascota = document.getElementById("selecciona-tu-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
let sectionMensajes = document.getElementById('Resultado')
const ataqueDelJugador = document.getElementById("Ataques-Del-jugador")
const ataqueDelEnemigo = document.getElementById("Ataques-Del-enemigos")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

const fuego = "Fuego";
const agua = "Agua";
const tierra = "Tierra";

let animales = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeAnimales
let inputHippoHaven
let inputcapipepo
let inputRatihuey
let inputtucapalma
let inputlangostelvis
let inputpydos
let mascotaJugador
let mascotaJugadorObjeto
let ataquesAnimalesfan
let botonFuego
let botonAgua
let botonTierra
let ataquesAnimalesEnemigo
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let VidasEnemigo = 3
let VidasJugador = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './imagenes/1/mapa.png'

class Animalesfantasticos {

    constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    // esta parte se declara esta funcion para pintar la mascota y se coloca el lienzo el this se usa para los tributos del objeto
    pintarMascotafan() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
}

let hippoHaven = new Animalesfantasticos("HippoHaven", "./imagenes/1/hipodoge.png", 5, "./imagenes/1/hipodoge.png")
let capipepo = new Animalesfantasticos("Capipepo", "./imagenes/1/capipepo-.png", 5, "./imagenes/1/capipepo-.png")
let ratihuey = new Animalesfantasticos("Ratihuey", "./imagenes/1/ratigueya-.png", 5, "./imagenes/1/ratigueya-.png")
let langostelvis = new Animalesfantasticos("Langostelvis", "./imagenes/1/langostelvis.png", 5, "./imagenes/1/langostelvis.png")
let tucapalma = new Animalesfantasticos("Tucapalma", "./imagenes/1/tucapalma.png", 5, "./imagenes/1/tucapalma.png")
let pydos = new Animalesfantasticos("Pydos", "./imagenes/1/pydos.png", 5, "./imagenes/1/pydos.png")

// los animales enemigos del mapa los numeros del final es la poccion que aparece los Enemigos en el mapa
let hippoHavenEnemigo = new Animalesfantasticos("HippoHaven", "./imagenes/1/hipodoge.png", 5, "./imagenes/1/hipodoge.png", 800, 150)
let capipepoEnemigo = new Animalesfantasticos("Capipepo", "./imagenes/1/capipepo-.png", 5, "./imagenes/1/capipepo-.png", 600, 169)
let ratihueyEnemigo = new Animalesfantasticos("Ratihuey", "./imagenes/1/ratigueya-.png", 5, "./imagenes/1/ratigueya-.png", 150, 160)
let langostelvisEnemigo = new Animalesfantasticos("Langostelvis", "./imagenes/1/langostelvis.png", 5, "./imagenes/1/langostelvis.png", 500, 100)
let tucapalmaEnemigo = new Animalesfantasticos("Tucapalma", "./imagenes/1/tucapalma.png", 5, "./imagenes/1/tucapalma.png", 300, 220)
let pydosEnemigo = new Animalesfantasticos("Pydos", "./imagenes/1/pydos.png", 5, "./imagenes/1/pydos.png", 500, 350)

hippoHaven.ataques.push(
    {nombre: "🌊", id: "boton-agua"},
    {nombre: "🌊", id: "boton-agua"},
    {nombre: "🌊", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🪴", id: "boton-tierra"},
)
capipepo.ataques.push(
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌊", id: "boton-agua"},
)
ratihuey.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🌊", id: "boton-agua"},
)
langostelvis.ataques.push(
    {nombre: "🌊", id: "boton-agua"},
    {nombre: "🌊", id: "boton-agua"},
    {nombre: "🌊", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🪴", id: "boton-tierra"},
)
tucapalma.ataques.push(
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌊", id: "boton-agua"},
)
pydos.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🌊", id: "boton-agua"},
)
animales.push(hippoHaven, capipepo, ratihuey, langostelvis, tucapalma, pydos)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    sectionVerMapa.style.display = "none"
    animales.forEach((animales) => {
        opcionDeAnimales = ` 
        <input type="radio" name="mascota" id= ${animales.nombre} />
        <label  class="tarjeta-de-mokpon" for=${animales.nombre}> 
        <p> ${animales.nombre}</p>
        <img src=${animales.foto}
        alt=${animales.nombre}>
        </label> `
        contenedorTarjetas.innerHTML += opcionDeAnimales

        inputHippoHaven = document.getElementById("HippoHaven")
        inputcapipepo = document.getElementById("Capipepo")
        inputRatihuey = document.getElementById("Ratihuey")
        inputtucapalma = document.getElementById("Tucapalma")
        inputlangostelvis = document.getElementById("Langostelvis")
        inputpydos = document.getElementById("Pydos")
    })
    botonMascotaJugador.addEventListener("click", selectionMascotaJugador)
    botonreiniciar.addEventListener("click", reiniciarJuego)
}

function selectionMascotaJugador() {
    sectionseleccionarTuMascota.style.display = "none"
    sectionVerMapa.style.display = 'flex'

    if (inputHippoHaven.checked) {
        spanMascotaJugador.innerHTML = inputHippoHaven.id
        MascotaJugador = inputHippoHaven.id
    } else if (inputcapipepo.checked) {
        spanMascotaJugador.innerHTML = inputcapipepo.id
        MascotaJugador = inputcapipepo.id
    } else if (inputRatihuey.checked) {
        spanMascotaJugador.innerHTML = inputRatihuey.id
        MascotaJugador = inputRatihuey.id
    } else if (inputlangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputlangostelvis.id
        MascotaJugador = inputlangostelvis.id
    } else if (inputtucapalma.checked) {
        spanMascotaJugador.innerHTML = inputtucapalma.id
        MascotaJugador = inputtucapalma.id
    } else if (inputpydos.checked) {
        spanMascotaJugador.innerHTML = inputpydos.id
        MascotaJugador = inputpydos.id
    } else {
        alert("selecciona una mascota")
    }

    extraerAtaques(MascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()

}

function extraerAtaques(MascotaJugador) {
    let ataques
    for (let i = 0; i < animales.length; i++) {
        if (MascotaJugador === animales[i].nombre) {
            ataques = animales[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesAnimalesfan = ` <button  id="${ataque.id}" class="boton-ataque BAtaque">${ataque.nombre}</button> <br>`
        contenedorAtaques.innerHTML += ataquesAnimalesfan
    })
    botones = document.querySelectorAll(".BAtaque")
    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
}

function secuenciaAtaques() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.innerText === "🔥") {
                ataqueJugador.push(fuego)
                e.target.disabled = true;
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if (e.target.innerText === "🌊") {
                ataqueJugador.push(agua)
                e.target.disabled = true;
                boton.style.background = "#112f58"
                boton.disabled = true
            } else {
                ataqueJugador.push(tierra)
                e.target.disabled = true;
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function SelectionMascotaEnemigo(enemigo) {
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesAnimalesEnemigo = enemigo.ataques
    secuenciaAtaques()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesAnimalesEnemigo.length - 1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push(fuego)
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push(agua)
    } else {
        ataqueEnemigo.push(tierra)
    }

    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    console.log(ataqueJugador, ataqueEnemigo)
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearmensaje("EMPATE 🥹")
        } else if (ataqueJugador[index] === fuego && ataqueEnemigo[index] === tierra) {
            indexAmbosOponentes(index, index)
            crearmensaje("GANASTE 🥳")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === agua && ataqueEnemigo[index] === fuego) {
            indexAmbosOponentes(index, index)
            crearmensaje("GANASTE 🥳")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === tierra && ataqueEnemigo[index] === agua) {
            indexAmbosOponentes(index, index)
            crearmensaje("GANASTE 🥳")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearmensaje("PERDISTE 😭")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarvidas()
}

function revisarvidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearmensajefinal("ESTO FUE UN EMPATE!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearmensajefinal("FELICITACIONES GANASTE 🥳")
    } else {
        crearmensajefinal(" LO SIENTO PERDISTE 😭")
    }
}

function crearmensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearmensajefinal(resltadofianl) {
    sectionMensajes.innerHTML = resltadofianl

    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarcanvas() {

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )

    //se va usar el objeto que  se creo de la mascota del jugador y de ese objeto se llama a la funcion pintarMascotafan que es el enemigo
    mascotaJugadorObjeto.pintarMascotafan()
    hippoHavenEnemigo.pintarMascotafan()
    capipepoEnemigo.pintarMascotafan()
    ratihueyEnemigo.pintarMascotafan()
    langostelvisEnemigo.pintarMascotafan()
    tucapalmaEnemigo.pintarMascotafan()
    pydosEnemigo.pintarMascotafan()

    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColicion(capipepoEnemigo)
        revisarColicion(hippoHavenEnemigo)
        revisarColicion(ratihueyEnemigo)
        revisarColicion(langostelvisEnemigo)
        revisarColicion(tucapalmaEnemigo)
        revisarColicion(pydosEnemigo)


    }

}

//funcion para dar movimiento al personaje en canvas
function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function detenerMovimiento() {

    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

//se le asigno movimiento a las teclas switch es hacer un sawnchis de if. el break es como el que para la funcion, un default es algo que hace por defecto como el else.
function sepresionoUnaTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown" :
            moverAbajo()
            break
        case "ArrowLeft" :
            moverIzquierda()
            break
        case "ArrowRight" :
            moverDerecha()
            break
        default:
            break;

    }

}

function iniciarMapa() {
    mapa.width = 700
    mapa.height = 500
    mascotaJugadorObjeto = obternerObjetoMascota(MascotaJugador)
    intervalo = setInterval(pintarcanvas, 50)
    window.addEventListener("keydown", sepresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

// esta funcion lo que hace es retornarnos el objeto completo del animal escojido
function obternerObjetoMascota() {
    for (let i = 0; i < animales.length; i++) {
        if (MascotaJugador === animales[i].nombre) {
            return animales[i]
        }
    }
}

// evita la colicion
function revisarColicion(enemigo) {
    // esto nos va a decir si se quiere sacar la izq y derecha del enemigo, que es x nos dice donde comienza que es la parte izq del enemigo a eso le sumamos el ancho para determinar la derecha
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x
// mascota
    const arribaMascota =
        mascotaJugadorObjeto.y
    const abajoMascota =
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota =
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota =
        mascotaJugadorObjeto.x


    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    SelectionMascotaEnemigo(enemigo)
    console.log(SelectionMascotaEnemigo,)
    //alert("Hay colicion" + enemigo.nombre)

}

window.addEventListener("load", iniciarJuego);
