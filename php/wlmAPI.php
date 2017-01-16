<?php

// get the HTTP method, path and body of the request
$method = $_SERVER;
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

//echo print_r($method) . '<br>';
//echo print_r($request). '<br>';
//echo print_r($input). '<br>';

include('/usr/lib/cgi-bin/dev/robert/includes/config_PDO.php');

try {
  $dbh = new PDO(ARIA_DB, ARIA_USERNAME, ARIA_PASSWORD);
} catch (PDOException $e){
  print "Error! Could not connect to ARIA: " . $e->getMessage();
  die();
}

//echo "DB connected!";

include 'wlmPatientModel.php';
$pID = $request[1];
$patient = new Patient($dbh,$pID);

//print_r(array_shift($request));
//echo $pID;

echo json_encode($patient->selectFunction(array_shift($request),$request));

//check which function is required switch/case?
/*switch ($request[0]) {
	case 'patients':
		echo json_encode($patient->getAllPatients());
		break;
	case 'patient':
		echo json_encode($patient->getPatient($pID));
		break;
	default:
		# code...
		break;
}*/

$dbh = null;

?>