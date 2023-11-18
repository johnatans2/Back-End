//Declaração de Variáveis e Inputs
const Hero=["nome","XP"];
let Ranking;
//Processamento de Dados
if(Hero[1]<1000){
    Ranking="Ferro";
}else if(Hero[1]>1000&&Hero[1]<=2000){
    Ranking="Bronze";
}else if(Hero[1]>2000&&Hero[1]<=5000){
    Ranking="Prata";
}else if(Hero[1]>5000&&Hero[1]<=7000){
    Ranking="Ouro";
}else if(Hero[1]>7000&&Hero[1]<=8000){
    Ranking="Platina";
}else if(Hero[1]>8000&&Hero[1]<=9000){
    Ranking="Ascendente";
}else if(Hero[1]>9000&&Hero[1]<=10000){
    Ranking="Imortal";
}else{
    Ranking="Radiante";
}
//Output
console.log(`O herói de nome ${Hero[0]}, de nível ${Hero[1]}, está no Ranking ${Ranking}.`.toUpperCase());