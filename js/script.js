let numeros=[];
 
window.onload = function () {
    let inputNumber = document.getElementById("numero_input");
    let numeros_pares = document.getElementById("numeros_pares");
    let numeros_impares = document.getElementById("numeros_impares");
    let numeros_primos = document.getElementById("numeros_primos");

    inputNumber.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            let value = Number(inputNumber.value);
                numeros.push(value);
                classificarNumero();
                inputNumber.value = "";
            
        }
    });

    function classificarNumero() {
        let pares = [];
        let impares = [];
        let primos = [];

        numeros.forEach(num => {
            if (esPrimo(num)) {
                primos.push(num);
                // numeros_primos.innerHTML=primos
            }
            else if (num % 2 === 0) {
                pares.push(num);
            } else {
                impares.push(num);
            }
        });
        
        numeros_pares.textContent = pares.join(" ");
        numeros_impares.textContent = impares.join(" ");
        numeros_primos.textContent = primos.join(" ");
    }
    function esPrimo(numero){
        if (numero <= 1) {
            return false;
        }
        for(let i=2;i<=Math.sqrt(numero);i++){
            if (numero%i==0){
                return false;
            }
        }
        return true;
    }
}