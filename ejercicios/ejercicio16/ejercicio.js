(function () {
  angular
    .module('directivas')
    .directive('validatePar', function (){

      const ddo = {
        require: 'ngModel',
        link: (scope, element, attr, ctrl) => {
          ctrl.$validators.par =
            ($modelValue, $viewValue) => {
              let value = $modelValue || $viewValue;
              return !(value & 1);
            }
        }
      };

      return ddo;
    });

}());
