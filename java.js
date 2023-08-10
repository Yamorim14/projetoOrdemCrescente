function receber(){
    //criando o Array
    var numbers = [];

    for (let i = 1; i <=10; i++){
        //recebendo os números
        let input = document.getElementById('num' + i);
        //colocando em ordem
        numbers.push(parseFloat(input.value));
    }

    numbers.sort(function(a, b){
        return a - b;
    });

    //exibindo resultado
    let result = document.getElementById('resultado');
    result.textContent = 'Números ordenados: ' + numbers.join(', ')
}