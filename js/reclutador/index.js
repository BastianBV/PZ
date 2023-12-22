//  script crearVacante 

const choices = document.querySelectorAll(".multiple-choice");
const radios = document.querySelectorAll(".hidden-input");

// Función para manejar el clic en una opción
function handleChoiceClick(event) {
    choices.forEach((choice) => choice.classList.remove("selected"));

    // Seleccionar la opción clickeada
    const selectedChoice = event.currentTarget;
    selectedChoice.classList.add("selected");

    verificarSeleccion();
}

function verificarSeleccion() {
    const seleccionada = Array.from(radios).some((radio) => radio.checked);
    const botonSiguiente = document.getElementById("boton-siguiente");
    botonSiguiente.disabled = !seleccionada;
}

// Iterar sobre los elementos y agregar un evento de click a cada uno
choices.forEach((choice) => {
    choice.addEventListener("click", handleChoiceClick);
});
verificarSeleccion();

//  script ubicacion 

var labelCrumbContainer = document.getElementById("labelCrumbContainer");
if (labelCrumbContainer) {
    labelCrumbContainer.addEventListener("click", function (e) {
        window.location.href = "/";
    });
}
function actualizarContadorDeCaracteres() {
    var input = document.querySelector("input");
    var contador = document.querySelector("#contador-de-caracteres");
    var longitudActual = input.value.length;
    contador.textContent = longitudActual + "/100";
    validarInputs(input);
}

function validarInputs(input) {
    if (input.value === "") {
        input.classList.add("error");
    } else {
        input.classList.remove("error");
    }
}

// script sueldo 

var operativas2 = document.querySelectorAll(".operativa-2");

operativas2.forEach(function (operativa2) {
    operativa2.addEventListener("click", function () {
        operativas2.forEach(function (o) {
            o.classList.remove("selected");
        });

        this.classList.add("selected");

        var label = this.querySelector(".label4-2, .label4-1-2");
        var labels = document.querySelectorAll(".label4-2, .label4-1-2");
        labels.forEach(function (l) {
            l.classList.remove("selected");
        });
        label.classList.add("selected");
        var value = label.textContent;
        console.log(value);
    });
});

function limitarCaracteres(event, contadorId) {
    const input = event.target;
    const maxLength = 6;

    const sanitizedValue = input.value.replace(/[^0-9]/g, ""); // Eliminar caracteres no numéricos
    const formattedValue = formatNumber(sanitizedValue); // Formatear el valor

    if (formattedValue.length > maxLength) {
        input.value = formattedValue.slice(0, maxLength); // Limitar el número de caracteres
    } else {
        input.value = formattedValue;
    }

    const contador = document.getElementById(contadorId);
    contador.textContent = input.value.length + "/" + maxLength;
}

function formatNumber(value) {
    if (value.length === 4) {
        return value.slice(0, 1) + "," + value.slice(1);
    } else if (value.length === 5) {
        return value.slice(0, 2) + "," + value.slice(2);
    } else if (value.length === 6) {
        return value.slice(0, 3) + "," + value.slice(3);
    }
    return value;
}

function validarSueldos() {
    var sueldoMin = parseFloat(
        document.getElementsByName("sueldoMin")[0].value.replace(",", "")
    );
    var sueldoMax = parseFloat(
        document.getElementsByName("sueldoMax")[0].value.replace(",", "")
    );

    if (sueldoMin > sueldoMax) {
        Swal.fire({
            title: "Error",
            text: "El sueldo mínimo debe ser menor que el sueldo máximo.",
            icon: "error",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            showClass: {
                popup: "swal2-noanimation",
                backdrop: "swal2-noanimation",
            },
            hideClass: {
                popup: "",
                backdrop: "",
            },
        });

        document.getElementsByName("sueldoMin")[0].style.borderColor = "red";
        document.getElementsByName("sueldoMax")[0].style.borderColor = "red";
        return false;
    } else {
        document.getElementsByName("sueldoMin")[0].style.borderColor = "";
        document.getElementsByName("sueldoMax")[0].style.borderColor = "";
    }

    return true;
}


