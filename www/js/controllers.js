angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})


.controller('HomePageCtrl', function($scope, MyGroups, PopularGroups) {
  $scope.myGroups = MyGroups.query();
  $scope.popularGroups = PopularGroups.query();
})

.controller('GroupCtrl', ['$scope', '$stateParams', 'Group', 'Threads', function($scope, $stateParams, Group, Threads) {
    $scope.group = Group.get({groupId: $stateParams.groupId});
    $scope.threads = Threads.query({groupId: $stateParams.groupId} );

    $scope.page=1;
    //$scope.morethreads = true;
    $scope.loadMoreThreads = function() {
      //alert('loading more threads');
      Threads.query({groupId: $stateParams.groupId, pageNum: $scope.page}, 
        //success
        function(newThreads){
          if (newThreads.length > 0)
          {
            angular.forEach(newThreads, function(thread) {
              $scope.threads.push(thread);
            });
            $scope.page +=1;
          }
          else
          {
            $scope.morethreads = false;
          }
        $scope.$broadcast('scroll.infiniteScrollComplete');
        },
        //error
        function(){
          alert('Failed to fetch');
        });
//      
    };
}]);