$(document).ready(function(){

	var phaedra = {
		firstName: "Phaedra",
		lastName: "Parks",
		image: "assets/images/PP_01.png",
		lifePoints: 100,
		powerPoints: 1
	}

	var kenya = {
		firstName: "Kenya",
		lastName: "Moore",
		image: "assets/images/KM_01.png",
		lifePoints: 180,
		powerPoints: 1
	}

	var porsha = {
		firstName: "Porsha",
		lastName: "Williams",
		image: "assets/images/PW_01.png",
		lifePoints: 150,
		powerPoints: 1
	}

	var nene = {
		firstName: "NeNe",
		lastName: "Leakes",
		image: "assets/images/NL_01.png",
		lifePoints: 100,
		powerPoints: 1
	}

	// defender test, check to see if defender character has been selected before enabling click event
	 var defendTest = $("#phaedra, #porsha, #nene, #kenya").hasClass("defender");
	 	console.log(defendTest);

	//step one - click events
	$(" #phaedra, #porsha, #nene, #kenya").on("click",function(){
			
		var characterId = $(this).attr("id");

		//if no defender character has been selected, select one
		if (defendTest === false) {

			//remove character from the enemy-area div, append to the defender-area div, re-add the id, add class of "defender"
			$("#" + characterId).remove();
			$(".defender-area").append('<div class="character defender"></div>');
			$(".defender").attr("id", characterId);

			//add score info within character
			$("#" + characterId).append("<div class='name'>" + "character name" + "</div>");
			$("#" + characterId).append("<div class='attack-score'>" + "attack score here" + "</div>");
			$("#" + characterId).append("<div class='life-score'>" + "life score here"	 + "</div>");

			//update defendTest
			defendTest = $("#phaedra, #porsha, #nene, #kenya").hasClass("defender");

			console.log(defendTest);

			//prompts user to select next character
			$("h2").text("select your enemy");

		} else if (defendTest === true) {

			
			//remove character from the enemy-area div, append to the defender-area div, re-add the id, add class of "defender"
			$("#" + characterId).remove();
			$(".current-enemy-area").append('<div class="character enemy"></div>');
			$(".enemy").attr("id", characterId);

			//add score info within character
			$("#" + characterId).append("<div class='name'>" + "character name" + "</div>");
			$("#" + characterId).append("<div class='attack-score'>" + "attack score here" + "</div>");
			$("#" + characterId).append("<div class='life-score'>" + "life score here"	 + "</div>");

			//update defendTest
			defendTest = $("#phaedra, #porsha, #nene, #kenya").hasClass("defender");

			console.log(defendTest);

			//unhide attack button
			$("#attack").removeClass("hide");

			//prompts user to click the attack button
			$("h2").text("attack!");
		}//closes if / else if statement

	}); 

	//step 2 click attack
	$("#attack").on("click", function(){
		//generate random attack value for defender
		var defendLife =  100;
		var defendPower = Math.floor(Math.random() * 100);

		//generate random attack value for defender for enemy
		var attackLife = 100;
		var attackPower = Math.floor(Math.random() * 100);

		if () {
			//if defendPower > attackPower, subtract defendPower from attackLife


		} else () {
			//if attackPower > defendPower, subtract attackPower from defendLife

		}

		//update attack and defend variables in the DOM

		if () {
			//if enemy's life points < 0 you win
			//select another enemy

		} else if () {
		//step 5 you lose
			//if your life points = 0 you lose


		}

		//unhide refresh button
	});



		//step 6 refresh game
});