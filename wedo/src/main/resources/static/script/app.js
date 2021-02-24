var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    
  // if(window.history && window.history.pushState){
  //   $locationProvider.html5Mode(true);
  // }
  
  $routeProvider
    .when("/", {
      templateUrl: "login.html",
    })
    .when("/loggedIn", {
        templateUrl: "loggedIn.html",
      })
    .when("/tasks", {
      templateUrl: "tasks.html",
    })
    .when("/registry", {
      templateUrl: "admin.registry.html",
    })
    .when("/banana", {
      template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
    })
    .otherwise({
      redirectTo: "/",
    });
});
