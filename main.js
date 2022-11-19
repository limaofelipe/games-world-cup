function createGame(player1, hour, player2) {
  return `
        <li>
          <img src="./assets/icons/brazil.svg" alt="Bandeira do ${player1}">
          <strong>${hour}</strong>
          <img src="./assets/icons/argentina.svg" alt="Bandeira do ${player2}">
        </li>
        `
}

function createCard(date, day, games) {
  return `
    <div class="card">
        <h2> ${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}


function list () {
  axios.get('http://localhost:3333/games')
  .then(response => create(response))
  .catch(error => console.log(error))

}

function create(response) {

  const listDataJogos = response.data
  

  let html =''
  for (const [data, jogos] of Object.entries(listDataJogos)) {
    let htmlJogo = ''
    for (const [index, jogo] of jogos.entries()) {
      htmlJogo += createGame(jogo.nameFisrtCountry, jogo.hourGame, jogo.nameSecondCountry)
    }
    
    html += createCard(
      data,
      jogos[0].dayWeek,
      htmlJogo
      )
  }
    
    document.querySelector("#cards").innerHTML = html



}