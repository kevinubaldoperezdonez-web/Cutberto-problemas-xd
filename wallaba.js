
document.addEventListener("DOMContentLoaded", function() {

    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const estado = document.getElementById("estado").value;
        const descripcion = document.getElementById("descripcion").value.trim();

        const sexo = document.querySelector('input[name="sexo"]:checked');
        const info = document.getElementById("info").checked;
        const condiciones = document.getElementById("condiciones").checked;

        if (
            nombre === "" ||
            apellidos === "" ||
            correo === "" ||
            estado === "" ||
            descripcion === "" ||
            sexo === null ||
            !info ||
            !condiciones
        ) {
            alert("Te falta llenar algun campo o marcar una casilla");
            console.log("Formulario incompleto");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert("Escribe un correo valido");
            return;
        }

        console.log("nombre:", nombre);
        console.log("apellidos:", apellidos);
        console.log("correo:", correo);
        console.log("estado:", estado);
        console.log("descripcion:", descripcion);
        console.log("sexo:", sexo.value);
        console.log("informacion:", info);
        console.log("condiciones:", condiciones);

        console.log("-----------------------------");
        console.log("Formulario listo");

        alert("Formulario completado correctamente");
    });

});
