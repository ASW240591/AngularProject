/**
 * 
 */

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise("/business")
	
	$stateProvider
		.state('business',{
			url:'/business',
			templateUrl: "Area/Bussiness/View/business.html"
		})
		.state('business.products',{
			url:'/products',
			templateUrl: "Area/Bussiness/View/NestedView/products.html",
			controller: 'businessController'
		})
		.state('business.services',{
			url:'/services',
			templateUrl:'Area/Bussiness/View/NestedView/services.html',
			controller:'businessController'
		})
		.state('portfolio', {
            url: "/portfolio",
            views: {
                ""  : { templateUrl: "Area/Portfolio/View/portfolio.html" },
                "view1@portfolio": { template: "Hello this is  view One" },
                "view2@portfolio": { templateUrl: "Area/Portfolio/View/MultiNestedView/clients.html" ,
                	controller: 'portFolioController'
                }
            }
        })
        .state('employeeDetail',{
        	url:"/createEmployee",
        	templateUrl:"Area/Employee/View/employeeDetail.html",
        	controller:"employeePageController"
        })
        .state('employeeList',{
        	url:"/employeeList",
        	templateUrl:"Area/Employee/View/employeeList.html",
        	controller:"employeePageController"
        })
}]);