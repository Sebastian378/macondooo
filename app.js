document.getElementById('clickButton').addEventListener('click', function() {
let salario = 2500000;
let AlmojabanaGaseosa = 15000;
let SubwayGaseosa = 23000;
let dineroDisponible = salario;

alert("Hildebrando recibe un salario de " + salario + ".");

// Simular la entrada del usuario
let opcionComida = prompt("Hildebrando, ¿qué deseas comprar antes de tu vuelo?\n" +
                      "1. Almojábana con gaseosa (Costo: 15,000)\n" +
                      "2. Subway con gaseosa (Costo: 23,000)\n" +
                      "3. No comprar nada\n" +
                      "4. Comprar algo en Medellín\n" +
                      "Ingresa el número de tu elección: ");

// Procesar la elección de Hildebrando
switch (opcionComida) {
    case '1':
       alert("Hildebrando elige comprar una almojábana con gaseosa.");
        dineroDisponible -= AlmojabanaGaseosa;
        break;
    case '2':
        alert("Hildebrando elige comprar un Subway con gaseosa.");
        dineroDisponible -= SubwayGaseosa;
        break;
    case '3':
        alert("Hildebrando decide no comprar nada en el aeropuerto.");
        break;
    case '4':
        alert("Hildebrando decide no comprar nada en Bogotá y espera para comprar algo en Medellín.");
        break;
    case '5':
        alert("Opción no válida. Hildebrando no compra nada en el aeropuerto.")
        break;
     
}
alert("Después de la compra, Hildebrando tiene disponible " + dineroDisponible + " para sus vacaciones.");
})


//caso2
document.getElementById('toc').addEventListener('click', function() {
let tamañoAereoAlto = 55;
let tamañoAereoLargo = 40;
let tamañoAereoAncho = 20;

let hildebrandoAlto = 60;
let hildebrandoLargo = 40;
let hildebrandoAncho = 20;


let reduccionAlto = tamañoAereoAlto / hildebrandoAlto;
let reduccionLargo = tamañoAereoLargo / hildebrandoLargo;
let reduccionAncho = tamañoAereoAncho / hildebrandoAncho;
 
let maleta = Math.min(reduccionAlto, reduccionAncho, reduccionLargo)

let maletaAlto = maleta * hildebrandoAlto;
let maletaLargo = maleta * hildebrandoLargo;
let maletaAncho = maleta * hildebrandoAncho;

alert("Estas son las nuevas dimensiones de la maleta: ")
alert("El alto de la maleta es: " + maletaAlto)
alert("El largo de la maleta es: " + maletaLargo)
alert("El ancho de la maleta es: " + maletaAncho)
}
)

//caso 3
document.getElementById('Clickeame').addEventListener('click', function(){
    function binarioACaracteres(binario) {
        // Dividir la cadena binaria en grupos de 8 bits
        const grupos = binario.split('_');
      
        // Convertir cada grupo de 8 bits a caracteres ASCII
        const caracteres = grupos.map(grupo => String.fromCharCode(parseInt(grupo, 2)));
      
        // Unir los caracteres para formar la contraseña
        const contraseña = caracteres.join('');
      
        return contraseña;
      }
      
      const contraseñaBinaria = "01110010_01101001_01110111_01101001";
      const contraseña = binarioACaracteres(contraseñaBinaria);
      
      alert("La contraseña de wifi es: " + contraseña);

})


//caso 4
document.getElementById('tic').addEventListener('click', function(){ 
    function convertirTexto(texto) {
        // Reemplazar todas las vocales con la letra 'i'
        const textoModificado = texto.replace(/[aeiou]/gi, 'i');
        return textoModificado;
      }
      
      const textoOriginal = "Taxi me puede llevar al hotel mariposas amarillas";
      const textoConvertido = convertirTexto(textoOriginal);
      
      alert(textoConvertido);

})

