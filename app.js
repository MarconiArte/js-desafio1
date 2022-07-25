let precio = 100;
let repetir = true;

while (repetir) {
    alert ("¡Bienvenido! Las ilustraciones salen $100USD.")

    let cantidad = parseInt(prompt("Ingrese la cantidad de ilustraciones que desea."));

    alert(`El total a pagar es de: $${cantidad * precio}USD.`);

    let confirmacion = prompt("¿Desea hacer otro pedido?").toLowerCase();

    if (confirmacion == "no" || confirmacion == "no quiero" || confirmacion == "no deseo"); {
        repetir = false
        alert("Se realizó su pedido.");
    };
};