(function () {
  angular
    .module('directivas')
    .directive('seleccionSuperheroes', function ($q, $timeout){

      function Controller(){
        this.valores = ['Wolverine', 'Beast', 'Spiderman' ,'Superman'];
      }
      const ddo = {
        require: 'ngModel',
        controller: Controller,
        bindToController: true,
        controllerAs: 'vm',
        template: `
          <ul>
            <li ng-click="vm.selecciona(nombre)" ng-class="{selected: nombre === ngModel.$viewValue}" ng-repeat='nombre in vm.valores'>{{nombre}}</li>
          </ul>
        `,
        link: (scope, element, attr, ctrl) => {
          scope.ngModel = ctrl;

          function parser(value) {
            if (value) {
              return {nombre: value};
            }
          }
          ctrl.$parsers.push(parser);
          scope.vm.selecciona =
            nombre => {
              ctrl.$setViewValue(nombre, 'click');
            }
        }
      };

      return ddo;
    });

}());
