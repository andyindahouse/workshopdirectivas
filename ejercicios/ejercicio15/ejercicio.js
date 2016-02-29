(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes5', function (){

      const ddo = {
        template: `
        <ul> <li ng-repeat="miembro in vm.equipo">
        
        {{miembro.nombre}}<button ng-click="vm.selecciona(miembro)">Pincha</button></li></ul>
        `,
        controllerAs: 'vm',
        bindToController: true,
        controller: Controller,
        scope: {
          equipo: '=',
          heroeSeleccionado: '&'
        }

      };
      function Controller () {
   			this.selecciona = 
   			miembro => this.heroeSeleccionado({'$heroe': miembro})
   		}
      return ddo;
    });

}());
