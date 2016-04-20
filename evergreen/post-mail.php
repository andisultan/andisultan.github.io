<?php
if(!empty($_POST['submit'])){

	if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])){
	
		$to_email 		= "andi@calibreworks.co.id";
		$subject 	= $_POST['subject'];
		$email 		= $_POST['email'];
		$subject 	= $_POST['subject'];
		$name 		= $_POST['name'];
		$message 	= $_POST['message'];
		
		$message = '
			<table cellspacing="0" style="font-size:12px;line-height:135%;border-bottom:1px solid #dddddd">
			<tbody>
				<tr style="background-color:#eeeeee">
					<th valign="top" style="text-align:left;color:#444444;padding:7px 9px;border-top:1px solid #dddddd">Name</th>
					<td valign="top" style="text-align:left;color:#444444;padding:7px 9px;border-top:1px solid #dddddd;min-width: 350px;">$name</td>
				</tr>
				<tr style="background-color:#eeeeee">
					<th valign="top" style="text-align:left;color:#444444;padding:7px 9px;border-top:1px solid #dddddd">Email</th>
					<td valign="top" style="text-align:left;color:#444444;padding:7px 9px;border-top:1px solid #dddddd;min-width: 350px;">$email</td>
				</tr>

				<tr style="">
					<th valign="top" style="text-align:left;color:#444444;padding:7px 9px;border-top:1px solid #dddddd">Subject</th>
					<td valign="top" style="text-align:left;color:#444444;padding:7px 9px;border-top:1px solid #dddddd;min-width: 350px;">$subject</td>
				</tr>
				
				<tr style="background-color:#eeeeee">
					<th valign="top" style="text-align:left;color:#444444;padding:7px 9px;border-top:1px solid #dddddd">Message</th>
					<td valign="top" style="text-align:left;color:#444444;padding:7px 9px;border-top:1px solid #dddddd;min-width: 350px;">$message</td>
				</tr>
			</tbody>
			</table>';
		
		$subject = "terimakasih telah mendaftar  from $name";
		// To send HTML mail, the Content-type header must be set
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

		// Additional headers
		$headers .= 'To: ihsan <'.$to_email.'>' . "\r\n";
		$headers .= 'From: '.$name . ' <'.$email.'>' . "\r\n";
		mail($to_email, $subject, $message, $headers);
	}
}

/* Redirect browser */
header("Location: http://calibre-projects.info/testsend/index.php?submitted=1");
/* Make sure that code below does not get executed when we redirect. */
exit;

?>

