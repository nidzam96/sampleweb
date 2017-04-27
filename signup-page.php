<!DOCTYPE html>
<html>
<head>

	<title>HR Sign Up</title>

	<meta charset="utf-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1">

  	<link rel="stylesheet" href="css/bootstrap/dist/css/bootstrap-theme.min.css">
  	<link rel="stylesheet" href="css/bootstrap/dist/css/bootstrap.min.css">
  	<link rel="stylesheet" href="css/fa/css/font-awesome.min.css">
  	<link rel="stylesheet" href="css/signup-style.css">

</head>
<body>


	<div class="container">
		<h1>Sign Up</h1>

		<form action="saveuser.php" method="post">
			<fieldset>
				<label>Name</label><br>
				<input class="form-control" type="text" name="name" placeholder="Your Name">
			</fieldset>
			<fieldset>
				<label>Identification Card</label><br>
				<input class="form-control" type="text" name="ic" placeholder="Your IC">
			</fieldset>
			<fieldset>
				<label>Email</label><br>
				<input class="form-control" type="email" name="email" placeholder="Your Email">
			</fieldset>
			<fieldset>
				<label>Password</label><br>
				<input class="form-control" type="password" name="password" placeholder="Your Password">
			</fieldset>

			<button name="submit" type="submit" class="btn btn-primary btn-block">
				Submit
			</button>

			<a href="index.php" type="button" class="btn btn-warning btn-block">Back</a>
		</form>
	</div>


</body>

	<script src="css/jquery/dist/jquery.min.js"></script>
    <script src="css/bootstrap/dist/js/bootstrap.min.js"></script>

</html>