
class NumberUrlapelem{
    #key
    #leiro = {}
    #value=""
    #valid
    constructor(key, leiro, szuloElem) {
        this.#key = key;
        this.#leiro = leiro;
        this.formElem = szuloElem; 
        this.#numberElem();

        this.inputelem = $(`#${this.#key}`)
        this.validElem = this.formElem.children("div:last-child").children(".valid");
        this.invalidElem = this.formElem.children("div:last-child").children(".invalid");
        this.inputelem.on('keyup', ()=>{
            this.#value = this.inputelem.val();
            if (this.#value > 1000 && this.#value < 2023) {
                this.validElem.removeClass("elrejt");
                this.invalidElem.addClass("elrejt");
            } else {
                this.#valid = false
                this.invalidElem.removeClass("elrejt");
                this.validElem.addClass("elrejt");
            }
        })
    }

    #numberElem(key){
        let txt = `
        <div class="mb-3 mt-3">
        <label for="${key}" class="form-label">
        ${this.#leiro.megjelenes}
        </label>
        <input type="${this.#leiro.tipus}"
        class="form-control"
        id="${this.key}"
        placeholder=""
        name="${this.key}"
        pattern=""
        value="${this.#leiro.value}"
        "></div>  `;
        this.formElem.append(txt);
    }
}

export default NumberUrlapelem

