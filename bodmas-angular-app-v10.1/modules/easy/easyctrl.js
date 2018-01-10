app.controller('easyLevel',function($scope,scoreService){


  $scope.bodmasA=function(){
		bodmas();
	}

  $scope.ansA=function(){
		ans();
	}

  /*Timer For Easy Level*/

  var timeleft = 60;
  var getDataBackOut='';
  bodmas();
  var downloadTimer = setInterval(function(){
      timeleft--;
      var ele=document.getElementById("countdowntimer");
      if(ele==null)
        {
        	clearInterval(downloadTimer);

        }
    else{
            ele.textContent = timeleft;
            if(timeleft == 0)
              {
                  clearInterval(downloadTimer);
                  getDataBackOut = $('#json_data').val();
                  scoreService.cscore=getDataBackOut;
                  var xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                      console.log(getDataBackOut);
                }
              };
              xhttp.open("POST", "http://192.168.43.119:8081/scoresdata", true);
              xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
              xhttp.send("Scores="+getDataBackOut);
              alert("Times Up !!! \nLets see where you stand on LeaderBoard !!\nYour Score is \t"+getDataBackOut);
              window.location.href="#!scores";
          }
        }
},1000);


/*Bodmas Function For Easy Level*/
  correct=0;
  wrong=0;
  function bodmas(){
          console.log('Entered');

     /*Function to Bind Equation*/

        var TreeNode = function(left, right, operator) {
            this.left = left;
            this.right = right;
            this.operator = operator;

           this.toString = function()
            {
             return '(' + left + ' ' + operator + ' ' + right + ')';
            }
          }

   /*Function to Generate random numbers*/

       function randomNumberRange(min, max)
          {
             return Math.floor(Math.random() * (max - min) + min);
          }
          var x = ['/','*','-','+'];

          /*Function to Generate Equations*/
       function buildTree(numNodes) {
            if (numNodes === 1)
                return randomNumberRange(1, 9);

             var numLeft = Math.floor(numNodes / 2);
             var leftSubTree = buildTree(numLeft);
             var numRight = Math.ceil(numNodes / 2);
             var rightSubTree = buildTree(numRight);
             var m = randomNumberRange(0, x.length);
             var str = x[m];
             return new TreeNode(leftSubTree, rightSubTree, str);
         }

        var input = 'level 3';
        input = input.split(' ');
        var n = Number(input[1]);
        var eqn=buildTree(n).toString();
        cans=eval(eqn);
        if(cans%1==0 && cans>=0){
          document.getElementById("eqn").innerHTML = eqn;
          a=cans;
         }
       else
         bodmas();
}

/*Function to calculate Answer of Equation*/
function ans() {
      var x = document.getElementById("myNumber").value;
      document.getElementById("quizform").reset();

      if (x==a) {
        correct++;
        msg = "img/happyminion.png";
        textmsg="Absolutely Correct !!"
      }
      else {
          wrong++;
          msg = "img/sadminion.png";
          textmsg="Oops !! Wrong Answer ..."
         }
      score = correct*10;

      document.getElementById("score").innerHTML = score;
      document.getElementById("textmessage").innerHTML=textmsg;
      document.getElementById("message").src = msg;
       $('#json_data').val(score);
  }



});
