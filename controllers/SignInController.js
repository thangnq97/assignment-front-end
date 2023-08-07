window.SignInController = function($scope, $http, $rootScope) {
    $scope.user = {
        username: null,
        password: null
    }
    $http.get('http://localhost:3000/users')
    .then(res => {
        $scope.data = res.data;
        // console.log($scope.data);
    })
    .catch(err => {
        console.log(err);
    })

    $scope.signIn = () => {
        const userLog = $scope.data.find(user => user.username === $scope.user.username);

        if(userLog?.password === $scope.user.password) {
            $rootScope.userLog = userLog;
            if(userLog.role === 'admin') {
                $rootScope.admin = true;
            }

            $scope.user = {
                username: null,
                password: null
            }
            
            if(userLog.role === 'admin') {
                window.location.href = 'http://127.0.0.1:8080/index.html#!/admin';
            }else {
                window.location.href = 'http://127.0.0.1:8080/index.html#!/';
            }
        }
        else {
            $scope.message = 'Tài khoản hoặc mật khẩu không đúng';
            $scope.user = {
                username: null,
                password: null
            }
        }
    }
}