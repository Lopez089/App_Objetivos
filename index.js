// ¿Que quieres conseguir?
let objetivo = "Ganar 1000 mes"

// ¿Cuando quieres conseguirlo?
let fechaTerminoObj = new Date("may 31, 2017")

//¿Que haras para conseguirlo?
let acciones = [
	{
		nombre: "trabajar",
		fechaFinal: new Date ("april 12, 2017")
	},
	{
		nombre: "pedir un aumento",
		fechaFinal: new Date ("april 20, 2017")
	}
	/*{
		nombre: "pedir un aumento",
		fechaFinal: new Date ("april 24, 2017")
	},
	{
		nombre: "pedir un aumento",
		fechaFinal: new Date ("april 25, 2017")
	},
	{
		nombre: "pedir un aumento",
		fechaFinal: new Date ("may 5, 2017")
	},
	{
		nombre: "pedir un aumento",
		fechaFinal: new Date ("may 10*/, 2017")
	}

]

//Dia de hoy
let hoy = new Date("april 30, 2017")


// funciones
let msFaltan = () => fechaMs = fechaTerminoObj - hoy	
	
let diaconFaltan = () => msFaltan() / 86400000

let diaFaltan = () => Math.floor(diaconFaltan())


//Algotmo 
if (hoy >= fechaTerminoObj) {
	console.log('¡¡¡ FELICIDADES CAMPEON LO LOGRASTES !!!');
}
else {
	console.log(`Le faltan ${diaFaltan()} para conseguir el objetivo sigue así`);

	if (hoy >= acciones[0].fechaFinal) {
		console.log(`Hoy te toca hacer la acción ${acciones[0].nombre}`);
	}
	else if (hoy >= acciones[1].fechaFinal) {
		console.log(`Hoy te toca hacer la acción ${acciones[1].nombre}`);
	}
	else if (hoy >= acciones[2].fechaFinal) {
		console.log(`Hoy te toca hacer la acción ${acciones[2].nombre}`);
	}
	else if (hoy >= acciones[3].fechaFinal) {
		console.log(`Hoy te toca hacer la acción ${acciones[3].nombre}`);
	}
	else if (hoy >= acciones[4].fechaFinal) {
		console.log(`Hoy te toca hacer la acción ${acciones[4].nombre}`);
	}
}


/*console.log(objetivo);
console.log(fechaTerminoObj);*/
//console.log(acciones[1].nombre);