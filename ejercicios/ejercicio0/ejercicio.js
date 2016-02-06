(function () {
  angular
    .module('directivas')
    .directive('ejercicioHolamundo0', function (){
      function link(scope, element, attrs, controller, transcludeFn) {
        element.html('¡Hola, mundo!');
      }

      var ddo = {
        link: link
      };
      return ddo;
    });
}());
