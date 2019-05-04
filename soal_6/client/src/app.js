angular.module('arkademy', ['ui.bootstrap', 'ui.router', 'ngTable'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'src/templates/candidate.html'
      })
  })
  .controller('MasterCtrl', function ($http, $state, $scope) {
    $scope.candidates = [];
    function getData() {
      $http.get('/api/candidates').then(function (candidates) {
        console.log('cand', candidates);
        $scope.candidates = candidates.data;
      }).catch(function (err) {
        console.log('err', err);
      });
    }

    getData();

    $scope.vote = function (cn) {
      if (confirm('Apakah kamu yakin ingin memilih Pasangan Calon ' + cn.name + ' ?')) {
        $http.put('/api/candidates/' + cn._id, {}).then(function (res) {
          console.log('ress', res);
          alert(res.message ? res.message : 'Vote Success');
          getData();
        }).catch(function (err) {
          console.log('err');
        });
      }
    }
  });