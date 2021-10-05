angular.module("stdApp",[])
	.controller("stdCtrl", function($scope){
		$scope.student={
			firstName:"",
			lastName:"",
			fees:0,
			subjects:[
				{name: 'Physics ', marks: 98},
				{name: 'Chemistry ', marks: 97},
				{name: 'Maths ', marks: 99},
			],
			fullName: function(){
				var std;
				std=$scope.student;
				return std.firstName + ' ' + std.lastName;
			}
		}
	});