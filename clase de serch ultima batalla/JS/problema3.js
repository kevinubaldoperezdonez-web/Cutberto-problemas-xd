document.addEventListener("DOMContentLoaded", () => {
    const d = document.getElementById("descripcion");
    const da = document.getElementById("datos");
    const f = document.getElementById("formula");
    const p = document.getElementById("procedimiento");
    const r = document.getElementById("resultado");
    const b = document.getElementById("boton");

    d.textContent = "una flecha se acelera de 0 m/s a 40 m/s en 0.5 s que permanece en contacto con la cuerda del arco. ¿Cuál es su aceleración?";
    da.innerHTML = "velocidadinicial = 0 m/s<br>velocidadfinal = 40 m/s<br>tiempo = 0.5 s";
    f.textContent = "a=(vf-vi)/t";
    p.textContent = "calcular a=(40-0)/0.5";
    r.textContent = "";

    console.log("descripcion:", d.textContent);
    console.log("datos:", da.textContent);
    console.log("formula:", f.textContent);
    console.log("calculo:", p.textContent);

    function mostrar() {
        r.textContent = "resultado:20 m/s^2";
        console.log("resultado final:", r.textContent);
    }

    b.addEventListener("click", mostrar);
});