(function () {
  angular
    .module('directivas')
    .directive('ejercicioHolamundo2', function (){
      function link(scope, element, attrs, controller, transcludeFn) {
        element.html('¡Hola, mundo!');
      }

      var ddo = {
        restrict:'A',
        link: link
      };
      return ddo;
    });
}());