const choicesSueldo = document.querySelectorAll(".component-20-2");
const radiosSueldo = document.querySelectorAll(".hidden-input-sueldo");

function handleChoiceClick2(event) {
    choicesSueldo.forEach((choice) => choice.classList.remove("selected"));

    const selectedChoice = event.currentTarget;
    selectedChoice.classList.add("selected");

    verificarSeleccionSueldo();
}

function verificarSeleccionSueldo() {
    const seleccionada2 = Array.from(radiosSueldo).some(
        (radio) => radio.checked
    );
    const botonSiguiente = document.getElementById("boton-siguiente");
    botonSiguiente.disabled = !seleccionada2;
}

choicesSueldo.forEach((choice) => {
    choice.addEventListener("click", handleChoiceClick2);
});
verificarSeleccionSueldo();

function updateCheckboxValue() {
    var checkbox = document.getElementById("chck");
    checkbox.value = checkbox.checked ? "true" : "false";
}

    function crearGlobito(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            var input = document.querySelector(".input-prestaciones");
            var texto = input.value.trim();

            if (texto !== "") {
                var chip = document.querySelector(".chip-prestaciones");
                var nuevoGlobito = document.createElement("div");
                nuevoGlobito.classList.add("globito");
                nuevoGlobito.textContent = texto;

                nuevoGlobito.addEventListener("click", function () {
                    chip.removeChild(nuevoGlobito);
                    actualizarValoresPrestaciones();
                });

                chip.appendChild(nuevoGlobito);
                actualizarValoresPrestaciones();

                input.value = "";
            }
        }
    }

    var globitoInicialCreado = false;

    function mostrarCampos(opcionSeleccionada) {
        var contenedor = document.getElementById("contenedor-prestaciones");
        var chip = document.querySelector(".chip-prestaciones");

        if (opcionSeleccionada == "Superiores a las de Ley") {
            contenedor.style.display = "block";
            if (!globitoInicialCreado) {
                crearGlobitoDefault(chip);
                globitoInicialCreado = true;
                actualizarValoresPrestaciones();
            }
        } else {
            contenedor.style.display = "none";
            globitoInicialCreado = false;
            chip.innerHTML = "";
            actualizarValoresPrestaciones();
        }
    }

    function crearGlobitoDefault(chip) {
        var nuevoGlobito = document.createElement("div");
        nuevoGlobito.classList.add("globito");
        nuevoGlobito.textContent = "Prestaciones de Ley";
        chip.appendChild(nuevoGlobito);
    }

    function actualizarValoresPrestaciones() {
        var globitosPrestaciones = document.querySelectorAll(
            ".chip-prestaciones .globito"
        );
        var prestacionesValores = Array.from(globitosPrestaciones).map(function (
            globito
        ) {
            return globito.textContent;
        });
        var valoresPrestacionesInput = document.getElementById(
            "valores-prestaciones"
        );
        valoresPrestacionesInput.value = prestacionesValores.join(",");
    }

