angular.module("myApp").factory("LawwaService", function ($http) {

	/*
		Registry Operations
	*/
  var listRegistry = function (cb) {
    $http({
      method: "GET",
      url: "http://localhost:8761/registry/list",
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };

  var addRegistry = function (data, cb) {
    $http({
      method: "POST",
      url: "http://localhost:8761/registry/login",
      data: data,
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };

  var updateRegistry = function (data, cb) {
    $http({
      method: "PUT",
      url: "http://localhost:8761/registry/" + data.registryId,
      data: data,
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };

  /*
	Employee Operations
*/
  var listEmployees = function (cb) {
    $http({
      method: "GET",
      url: "http://localhost:8761/employee/list",
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };

    var getEmployeeAccount = function (username, password, cb) {
    $http({
      method: "GET",
      url: "http://localhost:8761/employee/" + username + '/' + password,
    })
      .success(function (data, status, headers, config) {
        cb(null, data);
      })
      .error(function (data, status, headers, config) {
        cb(data);
      });
  };

  var createEmployee = function (data, cb) {
    $http({
      method: "POST",
      url: "http://localhost:8761/employee/create",
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
    listRegistry: listRegistry,
    addRegistry: addRegistry,
    updateRegistry: updateRegistry,

	listEmployees: listEmployees,
	getEmployeeAccount: getEmployeeAccount,
	createEmployee: createEmployee,

  };
});
