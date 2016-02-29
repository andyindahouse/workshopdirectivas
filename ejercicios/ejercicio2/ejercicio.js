(function () {
  angular
    .module('directivas')
    .directive('ejercicioHolamundo2', function (){
      const ddo = {
      	restrict: 'A',
      	link: (scope, elemento) => {
      		elemento.text('Holaa Mundo!')
      	}
      };
      return ddo;
    });
}());
