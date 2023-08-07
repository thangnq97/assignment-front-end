const app = angular.module('myApp', ['ngRoute']);

app.controller('myController', ($scope, $rootScope) => {
    $scope.logOut = () => {
        $rootScope.userLog = null;
        $rootScope.admin = null;
        window.location.href = 'http://127.0.0.1:8080/index.html#!/sign-in';
    }
})

app.config($routeProvider => {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: HomeController 
    })
    .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: AdminController 
    })
    .when('/page', {
        templateUrl: 'views/page.html',
        controller: PageController 
    })
    .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: BlogController 
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: ContactController 
    })
    .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: CartController 
    })
    .when('/sign-in', {
        templateUrl: 'views/signIn.html',
        controller: SignInController 
    })
    .when('/sign-up', {
        templateUrl: 'views/signUp.html',
        controller: SignUpController 
    })
    .when('/detail/:id', {
        templateUrl: 'views/detail.html',
        controller: DetailController 
    })
    .otherwise({
        redirectTo : '/'
    })
})