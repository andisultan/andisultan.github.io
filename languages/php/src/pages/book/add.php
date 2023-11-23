<?php require_once PAGES . 'header.php'; ?>

<div class="container">
  <form class="form" method='post' action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>?page=book&action=create" enctype="multipart/form-data">
    <a class="button" href="javascript:history.back()">Back</a>
    <h1>Add Book</h1>
    <hr>
    <br>
    <div class="form__item">
      <label for="title">Title</label>
      <input type="text" name="title" id="title">
    </div>
    <div class="form__item">
      <label for="author">Author</label>
      <input type="text" name="author" id="author">
    </div>
    <div class="form__item">
      <label for="description">Description</label>
      <textarea name="description" id="description" rows="6"></textarea>
    </div>
    <div class="form__item">
      <label for="image">Image</label>
      <input type="file" name="image" id="image">
    </div>
    <button class="button" type="submit">Submit</button>
    <button class="button" type="reset">Reset</button>
  </form>
</div>
<script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
<script>
  const editor = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: 'description'
  });
  
</script>
<?php require_once PAGES . 'footer.php'; ?>