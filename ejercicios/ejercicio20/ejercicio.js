(function () {
  angular
    .module('directivas')
    .directive('ejercicioTarjeta', function (){

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
          el.find('content').append(transclude());
        }
      };

      return ddo;
    });
}());
