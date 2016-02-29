(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes1', function (){
      const ddo = {
      	template: '<h3>{{supertitulo}}</h3>',
      	scope: {
      		supertitulo: '@titulo'
      	}
      };
      return ddo;
    });
}());
