var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    if(window.history && window.history.pushState){
      $locationProvider.html5Mode(true);
    }

    $routeProvider
      .when('/tasks', {
        templateUrl: "tasks.html",
      })
      .when('/ottask', {
        templateUrl: "taskoverdue.html",
      })
      .when('/tasks/:taskId', {
        templateUrl: "tasks_details.html",
        controller: "taskDetailCtrl",
      })
      .when('/alt', {
        templateUrl: "altListing.html",
      })
      .when('/test', {
        template : "<h1>Test Route</h1><p>If you can see this then you've seen it.</p>"
      })
      .otherwise({
        redirectTo: '/tasks'
      });
  }]);

  app.filter('statusFormatter', function() {
    return function(task) {
      var status = task.status;
      var result = "";
      switch(status){
        case 0:
          result = "PENDING";
          break;
        case 1:
          result = "DONE";
          break;
        case 2:
          result = "COMPLETE";
          break;
        default:
          console.log(status);
            result = "UNKNWON";
      }
      return result;
    };
  });
