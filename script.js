var nome = "aaa123";
var qtdVitorias = 5;
var qtdDerrotas = 5;
var saldoRankeadas;
var nivel;

calcularSaldoRankeadas = function(){
    resultado = qtdVitorias - qtdDerrotas;
    return resultado;
};

calcularNivel = function(){
    if(qtdVitorias < 10){
        nivel = "Ferro";
    }else if(11 < qtdVitorias > 20 ){
        nivel = "Bronze";
    }else if(21 < qtdVitorias > 50){
        nivel = "Prata";
    }else if(51 < qtdVitorias > 80){
        nivel = "Ouro";
    }else if(91 < qtdVitorias > 100){
        nivel = "Lendário";
    }else{
        nivel = "Imortal";
    };
    return nivel;
}

saldoRankeadas = calcularSaldoRankeadas();
nivel = calcularNivel();

console.log(`O Herói tem de saldo de ${saldoRankeadas} está no nível de ${nivel}`)



