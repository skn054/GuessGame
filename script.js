'use strict';

var randnum = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var high_score = 0;
var iswin = false;

document.querySelector('.again').addEventListener("click",function(){
   document.querySelector('.guess').value = 0
   document.querySelector('.score').textContent = "20"
   document.querySelector('.message').textContent = "Start guessing..."
   document.querySelector('body').style.backgroundColor = '#222';
   iswin = false;
   score = 20;
   randnum = Math.trunc(Math.random() * 20) + 1;

});

document.querySelector('.check').addEventListener("click",function(e)
{
    var value = Number(document.querySelector('.guess').value);
   if(iswin == false){
    if(value===0)
    {
        document.querySelector('.message').textContent = "Give valid Value"
        
    }
    else if(value == randnum)
    {
        document.querySelector('.message').textContent = "Correct Guess";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.score').textContent = score;
        if(score > high_score)
        {
            high_score = score;
        }
        document.querySelector('.highscore').textContent = high_score;
        iswin = true;

    }
    else if(value!=randnum)
    { 
        if(score>0)
        {
            var message = value > randnum ? "Too High" : "Too Low";
            document.querySelector('.message').textContent = message;
            score --;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = "Lost The Game! Try Again"
        }
        
        
    }
}
    

        
    
});


