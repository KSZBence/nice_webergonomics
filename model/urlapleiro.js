export const urlapleiro = {
    nev:{
        megjelenes:"Név", 
        tipus:"text", 
        value:"", 
        placeholder:"valaki vagyok", 
        regex:"[A-Z][a-z]{2,15}", 
        validalas:"Nev nagybetuvel kezdodik, legalabb 3 karakter"
    },
    szulEv:{
        megjelenes:"születési év", 
        tipus:"number", 
        value:"2000", 
        regex:{
            min:1000,
            max:2023
        } 
    }

}