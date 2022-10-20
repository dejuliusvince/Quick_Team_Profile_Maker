function internCard(intern) {
  return `
  <div class="col-sm-4 mb-5">
    <div class="card">
      <div class="jumbotron p-3 bg-primary">
        <h3 class="text-white">${intern?.name}</h3>
        <h5 class="card-header text-white">Intern</h5>
      </div>
    <div class="card-body shadow">
      <ul class="list-group">
        <li class="list-group-item">ID: ${intern?.id} </li>
        <li class="list-group-item">Email: <a href="mailto:${intern?.email}">${intern?.email}</a></li>
        <li class="list-group-item">School: ${intern?.school}</li>
      </ul>
      </div>
      </div>
    </div>
  `
}

module.exports = internCard