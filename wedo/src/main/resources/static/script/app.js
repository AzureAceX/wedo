var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
    
  $routeProvider
    .when("/", {
      templateUrl: "tasks.html",
    })
    // .when("/tasks", {
    //   templateUrl: "tasks.html",
    // })
    // .when("/", {
    //   templateUrl: "",
    // })
    .when("/banana", {
      template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
    })
    .otherwise({
      redirectTo: "/",
    });
});
