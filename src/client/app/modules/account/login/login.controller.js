(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService','$location','$http'];

    /* @ngInject */
    function LoginController(LoginService, $location, $http) {
        var vm = this;

        vm.login = login;

        // initController();
        //
        // function initController() {
        //   return LoginService.logout();
        // }

        function login() {
          vm.loading = true;
          LoginService.login(vm.user, function(result){
            if(result === true) {
              $location.path('/drivers');
            } else {
              vm.error = 'Usuário ou senha incorretos';
              vm.loading = false;
            }
          });
        }

    }
})();
