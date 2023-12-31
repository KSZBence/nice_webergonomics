class TextUrlapElem {
    #key
    #leiro = {}
    #value=""
    #valid
    constructor(key, leiro, szuloElem) {
        this.#key = key;
        this.#leiro = leiro;
        this.formElem = szuloElem; 
        this.#textElem();

        this.inputelem = $(`#${this.#key}`)
        this.validElem = this.formElem.children("div:last-child").children(".valid");
        this.invalidElem = this.formElem.children("div:last-child").children(".invalid");
        this.inputelem.on('keyup', ()=>{
            this.#value = this.inputelem.val();
            let reg = this.#leiro.regex
            let regObj = new RegExp(reg)
            if (regObj.test(this.#value)) {
                this.validElem.removeClass("elrejt");
                this.invalidElem.addClass("elrejt");
            } else {
                this.#valid = false
                this.invalidElem.removeClass("elrejt");
                this.validElem.addClass("elrejt");
            }
        })
    }
    #textElem(){
        let txt =`
        <div class="mb-3 mt-3">
        <label for="${this.#key}" class="form-label">
        ${this.#leiro.megjelenes}
        </label>
        <input type="${this.#leiro.tipus}"
         class="form-control" 
         id="${this.#key}" 
         placeholder="${this.#leiro.placeholder}" 
         name="${this.#key}" 
         pattern="${this.#leiro.regex}
         value="${this.#leiro.value}"
         ">
         <div class="valid elrejt">OK</div>
         <div class="invalid elrejt">${this.#leiro.validalas}</div>
      </div> 
        `;
        this.formElem.append(txt);
    }
}

export default TextUrlapElem;