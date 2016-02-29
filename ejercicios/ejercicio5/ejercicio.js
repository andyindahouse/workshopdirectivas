(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy1', function (){
      const ddo = {
      	template: 'Hoy es {{hoy | date:"dd/MM/yyyy"}}',
      	controller: ($scope) => $scope.hoy = new Date()
      };
      return ddo;
    });
}());
