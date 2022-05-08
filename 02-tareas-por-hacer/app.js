import getMenu, { pausa } from "./helpers/getMenu.js";

const app = async () => {

    let opt = '';

    do {

        console.clear()
        opt = await getMenu()
        await pausa()

    } while (opt !== '0');
}

app();