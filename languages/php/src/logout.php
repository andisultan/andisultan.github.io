<?php
session_start();
session_unset(); 
session_destroy(); 

require_once __DIR__ . '/core/constants.php';

// delete cookie
setcookie( COOKIE_ID, '', time() - 3600, '/');
setcookie( COOKIE_KEY, '', time() - 3600, '/');

header('Location:index.php'); 
exit;