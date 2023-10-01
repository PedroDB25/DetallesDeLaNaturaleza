import recuerdos from "../json/recuerdos.json" assert { type: "json" }

window.onload = init();

function init() {
    cagarCartas();
}

function cagarCartas() {
    let cajaCartas = document.querySelector("div#catalogo")
    for (const recuerdo of recuerdos) {

        let carta = document.createElement("div")
        carta.className = "card m-3"
        carta.style.width = "20%"
        carta.style.backgroundColor = recuerdo.tipo ==1 ? "#f3e2d1" : "#d1dff3"
        carta.style.border = "0px"

        let cartaimg = document.createElement("img")
        cartaimg.src = "static/img/recuerdos/" + recuerdo.link
        cartaimg.className = "card-img-top"
        cartaimg.alt = recuerdo.nombre

        let cartabody = document.createElement("div")
        cartabody.className = "card-body text-align-center"

        let titulo = document.createElement("h5")
        titulo.className = "card-title"
        titulo.innerHTML = recuerdo.nombre

        let descripcion = document.createElement("p")
        descripcion.className = "card-text"
        descripcion.innerHTML = (recuerdo.descripcion.length < 60 ? recuerdo.descripcion : (recuerdo.descripcion.substring(0,57) + "..."))

        let precio = document.createElement("p")
        precio.className = "card-text"
        precio.innerHTML = recuerdo.precio

        let link = document.createElement("a")
        link.className = "btn btn-primary"
        link.href = "#"
        link.innerHTML = "ver detalles"


        cartabody.appendChild(titulo)
        cartabody.appendChild(descripcion)
        cartabody.appendChild(precio)
        cartabody.appendChild(link)
        carta.appendChild(cartaimg)
        carta.appendChild(cartabody)

        cajaCartas.appendChild(carta)
    }

}