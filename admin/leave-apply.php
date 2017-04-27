<!DOCTYPE html>
<html>
<head>
	<title>Apply Leave</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="../css/bootstrap/dist/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="../css/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="../css/fa/css/font-awesome.min.css">
	<link rel="stylesheet" href="../css/main.css">
</head>
<body>

	<div>
		<nav class="navbar navbar-default navbar-static-top">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only"></span>
		         	<span class="icon-bar"></span>
		         	<span class="icon-bar"></span>
		          	<span class="icon-bar"></span>
		        </button>

        
          		<a class="navbar-brand" href="admin-page.php"><img src="/sampleweb/images/nazrol.png" alt="nazrol" class="small"></a>
			</div>

			<ul class="nav navbar-top-links navbar-right">
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">
						Welcome HR
						<i class="fa fa-user fa-fw"></i>
						<i class="fa fa-caret-down"></i>
					</a>

					<ul class="dropdown-menu dropdown-messages">
						<li>
							<a href="profile.php">
							<i class="fa fa-user fa-fw"></i>
							My Profile
							</a>
						</li>
						<li>
							<a href="password.php">
							<i class="fa fa-lock fa-fw"></i>
							Change Password
							</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#">
							<i class="fa fa-sign-out fa-fw"></i>
							Logout
							</a>
						</li>
					</ul>
				</li>
			</ul>

			<div class="navbar-default sidebar" role="navigation">
				<div class="sidebar-nav navbar-collapse">
					<ul id="sidemenu" class="nav in">
						<li>
							<a href="admin-page.php">
								<i class="fa fa-dashboard fa-fw"></i>
								Home
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fa fa-calendar fa-fw"></i>
								Apply Leave
								<span class="fa arrow"></span>
							</a>

							<ul class="nav nav-second-level navbar-collapse">
								<li>
									<a href="leave-record.php">
										<i class="fa fa-book fa-fw"></i>
										Records
									</a>
								</li>
								<li>
									<a href="leave-apply.php">
										<i class="fa fa-calendar fa-fw"></i>
										Apply
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="employee-page.php">
								<i class="fa fa-users fa-fw"></i>
								Employees
							</a>
						</li>
						<li>
							<a href="birthday-page.php">
								<i class="fa fa-gift fa-fw"></i>
								Birthday
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>

	<div id="page-wrapper">
		<div class="row">
			<div class="col-lg-12">
				<h2 class="page-header">Apply Leave</h2>
			</div>

			<div class="col-md-12">
				<div class="panel panel-primary">
					
					<div class="panel-heading">
						<span class="lead">
							<i class="fa fa-book fa-fw"></i>
							Apply Form
						</span>
					</div>

					<div class="panel-body">
						<div class="panel-body">
							<form action="#" method="post" id="leave-form">
								
								<div class="row">
									<div class="col-md-12">
										<div class="row">
											
											<div class="col-md-6">
												<fieldset>
													<legend>Name</legend>
													<input type="text" name="name" class="form-control" placeholder="Name">
												</fieldset>
											</div>

											<div class="col-md-6">
												<fieldset>
													<legend>IC</legend>
													<input type="text" name="ic" class="form-control" placeholder="Identification Card">
												</fieldset>
											</div>

										</div>
									</div>
								</div>

								<br>

								<div class="row">
									<div class="col-md-12">
										<div class="row">	

											<div class="col-md-6">
												<fieldset>
													<legend>Branch</legend>
													<select name="state" class="form-control">
														<option value="HQ" selected="selected">Kota Bharu</option>
														<option value="Ara">Damansara</option>
													</select>
												</fieldset>
											</div>

											<div class="col-md-6">
												<fieldset>
													<legend>Designation</legend>
													<input type="text" name="position" class="form-control" placeholder="Designation">
												</fieldset>
											</div>
										</div>
									</div>
								</div>

								<br>

								<div class="row">
									<div class="col-md-12">
										<div class="row">
											
											<div class="col-md-6">
												<fieldset>
													<legend>From</legend>
													<input type="date" name="dateF" class="form-control" style="width: 260px">
												</fieldset>
											</div>

											<div class="col-md-6">
												<fieldset>
													<legend>Until</legend>
													<input type="date" name="dateU" class="form-control" style="width: 260px">
												</fieldset>
											</div>
										</div>
									</div>	
								</div>

								<br>

								<div class="row">
									<div class="col-md-12">
										<div class="row">

											<div class="col-md-6">
												<fieldset>
													<legend>Type of Absence</legend>
														<input type="radio" name="AbsType" id="AbsType" class="radio-type" value="annual">Annual Leave <br><br>
														<input type="radio" name="AbsType" id="AbsType" class="radio-type" value="sick">Sick Leave <br><br>
														<input type="radio" name="AbsType" id="AbsType" class="radio-type" value="timeoff">Time Off <br><br>
														<input type="radio" name="AbsType" id="AbsType" class="radio-type" value="marriage">Marriage Leave <br><br>
														<input type="radio" name="AbsType" id="AbsType" class="radio-type" value="maternity">Maternity/Paternity Leave <br><br>
														<input type="radio" name="AbsType" id="others" class="radio-type">Others
														<input type="text" name="specify" id="specify" class="form-control" style="width: 250px; visibility: hidden"  placeholder="Specify">
												</fieldset>
											</div>

											<div class="col-md-6">
												<fieldset>
													<legend>Reason</legend>
													<input type="textarea" name="comment" class="form-control" placeholder="Type Your Reason Here..." style="height: 215px">
												</fieldset>
											</div>								
										</div>
									</div>
								</div>	

								<br>

								<div class="row">
									<div class="col-md-6 col-md-offset-5">
										<button type="submit" name="submit" class="btn btn-md btn-primary">Submit</button>
										<button type="reset" id="btnreset" class="btn btn-md btn-reset">Reset</button>
									</div>
								</div>

							</form>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>

</body>

    <script src="../css/jquery/dist/jquery.min.js"></script>
    <script src="../css/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../css/metisMenu.js"></script>
    <script src="../css/jsfunc.js"></script>

    <script type="text/javascript">
		$(document).ready(function (){


			$('.radio-type').on('click', function (){
				// body...
				if (this.id == 'others'){
					// var x=document.getElementById('specify');
					// x.style.visibility = "visible";
					$('#specify').css('visibility','visible');
				}
				else{
					$('#specify').css('visibility','hidden');					
				}


			});

			$('#btnreset').on('click', function() {
				var f=document.getElementById('leave-form');
				f.reset();
				// document.form.newform.reset();
				$('#specify').css('visibility','hidden');
			});
		}); 
	</script>

</html>