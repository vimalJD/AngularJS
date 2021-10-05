angular.module("myApp1",[])
	.controller("myCtrl1", function($scope){
		$scope.products={
			name: "",
			description:  "",
			category: "",
			price: '',
			getproductinfo : function(){
				var prodt;     //local variable
				prodt=$scope.products;
				return prodt.name + ' ' + prodt.description + prodt.category + ' ' + prodt.price;
			}
		}
	});
	