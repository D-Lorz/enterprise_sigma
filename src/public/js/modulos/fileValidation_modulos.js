(function () {
    // ATRAPAR LA OPCION CREADA EN EL SELECTOR Y MANDARLO A UN INPUT HIDDEN 
    $(document).ready(function () {
        function selectBuscar(id, categoriaHiddenId) {
        id.chosen({
            no_results_text: "Sin resultados para",
            allow_single_deselect: true,
            placeholder_text_single: "Selecciona una opción",
            width: '100%',
        });

        const campoBusqueda = id.next('.chosen-container').find('.chosen-search input');
        const categoriaHidden = $('#' + categoriaHiddenId);

        campoBusqueda.on('change', function () {
            const valorBusqueda = campoBusqueda.val().trim();

            const opcionExistente = id.find('option[value="' + valorBusqueda + '"]');
            if (opcionExistente.length) {
            opcionExistente.prop('selected', true);
            categoriaHidden.val(valorBusqueda);
            } else {
            id.prepend('<option value="' + valorBusqueda + '">' + valorBusqueda + '</option>');
            id.val(valorBusqueda);
            categoriaHidden.val(valorBusqueda);
            }

            id.trigger('chosen:updated');
        });

        $(document).on('click', function (e) {
            if (!$(e.target).closest('.chosen-container').length) {
            const opcionSeleccionada = id.find(":selected").val();

            categoriaHidden.val(opcionSeleccionada);
            }
        });
        }
    
        const claseCajaGeneralModulo = $('#categoriaSelectModulo');
        selectBuscar(claseCajaGeneralModulo, 'categoriaHiddenModulo');

    });
    })();

//     // Obtener elementos del DOM
//     const lessonsContainer = document.getElementById('lessonsContainer');
//     let lessonCounter = 1, lecciones_temp = [];

//     document.addEventListener("DOMContentLoaded", function () {
//         const leccionInput = document.getElementById("leccion_0");
//         const accordionHeader = document.querySelector(".accordion__header--text");

//         // Agregar evento blur al campo de entrada
//         leccionInput.addEventListener("keyup", function () {
//             const nuevoNombreLeccion = leccionInput.value;
//             accordionHeader.textContent =
//                 nuevoNombreLeccion !== "" ? nuevoNombreLeccion : "Lección 0";
//         });

