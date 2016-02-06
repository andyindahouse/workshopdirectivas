(function () {
  angular
    .module('directivas')
    .directive('seleccionaWolverine', function (){

      const ddo = {
        require: ['seleccionSuperheroes', 'ngModel'],
        priority: 1000,
        link:
          (scope, elem, attrs, ctrls)  =>
            ctrls[0].selecciona('Wolverine', 'click')

      };

      return ddo;
    });
}());
