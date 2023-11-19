//Criação da Classe
class Heroi{
    nome;
    idade;
    tipo;
    constructor(nome,idade,tipo){
        this.nome=nome;
        this.idade=idade;
        this.tipo=tipo;
    }
    ataque(ataque=''){
        switch(this.tipo){
            case "ninja":
                ataque="shuriken";
                break;
            case "mago":
                ataque="magia";
                break;
            case "monge":
                ataque="artes marciais";
                break;
            default:
                ataque="espada";
                break;
        }
        console.log(`O ${Hero.tipo} atacou usando ${ataque}`)
    }
}
//Input
const Hero=new Heroi("Johnatan",22,"mago");
//Output
Hero.ataque()