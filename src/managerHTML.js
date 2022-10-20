

function managerCard(manager){
  return `
  <div class="col-sm-4 mb-5">
    <div class="card">
    <div class="jumbotron p-3 bg-primary">
    <h3 class="text-white">${manager?.name}</h3>
    <h5 class="card-header text-white">Manager</h5>
  </div>
  <div class="card-body shadow">
    <ul class="list-group">
      <li class="list-group-item">ID: ${manager?.id} </li>
      <li class="list-group-item">Email: <a href="mailto:${manager?.email}">${manager?.email}</a></li>
      <li class="list-group-item">Office Number: ${manager?.officeNumber}</li>
    </ul>
  </div>
      </div>
    </div>
  `
}

module.exports = managerCard