//         const lessonsContainer = document.getElementById("lessonsContainer");
//         // Función para crear el HTML de una nueva lección
//         const createLessonHTML = () => {
//             const lessonHTML = `
//             <div class="accordion__item">
//                 <div class="accordion__header" data-toggle="collapse" data-target="#bordered_collapse_${lessonCounter}" style="margin-left: -15px;">
//                     <span class="accordion__header--text">Lección por defecto ${lessonCounter}</span>
//                     <span class="accordion__header--indicator"></span>
//                 </div>
//             <div id="bordered_collapse_${lessonCounter}" class="collapse accordion__body show" data-parent="#accordion-two" style="margin-left: -15px;">
//                 <div class="accordion__body--text">
//                 <!-- Contenido de la nueva lección -->
//                 <div class="row">
//                         <div class="col-lg-8 mb-2">
//                             <div class="form-group">
//                                 <label class="text-label">Nombre de la lección*</label>
//                                 <input type="text" id="leccion_${lessonCounter}" class="form-control" style="border: 1px solid #DBDBDB;" value="Lección por defecto ${lessonCounter}">
//                             </div>
//                         </div>
//                     </div>
//                 <!-- --- -->
//                 <div class="row" id="divRow-${lessonCounter}">
//                     <div class="col-6">
//                         <label class="text-label">Video de la lección*</label>
//                         <div class="drag-area file-videoleccion file-leccion" ondragover="dragOverHandler(event)" ondragleave="dragLeaveHandler(event)" ondrop="dropHandler(event)">
//                             <center>
//                                 <button id="btnvideoleccion_${lessonCounter}" onclick="btnFile_(event, this.parentNode)" style="border: 1px solid #ffffff00;background: #f0f8ff00;background-repeat: round;">
//                                     <img src="../img/thumbnail.svg" alt="" style="width: 121px; margin-top: -37px;">
//                                 </button>
//                                 <input type="file" class="fileVideo_" id="video_${lessonCounter}" onchange="fileChange_(event, event.target)" hidden>
//                             </center>
//                             <h6 class="fw-700 text-black">Escoge o <span style="color:#812082;font-weight: 700;font-size: 14px;">arrastra </span>un archivo</h6>
//                         </div>
//                         <div id="msgFile-video-${lessonCounter}" class="col-12"></div>
//                     </div>
//                     <div class="col-6 pt-4">
//                         <div id="video-portada-${lessonCounter}">
//                             <img src="../img/Leccion-por-defecto.jpg" width="250" alt="Video por defecto">
//                         </div>
//                     </div>
//                 </div>
//                 <br>
//                 <!-- --- -->
//                 <!-- Summernote -->
//                 <div class="row">
//                     <div class="col-xl-12 col-xxl-12">
//                     <label class="text-label">Descripción de la lección</label>
//                     <div class="summernote-theme-1">
//                         <textarea name="name" class="summernote" id="summernote_${lessonCounter}" rows="10"></textarea>
//                     </div>
//                     </div>
//                 </div>
//                 <!-- --- -->
//                 <br>
//                 <div class="row" style="display: grid;">
//                     <div class="col-6">
//                     <label class="text-label">Material descargable</label>
//                     <div class="drag-area file-material file-leccion" ondragover="dragOverHandler(event)" ondragleave="dragLeaveHandler(event)" ondrop="dropHandler(event)">
//                         <center>
//                             <button id="btnMaterial_${lessonCounter}" onclick="btnFile_(event, this.parentNode)" style="border: 1px solid #ffffff00;background: #f0f8ff00;background-repeat: round;">
//                                 <img src="../img/thumbnail.svg" alt="" style="width: 121px; margin-top: -37px;">
//                             </button>
//                             <input type="file" class="fileMaterial_" id="material_${lessonCounter}" onchange="fileChange_(event, event.target)" hidden>
//                         </center>
//                         <h6 class="fw-700 text-black">Escoge o <span style="color:#812082;font-weight: 700;font-size: 14px;">arrastra </span>un archivo</h6>
//                     </div>
//                     </div>
//                     <div id="msgFile-material-${lessonCounter}" class="col-12"></div>
//                     </div>
//                     <br>
//                     <br>
//                     <button id="addLessonBtn" class="btn btn-danger text-white" style="border-radius: 7px; padding: 6px 30px;" type="button" onclick="deleteLesson(${lessonCounter})">Eliminar</button>
//                 </div>
//             </div>
//             </div>
//         `;
//             return lessonHTML;
//         };

//         const handleAddLesson = () => {
//             const lessonHTML = createLessonHTML();
//             lessonsContainer.insertAdjacentHTML("beforeend", lessonHTML);

//             // Encuentra el elemento de texto Summernote utilizando el ID generado dinámicamente
//             const newSummernoteElement = document.getElementById(
//                 `summernote_${lessonCounter}`
//             );

//             // Inicializa Summernote para el nuevo elemento
//             $(newSummernoteElement).summernote({
//                 height: 190,
//                 minHeight: null,
//                 maxHeight: null,
//                 focus: false,
//             });
//             lessonCounter++;
//         };

//         const updateAccordionHeaderText = (lessonIndex, text) => {
//             const accordionHeader = lessonsContainer.querySelector(`.accordion__header[data-target="#bordered_collapse_${lessonIndex}"] .accordion__header--text`);
//             accordionHeader.textContent = text;
//         };

//         lessonsContainer.addEventListener("input", function (event) {
//             const inputElement = event.target;
//             if (inputElement.matches('[id^="leccion_"]')) {
//                 const lessonIndex = inputElement.id.split("_")[1];
//                 const newHeaderText = inputElement.value !== "" ? inputElement.value : `Lección ${lessonIndex}`;
//                 updateAccordionHeaderText(lessonIndex, newHeaderText);
//             }
//         });

