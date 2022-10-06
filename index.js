function tienda() {
    console.log(randomId(50));
    let consultaCompra = prompt("Desea realizar una compra?").toLowerCase();
    if(consultaCompra ==`si`){
        seleccion1 = parseInt(prompt(`${listadoNombresProductos.join(`\n`)}`) );
    }else if(consultaCompra == `no`){
        alert("Muchas gracias por su visita");
    }

    switch(seleccion1){
        case 1: condicionesCase(listaProducto[0]);
            break;
        case 2: condicionesCase(listaProducto[1]);
            break;
        case 3: condicionesCase(listaProducto[2]);
            break;
        case 4: condicionesCase(listaProducto[3]);
            break;
        case 0: alert(`Muchas gracias por su visita`);
            break;
        default:
            break;
        }
}

let = seleccion1 = ``;  // LISTADO DE PRODUCTOS Y SELECCION
let = seleccion2 = ``;  // SELECCIONA CANTIDAD DE UN ARTICULO QUE DESEA
let = seleccion3 = ``;  // SI DESEA OTRO ARTICULO
let = resultadoX = ``;  // EL RESULTADO DE LA CANTIDAD DESEADA


class Productos{
    constructor(nombre,precio,stock,iva,id){
    this.id = parseInt(id);
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
    this.iva = parseFloat(iva);
    this.detalle = this.id +`__ `+ this.nombre +` con un valor de$`+ this.precio +` contamos con un stock de: ` + this.stock;
}
// const = randomId = (id) => {
//     let result = ''
//     const stringLetras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     for (let i = 0; i < id; i++ ) {
//       result += stringLetras.charAt(Math.floor(Math.random() * stringLetras.length));
//    }
//    return result;

// }





}
const listaProducto =[]
listaProducto.push(new Productos(`Carpa canadiese 6 personas`,165035,15,1.21,));
listaProducto.push(new Productos(`Linterna Spinit HL800R Frontal/Mano`,6198.1,30,1.21,));
listaProducto.push(new Productos(`Navaja Trento Hunter Light 1.20`,6500,50,1.21,));
listaProducto.push(new Productos(`Mochila Bamboo Adventure 70 Lts`,45000,53,1.21,));


const multiplicacion = (numero1 , numero2) => numero1 * numero2; //Porque quiero multiplicar un numero
const resta = (numero1 , numero2) => numero1 - numero2;     //Porque quiero restar un numero

let = listaProductoStock = listaProducto.filter((prod) => prod.stock > 0);
    console.log(listaProductoStock); //Filtra los productos mayores a cero y crea un array

let = listadoNombresProductos = listaProductoStock.map((prod) => prod.nombre);
    console.log(listadoNombresProductos); //Si los productos no tienen stock no aparecen y crea un array

let = listadoNombresID = listaProductoStock.map((prod) => prod.id);
    console.log(listadoNombresID); //Crea un array para los id unicamente
    


const condicionesCase=(producto) => {
    seleccion2 = parseInt(prompt("Usted selecciono: " + producto.detalle + `\nQue cantidad desea comprar`));

    if((seleccion2>=1)&&(seleccion2<=producto.stock)){
        resultadoX = alert(`El monto total es $` + parseFloat(multiplicacion(seleccion2,producto.precio)));
        console.log("la cantidad de stock actual es de:" + resta(producto.stock,seleccion2));

    }else{alert("La cantidad ingresada es mayor a nuestro stock, por favor seleccione una cantidad menor.");
        condicionesCase(producto);

    }seleccion1 = 0 ;
    alert("muchas gracias por su compra");
}








