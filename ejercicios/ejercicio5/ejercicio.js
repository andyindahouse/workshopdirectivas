(function () {
  angular
    .module('directivas')
    .directive('ejercicioHoy1', function (){
      function Controller($scope){
        $scope.hoy = new Date();
      }
      var ddo = {
        controller: Controller,
        template: 'Hoy es {{hoy | date:"dd/MM/yyyy"}}'
      };
      return ddo;
    });
}());
