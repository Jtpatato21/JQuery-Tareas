var listaEstados = ['Aguascalientes', 'Baja California', 'Baja California Sur',
    'Campeche', 'Coahuila', 'Colima', 'Chiapas', 'Chihuahua', 'Distrito Federal', 'Durango', 'Guanajuato ',
    'Guerrero', 'Hidalgo', 'Jalisco', 'Michoacán', 'Estado de México', 'Morelos', 'Nayarit', 'Nuevo León',
    'Oaxaca', 'Puebla', 'Quintana Roo', 'Querétaro', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tlaxcala',
    'Tamaulipas', 'Veracruz', 'Yucatán', 'Zacatecas'
];
var usuariosRegistrados = ['amorales', 'cfuentes', 'dcarrillo', 'elopez', 'fdominguez', 'hmarquez', 'mzamudio', 'pcontreras', 'rsanchez', 'shernandez'];
var dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var indexMeses = 4;

$(function () {
    $("#ejercicio1_accion").click(function () {
        $("#contenedor").css({
            'background-color': '#ff0000',
            'border': '10px solid #002AFF',
            'color': '#ffffff'
        });
    });

    $("#ejercicio2_accion").click(function () {
        $($("#lista-no-ordenada").children().get(1)).css({
            'font-style': 'italic'
        });
        $($("#lista-no-ordenada").children().get(7)).css({
            'color': '#008F4C'
        });
        $($("#lista-no-ordenada").children().get($("#lista-no-ordenada").children().length - 2)).css({
            'text-decoration': 'underline'
        });
        $('#lista-no-ordenada').children().each(function (index, element) {
            if (element.textContent.toLowerCase().includes("artículo") && index % 2 !== 0) {
                $(element).css({
                    'text-transform': 'uppercase'
                });
            }
        });
    });

    $("#ejercicio3_accion").click(function () {
        $("#dia-noche").attr({
            'src': 'img/noche.png',
            'with': '200px',
            'height': '193px'
        });

    });


    $("#ejercicio4_accion").click(function () {
        $("#deshabilitame").prop("disabled", true);
    });

    $("#ejercicio5_accion").click(function () {
        $('#desmarca').find('input[type=checkbox]:checked').removeAttr('checked');
        $('#marca').find('input[type=radio]').each(function (index, element) {
            if (index == 3) {
                element.checked = true;
            }
        });
    });


    $("#ejercicio6_accion").click(function () {
        $('#quiero-crecer').css({
            'width': $('#quiero-crecer').data('ancho'),
            'height': $('#quiero-crecer').data('alto')
        });
    });

    $("#ejercicio7_accion").click(function () {
        $('#registro').find('input[type=text]').each(function (index, element) {
            console.log(element + " " + index);
            $(element).prop('readonly', true);
        });
    });
    $("#ejercicio8_accion").click(function () {
        $('#combobox8').val('2');
    });
    $("#ejercicio9_accion").click(function () {
        $('#hijo').detach().appendTo('#madre');
    });
    $("#ejercicio10_accion").click(function () {
        if ($('#lista-dias-semana').children().length < 7) {
            $('#lista-dias-semana').before('<h3>Lista de días</h3>');
            $('#lista-dias-semana').append('<li>' + dias[$('#lista-dias-semana').children().length] + '</li>');
            $('#lista-dias-semana').append('<li>' + dias[$('#lista-dias-semana').children().length] + '</li>');
            $('#lista-dias-semana').append('<li>' + dias[$('#lista-dias-semana').children().length] + '</li>');
            $('#lista-dias-semana').append('<li>' + dias[$('#lista-dias-semana').children().length] + '</li>');
        }
        if ($('#lista-meses').children().length < 12) {
            $('#lista-meses').before('<h3>Lista de meses</h3>');
            $('#lista-meses').prepend('<li>' + meses[indexMeses--] + '</li>');
            $('#lista-meses').prepend('<li>' + meses[indexMeses--] + '</li>');
            $('#lista-meses').prepend('<li>' + meses[indexMeses--] + '</li>');
            $('#lista-meses').prepend('<li>' + meses[indexMeses--] + '</li>');
            $('#lista-meses').prepend('<li>' + meses[indexMeses--] + '</li>');
            $("#lista-meses").after('<img src="img/jquery_logo.png" />');
        }
    });

    $("#ejercicio11_accion").click(function () {
        $(".piojos").remove();
    });
    $("#ejercicio12_accion").click(function () {
        $("#gato").append('<tr><td>X</td><td>0</td><td>0</td></tr>');
    });
    $("#ejercicio13_accion").click(function () {
        $("#yo").next().css({
            'background-color': 'blue'
        });
        $("#yo").css({
            'background-color': 'green'
        });
        $("#yo").prev().css({
            'background-color': 'red'
        });
        $("#yo").parent().css({
            'background-color': 'purple'
        });
        $("#arbol-genealogico").css({
            'background-color': 'gray'
        });
        $("#yo").parent().css({
            'color': 'white'
        });
    });
    $("#ejercicio14_accion").click(function () {
        $('#descendencia').find('.heredero').each(function (index, element) {
            console.log(element.textContent + " - " + index);
        });
    });
    $("#ejercicio15_accion").click(function () {
        $('#marcalos').find('input[type=text]').each(function (index, element) {
            if ($.isNumeric(element.value)) {
                $(element).css({
                    'border': '3px solid green',
                });
            } else {
                $(element).css({
                    'border': '3px solid red',
                });
            }

        });
    });
    $("#ejercicio16_accion").click(function () {
        $('#sumas > tbody').children().each(function (index, element) {
            if ($.isNumeric(this.children[0].textContent) && $.isNumeric(this.children[2].textContent)) {
                this.children[4].textContent = eval(this.children[0].textContent + this.children[1].textContent + this.children[2].textContent);
            }
        });
    });
    $("#ejercicio17_accion").click(function () {
        $('#mayores-que-10').children().children().children().each(function (index, element) {
            if ($.isNumeric(element.textContent) && element.textContent >= 10) {
                $(element).css({
                    'background-color': '#' + Math.floor(Math.random() * 16777215).toString(16),
                    'border': '3px solid ' + '#' + Math.floor(Math.random() * 16777215).toString(16),
                    'color': '#' + Math.floor(Math.random() * 16777215).toString(16)
                });
            }
        });
    });

    $("#foco").click(function (event) {
        event.preventDefault();
        if ($('#foco').data('estado') == 'apagado') {
            $(this.children).attr('src', 'img/foco_encendido.png');
            $('#foco').data('estado', 'prendido');
            $('body').parent().css({
                'background-color': '#ffdd73'
            });
        } else {
            $(this.children).attr('src', 'img/foco_apagado.png');
            $('#foco').data('estado', 'apagado');
            $('body').parent().css({
                'background-color': 'transparent'
            });
        }
    });

    $("#a-mayusculas").blur(function () {
        $(this).val($(this).val().toUpperCase());
    });

    $("#lista-buscadores").change(function () {
        if ($(this).val() != "") {
            window.open($(this).val());
        }
    });

    $('#llenar-estados').click(function () {
        $.each(listaEstados, function (index, value) {
            $('#lista-estados').append(new Option(value, index));
        });
    });

    $('#borrar-estados').click(function () {
        $('#lista-estados').find('option').remove();
    });

    $('#ejercicio22_accion').click(function (event) {
        event.preventDefault();
        if ($.trim($('#usuario').val()) != '') {
            $('#errores').find('option[value="usuarioVacio"]').remove();
            if (!usuariosRegistrados.includes($('#usuario').val().toLowerCase())) {
                $('#errores').find('option[value="usuarioExistente"]').remove();
                if ($.trim($('#contra1').val()) != '') {
                    $('#errores').find('option[value="contraseniaVacia"]').remove();
                    if ($.trim($('#contra2').val()) != '') {
                        $('#errores').find('option[value="contraseniaVacia2"]').remove();
                        if ($('#contra1').val() == $('#contra2').val()) {
                            $('#errores').find('option[value="contraseniaNoCoinciden"]').remove();
                            if ($('#acuerdos').is(':checked')) {
                                $('#errores').find('option[value="acuerdosNoAceptados"]').remove();
                                $('#nuevo-usuario').submit();
                            } else {
                                $('#errores').find('option[value="acuerdosNoAceptados"]').remove();
                                $('#errores').append(new Option('Debes aceptar los acuerdos', 'acuerdosNoAceptados'));
                            }
                        } else {
                            $('#errores').find('option[value="contraseniaNoCoinciden"]').remove();
                            $('#errores').append(new Option('Las contraseñas no coinciden', 'contraseniaNoCoinciden'));
                        }
                    } else {
                        $('#errores').find('option[value="contraseniaVacia2"]').remove();
                        $('#errores').append(new Option('Debes repetir la contraseña', 'contraseniaVacia2'));

                    }
                } else {
                    $('#errores').find('option[value="contraseniaVacia"]').remove();
                    $('#errores').append(new Option('Debes introducir una contraseña', 'contraseniaVacia'));
                }
            } else {
                $('#errores').find('option[value="usuarioExistente"]').remove();
                $('#errores').append(new Option('Usuario ya existente', 'usuarioExistente'));
            }
        } else {
            $('#errores').find('option[value="usuarioVacio"]').remove();
            $('#errores').append(new Option('Usuario no ingresado', 'usuarioVacio'));
        }
        if ($('#errores').children().length > 0) {
            $('#errores').show();
        } else {
            $('#errores').hide();
        }
    });

    $('#pesos').keyup(function () {
        if (this.val != '') {
            $('#dolares').children().get(0).textContent = ($(this).val() / $('#dolares').data('cambio')).toFixed(2);
            $('#euros').children().get(0).textContent = ($(this).val() / $('#euros').data('cambio')).toFixed(2);
            $('#libras').children().get(0).textContent = ($(this).val() / $('#libras').data('cambio')).toFixed(2);
        }
    });

    $('#boton-agregar-tarea').click(function () {
        if ($('#nueva-tarea').val() != '' && $('#fecha-tarea').val() != '') {
            $('#mis-tareas > tbody').append('<tr><td><a href="#" class="eliminar">Eliminar</a></td><td>' + $('#nueva-tarea').val() + '</td><td>' + $('#fecha-tarea').val() + '</td><td><a href="#" class="editar">Editar</a></td></tr>');
        } else {
            alert('Debes ingresar una tarea y una fecha');
        };
    });

    $('#mis-tareas').on('click', '.eliminar', function (event) {
        if (window.confirm('¿Desea eliminar la tarea?')) {
            event.preventDefault();
            $(this).parent().parent().remove();
        }
    });

    $('#mis-tareas').on('click', '.editar', function (event) {
        event.preventDefault();
        let nombreTarea = prompt("Por favor ingresa el nuevo nombre para la tarea");
        let fechaTarea = prompt("Por favor ingrese la nueva fecha para la tarea", $(this).parent().parent().children().get(2).textContent);
        if ($.trim(nombreTarea) != '' && $.trim(fechaTarea) != '') {
            $(this).parent().parent().children().get(1).textContent = nombreTarea;
            $(this).parent().parent().children().get(2).textContent = fechaTarea;
        } else
            alert('La actualización ha sido cancelado por el siguiente motivo: \n\nSe han detectado campos vacíos y hemos cancelado la actualización');
    });


});

//EJERCICIO 4a//
function aplicarCambioTexto(texto) {
    $("#hello-world").text(texto);
}

function aplicarCambioNegritas() {
    $('#hello-world').toggleClass('negritas');
}

function aplicarCambioCursivas() {
    $('#hello-world').toggleClass('cursivas');
}

function aplicarCambioSeparacion(numero) {
    $('#hello-world').css('letter-spacing', numero + 'px');
}

function aplicarCambioTamano() {
    $('#hello-world').toggleClass('mayusculas', 'minusculas');
}

function aplicarCambioColor(color) {
    $('#hello-world').css('color', color);
}

function aplicarCambioSubrayado() {
    $('#hello-world').toggleClass('subrayado');
}