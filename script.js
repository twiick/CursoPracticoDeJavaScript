// console.log("Hello, world!");
var titulo=document.querySelector("h1");
var parrafo=document.querySelector("p");
var parrafito=document.querySelector(".parrafito");
var parrafoid=document.getElementById("pid");
var input=document.querySelector("input");

input.value="Este es el contenido del Input";

// Cambia el contenido de un elemento en HTML (Incluye nuevos elementos HTML)
titulo.innerHTML="Este es el<br>nuevo titulo";
// Cambia el contenido de un elemento en HTML (Solo texto)
parrafoid.innerText="Se cambia el Texto";
// Obtiene un atributo específico
console.log(parrafo.getAttribute("tipoTexto"));
// Cambia el valor de un atributo en especifico
parrafo.setAttribute("tipoTexto", "secundario");
// Agrga o quita clases a un elemento
parrafo.classList.add("verde");
parrafo.classList.add("red");
parrafo.classList.toggle("azul");
//Devuelve true o false si el elemento tiene la vlade indicada
console.log(parrafo.classList.contains("verde"));

var imagen=document.createElement("img");
imagen.setAttribute("src", "https://c4.wallpaperflare.com/wallpaper/892/692/922/howl-s-moving-castle-studio-ghibli-fantasy-art-clouds-daylight-hd-wallpaper-preview.jpg");
parrafoid.appendChild(imagen);

console.log({
    titulo,
    parrafo,
    parrafito,
    parrafoid,
    input
});