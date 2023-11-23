<?php

class DB {
    private $db_host = DB_HOST;
    private $db_user = DB_USER;
    private $db_pass = DB_PASSWORD;
    private $db_name = DB_NAME;
    // just access from this class and child class
    protected $db_connect;

    public function __construct() {
        $this->db_connect = mysqli_connect($this->db_host, $this->db_user, $this->db_pass, $this->db_name);
    }

    public function query_fetch($query) {
        $result = mysqli_query($this->db_connect, $query);
        $rows = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }
        return $rows;
    }

    public function query_check($query) {
        mysqli_query($this->db_connect, $query);
        return mysqli_affected_rows($this->db_connect);
    }

    public function __destruct() {
        mysqli_close($this->db_connect);
    }
}