(function () {
  angular
    .module('directivas')
    .directive('ejercicioHolamundo0', () => {
      const ddo = {
      	link: (scope, elem) => {
        	elem.text('Hola mundo');
        }
      };
      return ddo;
    });
}());
