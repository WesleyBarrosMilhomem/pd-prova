(function () {
    'use strict';

    angular.module('pdProva')
        .directive('pdSuperCrud', pdSuperCrud);

    function pdSuperCrud($log) {
        return {
            restrict: 'E',
            scope: {
                titulo: '@',
                service:'='
            },
            transclude: {
                'header': '?pdSuperCrudHeader',
                'body': 'pdSuperCrudBody',
                'footer': '?pdSuperCrudFooter'
            },
            templateUrl:'app/arquitetura/directives/pd-super-crud/pd-super-crud.html',
            link: link
        };
        function link(scope) {
            iniciar();
            function iniciar() {
                verificarParametrosNaoInformado();
                definirValoresDefault();
            }
            function verificarParametrosNaoInformado() {
                if(!scope.titulo){
                    $log.error('Atenção: Não foi informado o título do crud');
                }
            }
            function definirValoresDefault() {
//                scope.formName = 'formProva'+scope.$id;
            }
        }
    }
})();