(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy5', function (){
      function Controller(dateFilter){
        this.hoy = dateFilter(new Date(), 'dd/MM/yyyy');
      }
      var ddo = {
        controller: Controller,
        controllerAs: 'vm',
        template: 'Hoy es {{vm.hoy}}'
      };
      return ddo;
    });
}());
