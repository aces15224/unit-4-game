// randomNumberBtn=Math.floor(Math.random() * 101 +1);
var wins=0;
var losses=0;
var score=0;
var targetScore=0;
var gameOn=false;
var button={ one:{value: 0}, two:{value:0}, three:{value:0}, four:{value:0}
};

$("#yourScore").html(score)
$("#winCount").html(wins)
$("#lossCount").html(losses)


var numGenerator=function (max, min){
return Math.floor(Math.random() * (max-min +1)+ min);    
}

function reset(){
    gameOn=true;
    score=0;
}

function start(){
targetScore=(numGenerator(120,19));
$("#targetScore").html(targetScore)
button.one.value=(numGenerator(12,1));
button.two.value=(numGenerator(12,1));
button.three.value=(numGenerator(12,1));
button.four.value=(numGenerator(12,1));
reset()

}



// buttons
$("#one").on("click", function(){
    $("#yourScore").html(score += button.one.value)
    scoreChecker()
} )

$("#two").on("click", function(){
    $("#yourScore").html(score+=button.two.value)
    scoreChecker()
})

$("#three").on("click", function(){
    $("#yourScore").html(score+=button.three.value)
    scoreChecker()
})

$("#four").on("click", function(){
    $("#yourScore").html(score+=button.four.value)
    scoreChecker()
})

function scoreChecker(){
    if (score===targetScore){
        $("#winCount").html(wins)
        wins++
        // gameOn=false;
        // reset()
    }
    else if(score>targetScore){
        // gameOn=true;
 $("#lossCount").html(losses)
        losses++
    }
    // else{
    //     console.log("farts")
       
    //     gameOn=false;
    // }
};

start()