//         lessonsContainer.addEventListener("bkeyup", function (event) {
//             const inputElement = event.target;
//             if (inputElement.matches('[id^="leccion_"]')) {
//                 const lessonIndex = inputElement.id.split("_")[1];
//                 const newHeaderText = inputElement.value !== "" ? inputElement.value : `Lección ${lessonIndex}`;
//                 updateAccordionHeaderText(lessonIndex, newHeaderText);
//             }
//         });

//         const addLessonBtn = document.getElementById("addLessonBtn");
//         addLessonBtn.addEventListener("click", handleAddLesson);
//     });

//     async function addModulo(estado) {
//         let msg = '¿Quieres guardar este módulo como un borrador?'
//         if (estado == 1) msg = '¿Estás seguro que deseas publicar este módulo?'
//         const modulo = $("#modulo").val();
//         const insigniaInput = document.getElementById("insignia");
//         const insignia = insigniaInput.files[0];
//         const categoria = $("#categoriaHiddenModulo").val();
//         const nombre_insignia = $("#nombre_insignia").val();
//         const programa = $(".programa:checked").map(function () {
//             return $(this).val();
//         }).get();
//         const thumbnailInput = document.getElementById("fileThumbnail")
//         const miniatura = thumbnailInput.files[0];
//         Swal.fire({
//             title: msg,
//             showCancelButton: true,
//             confirmButtonText: 'Confirmar',
//         }).then((result) => {
//             /* Read more about isConfirmed, isDenied below */
//             if (result.isConfirmed) {
//                 const formData = new FormData();
//                 formData.append('lessonCounter', lessonCounter);
//                 formData.append('nombre', modulo);
//                 formData.append('insignia', insignia);
//                 formData.append('nombre_insignia', nombre_insignia);
//                 formData.append('categoria', categoria);
//                 // Iterar sobre cada valor del array programa y agregarlo individualmente
//                 programa.forEach(valor => {
//                     formData.append('programa[]', valor);
//                 });
//                 formData.append('miniatura', miniatura);
//                 formData.append('estado', estado);

//                 let isOk = true;
//                 for (let i = 0; i < lecciones_temp.length; i++) {
//                     const leccion = lecciones_temp[i];
//                     formData.append(`nombre_${i}`, leccion.nombre);
//                     formData.append(`video_${i}`, leccion.video);
//                     formData.append(`descripcion_${i}`, leccion.descripcion);
//                     formData.append(`material_${i}`, leccion.material);
//                 }

//                 if (isOk) {
//                     fetch('/add-modulos', {
//                         method: 'POST',
//                         body: formData,
//                         headers: { 'enctype': 'multipart/form-data' }
//                     })
//                         .then(response => {
//                             if (response)
//                                 //Swal.fire('Exito!', '', 'success')
//                                 location.href = '/ver-modulos'
//                             else
//                                 Swal.fire('Error!', 'Error al guardar el módulo, intenta más tarde.', 'error')
//                         })
//                         .catch(error => {
//                             // Manejo del error
//                             console.log("Error ==> ", error)
//                         });
//                 }
//             }
//         })

//     }

//     /*********************************************************************************************************/
//     function dragOverHandler(event) {
//         event.preventDefault(); // previene el comportamiento por defecto del evento
//         event.currentTarget.classList.add("active"); // utiliza currentTarget en lugar de this para asegurarte de que se está agregando la clase al div correcto
//         const h6 = event.currentTarget.querySelector("h6"); // utiliza currentTarget en lugar de this para asegurarte de que se está buscando en el div correcto
//         h6.textContent = "Suelta para subir el archivo";
//     }

//     function dragLeaveHandler(event) {
//         event.preventDefault(); // previene el comportamiento por defecto del evento
//         event.currentTarget.classList.remove("active"); // utiliza currentTarget en lugar de this para asegurarte de que se está removiendo la clase del div correcto
//         const h6 = event.currentTarget.querySelector("h6"); // utiliza currentTarget en lugar de this para asegurarte de que se está buscando en el div correcto
//         h6.textContent = "Arrastra y suelta el archivo";
//     }

