function engineerCard(engineer){
    return `
    <div class="col-sm-4 mb-5">
    <div class="card">
      <div class="jumbotron p-3 bg-primary">
        <h3 class="text-white">${engineer?.name}</h3>
        <h5 class="card-header text-white">Engineer</h5>
      </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineer?.id} </li>
        <li class="list-group-item">Email: ${engineer?.email}</li>
        <li class="list-group-item">School: ${engineer?.school}</li>
      </ul>
      </div>
      </div>
    </div>
    `
}

module.exports = engineerCard