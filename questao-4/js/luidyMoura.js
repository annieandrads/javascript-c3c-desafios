


function handlerClick(){
    console.log('funcionou');

    var num = document.getElementById("inserirValor").value;

    document.getElementById("numeroInformado").innerHTML = num;

    console.log('num ' + num);

    if(num == null || num == ''){
        alert('Por favor, insira um número.');
    }else if(num > 45){
        alert('Por favor, informe um número menor do que 45.');
    }else{
        formarArray(num);
    }
}

function formarArray(num){
    let array = [];
    let arrayFinal = null;
    for( let i = 1; i <= num ; i++){
        if(i % 5 == 0){
            array.push('Luidy');
        }else if(i % 9 == 0){
            array.push('Moura');
        }else if(i % 9 == 0 && i % 5 == 0){
            array.push('LuidyMoura');
        }else{
            array.push(i);
        }
    }

    document.getElementById("arrayFornecido").innerHTML = array;
}