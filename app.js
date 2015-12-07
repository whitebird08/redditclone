var cloneApp = angular.module('clone', ['angularMoment'])

cloneApp.controller('cloneController', function($scope){

  $scope.panel = function(){
    $scope.panels.push({
    
      panelTitle: $scope.post.panelTitle,
      panelAuthor: $scope.post.panelAuthor,
      panelImage: $scope.post.panelImage,
      panelDescription: $scope.post.panelDescription,
      votes: 0,
      date: Date.now(),
      comments: []
    })   
  
    $scope.post = {};
    $scope.addPost = false  
  }
   

  $scope.addVote = function(panel){
    panel.votes+=1
  }
  $scope.subtractVote = function(panel){
    panel.votes-=1
  }

  $scope.submitComment = function(){
    console.log(this.newComment, '.....newcomment')
    this.panel.comments.push({

      author: this.newComment.author,
      text: this.newComment.text
    })
    this.newComment = {}
  }

  $scope.panels = [
      {
        panelTitle: 'Red White and Blue',
        panelAuthor: 'John Denver',
        panelImage: 'https://images.unsplash.com/photo-1445217231310-c5e6e7477e50?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=d535f9ece5c950f5883c8a41037dd656',
        panelDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dignissim augue. Maecenas eleifend, leo eu congue cursus, augue mauris iaculis justo, at tincidunt arcu arcu ac dolor. Sed varius ac est sit amet molestie. Nunc ullamcorper, massa quis gravida ullamcorper, ipsum nulla vehicula augue',
        votes: 3,
        date: 1446111652624,
        comments:[]
      },
      {
        panelTitle: 'Hanging Lake',
        panelAuthor: 'John Muir',
        panelImage: 'https://images.unsplash.com/photo-1445462657202-a0893228a1e1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=8d4cafd1fe3f290fffadb2cc216cff1a',
        panelDescription: 'Tempor euismod potenti in, arcu praesent eget. Rutrum tempora dictum',
        votes: 10,
        date: 1447111652624,
        comments:[ {author: 'John Denver', text: "Ain't nothin' but a poor man til youve seen an eagle fly"}
        ]
      },
      {
        panelTitle: 'Right at Home',
        panelAuthor: 'Jedediah Springfield',
        panelImage: 'https://images.unsplash.com/photo-1444792131309-2e517032ded6?crop=entropy&dpr=0.67&fit=crop&fm=jpg&h=2275&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=4325',
        panelDescription: 'Magna dictum vulputate ac tincidunt. Et vel mi, malesuada wisi libero Magna dictum vulputate ac tincidunt. Nunc venenatis pellentesque elementum eget. Nec cras venenatis, phasellus habitant et faucibus, massa donec, vehicula arcu nec erat maecenas ut justo. Dolor erat tristique lacus eget, curabitur dolor eget dolor sociosqu, non scelerisque at. Et vel mi, malesuada wisi libero',
        votes: 7,
        date: 1440111652624,
        comments:[
          {author: 'John Muir', text: 'The mountains are calling and I must go.'}, {author: 'Wild Bill', text: 'Let me consult the higher ups.'}
        ]
      },
      {
        panelTitle: 'Paint The Town Red',
        panelAuthor: 'Mariwether Lewis',
        panelImage: 'https://images.unsplash.com/photo-1445217320842-2edce6f9acd0?crop=entropy&dpr=0.67&fit=crop&fm=jpg&h=2275&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=4325',
        panelDescription: 'Nunc venenatis pellentesque elementum eget. Nec cras venenatis, phasellus habitant et faucibus, massa donec, vehicula arcu nec erat maecenas ut justo. Dolor erat tristique lacus eget, curabitur dolor eget dolor sociosqu, non scelerisque at. Et vel mi, malesuada wisi libero',
        votes: 7,
        date: 1440111652624,
        comments:[{author: 'William Clark', text: 'Howdy partner!'}]
      }
    ];

})
 
