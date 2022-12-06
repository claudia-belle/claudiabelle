//Menu responsivo
document.getElementById("menu").addEventListener("click", show_menu);
var menuOn = 0;
function show_menu() {
    hide_search();

    document.getElementById("cnt-move").classList.toggle("move-container");
    document.getElementById("nav-header").classList.toggle("nav-visibility");
    menuOn = 1;
}

function hide_menu() {
    document.getElementById("cnt-move").classList.remove("move-container");
    document.getElementById("nav-header").classList.remove("nav-visibility");
    menuOn = 0;
}

//Barra de busqueda
var barSearch = document.getElementById("search-bar");
var cover = document.getElementById("search-cnt-cover");
var inputSearch = document.getElementById("search-txt");
var result = document.getElementById("search-result");

document.getElementById("lupa").addEventListener("click", show_search);
cover.addEventListener("click",hide_search);

function show_search() {
    if(barSearch.style.top == "90px") {
        hide_search();
    } else {
        barSearch.style.top = "90px";
        cover.style.display = "block";
        inputSearch.focus();
    }
    
}

function hide_search() {
    barSearch.style.top = "-100px";
    cover.style.display = "none";
    result.style.display = "none";
    inputSearch.value = "";
}

//Buscador
const keywords = [
    {text: 'Aficiones', url:'./aficiones.html'},
    {text: 'Gustos', url:'./aficiones.html'},
    {text: 'Hobbies', url:'./aficiones.html'},
    {text: 'Libros', url:'./libros.html'},
    {text: 'Lecturas favoritas', url:'./libros.html'},
    {text: 'Musica', url:'./musica.html'},
    {text: 'Canciones favoritas', url:'./musica.html'},
    {text: 'Sobre mi', url:'./sobremi.html'},
    {text: 'Contacto', url:'./sobremi.html'},
    {text: 'Datos personales', url:'./sobremi.html'},
];

inputSearch.addEventListener("keyup", buscador_interno);

function buscador_interno() {
    result.innerHTML = "";

    let busqueda = inputSearch.value.toUpperCase();

    for(let keyword of keywords) {
        let value = keyword.text.toUpperCase();
        
        //Mostrar resultados que coincidan con busqueda
        if(value.indexOf(busqueda) > -1 ) {
            result.innerHTML += `
                <li>
                    <a href=${keyword.url}><i class="fa-solid fa-magnifying-glass"></i> ${keyword.text}</a>
                </li>`;
            result.style.display = "block";

            if(inputSearch.value === ""){
                result.style.display = "none";
            }
        }
    }

    if(result.innerHTML === "") {
        result.innerHTML += `
            <li>
                <a href="#">Ningún resultado coincide con la búsqueda.</a>
            </li>`;
        result.style.display = "block";
    }
}