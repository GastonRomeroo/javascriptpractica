function tienda() {
    alert("Bienvenido a Compras online!");
    let nombreA = prompt("Ingrese su nombre")
    alert("Bienvenido " + nombreA + " Aqui conseguira todo lo que desea");
    

    function Producto(id,nombre,precio,stock){
        this.id = id;
        this.name = nombre;
        this.precio = precio;
        this.stock = stock;
    }


    const producto1 = new Producto(`1`,`Interruptor termomagnetico 2 x 20A 6Ka`,1200,15);
    const producto2 = new Producto(`2`,`Interruptor diferencial 2 x 40A 30mA tipo ac`,4.300,30);
    const producto3 = new Producto(`3`,`Caja 4 polos exterior IP55 PVC`,860,50); 
    const producto4 = new Producto(`4`,`Cable unipolar antillama normailizado 2,5mm`,66,5300);


let consultaCompra = prompt("Desea realizar una compra?").toLocaleLowerCase

if(consultaCompra == `si`){

}else if(consultaCompra ==`no`){

}else()











}
