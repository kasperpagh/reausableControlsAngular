'use strict';

var app = angular.module('myApp', []);

app.controller("Controller", ["$scope", "opgave3", function ($scope, opgave3)
    {
        $scope.abekat = {firstName: "john", lastName: "smith"};

        $scope.titleCase = opgave3.titleCase("abe kat");
        $scope.camelCase = opgave3.camelCase("abe kat");
        $scope.dashCase = opgave3.dashCase("abe kat");
        $scope.myFunction = function ()
        {
            $scope.mail = $("#inputEmail").val();
            $scope.pw = $("#inputPassword").val();
        };
    }]);

app.filter("nameFilter", function ()
{
    return function (input)
    {
        return input.lastName + " , " + input.firstName;
    };
});

app.directive("logon", function ()
{
    var john = {
        replace: "true",
        templateUrl: "loginForm.html"
    };
    return john;

});

app.service("opgave3", function ()
{
    this.titleCase = function (x)
    {
        var abe = x.split(" ");
        var res = "";

        for (var i = 0; i < abe.length; i++)
        {
            var a = abe[i].slice(0, 1);
//            console.log(a);
            var b = abe[i].slice(1, abe[i].length);
//            console.log(b);
            res += (a.toUpperCase() + b + " ");

        }
        return res;
    };
    this.camelCase = function (y)
    {
        var abe = y.split(" ");
        var res = "";

        for (var i = 0; i < abe.length; i++)
        {
            var a = abe[i].slice(0, 1);

            var b = abe[i].slice(1, abe[i].length);

            res += (a.toUpperCase() + b);

        }
        return res;
    };
    this.dashCase = function (z)
    {
        var abe = z.split(" ");
        var res = "";

        for (var i = 0; i < abe.length; i++)
        {

            if (i !== abe.length-1)
            {
                res += (abe[i] + "-");
            }
            else
            {
                res += (abe[i]);
            }

        }
        return res;
    };
});


app.filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});
