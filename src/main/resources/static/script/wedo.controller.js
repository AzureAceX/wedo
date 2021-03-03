app.controller("WedoController", function ($scope, WedoSerivce, $location, $window) {

    //Create task
    $scope.newTask = {};
    $scope.updateTask = {};
    $scope.taskList = [];
    $scope.validTask = false;
    $scope.taskCount;

    $scope.selectedRow;
    $scope.selectedRows = [];
    // $scope.item;
    $scope.checkedItem = [];

    //preference on loading on app run
    WedoSerivce.listTasks(function (err, data) {
      if (!err) {
        $scope.taskList = data;
        $scope.taskCount = data.length;
      }
    });

    //List tasks - the reload version
    $scope.listTasks = function () {
      toastr.info("Loading Tasks");
      WedoSerivce.listTasks(function (err, data) {
        if (!err) {
          $scope.taskList = data;
          $scope.selectedRow = data[0];
          $scope.selectedRow.selected = true;
          $scope.selectedRows.push($scope.selectedRow);
          $scope.taskCount = data.length;
        }
      });
    };

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

        // https://plnkr.co/edit/tEzmex?p=preview&preview

        console.log(task);
        // $scope.taskToUpdate = [];
        // console.log($scope.checkedItem);

        // //findCheckedItems - checkboxes flagged as true
        // for(var x = 0; x<$scope.checkedItem.length; x++){
        //   if($scope.checkedItem[x].isChecked == true){
        //     $scope.taskToUpdate.push($scope.checkedItem[x]);
        //   }
        // }

        // console.log($scope.taskToUpdate);

        // if($scope.taskToUpdate.length == 0){
        //   toastr.warning("Make A Selection To Proceed");
        //   $scope.updateTask = {};
        //   return;
        // }else if($scope.taskToUpdate.length > 1){
        //   toastr.error("Sorry, You Can Only Update Task Details Individually At This Point In Time");
        //   $scope.taskToUpdate = [];
        //   return;
        // }


      //  if($scope.selectedRows.length == 0){
      //     toastr.warning("Make A Selection To Proceed");
      //     $scope.updateTask = {};
      //     return;
      //   }else if($scope.selectedRows.length > 1){
      //     toastr.error("Sorry, You Can Only Update Task Details Individually At This Point In Time");
      //     $scope.selectedRow = {};
      //     return;
      //   }

        // if($scope.selectedRow.selected == false){
        //   toastr.warning("Make A Selection To Proceed");
        //   $scope.updateTask = {};
        //   return;
        // }

        // WedoSerivce.updateTaskDetails($scope.selectedRows[0].taskid, $scope.updateTask, function (err, data){
        //     if (!err) {
        //         // $scope.task = data;
        //         console.log(data);
        //    }
        // })
        // $scope.listTasks();
      };


      $scope.updateTaskStatus = function (task) {

        // console.log(task);
        $scope.selectedRow = task;

        // console.log($scope.selectedRows.length);

        // if($scope.selectedRows.length == 0){
        //   toastr.warning("Make A Selection To Proceed");
        //   $scope.updateTask = {};
        //   return;
        // }

        // if($scope.selectedRows.length > 1){
        //   toastr.error("Sorry, You Can Only Update Task Details Individually At This Point In Time");

        //   //unset everything && empty selection list
        //   for(var x = 0 ; x<$scope.selectedRows.length; x++){
        //     $scope.selectedRows[x].selected = false;
        //   }
        //   $scope.selectedRows = [];
        //   return;
        // }

        //   console.log($scope.selectedRows[0]);

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

        // WedoSerivce.getTask(task.taskid, function (err, data){
        //   if (!err) {
        //     $scope.targetTask = data;
        //     console.log(data);
        //  }
        // })

          WedoSerivce.updateTaskStatus(task.taskid, task, function (err, data){
            if (!err) {
                console.log(data);
           }
        })
        $scope.listTasks();
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

     $scope.rowSelected = function(row){

       $scope.selectedRow = row;
       $scope.selectedRows.push(row);

      //  var popped = false;
      //
      // //If the task exists, pop it by searching existing list, and splicing
      // for(var x = 0; x<$scope.selectedRows.length; x++){
      //   if(x<$scope.selectedRows[x].taskid == row.taskid){
      //     $scope.selectedRows.splice([x],1);
      //     popped = true;
      //   }
      // }
      //
      // //if we arent removing a selection
      // if(popped == false){
      //   $scope.selectedRow = row;
      //   $scope.selectedRows.push(row);
      //   // popped = false;
      // }
      //
      // console.log($scope.selectedRows);
    };

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
