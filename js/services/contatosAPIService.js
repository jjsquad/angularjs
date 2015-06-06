/**
 * Created by SQU4D on 06/06/2015.
 */
angular.module("listaTelefonica").factory("contatosAPI", function(){
    var _getContatos = function () {

        return [
            {nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
            {nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
            {nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
        ];

    };

    var _saveContato = function(scope,contato){
        scope.contatos.push(angular.copy(contato));
    };

    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    };
});