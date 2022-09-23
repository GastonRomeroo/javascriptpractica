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
let = seleccion2 = ``;
let = seleccion3 = ``;

if(consultaCompra ==`si`){
    alert("Bienvenido a Glamping \n Tienda de Camping y pesca");
    seleccion1 = parseInt(prompt(`Contamos con los siguientes productos: \n` + producto1.detalle+`\n`+  producto2.detalle +`\n`+ producto3.detalle +`\n`+ producto4.detalle +`\n`+ `Por favor seleccione uno: `));


} else if(consultaCompra == `no`){
    alert("Muchas gracias por su compra");
}

while(seleccion1 !=``){
    const multiplicacion = (numero1 , numero2) => numero1 * numero2 ;

    switch(seleccion1){
        case 1: seleccion2 = parseInt(prompt("Usted selecciono: " + producto1.detalle + `\nQue cantidad desea comprar`));
                alert(`El monto total es $` + multiplicacion(seleccion2,producto1.precio));
                seleccion3 = prompt(`Desea agregar otro producto?\n1_si\n2_no`);
            break;
        case 2: seleccion2 = parseInt(prompt("Usted selecciono: " + producto2.detalle + `\nQue cantidad desea comprar`));
                alert(`El monto total es $` + multiplicacion(seleccion2,producto2.precio));
                seleccion3 = prompt(`Desea agregar otro producto?\n1_si\n2_no`);
            break;
        case 3: seleccion2 = parseInt(prompt("Usted selecciono: " + producto3.detalle + `\nQue cantidad desea comprar`));
                alert(`El monto total es $` + multiplicacion(seleccion2,producto3.precio));
                seleccion3 = prompt(`Desea agregar otro producto?\n1_si\n2_no`);
            break;
        case 4: seleccion2 = parseInt(prompt("Usted selecciono: " + producto4.detalle + `\nQue cantidad desea comprar`));
                alert(`El monto total es $` + multiplicacion(seleccion2,producto4.precio));
                seleccion3 = prompt(`Desea agregar otro producto?\n1_si\n2_no`);
            break;
    }
}



}

