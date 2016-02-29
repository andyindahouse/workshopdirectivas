(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes3', function (){
      const ddo = {
        template: `
          <ul> 
            <li ng-repeat="miembro in equipo">
              <input type="checkbox" value="true" ng-model="miembro.favorito"/>
              {{miembro.nombre}}
            </li>
          </ul>
        `,
        scope: {
          equipo: '='
        }
   
      };
      return ddo;
    });

  angular
    .module('directivas')
    .filter('soloFavoritos',
      () =>
        listado => listado.filter((miembro) => miembro.favorito)
    );
}());
