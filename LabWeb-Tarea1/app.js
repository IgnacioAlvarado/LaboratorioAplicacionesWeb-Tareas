//Ignacio Alvarado Reyes A01656149
 
let mateBasica = require('./mate');
const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Calculador');
console.log('Selecciona la operación que quieres realizar escribiendo el número deseado:');

let optionHandler = ()=>{
    reader.question('1) Suma\n2) Resta\n3) Multiplicación\n4) División\n5) Modulo\n6) Salir\nTu entrada: ', 
    function(option){
        if(option== 6){
            return reader.close()
        }else{
            reader.question('Dame el primer número: ',
            function(a){
                reader.question('Dame el segundo número: ',
                function(b){
                    switch(option){
                        case '1':
                            console.log("suma");
                            console.log("Resultado: " + mateBasica.suma(parseFloat(a),parseFloat(b)) + "\n");
                            break;
                        case '2':
                            console.log("resta");
                            console.log("Resultado: " + mateBasica.resta(parseFloat(a),parseFloat(b)) + "\n");
                            break;
                        case '3':
                            console.log("multiplicación");
                            console.log("Resultado: " + mateBasica.multiplicacion(parseFloat(a),parseFloat(b)) + "\n");
                            break;
                        case '4':
                            console.log("división");
                            console.log("Resultado: " + mateBasica.division(parseFloat(a),parseFloat(b)) + "\n");
                            break;
                        case '5':
                            console.log("módulo");
                            console.log("Resultado: " + mateBasica.modulo(parseFloat(a),parseFloat(b)) + "\n");
                            break;
                        default:
                            console.log("Opción no valida");
                            break;
                    }
                    optionHandler();
                })
            })
        }
        
    })
};

optionHandler();

reader.on('close', function() {
    console.log("Cierre de la calculadora");
    process.exit(0);
});