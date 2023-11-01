//Declaração de Variáveis e Input
let saldoVitorias=SaldoRanking();
//Declaração de Funções e Processamento de Dados
function SaldoRanking(vitorias=0,derrotas=0){
    return vitorias-derrotas;
}
function Ranking(saldoVitorias){
    if(saldoVitorias<=10){
        return "Ferro";
    }else if(saldoVitorias>10&&saldoVitorias<=20){
        return "Bronze";
    }else if(saldoVitorias>20&&saldoVitorias<=50){
        return "Prata";
    }else if(saldoVitorias>50&&saldoVitorias<=80){
        return "Ouro";
    }else if(saldoVitorias>80&&saldoVitorias<=90){
        return "Diamante";
    }else if(saldoVitorias>90&&saldoVitorias<=100){
        return "Lendário";
    }else{
        return "Imortal";
    }
}
//Output
console.log(`O herói tem um saldo de ${saldoVitorias} vitorias e está no ranking ${Ranking(saldoVitorias)}.`.toUpperCase());