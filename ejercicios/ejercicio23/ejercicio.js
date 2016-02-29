(function () {
  angular
    .module('directivas')
    .directive('ejercicioTarjetas', function (){
      const ddo = {
      	scope: {
      		nombreEquipo: '=',
      		equipo: '='
      	},
      	template:'<h3>{{nombreEquipo}}</h3><content></content>',
      	transclude: true,
      	link: 
          (scope, elem,attr,ctrl,transclude) => {
            scope.$watch('equipo'), newValue => {
              if (!newValue) return;
              newValue.forEach(
                (miembro, idx) =>
                  transclude(
                    (elemT, scopeT) => {
                      elem.find('content').append(elemT);
                      scopeT.$index = idx;
                      scopeT.$heroe = miembro;
                    }
                  )
              )
            }
          }
      };
      return ddo;
    });
}());
