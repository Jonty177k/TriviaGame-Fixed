//<script>

	$(document).ready(function() {

		function getRandomNumber(min, max) {
  			return Math.floor(Math.random() * (max - min + 1) + min);
		};

		var q = 0;

    var number = 15;
    var intervalId;

    function run() {
      intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
      number--;
      $("#timer").text(number + " seconds left...");
      if (number === 0) {
      	clearInterval(intervalId);
      	location.reload(true);
      };
    };


//----------------------------------------------------------------------------------------------------------------------------
										//LEVEL 1
//----------------------------------------------------------------------------------------------------------------------------

		//LEVEL 1 ANSWERS
		var levelOneQ1 = [
			"Lawrence Odonnell", //0
			"Lawrence Taylor", //1
			"TE Lawrence", //2 CORRECT
			"CS Lewis" //3
		];
		var levelOneQ2 = [
			"George Lucas", //0 CORRECT
			"Steven Spielberg", //1
			"Howard Zinn", //2
			"Stanley Kubrick" //3
		];
		var levelOneQ3 = [
			"Samuel L Jackson", //0+
			"Uma Thurman", //1
			"Bruce Willis", //2
			"John Travolta" //3 CORRECT
		]; 
		var levelOneQ4 = [
			"Stanley Kubrick", //0 CORRECT
			"George Lucas", //1
			"Noam Chomsky", //2
			"George Orwell" //3
		];
		var levelOneQ5 = [
			"Natalie Portman", //0
			"Judy Garland", //1 CORRECT
			"Audrey Hepburn", //2
			"Katherine Hepburn" //3
		];

		function youWin() {
			$("#ccTitle").text("You Win!!");
		};

		//Level 1 Questions
		var levelOne = {
			q1: "Which person is 1962's 'Lawrence of Arabia' based on?",
			//Lawrence Odonnell(a), Lawrence Taylor(b), TE Lawrence(c), CS Lewis(d)
			q2: "Who directed the original Star Wars (1977)?",
			//George Lucas(a), Steven Spielberg(b), Howard Zinn(c), Stanley Kubrick(d)
			q3: "Which of these actors dies in Pulp Fiction (1994)?",
			//Samuel L Jackson(a), Uma Thurman(b), Bruce Willis(c), John Travolta(d)
			q4: "Which of these people directed 2001: A Space Odyssey?",
			//Stanley Kubrick(a), George Lucas(b), Noam Chomsky(c), George Orwell(d)
			q5: "Which of these actresses starred in 'The Wizard of Oz'?"
			//Natalie Portman(a), Judy Garland(b), Audrey Hepburn(c), Katherine Hepburn(d)
		};

		function levelOneSetup() {

			$("#ccTitle").text("Question 1: $100");

			q = getRandomNumber(0, 4);

			number = 15;
			run();

			number = 15;
    		intervalId;

			console.log(q);

			if (q == 0) {

				$("#askQuestion").text(levelOne.q1);

				$("#choiceA").html("<div>A: " + levelOneQ1[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelOneQ1[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelOneQ1[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelOneQ1[3]+"</div>");

				$("#choiceA").on("click", function() {
					levelOneSetup();
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
				});				
				$("#choiceC").on("click", function() {
					levelTwoSetup();
					clearInterval(intervalId);
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
				});
			};
			if (q ==1) {
				$("#askQuestion").text(levelOne.q2);
				$("#choiceA").html("<div>A: " + levelOneQ2[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelOneQ2[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelOneQ2[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelOneQ2[3]+"</div>");	

				$("#choiceA").on("click", function() {
					levelTwoSetup();
					clearInterval(intervalId);
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					levelOneSetup();
					  
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
					  
				});			
			};
			if (q == 2) {
				$("#askQuestion").text(levelOne.q3);
				$("#choiceA").html("<div>A: " + levelOneQ3[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelOneQ3[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelOneQ3[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelOneQ3[3]+"</div>");

				$("#choiceA").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					levelOneSetup();
					  
				});
				$("#choiceD").on("click", function() {
					levelTwoSetup();
					clearInterval(intervalId); 
				});				
			};
			if (q ==3) {
				$("#askQuestion").text(levelOne.q4);
				$("#choiceA").html("<div>A: " + levelOneQ4[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelOneQ4[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelOneQ4[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelOneQ4[4]+"</div>");

				$("#choiceA").on("click", function() {
					levelTwoSetup();
					clearInterval(intervalId); 
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					levelOneSetup();
					  
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
					  
				});		
			};
			if (q ==4) {
				$("#askQuestion").text(levelOne.q5);
				$("#choiceA").html("A: " + levelOneQ5[0]);
				$("#choiceB").html("B: " + levelOneQ5[1]);
				$("#choiceC").html("C: " + levelOneQ5[2]);
				$("#choiceD").html("D: " + levelOneQ5[3]);	

				$("#choiceA").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceB").on("click", function() {
					levelTwoSetup();
					clearInterval(intervalId); 
				});				
				$("#choiceC").on("click", function() {
					levelOneSetup();
					  
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
					  
				});				
			};
		};

//----------------------------------------------------------------------------------------------------------------------------
										//LEVEL 2
//----------------------------------------------------------------------------------------------------------------------------

		//LEVEL 2 ANSWERS
		var levelTwoQ1 = [
			"Wisconsin", //0
			"South Dakota", //1
			"Washington", //2 
			"North Dakota" //3 CORRECT
		];
		var levelTwoQ2 = [
			"Japan", //0 CORRECT
			"North Korea", //1
			"South Korea", //2
			"China" //3
		];
		var levelTwoQ3 = [
			"Clint Eastwood", //0
			"Ennio Morricone", //1
			"Gian Mario Volonte", //2
			"Sergio Leone" //3 CORRECT
		]; 
		var levelTwoQ4 = [
			"Strider", //0 
			"Pippin", //1
			"Boromir", //2 CORRECT
			"Elrond" //3
		];
		var levelTwoQ5 = [
			"JFK", //0
			"John Lennon", //1 
			"Jimi Hendrix", //2 CORRECT
			"Richard Nixon" //3
		];

		//Level 2 Questions
		var levelTwo = {
			q1: "'Fargo' takes place in which of these US states?",
			//Wisconsin(a), South Dakota(b), Washington(c), North Dakota(d)
			q2: "'Lost in Translation' takes place in which Asian country?",
			//Japan(a), North Korea(b), South Korea(c), China(d)
			q3: "Who directed 'The Good, the Bad, and the Ugly'?",
			//Clint Eastwood(a), Ennio Morricone(b), Gian Mario Volonte(c), Sergio Leone(d)
			q4: "Which character dies in 'The Fellowship of the Ring'?",
			//Strider(a), Pippin(b), Boromir(c), Elrond(d)
			q5: "Which real person does NOT appear in Forrest Gump?"
			//JFK(a), John Lennon(b), Jimi Hendrix(c), Richard Nixon(d)
		};

		function levelTwoSetup() {

			$("#ccTitle").text("Question 2: $1000");

			q = getRandomNumber(0, 4);

			number = 15;
    		intervalId;

			run();
			console.log(q);

			if (q == 0) {
				$("#askQuestion").text(levelTwo.q1);
				$("#choiceA").html("<div>A: " + levelTwoQ1[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelTwoQ1[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelTwoQ1[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelTwoQ1[3]+"</div>");

				$("#choiceA").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					levelOneSetup();
					  
				});
				$("#choiceD").on("click", function() {
					levelThreeSetup();
					clearInterval(intervalId); 
				});					
			};
			if (q ==1) {
				$("#askQuestion").text(levelTwo.q2);
				$("#choiceA").html("<div>A: " + levelTwoQ2[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelTwoQ2[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelTwoQ2[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelTwoQ2[3]+"</div>");

				$("#choiceA").on("click", function() {
					levelThreeSetup();
					clearInterval(intervalId);
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					levelOneSetup();
					  
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
					  
				});					
			};
			if (q == 2) {
				$("#askQuestion").text(levelTwo.q3);
				$("#choiceA").html("<div>A: " + levelTwoQ3[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelTwoQ3[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelTwoQ3[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelTwoQ3[3]+"</div>");

				$("#choiceA").on("click", function() {
					levelOneSetup();
					
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					levelOneSetup();
					  
				});
				$("#choiceD").on("click", function() {
					levelThreeSetup();
					clearInterval(intervalId);
				});					
			};
			if (q ==3) {
				$("#askQuestion").text(levelTwo.q4);
				$("#choiceA").html("<div>A: " + levelTwoQ4[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelTwoQ4[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelTwoQ4[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelTwoQ4[3]+"</div>");	

				$("#choiceA").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					levelThreeSetup();
					clearInterval(intervalId); 
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
					  
				});				
			};
			if (q ==4) {
				$("#askQuestion").text(levelTwo.q5);
				$("#choiceA").html("A: " + levelTwoQ5[0]);
				$("#choiceB").html("B: " + levelTwoQ5[1]);
				$("#choiceC").html("C: " + levelTwoQ5[2]);
				$("#choiceD").html("D: " + levelTwoQ5[3]);

				$("#choiceA").on("click", function() {
					levelOneSetup();
					
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					levelThreeSetup();
					clearInterval(intervalId); 
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
					  
				});					
			};
		};
// //----------------------------------------------------------------------------------------------------------------------------
// 										//LEVEL 3
// //----------------------------------------------------------------------------------------------------------------------------

		//LEVEL 3 ANSWERS
		var levelThreeQ1 = [
			"The Rolling Stones", //0
			"The Band", //1 CORRECT
			"CSNY", //2 
			"Talking Heads" //3 
		];
		var levelThreeQ2 = [
			"Crystal Skull", //0 
			"Raiders of the Lost Ark", //1
			"The Last Crusade", //2 CORRECT
			"Temple of Doom" //3
		];
		var levelThreeQ3 = [
			"Coraline", //0
			"Fantastic Mr. Fox", //1
			"Mary & Max", //2
			"Jungle Book" //3 CORRECT
		]; 
		var levelThreeQ4 = [
			"Part 1", //0 
			"Part 2", //1
			"Part 3", //2 CORRECT
			"Part 4" //3
		];
		var levelThreeQ5 = [
			"Al Pacino", //0
			"John Cazale", //1 
			"James Caan", //2 
			"Faye Dunaway" //3 CORRECT
		];

		//Level 3 Questions
		var levelThree = {
			q1: "Martin Scorsese's The Last Waltz, is a concert film for which of these bands?",
			//The Rolling Stones(a), The Band(b), CSNY(c), Talking Heads(d)
			q2: "Hitler briefly appears in which Indiana Jones film?",
			//Crystal Skull(a), Raiders of the Lost Ark(b), The Last Crusade(c), Temple of Doom(d)
			q3: "Which of the following is NOT a stop-motion animated-picture?",
			//Coraline(a), Fantastic Mr Fox(b), Mary & Max(c), Jungle Book(d)
			q4: "Which Back to the Future film takes place in the wild west?",
			//Part1(a), Part2(b), Part3(c), Part4(d)
			q5: "Which of these actors did NOT appear in the Godfather films?"
			//Al Pacino(a), John Cazale(b), James Caan(c), Faye Dunaway(d)
		};

		function levelThreeSetup() {


			$("#ccTitle").text("Question 3: $10,000");

			q = getRandomNumber(0, 4);

			run();

			console.log(q);

			if (q == 0) {
				$("#askQuestion").text(levelThree.q1);
				$("#choiceA").html("<div>A: " + levelThreeQ1[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelThreeQ1[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelThreeQ1[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelThreeQ1[3]+"</div>");		

				$("#choiceA").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceB").on("click", function() {
					levelFourSetup();
					clearInterval(intervalId);
				});				
				$("#choiceC").on("click", function() {
					levelOneSetup();
					  
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
					  
				});			
			};
			if (q ==1) {
				$("#askQuestion").text(levelThree.q2);
				$("#choiceA").html("<div>A: " + levelThreeQ2[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelThreeQ2[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelThreeQ2[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelThreeQ2[3]+"</div>");	

				$("#choiceA").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					levelFourSetup();
					clearInterval(intervalId);
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
					  
				});				
			};
			if (q == 2) {
				$("#askQuestion").text(levelThree.q3);
				$("#choiceA").html("<div>A: " + levelThreeQ3[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelThreeQ3[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelThreeQ3[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelThreeQ3[3]+"</div>");	

				$("#choiceA").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					levelOneSetup();
					  
				});
				$("#choiceD").on("click", function() {
					levelFourSetup();
					clearInterval(intervalId); 
				});				
			};
			if (q ==3) {
				$("#askQuestion").text(levelThree.q4);
				$("#choiceA").html("<div>A: " + levelThreeQ4[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelThreeQ4[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelThreeQ4[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelThreeQ4[3]+"</div>");	

				$("#choiceA").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					levelFourSetup();
					clearInterval(intervalId);
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
					  
				});				
			};
			if (q ==4) {
				$("#askQuestion").text(levelThree.q5);
				$("#choiceA").html("A: " + levelThreeQ5[0]);
				$("#choiceB").html("B: " + levelThreeQ5[1]);
				$("#choiceC").html("C: " + levelThreeQ5[2]);
				$("#choiceD").html("D: " + levelThreeQ5[3]);	

				$("#choiceA").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					levelOneSetup();
					  
				});
				$("#choiceD").on("click", function() {
					levelFourSetup();
					 clearInterval(intervalId);
				});				
			};
		};

// //----------------------------------------------------------------------------------------------------------------------------
// 										//LEVEL 4
// //----------------------------------------------------------------------------------------------------------------------------

		//LEVEL 4 Answers	
		var levelFourQ1 = [
			"Nebraska", //0
			"Picnic at Hanging Rock", //1  CORRECT
			"Casablanca", //2 
			"Psycho" //3 
		];
		var levelFourQ2 = [
			"Roger Deakins", //0 
			"Emmanuel Lubezki", //1
			"Alfonso Cuarón", //2 CORRECT
			"Robert Yeoman" //3
		];
		var levelFourQ3 = [
			"Annie Hall", //0
			"Hannah and Her Sisters", //1
			"The Graduate", //2 CORRECT
			"Some Like It Hot" //3 
		]; 
		var levelFourQ4 = [
			"Spain", //0 
			"Monaco", //1 CORRECT
			"Wales", //2 
			"Luxembourg" //3
		];
		var levelFourQ5 = [
			"Madadayo", //0 CORRECT
			"Kagemusha", //1 
			"Ran", //2 
			"Ikiru" //3 
		];	

		//Level 4 Questions
		var levelFour = {
			q1: "Which of these films are NOT filmed in black and white?",
			//Nebraska(a), Picnic at Hanging Rock(b), Casablanca(c), Psycho(d)
			q2: "Which of these men is NOT a cinematographer?",
			//Roger Deakins(a), Emmanuel Lubezki(b), Alfonso Cuarón(c), Robert Yeoman(d)
			q3: "Paul Simon wrote songs included in which of these films?",
			//Annie Hall(a), Hannah and Her Sisters(b), The Graduate(c), Some Like It Hot(d)
			q4: "Grace Kelly became the princess from where?",
			//Spain(a), Monaco(b), Wales(c), Luxembourg(d)
			q5: "Which of these was Akira Kurosawa's last film?"
			//Madadayo(a), Kagemusha(b), Ran(c), Ikiru(d)
		};

		function levelFourSetup() {

			$("#ccTitle").text("Question 4: $100,000");

			q = getRandomNumber(0, 4);

			run();

			console.log(q);

			if (q == 0) {
				$("#askQuestion").text(levelFour.q1);
				$("#choiceA").html("<div>A: " + levelFourQ1[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelFourQ1[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelFourQ1[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelFourQ1[3]+"</div>");	

				$("#choiceA").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceB").on("click", function() {
					youWin();
					clearInterval(intervalId); 
				});				
				$("#choiceC").on("click", function() {
					levelOneSetup();
					  
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
					  
				});				
			};
			if (q ==1) {
				$("#askQuestion").text(levelFour.q2);
				$("#choiceA").html("<div>A: " + levelFourQ2[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelFourQ2[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelFourQ2[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelFourQ2[3]+"</div>");

				$("#choiceA").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					youWin();
					clearInterval(intervalId); 
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
					  
				});						
			};
			if (q == 2) {
				$("#askQuestion").text(levelFour.q3);
				$("#choiceA").html("<div>A: " + levelFourQ3[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelFourQ3[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelFourQ3[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelFourQ3[3]+"</div>");

				$("#choiceA").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					youWin();
					clearInterval(intervalId);
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
					  
				});						
			};
			if (q ==3) {
				$("#askQuestion").text(levelFour.q4);
				$("#choiceA").html("<div>A: " + levelFourQ4[0]+"</div>");
				$("#choiceB").html("<div>B: " + levelFourQ4[1]+"</div>");
				$("#choiceC").html("<div>C: " + levelFourQ4[2]+"</div>");
				$("#choiceD").html("<div>D: " + levelFourQ4[3]+"</div>");	

				$("#choiceA").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceB").on("click", function() {
					youWin();
					clearInterval(intervalId);
				});				
				$("#choiceC").on("click", function() {
					levelOneSetup();
					  
				});
				$("#choiceD").on("click", function() {
					levelOneSetup();
					  
				});					
			};
			if (q ==4) {
				$("#askQuestion").text(levelFour.q5);
				$("#choiceA").html("A: " + levelFourQ5[0]);
				$("#choiceB").html("B: " + levelFourQ5[1]);
				$("#choiceC").html("C: " + levelFourQ5[2]);
				$("#choiceD").html("D: " + levelFourQ5[3]);	

				$("#choiceA").on("click", function() {
					levelOneSetup();
					 
				});				
				$("#choiceB").on("click", function() {
					levelOneSetup();
					  
				});				
				$("#choiceC").on("click", function() {
					levelOneSetup();
					  
				});
				$("#choiceD").on("click", function() {
					youWin();
					clearInterval(intervalId);
				});				
			};
		};

// //----------------------------------------------------------------------------------------------------------------------------
// 										//LEVEL 5
// //----------------------------------------------------------------------------------------------------------------------------

		// //LEVEL 5 Answers	
		// var levelFourQ1 = [
		// 	"Kane's Romantic Interest", //0
		// 	"Kane's Abacus", //1  
		// 	"Kane's Sled", //2 CORRECT
		// 	"Kane's Car" //3 
		// ];
		// var levelFourQ2 = [
		// 	"Not Worth it...", //0 
		// 	"Too late...", //1
		// 	"Closing time...", //2 
		// 	"Chinatown" //3 CORRECT
		// ];
		// var levelFourQ3 = [
		// 	"The New York Times", //0
		// 	"The Washington Post", //1 CORRECT
		// 	"The Wallstreet Journal", //2 
		// 	"Chicago Tribune" //3 
		// ]; 
		// var levelFourQ4 = [
		// 	"2019", //0 CORRECT
		// 	"2190", //1 
		// 	"2340", //2 
		// 	"2065" //3
		// ];
		// var levelFourQ5 = [
		// 	"Castle in the Sky", //0 
		// 	"Spirited Away", //1 
		// 	"Princess Mononoke", //2 
		// 	"Grave of the Fireflies" //3 CORRECT
		// ];	

		// //Level 5 Questions
		// var levelFive = {
		// 	q1: "'Rosebud' refers to WHAT in Orson Welles' Citizen Kane?",
		// 	//Kane's Romantic Interest(a), Kane's Abacus(b), Kane's Childhood Sled(c), Kane's Car(d)
		// 	q2: "Fill in the blank: 'Forget it, Jake. It's _________'",
		// 	//'Not worth it...'(a), 'Too late...'(b), 'Closing time...'(c), 'Chinatown'(d)
		// 	q3: "'All the President's Men' follows two reporters at which news outlet?",
		// 	//The New York Times(a), The Washington Post(b), The Wallstreet Journal(c), Chicago Tribune(d)
		// 	q4: "Blade Runner takes place in what year?",
		// 	//2019(a), 2190(b), 2340(c), 2065(d)
		// 	q5: "Which of these Studio Ghibli films were NOT directed by Hayao Miyazaki"
		// 	//Castle in the Sky(a), Spirited Away(b), Princess Mononoke(c), Grave of the Fireflies(d)
		// };

		// function levelFiveSetup() {


		// 	$("#ccTitle").text("Question 5: $1,000,000");

		// 	q = getRandomNumber(0, 4);

		// 	console.log(q);

		// 	if (q == 0) {
		// 		$("#askQuestion").text(levelFive.q1);
		// 		$("#choiceA").html("<div>A: " + levelFiveQ1[0]+"</div>");
		// 		$("#choiceB").html("<div>B: " + levelFiveQ1[1]+"</div>");
		// 		$("#choiceC").html("<div>C: " + levelFiveQ1[2]+"</div>");
		// 		$("#choiceD").html("<div>D: " + levelFiveQ1[3]+"</div>");	

		// 		$("#choiceA").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});				
		// 		$("#choiceB").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});				
		// 		$("#choiceC").on("click", function() {
		// 			levelOneSetup();
					 
		// 		});
		// 		$("#choiceD").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});					
		// 	};
		// 	if (q ==1) {
		// 		$("#askQuestion").text(levelFive.q2);
		// 		$("#choiceA").html("<div>A: " + levelFiveQ2[0]+"</div>");
		// 		$("#choiceB").html("<div>B: " + levelFiveQ2[1]+"</div>");
		// 		$("#choiceC").html("<div>C: " + levelFiveQ2[2]+"</div>");
		// 		$("#choiceD").html("<div>D: " + levelFiveQ2[3]+"</div>");

		// 		$("#choiceA").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});				
		// 		$("#choiceB").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});				
		// 		$("#choiceC").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});
		// 		$("#choiceD").on("click", function() {
		// 			levelOneSetup();
					 
		// 		});					
		// 	};
		// 	if (q == 2) {
		// 		$("#askQuestion").text(levelFive.q3);
		// 		$("#choiceA").html("<div>A: " + levelFiveQ3[0]+"</div>");
		// 		$("#choiceB").html("<div>B: " + levelFiveQ3[1]+"</div>");
		// 		$("#choiceC").html("<div>C: " + levelFiveQ3[2]+"</div>");
		// 		$("#choiceD").html("<div>D: " + levelFiveQ3[3]+"</div>");

		// 		$("#choiceA").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});				
		// 		$("#choiceB").on("click", function() {
		// 			levelOneSetup();
					 
		// 		});				
		// 		$("#choiceC").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});
		// 		$("#choiceD").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});					
		// 	};
		// 	if (q ==3) {
		// 		$("#askQuestion").text(levelFive.q4);
		// 		$("#choiceA").html("<div>A: " + levelFiveQ4[0]+"</div>");
		// 		$("#choiceB").html("<div>B: " + levelFiveQ4[1]+"</div>");
		// 		$("#choiceC").html("<div>C: " + levelFiveQ4[2]+"</div>");
		// 		$("#choiceD").html("<div>D: " + levelFiveQ4[3]+"</div>");	

		// 		$("#choiceA").on("click", function() {
		// 			levelOneSetup();
					 
		// 		});				
		// 		$("#choiceB").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});				
		// 		$("#choiceC").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});
		// 		$("#choiceD").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});				
		// 	};
		// 	if (q ==4) {
		// 		$("#askQuestion").text(levelFive.q5);
		// 		$("#choiceA").html("A: " + levelFiveQ5[0]);
		// 		$("#choiceB").html("B: " + levelFiveQ5[1]);
		// 		$("#choiceC").html("C: " + levelFiveQ5[2]);
		// 		$("#choiceD").html("D: " + levelFiveQ5[3]);

		// 		$("#choiceA").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});				
		// 		$("#choiceB").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});				
		// 		$("#choiceC").on("click", function() {
		// 			levelOneSetup();
					  
		// 		});
		// 		$("#choiceD").on("click", function() {
		// 			levelOneSetup();
					 
		// 		});					
		// 	};
		// };

		levelOneSetup();


//----------------------------------------------------------------------------------------------------------------------------
										//GAME SETUP!!!!!!!!
//----------------------------------------------------------------------------------------------------------------------------
});



//</script>