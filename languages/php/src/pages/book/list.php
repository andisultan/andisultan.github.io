<?php require_once PAGES . 'header.php'; ?>

<div class="container">
    <a class="button" href="<?php echo BASE_URL; ?>?page=book&action=add">Add new book</a>
    <form class="form form--search" method="GET">
        <input type="hidden" name="page" value="book">
        <input type="text" name="search" placeholder="Search">
        <button class="button" type="submit">Search</button>
    </form>
    <table>
        <thead>
            <tr>
            <th width='50'>No.</th>
            <th width='120'>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th width='100'>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if ( $result ) {
                $no = 1;
                foreach( $result as $book ) {
                echo '<tr>
                        <td>' . $no . '</td>
                        <td><img loading="lazy" width="100" src=' . BASE_URL . '/assets/uploads/' . $book['image'] . '></td>
                        <td>' . $book['title'] . '</td>
                        <td>' . $book['description'] . '</td>
                        <td>' . $book['author'] . '</td>
                        <td>
                            <a href=' . htmlspecialchars($_SERVER["PHP_SELF"]) . '?page=book&action=delete&id=' . $book['id'] . '>Delete</a>
                            <a href=' . htmlspecialchars($_SERVER["PHP_SELF"]) . '?page=book&action=edit&id=' . $book['id'] . '>Edit</a>
                        </td>
                        </tr>';
                $no++;
                }
            } else {
                echo '<tr><td colspan="6">No data found.</td></tr>';
            }
            ?>
        </tbody>
    </table>
    <?php if ( $page_paginate > 1 ) : ?>
        <nav class="pagination">
            <ul>
                <?php if ( $page_current > 1 ) : ?>
                    <li><a href="?page=book&search=<?php echo $search; ?>&part=<?php echo $page_current - 1; ?>" arial-label="next pagination">Prev</a></li>
                <?php endif; ?>

                <?php for ( $i = 1; $i <= $page_paginate; $i++ ) : ?>
                    <?php if ( $i == $page_current ) : ?>
                        <li><a href="?page=book&search=<?php echo $search; ?>&part=<?php echo $i; ?>" class="active"><?php echo $i; ?></a></li>
                    <?php else : ?>
                        <li><a href="?page=book&search=<?php echo $search; ?>&part=<?php echo $i ?>"><?php echo $i; ?></a></li>
                    <?php endif; ?>
                <?php endfor; ?>
                        
                <?php if ( $page_current < $page_paginate ) : ?>
                    <li><a href="?page=book&search=<?php echo $search; ?>&part=<?php echo $page_current + 1; ?>" arial-label="next pagination">Next</a></li>
                <?php endif; ?>
            </ul>
        </nav>
    <?php endif; ?>
</div>

<script defer src="<?php echo BASE_URL; ?>/pages/book/script.js"></script>
<?php require_once PAGES . 'footer.php'; ?>