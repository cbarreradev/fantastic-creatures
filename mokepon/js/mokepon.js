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

let jugadorId = null
let animales = []
let animalitoEnemigo = []
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
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
let nombreHippoHaven = 'hippohaven'
let nombrecapipepo = 'capipepo'
let nombreRatihuey = 'Ratihuey'
let nombretucapalma = 'tucapalma'
let nombrelangostelvis = 'langostelvis'
let nombrepydos = 'pydos'

const anchoMaximoDelMapa = 800
if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}
alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.which = anchoDelMapa
mapa.height = alturaQueBuscamos

class Animalesfantasticos {

    constructor(nombre, foto, vida, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 60
        this.alto = 60
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
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

let hippoHaven = new Animalesfantasticos(nombreHippoHaven, "./imagenes/1/hipodoge.png", 5, "./imagenes/1/hipodoge.png")
let capipepo = new Animalesfantasticos(nombrecapipepo, "./imagenes/1/capipepo-.png", 5, "./imagenes/1/capipepo-.png")
let ratihuey = new Animalesfantasticos(nombreRatihuey, "./imagenes/1/ratigueya-.png", 5, "./imagenes/1/ratigueya-.png")
let langostelvis = new Animalesfantasticos(nombrelangostelvis, "./imagenes/1/langostelvis.png", 5, "./imagenes/1/langostelvis.png")
let tucapalma = new Animalesfantasticos(nombretucapalma, "./imagenes/1/tucapalma.png", 5, "./imagenes/1/tucapalma.png")
let pydos = new Animalesfantasticos(nombrepydos, "./imagenes/1/pydos.png", 5, "./imagenes/1/pydos.png")


const HIPPOHAVEN_ATAQUES = [
    {nombre: "🌊", id: "boton-agua"},
    {nombre: "🌊", id: "boton-agua"},
    {nombre: "🌊", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🪴", id: "boton-tierra"},
]
hippoHaven.ataques.push(...HIPPOHAVEN_ATAQUES)

const CAPIPEPO_ATAQUES = [
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌊", id: "boton-agua"},]
capipepo.ataques.push(...CAPIPEPO_ATAQUES)

const RATIHUEY_ATAQUES = [
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🌊", id: "boton-agua"},
]
ratihuey.ataques.push(...RATIHUEY_ATAQUES)

const LANGOSTELVIS_ATAQUES = [
    {nombre: "🌊", id: "boton-agua"},
    {nombre: "🌊", id: "boton-agua"},
    {nombre: "🌊", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🪴", id: "boton-tierra"},
]
langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)

const TUCAPALMA_ATAQUES = [
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌊", id: "boton-agua"},
]
tucapalma.ataques.push(...TUCAPALMA_ATAQUES)

const PYDOS_ATAQUES = [
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🌊", id: "boton-agua"},
]
pydos.ataques.push(...PYDOS_ATAQUES)


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

        inputHippoHaven = document.getElementById(nombreHippoHaven)
        inputcapipepo = document.getElementById(nombrecapipepo)
        inputRatihuey = document.getElementById(nombreRatihuey)
        inputtucapalma = document.getElementById(nombretucapalma)
        inputlangostelvis = document.getElementById(nombrelangostelvis)
        inputpydos = document.getElementById(nombrepydos)
    })
    botonMascotaJugador.addEventListener("click", selectionMascotaJugador)
    botonreiniciar.addEventListener("click", reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego() {
    fetch(`http://localhost:8080/unirse`)
        .then(function (res) {
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta,)
                        jugadorId = respuesta
                    })
            }
        })
}

