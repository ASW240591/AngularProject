/**
 * Custom Directive in Angularjs
 *  
 */


app.directive('myRadio',function(){
	return{
		restrict: "E",
		templateUrl: "Directive/View/myRadio.html",
		scope:{
			model:'=',
			fieldname:'=',
			listname:'='
		}
	};
})

	.directive('myDirective', function() {
    return {
        restrict: 'E',
        template: '<h1>I made a directive!</h1>'
    };
});