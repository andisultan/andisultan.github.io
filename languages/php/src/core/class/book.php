<?php

class Book extends DB {

    public function __constuct() {
        parent::__construct();
        $this->create_table();
    }

    public function create_table() {
        $query = "CREATE TABLE IF NOT EXISTS books (
            id          INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            title       VARCHAR(255) NOT NULL,
            author      VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            image       VARCHAR(255) NOT NULL
        )";
        
        return $this->query_check($query);
    }

    public function get_all() {
        $query = "SELECT * FROM books";
        
        return $this->query_fetch($query);
    }

    public function get_by_id($id) {
        $book_id = sanitize_input_text( $id );
        $book_id = (int) $id;

        $query = "SELECT * FROM books WHERE id = $book_id";
        
        return $this->query_fetch($query);
    }

    public function count($search = null) {
        // query with prepared statement
        if ( $search == null ) {
            $query = "SELECT COUNT(*) as total FROM books";
            $result = $this->query_fetch($query);
            $count = $result[0]['total'];
        } else {
            $query = "SELECT COUNT(*) as total FROM books WHERE title LIKE ? OR author LIKE ? OR description LIKE ?";
            $search = "%$search%";
            $stmt = $this->db_connect->prepare($query);
            $stmt->bind_param("sss", $search, $search, $search);
            $stmt->execute();
            $result = $stmt->get_result();
            $count = $result->num_rows;
        }
        
        return $count;
    }

    public function paginate($limit, $offset, $search = null) {
        if ( $search == null ) {
            $query = "SELECT * FROM books LIMIT ? OFFSET ?";
            $stmt = $this->db_connect->prepare($query);
            $stmt->bind_param("ii", $limit, $offset);
            $stmt->execute();
        } else {
            $query = "SELECT * FROM books WHERE title LIKE ? OR author LIKE ? OR description LIKE ? LIMIT ? OFFSET ?";
            $stmt = $this->db_connect->prepare($query);
            $search = "%$search%";
            $stmt->bind_param("sssss", $search, $search, $search, $limit, $offset);
            $stmt->execute();
        }
        
        return $stmt->get_result();
    }

    public function insert($data, $file) {
        $title = sanitize_input_text( $data['title'] );
        $author = sanitize_input_text( $data['author'] );
        $description = sanitize_input_text ( $data['description'] );
        $image = $file['image']['name'];

        // query with prepared statement
        $query = "INSERT INTO books (title, author, description, image) VALUES (?, ?, ?, ?)";
        $stmt = $this->db_connect->prepare($query);
        $stmt->bind_param("ssss", $title, $author, $description, $image);
        $stmt->execute();

        return $stmt->affected_rows;
    }

    public function update($id, $data) {
        $title = sanitize_input_text( $data['title'] );
        $author = sanitize_input_text( $data['author'] );
        $description = sanitize_input_text ( $data['description'] );
        $image = $data['image'];

        // query with prepared statement
        $query = "UPDATE books SET title = ?, author = ?, description = ?, image = ? WHERE id = ?";
        $stmt = $this->db_connect->prepare($query);
        $stmt->bind_param("ssssi", $title, $author, $description, $image, $id);
        $stmt->execute();

        return $stmt->affected_rows;
    }

    public function delete($id) {
        $book_id = sanitize_input_text( $id );
        $book_id = (int) $id;

        $query = "DELETE FROM books WHERE id = $book_id";
        
        return $this->query_check($query);
    }
}