
;( () => {
  'use strict'

  const appId = "SU0myMIe1AUitLKar0mum8My8RbQ87lEaRjjKDgh";
  const jsKey = "GtvnNXChRLZRYBbWxNy9fM0LPloMfpYICCtMdJIL";
  const url = "https://parseapi.back4app.com/";
  const model = "Professores";

  require('angular');
  const newServer = require('./local_modules/server');
  const newQuery = require('./local_modules/query');

  const server = newServer(appId, jsKey, url);
  const query = newQuery(model, server);

  angular
  .module('autocompleteApp', [])
  .controller('MainCtrl', MainCtrl);
  MainCtrl.$inject = ['$http', '$scope'];

  function MainCtrl($http, $scope) {
    let cronSearch = undefined;
    $scope.options = [];
    const capitalizeFirst = str => {
      return str[0].toUpperCase() + str.slice(1);
    }

    $scope.select = index => {
      $scope.teacher = $scope.options[index];
      $scope.search = "";
      $scope.options = [];
    }

    $scope.getData = () => {
      if (cronSearch !== undefined){
        clearTimeout(cronSearch);
      }
      cronSearch = setTimeout(() => {
        let name = $scope.search;
        if(name !== undefined){
          name = capitalizeFirst(name);
        }
        query.contains('nome', name);
        query.find({
          success: results => {
            $scope.options = [];
            results.forEach(result => {
              let data = {};
              data.nome = result.get('nome');
              data.imagem = result.get('imagem');
              data.curriculo = result.get('curriculo');
              data.materia = result.get('materia');
              data.nota = result.get('nota');
              $scope.options.push(data);
            });
          },
          error: err => {
            console.log(err);
            $scope.options = [];
          }
        })
      }, 500);
    }
  }

})();
