(function () {
  angular
    .module('directivas')
    .directive('ejercicioHolamundo3', function (){
    	//let miVariable = '12';
      const ddo = {     
      	template: `Hola Mundo {{1+2}}
      	           <p>Helloooo</p> `
      };
      return ddo;
    });
}());
