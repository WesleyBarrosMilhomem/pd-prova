(function () {
    'use strict';

    angular.module('pdProva')
        .directive('pdGrid', pdGrid);

    function pdGrid() {
        return {
            restrict: 'E',
            templateUrl: 'app/arquitetura/directives/pd-grid/pd-grid.html',
            scope: {
                lista:'=',
            },
            link: link
        };

        function link($scope) {

            $scope.listaDados = $scope.lista;

            $scope.gridOptions = {
                data: 'listaDados',
                enableColumnMenus: false,
                enableRowSelection:true,
                columnDefs: [
                    {name: 'Id', field: 'id', width: 50},
                    {name: 'Nome', field: 'nome'},
                    {
                        name: 'Data Cadastro',
                        field: 'dataCadastro',
                        width: 120,
                        cellTemplate: 'app/arquitetura/templates/cell-template-date.html'
                    },
                    {
                        name: 'Editar', field: 'editar', width: 70,
                        cellTemplate: 'app/arquitetura/templates/cell-template-editar.html',
                        onClick:$scope.metodoExcluir
                    },
                    {
                        name: 'Excluir', field: 'excluir', width: 70,
                        cellTemplate: 'app/arquitetura/templates/cell-template-excluir.html',
                        onClick:$scope.excluir
                    }
                ]
            };
        }
    }
})();