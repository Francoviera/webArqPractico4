document.addEventListener("DOMContentLoaded", function() {
    let productos = [];


    function getImage(){
        let images= [
            "https://www.bootdey.com/img/Content/User_for_snippets.png",
            "https://bootdey.com/img/Content/user_2.jpg"
        ]
        return images[Math.round(Math.random()*1)];
    }

    function getProductos() {
        let myHeaders = new Headers();
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        //ESTO SE AVANZA EN LA SEGUNDA PARTE 
        fetch("https://despensa-springboot.herokuapp.com/productos", requestOptions)
            .then(response => response.json())
            .then(data => {
                productos= data;
                let string = ""
                data.forEach(carrera => {
                    string += `<li href="#" class="list-group-item text-left">
                    <div class="contentEstudiente">
                        <img class="img-thumbnail" src="${getImage()}">
                        <label class="name ms-2">
                            <span class="text-dark">Nombre :</span>  ${carrera.nombreProducto} 
                        </label>
                        <label class="name ms-2">
                            <span class="text-dark">Marca :</span> ${carrera.marca} 
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
        fetch("http://localhost:8080/producto/" + id, requestOptions)
            .then(res => {
                getProductos();
            })
            .catch((error) => console.log(error))
    }

    function filter(nombre) {
        let producto= productos.find(producto => producto.nombreProducto == nombre)

        // let myHeaders = new Headers();
        // let requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow',
        // };

        // fetch("http://localhost:8080/producto/" + idEstudiante + "", requestOptions)
        //     .then(response => response.json())
        //     .then(carrera => {

                let string = `<li href="#" class="list-group-item text-left">
                    <div class="contentEstudiente">
                        <img class="img-thumbnail" src="https://bootdey.com/img/Content/user_2.jpg">
                        <label class="name ms-2">
                            nombre : ${producto.nombreProducto} 
                        </label>
                        <label class="name ms-2">
                            marca : ${producto.marca} 
                        </label>
                    </div>
                    <div class="abmEstudient">
                        <span class="pull-right ">
                            <span><i class="fas fa-users mt-4"></i> 15</span>
                            <a class="btn-delete"  id="${producto.id}" type="button"><i class="fas fa-trash-alt color-danger ms-3 mt-4"></i></a>
                        </span>
                    </div>
                </li>`;
                document.querySelector(".ctn-productos").innerHTML = string;
                const btn = document.querySelectorAll(".btn-delete");
                for (let i = 0; i < btn.length; i++) {
                    btn[i].addEventListener("click", function() {
                        deleteProducto(btn[i].id)
                    });
                }
            // })
            // .catch(error => console.error(error));
    }

    document.querySelector(".btn-search").addEventListener('click', function() {
        let id = document.querySelector(".input-search").value;
        filter(id);
    })


    getProductos();


});