function tienda() {
alert("Bienvenido a Compras online!");
let nombreA = prompt("Ingrese su nombre")
alert("Bienvenido " + nombreA + " Aqui conseguira todo lo que desea")


let productoA = `Interruptor termomagnetico 2 x 20A 6Ka`;
let productoB = `Interruptor diferencial 2 x 40A 30mA tipo ac`;
let productoC = `Caja 4 polos exterior IP55 PVC`;
let productoD = `Cable unipolar antillama normailizado 2,5mm`;
let precio1 = `1.200`;
let precio2 = `4.300`;
let precio3 = `860`;
let precio4 = `65.30`;
let seleccion1 = "";
let seleccion2 = "";
let confirmacionCompra = prompt("Desea realizar una compra?");

while( confirmacionCompra== `si` || confirmacionCompra ==`no`|| confirmacionCompra==``){
    if(confirmacionCompra==`si`){
        seleccion1 = parseInt(prompt(`Debe selecionar un articulo\n`+`1__` + productoA + ` $` +precio1 + `\n` + `2__` + productoB + ` $`+precio2 + `\n` + `3__` + productoC + ` $`+precio3 + `\n` + `4__` + productoD + ` $`+precio4 + `X MTS.`));
        while(seleccion1){
            switch(seleccion1){
                case 1:
                    seleccion2 = parseInt(prompt(`Usted seleccionó: \n` + productoA + ` Que tiene un valor de: $`+ precio1 + "\n Que cantidad desea?"));
                case 2:
                    seleccion2 = parseInt(prompt(`Usted seleccionó` + productoB + ` Que tiene un valor de: $`+ precio2 + "\n Que cantidad desea?"));
                case 3:
                    seleccion2 = parseInt(prompt(`Usted seleccionó` + productoC + ` Que tiene un valor de: $`+ precio3 + "\n Que cantidad desea?"));
                case 4:
                    seleccion2 = parseInt(prompt(`Usted seleccionó` + productoD + ` Que tiene un valor de: $`+ precio4 + "\n Que cantidad desea?"));
    }
}
    }
    if(confirmacionCompra==`no`){
        alert(`Gracias por su visita`);
        break;
    }
    if(confirmacionCompra ==``){
    alert(`...ERROR... \nDebe selecionar Si o No`);
    confirmacionCompra = prompt("Desea realizar una compra?");
    }
}
}