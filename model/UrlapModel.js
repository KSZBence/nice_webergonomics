import { urlapleiro } from "./urlapleiro.js"

class UrlapModel {
    #leiro = {}
    constructor(){
        this.#leiro = urlapleiro;
    }

    getleiro(){
        return {...this.#leiro};
    }
}

export default UrlapModel