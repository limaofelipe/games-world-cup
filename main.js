function createGame(player1, hour, player2, avatar1, avatar2, firstCountryPoints, secondCountryPoints) {
  return `
        <li>
            <div>
              <img src="${avatar1}" alt="Bandeira do ${player1}">
              <p>${player1}</p>
            </div>

            <input type="number" min="0" name="numero" class="score-input" value="${firstCountryPoints}" readonly/>
          
            <strong>${hour}</strong>

            <input type="number" min="0" name="numero" class="score-input" value="${secondCountryPoints}" readonly/>
          <div>
            <img src="${avatar2}" alt="Bandeira do ${player2}">
            <p>${player2}</p>
          </div>
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
      htmlJogo += createGame(jogo.nameFisrtCountry, jogo.hourGame, jogo.nameSecondCountry, jogo.avatarFisrtCountry, jogo.avatarSecondCountry, jogo.firstCountryPoints, jogo.secondCountryPoints)
    }

    html += createCard(
      data,
      jogos[0].dayWeek,
      htmlJogo
      )
  }
    document.querySelector("#cards").innerHTML = html
}


function searchByCountry() {
  document.getElementById("searchByCountry").addEventListener("input", function(event){
  let countryName = event.target.value
  axios.post('http://localhost:3333/games/country',{"nameCountry":countryName})
  .then(response =>  create(response))
  .catch(error => console.log(error))
  })

}


function createSelectGroup(response) {

  const listGroups = response.data
  
  let html ='<option value="initial">Selecione o Grupo</option>'
  for (const  [,group] of Object.entries(listGroups)) {
    
        html += `<option value="${group.id}">${group.name}</option>`
  }

        document.querySelector("#group-filter").innerHTML = html
}

function listGroups() {
  axios.get('http://localhost:3333/groups')
  .then(response =>  createSelectGroup(response))
  .catch(error => console.log(error))
}

function selectGroup() {
  document.getElementById("group-filter").addEventListener("change", selectByGroup);
  
}

function selectByGroup() {
  const idElement = document.getElementById("group-filter")
  let idGroup = idElement.options[idElement.selectedIndex].value;
  axios.get(`http://localhost:3333/games/${idGroup}/group`)
  .then(response => create(response))
  .catch(error => console.log(error))
  
}

function selectByDate() {
  document.getElementById("date").addEventListener("input", function (event) {
    let date = event.target.value
    axios.post('http://localhost:3333/games/date', {"date":date})
    .then(response =>  create(response))
    .catch(error => console.log(error))
  });
}