// Variables y constantes
const productos = [
    { id: 1, nombre: "Lavarropas", precio: 300000 },
    { id: 2, nombre: "Heladera", precio: 450000 },
    { id: 3, nombre: "Microondas", precio: 150000 },
    { id: 4, nombre: "Televisor", precio: 800000 }
];
let carrito = [];

// Funciones
function mostrarProductos() {
    console.clear();
    console.log("Lista de productos disponibles:");
    productos.forEach(producto => {
        console.log(`${producto.id}. ${producto.nombre} - $${producto.precio}`);
    });
}

function agregarAlCarrito() {
    const idProducto = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito:"));
    const productoSeleccionado = productos.find(producto => producto.id === idProducto);

    if (productoSeleccionado) {
        carrito.push(productoSeleccionado);
        alert(`${productoSeleccionado.nombre} ha sido agregado al carrito.`);
    } else {
        alert("Producto no encontrado. Por favor, intente nuevamente.");
    }
}

function mostrarCarrito() {
    console.clear();
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        console.log("Productos en el carrito:");
        let total = 0;
        carrito.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
            total += producto.precio;
        });
        console.log(`\nTotal a pagar: $${total}`);
    }
}

function iniciarSimulador() {
    let continuar = true;
    while (continuar) {
        mostrarProductos();
        agregarAlCarrito();
        mostrarCarrito();
        continuar = confirm("¿Desea agregar más productos?");
    }
    alert("Gracias por usar el simulador de ventas. Revise la consola para ver el resumen de su carrito.");
}

// Inicio del programa
iniciarSimulador();
