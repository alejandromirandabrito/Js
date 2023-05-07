let miClave = "0309";

function login (){

    let ingresar = false;
    for(let i = 2; i >= 0; i --){  

        let claveUsuario = prompt( " Ingresa tu Clave. Tienes " + (i + 1) + " oportunidades " );
        if (claveUsuario === miClave) {
            alert("Ingreso exitoso. Bienvenido/a");
            ingresar = true;
            break;
        }else{
            alert("Has ingresado una clave incorrecta. Te quedan " + i + " intentos. " )
        }
    }
    return ingresar;
}
if(login()){
   let saldo = 500000;
   
   let opcion = prompt( "Elije una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n Presione X para salir.");

   while(opcion != "X" && opcion != "x"){

    switch(opcion){
        case "1":
            alert( " Su saldo es $ " + saldo);
            break;
        case "2":
            let retiro = parseFloat(prompt("Ingresa el monto a retirar"));
            if (retiro <= saldo){
                saldo = saldo - retiro;
                alert("Retiro exitoso. Tu nuevo saldo es $ " + saldo );
            }else {
                alert( " Fondos insuficientes. " )
            }
            break;
        case "3":
            let deposito = parseFloat(prompt("Ingrese el monto a depositar"));
            if (deposito){
                saldo = saldo + deposito 
                alert("Deposito exitoso");
            }
            break;
        default:
            alert("Elegiste una opción inválida");
            break;
    }
    opcion = prompt( "Elije una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n Presione X para salir.");
   }
    }else{
    alert("Tu tarjeta ha sido bloqueada por seguridad");

}

alert("Adios");