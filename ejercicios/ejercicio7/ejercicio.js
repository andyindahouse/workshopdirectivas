(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy3', function (){
      function link(scope, element, attrs, controllers){
        scope.vm = {
          hoy: new Date()
        };
      }
      function Controller(){}
      var ddo = {
        controllerAs: 'vm',
        link: link,
        template: 'Hoy es {{vm.hoy | date:"dd/MM/yyyy"}}'
      };
      return ddo;
    });
}());
