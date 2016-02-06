(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes3', function (){
      const ddo = {
        scope:{
          equipo: '='
        },
        template: `
          <ul>
            <li ng-repeat="heroe in equipo">
              <input ng-model="heroe.favorito" type="checkbox" value="true">
              {{heroe.nombre}}
            </li>
          </ul>
        `
      };
      return ddo;
    });

  angular
    .module('directivas')
    .filter('soloFavoritos',
      () =>
        lista =>
          lista.filter((heroe) => heroe.favorito)
    );
}());
