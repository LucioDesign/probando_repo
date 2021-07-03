function obtenerNumeroAsync() {
  return new Promise(function (resolve, reject) {
    try {
      setTimeout(() => {
        resolve("Salió todo joya, acá tenes tu data");
      }, 2000);
    } catch (error) {
      reject(error);
    }
  });
}
async function programa() {
  try {
    const resultado = await obtenerNumeroAsync();
    console.log(resultado);
  } catch (error) {
    console.log("Lo sentimos, ocurrió un error: " + error);
  }
}

obtenerNumeroAsync();
programa();

//---------------------------------------- TPS TRY & CATCH-----------------------------------------//
// 1A
function dividirNumeros(dividendo, divisor) {
  return dividendo / divisor;
}

function PromesaDiv() {
  return new Promise(function (resolve, reject) {
    try {
      setTimeout(() => {
        resolve(console.log(dividirNumeros(10, 5)));
      }, 3000);
    } catch (error) {
      reject(error);
    }
  });
}
PromesaDiv();

// 1b-------------------------------------------------------------------------------------

//Usando then y catch completar la función "programa" dada para llamar a dividirNumeros e imprimir el resultado o imprimir unmensaje de error si ocurriera. Para provocar un error pueden enviar 0 como divisor.

/*function programa() {
  promesa.then(callbackSiSeCumple).catch(callbackSiNoSeCumple);
}
programa();
*/
//----------------------------------------------------------------------------------------------------------

//1c
// Reescribir la función programa del insiso anterior para que use async y await

async function programa() {
  const resultado = await obtenerNumeroAsync();
}
programa();
