function tienda() {
    let consultaCompra = prompt("Desea realizar una compra?");
    if(consultaCompra ==`si`){
        seleccion1 = parseInt(prompt(`Contamos con los siguientes productos: \n` + producto1.detalle+`\n`+  producto2.detalle +`\n`+ producto3.detalle +`\n`+ producto4.detalle +`\n`+`0_Si desea salir\n`+ `Por favor seleccione uno: `));
    } else if(consultaCompra == `no`){
        alert("Muchas gracias por su visita");
    }

    
    while(seleccion1 !=``){
        switch(seleccion1){
            case 1: condicionesCase(producto1);
                break;
            case 2: condicionesCase(producto2);
                break;
            case 3: condicionesCase(producto3);
                break;
            case 4: condicionesCase(producto4);
                break;
            case 0: alert(`Muchas gracias por su visita`);
                break;
            default:
                break;
        }
    }


}
let = seleccion1 = ``;  // LISTADO DE PRODUCTOS Y SELECCION
let = seleccion2 = ``;  // SELECCIONA CANTIDAD DE UN ARTICULO QUE DESEA
let = seleccion3 = ``;  // SI DESEA OTRO ARTICULO
let = resultadoX = ``;  // EL RESULTADO DE LA CANTIDAD DESEADA


class Productos{
    constructor(id,nombre,precio,stock,iva){
    this.id = parseInt(id);
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
    this.iva = parseFloat(iva);
    this.detalle = this.id +`__ `+ this.nombre +` con un valor de$`+ this.precio +` contamos con un stock de: ` + this.stock;
}
}
const producto1 = new Productos(`1`,`Carpa canadiese 6 personas`,165035,15,1.21);
const producto2 = new Productos(`2`,`Linterna Spinit HL800R Frontal/Mano`,6198.1,30,1.21);
const producto3 = new Productos(`3`,`Navaja Trento Hunter Light 1.20`,6500,50,1.21); 
const producto4 = new Productos(`4`,`Mochila Bamboo Adventure 70 Lts`,45000,53,1.21);


const multiplicacion = (numero1 , numero2) => numero1 * numero2;

const resta = (numero1 , numero2) => numero1 - numero2;

const condicionesCase=(producto) => {
    seleccion2 = parseInt(prompt("Usted selecciono: " + producto.detalle + `\nQue cantidad desea comprar`));
    if((seleccion2>=1)&&(seleccion2<=producto.stock)){
        resultadoX = alert(`El monto total es $` + parseFloat(multiplicacion(seleccion2,producto.precio)));
        console.log("la cantidad de stock actual es de:" + resta(producto.stock,seleccion2));
    }else{alert("La cantidad ingresada es mayor a nuestro stock, por favor seleccione una cantidad menor.");
        condicionesCase(producto);
    }seleccion1 = ``;
    alert("muchas gracias por su compra");

}

                                     