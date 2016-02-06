(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes3', function (){
      const ddo = {
      };
      return ddo;
    });

  angular
    .module('directivas')
    .filter('soloFavoritos',
      () =>
        () => {}
    );
}());
