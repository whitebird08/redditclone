var cloneApp = angular.module('clone', ['angularMoment'])

cloneApp.controller('cloneController', function($scope){
  $scope.panels = [];

  $scope.panel = function(panelTitle, panelAuthor, panelImage, panelDescription){
    var info = {};
    info.panelTitle = panelTitle
    info.panelAuthor = panelAuthor
    info.panelImage = panelImage
    info.panelDescription = panelDescription
    info.votes = 0;

    // info.date=Date.now()

    // angular.module('clone', ['angularMoment'])
    // .controller('mainController', function() {
      $scope.displayDate = false
      var vm = this;
      vm.time = new Date();
    // });
       
    $scope.panels.push(info);

    $scope.comments = [];
    $scope.submitComment = function(){
      console.log($scope.comments)
      $scope.comments.push(this.commentObj)
      this.commentObj = {}
    }

    // $scope.comment = function(myCommentAuthor, myCommentText){
    //   var talk = {};
    //   talk.myCommentAuthor= myCommentAuthor
    //   talk.myCommentText= myCommentText
    //   $scope.comments.push(talk);
    // }


    $scope.addPost = false
  }

  $scope.addVote = function(panel){
    panel.votes+=1

  }
  $scope.subtractVote = function(panel){
    panel.votes-=1
  }

})
 
