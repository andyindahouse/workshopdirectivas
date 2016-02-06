(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes4', function (){
      const ddo = {
        scope:{
          equipo: '='
        },
        controller: () => {},
        controllerAs: 'vm',
        bindToController: true,
        template: `
          <ul>
            <li ng-repeat="heroe in vm.equipo">
              {{heroe.nombre}}
            </li>
          </ul>
        `
      };
      return ddo;
    });

}());
