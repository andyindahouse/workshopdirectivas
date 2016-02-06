(function () {
  angular
    .module('directivas')
    .directive('ejercicioHolamundo1', function (){
      function link(scope, element, attrs, controller, transcludeFn) {
        element.html('¡Hola, mundo!');
      }

      var ddo = {
        restrict:'E',
        link: link
      };
      return ddo;
    });
}());
