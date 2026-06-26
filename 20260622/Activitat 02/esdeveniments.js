const isActive = document.getElementById("nom");
document.getElementById("btn").disabled = true;

isActive.addEventListener("change", activaBoto);

function activaBoto() {
    document.getElementById("btn").disabled = false;
    window.alert("El botó està actiu!!");
}