<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "forum_website";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
