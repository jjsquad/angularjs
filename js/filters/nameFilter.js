/**
 * Created by SQU4D on 06/06/2015.
 */

//cria um filtro e registra este como 'name'
angular.module("listaTelefonica").filter("name", function(){
    // o filtro retorna uma função que recebe um input
    // desmembra a entrada num array
    return function(input){
        var nomeCompleto = input.split(" "); //desmembra a entrada (input) em array
        // usando a função map do array
        // realiza a função de testar cada item do array de nomeCompleto
        // e ajusta capitalizando cada item deste array desde que
        // não atenda a expressão regular que exclui de, da, dos
        var nomeFormatado = nomeCompleto.map(function (nome){
            if(/^(da|de|dos)$/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        return nomeFormatado.join(" ");
    };
});