// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('AppController', function($scope, $ionicPopup) {
  $scope.selected = 'x';

  $scope.xCount = 0;
  $scope.oCount = 0;

  $scope.data = [];
  $scope.data[0] = [];
  $scope.data[1] = [];
  $scope.data[2] = [];

  $scope.reset = function() {
    $scope.data[0][0] = '';
    $scope.data[0][1] = '';
    $scope.data[0][2] = '';

    $scope.data[1][0] = '';
    $scope.data[1][1] = '';
    $scope.data[1][2] = '';

    $scope.data[2][0] = '';
    $scope.data[2][1] = '';
    $scope.data[2][2] = '';
  };

  // Init values
  $scope.reset();

  $scope.winner = function() {
    if ($scope.selected === 'x') {
      $scope.xCount++;
    }
    else {
      $scope.oCount++;
    }
    var alertPopup = $ionicPopup.alert({
     title: 'Felicidades!',
     template: $scope.selected + ' eres el ganador!'
   });
   alertPopup.then(function(res) {
     $scope.reset();
   });
  };

  $scope.touch = function(x, y) {
    console.log(x);
    console.log(y);
    if ($scope.data[x][y] === '') {
      $scope.selected = ($scope.selected === 'x') ? 'o' : 'x';

      $scope.data[x][y] = $scope.selected;

      if ($scope.data[0][0] === $scope.selected && $scope.data[0][1] === $scope.selected & $scope.data[0][2] === $scope.selected) {
        $scope.winner();
      }
      else if ($scope.data[0][0] === $scope.selected && $scope.data[1][0] === $scope.selected & $scope.data[2][0] === $scope.selected) {
        $scope.winner();
      }
      else if ($scope.data[0][2] === $scope.selected && $scope.data[1][2] === $scope.selected & $scope.data[2][2] === $scope.selected) {
        $scope.winner();
      }
      else if ($scope.data[2][2] === $scope.selected && $scope.data[2][1] === $scope.selected & $scope.data[2][0] === $scope.selected) {
        $scope.winner();
      }
      else if ($scope.data[1][0] === $scope.selected && $scope.data[1][1] === $scope.selected & $scope.data[1][2] === $scope.selected) {
        $scope.winner();
      }
      else if ($scope.data[0][1] === $scope.selected && $scope.data[1][1] === $scope.selected & $scope.data[2][1] === $scope.selected) {
        $scope.winner();
      }
      else if ($scope.data[0][0] === $scope.selected && $scope.data[1][1] === $scope.selected & $scope.data[2][2] === $scope.selected) {
        $scope.winner();
      }
      else if ($scope.data[0][2] === $scope.selected && $scope.data[1][1] === $scope.selected & $scope.data[2][0] === $scope.selected) {
        $scope.winner();
      }
    }
    return false;
  };
});
