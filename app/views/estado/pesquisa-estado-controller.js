(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('PesquisaEstadoControle', PesquisaEstadoControle);

    /* @ngInject */
    function PesquisaEstadoControle(EstadoService,$scope,RoteadorService) {
        var vm = this;

        vm.getEstadoService = getEstadoService
        vm.estadoService = getEstadoService();

        vm.editar = editar;
        vm.excluir = excluir;
        vm.novo = novo;

        $scope.gridOptions = {
            data: 'vm.estadoService.listaDeEstados',
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
                    onClick:editar
                },
                {
                    name: 'Excluir', field: 'excluir', width: 70,
                    cellTemplate: 'app/arquitetura/templates/cell-template-excluir.html',
                    onClick:excluir
                }
            ]
        };


        function getEstadoService() {
            return new EstadoService($scope);
        }

        function editar(index) {
            RoteadorService.roteadorSpaParam(vm.estadoService.listaDeEstados[index].id);
        }

        function excluir(index) {
          vm.estadoService.pdService.entidade = vm.estadoService.listaDeEstados[index];
          vm.estadoService.excluir();
        }

        function novo() {
            RoteadorService.roteadorSpa('cadastroEstado');
        }

    }

})();

