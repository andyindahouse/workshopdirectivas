(function () {
  angular
    .module('directivas')
    .directive('ejercicioTarjetas', function (){

      const ddo = {
        require: 'ejercicioTarjetas',
        scope: {
          nombreEquipo: '=',
          equipo: '='
        },
        controller: () => {},
        transclude: true,
        bindToController: true,
        controllerAs: 'vm',
        template: `
          <h3>{{vm.titulo}}</h3>
          <content></content>
        `,
        link: function(scope, el, attrs, ctrl, transclude) {
          ctrl.equipo.forEach(
            (heroe, idx) =>
              transclude(function(transEl, transScope){
                el.find('content').append(transEl);
                transScope.$heroe = heroe;
                transScope.$index = idx;
              })
          );
        }
      };

      return ddo;
    });
}());
