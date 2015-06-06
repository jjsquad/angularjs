/**
 * Created by SQU4D on 06/06/2015.
 */
angular.module("listaTelefonica").provider("serialGenerator", function () {
    var _length = 16;

    this.getLength = function () {
        return _length;
    };

    this.setLength = function (length) {
        length = _length;
    };

    this.$get = function(){
        return {
            generate: function() {
                var serial = "";
                while (serial.length < 16){
                    serial += String.fromCharCode(Math.floor(Math.random()* 64) + 32);
                }
                return serial;
            }
        };
    };
});