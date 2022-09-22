function tienda() {

    function Producto(id,nombre,precio,stock,iva){
        this.id = parseInt(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.stock = parseFloat(stock);
        this.iva = parseFloat(iva);
        this.detalle = this.id +`__ `+ this.nombre +` con un valor de$`+ this.precio +` contamos con un stock de: ` + this.stock;
    }


    const producto1 = new Producto(`1`,`Carpa canadiese 6 personas`,165035,15,1.21);
    const producto2 = new Producto(`2`,`Linterna Spinit HL800R Frontal/Mano`,6198.1,30,1.21);
    const producto3 = new Producto(`3`,`Navaja Trento Hunter Light 1.20`,6500,50,1.21); 
    const producto4 = new Producto(`4`,`Mochila Bamboo Adventure 70 Lts`,45000,5300,1.21);


let consultaCompra = prompt("Desea realizar una compra?");
let = seleccion1 = ``;


if(consultaCompra ==`si`){
    alert("Bienvenido a Glamping \n Tienda de Camping y pesca");
    seleccion1 = parseInt(prompt(`Contamos con los siguientes productos: \n` + producto1.detalle+`\n`+  producto2.detalle +`\n`+ producto3.detalle +`\n`+ producto4.detalle +`\n`+ `Por favor seleccione uno: `));


} else if(consultaCompra == `no`){
    alert("Muchas gracias por su compra");
}


while( seleccion1 !=``){
let = seleccion2 = ``;
         if(seleccion1 ==`1`) {seleccion2 = parseInt(prompt("Usted selecciono: " + producto1.detalle + `\nQue cantidad desea comprar`))}
    else if(seleccion1 ==`2`) {seleccion2 = parseInt(prompt("Usted selecciono: " + producto2.detalle + `\nQue cantidad desea comprar`))}
    else if(seleccion1 ==`3`) {seleccion2 = parseInt(prompt("Usted selecciono: " + producto3.detalle + `\nQue cantidad desea comprar`))}
    else if(seleccion1 ==`4`) {seleccion2 = parseInt(prompt("Usted selecciono: " + producto4.detalle + `\nQue cantidad desea comprar`))}


 if(seleccion2 !=``){
    function multiplicacion(numero1,numero2){
        let resultado = parseFloat(numero1 * numero2)
        return resultado}
    alert(`El monto es de $`+multiplicacion(seleccion2,this.precio))
 }
}
}
