window.onload = init
var headers = {}
var url = 'http://localhost:3000'

function init (){
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                'Authorization': 'bearer '+ localStorage.getItem('token')
            }
        }
        loadEmployees()
    }
    else{
        window.location.href = 'index.html'
    }
}
function loadEmployees(){
    axios.get(url + "/employee", headers)
    .then(function(res){
        console.log(res)
        displayEmployee(res.data.message)
    }).catch(function(err){
        console.log(err)
    })
}

function displayEmployee(employee){
    console.log("Displaying...")
    var body = document.querySelector('body')
    body.innerHTML += `<table style="width:70%;margin-left:auto;margin-right:auto;border-collapse:collapse;">`
    for(var i = 0; i < employee.length; i++){
        var table = document.querySelector('table')
        if (i == 0){
            table.innerHTML += `<th>Nombre de empleado</th><th>Apellidos del empleado</th><th>Telefono del empleado</th><th>Correo del emplado</th><th>Dirección del empleado</th>`
        }
        var table = document.querySelector('table')
        table.innerHTML +=  `<td>${employee[i].nombreEmpleado}</td> <td>${employee[i].apellidosEmpleado}</td><td>${employee[i].telefonoEmpleado}</td><td>${employee[i].correoEmpleado}</td><td>${employee[i].direccionEmpleado }</td>
        <td><button style="margin-left:auto;margin-right:auto;"onclick="deleteEmployee(${employee[i].idEmpleado})">Eliminar</button></td>`
    }
    body.innerHTML += `</table>`

}

function deleteEmployee(id) {
    axios({
        method: 'delete',
        url: 'http://localhost:3000/employee/'+id,
        headers:{
            'Authorization': 'bearer '+ localStorage.getItem('token')
        }
    }).then(function (res){
        window.location.reload()
    }).catch(function(err){
        console.log(err)
    })
}