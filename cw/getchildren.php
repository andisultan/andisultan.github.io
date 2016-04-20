<?php

include 'db.inc';
include 'categories.inc';

// $parent= $mysqli->real_escape_string($_GET[parent]);
$parent = urldecode($_GET[parent]);

if ($parent) {
$sql = "SELECT distinct category, caturl from products where parent='$parent'";

if ($result = $mysqli->query($sql)) {
while ($row = $result->fetch_assoc()) {
   $rows[] = $row;
} 
$result->close();
}

if (!empty($rows)) {
print '<option selected value="">Please Select</option>';
foreach ($rows as $row) {
   $name = $row['category'];
   $url = $row['caturl'];
   $urlenc = urlencode($url);
   print "<option value='$urlenc'>$name</option>\n";
}
} else print '<option selected value=""></option>';
} else print '<option selected value=""></option>';

?>

