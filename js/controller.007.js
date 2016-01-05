var myApp = angular.module("myApp", [])
				   .controller("myController", function($scope){
					   var technologies = [
							{ name: "C#", like: 0, dislike: 0 },
							{ name: "ASP.NET", like: 0, dislike: 0 },
							{ name: "SQL", like: 0, dislike: 0 },
							{ name: "AngularJS", like: 0, dislike: 0 }
					   ];

					   $scope.technologies = technologies;

					   $scope.incrementLike = function(technology){
						   technology.like++;
					   };

					   $scope.incrementDislike = function(technology){
						   technology.dislike++;
					   }
				   });
