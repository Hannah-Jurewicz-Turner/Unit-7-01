// connects 'guess' button to 'random' function
document.getElementById('button').addEventListener('click',randomizer)
let randomNumber = 0
let userGuess = 0

function randomizer () {
  // This gets the number inputted and converts it into an integer. 
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  // Generates a random number between 1 and 6
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)

  // Compares the user's guess with the random number
  if (userGuess == randomNumber) {
    document.getElementById('answer').innerHTML = 'You win!'
  }
}