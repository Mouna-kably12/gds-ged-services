<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Envoyer un email de démonstration
    $to = "mounakably12@gmail.com";
    $subject = "Nouveau message depuis le formulaire de contact";
    $txt = "Nom: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $txt, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Désolé, une erreur s'est produite lors de l'envoi du message.";
    }
}
?>