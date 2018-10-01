/**
 * Nicolás Eduardo Aldana
 * Modulo principal de la aplicacion
 */

var tasks = angular.module('tasks',['ui.router','ngResource']);
//Constantes de la aplicación
tasks.constant('CONFIG', {
    endpoint: 'http://127.0.0.1:3000/',
    templates: '../templates/'
});
//Configuración de la aplicacion
//rutas basadas en estados
tasks.config(['$stateProvider', '$urlRouterProvider', 'CONFIG', function($stateProvider, $urlRouterProvider, CONFIG){
	$stateProvider
    .state('home', {
        url:'/home',
        templateUrl: CONFIG.templates + 'home.html',
        controller: 'homeCtrl as home'
      })
    $urlRouterProvider.otherwise('/home');
}]);