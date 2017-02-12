(function () {
    'use strict';

    angular.module('pdProva')
        .config(config);

    function config($stateProvider) {
        const cadastroEstado = {
            name:'cadastroEstado',
            url:'/cadastro-estado/:id',
            templateUrl:'app/views/estado/cadastro-estado.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/estado/cadastro-estado-controller.js');
                }
            }
        };

        const pesquisaEstado = {
            name:'pesquisaEstado',
            url:'/pesquisa-estado',
            templateUrl:'app/views/estado/pesquisa-estado.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/estado/pesquisa-estado-controller.js');
                }
            }
        };

        $stateProvider
            .state('cadastroEstado',cadastroEstado)
            .state('pesquisaEstado',pesquisaEstado);
    }

})();