(function () {
  angular
    .module('directivas')
    .directive('ejercicioTest', function (){
      function Controller(){
        this.contador = 0;
        this.aumenta = () => {
          this.contador += 1;
          this.onAumenta({$valor: this.contador});
        }
      }
      const ddo = {
        template: `
          <p><a ng-click="vm.aumenta()">Click</a></p>
        `,
        scope: {
          onAumenta: '&'
        },
        controllerAs:'vm',
        bindToController: true,
        controller: Controller
      };
      return ddo;
    })
    .factory('testDirectiva', function ($compile, $rootScope, $timeout, $q){
      return () => {
        let scope =  $rootScope.$new();
        scope.contador = null;
        var element = $compile('<ejercicio-test on-aumenta="contador=$valor"></ejercicio-test>')(scope);
        let a = element.find('a')[0];
        $timeout(() => {
          a.click();
          a.click();
        }, 0, false);

        return $q((resolve, reject) => {
          $timeout(()=>{
            scope.contador === 2 ? resolve(): reject();
          },100)
        });
      }
    });
}());
