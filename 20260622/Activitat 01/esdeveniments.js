const accio = document.getElementById("selecciona");

// Passar el ratolí
accio.addEventListener("mouseover", mouseOverEvent);

function mouseOverEvent() {
    document.getElementById("onSeleccionat").innerHTML = "Has passat el ratolí per sobre l'element";
}

// Clicar
accio.addEventListener("click", clickEvent);

function clickEvent() {
    document.getElementById("onSeleccionat").innerHTML = "Has fet clic a l'element";
}

// Pujar el ratolí
accio.addEventListener("mouseup", mouseUpEvent);

function mouseUpEvent() {
    document.getElementById("onSeleccionat").innerHTML = "Has pujat el ratolí";
}

// Modificar text
accio.addEventListener("change", changeEvent);

function changeEvent() {
    document.getElementById("onSeleccionat").innerHTML = "Has modificat el text de l'element";
}

// Focus a l'element
accio.addEventListener("focus", focusEvent);

function focusEvent() {
    document.getElementById("onSeleccionat").innerHTML = "L'element té el focus a l'objecte";
}

// Baixar el ratolí
accio.addEventListener("mousedown", mouseDownEvent);

function mouseDownEvent() {
    document.getElementById("onSeleccionat").innerHTML = "Has abaixat el ratolí!!";
}

// Apartar el ratolí
accio.addEventListener("mouseout", mouseOutEvent);

function mouseOutEvent() {
    document.getElementById("onSeleccionat").innerHTML = "Has apartat el ratolí de l'objecte!!";
}