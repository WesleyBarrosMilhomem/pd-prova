(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('IndexControle', IndexControle);

    /* @ngInject */
    function IndexControle(RoteadorService) {
        var vm = this;

        vm.inicio = inicio;

        inicio();
        function inicio() {
            RoteadorService.roteadorSpa('pesquisaEstado');
        }

    }

})();

