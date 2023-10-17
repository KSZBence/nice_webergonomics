import TextUrlapElem from "./TextUrlapElem.js"
import NumberUrlapelem from "./numberUrlapElem.js"

class UrlapView {
    #leiro = {}
    #urlapelemLista = []
    #osszElemValide= true
    #urlapAdat = {}
    constructor(szuloElem, leiro) {
        this.szuloElem = szuloElem
        this.#leiro = leiro
        this.szuloElem.append("<form>")
        this.formElem = this.szuloElem.children("form")
        this.#urlapOsszerak()
        this.submitelem=$("#submit")
        this.submitelem.on("click", (event) =>{
            event.preventDefault();
            this.#urlapelemLista.forEach(elem=>{
                this.#osszElemValide = this.#osszElemValide && elem.valid;
            })

            if (this.#osszElemValide) {
                console.log("valid");
                this.#urlapelemLista.forEach(elem=>{
                    console.log(elem);
                    this.#urlapAdat[elem.key]=elem.value
                })
            }else{
                console.log("nem valid");
            }

        })       
    }
    #urlapOsszerak() {
        let txt = ""
        for (const key in this.#leiro){ 
            switch (this.#leiro[key].tipus) {
                case "text":
                    new TextUrlapElem(key, this.#leiro[key], this.formElem)
                    break;
                case "number":
                    new NumberUrlapelem(key, this.#leiro[key], this.formElem)
                    break;
                default:
                    break;
            }
        }
        txt = `<marquee 
        scrollamount="30" 
        behaviour="slide"
        ><button class="btn btn-primary" type="submit" id="submit">Ok</button></marquee>`;
        this.formElem.append(txt);
    }

    

    
}

export default UrlapView