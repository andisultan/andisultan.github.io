<?php
require_once PAGES . 'header.php';

function welcome() {
  echo '<div class="container">';
  echo '<h1>Welcome to the Library</h1>';
  echo '<p>Here you can find a list of books.</p>';
  echo '<p>Click <a href="' . BASE_URL . '?page=book">here</a> to see the list of books.</p>';
  echo '</div>';
}

switch ( get_page() ) {
  case 'book':
    require_once PAGES . 'book/index.php';
    break;
  case 'login':
    require_once PAGES . 'login/index.php';
    break;
  case 'contact':
    require_once PAGES . 'contact/index.php';
    break;
  default:
    welcome();
    break;
}

require_once PAGES . 'footer.php';