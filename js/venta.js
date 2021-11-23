document.addEventListener("DOMContentLoaded", function() {
    let reportesCarrera = [];

    function getVentas() {
        let myHeaders = new Headers();
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        //ESTO SE AVANZA EN LA SEGUNDA PARTE 
        fetch("https://despensa-springboot.herokuapp.com/pedidos", requestOptions)
            .then(response => response.json())
            .then(data => { console.log(data)
                let string = ""
                data.forEach(item => {
                    string += `<li href="#" class="list-group-item text-left">
                    <div class="contentEstudiente">
                        <img class="img-thumbnail mb-3"
                            src="https://bootdey.com/img/Content/User_for_snippets.png">
                        <label class="name ms-4">
                            <h6>Cliente</h6>
                            <p>${item.cliente.nombre+" "+ item.cliente.apellido}</p>
                        </label>
                        <label class="name ms-4">
                            <h6>Cantidad de Pedidos</h6>
                            <p>${item.pedidos.length}</p>
                        </label>
                        <label class="name ms-4">
                            <h6>Fecha de Compra</h6>
                            <p>${item.momentoCompra}</p>
                        </label>
                        <label class="name ms-4">
                            <h6>Total</h6>
                            <p>${item.precioTotal}</p>
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
                document.querySelector(".ctn-ventas").innerHTML = string;
            })
            .catch(error => console.error(error));
    }

    getVentas();
});