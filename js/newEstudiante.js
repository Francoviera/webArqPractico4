document.addEventListener("DOMContentLoaded", function() {
    let name = document.getElementById("name");
    let lastName = document.getElementById("lastName");
    let dni = document.getElementById("dni");
    let genero = document.getElementById("genero");

    function createUser() {
        console.log(name.value)
    }

    document.getElementById("buttonSubmit").addEventListener("click", function() {
        if (name.value != " " && lastName.value != " " && dni.value != " " && genero.value != " ") {
            let user = {
                "name": name.value,
                "lastName": lastName.value,
                "dni": dni.value,
                "genero": genero.value
            }
            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Access-Control-Allow-Origin', '*');
            let data = JSON.stringify(user);
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                redirect: 'follow',
                body: data,
            };
            fetch("http://localhost:8080/EjercicioIntegrador3/registroestudiantes/estudiantes/", requestOptions)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                })
        } else {
            alert("complete todos los campos")
        }
    })
});