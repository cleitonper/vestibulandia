/*
* $
* ()
*/

var vestibulandia = angular.module('vestibulandia', ['ngRoute']);

vestibulandia.config(function($routeProvider)
{
    $routeProvider
        
    .when("/", 
    {
        templateUrl: "paginas/inicio.html",
        controller: "mainCtrl",
    })
    
    .when("/aulas",
    {
        templateUrl: "paginas/aulas.html",
        controller: "mainCtrl",
    })
    
        .when("/aulas/matematica-zero",
        {
            templateUrl: "paginas/aulas-matematica-zero.html",
            controller: "mainCtrl",
        })
    
        .when("/aulas/matematica",
        {
            templateUrl: "paginas/aulas-matematica.html",
            controller: "mainCtrl",
        })
    
        .when("/aulas/quimica",
        {
            templateUrl: "paginas/aulas-quimica.html",
            controller: "mainCtrl",
        })
    
        .when("/aulas/fisica",
        {
            templateUrl: "paginas/aulas-fisica.html",
            controller: "mainCtrl",
        })
    
    .when("/artigos",
    {
        templateUrl: "paginas/artigos.html",
        controller: "mainCtrl",
    })
    
    .when("/contato",
    {
        templateUrl: "paginas/contato.html",
        controller: "mainCtrl",
    });
});

vestibulandia.controller('mainCtrl', ['$rootScope', '$location', function($rootScope, $location)
{    
    $rootScope.$on('$locationChangeSuccess', function(event)
    {
        location.reload();
    });
    
    $rootScope.activetab = $location.path();
}]);

















