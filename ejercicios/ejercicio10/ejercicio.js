(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes0', function (){
      const ddo = {
      	template: '<h3>{{titulo}}</h3>',
      	scope: {
      		titulo: '@'
      	}
      };
      return ddo;
    });
}());
