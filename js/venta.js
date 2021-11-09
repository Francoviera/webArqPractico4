document.addEventListener("DOMContentLoaded", function() {
    let reportesCarrera = [];

    function getVentas() {
        let myHeaders = new Headers();
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        //ESTO SE AVANZA EN LA SEGUNDA PARTE 
        fetch("http://localhost:8080/EjercicioIntegrador3/registroestudiantes/carreras/reporte/", requestOptions)
            .then(response => response.json())
            .then(data => {
                let string = ""
                data.forEach(carrera => {
                    string += `<li href="#" class="list-group-item text-left">
                    <div class="contentEstudiente">
                        <img class="img-thumbnail mb-3"
                            src="https://bootdey.com/img/Content/User_for_snippets.png">
                        <label class="name ms-4">
                            <h6>Nombre</h6>
                            <p>${carrera.nombreCarrera}</p>
                        </label>
                        <label class="name ms-4">
                            <h6>Inscriptos</h6>
                            <p>${carrera.inscriptos}</p>
                        </label>
                        <label class="name ms-4">
                            <h6>Egresados</h6>
                            <p>${carrera.egresados}</p>
                        </label>
                    </div>
                    <div class="abmEstudient">
                        <span class="pull-right ">
                            <i class="far fa-eye mt-4"></i>
                            <i class="fas fa-trash-alt color-danger ms-3 mt-4"></i>
                        </span>
                    </div>
                    <!-- <div class="break"></div> -->
                </li>`;
                });
                document.querySelector(".ctn-reporte-ventas").innerHTML = string;
            })
            .catch(error => console.error(error));
    }

    getVentas();
});