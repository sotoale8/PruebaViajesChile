$(function () {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
$('#btn2').click(function(){
    alert('El mensaje fue enviado correctamente...');   	
    $('form')[0].reset();
})
$("a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1800, function () {
            window.location.hash = hash;
        });
    }
})
})