//     function dropHandler(event) {
//         event.preventDefault(); // previene el comportamiento por defecto del evento
//         const input = event.currentTarget.querySelector("input"); // utiliza currentTarget en lugar de this para asegurarte de que se está buscando en el div correcto
//         cargarArchivo(input.files[0], input.className);
//         event.currentTarget.classList.remove("active"); // utiliza currentTarget en lugar de this para asegurarte de que se está removiendo la clase del div correcto
//         const h6 = event.currentTarget.querySelector("h6"); // utiliza currentTarget en lugar de this para asegurarte de que se está buscando en el div correcto
//         h6.textContent = "Arrastra y suelta el archivo";
//     }

//     function btnFile_(event, div) {
//         event.preventDefault();
//         const input = div.querySelector("input");
//         input.click();
//     }

//     function fileChange_(event, input) {
//         cargarArchivo(input.files[0], input.className, input.id);
//     }

//     function cargarArchivo(file, clase, id = null) {
//         // Si el div para el archivo es el de Video
//         if ((clase == 'fileThumbnail_' || clase == 'fileMaterial_') && file.size >= 20 * 1024 * 1024) { // Validar el tamaño del video - 20 megabytes
//             toastError("El archivo no puede superar los 20MB.")
//         } else {
//             const ext = file.name.split(".").pop().toLowerCase();
//             let fileOk = true, id_Msg = 'msgFile-material-' + (parseInt(lessonCounter - 1));
//             if (id === 'material') { id_Msg = 'msgFile-material' }
//             if (id === 'material_0') { id_Msg = 'msgFile-material' }
//             // Validando el tipo de archivo
//             if (clase == 'fileThumbnail_') {
//                 const extensiones = ["jpg", "jpeg", "png", "svg", "psd", "ai", "tiff"];
//                 id_Msg = 'msgFile-thumbnail'
//                 // Si el archivo no es una imagen
//                 if (!extensiones.includes(ext)) {
//                     fileOk = false;
//                     toastError("Solo se admiten imagenes, intentelo nuevamente.")
//                 }
//             } else if (clase == 'fileVideo_') {
//                 const extensiones = ['mov', 'mp4', 'avi', 'mkv']
//                 // Si el archivo no es video
//                 if (!extensiones.includes(ext)) {
//                     fileOk = false;
//                     toastError("Solo se admiten videos, intentelo nuevamente.")
//                 } else {
//                     id_Msg = 'msgFile-video-' + (parseInt(lessonCounter - 1))
//                     if (id === 'video') { id_Msg = 'msgFile-video' }
//                     if (id === 'video_0') { id_Msg = 'msgFile-video' }
//                     const video = document.createElement("video");
//                     video.src = URL.createObjectURL(file);
//                     video.style.width = "250px";

//                     const divPortada = document.getElementById("video-portada-"+parseInt(lessonCounter - 1));
//                     const img = divPortada.querySelector("img");

//                     // Eliminar la imagen existente
//                     if (img) {
//                         img.remove();
//                     }
//                     // Agregar el video al div
//                     divPortada.appendChild(video);
//                 }
//             }
//             // Funcionamiento para subir Archivos (y si es un video, debe pesar menos de 20 MB)
//             if (fileOk) {
//                 try {
//                     const fileReader = new FileReader();
//                     fileReader.addEventListener("load", async () => {
//                         $('#' + id_Msg).html('<span class="success">Archivo cargado exitosamente...</span>');
//                     })
//                     fileReader.readAsDataURL(file);
//                 } catch (error) {
//                     // Código que se ejecuta en caso de error
//                     console.log('Ha ocurrido un error:', error.message);
//                     toastError("Ocurrio algo inesperado al subir el archivo")
//                 }
//             }
//         }
//     }

//     function toastError(msg) {
//         return toastr.warning(msg, "Error", {
//             positionClass: "toast-top-full-width",
//             timeOut: 5000,
//             closeButton: true,
//             debug: false,
//             newestOnTop: true,
//             progressBar: true,
//             preventDuplicates: true,
//             onclick: null,
//             showDuration: "500",
//             hideDuration: "200",
//             extendedTimeOut: "400",
//             showEasing: "swing",
//             hideEasing: "linear",
//             showMethod: "fadeIn",
//             hideMethod: "fadeOut",
//             tapToDismiss: false,
//         });
//     }

