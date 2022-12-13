window.onload = init
var headers = {}
var url = 'http://localhost:3000'
var employeeData = 0
var empleadosFiltrados;


function init (){
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                'Authorization': 'bearer ' + localStorage.getItem('token')
            }
        }
        if (localStorage.getItem(empleadosFiltrados)){
            displayEmployees(empleadosFiltrados)
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
        displayEmployees(res.data.message)
    }).catch(function(err){
        console.log(err)
    })
}

function displayEmployees(employee){
    console.log("Displaying...")
    var body = document.querySelector('body')
    for(var i = 0; i < employee.length; i++){
        var table = document.querySelector('table')
        if (i == 0){
            table.innerHTML += `<th>Nombre de empleado</th><th>Apellidos del empleado</th><th>Telefono del empleado</th><th>Correo del emplado</th><th>Dirección del empleado</th>`
        }
        var table = document.querySelector('table')
        table.innerHTML +=  `<tr><td>${employee[i].nombreEmpleado}</td> <td>${employee[i].apellidosEmpleado}</td><td>${employee[i].telefonoEmpleado}</td><td>${employee[i].correoEmpleado}</td><td>${employee[i].direccionEmpleado }</td></tr>`
    }

}


function searchEmployee(){
    console.log("Searching...")
    var nombreDado = document.getElementById("input-search").value;
    var nombreDado = String(nombreDado)
    console.log("Tamos chill")
    axios({
        method: 'get',
        url:    url+'/employeeSearch/'+nombreDado,
        headers: {
            'Authorization': 'bearer '+ localStorage.getItem('token')
        }
    }).then(function (res){
        empleadosFiltrados = res.data.message
        var table = document.querySelector('table')
        table.innerHTML = ""
        displayEmployees(empleadosFiltrados)
    }).catch(function(err){
        console.log(err)
    })
}