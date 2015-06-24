$( document ).ready(function() {
	console.log("loaded bro")

	var turn = 0;

	$('#turn').text(turn);

	$('#columnOne, #columnTwo, #columnThree, #columnFour, #columnFive, #columnSix, #columnSeven').on('click', function(){
		if (turn == 0){
			turn = 1;
			$('#turn').text(turn);
		}else if(turn == 1){
			turn = 0;
			$('#turn').text(turn);
		}
	});
});
