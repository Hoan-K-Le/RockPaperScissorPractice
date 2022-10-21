const rpsGame = yourChoice => {
  //   console.log(yourChoice)
  let humanChoice
  let computerChoice
  humanChoice = yourChoice.id

  computerChoice = numberToChoice(randToRpsInt())
  console.log(computerChoice)

  results = decideWinner(humanChoice, computerChoice)
  console.log(results)

  message = finalMessage(results) //sends a message of the winner
  console.log(message)
  rpsFrontEnd(yourChoice.id, computerChoice, message)
}

const randToRpsInt = () => {
  return Math.floor(Math.random() * 3)
}

const numberToChoice = number => {
  return ['rock', 'paper', 'scissor'][number]
}

const decideWinner = (yourChoice, computerChoice) => {
  let rpsDatabase = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    paper: { paper: 0.5, rock: 1, scissor: 0 },
    scissor: { paper: 1, rock: 0, scissor: 0.5 },
  }

  let yourScore = rpsDatabase[yourChoice][computerChoice]
  let computerScore = rpsDatabase[computerChoice][yourChoice]

  return [yourScore, computerScore]
}

const finalMessage = ([yourScore, computerScore]) => {
  if (yourScore === 0) {
    return { message: 'You Lost!', color: 'red' }
  } else if (yourScore === 0.5) {
    return { message: 'It is a draw!', color: 'yellow' }
  } else {
    return { message: 'You Won!', color: 'green' }
  }
}

// Have three arguments
const rpsFrontEnd = (humanImageChoice, computerImageChoice, finalMessage) => {
  // Creating a dictionary
  let imageDatabase = {
    rock: document.getElementById('rock').src,
    paper: document.getElementById('scissor').src,
    paper: document.getElementById('paper').src,
  }
  //   remove all the images
  document.getElementById('rock').remove()
  document.getElementById('paper').remove()
  document.getElementById('scissor').remove()

  //   creating element for the images
  let humanDiv = document.createElement('div')
  let compDiv = document.createElement('div')
  let messageDiv = document.createElement('div')

  humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "'>"
  messageDiv.innerHTML =
    "<h1 style='color': " +
    finalMessage['color'] +
    "; font-size: 60px; padding: 30px;'>" +
    finalMessage['message'] +
    '</h1>'
  compDiv.innerHTML = "<img src='" + imageDatabase[computerImageChoice] + "'>"
  document.getElementById('flex-box-rps-div').appendChild(humanDiv)
  document.getElementById('flex-box-rps-div').appendChild(compDiv)
  document.getElementById('flex-box-rps-div').appendChild(messageDiv)
}
