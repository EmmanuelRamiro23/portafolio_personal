const recorrido = document.querySelector(".dropdown-menu");
const elementos = recorrido.getElementsByClassName("item-menu");
const principal = document.querySelector(".main");
//Me devuelve los nodos de u elementos con estas clases
const valoresprin = principal.querySelectorAll(".item-main");

// Si quieres mostrar uno por defecto
valoresprin[0].style.display = 'flex';

// En esta parte mostramos o quitamos parte de mi pagina web
for (let i in valoresprin) {
    elementos[i].addEventListener('click', function () {
        valoresprin.forEach(item => {
            item.style.display = "none";
        });
        if (elementos[i]) {
            valoresprin[i].style.display = "flex"
        }
    })
}