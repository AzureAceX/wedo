var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
    
  // if(window.history && window.history.pushState){
  //   $locationProvider.html5Mode(true);
  // }
  
  $routeProvider
    .when("/", {
      // templateUrl: "banana.html",
      template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
    })
    .when("/tasks", {
      templateUrl: "tasks.html",
    })
    // .when("/", {
    //   templateUrl: "admin.registry.html",
    // })
    // .when("/banana", {
    //   template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
    // })
    .otherwise({
      redirectTo: "/",
    });
});
