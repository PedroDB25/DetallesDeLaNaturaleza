import recuerdos from "../json/recuerdos.json" assert { type: "json" }

window.onload = init();

function init() {
    cargarCartas();
    añadirEventos()
}

function añadirEventos() {
    [...document.querySelectorAll(".cambioSeccion")].forEach(el => el.addEventListener("click", cambiarPagina));
    let tipo = 1;
    [...document.querySelectorAll(".SelectorRecuerdos")].forEach(el => el.addEventListener("click", cargarCartas));
}
function cambiarPagina() {
    document.querySelectorAll("section").forEach(el => el.classList.add("hidden"))
    document.querySelector(`section#${this.id}`).classList.remove("hidden")
}

function cargarCartas(tipoRecuerdo) {
    tipoRecuerdo = this?.dataset.recuerdo
    tipoRecuerdo = tipoRecuerdo ?? 1
    let cajaCartas = document.querySelector("div#catalogo")
    cajaCartas.innerHTML = ""
    for (const recuerdo of recuerdos) {
        if (tipoRecuerdo != recuerdo.tipo) { continue }

        let cajaCarta = document.createElement("div")
        cajaCarta.className = "col-12 col-sm-6 col-md-4 col-lg-3 pt-2 pb-2"

        let carta = document.createElement("div")
        carta.className = "card p-3"
        carta.style.width = "100%"
        carta.style.backgroundColor = recuerdo.tipo == 1 ? "#f3e2d1" : "#d1dff3"
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
        descripcion.innerHTML = (recuerdo.descripcion.length < 60 ? recuerdo.descripcion : (recuerdo.descripcion.substring(0, 57) + "..."))

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

        cajaCarta.appendChild(carta)

        cajaCartas.appendChild(cajaCarta)
    }

}