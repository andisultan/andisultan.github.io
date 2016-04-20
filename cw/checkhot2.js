$(function(){
  $("#second-level").load("getchildren.php?parent=" + $("#first-level").val());
  $("#third-level").load("getchildren.php?parent=" + $("#second-level").val());

$("#first-level").change(function() {
  $("#second-level").load("getchildren.php?parent=" + $("#first-level").val());
  $("#third-level").load("getchildren.php?parent=" + $("#second-level").val());
});

$("#second-level").change(function() {
  $("#third-level").load("getchildren.php?parent=" + $("#second-level").val());
});

});
