angular.module("listaTelefonica").directive("uiDate", function(){
    return {
        require: "ngModel",
        link: function(scope, element, attrs, ctrl){
            var _formatDate = function(date){
                // substitui qualquer caractere que não for um número por vazio
                date = date.replace(/[^0-9]+/g,"");
                if(date.length > 2)
                {
                    date = date.substring(0,2) + "/" + date.substring(2);
                }
                if(date.length > 5)
                {
                    date = date.substring(0,5) + "/" + date.substring(5,9);
                }
                return date;
            };

            element.bind("keyup",function(){
                if(ctrl.$viewValue) {
                    ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                    ctrl.$render();
                }
            });

            ctrl.$parsers.push(function (value) { // value = valor retornado da propriedade value do input
                if(value.length === 10){
                    return value;
                }
            });
        }
    };
});