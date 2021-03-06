//Global

var crystal = {
	red:
	{
		name: "Red",
		value: 0
	},

	yellow:
	{
		name: "Yellow",
		value: 0
	},

	blue:
	{
		name: "Blue",
		value: 0
	},

	green:
	{
		name: "Green",
		value: 0
	}
};

var currentScore = "0";
var targetScore = "0";


var winCount = "0";
var lossCount = "0";


//Function

var getRandom = function(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function(){

	currentScore = 0;

	targetScore = getRandom(19,120);

	crystal.red.value = getRandom(1, 12);
	crystal.yellow.value = getRandom(1, 12);
	crystal.blue.value = getRandom(1, 12);
	crystal.green.value = getRandom(1, 12);

	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);
}

var addValues = function(crystal){
	currentScore = currentScore + crystal.value;

	$("#yourScore").html(currentScore);

	checkMin()
}

var checkMin = function() {
	if (currentScore > targetScore) {
		alert("Sorry, You lost.");

		lossCount++;
		$("#lossCount").html(lossCount);

		startGame();
	}

	else if (currentScore == targetScore) {
		alert("Congratulation! You won!");

		winCount++;
		$("#winCount").html(lossCount);

		startGame();
	}
}

//Process
startGame();

$("#red").click(function(){
	addValues(crystal.red);
});

$("#yellow").click(function(){
	addValues(crystal.yellow);
});

$("#blue").click(function(){
	addValues(crystal.blue);
});

$("#green").click(function(){
	addValues(crystal.green);
});




