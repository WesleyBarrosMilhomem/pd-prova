(function () {
    'use strict';

    angular.module('pdProva')
        .service('EstadoService', EstadoService);

    function EstadoService(PdService,PdAlertService) {
        return function (scope) {
            var self = this;

            self.scope = scope;
            self.pdService = getPdService();
            self.listaDeEstados = [];

            this.getPdService = getPdService;
            this.salvar = salvar;
            this.limpar = limpar;
            this.pesquisar = pesquisar;
            this.excluir = excluir;
            this.inicio= inicio;
            this.setarEstado = setarEstado;
            this.atualizar = atualizar;

            inicio();
            function inicio() {
                pesquisar();
            }

            function getPdService() {
                return new PdService('estado');
            }

            function salvar() {

                if (self.scope.formCadastro.$invalid){
                    PdAlertService.showError('Verifique os campos inválidos');
                    return;
                }

                pesquisar();

                for(var x = 0, y = self.listaDeEstados.length; x < y; x ++){
                    if(self.listaDeEstados[x].nome === self.pdService.entidade.nome){
                        PdAlertService.showError('Estado já cadastrado');
                        return;
                    }
                }

                self.pdService.entidade.id = (self.listaDeEstados.length+1);
                self.pdService.entidade.dataCadastro = new Date;
                self.listaDeEstados.push(self.pdService.entidade);
                atualizar();
                limpar();
                PdAlertService.showSuccess('Dados gravados com sucesso!');

            }

            function limpar() {
                self.pdService.limpar();
            }

            function excluir() {
                pesquisar();
                self.listaDeEstados.splice(
                    self.listaDeEstados.indexOf(self.pdService.entidade),1);
                atualizar();
                limpar();
            }

            function pesquisar() {
                self.listaDeEstados = self.pdService.pesquisar();
            }


            function setarEstado(id) {
                pesquisar();
                for(var x = 0, y = self.listaDeEstados.length; x < y; x ++){
                    if(self.listaDeEstados[x].id == id){
                        self.pdService.entidade = self.listaDeEstados[x];
                        return;
                    }
                }
            }

            function atualizar() {
                self.pdService.provider = self.listaDeEstados;
                self.pdService.salvar();
            }
        };
    }
})();