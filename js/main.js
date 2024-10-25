let ubicacionPrincipal = window.pageYOffset; //0

  AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
})


function generarUrl() {
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const mascota = document.getElementById('mascota').value;
    const telefono = document.getElementById('telefono').value;
    const redes = document.getElementById('redes').value;
    const imagen = document.getElementById('imagen').value;

    // Crear una URL con parámetros que contiene los datos
    const url = `${window.location.origin}/landing?nombre=${encodeURIComponent(nombreCompleto)}&mascota=${encodeURIComponent(mascota)}&telefono=${encodeURIComponent(telefono)}&redes=${encodeURIComponent(redes)}&imagen=${encodeURIComponent(imagen)}`;

    // Mostrar la URL generada o hacer algo con ella
    alert(`URL generada: ${url}`);
    // Aquí podrías abrirla en una nueva ventana para probar
    window.open(url, "_blank");
}

function cargarDatosLanding() {
    const urlParams = new URLSearchParams(window.location.search);
    const nombreCompleto = urlParams.get('nombre');
    const mascota = urlParams.get('mascota');
    const telefono = urlParams.get('telefono');
    const redes = urlParams.get('redes');
    const imagen = urlParams.get('imagen');

    // Solo mostrar la landing si hay datos en la URL
    if (nombreCompleto && mascota && telefono && redes && imagen) {
        document.getElementById('saludoMascota').innerText = `Hola, soy ${mascota}`;
        document.getElementById('mensajeBusqueda').innerText = `Estoy buscando a mi dueño, ${nombreCompleto}.`;
        document.getElementById('contacto').innerHTML = `Contacta a mi dueño aquí: <br> Teléfono: ${telefono} <br> Redes Sociales: ${redes}`;
        document.getElementById('imagenMascota').src = imagen;

        document.getElementById('formulario').classList.add('oculto');
        document.getElementById('landingPage').classList.remove('oculto');
    }
}

function regresarFormulario() {
    document.getElementById('landingForm').reset();
    document.getElementById('formulario').classList.remove('oculto');
    document.getElementById('landingPage').classList.add('oculto');
}

// Llama

