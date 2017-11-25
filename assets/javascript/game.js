$(document).ready(function(){

	// var phaedra = {
	// 	firstName: "Phaedra",
	// 	lastName: "Parks",
	// 	startlifePoints: 100,
	// 	powerPoints: 1
	// }

	var phaedra = [100];
	var kenya = {
		firstName: "Kenya",
		lastName: "Moore",
		startlifePoints: 180,
		powerPoints: 1
	}

	var porsha = {
		firstName: "Porsha",
		lastName: "Williams",
		startlifePoints: 150,
		powerPoints: 1
	}

	var nene = {
		firstName: "NeNe",
		lastName: "Leakes",
		startlifePoints: 100,
		powerPoints: 1
	}

	// defender test, check to see if defender character has been selected before enabling click event
	 var defendTest = $("#phaedra, #porsha, #nene, #kenya").hasClass("defender");
	 	//console.log(defendTest);

	//step one - click events
	$(" #phaedra, #porsha, #nene, #kenya").on("click",function(){
			
		var characterId = $(this).attr("id");
		var points = characterId+"[0]";

		console.log(points);
		// var fullName = characterId[firstName];
		// var lifePoints = characterId[startLifePoints];

		//if no defender character has been selected, select one
		if (defendTest === false) {

			//remove character from the enemy-area div, append to the defender-area div, re-add the id, add class of "defender"
			$("#" + characterId).remove();
			$(".defender-area").append('<div class="character defender"></div>');
			$(".defender").attr("id", characterId);

			//add score info within character
			$("#" + characterId).append("<h3 class='name'>defender-name</h3>");
			$("#" + characterId).append("<h4 class='power'>defender-power</h4>");
			$("#" + characterId).append("<h4 class='life'>defender-life</h4>");

			//update defendTest
			defendTest = $("#phaedra, #porsha, #nene, #kenya").hasClass("defender");

			//console.log(defendTest);

			//prompts user to select next character
			$("h2").text("select your enemy");

		} else if (defendTest === true) {

			
			//remove character from the enemy-area div, append to the defender-area div, re-add the id, add class of "defender"
			$("#" + characterId).remove();
			$(".current-enemy-area").append('<div class="character enemy"></div>');
			$(".enemy").attr("id", characterId);

			//add score info within character
			$("#" + characterId).append("<h3 class='name'>enemy-name</h3>");
			$("#" + characterId).append("<h4 class='power'>enemy-power</h4>");
			$("#" + characterId).append("<h4 class='life'>enemy-life</h4>");

			//update defendTest
			defendTest = $("#phaedra, #porsha, #nene, #kenya").hasClass("defender");

			//console.log(defendTest);

			//unhide attack button
			$("#attack").removeClass("hide");

			//prompts user to click the attack button
			$("h2").text("attack!");
		}//closes if / else if statement

	}); 

	var defendLife =  100;
	var attackLife = 100;

	//step 2 click attack
	$("#attack").on("click", function(){
		//generate random attack value for defender
		var defendPower = Math.floor(Math.random() * 50);

		//generate random attack value for defender for enemy
		var attackPower = Math.floor(Math.random() * 50);

		if (defendPower > attackPower) {
			//if defendPower > attackPower, subtract defendPower from attackLife
			attackLife = attackLife - defendPower;

		} else if (attackPower > defendPower) {
			//if attackPower > defendPower, subtract attackPower from defendLife
			defendLife = defendLife - attackPower;
		} else {
			attackLife = attackLife;
			defendLife = defendLife;
		}

		console.log("Defend Life:" + defendLife);
		$(".defender > .life").text("Life Points: " + defendLife);
		console.log("Attack Life:" + attackLife);
		$(".enemy > .life").text("Life Points: " + attackLife);

		console.log("Defend Power:" + defendPower);
		$(".defender > .power").text("Attack Points: " + defendPower);
		console.log("Attack Power:" + attackPower);
		$(".enemy > .power").text("Attack Points: " + attackPower);

		//update attack and defend variables in the DOM

		 if (attackLife <= 0) {
		// 	//if enemy's life points < 0 you win
		// 	//select another enemy
		$(".attack-button").append("You win! Select another enemy to continue.");
		
		//hide attack button, hide current defender
		$("#attack").addClass("hide");
		$(".enemy").addClass("hide");
		$(".enemy").removeClass("enemy")

		 } else if (defendLife <= 0) {
			// //step 5 you lose
			// 	//if your life points = 0 you lose
			$(".attack-button").append("<div>You lose. Click refresh to play again.</div>");

			//hide attack button, unhide refresh button
			$("#attack").addClass("hide");
			$("#refresh").removeClass("hide");
		 }

		
	});



		//step 6 refresh game
});