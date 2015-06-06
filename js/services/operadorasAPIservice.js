/**
 * Created by SQU4D on 06/06/2015.
 */
angular.module("listaTelefonica").service("operadorasAPI", function () {
    this.getOperadoras = function () {
        return  [{nome: "Oi", codigo: 14, categoria: "Celular", preco: 1.72},
        {nome: "Tim", codigo: 41, categoria:"Celular", preco: 1.65},
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 2.01},
        {nome: "Claro", codigo: 21, categoria: "Celular", preco: 1.54},
        {nome: "GVT", codigo: 21, categoria: "Fixo", preco: 2.72},
        {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 0.69},
        {nome: "NET", codigo: 21, categoria: "Fixo", preco: 0.72}];
    };
});