let visitas =+ localStorage.getItem("visitas") || 0

let miUsuario = document.querySelector(".usuario");
const usuario = document.getElementById("TITLE");
console.log(usuario)
let login = ""

console.log(miUsuario)
usuario.addEventListener("click", identificarUsuario);

function identificarUsuario() {

    let nombre = prompt("Ingrese su nombre para identificarse");
    let usuarionuevo = login = nombre
    if (usuarionuevo) {
        localStorage.setItem("nombre", usuarionuevo)


    }


}


function obtenerUsuario() {
    let usuariologin = localStorage.getItem("nombre")
    miUsuario.innerHTML = `${usuariologin}`

}
obtenerUsuario()


















function contador() {
visitas = visitas + 1
if(visitas){
localStorage.setItem("visitas", visitas)


}


}

contador()


    // if (nombre.length == 0) {
    //     alert("No ingresó un nombre , inténtelo nuevamente")
    //     usuario = prompt("Ingrese su nombre");
    //     let saludo = "Bienvenid@";
    //     alert(saludo + " " + nombre);
    // } else {
    //     let saludo = "Bienvenid@";
    //     alert(saludo + " " + nombre);
    // }

   // usuario.removeEventListener("click", visitas)

//agregar contador al html