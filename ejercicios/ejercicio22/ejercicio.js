(function () {
  angular
    .module('directivas')
    .directive('ejercicioTarjeta3', function (){

      const ddo = {
        scope: {
          titulo: '='
        },
        transclude: true,
        template: `
          <article>
            <h3>{{titulo}}</h3>
            <content></content>
          </article>
        `,
        link: function(scope, el, attrs, ctrl, transclude) {
          transclude(function(transEl, transScope){
            el.find('content').append(transEl);
            transScope.hoy = new Date();
          });
        }
      };

      return ddo;
    });
}());