//     const deleteLesson = (lessonNumber) => {
//         lecciones_temp = lecciones_temp.filter((leccion) => leccion.id !== lessonNumber);
//         console.log("lecciones_final ==> ", lecciones_temp)
//         const lessonElement = document.getElementById(`bordered_collapse_${lessonNumber}`).parentNode;
//         lessonElement.remove();
//         guardarYMostrarDatos('guardar');
//     };

//     // Guardar y mostrar datos para la vista previa del formulario 
//     function guardarYMostrarDatos(etiqueta = null) {
//         const modulo = $("#modulo").val();
//         const programa = $(".programa:checked").map(function () {
//             return $(this).val();
//         }).get();

//         const programNames = {
//             "1": "Free Trial",
//             "2": "Entrepreneur",
//             "3": "Business",
//             "4": "Enterprise",
//             "5": "Accelerate",
//             "6": "Por compra",
//         };

//         let htmlContent = '';
//         for (const [number, program] of Object.entries(programNames)) {
//             if (programa.includes(number)) {
//                 htmlContent += `<div style="display: inline-block;"><h6 class="mb-1">${program} </h6></div>`;
//                 if (programa.indexOf(number) < programa.length - 1) {
//                     htmlContent += ', '; // Agregar coma si hay más programas después
//                 }
//             }
//         }

//         const nombre_insignia = $('#nombre_insignia').val()
//         const insignia = (document.getElementById("insignia")).files[0];
//         const categoria = $('#categoriaHiddenModulo').val()
//         const thumbnail = (document.getElementById("fileThumbnail")).files[0];
//         let joder = window.location.hash.substring(1)
//         console.log(joder)

//         if (window.location.hash.substring(1) == 'infoModulo') {
//             if (modulo == '' || !insignia || nombre_insignia == '' || categoria == '' || programa.length === 0 || !thumbnail) {
//                 Swal.fire('Error!', 'Hay campos vacíos en la configuración del módulo.', 'info')
//                 setTimeout(() => {
//                     window.location.hash = 'infoModulo'
//                     $(".sw-btn-prev").trigger("click");
//                 }, 1800); // 3000 milisegundos = 3 segundos
//             }

//         } else {

//             // Crear un objeto FileReader para leer la imagen como URL
//             let reader = new FileReader();

//             // Leer la imagen como URL
//             if (thumbnail) {
//                 reader.readAsDataURL(thumbnail);
//             }

//             // Cuando se cargue la imagen, asignarla a la variable miniatura
//             reader.onload = function (event) {
//                 const miniatura = '<div class="col-6" style=" margin-top: -65px;"><h4 class="text-black" style="text-align: center;">Thumbnail</h4><img src="' + event.target.result + '" alt="Imagen seleccionada" style="margin-left: 40%;width: 276px;"></div>';
//                 const hash = etiqueta || window.location.hash.substring(1)
//                 procesarDatos_modulo(modulo, htmlContent, miniatura, hash)
//             };
//         }
//     }

//     async function procesarDatos_modulo(modulo, programas, miniatura, hash = null) {
//         let contenido = '<br><div class="row"><div class="col-6"><h4 class="text-black">Módulo</h4> ' + modulo + '<br><br> <h4 class="text-black">Programa</h4>' + programas + '</div>' + miniatura + '</div>';

//         if (hash == 'guardar') {
//             for (let i = 0; i < lessonCounter; i++) {
//                 const nombre = $(`#leccion_${i}`).val();

//                 if (nombre) {
//                     const videoInput = document.getElementById(`video_${i}`);
//                     const video = (videoInput && videoInput.files.length > 0) ? videoInput.files[0] : false;
//                     // Obtener la duración del video usando la función asincrónica
//                     const duracion = await cargarLaDuracion(video);
//                     const descripcion = $(`#summernote_${i}`).val();
//                     let material = 'Sin material...';
//                     const materialInput = document.getElementById(`material_${i}`);
//                     if (materialInput.files.length > 0) { material = materialInput.files[0].name; }

