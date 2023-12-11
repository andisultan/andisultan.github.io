<?php
require_once CORE . 'class/book.php';

$action_act = ['add', 'create', 'edit', 'update', 'delete'];
$action     = get_action();
$search     = get_search();
$book_id    = get_id();

if ( ! in_array( $action, $action_act ) ) {
   
    $book = new Book();
    $book_count = $book->count( $search );

    // pagination
    $page_total = $book_count;
    $page_current = get_part();
    $page_showed = 4;
    $page_start = ($page_current > 1) ? ($page_current * $page_showed) - $page_showed : 0;
    $page_paginate = ceil($page_total / $page_showed);
    
    // get all data
    $result = $book->paginate( $page_showed, $page_start, $search );

    require_once PAGES . 'book/list.php';
}

if ( $action == 'add' ) {
    require_once PAGES . 'book/add.php';
}

if ( $action == 'create' ) {
    if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
        echo 'Empty form';
        return;
    }

    upload_image( $_FILES['image'] );

    $book = new Book();
    $result = $book->insert( $_POST, $_FILES );

    if ( $result ) {
        header('Location: index.php?page=book');
    } else {
        echo 'Error';
    }
}

if ( $action == 'edit' ) {
    if ( $book_id == '') {
        echo 'No Book selected';
        return;
    }

    $book = new Book();
    $result = $book->get_by_id( $book_id );
    
    if ( $result ) {
        require_once PAGES . 'book/edit.php';
    } else {
        echo 'Error';
    }
} 

if ( $action == 'update' ) {
    if ( $book_id == '' && $_SERVER['REQUEST_METHOD'] !== 'POST' ) {
        echo 'No Book selected';
        return;
    }

    $book = new Book();
    $result = $book->update( $book_id, $_POST );

    if ( $result ) {
        header('Location: index.php?page=book');
    } else {
        echo 'Error';
    }
}

if ( $action == 'delete' ) {
    if ( $book_id == '') {
        echo 'No Book selected';
        return;
    }

    $book = new Book();
    $result = $book->delete( $book_id );

    if ( $result ) {
        header('Location: index.php?page=book');
    } else {
        echo 'Error';
    }
}