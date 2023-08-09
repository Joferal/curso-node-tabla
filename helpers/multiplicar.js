
const colors = require('colors');
const fs = require('fs');
const crearArchivo = async (base = 5, listar = false, hasta = 1) => {

    try {
     
        let salida = '';
        const archivo = `./salida/tabla-${base}.txt`

        for (let step = 1; step <= hasta; step++) {

            salida += `${base} x ${step} = ${base * step}\n`;
        }

        if (listar) {

            console.log('====================='.green)
            console.log(`     Tabla del: ${base}`.blue)
            console.log('====================='.green)
            console.log(salida.yellow);
        }


        fs.writeFileSync(archivo, salida);

        return `${archivo}`;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}

