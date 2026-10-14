document.addEventListener("DOMContentLoaded", () => {
    const d = document.getElementById("descripcion");
    const da = document.getElementById("datos");
    const f = document.getElementById("formula");
    const p = document.getElementById("procedimiento");
    const r = document.getElementById("resultado");
    const b = document.getElementById("boton");

    d.textContent = "encuentre las tenciones que se generan en las cuerdas A y B si se sabe que sostiene un cuerpo de 226 n";
    da.innerHTML = "226 N / sen(96°)<br>A / sen(190°)<br>B / sen(124°)";
    f.textContent = "N/sen(C) = A/sen(A) = B/sen(B)";
    p.textContent = "calcular A=(226 N/sen(96°)) * sen(190°)<br>calcular B=(226 N/sen(96°)) * sen(124°)";
    r.textContent = "";

    console.log("descripcion:", d.textContent);
    console.log("datos:", da.textContent);
    console.log("formula:", f.textContent);
    console.log("calculo:", p.textContent);

    function mostrar() {
        r.textContent = "resultado: A = 183.3N, B = 192.19N";
        console.log("resultado final:", r.textContent);
    }

    b.addEventListener("click", mostrar);
});