(function () {
  angular
    .module('directivas')
    .directive('ejercicioTarjeta3', function (){
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
      		  transclude((elemTransclude,scopeTranscluido) => {
      			  elem.find('content').append(elemTransclude);
              scopeTranscluido.hoy = new Date();
            })
      		}
      	
      };
      return ddo;
    });
}());
