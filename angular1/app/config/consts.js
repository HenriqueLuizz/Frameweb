(function(){
    angular.module('primeiraApp').constant('consts', {
        appName: 'Mean - Primeira Aplicação',
        version: '1.0',
        owner: 'Frameweb',
        year: '2017',
        site: 'https://github.com/HenriqueLuizz/Frameweb',
        apiUrl: 'http://localhost:3004/api',
        oapiUrl: 'http://localhost:3004/oapi',
        userKey: '_primeira_app_user'
    }).run(['$rootScope', 'consts', function($rootScope, consts){
        $rootScope.consts = consts
    }])
})()