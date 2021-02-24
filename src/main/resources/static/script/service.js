angular.module("myApp").factory("WedoSerivce", function ($http) {

	/*
		Registry Operations
	*/
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

//   var addRegistry = function (data, cb) {
//     $http({
//       method: "POST",
//       url: "http://localhost:8761/registry/login",
//       data: data,
//     })
//       .success(function (data, status, headers, config) {
//         cb(null, data);
//       })
//       .error(function (data, status, headers, config) {
//         cb(data);
//       });
//   };

//   var updateRegistry = function (data, cb) {
//     $http({
//       method: "PUT",
//       url: "http://localhost:8761/registry/" + data.registryId,
//       data: data,
//     })
//       .success(function (data, status, headers, config) {
//         cb(null, data);
//       })
//       .error(function (data, status, headers, config) {
//         cb(data);
//       });
//   };

//   /*
// 	Employee Operations
// */
//   var listEmployees = function (cb) {
//     $http({
//       method: "GET",
//       url: "http://localhost:8761/employee/list",
//     })
//       .success(function (data, status, headers, config) {
//         cb(null, data);
//       })
//       .error(function (data, status, headers, config) {
//         cb(data);
//       });
//   };

//     var getEmployeeAccount = function (username, password, cb) {
//     $http({
//       method: "GET",
//       url: "http://localhost:8761/employee/" + username + '/' + password,
//     })
//       .success(function (data, status, headers, config) {
//         cb(null, data);
//       })
//       .error(function (data, status, headers, config) {
//         cb(data);
//       });
//   };

  var createTask = function (data, cb) {
    $http({
      method: "POST",
      // url: "http://localhost:8761/tasks/create",
      url: "https://azureace-wedo.herokuapp.com/tasks/create",
      data: JSON.stringify(data),
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };



  return {
    listTasks: listTasks,
    createTask: createTask,

  //   addRegistry: addRegistry,
  //   updateRegistry: updateRegistry,

	// listEmployees: listEmployees,
	// getEmployeeAccount: getEmployeeAccount,
  };
});
