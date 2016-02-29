(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy2', function (){
      const ddo = {
      	template: 'Hoy es {{vm.hoy | date:"dd/MM/yyyy"}}',
      	controllerAs: 'vm',
      	controller: Controller 
      };
      function Controller () {
      	this.hoy = new Date();
      }
      return ddo;
    });
}());
