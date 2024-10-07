
function calculadora(operacao, numeros){
    let resultado = 0
    switch(operacao){
        case '+':
            for(i = 0; i < numeros.length; i++){
                resultado += numeros[i];
            }
            return resultado

        case '-':
            for(i = 0; i < numeros.length; i++){
                resultado -= numeros[i];
            }
            return resultado

        case '*':
            resultado = 1
            for(i = 1; i < numeros.length; i++){
                resultado *= numeros[i];
            }
            return resultado
    }
}
console.log(calculadora("+",[15,23,32,50]))
console.log(calculadora("-",[30,20]))
console.log(calculadora("*",[5,7,32]))

module.exports = calculadora;