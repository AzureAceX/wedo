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

    //On page load
    $scope.listTasks();




    /***
     * 
     * Tabulator INIT
     * 
     * 
     */

//define data array
var tabledata = [
  {id:1, name:"Oli Bob", progress:12, gender:"male", rating:1, col:"red", dob:"19/02/1984", car:1},
  {id:2, name:"Mary May", progress:1, gender:"female", rating:2, col:"blue", dob:"14/05/1982", car:true},
  {id:3, name:"Christine Lobowski", progress:42, gender:"female", rating:0, col:"green", dob:"22/05/1982", car:"true"},
  {id:4, name:"Brendon Philips", progress:100, gender:"male", rating:1, col:"orange", dob:"01/08/1980"},
  {id:5, name:"Margret Marmajuke", progress:16, gender:"female", rating:5, col:"yellow", dob:"31/01/1999"},
  {id:6, name:"Frank Harbours", progress:38, gender:"male", rating:4, col:"red", dob:"12/05/1966", car:1},
];

// var tabledata = $scope.taskList;

//Build Tabulator
var table = new Tabulator("tabulator-main", {
  height:"311px",
  selectable:true, //make rows selectable
  columns:[
    {title:"Task ID", field:"name", width:200},
    {title:"Name", field:"progress", width:100, hozAlign:"right", sorter:"number"},
    {title:"Description", field:"gender", width:100},
    {title:"Status", field:"rating", hozAlign:"center", width:80},
    // {title:"Favourite Color", field:"col"},
    // {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date"},
    // {title:"Driver", field:"car", hozAlign:"center", width:100},
  ],
  rowSelectionChanged:function(data, rows){
      //update selected row counter on selection change
    document.getElementById("select-stats").innerHTML = data.length;
  },
});

//select row on "select" button click
document.getElementById("select-row").addEventListener("click", function(){
  table.selectRow(1);
});

//deselect row on "deselect" button click
document.getElementById("deselect-row").addEventListener("click", function(){
  table.deselectRow(1);
});

//select row on "select all" button click
document.getElementById("select-all").addEventListener("click", function(){
  table.selectRow();
});

//deselect row on "deselect all" button click
document.getElementById("deselect-all").addEventListener("click", function(){
  table.deselectRow();
});







  }
);
