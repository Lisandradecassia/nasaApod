function comecar() {
    location.assign("./paginaApod/paginaApod.html");
}
function inicio() {
    location.assign("../index.html");
}
$('#inputData').attr('max', new Date().toISOString().split("T")[0]);
$('#submit').click(function () {
    const selecionarData = $('#inputData').val()
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=eAZxypDpacwuoidmVhHlCHZyB0TV0zUJ3mYRknyP&date=${selecionarData}`,
        type: 'GET',

        success: function (retorno) {

            if (retorno.media_type == 'image') {
                $('#tituloApod').text(retorno.title);
                $('#textApod').text(retorno.explanation);
                $('#imgApod').attr('src', retorno.url);
                $('#videoApod').hide();
                $('#imgApod').show();

            } else {
                $('#videoApod').attr('src', retorno.url);
                $('#videoApod').show()
                $('#imgApod').hide();
            }
        }
    })
})

$('#videoApod').hide();
$('#imgApod').hide();