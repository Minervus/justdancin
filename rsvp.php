<?php

	// IF VALIDATION ERROR
	if (isset($_POST["all_error_required"])){
		$output = json_encode(array('type'=>'error', 'text' => $_POST["all_error_required"][0]));
		die($output);
	}

	// IF NO ERROR
	if (isset($_POST["primary"])){

		$primary_guest = $_POST["primary"];
		$final_message = " ";

		$final_message .= $primary_guest . " has RSVP'd to the Lee and Nguyen wedding!\n\n";
		$final_message .= "Primary Guest: " . $primary_guest . "\n";
		$final_message .= "Email: " . $_POST["email"] . "\n\n";

		if (isset($_POST["secondary"])) {
			$final_message .= "Secondary Guests:\n";
			foreach ($_POST["secondary"] as $guest) {
				$final_message .= "- " . $guest . "\n";
			}
		}

		$final_message .= "\n";
		$final_message .= "Message:\n";
		$final_message .= $_POST["message"];

		$email_to  =  "tonyandamandanguyen@gmail.com";
		$email_subject = "Wedding RSVP";

		$headers = "From: ".$_POST["inputemail"]."\r\n";
		$headers .= "Reply-To: ".$_POST["inputemail"]."\r\n";
		$subject = "[Lee & Nguyen] RSVP message from Mr/Mrs ".$primary_guest;

		if(mail($email_to, $subject, $final_message, $headers)){
			$output = json_encode(array('type'=>'success', 'text' => 'Message Sent'));
		} else {
			$output = json_encode(array('type'=>'error', 'text' => 'Failed'));
		}
		die($output);
	}
?>
