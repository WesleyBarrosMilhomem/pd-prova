(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('CadastroEstadoControle', CadastroEstadoControle);

    /* @ngInject */
    function CadastroEstadoControle(EstadoService,$scope,$stateParams) {
        var vm = this;

        vm.getEstadoService = getEstadoService
        vm.estadoService = getEstadoService();

        vm.inicio = inicio;
        inicio();
        function inicio() {
            var id = $stateParams.id;
            if (id){
              vm.estadoService.setarEstado(id);
            }
        }

        function getEstadoService() {
            return new EstadoService($scope);
        }

    }

})();

