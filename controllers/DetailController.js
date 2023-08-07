window.DetailController = function($scope, $http, $routeParams) {
    const color = document.getElementById('color');
    const colorBox = document.getElementById('color_box');
    const quantity = document.getElementById('quantity');


    color.addEventListener('change', (e) => {
        const colorHex = e.target.value;
        colorBox.style.backgroundColor = `${colorHex}`;
    })

    quantity.addEventListener('change', (e) => {
        if(e.target.value <= 0) {
            e.target.value = 1;
        }
    })

    $scope.getInfo = () => {
        const id = $routeParams.id;
        $http.get('http://localhost:3000/products/' + id)
        .then(res => {
            $scope.product = res.data;
        })
        .catch(err => {
            console.log(err);
        })
    }

    $scope.getInfo()
}