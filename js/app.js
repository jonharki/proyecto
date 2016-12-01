/*
angular.module('my-app', [])//declarando una aplicacion

angular.module('my-app')//haceindo referencia a una instancia ya creada



*/
(function(){
	'use strict';

	angular
	.module('My-app', [])//declarando una aplicacion
	.controller('ListProductController', function($scope){
		$scope.title = 'lista de productos';		
	})
	.controller('NavigationController', function($scope){
		$scope.title = '';		
	})
	.controller('FeaturedProductsController', function($scope){
		$scope.title='Productos Favoritos'
	})
	.controller('ProductController', function($scope){
		$scope.nombre = 'iphone';
		$scope.fecha='30 de noviembre';
		$scope.descripcion='sarasa'
		$scope.precio='$500';


	})
})();
