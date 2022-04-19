var listaEstados = ['Aguascalientes', 'Baja California', 'Baja California Sur',
    'Campeche', 'Coahuila', 'Colima', 'Chiapas', 'Chihuahua', 'Distrito Federal', 'Durango', 'Guanajuato ',
    'Guerrero', 'Hidalgo', 'Jalisco', 'Michoacán', 'Estado de México', 'Morelos', 'Nayarit', 'Nuevo León',
    'Oaxaca', 'Puebla', 'Quintana Roo', 'Querétaro', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tlaxcala',
    'Tamaulipas', 'Veracruz', 'Yucatán', 'Zacatecas'];
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
            'src': 'img/noche.jpg',
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

        console.log($('#quiero-crecer').data());



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
        $('#marcalos').each(function (index, element) {
            console.log(element.textContent + " - " + index);
        });
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