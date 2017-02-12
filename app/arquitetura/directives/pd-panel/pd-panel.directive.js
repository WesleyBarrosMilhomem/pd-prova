(function () {
    'use strict';

    angular.module('pdProva')
        .directive('pdPanel', pdPanel);

    function pdPanel() {
        return {
            restrict: 'E',
            templateUrl:'app/arquitetura/directives/pd-panel/pd-panel.html',
            scope:{
                titulo: '@',
                tipo:'@',
            },
            transclude:true,
            link: link
        };

        function link(scope) {
            scope.classTipo = 'panel-' +
                (scope.tipo || 'default');

        }
    }
})();