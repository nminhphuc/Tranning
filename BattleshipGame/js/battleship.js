
var view = {
	displayMessage: function(msg){
		$('#messageArea').text(msg);
	},
	displayHit: function(location) {
		$("#" + location).addClass("hit");	

	},
	displayMiss: function(location) {
		$("#" + location).addClass("miss");	
	}
}

var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk:0,
	tableLength: 6,
	ships: [{locations:["0","0","0"],hits:["","",""]},
	{locations:["0","0","0"],hits:["","",""]},
	{locations:["0","0","0"],hits:["","",""]}],

	fire: function(guess) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var location = ship.locations;
			var index = location.indexOf(guess);
			if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("HIT!");
				if (this.isSunk(ship)) {
					view.displayMessage("You sank my battleship!");
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("MISS!");
		return false;
	},
	createTable: function() {
		var outputHtml = "";
		for (var i = 0; i <= this.tableLength; i++) {
			outputHtml += "<tr>";
			for (var j = 0; j <= this.tableLength; j++) {
				outputHtml += '<td id="'+ i + String(j) +'"></td>';
			}
			outputHtml += "</tr>";
		}
		$("table").html(outputHtml);
	},

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] != "hit") {
				return false;
			}
		}
		return true;
	},

	generateShipLocations: function() {
		var locations;
		for (var i = 0; i < this.shipLength; i++) {
			do {
				locations = this.generateShip();
			} while (this.conllision(locations));
			this.ships[i].locations = locations;
		}
	},

	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);  // ngang hay doc
		var row, col;

		if (direction === 1) {
			row = Math.floor(Math.random()  * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize  - this.shipLength));
		}else{
			row = Math.floor(Math.random() * (this.boardSize  - this.shipLength));
			col = Math.floor(Math.random()  * this.boardSize);

		}
		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			}else{
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},

	conllision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = model.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}			
		}
		return false;
	}
}

var controller ={
	guesses:0,
	processGuess: function(guess) {
		var location = this.parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("You sank all my battleship, in " + this.guesses + " guesses");
			}
		}
	},

	parseGuess: function(guess) {
		var alphabet = ["A","B","C","D","E","F","G"];
		if (guess === null || guess.length !== 2) {
			alert("Oops, please enter a letter and a number on the board.");
		}else{
			var firstChar = guess.charAt(0).toUpperCase();
			var row = alphabet.indexOf(firstChar);
			var column = guess.charAt(1);

			if (isNaN(row) || isNaN(column)) {
				alert("Oops, that isn't on the board.");
			}			 else if (row < 0 || row >= model.boardSize ||
				column < 0 || column >= model.boardSize) {

				alert("Oops, that's off the board!");
			}else{
				return row + column;
			}
		}
		return null;
	}
}

init();
function init() {
	model.createTable();
	model.generateShipLocations();
	$('#guessInput').keypress(function(e) {
		if (e.keyCode === 13) {
			handleFireButton();
			return false;
		}
	});

	$('#fireButton').click(function() {
		handleFireButton();
	});	
}

function handleFireButton() {
	var guess = $('#guessInput').val();
	controller.processGuess(guess);
	$('#guessInput').val("");
}