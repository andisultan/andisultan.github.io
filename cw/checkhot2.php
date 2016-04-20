<?php

include 'db.inc';

// function I like to use for debugging
function printdebug($dbvar) {
   print "<pre>";
   var_dump($dbvar);
   print "</pre>";
   exit;
}

// main pages for hot new releases and top sellers
$mainhot = 'http://www.amazon.com/gp/new-releases/';
$maintop = 'www.amazon.com/Best-Sellers/zgbs';

// minimum price, review number, and number of products required for that price
if (isset($_POST[minprice]))
$minprice = (int) $_POST[minprice];
else $minprice = 200;

if (isset($_POST[mincount]))
$mincount = (int) $_POST[mincount];
else $mincount = 5;

if (isset($_POST[minreviews]))
$minreviews = (int) $_POST[minreviews];
else $minreviews = 1;

// get categories
$level1 = urldecode($_POST['first-level']);
$level2 = urldecode($_POST['second-level']);
$level3 = urldecode($_POST['third-level']);

// get all categories available
$sql = "SELECT distinct category, caturl, parent from products";
if ($result = $mysqli->query($sql)) {
while ($row = $result->fetch_assoc()) {
   $categories[] = $row;
   if ($row['parent'] == $mainhot or $row['parent'] == $maintop)
	$maincategories[] = $row;
}
$result->close();
} else die("error found");

?>


<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="checkhot2.js"></script>
<script src="sorttable.js"></script>
<link rel="stylesheet" href="checkhot.css">
</head>
<body>
<h1>Commission Wizard</h1>
<form method="post" action="checkhot2.php">
<table cellspacing=0 cellpadding=10><tr><td>
<b>Settings:</b></td><td>
Minimum price: <input size=5 type=text name=minprice value=<?php print $minprice; ?>>
</td><td>
Minimum number of reviews: <input size=5 type=text name=minreviews value=<?php print $minreviews; ?>>
</td><td>
Minimum number of products: <input size=5 type=text name=mincount value=<?php print $mincount; ?>>
</td></tr>
</table>
<br><br>

<table cellspacing=0 cellpadding=10><tr><td>
<b>Check a category:</b> 
</td><td>
<select id="first-level" name="first-level">
  <option value="">Please Select</option>
<?php

// display all available main categories

foreach ($maincategories as $category) {
   $name = $category['category'];
   $url = $category['caturl'];
   $urlenc = urlencode($url);
   $parent = $category['parent'];

   if ($url == $level1) $selected = 'selected';
   else $selected = '';
   print "<option $selected value='$urlenc'>$name</option>\n";
}
?>
</select>

</td><td>

<select id="second-level" name="second-level">
  <option>Please choose from above</option>
</select>

</td><td>

<select id="third-level" name="third-level">
  <option>Please choose from above</option>
</select>

</td><td>
<input type=submit name=submit value="Check Category">
</td></tr></table>
<br>
<br>
<table cellspacing=0 cellpadding=10><tr><td>
<b>Need ideas?</b></td><td>
<input type=submit name=random value="Get a Random Category">
</form>
</td></tr></table>
<br><br><hr><br>

<?php
// check if random or specific category
if ($_POST['random']) {

// look at all categories and pick a random one
$sql = "select category, caturl, section, count(*) as total from products where price >= $minprice and reviews >= $minreviews group by category having total >= $mincount";

if ($result = $mysqli->query($sql)) {

while ($row = $result->fetch_assoc()) {
   $rows[] = $row;
}
$result->close();
}

$numrows = count($rows);
if ($numrows == 0) {
print "Sorry, no categories found";
print "<br><br><br><br>";
exit;
}

$random = rand(0,$numrows-1);

$randomrow = $rows[$random];

$level = $randomrow['caturl'];

} elseif ($_POST['submit']) {

// time to check the specified niche!
if ($level3) $level = $level3;
elseif ($level2) $level = $level2;
elseif ($level1) $level = $level1;
else { print "Please select a category"; exit; }

}

if ($_POST['submit'] or $_POST['random']) {
$caturl = $level;
// print $caturl;

// first we need the category tree and name

$sql = "SELECT category, tree from products where caturl = '$caturl' limit 1";
$result = $mysqli->query($sql);
$row = $result->fetch_assoc();
$catname = $row['category'];
$cattree = $row['tree'];
$result->close();

$hotnew_cnt = 0;
$bestseller_cnt = 0;

// look for all products over $minprice and $minreviews 
$sql = "SELECT * FROM products where tree='$cattree' and price >= $minprice and reviews >= $minreviews order by rank";

if ($result = $mysqli->query($sql)) {
   while ($row = $result->fetch_assoc()) {
      $section = $row['section'];
      if ($section == 'Best Seller') {
	$bestseller_cnt++;
	$bestsellerlist[] = $row;
	if (!$bsurl) $bsurl = $row['caturl'];
      } elseif ($section == 'Hot New Releases') {
	$hotnew_cnt++;
	$hotnewlist[] = $row;
	if (!$hturl) $hturl = $row['caturl'];
      }
   }
$result->close();
}
$cattree = preg_replace("/\|/",' | ',$cattree);

print "<h3>$catname:</h3>$cattree<br><br> \n";

// display products
        print "This category has ";
       if ($hotnew_cnt > 0) {
	  print "<b>$hotnew_cnt hot new products</b> ";
	    if ($bestseller_cnt > 0) {
		print "and <b>$bestseller_cnt best selling products</b> ";
	    }
	} elseif ($bestseller_cnt > 0)
	        print "<b>$bestseller_cnt best selling products</b> ";
	print " over \$$minprice";

	if ($minreviews > 0) print " with more than $minreviews reviews";
	if ($bestseller_cnt > 0 or $hotnew_cnt > 0)
	print "</b><br><br>Click on a product name to see it on Amazon.<br><br>\n"; 

if (!empty($hotnewlist)) {
   print "<h3><a href='$hnurl' target=_blank>Hot New Products:</a></h3>";
   print "<table class='sortable' cellpadding=10 cellspacing=2>";
   print "<tr><th>Page</td><th>Product</th><th>Price</th><th>Rating</th><th>Reviews</th></tr>";
foreach ($hotnewlist as $row) {
  $price = $row['price'];
  $title = $row['title'];
  $link = $row['link'];
  $rank = $row['rank'];
  $page = floor ($rank / 20) + 1;
  $rating = $row['rating'];
  if ($rating == 'not-given') $rating='N/A';
  $reviews = $row['reviews'];
  print "<tr><td>$page</td><td><a target=_blank href='$link'>$title</a></td><td>\$$price</td><td>$rating</td><td>$reviews</td></tr>";
}
print "</table>";
}
}

// display products

if (!empty($bestsellerlist)) {
   print "<h3><a href='$bsurl' target=_blank>Best selling Products:</a></h3>";
   print "<table class='sortable' cellpadding=10 cellspacing=2>";
   print "<tr><th>Page</td><th>Product</th><th>Price</th><th>Rating</th><th>Reviews</th></tr>";
foreach ($bestsellerlist as $row) {
  $price = $row['price'];
  $title = $row['title'];
  $link = $row['link'];
  $rank = $row['rank'];
  $page = floor ($rank / 20) + 1;
  $rating = $row['rating'];
  if ($rating == 'not-given') $rating='N/A';
  $reviews = $row['reviews'];
  print "<tr><td>$page</td><td><a target=_blank href='$link'>$title</a></td><td>\$$price</td><td>$rating</td><td>$reviews</td></tr>";
}
print "</table>";
}
?>
