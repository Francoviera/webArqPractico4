document.addEventListener("DOMContentLoaded", function() {
    let carreras = [];

    function getProductos() {
        let myHeaders = new Headers();
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        //ESTO SE AVANZA EN LA SEGUNDA PARTE 
        fetch("http://localhost:8080/EjercicioIntegrador3/registroestudiantes/carreras", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let string = ""
                data.forEach(carrera => {
                    string += `<li href="#" class="list-group-item text-left">
                    <div class="contentEstudiente">
                        <img class="img-thumbnail" src="https://bootdey.com/img/Content/user_2.jpg">
                        <label class="name ms-2">
                            carrera : ${carrera.nombreCarrera} facultad: ${carrera.facultad.nombreFacultad}
                        </label>
                    </div>
                    <div class="abmEstudient">
                        <span class="pull-right ">
                            <span><i class="fas fa-users mt-4"></i> 15</span>
                            <a class="btn-delete"  id="${carrera.idCarrera}" type="button"><i class="fas fa-trash-alt color-danger ms-3 mt-4"></i></a>
                        </span>
                    </div>
                </li>`;
                });
                document.querySelector(".ctn-productos").innerHTML = string;
                const btn = document.querySelectorAll(".btn-delete");
                for (let i = 0; i < btn.length; i++) {
                    btn[i].addEventListener("click", function() {
                        deleteProducto(btn[i].id)
                    });
                }
            })
            .catch(error => console.error(error));
    }

    function deleteProducto(id) {
        let myHeaders = new Headers();
        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow',
        };
        fetch("http://localhost:8080/EjercicioIntegrador3/registroestudiantes/carreras/" + id, requestOptions)
            .then(res => {
                console.log(res);
                getProductos();
            })
            .catch((error) => console.log(error))
    }

    function filter(idEstudiante) {
        //  console.log(idEstudiante)

        let myHeaders = new Headers();
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch("http://localhost:8080/EjercicioIntegrador3/registroestudiantes" + "/carreras/searchname/" + idEstudiante + "", requestOptions)
            .then(response => response.json())
            .then(carrera => {

                let string = `<li href="#" class="list-group-item text-left">
                    <div class="contentEstudiente">
                        <img class="img-thumbnail " src="https://bootdey.com/img/Content/User_for_snippets.png">
                        <label class="name ms-2">
                            ${carrera.nombreCarrera}<br>
                      </label>
                  </div>
                  <div class="abmEstudient">
                      <span class="pull-right">
                          <i class="far fa-eye mt-4"></i>
                          <a class="btn-delete" id="${carrera.idCarrera}" type="button"><i class="fas fa-trash-alt color-danger ms-3"></i></a>
                          <i class="fas fa-envelope-square ms-3"></i>
                      </span>
                  </div>
                  <!-- <div class="break"></div> -->
                </li>`;
                document.querySelector(".ctn-carreras").innerHTML = string;
                const btn = document.querySelectorAll(".btn-delete");
                for (let i = 0; i < btn.length; i++) {
                    btn[i].addEventListener("click", function() {
                        deleteEstudiante(btn[i].id)
                    });
                }
            })
            .catch(error => console.error(error));
    }

    document.querySelector(".btn-search").addEventListener('click', function() {
        let id = document.querySelector(".input-search").value;
        filter(id);
    })


    getCarreras();


});