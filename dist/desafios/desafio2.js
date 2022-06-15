"use strict";
// Como podemos melhorar o esse código usando TS? 
const pessoa1 = {
    nome: "Maria",
    idade: 29,
    ocupacao: "atriz"
};
const pessoa2 = {
    nome: "Roberto",
    idade: 19,
    ocupacao: "Padeiro"
};
const pessoa3 = {
    nome: "Laura",
    idade: 32,
    ocupacao: "Agrônoma"
};
const pessoa4 = {
    nome: "Anderson",
    idade: 30,
    ocupacao: "Estágio da Impulso"
};
var Ocupacao;
(function (Ocupacao) {
    Ocupacao[Ocupacao["Professor"] = 0] = "Professor";
    Ocupacao[Ocupacao["Atriz"] = 1] = "Atriz";
    Ocupacao[Ocupacao["Agr\u00F4noma"] = 2] = "Agr\u00F4noma";
    Ocupacao[Ocupacao["Est\u00E1gi\u00E1rioDaImpulso"] = 3] = "Est\u00E1gi\u00E1rioDaImpulso";
    Ocupacao[Ocupacao["Projetista"] = 4] = "Projetista";
    Ocupacao[Ocupacao["Arquiteto"] = 5] = "Arquiteto";
})(Ocupacao || (Ocupacao = {}));
const pessoa5 = {
    nome: 'Cláudio',
    idade: 27,
    ocupacao: Ocupacao.Projetista
};
const pessoa6 = {
    nome: 'Nino',
    idade: 15
};
const pessoa7 = {
    nome: "Alissom",
    idade: 17,
    ocupacao: Ocupacao.EstágiárioDaImpulso
};
