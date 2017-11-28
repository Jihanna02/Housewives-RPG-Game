$(document).ready(function(){

	var realHousewives = [
		phaedra = {
			firstName: "Phaedra",
			lastName: "Parks",
			startlifePoints: 100, 
			powerPoints: 1
		},
		porsha = {
			firstName: "Porsha", 
			lastName: "Williams", 
			startlifePoints: 150,
			powerPoints: 1
		},

		nene = {
			firstName: "NeNe",
			lastName: "Leakes",
			startlifePoints: "130",
			powerPoints: 1,
		},

		kenya = {
			firstName: "Kenya",
			lastName: "Moore",
			startlifePoints: 180,
			powerPoints: 1
		}
	];


	var defendPower = 0;
	var attackPower = 0;
	var defendLife = 100;
	var attackLife = 100;

	
	function runLoop () {
	 	//parses realHousewives object, builds characters in enemy-area div
		 for (var i=0; i < realHousewives.length; i++) {
		 	var firstName = realHousewives[i].firstName.toLowerCase();
		 	var characterDiv = "<div id='"+i+"' class='character "+firstName+"'><h3 class='name'>"+realHousewives[i].firstName+ "<br />"+realHousewives[i].lastName+"</h3><h4 class='life points'>HP: "+realHousewives[i].startlifePoints+"</h4></div>";
		 	$(".enemy-area").append(characterDiv);
		 }
	 }

	 runLoop();

	// defender test, check to see if defender character has been selected before enabling click event
	 var defendTest = $(".character").hasClass("defender");
	$(".character").on("click",function(){
		console.log("im clicked");
	});
	//step one - click events
	$(".character").on("click",function(){

		var characterId = $(this).attr("id");
		var points = realHousewives[characterId].startlifePoints;
		var fullName = realHousewives[characterId].firstName + "<br />" + realHousewives[characterId].lastName;

		var firstName = realHousewives[characterId].firstName.toLowerCase();
		var characterDiv = "<div id='"+characterId+"' class='character"+ " " +firstName+"'><h3 class='name'>"+fullName+"</h3><h4 class='life points'>HP: "+points+"</h4></div>";

		//hides win and lose message on addition of new enemy
		$(".attack-button-win-msg").addClass("hide");

		//if no defender character has been selected, select one
		if (defendTest === false) {


			//remove character from the enemy-area div, append to the defender-area div, re-add the id, add class of "defender"
			$("#" + characterId).fadeOut(600);
			$(".defender-area").append('<div class="character defender"></div>').hide().fadeIn(600);
			$(".defender").attr("id", characterId);
			$(".defender").addClass(firstName);

			//add character headings
			$(".character-heading").removeClass("hide");
			$(".current-enemy-heading").removeClass("hide");

			//add score info within character
			$(".defender").append("<h3 class='name'>"+ fullName +"</h3>");
			$(".defender").append("<h4 class='life points'>"+points+"</h4>");

			//update defendTest
			defendTest = $(".phaedra, .porsha, .nene, .kenya").hasClass("defender");

			//auto-generates random amount of power of your character
			defendPower = Math.floor(Math.random() * 50);

			//prompts user to select next character
			$(".select").text("Select your enemy...");

		} else if (defendTest === true) {

			
			//remove character from the enemy-area div, append to the defender-area div, re-add the id, add class of "defender"
			$("#" + characterId).fadeOut(600);
			$(".current-enemy-area").append('<div class="character enemy"></div>').hide().fadeIn(600);
			$(".enemy").attr("id", characterId);
			$(".enemy").addClass(firstName);

			//add score info within character
			$(".enemy").append("<h3 class='name'>"+ fullName +"</h3>");
			$(".enemy").append("<h4 class='life points'>"+points+"</h4>");

			//update defendTest
			defendTest = $("#phaedra, #porsha, #nene, #kenya").hasClass("defender");

			//auto-generates random amount of power of enemy
			attackPower = Math.floor(Math.random() * 50);

			//unhide attack button
			$("#attack").removeClass("hide");

			//prompts user to click the attack button
			$(".select").text("Click button to attack!");
		}//closes if / else if statement

	}); 


	//step 2 click attack
	$("#attack").on("click", function(){

		var characterId = $(".enemy").attr("id");
		var enemyName = realHousewives[characterId].firstName;
		//generate random attack value for defender

		//generate random attack value for defender for enemy

		if( defendPower > attackPower ) {

			//slowly increments defendPower if it's > than attackPower
			defendPower = defendPower + Math.floor(attackPower / 10);

		}	
			//updates health points variables
			defendLife = defendLife - attackPower;
			attackLife = attackLife - defendPower;

		//updates health points in DOM
		$(".attack-stats").text("You attacked "+enemyName +" for "+defendPower+" damage. "+ enemyName +" attacked you for "+attackPower + " damage.");

		//updates attack message
		$(".enemy .points").text(attackLife);
		$(".defender .points").text(defendLife);
//***		$(".enemy-name").text()

		 if (attackLife <= 0) {
			//if enemy's life points < 0 you win, select another enemy

			var enemyTest = $(".enemy-area").has("div");

			console.log(enemyTest);

			if (enemyTest === false ){
				$(".attack-stats").addClass("hide");
				$("#refresh").removeClass("hide");
				$(".attack-button-win-2-msg").removeClass("hide");
			} else {
				$(".attack-button-win-msg").removeClass("hide");
			}

			//hide attack button, hide current defender
			$("#attack").addClass("hide");
			$(".enemy").fadeOut(600);
			$(".attack-button-msg").addClass("hide");
			$(".enemy").removeClass("enemy");

			//resets click for any of the characters so that it will go to the "enemy" area
			defendTest = true;

			$(".phaedra, .porsha, .nene, .kenya").on("click", function(){
				$(".attack-button-win-msg").addClass("hide");
				$("#attack").removeClass("hide");
			});

			//reset life points
			attackLife = 100;


		 } else if (defendLife <= 0) {
			// //step 5 you lose
			// 	//if your life points = 0 you lose
			$(".attack-button-lose-msg").removeClass("hide");
			//hide attack button, unhide refresh button
			$("#attack").addClass("hide");
			$("#refresh").removeClass("hide");
		 }
		
	});

		//step 6 refresh game
		$("#refresh").on("click", function(){
			$(".character").remove();
			$(".character-heading").addClass("hide");
			$(".current-enemy-heading").addClass("hide");
			$(".attack-button div").addClass("hide");
			$(".attack-button button").addClass("hide");

			runLoop();

			console.log(defendTest);

			//REVISIT RESET = when characters are reset to the original locations, they lose their click binding
		});
});