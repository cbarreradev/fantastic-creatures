const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const player = []

class Jugador {
    constructor(id) {
        this.id = id
    }

    asignarAnimalito(animalito) {
        this.animalito = animalito
    }
    actualizarPosicion(x, y) {
        this.x = x
        this.y = y
    }
}

class Animalito {
    constructor(nombre) {
        this.nombre = nombre
    }

}
//Math.random esta sintansis que se puso es un templay hace que el numero se convierta en un acadena de texto para que elIDtodo el tiempo se maneje como cadena de texto //
app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    player.push(jugador)

    res.setHeader('Access-Control-Allow-Origin', "*")
    res.send(id)
})

app.post("/Animalesfantasticos/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.animales_fantasticos || ""
    const animalito = new Animalito(nombre)

    const jugadorIndex = player.findIndex((jugador) => jugadorId === jugador.id)
    console.log(88888)
    if (jugadorIndex >= 0) {
        player[jugadorIndex].asignarAnimalito(animalito)
        console.log(player[jugadorIndex].animalito.nombre)
        console.log(nombre)
    }
    console.log(player)
    console.log(jugadorId)
    res.end()
})
app.post("/Animalesfantasticos/:jugadorId/posicion",(req,res) => {
    const jugadorId =req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0
    const jugadorIndex = player.findIndex((jugador) => jugadorId === jugador.id)
    if (jugadorIndex >= 0) {
        player[jugadorIndex].actualizarPosicion(x,y)
    }
    const enemigos = player.filter((jugador) => jugadorId !== jugador.id)
    res.send({
        enemigos
    })
})

app.listen(8080, () => {
    console.log("servidor funcionando")
})