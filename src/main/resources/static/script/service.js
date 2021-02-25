app.factory("WedoSerivce", function ($http) {


  var listTasks = function (cb) {
    $http({
      method: "GET",
      // url: "http://localhost:8761/tasks/list",
      url: "https://azureace-wedo.herokuapp.com/tasks/list",
    }).success(function (data, status, headers, config) {
        cb(null, data);
        $scope.taskList = data;
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };

  // var update = function (data, cb) {
  //   $http({
  //     method: "PUT",
  //     url: "http://localhost:8761//" + data.id ,
  //     data: data,
  //   })
  //     .success(function (data, status, headers, config) {
  //       cb(null, data);
  //     })
  //     .error(function (data, status, headers, config) {
  //       cb(data);
  //     });
  // };


//gett one
  //   var  = function (param, param, cb) {
  //   $http({
  //     method: "GET",
  //     url: "http://localhost:8761/  /" +   + '/' +  ,
  //   })
  //     .success(function (data, status, headers, config) {
  //       cb(null, data);
  //     })
  //     .error(function (data, status, headers, config) {
  //       cb(data);
  //     });
  // };

  var createTask = function (data,cb) {
    console.log(data);
    $http({
      method: "POST",
      // url: "http://localhost:8761/tasks/create",
      url: "https://azureace-wedo.herokuapp.com/tasks/create",
      data: JSON.stringify(data),
    }).success(function (data, status, headers, config) {
        cb(null, data);
        console.log(data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };


  return {
    listTasks: listTasks,
    createTask: createTask,
  };

});
