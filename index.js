const selections = document.querySelectorAll('.selections button')
const finalColumn = document.querySelector('[data-final-column]')
const computerScore = document.querySelector('[data-computer-score]')
const userScore = document.querySelector('[data-user-score]')

const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper'
  }
]

selections.forEach(selectionBtn => {
  selectionBtn.addEventListener('click', () => {
    const selectionName = selectionBtn.dataset.selection;
    const userSelection = SELECTIONS.find(s => s.name === selectionName)

    const computerSelection = getComputerSelection()

    const isComputerWin = computerSelection.beats === userSelection.name
    const isUserWin = userSelection.beats === computerSelection.name

    updateGameTable(computerSelection, isComputerWin)
    updateGameTable(userSelection, isUserWin)

    if(isComputerWin) computerScore.innerText = parseInt(computerScore.innerText) + 1
    if(isUserWin) userScore.innerText = parseInt(userScore.innerText) + 1
  })
})

function getComputerSelection() {
  const randomInd = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomInd]
}

function updateGameTable(selection, isWinner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('result-selection')
  if(isWinner) div.classList.add('winner')
  finalColumn.after(div)
}
