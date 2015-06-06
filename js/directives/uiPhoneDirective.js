/**
 * Created by SQU4D on 06/06/2015.
 */
angular.module("listaTelefonica").directive("uiPhone", function(){
    return {
        require: "ngModel",
        link: function(scope, element, attrs, ctrl){
            var _formatPhone = function(phone){
                // utiliza expReg pra aceitar somente numeros
                phone = phone.replace(/[^0-9]+/g,"");
                // ao obter os 2 primeiros digitos coloca () para indicar o DDD
                if(phone.length > 2){
                    phone = "(" + phone.substring(0,2) + ")" + phone.substring(2);
                }

                // avalia se o campo contem 14 ou mais digitos
                if(phone.length >= 14){
                    phone = phone.substring(0,13);
                }

                // avalia se o campo corresponde a um numero de telefone de 10 ou 11 digitos
                // obtem sempre os 4 ultimos numeros digitados e ajusta o separador de modo que
                // fique 9999-9999 para 8 dig e 99999-9999 para 9 dig
                if(phone.length >= 12)
                {
                    phone = phone.substring(0, phone.length-4) + "-" + phone.substring(phone.length-4, phone.length);
                }

                return phone;
            };

            element.bind("keyup", function (){
                if(ctrl.$viewValue) {
                    ctrl.$setViewValue(_formatPhone(ctrl.$viewValue));
                    ctrl.$render();
                }
            });

            ctrl.$parsers.push(function (value){
                if(value.length === 14){
                    return value;
                }
            });
        }
    }
});