/* <script requisitos */

        var maximoGlobitos = 4;
        var globitosCount = 0;

        function validarInputs() {
        var habilidadInput = document.querySelector('input[name="habilidad1"]');
        var nivelSelect = document.querySelector(
        'select[name="Nivel-Habilidad1"]'
        );
        var container = document.getElementById("container-3");

        var habilidad = habilidadInput.value;
        var nivel = nivelSelect.value;

        if (habilidad !== "" && nivel !== "" && globitosCount < maximoGlobitos) {
            var globito = document.createElement("div");
        globito.classList.add("globito");
        globito.textContent = habilidad + " - " + nivel;

        var eliminarIcono = document.createElement("span");
        eliminarIcono.classList.add("eliminar-icono");
        eliminarIcono.innerHTML = "&times;";
        eliminarIcono.addEventListener("click", function () {
            eliminarGlobito(globito);
        controlarCampoRequerido();
            });

        globito.appendChild(eliminarIcono);
        container.appendChild(globito);

        habilidadInput.value = "";
        nivelSelect.value = "";

        globitosCount++;

        if (globitosCount === maximoGlobitos) {
            habilidadInput.disabled = true;
            }

        actualizarValoresHabilidades();
        controlarCampoRequerido();
        }
    }

        function controlarCampoRequerido() {
        var habilidadInput = document.querySelector('input[name="habilidad1"]');
        var nivelSelect = document.querySelector(
        'select[name="Nivel-Habilidad1"]'
        );
        var habilidadesGlobitosCount = document.querySelectorAll(
        ".container-3 .globito"
        ).length;

        if (habilidadesGlobitosCount < 2) {
            habilidadInput.classList.add("required-field");
        nivelSelect.classList.add("required-field");
        } else {
            habilidadInput.classList.remove("required-field");
        nivelSelect.classList.remove("required-field");
        }
    }

        function agregarHabilidad(event) {
        if (event.key === "Enter") {
            event.preventDefault();
        validarInputs();
        }
    }

        function eliminarGlobito(globito) {
        var container = document.getElementById("container-3");
        container.removeChild(globito);

        globitosCount--;

        var habilidadInput = document.querySelector('input[name="habilidad1"]');
        habilidadInput.disabled = false;

        actualizarValoresHabilidades();
        controlarCampoRequerido();
    }

        function actualizarValoresHabilidades() {
        var globitosHabilidades = document.querySelectorAll(
        ".container-3 .globito"
        );
        var habilidadesValores = Array.from(globitosHabilidades).map(function (
        globito
        ) {
            return globito.textContent;
        });
        var habilidadesInput = document.getElementById("habilidades");
        habilidadesInput.value = habilidadesValores.join(",");
    }

        function controlarCampoRequerido() {
        var habilidadInput = document.querySelector('input[name="habilidad1"]');
        var nivelSelect = document.querySelector(
        'select[name="Nivel-Habilidad1"]'
        );
        var habilidadesGlobitosCount = document.querySelectorAll(
        ".container-3 .globito"
        ).length;

        if (habilidadesGlobitosCount < 2) {
            habilidadInput.classList.add("required-field");
        nivelSelect.classList.add("required-field");
        } else {
            habilidadInput.classList.remove("required-field");
        nivelSelect.classList.remove("required-field");
        }
    }


    function desactivarInputs() {
        var checkbox = document.getElementById("chck-3");
        var inputs = document.getElementsByClassName("div1-3");

        for (var i = 0; i < inputs.length; i++) {
            if (checkbox.checked) {
                inputs[i].disabled = true;
                inputs[i].classList.remove("required-field");
            } else {
                inputs[i].disabled = false;
                inputs[i].classList.add("required-field");
            }
        }
    }

    var checkbox = document.getElementById("chck-3");
    checkbox.addEventListener("change", desactivarInputs);

    function toggleInput(checkbox) {
        var input = document.querySelector('input[name="anosExp"]');
        if (checkbox.checked) {
            input.disabled = true;
            input.classList.remove("required-field");
        } else {
            input.disabled = false;
            input.classList.add("required-field");
        }
    }

    function alfanumerico(input) {
        input.value = input.value.replace(/\D/g, "");
    }

    const choices2 = document.querySelectorAll(".operativa-3");
    const radios2 = document.querySelectorAll(".hidden-input2");

    function handleChoiceClick2(event) {
        choices2.forEach((choice) => choice.classList.remove("selected"));

        const selectedChoice = event.currentTarget;
        selectedChoice.classList.add("selected");

        verificarSeleccion2();
    }

    function verificarSeleccion2() {
        const seleccionada2 = Array.from(radios2).some((radio) => radio.checked);
        const botonSiguiente = document.getElementById("boton-siguiente");
        botonSiguiente.disabled = !seleccionada2;
    }

    // Iterar sobre los elementos del segundo conjunto y agregar un evento de click a cada uno
    choices2.forEach((choice) => {
        choice.addEventListener("click", handleChoiceClick2);
    });
    verificarSeleccion2();

    // script modal de publicacion

    function mostrarModal() {
        var modalLoader = document.getElementById("modal");
        modalLoader.style.display = "flex"; // Mostrar el modal Loader

        startLoader(modalLoader);
    }

    function cerrarModal() {
        var modal = document.getElementById("miModal");
        modal.style.display = "none"; // Ocultar el modal de publicación
    }

    //  Script modal  loader

    var ModalCargando = null;
    function hideModal(modal) {
        modal.style.display = "none";
    }

    function showPublicacionModal() {
        var modalPublicacion = document.getElementById("miModal");
        modalPublicacion.style.display = "flex"; // Mostrar el modal de publicación
    }
    function Cargado(tit) {
        setTimeout(function () {
            hideModal(ModalCargando); // Ocultar el modal de loader después de 5 segundos
            window.document.getElementById("Tvpub").innerHTML = tit;
            showPublicacionModal(); // Mostrar el modal de publicación después de 5 segundos
        }, 3000);
    }
    function startLoader(modalLoader) {
        ModalCargando = modalLoader;
    }

    // Script Modal Borrador 

    window.onload = function () {
        document.querySelector('button[type="submit"]').addEventListener('click', function (event) {
            event.preventDefault();
            showConfirmationModal();
        });

        window.addEventListener('beforeunload', function (event) {
            showConfirmationModal();
            event.preventDefault();
            event.returnValue = '';
        });

        function showConfirmationModal() {
            document.getElementById('miModal-borrador').style.display = 'flex';

            document.querySelector('.btnContinuar').addEventListener('click', function () {
                window.location.reload();
            });

            document.querySelector('.btnSaveCopy').addEventListener('click', function () {
                document.getElementById('miModal-borrador').style.display = 'none';
            });
        }
    };

    // script next || back

    const pages = document.querySelectorAll(".page");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("boton-siguiente");
    const buttonsContainer = document.getElementById("buttonsContainer");
    const errorDiv = document.getElementById("errorSpan");

    let currentPage = 0;

    pages.forEach((page, index) => {
        if (index !== currentPage) {
            page.style.display = "none";
        }
    });

    prevBtn.addEventListener("click", () => {
        currentPage--;
        updatePageVisibility();
    });

    function ClickNext() {
        // MuestraVistaPrevia();
        const currentPageFields =
            pages[currentPage].querySelectorAll(".required-field");
        let isValid = true;

        currentPageFields.forEach((field) => {
            if (field.value.trim() === "") {
                isValid = false;
                field.classList.add("error-input");
            } else {
                field.classList.remove("error-input");
            }
        });

        if (!isValid) {
            return false;
        }

        const sueldoMin = parseFloat(
            document.getElementsByName("sueldoMin")[0].value.replace(",", "")
        );
        const sueldoMax = parseFloat(
            document.getElementsByName("sueldoMax")[0].value.replace(",", "")
        );

        if (sueldoMin > sueldoMax) {
            Swal.fire({
                title: "Error",
                text: "El sueldo mínimo debe ser menor que el sueldo máximo.",
                icon: "error",
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                showClass: {
                    popup: "swal2-noanimation",
                    backdrop: "swal2-noanimation",
                },
                hideClass: {
                    popup: "",
                    backdrop: "",
                },
            });
            return false;
        }

        currentPage++;
        updatePageVisibility();
    }

    function goToPage(pageNumber) {
        currentPage = pageNumber - 1;
        updatePageVisibility();
    }

    function previousPage() {
        if (currentPage > 0) {
            currentPage--;
            updatePageVisibility();
        }
    }

    function nextPage() {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePageVisibility();
        }
    }
    function updatePageVisibility() {
        pages.forEach((page, index) => {
            if (index === currentPage) {
                page.style.display = "block";
            } else {
                page.style.display = "none";
            }
        });
        window.scrollTo(0, 0);

        if (currentPage === 0) {
            prevBtn.style.display = "none";
        } else {
            prevBtn.style.display = "block";
        }

        if (currentPage === pages.length - 1) {
            nextBtn.style.display = "none";
        } else {
            nextBtn.style.display = "block";
        }
    }