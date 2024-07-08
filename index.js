const prompt = require("prompt-sync")();
function parImpar(numero) {
    var stringNumero = numero.toString();
    var soma = 0;
    
    for (var i = 0; i < stringNumero.length; i++) {
        var digito = stringNumero[i];
        soma += digito;
        
        if(soma % 2 == 0){
            return "par";
        } else {
            return "ímpar";
        }
    }
}
var numero = prompt(`Digite um número: `);
var resultado = parImpar(numero) 

console.log(numero + " é", resultado)
