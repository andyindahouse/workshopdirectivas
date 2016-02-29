(function () {
  angular
    .module('directivas')
    .directive('validateSoloemes', function ($q, $timeout){
      const ddo = {
      	require:'ngModel',
      	link: 
      		(scope, elem,attr,ngModelCtrl)=>
      			ngModelCtrl.$asyncValidators.soloEmes = 
      			(newValue, oldValue) => {
	      			var value = newValue||oldValue;
	      			return $q(
	      				(resolve, reject) => {
	      				$timeout(() => {
	      					/^m*M*$/.test(value) ? resolve() :reject()
	      				},1000)
	      			})
	      		}
      };
      return ddo;
    });

}());
