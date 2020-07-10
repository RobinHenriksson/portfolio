<?php 

date_default_timezone_set( 'Europe/Stockholm' );
header("Access-Control-Allow-Origin: *");

require 'email/email.php';

use Email\EmailSender;

$post = file_get_contents("php://input");
parse_str($post, $_POST);

if(!empty($_POST['email'])) {
  if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $emailSender = new EmailSender();
    $emailSender->setSubject('New mail from Vue example');
    $emailSender->setMessage(stripslashes(htmlspecialchars_decode($_POST['message'])));
    
    $emailSender->setSender($_POST['email'], $_POST['name']);
    $emailSender->send();
  }
}

?>