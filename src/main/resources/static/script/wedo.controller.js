app.controller(
  "WedoController",
  function ($scope, WedoSerivce, $location, $window) {

    //Create task
    $scope.newTask = {};

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

    // $scope.completeLogin = function (currentSessionInfo) {
    //   //creates registry record for the sign in operation
    //   $scope.logInObj.registry = {
    //     employeeId: $scope.sessionInfo.employeeId,
    //     isRemote: $scope.isRemote,
    //     location: $scope.location,
    //     signIn: $scope.sessionInfo.signInTime,
    //     signOut: null,
    //   };

      //REST For the registry creation using the object above
    //   LawwaService.addRegistry($scope.logInObj.registry, function (err, data) {
    //     if (!err) {
    //       // alert("Sign In Completed");
    //       window.location.href = "/loggedIn"; //forceful redirection - done because of lack of time
    //     }
    //     $scope.loggedIn = true;
    //   });
    // };

    // $scope.logout = function () {
    //   //find reisgtry from user sign in, and update that

    //   //find using sign in time and with eID?
    //   LawwaService.getRegistry(function (err, data) {
    //     if (!err) {
    //       $scope.empRegistry = data;
    //     }
    //   });

    //   console.log("Employee Clocking Out At: " + getDateTime());
    //   LawwaService.updateRegistry(function (err, data) {}, $scope.empRegistry);
    // };

    $scope.createTask = function () {
      WedoSerivce.createTask($scope.newTask, function (err, data) {
        if (!err) {
          console.log($scope.newTask);
        }
      });
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

    /*
  Generate DATE / TIME for today
*/
    // function getDateTime() {
    //   var today = new Date();
    //   var date =
    //     today.getFullYear() +
    //     "-" +
    //     (today.getMonth() + 1) +
    //     "-" +
    //     today.getDate();
    //   var time =
    //     today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //   var dateTime = date + " " + time;
    //   var res = new Date(dateTime).getTime();
    //   return res;
    // }



    $scope.closeModal = function () {
      $scope.newTask = {};
    };

    //On page load
    listTasks();

  }
);
