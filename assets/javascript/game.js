// randomNumberBtn=Math.floor(Math.random() * 101 +1);
var wins=0;
var losses=0;
var score=0;
var targetScore=0;

var button={ one:{value: 0}, two:{value:0}, three:{value:0}, four:{value:0}
};


$("#winCount").html(wins)
$("#lossCount").html(losses)


var numGenerator=function (max, min){
return Math.floor(Math.random() * (max-min +1)+ min);    
}


function start(){
score=0;
$("#yourScore").html("0")
targetScore=(numGenerator(120,19));
$("#targetScore").html(targetScore)
button.one.value=(numGenerator(12,1));
button.two.value=(numGenerator(12,1));
button.three.value=(numGenerator(12,1));
button.four.value=(numGenerator(12,1));
// score=0;
 
}

var updateScore=function(button){
   $("#yourScore").html(score+=button.value);
   
    scoreChecker()
}



// buttons
$("#one").click(function(){
    // $("#yourScore").html(score += button.one.value)
    // scoreChecker()
    updateScore(button.one)
} )

$("#two").click(function(){
    updateScore(button.two)
})

$("#three").click(function(){
    updateScore(button.three) 
})

$("#four").click(function(){
    updateScore(button.four)    
})

function scoreChecker(){
    if (score==targetScore){
        wins++
        $("#winCount").html(wins)
        start()
        
        
        
    }
    else if(score>targetScore){
        losses++ 
        $("#lossCount").html(losses)
        start()
       
    }
    // else{
    //     console.log("farts")
       
    //     gameOn=false;g
    // }
};

start()