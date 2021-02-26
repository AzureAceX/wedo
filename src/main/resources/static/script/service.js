app.factory("WedoSerivce", function ($http) {

  var listTasks = function (cb) {
    $http({
      method: "GET",
      // url: "http://localhost:8761/tasks/list",
      url: "https://azureace-wedo.herokuapp.com/tasks/list",
    })
    .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };

  var updateTaskStatus = function (data, cb) {
    $http({
      method: "PUT",
      url: "https://azureace-wedo.herokuapp.com/tasks/update-status",
      data: data,
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };

  var updateTaskDetails = function (param, data, cb) {
    $http({
      method: "PUT",
      url: "https://azureace-wedo.herokuapp.com/tasks/update-status " + param,
      data: data,
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };



//gett one
    var getTask = function (param, cb) {
    $http({
      method: "GET",
      url: "https://azureace-wedo.herokuapp.com/tasks/get/ " + param,
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };

  var createTask = function (data,cb) {
    console.log(data);
    $http({
      method: "POST",
      // url: "http://localhost:8761/tasks/create",
      url: "https://azureace-wedo.herokuapp.com/tasks/create",
      data: JSON.stringify(data),
    }).success(function (data, status, headers, config) {
        cb(null, data);
        toastr.info("Creating Task");
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };


  return {
    listTasks: listTasks,
    getTask: getTask,
    createTask: createTask,
    updateTaskStatus: updateTaskStatus,
    updateTaskDetails: updateTaskDetails,
  };

});
