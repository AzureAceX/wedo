app.controller("WedoController",function ($scope, WedoSerivce, $location, $window) {

    //Create task
    $scope.newTask = {};

    console.log("bare minimum");

    //List tasks - to run on app load
    $scope.listTasks = function () {
      WedoSerivce.listTasks(function (err, data) {
        if (!err) {
          $scope.taskList = data;
        }
      });
    };

    //List Employees for employee view page - runs on app load
    // LawwaService.listEmployees(function (err, data) {
    //   if (!err) {
    //     $scope.employeesList = data;
    //   }
    // });

    // Log in functionality
    // $scope.login = function () {
    //   $scope.resetRegistryObj();

    //   //get employee using username/pass
    //   if (!$scope.username || !$scope.password) {
    //     alert("Please Enter Your Login Details");
    //     return;
    //   }

    //   LawwaService.getEmployeeAccount(
    //     $scope.username,
    //     $scope.password,
    //     function (err, data) {
    //       if (!err) {
    //         $scope.logInObj.employee = data;
    //         $scope.sessionInfo.employeeId = $scope.logInObj.employee.employeeId;
    //         $scope.sessionInfo.signInTime = getDateTime();
    //         $scope.completeLogin($scope.sessionInfo);
    //       }
    //     }
    //   );
    // };

    $scope.createTask = function () {
      WedoSerivce.createTask($scope.newTask, function (err, data) {
        if (!err) {
          console.log($scope.newTask);
        }
      });
      alert("Saving Task");
      $scope.closeModal();
    };

    //   $scope.updateEmployee = function() {
    //     LawwaService.updateEmployee(function (err, data){
    //         if (!err) {
    //             $scope.employees = data;
    //             console.log(data);
    //        }
    //     })
    //   };


    $scope.closeModal = function () {
      $scope.newTask = {};
    };

    //On page load
    $scope.listTasks();

  }
);
