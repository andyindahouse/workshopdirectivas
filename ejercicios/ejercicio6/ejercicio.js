(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy2', function (){
      function Controller(){
        this.hoy = new Date();
      }
      var ddo = {
        controller: Controller,
        controllerAs: 'vm',
        template: 'Hoy es {{vm.hoy | date:"dd/MM/yyyy"}}'
      };
      return ddo;
    });
}());
