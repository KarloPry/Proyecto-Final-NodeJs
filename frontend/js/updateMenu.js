window.onload = init
var headers = {}
var url = 'http://localhost:3000'
var idEmpleadoActual = localStorage.getItem("idEmpleadoLocal")
var employeeData = 0


function init (){
    console.log('Entrando init')
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                'Authorization': 'bearer '+ localStorage.getItem('token')
            }
        }
        loadEmployees()
        document.querySelector('.btn-primary').addEventListener('click', updatingEmployee);
    }
    else{
        window.location.href = 'index.html'
    }
}
async function loadEmployees(){
    await axios.get(url + "/employee/"+idEmpleadoActual, headers)
    .then(function(res){
        console.log(res.data.employee[0])
        employeeData = res.data.employee[0]
        console.log('Entrando axios')
        document.getElementById('input-name').value = employeeData.nombreEmpleado;
        document.getElementById('input-lastname').value = employeeData.apellidosEmpleado;
        document.getElementById('input-mail').value = employeeData.correoEmpleado;
        document.getElementById('input-phone').value = employeeData.telefonoEmpleado;
        document.getElementById('input-address').value = employeeData.direccionEmpleado;
        console.log('holi')
        console.log(name,lastName,mail,phone,address)
    }).catch(function(err){
        console.log(err)
    })


}

async function updatingEmployee (){
    var address = document.getElementById('input-address').value;
    var mail = document.getElementById('input-mail').value;
    var name = document.getElementById('input-name').value ;
    var phone = document.getElementById('input-phone').value;
    var lastName = document.getElementById('input-lastname').value;
    axios({
        method: 'put',
        url:    'http://localhost:3000/employee/'+idEmpleadoActual,
        data:   {
            correoEmpleado: mail,
            direccionEmpleado: address,
            nombreEmpleado: name,
            telefonoEmpleado: phone,
            apellidosEmpleado: lastName,
        },
        headers: {
            'Authorization': 'bearer '+ localStorage.getItem('token')
        }
    }).then(function (res){
        // console.log(res)
        // axios.get(url + "/employee", headers)
        // .then(function(res){
        //     console.log(res)
        //     displayEmployee(res.data.message)
        // }).catch(function(err){
        //     console.log(err)
        // })    
        var mail = document.getElementById('input-mail').value;
        window.location.href = 'menuUsuario.html'
    }).catch(function(err){
        console.log(err)
    })
}