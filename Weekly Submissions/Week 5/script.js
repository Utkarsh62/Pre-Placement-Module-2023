
function onclickrps(player) {
  const computer=['Rock','Paper','Scissors']
  const computerchoice=computer[Math.floor(Math.random()*3)]
  const playerchoice=player.value
  console.log(computerchoice)
  let score
  if(playerchoice== computerchoice){
    score=0;
  }else if(playerchoice=='Rock' && computerchoice=='Scissors'){
    score=1
  }
  else if(playerchoice=='Paper' && computerchoice=='Rock'){
    score=1
  }
  else if(playerchoice=='Scissors' && computerchoice=='Paper'){
    score=1
  }
  else {
    score = -1
  }
   let result = document.getElementById('result')
  switch (score) {
    case -1:
      result.innerText = `You Lose!`
      break;
    case 0:
      result.innerText = `It's a Draw!`
      break;
    case 1:
      result.innerText = `You Win!`
      break;
  }
 let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerchoice} vs 🤖 ${computerchoice}`
  
}





const rpsbuttons = document.querySelectorAll('.rpsButton')

rpsbuttons.forEach(rpsbutton => {
  rpsbutton.onclick = () => {
   onclickrps(rpsbutton)

  }
})
const reset=document.getElementById('endGameButton')
reset.onclick=()=>{
    let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

