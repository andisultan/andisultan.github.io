<?php protect_file_access(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App Library</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>/assets/style.css">
</head>
<body>
<header class="header">
    <div class="container">
        <div class="header__nav">
        <a href="<?php echo BASE_URL; ?>" class="header__logo">App Library</a>
        <div class="header__menu">
            <ul class="header__menu-left">
                <li><a href="<?php echo BASE_URL; ?>">Home</a></li>
                <li><a href="<?php echo BASE_URL; ?>/index.php?page=book">Book</a></li>
            </ul>
            <ul class="header__menu-right">
                <?php if ( is_login() ) : ?>
                <li><a href="<?php echo BASE_URL; ?>/logout.php">Logout</a></li>
                <?php else : ?>
                    <li><a href="<?php echo BASE_URL; ?>/login.php">Login</a></li>
                    <li><a href="<?php echo BASE_URL; ?>/register.php">Register</a></li>
                <?php endif; ?>
            </ul>
        </div>
        </div>
    </div>
</header>