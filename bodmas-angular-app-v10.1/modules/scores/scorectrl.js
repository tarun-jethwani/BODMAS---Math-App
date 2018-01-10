app.controller('scoreCtrl',function($scope,$http,scoreService){


  var items = [];
  $scope.score=[];
  var count=0;
  $scope.cscore=scoreService.cscore;
  console.log($scope.score);
  $http.get("http://192.168.43.119:8081/showscores").then(function(data){
      var data=data.data;
     $.each(data,function(key,value){
                         items.push(value);
                          items.sort(function(a, b){return b-a});
                       });
           
              $scope.score=items;
  });
  /*$.getJSON( "http://localhost:8081/showscores", function( data ){
              //console.log(JSON.stringify(data));

              
             // console.log($scope.score);
            $.each(data,function(key,value){
                         items.push(value);
                          items.sort(function(a, b){return b-a});
                       });
                      // console.log(items);
                      $scope.score=items;
                      console.log($scope.score);
                  $.each( items, function(key,val1) {
                       items.push( "<tr style='color:black;'><td>"+(++count)+"</td><td>"+ val1 +"</td></tr>");
                        
                        });
           $( "<tbody/>", {
                class:"active",
                 html: items.join( "" )
                }).appendTo( "table" );

          });
  */ console.log($scope.score);

  $scope.closeBrowser =function(){
  console.log('closing window');
   window.open('','_parent','');

    if (confirm("Close Window?")) {

        window.location="Closing_App_BODMAS.html" ;}
}

});
