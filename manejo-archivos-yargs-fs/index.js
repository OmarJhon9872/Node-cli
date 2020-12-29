'use strict';
/*Destructuracion de archivo*/
const {crearArchivo,mostrarTabla} = require('./config/multiplicar');
const {argumentos} = require('./config/yargs.js');
const colors = require('colors');
/*const argumentos = require('./config/yargs.js').argumentos;*/

let accion = argumentos._[0];

switch (accion) {
	case 'listar':
		mostrarTabla(argumentos.base, argumentos.limite);
		break;
	case 'guardar':
		crearArchivo(argumentos.base, argumentos.limite)
			.then( archivo => console.log("Archivo creado:"+archivo.green+" en el directorio archivos_tablas/".blue))
			.catch(err => console.log(err.red));
		// statements_1
		break;
	default:
		console.log('Comando desconocido, digite --help para ayuda'.red);
		break;
}

