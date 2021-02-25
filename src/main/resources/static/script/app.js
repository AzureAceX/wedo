var app = angular.module('myApp', ['ngRoute']);



app.config(['$routeProvider',
  function($routeProvider, $locationProvider) {

    if(window.history && window.history.pushState){
      $locationProvider.html5Mode(true);
    }
    
    $routeProvider
      // .when('/', {
      // // templateUrl: ".html",
      // template : "<h1>Test Route</h1><p>If you cannot see this well...</p>"
      // })
      .when('/tasks', {
        templateUrl: "tasks.html",
      })
      .when('/tasks/alt', {
        templateUrl: "altTask.html",
      })
      .when('/test', {
        template : "<h1>Test Route</h1><p>If you cannot see this then you've seen it.</p>"
      })
      .otherwise({
        redirectTo: '/tasks'
      });
  }]);
