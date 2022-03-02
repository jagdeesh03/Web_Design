const userClickedPattern = [];
const gamePattern=[];
const buttonColours = ["red","blue","green","yellow"];
var randomNumber = 0;

$(".btn").click(function(){
   var userChosencolor = $(this).attr("id");
   userClickedPattern.push(userChosencolor);
   playsound(userChosencolor);
   animatepress(userChosencolor);
   checkAnswer(userClickedPattern.length-1);
});

function nextSequence()
{
    $('#level-title').html('Level '+level);
    level++;
    userClickedPattern = [];
    randomchosenColor = buttonColours[randomNumber];
    gamePattern.push(randomchosenColor);
    randomNumber = Math.floor(Math.random()*4);
    $("#"+randomchosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomchosenColor);
}
function playsound(name)
{
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatepress(currentColor)
{
   var activebutton = $("#"+currentColor);
   activebutton.addClass("pressed");
   setTimeout(function()
   {
     activebutton.removeClass("pressed");
   },100);
}
var level = 0;
//when keyboard press happen
document.addEventListener("keypress",function(evt){
    $('#level-title').html('Level '+level);
    level++;
    nextSequence();
    
});

function checkAnswer(currentLevel)
{
      if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
      {
       console.log('success');   
       if(gamePattern.length === userClickedPattern.length)
       {
         setTimeout(function()
         {
          nextSequence();
         },1000)
       }
      }
      else
      {
          console.log('wrong');
      }
}



