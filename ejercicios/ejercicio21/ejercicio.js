(function () {
  angular
    .module('directivas')
    .directive('ejercicioTarjeta2', function (){

      const ddo = {
        scope: {
          titulo: '='
        },
        transclude: true,
        template: `
          <article>
            <h3>{{titulo}}</h3>
            <div ng-transclude></div>
          </article>
        `
      };

      return ddo;
    });
}());
