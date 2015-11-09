var cloneApp = angular.module('clone', [])

cloneApp.controller('cloneController', function($scope){
  $scope.panels = [];
  $scope.panel = function(panelTitle, panelAuthor, panelImage, panelDescription){
    var info = {};
    info.panelTitle = panelTitle
    info.panelAuthor = panelAuthor
    info.panelImage = panelImage
    info.panelDescription = panelDescription
    info.votes = 0;

    info.date=Date.now()
       
    $scope.panels.push(info);

    $scope.comments = [];

    $scope.comment = function(myCommentAuthor, myCommentText){
      var talk = {};
      talk.myCommentAuthor= myCommentAuthor
      talk.myCommentText= myCommentText
      $scope.comments.push(talk);
    }
    $scope.addPost = false
    $scope.c = false
  }

  $scope.addVote = function(panel){
    panel.votes+=1

  }
  $scope.subtractVote = function(panel){
    panel.votes-=1
  }

  // $scope.sortBy = function(predicate) {
  //   if(predicate === 'votes') {
  //     $scope.selection = 'votes';
  //   }
  //   if(predicate === 'date') {
  //     $scope.selection= 'date';
  //   }
  //   if(predicate === 'title') {
  //     $scope.selection = 'title';
  //   }
  //   $scope.predicate = predicate;
  // }

})
 
