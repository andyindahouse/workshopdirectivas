(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes4', function (){
      const ddo = {
        template: `
          <ul>
            <li ng-repeat="miembro in vm.equipo">
              <input type="checkbox" value="true" ng-model="miembro.favorito">
              {{miembro.nombre}}
            </li>
          </ul>
        `,
        controllerAs: 'vm',
        bindToController: true,
        controller: Controller,
        scope: {
          equipo: '='
        }

      };
      function Controller () {
   			
   		}
      return ddo;
    });

}());
