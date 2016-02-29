(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy5', function (){
      const ddo = {
      	template: 'Hoy es {{vm.hoy}}',
      	controllerAs: 'vm',
      	controller: Controller
      };

      function Controller(dateFilter){
      	this.hoy = dateFilter(new Date(), 'dd/MM/yyyy');
      }
      return ddo;
    });
}());
