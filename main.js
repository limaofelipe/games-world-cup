function createGame(player1, hour, player2) {
  return `
        <li>
          <img src="./assets/icons/${player1}.svg" alt="Bandeira do ${player1}">
          <strong>${hour}</strong>
          <img src="./assets/icons/${player2}.svg" alt="Bandeira do ${player2}">
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

document.querySelector("#cards").innerHTML = 
      createCard(
        "20/11",
        "Domingo",
        createGame("qatar", "13:00", "Ecuador")
      ) +

      createCard(
        "21/11",
        "Segunda",
        createGame("senegal", "07:00", "Netherlands") +
          createGame("england", "10:00", "iran") +
          createGame("united states", "10:00", "Wales")
      ) +

      createCard(
        "22/11",
        "Terça",
        createGame("Argentina", "07:00", "Saudi Arabia") +
          createGame("denmark", "10:00", "tunisia") +
          createGame("mexico", "13:00", "poland") +
          createGame("france", "16:00", "australia")
      ) +
      
      createCard(
        "23/12",
        "Quarta",
        createGame("morocco", "07:00", "Croatia") +
          createGame("germany", "10:00", "japan") +
          createGame("spain", "13:00", "costa rica") +
          createGame("belgium", "16:00", "canada")
      ) 