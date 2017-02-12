(function () {
    'use strict';

    angular
        .module('pdProva')
        .service('RoteadorService', RoteadorService);

    /* @ngInject */
    function RoteadorService($state) {
        this.roteadorSpa = roteadorSpa;
        this.roteadorSpaParam = roteadorSpaParam;

        function roteadorSpa(state) {
            $state.go(state)
        }

        function roteadorSpaParam(id) {
            $state.go('cadastroEstado',{ id:id});
        }
    }

})();