//                     const newLeccion = {
//                         id: i,
//                         nombre,
//                         video,
//                         descripcion,
//                         material,
//                         duracion
//                     };

//                     const existeLeccionIndex = lecciones_temp.findIndex((leccion) => leccion.id === newLeccion.id);
//                     if (existeLeccionIndex === -1) {
//                         lecciones_temp.push(newLeccion); // Agregar la lección al array solo si no existe
//                     } else {
//                         // Si la lección ya existe, actualizarla con los nuevos datos
//                         lecciones_temp[existeLeccionIndex] = newLeccion;
//                     }
//                 };

//             }
//         }

//         // Obtener el elemento div donde mostraremos los datos
//         let divResultado = document.getElementById("resultado");

//         // Agregar las lecciones dinámicas a la tabla
//         contenido += `<br>
//             <div class="table-responsive">
//                 <h4 class="text-black">Lecciones</h4>
//                 <table class="table table-hover table-responsive-sm">
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>VIDEO</th>
//                             <th>LECCIÓN</th>
//                             <th>DESCARGABLES</th>
//                             <th>DURACIÓN</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//         `;

//         console.log("LECCIONES TEMP -+-+ ")
//         console.log(lecciones_temp)

//         lecciones_temp.forEach((leccion, index) => {
//             let portada = `<img src="../img/Leccion-por-defecto.jpg" width="162px" alt="Video por defecto">`
//             if (leccion.video) {
//                 const videoElement = document.createElement("video");
//                 videoElement.src = URL.createObjectURL(leccion.video);
//                 videoElement.style.width = "162px";
//                 portada = videoElement.outerHTML
//             }

//             contenido += `
//                     <tr>
//                         <td>${index + 1}</td>
//                         <td>${portada}</td>
//                         <td>${leccion.nombre}</td>
//                         <td>${leccion.material}</td>
//                         <td>${leccion.duracion}</td>
//                     </tr>
//                 `;
//         });
//         contenido += `
//                     </tbody>
//                 </table>
//             </div>
//         `;

//         // Mostrar los datos en el elemento div
//         divResultado.innerHTML = contenido;
//     }

//     // Obtener la duración del video subido 
//     function formatTime(duracionTotal) {
//         // Redondear la duración a un número entero
//         duracionTotal = (Math.round(duracionTotal)).toFixed(0);

//         // Calcular los minutos y segundos
//         let minutos = Math.floor(duracionTotal / 60);
//         const segundos = duracionTotal % 60;
//         // Calcular las horas, minutos y segundos
//         const horas = Math.floor(minutos / 60);
//         minutos = minutos % 60;

//         //console.log('Duración del video:', horas, 'horas', minutos, 'minutos', segundos, 'segundos');
//         let duracionVideo = ''
//         if (horas > 0) duracionVideo = horas + ' horas ';
//         if (minutos > 0) duracionVideo += minutos + ' minutos ';
//         if (segundos > 0) duracionVideo += segundos + ' segundos ';
//         return duracionVideo;
//     }

//     // Cargar la duración del video subido
//     function cargarLaDuracion(video) {
//         return new Promise((resolve, reject) => {
//             if (!video) {
//                 resolve('Desconocida');
//                 return;
//             }

//             // Crear un objeto URL para el archivo seleccionado
//             const objectURL = URL.createObjectURL(video);

//             // Crear un elemento de video para obtener la duración
//             const videoElement = document.createElement('video');

//             // Escuchar el evento 'loadedmetadata' para obtener la duración una vez que los metadatos se hayan cargado
//             videoElement.addEventListener('loadedmetadata', function () {
//                 // Duración del video en segundos
//                 const durationInSeconds = videoElement.duration;

//                 // Formatear la duración en el formato HH:mm:ss
//                 const formattedDuration = formatTime(durationInSeconds);

//                 // Liberar el objeto URL utilizado para el video una vez que ya no se necesite
//                 URL.revokeObjectURL(objectURL);

//                 resolve(formattedDuration);
//             });

//             // Establecer la fuente del video con el objeto URL creado
//             videoElement.src = objectURL;
//         });
//     }