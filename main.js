function createGame(player1, hour, player2, avatar1, avatar2) {
  return `
        <li>
          <img src="${avatar1}" alt="Bandeira do ${player1}">
          <strong>${hour}</strong>
          <img src="${avatar2}" alt="Bandeira do ${player2}">
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
      htmlJogo += createGame(jogo.nameFisrtCountry, jogo.hourGame, jogo.nameSecondCountry, jogo.avatarFisrtCountry, jogo.avatarSecondCountry)
    }

    html += createCard(
      data,
      jogos[0].dayWeek,
      htmlJogo
      )
  }
    document.querySelector("#cards").innerHTML = html
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



function sourceCountry(nameCountry) {
  axios.post('http://localhost:3333/countries/unique',{name:nameCountry})
  .then(response =>  createSelectGroup(response))
  .catch(error => console.log(error))
}