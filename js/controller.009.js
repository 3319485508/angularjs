var myApp = angular.module("myApp", [])
                   .controller("Empolyees", function($scope){
                     var employees = [
            						{
            							name: "Ben",
            							birthday: new Date("November 23, 1980"),
            							gender: "Male",
            							salary: 55000.788
            						},
            						{
            							name: "Sara",
            							birthday: new Date("May 05, 1970"),
            							gender: "Female",
            							salary: 68000
            						},
            						{
            							name: "Mark",
            							birthday: new Date("August 15, 1974"),
            							gender: "Male",
            							salary: 57000
            						},
            						{
            							name: "Pam",
            							birthday: new Date("October 27, 1979"),
            							gender: "Female",
            							salary: 53000
            						},
            						{
            							name: "Todd",
            							birthday: new Date("December 30, 1983"),
            							gender: "Male",
            							salary: 60000
            						}
                      ];

                      $scope.employees = employees;
                   })