function selectionMascotaJugador() {
    sectionseleccionarTuMascota.style.display = "none"
    sectionVerMapa.style.display = 'flex'

    if (inputHippoHaven.checked) {
        spanMascotaJugador.innerHTML = inputHippoHaven.id
        mascotaJugador = inputHippoHaven.id
    } else if (inputcapipepo.checked) {
        spanMascotaJugador.innerHTML = inputcapipepo.id
        mascotaJugador = inputcapipepo.id
    } else if (inputRatihuey.checked) {
        spanMascotaJugador.innerHTML = inputRatihuey.id
        mascotaJugador = inputRatihuey.id
    } else if (inputlangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputlangostelvis.id
        mascotaJugador = inputlangostelvis.id
    } else if (inputtucapalma.checked) {
        spanMascotaJugador.innerHTML = inputtucapalma.id
        mascotaJugador = inputtucapalma.id
    } else if (inputpydos.checked) {
        spanMascotaJugador.innerHTML = inputpydos.id
        mascotaJugador = inputpydos.id
    } else {
        alert("selecciona una mascota")
    }
    seleccionarAnimalFantastico1(mascotaJugador)
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()

}

function seleccionarAnimalFantastico1(mascotaJugador) {
    fetch(`http://localhost:8080/Animalesfantasticos/${jugadorId}`, {
        method: "post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            'animales_fantasticos': mascotaJugador
        })
    })
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
    console.log("ataquesAnimalesEnemigo")
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

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)
    animalitoEnemigo.forEach(function(animales){
        animales.pintarMascotafan()
    })

}

function enviarPosicion(x, y) {
    fetch(`http://localhost:8080/Animalesfantasticos/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function ({enemigos}) {
                        console.log(enemigos)
                        // map similar a (foreach lo que hace es iterar cada elemento de la lista) en cambio map se va utilizar la misma estructura por cada elemento de la lista  ejecutar esta funcion pero esto va a retornar un valor generando asi una nueva lista de la lista original
                        animalitoEnemigo = enemigos.map(function (enemigo) {
                            if (enemigo.animalito != undefined) {
                                const animalitoNombre = enemigo.animalito.nombre || ""
                                console.log(animalitoNombre)
                                if (animalitoNombre === nombreHippoHaven) {
                                    animalitoEnemigo = new Animalesfantasticos(nombreHippoHaven, "./imagenes/1/hipodoge.png", 5, "./imagenes/1/hipodoge.png")
                                } else if (animalitoNombre === nombrecapipepo) {
                                    animalitoEnemigo = new Animalesfantasticos(nombrecapipepo, "./imagenes/1/capipepo-.png", 5, "./imagenes/1/capipepo-.png")
                                } else if (animalitoNombre === nombreRatihuey) {
                                    animalitoEnemigo = new Animalesfantasticos(nombreRatihuey, "./imagenes/1/ratigueya-.png", 5, "./imagenes/1/ratigueya-.png")
                                } else if (animalitoNombre === nombrelangostelvis) {
                                    animalitoEnemigo = new Animalesfantasticos(nombrelangostelvis, "./imagenes/1/langostelvis.png", 5, "./imagenes/1/langostelvis.png")
                                } else if (animalitoNombre === nombretucapalma) {
                                    animalitoEnemigo = new Animalesfantasticos(nombretucapalma, "./imagenes/1/tucapalma.png", 5, "./imagenes/1/tucapalma.png")
                                } else if (animalitoNombre === nombrepydos) {
                                    animalitoEnemigo = new Animalesfantasticos(nombrepydos, "./imagenes/1/pydos.png", 5, "./imagenes/1/pydos.png")
                                }
                                animalitoEnemigo.x = enemigo.x
                                animalitoEnemigo.y = enemigo.y
                                // return esto lo que nos va es a devolver el animaloto enemigo es el animalito de la lista de if que hice aca arriba es la que me va a devolvere y asi voy a tener la lista de animalitos
                                return animalitoEnemigo
                            }
                        })
                    })
            }
        })
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
    mascotaJugadorObjeto = obternerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarcanvas, 50)
    window.addEventListener("keydown", sepresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

// esta funcion lo que hace es retornarnos el objeto completo del animal escojido
function obternerObjetoMascota() {
    for (let i = 0; i < animales.length; i++) {
        if (mascotaJugador === animales[i].nombre) {
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
    //clearintervalo(intervalo)se ejecuta cada 50 esto se limpia para que no se repita las jugadas de enemigo
    console.log("se detecto una colicion")
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    SelectionMascotaEnemigo(enemigo)
    console.log(SelectionMascotaEnemigo,)
    //alert("Hay colicion" + enemigo.nombre)

}

window.addEventListener("load", iniciarJuego);
