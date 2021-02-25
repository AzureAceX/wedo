// var app = angular.module("myApp", ['ngRoute']);
//
// app.config(function ($routeProvider) {
//
//   $routeProvider
//     .when("/", {
//       templateUrl: "altTask.html",
//     })
//     .when("/task", {
//         templateUrl: "tasks.html",
//       })
//     .when("/test", {
//       template : "<h1>Test Route</h1><p>If you cannot see this well gg.</p>"
//     })
//     .otherwise({
//       redirectTo: "/",
//     });
//
// });

var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
      // templateUrl: ".html",
      template : "<h1>Test Route</h1><p>If you cannot see this well gg.</p>"
      })
      .when('/task', {
        templateUrl: "./tasks.html",
      })
      .when('/test', {
        template : "<h1>Test Route</h1><p>If you cannot see this well gg.</p>"
      })
      // .otherwise({
      //   redirectTo: '/'
      // });
  }]);
