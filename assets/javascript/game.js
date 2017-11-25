$(document).ready(function(){

var phaedra = {
	firstName: "Phaedra",
	lastName: "Parks",
	image: "assets/images/PP_01.png",
	lifePoints: 100
}

var kenya = {
	firstName: "Kenya",
	lastName: "Moore",
	image: "assets/images/KM_01.png",
	lifePoints: 180
}

var porsha = {
	firstName: "Porsha",
	lastName: "Williams",
	image: "assets/images/PW_01.png",
	lifePoints: 150
}

var nene = {
	firstName: "NeNe",
	lastName: "Leakes",
	image: "assets/images/NL_01.png",
	lifePoints: 100
}

// defender test, check to see if defender character has been selected before enabling click event
 var defendTest = $(".phaedra, .porsha, .nene, .kenya").hasClass("defender");
 	console.log(defendTest);

//step one - if no defender character has been selected, select one
if (defendTest === false) {

		$(".phaedra,.porsha,.nene,.kenya").on("click",function(){
		
		var characterId = $(this).attr("class");
		var characterName = characterId+".firstName";

		$("." + characterId).remove();
		$(".defender-area").append('<div class="'+characterId+'"></div>');
		$("." + characterId).addClass("defender");

		//???? this should work
		//defendTest = true;
		console.log(defendTest);


	});
	
	} else {

		// else if no enemy, select enemy
		$("h2").text("select your enemy");

		$(".phaedra,.porsha,.nene,.kenya").on("click",function(){
		
		var characterId = $(this).attr("class");

		$("." + characterId).remove();
		$(".defender-area").append('<div class="'+characterId+'"></div>');
		$("." + characterId).addClass("enemy")

		});

	}//closes if / else if statement


		//activate "next" button

	//step 2 select your enemy

		//activate "next" button

	//step 3 click attack
		//generate random attack value for defender
		//generate random attack value for defender for enemy
		//add or subtract from points

	//step 4 you win
		//if enemny's life points = 0 you win
		//select another enemy


	//step 5 you lose
		//if your life points = 0 you lose


	//step 6 refresh game
});