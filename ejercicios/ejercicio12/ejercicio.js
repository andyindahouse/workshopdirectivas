(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes2', function (){
      var ddo = {
        scope:{
          equipo: '='
        },
        template: '<ul><li ng-repeat="heroe in equipo">{{heroe.nombre}}</li></ul>'
      };
      return ddo;
    });
}());
