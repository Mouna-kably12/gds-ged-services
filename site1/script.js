// Script pour soumettre le formulaire via AJAX
$(document).ready(function() {
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            success: function(response) {
                $('#form-status').html('<div class="alert alert-success">Votre message a été envoyé avec succès!</div>');
                $('#contact-form')[0].reset(); // Réinitialiser le formulaire
            },
            error: function(xhr, status, error) {
                $('#form-status').html('<div class="alert alert-danger">Une erreur est survenue. Veuillez réessayer.</div>');
            }
        });
    });
});
let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
