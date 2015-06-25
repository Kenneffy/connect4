$( document ).ready(function() {
	console.log("loaded bro")

	var winningCombos = [
		['a1', 'a2', 'a3', 'a4'],
		['b1', 'b2', 'b3', 'b4'],
		['c1', 'c2', 'c3', 'c4']
	]

	var checkIfSomeoneWon = function(){
		//double for loop over winningCombos
		//just like tic tac toe	
		//return true or false 
			//based on if someone won
	}


	var dropCoin = function (column, t) {
		var classColor = '';

		if (t == '1'){
			classColor = 'red'
		}else{
			classColor = 'black'
		}

		for (var i = 0; i < column.children().length; i++) {

			if (column.children().eq(i).hasClass('white')) {
				column.children().eq(i).removeClass('white')
				column.children().eq(i).addClass(classColor)

				break;
			}

		}

		//alert(column.children().length)
		// for loop goes here?
		//alert(t + 'coin drop')
	}
	var turn = 1;

	$('#turn').text(turn);

	$('#columnOne, #columnTwo, #columnThree, #columnFour, #columnFive, #columnSix, #columnSeven').on('click', function(){
		
		if (turn == 1){
			dropCoin($(this), turn)	
			turn = 2;
			$('#turn').text(turn);

		}else if(turn == 2){
			dropCoin($(this), turn)
			turn = 1;
			$('#turn').text(turn);
			

		}
	});
});



