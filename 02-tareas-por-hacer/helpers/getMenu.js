import colors from 'colors'
import readline from 'readline'

const getMenu = () => {

    return new Promise((resolve, reject) => {

        console.log('============================='.green)
        console.log('    Seleccione Una Opción   '.green)
        console.log('=============================\n'.green)

        console.log(`${'1.'.green} Crear Tarea`)
        console.log(`${'2.'.green} Listar Tareas`)
        console.log(`${'3.'.green} Listar Tareas Completadas`)
        console.log(`${'4.'.green} Listar Tareas Pendientes`)
        console.log(`${'5.'.green} Completar Tarea(s)`)
        console.log(`${'6.'.green} Borrar Tarea`)
        console.log(`${'0.'.green} Salir \n`)

        const readLine = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readLine.question('Seleccione una Opción: '.green, (opt) => {
            resolve(opt)
            readLine.close()
        })

    })
}

export const pausa = () => {
    return new Promise(resolve => {
        const readLine = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readLine.question('Presione Enter Para Continurar '.green, (opt) => {
            resolve()
            readLine.close()
        })
    })
}

export default getMenu