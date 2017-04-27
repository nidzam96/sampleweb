<!DOCTYPE html>
<html>
<head>
	<title>Change Password</title>

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
				<h2 class="page-header">Change Password</h2>
			</div>

			<div class="col-md-12">
				<form action="#" method="post">
					<div class="panel panel-primary">
						
						<div class="panel-heading">
							<span class="lead">
								<i class="fa fa-lock fa-fw"></i>
								New Password
							</span>
						</div>

						<div class="panel-body">
							<div class="col-md-12">
								
								<div class="row">								
									<div class="col-sm-6 col-sm-offset-1">
										<label>New Password</label>
										<div class="input-group">
											<span class="input-group-addon">
												<i class="fa fa-unlock fa-fw"></i>
											</span>

											<input type="password" name="new" class="form-control" placeholder="New Password">
										</div>
									</div>									
								</div>

								<br>

								<div class="row">
									<div class="col-sm-6 col-sm-offset-1">
										<label>Confirm Password</label>
										<div class="input-group">
											<span class="input-group-addon">
												<i class="fa fa-lock fa-fw"></i>
											</span>

											<input type="password" name="con-pass" class="form-control" placeholder="Confirm Password">
										</div>
									</div>
								</div>

							</div>
						</div>

						<div class="panel-footer">
							<div class="col-md-12">
								<div class="row">
									<div class="pull-right" style="margin-right: 20px;">
										<button type="submit" name="update" class="btn btn-md btn-primary">Save</button>
									</div>
								</div>
							</div>
						</div>

					</div>
				</form>
			</div>

		</div>
	</div>
</body>

    <script src="../css/jquery/dist/jquery.min.js"></script>
    <script src="../css/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../css/metisMenu.js"></script>
    <script src="../css/jsfunc.js"></script>

</html>