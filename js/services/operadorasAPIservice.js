/**
 * Created by SQU4D on 06/06/2015.
 */
angular.module("listaTelefonica").service("operadorasAPI", function ($http, config) {
    this.getOperadoras = function () {
        return $http.get(config.baseUrl + "/getOperadoras.php");
    };
});