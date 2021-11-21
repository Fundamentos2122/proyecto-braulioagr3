function documentLoad(){
    loadMainMenu();
    loadMenu();
    addClickCards();
}

function loadMainMenu(){
    var encabezado;
    encabezado = document.getElementById('Header');
    encabezado.innerHTML = `<nav class="navbar">   
                                <div class="navbar-collapse">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a href="index.html" class="nav-link">
                                                    <img src="images/logo.png" alt="Logo">
                                            </a>
                                        </li>
                                        <li class="nav-item hidden">
                                            <form>
                                                <input type="text" placeholder="Busqueda">
                                            </form>
                                        </li>
                                        <li class="nav-item">
                                            <a href="shoppingCart.html" class="nav-link h4">Carrito</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="login.html" class="nav-link h4">Iniciar Sesión</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="singup.html" class="nav-link h4">Registro</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>`;
}


function loadMenu(){
    var menu;
    menu = document.getElementById('Menu');
    menu.innerHTML =    `<nav class="navbar">   
                            <div class="navbar-collapse">
                                <ul class="navbar-nav">
                                    <li class="nav-item nav-button">
                                        <button onclick="menuAction()">-</button>
                                    </li>   
                                    <li class="nav-item">
                                        <a href="autores.html" class="nav-link h4 hidden">Autores</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="generos.html" class="nav-link h4 hidden">Generos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="series.html" class="nav-link h4 hidden">Series</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="editoriales.html" class="nav-link h4 hidden">Editoriales</a>
                                    </li>                     
                                </ul>
                            </div>
                        </nav>`;
}
       
function addClickCards()
{
    var cards= document.getElementsByClassName('card');
    for(var i = 0; i < cards.length; i++){
        cards[i].addEventListener('click', function (event) {
            window.location.href = "details.html";
        });}
}
function addCar(){
    alert("Su articulo se añadio al carrito");
    window.location.href = "shoppingCart.html";
}
function menuAction(){
    var menu;
    menu = document.getElementById('Menu');
    var ancla = menu.getElementsByClassName('nav-link');
    for(var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('hidden');
    }
}
