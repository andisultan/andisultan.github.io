<?php
class User extends DB {

    public function __construct() {
        parent::__construct();
        $this->create_table();
    }

    public function create_table() {
        $query = "CREATE TABLE IF NOT EXISTS users (
            id          INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name        VARCHAR(255) NOT NULL,
            email       VARCHAR(255) NOT NULL,
            password    VARCHAR(255) NOT NULL
        )";
        
        return $this->query_check($query);
    }

    public function get_all() {
        $query = "SELECT * FROM users";
        
        return $this->query_fetch($query);
    }

    public function get_by_id($id) {
        $query = "SELECT * FROM users WHERE id = $id";
        
        return $this->query_fetch($query);
    }

    public function insert($name, $email, $password) {
      $query = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
      
      return $this->query_check($query);
    }

    public function update($data) {
        $id = $data['id'];
        $name = $data['name'];
        $email = $data['email'];
        $password = $data['password'];
        $query = "UPDATE users SET name = '$name', email = '$email', password = '$password' WHERE id = $id";
        
        return $this->query_check($query);
    }

    public function delete($id) {
        $query = "DELETE FROM users WHERE id = $id";
        
        return $this->query_check($query);
    }

    public function get_by_email($email) {
        $query = "SELECT id, email, password FROM users WHERE email = '$email'";
        
        return $this->query_fetch($query);
    }

    public function login($email, $password) {
        $query = "SELECT email, password  FROM users WHERE email = '$email' AND password = '$password'";
        
        return $this->query_fetch($query);
    }
}