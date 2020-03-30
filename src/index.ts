import { NintendoOfAmericaDumper } from "./dumpers/NintendoOfAmericaDumper";

const log = (data: any) => console.log(data);
const error = (data: any) => console.error(data);

async function main() {
    try {
        await new NintendoOfAmericaDumper()
            .searchAll()
    } catch (e) {
        console.error(e);
    }


}

main().then(() => console.log('Done execution'));

