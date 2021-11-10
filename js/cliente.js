document.addEventListener("DOMContentLoaded", function() {
    let estudiantes = [];

    function getClientes() {
        let myHeaders = new Headers();
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        //ESTO SE AVANZA EN LA SEGUNDA PARTE 
        fetch("http://localhost:8080/clientes", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                estudiantes = data;
                let string = ""
                data.forEach(estudiante => {
                    string += `<li href="#" class="list-group-item text-left">
                    <div class="contentEstudiente">
                        <img class="img-thumbnail " src="https://bootdey.com/img/Content/User_for_snippets.png">
                        <label class="name ms-2">
                            ${estudiante.nombre} ${estudiante.apellido}<br>
                      </label>
                  </div>
                  <div class="abmEstudient">
                      <span class="pull-right">
                          <i class="far fa-eye mt-4"></i>
                          <a class="btn-delete-student" id="${estudiante.nroEstudiante}" type="button"><i class="fas fa-trash-alt color-danger ms-3"></i></a>
                          <i class="fas fa-envelope-square ms-3"></i>
                      </span>
                  </div>
                  <!-- <div class="break"></div> -->
                </li>`;
                });
                document.querySelector(".ctn-clientes").innerHTML = string;
                const btn = document.querySelectorAll(".btn-delete-student");
                for (let i = 0; i < btn.length; i++) {
                    btn[i].addEventListener("click", function() {
                        deleteCliente(btn[i].id)
                    });
                }
            })
            .catch(error => console.error(error));
    }

    function deleteCliente(id) {
        let myHeaders = new Headers();
        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow',
        };
        fetch("http://localhost:8080/cliente/" + id, requestOptions)
            .then(res => {
                console.log(res);
                getClientes();
            })
            .catch((error) => console.log(error))
    }

    function filterEstudiante(idEstudiante) {
        //  console.log(idEstudiante)

        let myHeaders = new Headers();
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch("http://localhost:8080/EjercicioIntegrador3/registroestudiantes" + "/estudiantes/" + idEstudiante + "", requestOptions)
            .then(response => response.json())
            .then(estudiante => {

                let string = `<li href="#" class="list-group-item text-left">
                    <div class="contentEstudiente">
                        <img class="img-thumbnail " src="https://bootdey.com/img/Content/User_for_snippets.png">
                        <label class="name ms-2">
                            ${estudiante.nombre} ${estudiante.apellido}<br>
                      </label>
                  </div>
                  <div class="abmEstudient">
                      <span class="pull-right">
                          <i class="far fa-eye mt-4"></i>
                          <a class="btn-delete-student" id="${estudiante.nroEstudiante}" type="button"><i class="fas fa-trash-alt color-danger ms-3"></i></a>
                          <i class="fas fa-envelope-square ms-3"></i>
                      </span>
                  </div>
                  <!-- <div class="break"></div> -->
                </li>`;
                document.querySelector(".ctn-estudiantes").innerHTML = string;
                const btn = document.querySelectorAll(".btn-delete-student");
                for (let i = 0; i < btn.length; i++) {
                    btn[i].addEventListener("click", function() {
                        deleteCliente(btn[i].id)
                    });
                }
            })
            .catch(error => console.error(error));
    }

    document.querySelector(".btn-search").addEventListener('click', function() {
        let id = document.querySelector(".input-search").value;
        filterEstudiante(id);
    })
    getClientes();
});