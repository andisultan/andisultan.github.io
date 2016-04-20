<?php

$mysqli = new mysqli("localhost", "root", "", "cpc_amazon");

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

?>
