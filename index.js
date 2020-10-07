/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", function() {
  function h1header() {
    const header = document.querySelector('h1#header')
    /***** Deliverable 2 *****/
    header.style.color = "red"
    console.log("Here's your header:", header.innerText)
  }

  function renderPlayers() {
    PLAYERS.forEach((player) => {
      const playerLi = document.createElement('div')
      playerLi.className = 'player'
      playerLi.setAttribute('data-number',`${player.number}`)
      playerLi.innerHTML = `
      <h3>${player.name}<em>${player.nickname}</em></h3>
      <img src="${player.photo}" alt="${player.name}"/>`
      const playerList = document.querySelector('div.player-container')
      console.log(playerList)
      playerList.append(playerLi)
    })
  }

  function removeplayer(){
    const player = document.querySelector("div[data-number='7']")
    player.remove()
  }

  renderPlayers()
  h1header()
  removeplayer()
})









/***** Deliverable 4 *****/
