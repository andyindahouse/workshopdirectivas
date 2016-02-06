(function () {
  angular
    .module('directivas')
    .directive('ejercicioHolamundo3', function (){
      var ddo = {
        template: '¡Hola, mundo!'
      };
      return ddo;
    });
}());
