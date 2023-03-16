//Carga de productos por parte del admin//

class Producto{
    constructor ( nombre, precio , stock ){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos(){
        console.log("");
        console.log(" Nombre: ", this.nombre);
        console.log(" Precio: ", this.precio);
        console.log(" Stock: ", this.stock);
        console.log("");
    }

    venta_stock(cantidad){
        //CHEQUEO DE LAS UNIDADES SEAN MENOR A LA CANTIDAD DE STOCK//
        if ( this.stock >= cantidad){
            this.stock = this.stock - cantidad
            return true
        }
        else{
            return false
        }
    }

}


//Alta de productos (parte del admin)//

let lista_productos = [];

for(let i = 0 ; i < 3 ; i = i + 1){

    let nombre = prompt(" MENU DE ADMINISTRADOR \n Ingrese el nombre del producto");
    let precio = parseInt( prompt (" MENU DE ADMINISTRADOR \n  Ingrese el precio el producto"));
    let stock =  parseInt( prompt (" MENU DE ADMINISTRADOR \n  Ingrese el stock del producto"));

    let producto = new Producto( nombre, precio, stock);

    lista_productos.push(producto);

    
}

console.log( lista_productos );

//Fin del alta de productos//

console.log("Lista de productos");

for( let producto of lista_productos){
    producto.get_datos();
}

//SIMULO COMPRA DE USUARIO//

function buscar_producto( producto ){

    return producto.nombre == compra_usuario;

}

let compra_usuario = prompt(" MENU DE CLIENTE \n  Ingrese el nombre del producto que desea comprar");

let resultado_busqueda = lista_productos.find( buscar_producto )

if (resultado_busqueda != undefined ){
    console.log(resultado_busqueda);

    let unidades =  parseInt( prompt(" MENU DE CLIENTE \n ¿Cuantas unidades queres?"));

    if ( resultado_busqueda.venta_stock( unidades)){
        console.log(`MENU DE CLIENTE \n Gracias por comprar ${unidades} unidades de ${resultado_busqueda.nombre}`);
    }
    else{
        console.log(" MENU DE CLIENTE \n No se pudo realizar la compra, no tenemos stock suficiente");
        console.log(" MENU DE CLIENTE \n Stock disponible: ", resultado_busqueda.stock );
        
    }
}
else{
    console.log(" MENU DE CLIENTE \n No se encontro el producto", compra_usuario);
}
