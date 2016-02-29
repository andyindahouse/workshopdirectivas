(function () {
  angular
    .module('directivas')
    .directive('validatePar', function (){
      const ddo = {
      	require:'ngModel',
      	link: (scope, elem,attr,ngModelCtrl)=>
      	ngModelCtrl.$validators.par = (newValue, oldValue) => 
      	!((newValue||oldValue) & 1)
      };
      return ddo;
    });

}());
