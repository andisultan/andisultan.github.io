<?php require_once PAGES . 'header.php'; ?>
<div class="container">
  <form class="form" method='post' action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]) . '?page=book&action=update?id=' . $result[0]['id'] ;?> " enctype="multipart/form-data">
    <a class="button" href="javascript:history.back()">Back</a>
    <h1>Edit Book</h1>
    <hr>
    <br>
    <div class="form__item">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" value="<?php echo $result[0]['title']; ?>">
    </div>
    <div class="form__item">
      <label for="author">Author</label>
      <input type="text" name="author" id="author" value="<?php echo $result[0]['author']; ?>">
    </div>
    <div class="form__item">
      <label for="description">Description</label>
      <textarea name="description" id="description" rows="6"><?php echo $result[0]['description']; ?></textarea>
    </div>
    <div class="form__item">
      <label for="image">Image</label>
      <img width="100" src="<?php echo BASE_URL . '/assets/uploads/' .$result[0]['image']; ?>" alt="<?php echo $result[0]['title']; ?>">
      <br>
      <input type="file" name="image" id="image">
    </div>
    <button class="button" type="submit">Update</button>
  </form>
</div>

<?php require_once PAGES . 'footer.php'; ?>