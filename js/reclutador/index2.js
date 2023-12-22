var Estudios = ~~Textos(NivelEstudios)~~;
var Areas = ~~Textos(Areas)~~;
var Prestaciones = ~~Textos(Prestaciones)~~;
var Jornadas = ~~Textos(Jornadas23)~~;
var Moneda = ~~Textos(Moneda)~~;
var Habilidad = ~~Textos(Nivel - Habilidad)~~;
var Pago = ~~Textos(PeriodoPago)~~;
var Modalidad = ~~Textos(Modalidad)~~;
var Contratacion = ~~Textos(TipoContratacion)~~;
var Estados = ~~Textos(EstadosCP)~~;
Estudios.unshift("Indistinto");

function MuestraVistaPrevia() {
    window.top.CargaPopup("Vista Previa", window.location.protocol + "//" + window.location.host + "/DynPub.aspx?pd=TemplateVistaPrevia0", 1200, 640);
}
function ValidaCP(obj, vars) {
    $.post('/DynPub.aspx?pd=InfoCP&T=SubArea&c=' + obj.value, vars, function (data) {
        $("#estados").val(data);
    });
}

function LlenaSelect(Id, Vars, ConSeleccione) {
    $("#" + Id).empty();
    if (ConSeleccione) $('<option/>').val("").html("Seleccione una opción").appendTo('#' + Id);
    for (var i = 0; i < Vars.length; i++) {
        $('<option/>').val(Vars[i]).html(Vars[i]).appendTo('#' + Id);
    }
}
function SelectDinamico(Id, Val, vars, ConSeleccione) {
    $.post('/DynPub.aspx?pd=Textos&T=SubArea&p1=' + Val, vars, function (data) {
        console.log("data:", data);
        var objsn2 = $.parseJSON(data);

        LlenaSelect(Id, objsn2, ConSeleccione);
    });
}
LlenaSelect("estudios", Estudios, 0);
LlenaSelect("Areas", Areas, 1);
LlenaSelect("Prestaciones", Prestaciones, 1);
LlenaSelect("Jornadas23", Jornadas, 1);
LlenaSelect("Moneda", Moneda, 0);
LlenaSelect("Habilidad", Habilidad, 1);
LlenaSelect("PeriodoPago", Pago, 1);
LlenaSelect("Modalidad", Modalidad, 1);
LlenaSelect("TipoContratacion", Contratacion, 1);
LlenaSelect("estados", Estados, 1);
function ActualizaSubAreas(obj) {
    SelectDinamico("SubAreas", obj.value, { p1: obj.value }, 1);
}