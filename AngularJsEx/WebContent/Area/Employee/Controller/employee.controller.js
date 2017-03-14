/**
 * My Second commit
 */
app.controller('employeePageController',['$scope','$exceptionHandler','employeePageService', function($scope,$exceptionHandler,employeePageService) {
	$scope.gender = ["Male","Female","Transgender"];
	$scope.pageName = "Employee Detail";
	var employeeData=[]; 
	$scope.saveOrUpdateEmployee = function(employee){	
		employeePageService.createNewEmployee(employee,$scope,employeeData);
		alert(JSON.stringify(employeeData));
	};
	
}])