window.SignUpController = function($scope, $http) {
    $scope.inputValue = {
        username: null,
        phone: null,
        email: null,
        password: null,
    }

    $scope.submit = () => {
        $scope.error = {
            username: false,
            phone: false,
            email: false,
            password: false
        }

        let check = true;

        if(!$scope.inputValue.username) {
            $scope.error.username = 'Vui lòng nhập username';
            check = false;
        }
        if(!$scope.inputValue.phone) {
            $scope.error.phone = 'Vui lòng nhập mobile number';
            check = false;
        }
        if(!$scope.inputValue.email) {
            $scope.error.email = 'Vui lòng nhập email';
            check = false;
        }
        if($scope.inputValue.email) {
            if($scope.inputValue.email.indexOf('@') == -1 || $scope.inputValue.email.indexOf('.') == -1) {
                $scope.error.email = 'Email không đúng định dạng';
                check = false;
            }
        }
        if(!$scope.inputValue.password) {
            $scope.error.password = 'Vui lòng nhập password';
            check = false;
        }

        if(check) {
            const obj = {
                username: $scope.inputValue.username,
                phone: $scope.inputValue.phone,
                email: $scope.inputValue.email,
                password: $scope.inputValue.password,
                role: 'user'
            }

            $http.post('http://localhost:3000/users', obj)
            .then(res => {
                window.location.href = 'http://127.0.0.1:8080/index.html#!/sign-in';
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}