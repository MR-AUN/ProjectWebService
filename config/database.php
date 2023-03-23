<?php
session_start();
session_regenerate_id(true);

// define database credentials
$host = 'localhost';
$dbname = 'mydatabase';
$user = 'myuser';
$pass = 'mypassword';

// create database connection
$con = mysqli_connect($host, $user, $pass, $dbname);

// check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully";
?>