//Need a function to generate Engineer to be called in index.js, use static html doc as a boilerplate

function engineerCard(engineer){
    return `
    <div class="col-sm-4 mb-5">
    <div class="card">
      <div class="jumbotron p-3 bg-primary">
        <h3 class="text-white">${engineer?.name}</h3>
        <h5 class="card-header text-white">Engineer</h5>
      </div>
    <div class="card-body shadow">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineer?.id} </li>
        <li class="list-group-item">Email: <a href="mailto:${engineer?.name}">${engineer?.email}</a></li>
        <li class="list-group-item">GitHub: <a href="http://github.com/${engineer?.github}" target="_blank">${engineer?.github}</a></li>
      </ul>
      </div>
      </div>
    </div>
    `
}

module.exports = engineerCard