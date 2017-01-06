
;( () => {
  'use strict'
  require('angular');

  angular
  .module('autocompleteApp', [])
  .controller('MainCtrl', MainCtrl);
  MainCtrl.$inject = ['$http', '$scope'];

  function MainCtrl($http, $scope) {

    $scope.options = [
      {name: 'Fulano'},
      {name: 'Cicrano'},
    ];

    $scope.select = index => {
      $scope.teacher = $scope.options[index];
      $scope.search = "";
      $scope.options = [];
    }
  }
  
})();
