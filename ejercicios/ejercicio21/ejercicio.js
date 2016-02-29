(function () {
  angular
    .module('directivas')
    .directive('ejercicioTarjeta2', function (){
      const ddo = {
      	template :`
        	<h3>{{titulo}}</h3>
        	<ng-transclude ></ng-transclude>
      	`,
        transclude: true,
      	scope: {
      		titulo:'='
      	}
      };
      return ddo;
    });
}());
