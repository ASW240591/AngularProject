/**
 * 
 */

app.factory('employeePageService',['$rootScope','$exceptionHandler','$log', function($rootScope,$exceptionHandler,$log) {
	service ={};
	service.createNewEmployee = createNewEmployee;
	service.editEmployee = editEmployee;
	service.getEmployeeDetail = getEmployeeDetail;
	service.removeEmployeeDetail = removeEmployeeDetail;
	
	return service;
	
	function createNewEmployee(employee,$scope,employeeData)
	{
		try
		{
			if(employee != undefined && employee != null)
				{
			
					employeeData.push(employee);
					$scope.employee ={};
				}
		}catch(exception)
		{
			$log.error($exceptionHandler(exception, " : Failed to Execute.."));
		}
		
	}
	
	function editEmployee(){
		
	}
	function getEmployeeDetail(){
		
	}
	function removeEmployeeDetail(){
		
	}
}]);
