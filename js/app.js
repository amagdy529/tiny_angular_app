// angular.module('app', [])
//     .controller('gitHubDataController', ['$scope','$http', function($scope,$http) {
//
//         $scope.reposLoaded = false;
//
//         $scope.userLoaded = false;
//
//         $scope.username = "pdsullivan";
//
//         $http.get("https://api.github.com/users/" + $scope.username)
//             .success(function (data) {
//                 $scope.userData = data;
//                 loadRepos();
//             });
//
//         var loadRepos = function () {
//             $http.get($scope.userData.repos_url)
//                 .success(function (data) {
//                     $scope.repoData = data;
//                 });
//         };
//
//
//         $scope.predicate = '-updated_at';
//
//
// }]);


// create the module and name it appX
var appX = angular.module('appX', ['ngRoute']);

// configure our routes
appX.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    });
});

// create the controller and inject Angular's $scope
appX.controller('indexController', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

appX.controller('aboutController', function($scope) {
  $scope.message = 'Look! I am an about page.';
});

appX.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});


//angular.module('appX',[])
  appX.controller('controllerX' , ['$scope' , '$http' , function($scope,$http){
        $scope.reposFlag = false ;
        $scope.usersFlag = false ;
        $scope.username  = 'amagdy529' ;

        $http.get("https://api.github.com/users/" + $scope.username)
            .success(function(data){
              $scope.userData = data ;
              getRepos();
            });

        var getRepos = function(){
          $http.get($scope.userData.repos_url)
              .success(function (data){
                $scope.repoData = data ;
              });
        };

        $scope.predicate = '-updated_at';

    }]);



/*
    {
      "login": "amagdy529",
      "id": 16018927,
      "avatar_url": "https://avatars.githubusercontent.com/u/16018927?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/amagdy529",
      "html_url": "https://github.com/amagdy529",
      "followers_url": "https://api.github.com/users/amagdy529/followers",
      "following_url": "https://api.github.com/users/amagdy529/following{/other_user}",
      "gists_url": "https://api.github.com/users/amagdy529/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/amagdy529/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/amagdy529/subscriptions",
      "organizations_url": "https://api.github.com/users/amagdy529/orgs",
      "repos_url": "https://api.github.com/users/amagdy529/repos",
      "events_url": "https://api.github.com/users/amagdy529/events{/privacy}",
      "received_events_url": "https://api.github.com/users/amagdy529/received_events",
      "type": "User",
      "site_admin": false,
      "name": null,
      "company": null,
      "blog": null,
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "public_repos": 9,
      "public_gists": 0,
      "followers": 2,
      "following": 10,
      "created_at": "2015-11-25T15:01:44Z",
      "updated_at": "2016-09-08T08:23:39Z"
    }
*/
