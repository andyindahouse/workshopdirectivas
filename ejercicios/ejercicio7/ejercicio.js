(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy3', function (){
      const ddo = {
      	template: 'Hoy es {{vm.hoy | date:"dd/MM/yyyy"}}',
      	controllerAs: 'vm',
      	link: (scope) => scope.vm.hoy = new Date()    
      };
      return ddo;
    });
}());
