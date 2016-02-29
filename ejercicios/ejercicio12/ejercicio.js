(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes2', function (){
      const ddo = {
      	template: `
      	  <ul>
            <li ng-repeat="miembro in equipo">{{miembro.nombre}}</li>
          </ul>
      	`,
      	scope: {
      		equipo: '='
      	}
      };
      return ddo;
    });
}());
