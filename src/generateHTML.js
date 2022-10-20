//Once all employee objects have been created from the responses to the inquirer prompts, will need a finction 
//to generate the boilerplate for the html page that will contain the custom cards


function generateHTML(cards){
 return `
 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
 
 
   <title>Profile Maker</title>
 </head>
 <body>
       <div class="h-100 text-center p-3 bg-danger text-white border">
         <h1>Quick Team Profile Maker</h1>
       </div>
       <div class="container p-5">
         <div class="row d-flex justify-content-center ">
              ${cards}
         </div>
</body>
</html>
 `
}

module.exports = generateHTML