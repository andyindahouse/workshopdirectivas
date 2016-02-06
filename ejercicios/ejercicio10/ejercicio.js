(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes0', function (){
      var ddo = {
        scope:{
          titulo: '@'
        },
        template: '<h3>{{titulo}}</h3>'
      };
      return ddo;
    });
}());
