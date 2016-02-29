(function () {
  angular
    .module('directivas')
    .directive('ejercicioTarjeta', function (){
      const ddo = {
      	template :`
      	 <h3>{{titulo}}</h3>
      	 <content></content>
      	`,

      	scope: {
      		titulo:'='
      	},

      	transclude: true,

      	link: 
      		(scope, elem,attr,ctrl,transclude) => {
      		  elem.find('content').append(transclude())
        }
      	
      };
      return ddo;
    });
}());
