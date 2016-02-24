<?php


$username = "root";
$password = "root";
$hostname = "localhost"; 

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password)
  or die("Unable to connect to MySQL");
//echo "Connected to MySQL<br>";

$selected = mysql_select_db("phpgang",$dbhandle)
  or die("Could not select");



$objectPost = json_decode($HTTP_RAW_POST_DATA);
if(!empty($objectPost)){
    
    $inserted = mysql_query("INSERT INTO `phpgang`.`rules` (`ruleName`) VALUES ("."'".$objectPost->newRule."'".")");
    
}

$result = mysql_query("SELECT id, ruleName FROM rules");

while ($row = mysql_fetch_array($result)) {
    
    $rows[] = $row;
}
echo json_encode($rows);


mysql_close($dbhandle);
?>