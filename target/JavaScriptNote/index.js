(function(){
    angular.module('noteApp',[]);

    angular.module('noteApp').controller('indexController',function($scope,$http){

        $scope.testMVC = function(){
            $http.post("testMVC",{message:'测试中文'}).success(function(res){
                console.info(res);
            })
        }
    })
})();