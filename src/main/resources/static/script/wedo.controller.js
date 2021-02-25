app.controller("WedoController",function ($scope, WedoSerivce, $location, $window) {

    //Create task
    $scope.newTask = {};
    $scope.updateTask = {};
    $scope.taskList = {};
    $scope.validTask = false;

    // console.log("o ye have made it this far");

    //List tasks - to run on app load
    $scope.listTasks = function () {
      WedoSerivce.listTasks(function (err, data) {
        console.log("load me too" );
        if (!err) {
          $scope.taskList = data;
          toastr.success("Task Created");
        }
      });
    };

    // WedoSerivce.listTasks(function (err, data) {
    //   if (!err) {
    //     $scope.taskList = data;
    //     console.log("load me?" + data);
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


      // if($scope.newTask.parenttask){
        // WedoSerivce.validateParent
          //search if its there, if it is add child column?
      // }

      $scope.validateTask();

      WedoSerivce.createTask($scope.newTask, function (err, data) {
        if (!err) {
          console.log(data);
        }
      });
      alert("Saving Task");
      //toastr.success("Adding Task");

      //relaod listing
      $scope.listTasks();
      $scope.closeModal();
    };


    $scope.validateTask = function(){
     $scope.validTask = true;

      if(!$scope.newTask.name || !$scope.newTask.description){
        console.log('Your Task Must Have A Name And A Description');
        $scope.validTask = false;
        return;
      }

      return $scope.validTask;
    }

      // $scope.updateTaskDetails = function(var updateDetails) {
      //   WedoSerivce.updateTask(updateDetails, function (err, data){
      //       if (!err) {
      //           $scope.tasks = data;
      //           console.log(data);
      //      }
      //   })
      // };

      // $scope.updateTaskStatus = function() {
      //   WedoSerivce.updateTask(function (err, data){
      //       if (!err) {
      //           $scope.tasks = data;
      //           console.log(data);
      //      }
      //   })
      // };


    $scope.closeCreateModal = function () {
      $scope.newTask = {};
    };

    $scope.closeUpdateModal = function () {
      $scope.updateTask = {};
    };

    //On page load
    $scope.listTasks();

  }
);
