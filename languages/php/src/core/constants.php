<?php
/**
 * Path configuration
 */
define( 'PATH', __DIR__ . '/..' );
define( 'CORE', PATH . '/core/' );
define( 'PAGES', PATH . '/pages/' );

/**
 * Utils configuration
 */
define( 'BASE_URL', 'http://localhost:8888' );
define( 'MAX_FILE_SIZE_UPLOAD', 1000000 ); // 1MB
define( 'UPLOAD_DIR', PATH . '/assets/uploads/' );
define( 'SESSION_LOGIN', 'user_session' );
define( 'COOKIE_ID', 'cookie_id' );
define( 'COOKIE_KEY', 'cookie_key' );

/**
 * Database configuration
 */
define( 'DB_HOST', 'database' );
define( 'DB_USER', 'root' );
define( 'DB_PASSWORD', 'password' );
define( 'DB_NAME', 'db_library' );

