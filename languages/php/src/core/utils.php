<?php
function protect_file_access() {
  if ( realpath(__FILE__) == realpath( $_SERVER['SCRIPT_FILENAME'] ) ) {
    header( 'HTTP/1.0 403 Forbidden', TRUE, 403 );
    die( header( 'Location: index.php?page=book' ) );
  }
}

function sanitize_input_text($text) {
  $text = trim($text);
  $text = stripslashes($text);
  $text = htmlspecialchars($text);
  return $text; 
}

function sanitize_input_email($email) {
  $email = filter_var($email, FILTER_SANITIZE_EMAIL);
  return $email;
}

function upload_image($file) {
  $target_file = UPLOAD_DIR . basename($file["name"]);
  $uploadOk = 1;
  $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

  if (isset($_POST["submit"])) {
    $check = getimagesize($file["tmp_name"]);
    if ($check !== false) {
      $uploadOk = 1;
    } else {
      $uploadOk = 0;
    }
  }

  if (file_exists($target_file)) {
    $uploadOk = 0;
  }

  if ($file["size"] > 500000) {
    $uploadOk = 0;
  }

  if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
    $uploadOk = 0;
  }

  if ($uploadOk == 0) {
    return false;
  } else {
    if (move_uploaded_file($file["tmp_name"], $target_file)) {
      return true;
    } else {
      return false;
    }
  }
}

function get_page() {
  $page = isset($_GET['page']) ? $_GET['page'] : 'home';
  return $page;
}

function get_action() {
  $action = isset($_GET['action']) ? $_GET['action'] : '';
  return $action;
}

function get_part() {
  $part = isset($_GET['part']) ? $_GET['part'] : 1;
  return $part;
}

function get_id() {
  $id = isset($_GET['id']) ? $_GET['id'] : '';
  return $id;
}

function get_search() {
  $search = isset($_GET['search']) ? $_GET['search'] : '';
  return $search;
}

function is_login() {
  if (isset($_SESSION[SESSION_LOGIN])) {
    return true;
  } else {
    return false;
  }
}

function auth_handler() {
  if ( isset( $_COOKIE[COOKIE_ID] ) && isset( $_COOKIE[COOKIE_KEY] ) ) {
    $id = $_COOKIE[COOKIE_ID];
    $key = $_COOKIE[COOKIE_KEY];

    $user = new User();
    $is_user_exist = $user->get_by_id( $id );

    if ( $is_user_exist ) {
        $key_check = hash( 'sha256', $is_user_exist[0]['email'] );

        if ( $key === $key_check ) {
            $_SESSION[SESSION_LOGIN] = true;
        }
    }
  }

  if ( is_login() ) {
    header('Location: index.php');
    exit;
  }
}