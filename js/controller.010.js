var myApp = angular.module("myApp", [])
                   .controller("Employees", function($scope){
                     var employees = [
            						{
            							name: "Ben",
            							birthday: new Date("November 23, 1980"),
            							gender: 1,
            							salary: 55000.788
            						},
            						{
            							name: "Sara",
            							birthday: new Date("May 05, 1970"),
            							gender: 2,
            							salary: 68000
            						},
            						{
            							name: "Mark",
            							birthday: new Date("August 15, 1974"),
            							gender: 3,
            							salary: 57000
            						},
            						{
            							name: "Pam",
            							birthday: new Date("October 27, 1979"),
            							gender: 2,
            							salary: 53000
            						},
            						{
            							name: "Todd",
            							birthday: new Date("December 30, 1983"),
            							gender: 1,
            							salary: 60000
            						}
                      ];

                      $scope.employees = employees;
                   })
