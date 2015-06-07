/**
 * Created by SQU4D on 06/06/2015.
 */
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI, serialGenerator){
    $scope.app = "Lista Telefônica";

    var carregaContatos = function(){
        contatosAPI.getContatos().success(function (data) {
            $scope.contatos = data.records;
        }).error(function (data, status) {
            $scope.message = "Ocorreu um problema: " + data;
        });
    };

    var carregaOperadoras = function(){
        operadorasAPI.getOperadoras().success(function (data){
            $scope.operadoras = data.records;
        }).error(function (data, status) {
            $scope.message = "Ocorreu um problema: " + data;
        });
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