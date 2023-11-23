<?php
require_once __DIR__ . '/core/init.php';
auth_handler();

require_once __DIR__ . '/core/class/user.php';

if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {

    $name = sanitize_input_text( $_POST['name'] );
    $email = sanitize_input_text( $_POST['email'] );
    $password = sanitize_input_text( $_POST['password'] );
    $password_confirm = sanitize_input_text( $_POST['password_confirm'] );

    $user = new User();
    $is_user_exist = $user->get_by_email( $email );

    if ( $is_user_exist ) {
        echo 'Email already exist';
    } else {
        if ( $password === $password_confirm ) {
            $password_hash = password_hash( $password, PASSWORD_DEFAULT );

            $result = $user->insert( $name, $email, $password_hash );

            if ( $result ) {
                header('Location: register.php');
            } else {
                echo 'Error';
            }
        } else {
            echo 'Password not match';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Register</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="<?php echo BASE_URL; ?>/assets/style.css">
</head>
<body>
<div class="auth">
    <div class="container">
        <form class="form" method="post">
            <h1>Register</h1>
            <br>
            <div class="form__item">
                <label for="name">Username</label>
                <input type="text" name="name" placeholder="Username" id="name">
            </div>
            <div class="form__item">
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="Email" id="email">
            </div>
            <div class="form__item">
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Password" id="password">
            </div>
            <div class="form__item">
                <label for="password_confirm">Confirm Password</label>
                <input type="password" name="password_confirm" placeholder="Confirm Password" id="password_confirm">
            </div>
            <button class="button" type="submit">Register</button>
            <br>
            <br>
            have an account ? <a href="login.php">Login</a>
        </form>
    </div>
</div>
</body>
</html>