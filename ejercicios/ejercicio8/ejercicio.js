(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy4', function (){
      function link(scope, element, attrs, controllers){
        scope.vm.hoy = new Date();
      }
      function Controller(){}
      var ddo = {
        controller: Controller,
        controllerAs: 'vm',
        link: link,
        template: 'Hoy es {{vm.hoy | date:"dd/MM/yyyy"}}'
      };
      return ddo;
    });
}());
