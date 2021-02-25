app.controller("WedoController",function ($scope, WedoSerivce, $location, $window) {

    //Create task
    $scope.newTask = {};
    $scope.updateTask = {};
    $scope.taskList = [];
    $scope.validTask = false;
    $scope.taskCount;


    //List tasks - to run on app load
    $scope.listTasks = function () {
      WedoSerivce.listTasks(function (err, data) {
        if (!err) {
          toastr.info("Loading Tasks");
          console.log(data);
          $scope.taskList = data;
          $scope.taskCount = data.length;
        }
      });
    };

    //On page load
    $scope.listTasks();



    $scope.createTask = function () {
      if($scope.validateTask()){
        WedoSerivce.createTask($scope.newTask, function (err, data) {
          if (!err) {
            console.log(data);
          }
        });
        toastr.success("Task Created");
  
        //relaod listing
        $scope.listTasks();
        $scope.closeCreateModal();
      }
    };

      $scope.updateTaskDetails = function() {
        WedoSerivce.updateTaskDetails($scope.updateTask, function (err, data){
            if (!err) {
                $scope.tasks = data;
                console.log($scope.tasks);
           }
        })
        $scope.listTasks();
      };

      $scope.updateTaskStatus = function (index) {

          var name = $scope.taskList[index].Name;
          $window.alert("Name: " + name );

        // WedoSerivce.updateTaskStatus(function (err, data){
        //     if (!err) {
        //         // $scope.tasks = data;
        //         console.log(data);
        //    }
        // })
      };


      /***
       * UTILITY FUNCTIONS
       */
    $scope.closeCreateModal = function () {
      $scope.newTask = {};
    };

    $scope.closeUpdateModal = function () {
      $scope.updateTask = {};
    };
    
    $scope.validateTask = function(){
      $scope.validTask = true;
 
       if(!$scope.newTask.name || !$scope.newTask.description){
         toastr.warning('Your Task Must Have A Name And A Description');
         $scope.validTask = false;
         return;
       }
 
       return $scope.validTask;
     }

  }
);
