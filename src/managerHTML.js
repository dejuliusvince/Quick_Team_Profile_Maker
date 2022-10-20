

function managerCard(manager){
  return `
  <div class="col-sm-4 mb-5">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <ul class="list-group">
              <li class="list-group-item">Name: ${manager?.name} </li>
              <li class="list-group-item">ID: ${manager?.id} </li>
              <li class="list-group-item">Email: ${manager?.email} </li>
              <li class="list-group-item">Office Number: ${manager?.officeNumber} </li>
            </ul>
        </div>
      </div>
    </div>
  `
}

module.exports = managerCard