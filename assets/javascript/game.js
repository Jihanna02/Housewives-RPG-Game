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
	//step one select your character
	$(".phaedra,.porsha,.nene,.kenya").on("click",function(){
		var characterId = $(this).attr("class");
		var characterImage = characterId+".image";

		console.log(characterId);

		$("." + characterId).remove();
		$(".defender-area").append('<div class="'+characterId+'"></div>');
	});

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