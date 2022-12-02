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
        document.querySelector('.btn-primary').addEventListener('click', registerEmployee);
    }
    else{
        window.location.href = 'index.html'
    }
}

function registerEmployee (){
    var name = document.getElementById('input-name').value ;
    var lastName = document.getElementById('input-lastname').value;
    var mail = document.getElementById('input-mail').value;
    var phone = document.getElementById('input-phone').value;
    var address = document.getElementById('input-address').value;

    console.log(name,lastName,mail,phone,address)

    axios({
        method: 'post',
        url:    'http://localhost:3000/employee',
        data:   {
            nombreEmpleado: name,
            apellidosEmpleado: lastName,
            telefonoEmpleado: phone,
            correoEmpleado: mail,
            direccionEmpleado: address
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