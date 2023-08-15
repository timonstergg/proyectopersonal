/* crear la funcion de calcular que esta en el boton calcular, que esta en el evento onClick, la funcion es de tipo tradicional*/
// sintaxix de la funcion tradicional
function calcular() {
    // definir las variables como el precio y la cantidad 
    // se va a tomar el dato del elemento imput precio del html
    let precio = document.simuladorFactura.precio.value;
     // se va a tomar el dato del elemento imput cantidad del html
    let cantidad = document.simuladorFactura.cantidad.value;
    // definir el valor del iva (es una constante por lo que no se usa el let si no const)
    const iva = 0.19;
    // capturar el dato del producto
    producto = document.getElementById('producto').value;
    // validar los campos vacios o que estan en cero
    // if y else
    if (precio == 0  || precio == null || cantidad == null || cantidad == 0) {
        //notificar al usuario que digite el precio y la cantidad
        alert("Digite el precio y la cantidad");

    }else{
        // definir unas variables para realizar operaciones 
        // valor total = cantidad * precio
        let vt = cantidad * precio;
        // determinar el porcentaje del iva de acuerdo al producto y su valor total vi=vt + iva
        let vi = vt * iva;
        // determinar el valor a pagar con el iva 
        let tp = vi + vt;
        // mostrar los datos  de las operaciones tener presente cmo estan definidas las clases e identificadores 
        //mostrar el producto seleccionado
        document.getElementById("valorProducto").innerHTML = producto;
        //mostrar el precio simulado por el usuario
        document.getElementById("valorPrecio").innerHTML = precio;
        document.getElementById("valorTotal").innerHTML = vt;
        document.getElementById("valorIva").innerHTML = vi;
        document.getElementById("totalPagar").innerHTML = vt;

    }


}