// Como podemos melhorar o esse código usando TS? 

/*let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/

interface Pessoas {
    nome: string,
    idade: number,
    ocupacao: string
}

const pessoa1: Pessoas = {
    nome: "Maria",
    idade: 29,
    ocupacao: "atriz"
}

const pessoa2: Pessoas = {
    nome: "Roberto",
    idade: 19,
    ocupacao: "Padeiro"
}

const pessoa3: Pessoas = {
    nome: "Laura",
    idade: 32,
    ocupacao: "Agrônoma"
}

const pessoa4: Pessoas = {
    nome: "Anderson",
    idade: 30,
    ocupacao: "Estágio da Impulso"
}


enum Ocupacao {
    Professor,
    Atriz,
    Agrônoma,
    EstágiárioDaImpulso,
    Projetista,
    Arquiteto
}

interface Pessoas2 {
    nome: string,
    idade: number,
    ocupacao?: Ocupacao // "?" utilizado para caso a pessoa não tenha uma ocupação
}

const pessoa5: Pessoas2 = {
    nome: 'Cláudio',
    idade: 27,
    ocupacao: Ocupacao.Projetista
}

const pessoa6: Pessoas2 = {
    nome: 'Nino',
    idade: 15    
}

type Pessoa3 = {
    nome: string,
    idade: number,
    ocupacao?: Ocupacao
}

const pessoa7: Pessoa3 = {
    nome: "Alissom",
    idade: 17,
    ocupacao: Ocupacao.EstágiárioDaImpulso
}