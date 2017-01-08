
;( () => {
  'use strict'

  const appId = "YOUR APP ID";
  const jsKey = "YOUR JS KEY";
  const url = "URL";
  const model = "MODEL";

  require('angular');
  const newServer = require('./local_modules/server');
  const newQuery = require('./local_modules/query');
  const rating = require('code42day-rating');

  const server = newServer(appId, jsKey, url);
  const query = newQuery(model, server);

  const capitalizeFirst = str => {
    let string = str.toLowerCase();
    return string[0].toUpperCase() + string.slice(1);
  }

  const markStars = val => {
    let element = document.querySelector('[data-rating]');

    while(element.firstChild){
      element.removeChild(element.firstChild);
    }

    let stars = rating(element, 1);
    let value = 0;

    if(val < 1){
      value = 1;
    }
    else if(val > 5){
      value = 100;
    }
    else{
      value = val * 20;
    }

    stars.set(value);
    return;
  }

  angular
  .module('autocompleteApp', [])
  .controller('MainCtrl', MainCtrl);
  MainCtrl.$inject = ['$http', '$scope'];

  function MainCtrl($http, $scope) {

    let cronSearch = setTimeout(()=>{}, 0);
    $scope.options = [];
    $scope.teacher = '';
    $scope.selectedTeacher = false;

    const notify = (err) => {
      new Notification('Aconteceu algo errado', {
        body: 'Código do erro: ' + err
      });
    }

    $scope.select = index => {
      $scope.teacher = $scope.options[index];
      $scope.search = "";
      $scope.options = [];
      markStars($scope.teacher.nota);
      $scope.selectedTeacher = true;
    }

    $scope.getData = () => {

      clearTimeout(cronSearch);

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
              let tempDataFile = result.get('imagem');
              data.imagem = tempDataFile.url();
              data.curriculo = result.get('curriculo');
              data.materia = result.get('materia');
              data.nota = result.get('nota');
              $scope.options.push(data);
              $scope.$digest();
            });
          },
          error: err => {
            console.log(err);
            notify(err.code);
            $scope.options = [];
          }
        })
      }, 500);
    }
  }

})();
