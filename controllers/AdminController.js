window.AdminController = function($scope, $http) {
    $scope.isCheckedAdd = null;
    $scope.isCheckedUpdate = null;
    $scope.idUpdate = null;
    $scope.inputValue = {
        name: null,
        desc: null,
        price: null,
        img: null,
        color: null
    }

    $http.get('http://localhost:3000/products')
    .then(res => {
        $scope.data = res.data;
    })
    .catch(err => {
        console.log(err);
    })

    $scope.store = () => {
        $scope.error = {
            name: false,
            desc: false,
            price: false,
            img: false,
            color: false
        }

        let check = true;

        if(!$scope.inputValue.name) {
            console.log(1);
            $scope.error.name = 'Vui lòng nhập tên sản phẩm';
            check = false;
        }

        if(!$scope.inputValue.desc) {
            $scope.error.desc = 'Vui lòng nhập mô tả';
            check = false;
        }

        if(!$scope.inputValue.price) {
            $scope.error.price = 'Vui lòng nhập giá';
            check = false;
        }

        if(!$scope.inputValue.img) {
            $scope.error.img = 'Vui lòng nhập ảnh';
            check = false;
        }

        if(!$scope.inputValue.color) {
            $scope.error.color = 'Vui lòng nhập màu';
            check = false;
        }

        if(check) {
            const obj = {
                name: $scope.inputValue.name,
                desc: $scope.inputValue.desc,
                price: $scope.inputValue.price,
                img: $scope.inputValue.img,
                color: $scope.inputValue.color
            }
            
            $http.post('http://localhost:3000/products', obj)
            .then(res => {
                alert('Thêm sản phẩm thành công!!!');
                $scope.inputValue = {
                    name: null,
                    desc: null,
                    price: null,
                    img: null,
                    color: null
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    $scope.show = (id) => {
        $scope.isCheckedAdd = false;
        $scope.isCheckedUpdate = true;
        $scope.idUpdate = id;
        $http.get('http://localhost:3000/products/' + id)
        .then(res => {
            angular.copy(res.data, $scope.inputValue);
        })
    }

    $scope.delete = (id) => {
        const check = confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
        
        if(check) {
            $http.delete('http://localhost:3000/products/' + id)
            .then(res => {
                alert('Xóa thành công sản phẩm');
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    $scope.close = () => {
        $scope.inputValue = {
            name: null,
            desc: null,
            price: null,
            img: null,
            color: null
        }

        $scope.error = {
            name: false,
            desc: false,
            price: false,
            img: false,
            color: false
        }
    }

    $scope.checkAdd = () => {
        $scope.isCheckedAdd = true;
        $scope.isCheckedUpdate = false;
    }

    $scope.update = () => {
        $scope.error = {
            name: false,
            desc: false,
            price: false,
            img: false,
            color: false
        }

        let check = true;

        if(!$scope.inputValue.name) {
            $scope.error.name = 'Vui lòng nhập tên sản phẩm';
            check = false;
        }

        if(!$scope.inputValue.desc) {
            $scope.error.desc = 'Vui lòng nhập mô tả';
            check = false;
        }

        if(!$scope.inputValue.price) {
            $scope.error.price = 'Vui lòng nhập giá';
            check = false;
        }

        if(!$scope.inputValue.img) {
            $scope.error.img = 'Vui lòng nhập ảnh';
            check = false;
        }

        if(!$scope.inputValue.color) {
            $scope.error.color = 'Vui lòng nhập màu';
            check = false;
        }

        if(check) {
            const obj = {
                name: $scope.inputValue.name,
                desc: $scope.inputValue.desc,
                price: $scope.inputValue.price,
                img: $scope.inputValue.img,
                color: $scope.inputValue.color
            }
            
            $http.put('http://localhost:3000/products/' + $scope.idUpdate, obj)
            .then(res => {
                alert('Sửa sản phẩm thành công!!!');
                $scope.inputValue = {
                    name: null,
                    desc: null,
                    price: null,
                    img: null,
                    color: null
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

}