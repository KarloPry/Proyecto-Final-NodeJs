window.onload = init
function init (){
    if(localStorage.getItem("token")){
        document.querySelector('.btn-outline-info').addEventListener('click', function(){
            window.location.href = "employeeDb.html"
            })
        document.querySelector('.btn-outline-primary').addEventListener('click', function(){
            window.location.href = "employeeRegistration.html"
            })
        document.querySelector('.btn-outline-success').addEventListener('click', function(){
            window.location.href = "employeeUpdate.html"
            })
        document.querySelector('.btn-outline-danger').addEventListener('click', function(){
            window.location.href = "employeeDelete.html"
            })
    }
    else{
        window.location.href = 'index.html'
    }
}