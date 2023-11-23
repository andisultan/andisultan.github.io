<?php
require_once __DIR__ . '/core/init.php';
auth_handler();

require_once __DIR__ . '/core/class/user.php';

if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
    $email = sanitize_input_text( $_POST['email'] );
    $password = sanitize_input_text( $_POST['password'] );

    $user = new User();
    $is_user_exist = $user->get_by_email( $email );

    if ( $is_user_exist ) {
        $password_check = password_verify( $password, $is_user_exist[0]['password'] );

        if ( $password_check ) {
            $_SESSION[SESSION_LOGIN] = true;

            if ( isset( $_POST['remember'] ) ) {
                $one_hours = 3600;
                setcookie( COOKIE_ID, $is_user_exist[0]['id'], time() + 60, '/' );
                setcookie( COOKIE_KEY, hash( 'sha256', $is_user_exist[0]['email'] ), time() + 60, '/' );
            }

            header('Location: index.php');
        } else {
            echo 'Error';
        }
    } else {
        echo 'Error';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="<?php echo BASE_URL; ?>/assets/style.css">
</head>
<body>
<div class="auth">
    <div class="container">
        <form class="form" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <h1>Login</h1>
            <br>
            <div class="form__item">
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="Email" id="email">
            </div>
            <div class="form__item">
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Password" id="password">
            </div>
            <div class="form__item">
                <label for="remember">
                <input type="checkbox" name="remember" id="remember">
                &nbsp; Remember me</label>
            </div>
            <button class="button" type="submit">Login</button>
            <br>
            <br>
            Don't have an account ? <a href="register.php">Register</a>
        </form>
    </div>
</div>
</body>
</html>