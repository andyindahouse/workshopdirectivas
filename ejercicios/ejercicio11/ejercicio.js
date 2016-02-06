(function () {
  angular
    .module('directivas')
    .directive('ejercicioHeroes1', function (){
      var ddo = {
        scope:{
          supertitulo: '@titulo'
        },
        template: '<h3>{{supertitulo}}</h3>'
      };
      return ddo;
    });
}());
