<?php

	// IF VALIDATION ERROR
	if (isset($_POST["all_error_required"])){
		$output = json_encode(array('type'=>'error', 'text' => $_POST["all_error_required"][0]));
		die($output);
	}

	// IF NO ERROR
	if (isset($_POST["all_input_id"])){

		$finalmessage = "";
		foreach ($_POST["all_input_id"] as $input_id) {
			if (is_array($_POST[$input_id])){
				$finalmessage .= $_POST[$input_id."_label"]." : ".implode(", ", $_POST[$input_id]). "\n\n";
			}
			else
			{
				$finalmessage .= $_POST[$input_id."_label"]." : ". $_POST[$input_id] . "\n\n";
			}
		}
<<<<<<< HEAD
	
		$email_to  =  'tonyandamandanguyen@gmail.com'; 
		
		$headers = "From: ".$_POST["inputemail"]."\r\n";	
		$headers .= "Reply-To: ".$_POST["inputemail"]."\r\n";	
		$subject = "RSVP message from Mr/Mrs ".$_POST["inputname"];	
				
=======

		u  =  'gyau88@gmail.com';

		$headers = "From: ".$_POST["inputemail"]."\r\n";
		$headers .= "Reply-To: ".$_POST["inputemail"]."\r\n";
		$subject = "RSVP message from Mr/Mrs ".$_POST["inputname"];

>>>>>>> a58efa77765d7750a22b98e183730b06e17bc076
		if(mail($email_to, $subject, $finalmessage, $headers)){
			$output = json_encode(array('type'=>'success', 'text' => 'Message Sent'));
		}else{
			$output = json_encode(array('type'=>'error', 'text' => 'Failed'));
		}
		die($output);
	}
?>
