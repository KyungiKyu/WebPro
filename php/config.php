<?php
  $hostname = "localhost";
  $username = "user";
  $password = "y9K%8d9j!";
  $dbname = "DHBW_webpro";

  $conn = mysqli_connect($hostname, $username, $password, $dbname);
  if(!$conn){
    echo "Database connection error".mysqli_connect_error();
  }
?>
