'use strict';
let fs = require('fs');
const colors = require('colors');

let mostrarTabla = (base, limite) =>{
	return new Promise((resolve, reject) =>{

		if(!Number(base) || !Number(limite)){
			reject('No es un numero');
			return;
		}
		for(let i=1; i<=limite; i++){
			console.log( `${i} * ${base} = ${base*i}`.rainbow);
		}
	});
}

let crearArchivo = (base, limite) =>{
	return new Promise((resolve, reject) =>{

		if(!Number(base)){
			reject('No es un numero');
			return;
		}
		let tabla = '';
		for(let i=1; i<=limite; i++){
			tabla += i+' * '+base+" = "+(i*base)+"\n";
		}
		var dir = './archivos_tablas';

		if (!fs.existsSync(dir)){
		    fs.mkdirSync(dir);
		}
		fs.writeFile('archivos_tablas/Tabla del '+base, tabla, (err) =>{
			if(err){
				reject(err);
			}
			resolve('Tabla del '+base);
		});

	});
}


module.exports = {
	crearArchivo,
	mostrarTabla
};