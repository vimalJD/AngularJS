angular.module("SEEDSportsStoreApp")
	.controller("storeCtrl",function($scope){
		
		$scope.data= {
			products:[
			{name: "Product #1", description: "A Product", category:"category #1", price:100},
			{name: "Product #2", description: "A Product", category:"category #2", price:110},
			{name: "Product #3", description: "A Product", category:"category #3", price:230},
			{name: "Product #4", description: "A Product", category:"category #4", price:145},
			]
		}
	});