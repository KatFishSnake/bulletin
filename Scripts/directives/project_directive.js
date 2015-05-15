/**
 * Created by dd31andre on 5/14/2015.
 */

app.directive("projectExample", [function(){
    return{
        templateUrl: "Scripts/html/project_example_directive.html",
        restrict: "E",
        transclude: true,
        scope: {
            info: '='
        },
        controller: function(){},
        controllerAs: "home_pageProjectsCtrl"
    }
}]);


//directive for the global header
app.directive("headerDirective", [function(){
    return{
        templateUrl: "Scripts/html/header_directive.html",
        restrict: "E",
        transclude: true
    }
}]);