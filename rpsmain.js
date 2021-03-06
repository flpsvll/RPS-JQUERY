var options = ['rock', 'paper', 'scissors']
var user, 
    computer,
    result
var score = { win: 0, lose: 0, tie: 0 }

// <img class="choice" id="rock|paper|scissors" />
var $selectors = document.getElementsByClassName('choice')

// <img id="computer" class="hide" />
var $computerChoice = document.getElementById('computer')
// <img id="user" class="hide"
var $userChoice = document.getElementById('user')

// <h1 id="wins|losses|ties"></h1>
var $wins = document.getElementById('wins')
var $losses = document.getElementById('losses')
var $ties = document.getElementById('ties')


function userSelection(e) {
  user = e.target.id
  $userChoice.src = user + '.png'
  $userChoice.className = 'selected'
  computer = computerSelection()
  $computerChoice.src = computer + '.png'
  $computerChoice.className = 'selected'
  // win | lose | tie
  result = compare()
  //score.win | score.lose | score.tie
  score[result]++
  render()
}

function computerSelection() {
  return options[Math.floor(Math.random() * options.length)]
}

function compare() {
  if (user === computer)
    return 'tie'

  switch(user) {
    case 'rock':
      return computer === 'paper' ? 'lose' : 'win'
    case 'paper':
      return computer === 'scissors' ? 'lose' : 'win'
    case 'scissors':
      return computer === 'rock' ? 'lose' : 'win'
    default:
      return
  }
}

function render() {
  $wins.innerHTML = 'Wins: ' + score.win
  $losses.innerHTML = 'Losses: ' + score.lose
  $ties.innerHTML = 'Ties: ' + score.tie
}

for (var i = 0; i < $selectors.length; i++) {
  // [#rock.choice, #paper.choice, #scissors.choice]
  $selectors[i].addEventListener('click', userSelection)
}

