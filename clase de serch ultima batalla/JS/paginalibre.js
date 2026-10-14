const wanabana = document.getElementById("wanabana");

wanabana.addEventListener("submit", function(event){
    event.preventDefault();


    const nombre = document.getElementById("nombre").value;
    console.log("nombre:", nombre);
    const error = document.getElementById("error").value;
    console.log("error:", error);
    const archivo = document.getElementById('archivo').files[0];
    if (archivo){
        console.log("Nombre de la imagen:", archivo.name);
        console.log("tipo", archivo.type);
        console.log("tamaño", archivo.size);


    }else {
        console.log("archivo: no seleccionado");
    }

    console.log("--------------------------------------------")


    
}

)