(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy0', function (){
      const ddo = {
      	template: 'Hoy es {{hoy | date:"dd/MM/yyyy"}}',
      	link: scope => scope.hoy = new Date()
      };
      return ddo;
    });
}());
