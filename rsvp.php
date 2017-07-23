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

		$final_message1 .= "\n";
		$final_message1 .= "Message:\n";
		$final_message1 .= $_POST["message"];

		$email_to1  =  "tonyandamandanguyen@gmail.com";
		$email_subject1 = "Wedding RSVP";

		$headers1 = "From: NewLeeNguyens.com (" . $_POST["email"] . ")\r\n";
		$headers1 .= "Reply-To: " . $_POST["email"] . "\r\n";
		$subject1 = "[Lee & Nguyen] RSVP message from Mr/Mrs " . $primary_guest;


		$final_message2 .= "\n";
		$final_message2.= "Message:\n";
		$final_message2 .= $_POST["message"];

		$email_to2  =  $_POST["email"];
		$email_subject2 = "Thanks for your RSVP!";

		$headers2 = "From: NewLeeNguyens.com (" . "tonyandamandanguyen@gmail.com" . ")\r\n";
		$headers2 .= "Reply-To: " . "tonyandamandanguyen@gmail.com" . "\r\n";
		$subject2 = "[Lee & Nguyen] RSVP message from Mr/Mrs " . "Tony and Amanda"

		if(mail($email_to1, $subject1, $final_message1, $headers1, $email_to2, $subject2, $final_message2, $headers2)){
			$output = json_encode(array('type'=>'success', 'text' => 'Message Sent'));
		} else {
			$output = json_encode(array('type'=>'error', 'text' => 'Failed'));
		}
		die($output);
	}
?>
