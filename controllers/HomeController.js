window.HomeController = function($scope, $http) {
    $http.get('http://localhost:3000/products')
    .then(res => {
        $scope.data = res.data;
    })
    .catch(err => {
        console.log(err);
    })
}