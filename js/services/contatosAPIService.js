/**
 * Created by SQU4D on 06/06/2015.
 */
angular.module("listaTelefonica").factory("contatosAPI", function($http){
    var _getContatos = function () {
        return $http.get("http://localhost/angularjs/routes/getContatos.php");
    };

    var _saveContato = function (contato) {
        return $http.post("http://localhost/angularjs/routes/saveContato.php", cotnato);
    };

    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    };

});