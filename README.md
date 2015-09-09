# Connect4
First WDI Project

Website: http://kenneffy.github.io/connect4/

Technologies used:
Programming languages used were HTML/CSS, Javascript & utilized JQUERY. Also used github to as a platform to store and commit my files. 

The object was to create a game that simulates the classic board game "Connect 4". I broke down the game to it's most basic parts. There are 7 columns and 6 rows, I expressed that structure through DIVs. There are two value inputs, player 1's choice and player 2's choice. I expressed player 1 as red and player 2 as black. 

The values populate from bottom up, I evaluated an input value (red or black) according to whose turn it was. Turn 1 (player 1) would populate a value of red and turn 2 (player 2) would populate a value of black. 

To win, 4 of the same values must align horizontally, vertically and diagonally. I wanted to have javascript recognize that if four values were lined up together an alert would pop up whether player 1 or player 2 has won. There were several approaches in which I thought would be effective in espressing a win:

1. Creating three functions to listen for the winning values
	- Function to find all horizontal wins
	- Function to find all vertical wins
	- Function to find all diagonal wins
2. Listening for the player clicks, if four of the same turn values (turn 1, turn 1, turn 1, turn 1) or (turn 2, turn 2, turn 2, turn 2) would occur without break then user would be notified of the win. 

Challenges/Unsolved problems
1. Determining a tie in the game
2. Notify players when there are no more playable moves
3. Creating a game over button to reset the game
4. A way to keep track of player 1/player 2 wins
5. Option to play vs a computer (AI)
6. Ability to store a game to player layer (using Firebase)
7. Ability to play live with somebody remotely

Wireframe:
https://moqups.com/#!/edit/kenneffy/MgJ9ZUvC

Userstory:
https://trello.com/b/4PLyM4Kt/connect-4 