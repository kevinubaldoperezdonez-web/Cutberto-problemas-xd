const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {

    const producto = document.getElementById("producto").value;
    const precio = parseFloat(document.getElementById("precio").value);
    console.log("precio ",precio);
    const cantidad = parseInt(document.getElementById("cantidad").value);

    const subtotal = precio * cantidad;
    let descuento;

    if (subtotal < 500) {
        descuento = 0;
    } else if (subtotal < 1000) {
        descuento = subtotal * 0.10;
    } else {
        descuento = subtotal * 0.15;
    }
    const total = subtotal - descuento;
    resultado.innerHTML = `
        <h3>recibo</h3>

        <p>Producto: ${producto}</p>

        <p>Precio: $${precio.toFixed(2)}</p>

        <p>Cantidad: ${cantidad}</p>

        <p>Subtotal: $${subtotal.toFixed(2)}</p>

        <p>descuentillo: $${descuento.toFixed(2)}</p>

        <p>
            <strong>
               mas te vale que me pagues  son: $${total.toFixed(2)}
            </strong>
        </p>
    `;
});