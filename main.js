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

document.querySelector("#app").innerHTML = `
    <header>
      <img src="./assets/logo.svg" alt="Logo do Evento Next Level Week">      
    </header>
      <div id="filters">      
      <p> Utilize nossos filtros</p>
      <div class="country-filter">
          <input placeholder="Busque por seleção" type="text">
      </div>


      <select class="group-filter">
        <option value="Grupo A">Grupo A</option>
        <option value="Grupo B">Grupo B</option>
        <option value="Grupo C">Grupo C</option>
        <option value="Grupo D">Grupo D</option>
        <option value="Grupo E">Grupo E</option>
        <option value="Grupo F">Grupo F</option>
        <option value="Grupo G">Grupo G</option>
        <option value="Grupo H">Grupo H</option>
      </select>

      <input type='date' id='date' name='dtnasc'>
          
      </div>
      

    <main id="cards">
      ${createCard("20/11", "Domingo", createGame("qatar", "13:00", "Ecuador"))}

      ${createCard(
        "24/11",
        "Quinta",
        createGame("brazil", "16:00", "serbia") +
          createGame("brazil", "16:00", "serbia")
      )}

      ${createCard(
        "28/11",
        "Segunda",
        createGame("brazil", "13:00", "switzerland") +
          createGame("qatar", "13:00", "Ecuador")
      )}
      
      ${createCard(
        "02/12",
        "Sexta",
        createGame("brazil", "16:00", "cameroon") +
          createGame("qatar", "13:00", "Ecuador")
      )}
    </main>`
