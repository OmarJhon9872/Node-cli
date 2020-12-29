let comandos = {
				base: {
					demand: true,
					alias: 'b'
				},
				limite: {
					alias: 'l',
					default: 10
				}
			};

const argumentos = require('yargs')
					.command('listar', 'Muestra la tabla de multiplicar', comandos)
					.command('guardar', 'Guarda la tabla de multiplicar', comandos)
					.help()
					.argv;


module.exports = {
	argumentos
}