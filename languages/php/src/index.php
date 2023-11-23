<?php
require_once __DIR__ . '/core/init.php';

if ( ! is_login() ) {
  header('Location: login.php');
  exit;
}

require_once PAGES . 'index.php';