//caso 5
document.getElementById('Clock').addEventListener('click', function(){ 
    function jugarPiedraPapelTijera(opcionUsuario) {
    const opcionesTaxista = ["piedra", "papel", "tijera"];
// Elegir aleatoriamente la opción del taxista
    const opcionTaxista = opcionesTaxista[Math.floor(Math.random() * opcionesTaxista.length)];
  
    alert(`Tu elección: ${opcionUsuario}`);
    alert(`Elección del taxista: ${opcionTaxista}`);
  
    if (opcionUsuario === opcionTaxista) {
        alert("Empate. No pasa nada.");
}   
    else if (
      (opcionUsuario === "piedra" && opcionTaxista === "tijera") 
      (opcionUsuario === "papel" && opcionTaxista === "piedra") 
      (opcionUsuario === "tijera" && opcionTaxista === "papel")
      ){
        alert("¡Ganaste! No se descuenta nada de tu salario.");
}   else {
      const salarioInicial = 2500000;
      const descuento = 300000;
      const salarioFinal = salarioInicial - descuento;
  
      alert(`Perdiste. Se descuentan ${descuento} pesos de tu salario.`);
      alert(`Salario final: ${salarioFinal} pesos.`);
}
}
// Obtener la opción del usuario
const opcionUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();

  if (["piedra", "papel", "tijera"].includes(opcionUsuario)) {
    jugarPiedraPapelTijera(opcionUsuario);
} 
    else {
    alert("Opción no válida. Inténtalo de nuevo.");
}

})


//caso 6
document.getElementById('tac').addEventListener('click', function(){ 
let diasEnMacondo = 4;
let dineroGastado = 0;
let estaVivo = true;

for (let dia = 1; dia <= diasEnMacondo && estaVivo; dia++) {
  let opcionVestimenta = prompt(`Día ${dia}: ¿Qué color de ropa eliges? (amarillo, verde, rojo, azul)`);

  if (opcionVestimenta === "amarillo") {
    let opcionPiscina = prompt("¿Quieres ir a la piscina? (sí/no)");

    if (opcionPiscina.toLowerCase() === "sí") {
      alert("Te metiste en la piscina, pero el agua tenía demasiado cloro. Te sientes ahogado y mueres.");
      estaVivo = false;
    } else {
      alert("Decidiste no ir a la piscina. No pasa nada.");
    }
}   else if (opcionVestimenta === "verde") {
    let opcionCaminata = prompt("¿Quieres hacer toda la caminata? (sí/no)");

    if (opcionCaminata.toLowerCase() === "sí") {
      alert("Hiciste toda la caminata y llegaste a una hermosa cascada. Te tomaste fotos y la pasaste genial.");
    } else {
      alert("Llegaste a cierto punto, te devolviste solo y, durante la noche, te perdiste.");
      estaVivo = false;
    }
}   else if (opcionVestimenta === "rojo") {
    let opcionPlaya = prompt("¿Quieres jugar voleibol, nadar en el mar o montar moto?");

    if (opcionPlaya.toLowerCase() === "voleibol") {
      alert("Jugaste voleibol y la pasaste genial.");
    } else if (opcionPlaya.toLowerCase() === "nadar en el mar") {
      alert("Nadaste en el mar y montaste moto. Luego, al descansar, tomaste un cóctel adulterado. Sientes un fuerte dolor de cabeza y comienzas a perder la visión. Tienes que regresar de emergencia.");
      estaVivo = false;
    } else {
      alert("Te pusiste a tomar cócteles mientras descansabas. Todo bien.");
    }
}   else if (opcionVestimenta === "azul") {
    let opcionActividadesHotel = prompt("¿Quieres jugar bingo, bailar o apostar en el casino?");

    if (opcionActividadesHotel.toLowerCase() === "bingo") {
      alert("Jugaste bingo y ganaste. Tu dinero aumentó.");
      dineroGastado += 50000;
    } else if (opcionActividadesHotel.toLowerCase() === "bailar") {
      alert("Bailaste y la pasaste muy bien.");
    } else if (opcionActividadesHotel.toLowerCase() === "casino") {
      alert("Apostaste en el casino, pero perdiste y solo te quedó el pasaje de regreso.");
      dineroGastado += 300000; 
      estaVivo = false;
    }
}   else {
    alert("Opción no válida. Inténtalo de nuevo.");
}
}

if (estaVivo) {
  alert(`Terminaron las vacaciones. Estuviste en Macondo ${diasEnMacondo} días. ¿Regresaste a casa? ${estaVivo ? "Sí" : "No"}. Dinero gastado: ${dineroGastado} pesos.`);
} else {
  alert("Desafortunadamente, no lograste terminar tus vacaciones en Macondo. Fin del juego.");
}
})
