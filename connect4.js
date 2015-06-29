

$(document).ready(function() {
	var boardObj = {
		board: [],
		getBoard: function () {
			return this.board;
		},
		create: function () {
			this.board = [];

			for (var i = 0, len = 7; i < len; i++) {
				this.board.push(new Array(6));
			}

			return this.board;
		},
		updatePlacement: function (col, player) {
			for (var i = 0; i < this.board[col].length; i++) {
				if (this.board[col][i] === undefined) {
					this.board[col][i] = player;
					this.checkWin(col, i, player);
					return;
				}
			}
		},
		checkWin: function (col, row, p) {
			if (checkH(col, row, p) || checkV(col, p) || checkD(col, row, p)) {
				$('#game').children().unbind('click');
				document.body.style.background = 'url("http://media.giphy.com/media/gbRRfbAbuaeJO/giphy.gif")';
				document.body.style.backgroundSize = 'cover';
			}
		},
		colFull: function (col) {
			for (var i = 0; i < this.board[col].length; i++) {
				if (this.board[col][i] === undefined) {
					return false;
				}
			}
			return true;
		}
	};

	var board = Object.create(boardObj);
	board.create();
	
	function hasFourInARow (list, p) {
		var counter = 0;
		var result = false;

		list.forEach(function (n) {
			if (n === p) {
				counter++;
				if (counter === 4) {
					result = true;
					return;
				}
			} else {
				counter = 0;
			}
		});

		return result;
	}

	function checkD (col, row, player) {
		var listToUpperRight = toURList(col, row);
		var listToLowerRight = toLRList(col, row);

		return hasFourInARow(listToUpperRight, player) ||
						hasFourInARow(listToLowerRight, player);
	}

	function toURList (col, row) {
		var i = col;
		var j = row;
		while (i > 0 && j > 0) {
			board.getBoard()[i--][j--];
		}
		
		list = [];
		
		for (i; i < board.getBoard().length; i++) {
			list.push(board.getBoard()[i][j]);
			j++;
		}

		return list;
	}

	function toLRList (col, row) {
		var i = col;
		var j = row;
		while (i > 0 && j < 5) {
			board.getBoard()[i--][j++];
		}
		
		list = [];
		
		for (i; i < board.getBoard().length; i++) {
			list.push(board.getBoard()[i][j]);
			j--;
		}

		return list;
	}

	function checkH (col, row, player) {
		var list = [];

		board.getBoard().forEach(function (col) {
			list.push(col[row]);
		});

		return hasFourInARow(list, player);
	}

	function checkV (col, player) {
		var list = board.getBoard()[col];

		return hasFourInARow(list, player);
	}

	function updateDomColor (column, t) {
		if (t == '1') {
			classColor = 'red'
		} else {
			classColor = 'black'
		}

		for (var i = 5; i < column.children().length; i--) {

			if (column.children().eq(i).hasClass('white')) {
				column.children().eq(i).removeClass('white')
				column.children().eq(i).addClass(classColor)

				break;
			}
		}
	}

	var dropCoin = function (column, p) {
		var col = column.attr('id').slice(1) - 1;

		if (!board.colFull(col)) {
			updateDomColor(column, p);
			board.updatePlacement(col, p);
		} else {
			alert('This column full already!');
			return;
		}
	}

	var turn = 1;

	$('#turn').text(turn);

	$('#game').children().on('click', function () {
		dropCoin($(this), turn);
		turn = turn === 1 ? 2 : 1;
		$('#turn').text(turn);
	});
});
