(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy0', function (){
      function link(scope){
        scope.hoy = new Date();
      }
      var ddo = {
        link: link,
        template: 'Hoy es {{hoy | date:"dd/MM/yyyy"}}'
      };
      return ddo;
    });
}());
