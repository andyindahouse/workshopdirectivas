(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes5', function (){

      function Controller() {
        this.selecciona = heroe => this.heroeSeleccionado({ $heroe: heroe});
      }

      const ddo = {
        scope:{
          equipo: '=',
          heroeSeleccionado: '&'
        },
        controller: Controller,
        controllerAs: 'vm',
        bindToController: true,
        template: `
          <ul>
            <li ng-repeat="heroe in vm.equipo">
              {{heroe.nombre}}
              <button ng-click="vm.selecciona(heroe)">Selecciona</button>
            </li>
          </ul>
        `
      };

      return ddo;
    });

}());
