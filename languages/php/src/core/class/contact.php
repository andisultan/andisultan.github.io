<?php

class Contact extends DB {
    public function __construct() {
        parent::__construct();
        $this->create_table();
    }

    public function create_table() {
        $query = "CREATE TABLE IF NOT EXISTS contacts (
            id          INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name        VARCHAR(255) NOT NULL,
            email       VARCHAR(255) NOT NULL,
            phone       VARCHAR(255) NOT NULL,
            message     VARCHAR(255) NOT NULL
        )";
        return $this->query_check($query);
    }

    public function get_all() {
        $query = "SELECT * FROM contacts";
        return $this->query_fetch($query);
    }

    public function get_by_id($id) {
        $query = "SELECT * FROM contacts WHERE id = $id";
        return $this->query_fetch($query);
    }

    public function insert($data) {
        $name = $data['name'];
        $email = $data['email'];
        $phone = $data['phone'];
        $message = $data['message'];
        $query = "INSERT INTO contacts (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";
        return $this->query_check($query);
    }

    public function update($data) {
        $id = $data['id'];
        $name = $data['name'];
        $email = $data['email'];
        $phone = $data['phone'];
        $message = $data['message'];
        $query = "UPDATE contacts SET name = '$name', email = '$email', phone = '$phone', message = '$message' WHERE id = $id";
        return $this->query_check($query);
    }

    public function delete($id) {
        $query = "DELETE FROM contacts WHERE id = $id";
        return $this->query_check($query);
    }
}