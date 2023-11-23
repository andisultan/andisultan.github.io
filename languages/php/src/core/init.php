<?php
session_start();
ob_start();

require_once __DIR__ . '/constants.php';
require_once CORE . 'class/db.php';
require_once CORE . 'utils.php';