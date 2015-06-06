/**
 * Created by SQU4D on 06/06/2015.
 */
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI, serialGenerator){
    $scope.app = "Lista Telefônica";
    $scope.contatos = [];

    var carregaContatos = function(){
        $scope.contatos = contatosAPI.getContatos();
    };

    var carregaOperadoras = function(){
        $scope.operadoras = operadorasAPI.getOperadoras();
    };


    $scope.addContato = function(contato){
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContato($scope,contato);
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };

    $scope.delContatos = function(contatos){

    };

    $scope.ordernarPor = function (campo) {
        $scope.criterio = campo;
        $scope.ordenacao = !$scope.ordenacao;
    };

    carregaContatos();
    carregaOperadoras();
});