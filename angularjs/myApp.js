angular.module("myApp",[])
	.controller("myCtrl", function($scope){
		$scope.student={
			firstName: "",
			lastName:  "",
			fullName: function(){
				var std;     //local variable
				std=$scope.student;
				return std.firstName + ' ' + std.lastName;
			}
		}
	});
	