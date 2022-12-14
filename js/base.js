/*---------------------------------------
    Comportamiento Menu hamburguesa
-----------------------------------------*/
//Evento clic
document.getElementById("menu").addEventListener("click", show_menu);

//Mostrar menu
function show_menu() {
    hide_search();

    document.getElementById("cnt-move").classList.toggle("move-container");
    document.getElementById("nav-header").classList.toggle("nav-visibility");
}

//Ocultar menu
function hide_menu() {
    document.getElementById("cnt-move").classList.remove("move-container");
    document.getElementById("nav-header").classList.remove("nav-visibility");
}

/*-----------------------------------
    Comportamiento Barra Busqueda
-------------------------------------*/
var barSearch = document.getElementById("search-bar");
var cover = document.getElementById("search-cnt-cover");
var inputSearch = document.getElementById("search-txt");
var result = document.getElementById("search-result");

//Evento clic
document.getElementById("lupa").addEventListener("click", show_search);
cover.addEventListener("click",hide_search);

//Mostrar buscador
function show_search() {
    hide_menu();

    if(barSearch.style.top == "90px") {
        hide_search();
    } else {
        barSearch.style.top = "90px";
        cover.style.display = "block";
        inputSearch.focus();
    }
    
}

//Ocultar buscador
function hide_search() {
    barSearch.style.top = "-100px";
    cover.style.display = "none";
    result.style.display = "none";
    inputSearch.value = "";
}

//JSON con opciones de busqueda (keywords y URLs)
const keywords = [
    {text: 'Aficiones', url:'./aficiones.html'},
    {text: 'Gustos', url:'./aficiones.html'},
    {text: 'Libros', url:'./libros.html'},
    {text: 'Libro favorito', url:'./libros.html#fav-book'},
    {text: 'Musica', url:'./musica.html'},
    {text: 'Canciones favoritas', url:'./musica.html'},
    {text: 'Fecha de nacimiento', url:'./sobremi.html'},
    {text: 'Cumpleaños', url:'./sobremi.html'},
    {text: 'Contacto', url:'./sobremi.html#personal-data'},
    {text: 'Correo electronico', url:'./sobremi.html#email'},
    {text: 'Email', url:'./sobremi.html#email'},
    {text: 'Datos personales', url:'./sobremi.html#personal-data'},
];

//Evento teclear
inputSearch.addEventListener("keyup", buscador_interno);

function buscador_interno() {
    //1 Inicializar con 0 resultados
    result.innerHTML = "";

    //2 Recoger texto introducido por el usuario (MAY)
    let busqueda = inputSearch.value.toUpperCase();

    //3 Comparar la busqueda con las opciones del json
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

    //Si ningun resultado coincide mostrar aviso
    if(result.innerHTML === "") {
        result.innerHTML += `
            <li>
                <a href="#">Ningún resultado coincide con la búsqueda.</a>
            </li>`;
        result.style.display = "block";
    }
}