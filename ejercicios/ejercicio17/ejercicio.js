(function () {
  angular
    .module('directivas')
    .directive('validateSoloemes', function ($q, $timeout){

      const ddo = {
        require: 'ngModel',
        link: (scope, element, attr, ctrl) => {
          ctrl.$asyncValidators.soloEmes =
            ($modelValue, $viewValue) => {
              let value = $modelValue || $viewValue || '';
              return $q((resolve, reject) => {
                  $timeout(
                    () => /^m*$/.test(value) ? resolve() :reject(),
                    1000
                  );
              });

            }
        }
      };

      return ddo;
    });

}());
