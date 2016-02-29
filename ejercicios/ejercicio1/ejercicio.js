(function () {
  angular
    .module('directivas')
    .directive('ejercicioHolamundo1', function (){
      const ddo = {
      	restrict:'E',
      	link: (scope, elem) => {
      		elem.text('Hola mundo');
      	}
      };
      return ddo;
    });
}());
