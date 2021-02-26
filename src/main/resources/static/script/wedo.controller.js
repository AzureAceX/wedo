app.controller("WedoController", function ($scope, WedoSerivce, $location, $window) {

    //Create task
    $scope.newTask = {};
    $scope.updateTask = {};
    $scope.taskList = [];
    $scope.validTask = false;
    $scope.taskCount;
    $scope.item;
    $scope.checkedItem = [];

    //preference on loading on app run
    WedoSerivce.listTasks(function (err, data) {
      if (!err) {
        toastr.info("Loading Tasks");
        $scope.taskList = data;
        $scope.taskCount = data.length;
      }
    });

    //List tasks - to run on app load
    $scope.listTasks = function () {
      WedoSerivce.listTasks(function (err, data) {
        if (!err) {
          toastr.info("Loading Tasks");
          $scope.taskList = data;
          $scope.taskCount = data.length;
        }
      });
    };

    //On page load
    // $scope.listTasks();



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
        $scope.taskToUpdate = [];
        console.log($scope.checkedItem);

        //findCheckedItems - checkboxes flagged as true
        for(var x = 0; x<$scope.checkedItem.length; x++){
          if($scope.checkedItem[x] == true)
            $scope.taskToUpdate.push($scope.checkedItem[x]);
        }

        if($scope.taskToUpdate.length == 0){
          toast.warning("Make A Selection To Proceed");
          $scope.updateTask = {};
          return;
        }

        if($scope.taskToUpdate.length > 1){
          toast.error("Sorry, You Can Only Update Task Details Individually At This Point In Time");
          $scope.taskToUpdate = [];
          return;
        }

        WedoSerivce.updateTaskDetails($scope.taskToUpdate[0], function (err, data){
            if (!err) {
                $scope.tasks = data;
                console.log($scope.tasks);
           }
        })
        $scope.listTasks();
      };


      $scope.updateTaskStatus = function () {

        console.log(taskid);

        // $scope.targetTask;
        // $scope.checked = [];

        // //findCheckedItems - checkboxes flagged as true
        // for(var x = 0; x<$scope.checkedItem.length; x++){
        //   if(scope.checkedItem[x] == true)
        //     $scope.checked.push(scope.checkedItem[x]);
        // }

        // if($scope.taskToUpdate.length > 1){
        //   toast.error("Sorry, You Can Only Update Task Details Individually At This Point In Time");
        //   $scope.taskToUpdate = [];
        //   return;
        // }

        // WedoSerivce.getTask($scope.taskToUpdate[0], function (err, data){
        //   if (!err) {
        //     $scope.targetTask = data;
        //  }
        // })
        
        //   WedoSerivce.updateTaskStatus($scope.targetTask, function (err, data){
        //     if (!err) {
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

});



app.controller('taskDetailCtrl', ['$scope', '$routeParams',function($scope, $routeParams) {

  $scope.taskObj = {};
  $scope.taskId = $routeParams.taskId;

  console.log(taskId + "asdasdads");

        WedoSerivce.getTask($scope.taskId, function (err, data) {
          if (!err) {
            $scope.taskObj = data;
          }
        });


  }]);
