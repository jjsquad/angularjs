/**
 * Created by SQU4D on 06/06/2015.
 */
angular.module("listaTelefonica").filter("ellipsis", function(){
    return function(input, size){
        if(input){
            if(input.length <= size) return input;
            var output = input.substring(0,(size || 10)) + "...";
        }
        return output;
    };
});