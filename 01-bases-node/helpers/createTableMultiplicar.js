import fs from 'fs'

export const createTableMultiplicar = nTable => {
    let i = 0
    let result = `TABLA DEL ${nTable}\n`

    while (i <= 10) {
        result += `${nTable} X ${i} = ${nTable * i}\n`
        i++
    }

    fs.writeFile(`tabla_del_${nTable}.txt`, result, (error) => {
        if (error) throw error
        console.log('archivo creado')
    })
}



