// create the module and name it appX


var appX = angular.module('usersApp',[]);


appX.controller('usersController' , ['$scope' , '$http' , function($scope,$http){
        // $scope.reposFlag = false ;
        // $scope.usersFlag = false ;
        //$scope.username  = 'a' ;
        //var username = '' ;

        $http.get("https://api.github.com/users?since=1550")
            .success(function(data){
              $scope.users = data ;
              //getRepos();
            });

        
        $scope.getUser = function(username) {
          $http.get("https://api.github.com/users/" + username)
              .success(function(data){
                $scope.userData = data ;
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
