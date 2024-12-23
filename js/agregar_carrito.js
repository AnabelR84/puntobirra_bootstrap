
document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".btn-agregar");
    console.log(botonesAgregar); 

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();


            const cerveza = boton.getAttribute("data-cerveza"); 
            const precio = parseFloat(boton.getAttribute("data-precio"));

            console.log(cerveza);
            console.log(precio);

            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            console.log(carrito);

            carrito.push({ cerveza, precio });

            localStorage.setItem("carrito", JSON.stringify(carrito));

            // Notificar al usuario
            alert(`${cerveza} agregado al carrito.`);
        });
    });
});
