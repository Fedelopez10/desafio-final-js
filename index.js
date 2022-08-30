/* esto es un comentario
let nombre = prompt ("Ingrese su nombre");
let edad = prompt ("Ingrese su edad");

console.log("Bienvenido al sistema:" , nombre);
console.log("La edad del usuario es:" , edad);
*/
/*
let num_uno = prompt ("Ingrese un numero");
let num_dos = prompt ("Ingrese otro numero");

let resultado = parseInt (num_uno) + parseInt(num_dos);

console.log("El resultado es" , resultado);
*/
/*
let verdadero = true;
let falso = false;

let resultado = 10 == 10;
console.log(resultado);

let x = 30;
let y = 50;

console.log(x == y); //F
console.log(y == x + 20);//V

// MAYOR >

console.log(40 > 10);//V
console.log(80 > 100);//F
console.log(y > 40);//V
console.log(x + 30 > y);//V

// MENOR <

console.log(100 < 200);//V
console.log(50 < 30);//F

// MAYOR O IGUAL >=

console.log(18 >= 18);//V
console.log( x >= y);//F

// MENOR O IGUAL <=

console.log( 20<= 50);//V
console.log( 10 <= 10);//V

// NO ES IGUAL !=  ME VA A DEVOLVER VERDADERO CUANDO SON DISTINTOS Y FALSO CUANDO SON IGUALES
*/
/*
let num_uno = prompt("Ingrese un numero");
let num_dos = prompt("Ingrese otro numero");
let operacion = prompt("suma: + resta: - multiplicacion: * division: /");


if ( operacion == "+") {
    let suma = parseFloat (num_uno) + parseFloat (num_dos);
    console.log("La suma de los numeros es:" , suma);
}
else if ( operacion == "-"){
    let resta = parseFloat (num_uno) - parseFloat (num_dos);
    console.log("La resta de los numeros es:" , resta);
}
else if ( operacion == "*"){
    let multiplicacion = parseFloat (num_uno) * parseFloat (num_dos);
    console.log("La multiplicacion de los numeros es:" , multiplicacion);
}
else if ( operacion == "/"){
    let division = parseFloat (num_uno) / parseFloat (num_dos);
    console.log("La division de los numeros es:" , division);
}
else {
    console.log("Operacion no encontrada");
}
*/

const productos = [
    { nombre: "harina", precio: 50},
    { nombre: "galletitas", precio: 100},
    { nombre: "cerveza", precio: 150},
    { nombre: "leche", precio: 200},
    { nombre: "gaseosa", precio: 250},
];

let carrito = []

let seleccion = prompt ("hola desea comprar algun producto si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt ("hola desea comprar algo si o no");
}

if(seleccion == "si"){
    alert ("A continuacion nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert (todoslosProductos.join(" - "));
}
else if (seleccion == "no"){
    alert ("Gracias por venir, hasta pronto!!");
}

while (seleccion != "no"){
    let producto = prompt ("Agrega un producto a tu carrito");
    let precio = 0

    if(producto == "harina" || producto == "galletitas" || producto == "cerveza" || producto == "leche" || producto == "gaseosa"){
        switch (producto){
            case "harina":
            precio = 50;
            break;
            case "galletitas":
            precio = 100;
            break;
            case "cerveza":
            precio = 150;
            break;
            case "leche":
            precio = 200;
            break;
            case "gaseosa":
            precio = 250;
            break;
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar"));

    carrito.push ({producto, unidades, precio})
    console.log(carrito);
    } else {
        alert("No tenemos ese producto");
    }

    seleccion = prompt(" Desea seguir comprando?");

    while(seleccion === "no"){
        alert ("Gracias por la compra! Hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carrito.unidades},
            `);
        })
    }
}