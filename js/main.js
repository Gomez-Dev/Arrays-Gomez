
let marca = prompt("¿hikvision - dahua?");

if (marca=="hikvision"){
    alert("Elegiste hikvision")
}   else if (marca=="dahua"){
    alert("Elegite Dahua")
}

let canalesDvr = +(prompt("4-Canales 8-Canales 16-Canales"));

switch (canalesDvr) {
    case 4: {
        alert("El DVR es de 4 canales");
        break;
    }
    case 8: {
        alert("El DVR es de 8 canales");
        break;
    }
    case 16: {
        alert("El DVR es de 16 canales");
        break;
    }
    default :
        alert ("La opcion no es correcta")
}

let camara = +(prompt("¿Cuantas Camaras?"));

    alert ("Elegiste" +" "+ camara +" "+ "camaras");
    
    function tuPedido(a,b,c){
        let mensaje; 
        mensaje+="Marca: " + a + "\n"; 
        mensaje+="DVR: " + b + " canales" + "\n"; 
        mensaje+="CAMARAS: " + c + "\n"; 
    
        return mensaje;
    }

let completado = tuPedido(marca, canalesDvr, camara);

alert ("Tu pedido es"+ " " + completado);

const carrito = [
    {nombre: 'hikvision', precio: 1200},
    {nombre: 'dahua', precio: 1100},
    {nombre: 'DVR 4', precio: 1400},
    {nombre: 'DVR 8', precio: 1800},
    {nombre: 'DVR 16', precio: 2100},
    {nombre: 'camaras', precio: 950},
]

alert (carrito);