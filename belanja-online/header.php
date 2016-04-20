<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Belanja Online</title>

	<link href='http://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
	<link href="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/css/jquery-ui.css" rel="stylesheet">
	<link href="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/css/font-awesome.min.css" rel="stylesheet">
	<link href="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/css/animate.css" rel="stylesheet">
	<link href="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/css/owl.carousel.css" rel="stylesheet">
	<link href="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/css/owl.theme.css" rel="stylesheet">
	<link href="<?php $_SERVER['HTTP_HOST']; ?>/balon/styles.css" rel="stylesheet">
	
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/balon5shiv/3.7.0/balon5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body id="top">
	<header class="bg-dark-blue">
		<div class="container">
			<div class="header-menu">
				<div class="row">
					<div class="col-md-12">
						<ul class="pull-left">
							<li><a href="tel:+021345678"><i class="icon-telp"></i> <strong>(021) 345 678</strong></a></li>
							<li><a href="#">Gratis Pengiriman</a></li>
							<li><a href="#">Bayar di Tempat</a</li>
							<li><a href="#">Tracking</a></li>
							<li><a href="#">Konfirmasi Pembayaran</a></li>
						</ul>
						<ul class="pull-right">
							<li><a href="#">Register</a></li>
							<li><a href="#">Login</a></li>
							<li><a href="#"><i class="icon-help"></i> Help</a></li>
						</ul>
					</div>
				</div>
			</div>			
			<div class="logo-search-cart">
				<div class="row">
					<div class="col-md-3">
						<div class="logo">
							<h1><a href="<?php $_SERVER['HTTP_HOST']; ?>/balon"><img src="assets/img/logo.png" title="Belanja Online" alt="belanja online"></a></h1>
						</div>
					</div>
					<div class="col-md-7">
						<div class="search">
							<form action="" method="">
								<select name="kategori">
									<option value="1">All Categories</option>
									<option value="1">Komputer</option>
									<option value="1">Assesoris</option>
									<option value="1">Pakaian</option>
								</select>
								<input type="text" name="keyword" placeholder="Search">								
								<button type="button"><i class="fa fa-search"></i></button>
							</form>
						</div>
					</div>
					<div class="col-md-2">
						<div class="cart">
							<div class="sign">
								<ul class="sign-menu">
									<li>Hello, Sign In</li><br>
									<li class="sign-submenu"><a href="#"><strong>My Account <i class="fa fa-angle-down"></i></strong></a>
										<ul>
											<li><a href="#">Register</a></li>
											<li><a href="#">Login</a></li>
										</ul>
									</li>
								</ul>
							</div>
							<a href="#" title="Shopping Cart">
								<div class="shopping-cart">
									<span class="cart-count">0</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</header>
	
	<nav id="main-nav">
		<div class="container">
			<ul class="main-menu">
				<li><a href="#">Semua Kategori <i class="fa fa-angle-down"></i></a>
					<ul class="sub-menu">
						<li><a href="#">Toys</a>								
							<div class="mega-menu">
								<h5>Clothing, Shoes & Jawelry</h5>
								<ul>
									<li><a href="#">Woman Fashions</a></li>
									<li><a href="#">Woman Fashions</a></li>
									<li><a href="#">Men Fashions</a></li>
									<li><a href="#">Men Fashions</a></li>
									<li><a href="#">Girls Fashions</a></li>
									<li><a href="#">Girls Fashions</a></li>
									<li><a href="#">Boys</a></li>
									<li><a href="#">Boys</a></li>
									<li><a href="#">Baby</a></li>
								</ul>
								<img src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/img-menu.png" alt="" title="" >
								<div class="mega-link">
									<h4><small>INTRODUCING</small><br>SMALL FASHION</h4>
									<a class="btn bg-orange btn-cart" href="#">Add to Cart</a>
								</div>
							</div>								
						</li>
						<li><a href="#">Pashions</a></li>
						<li><a href="#">Jawelry</a></li>
						<li><a href="#">Home Applient</a></li>
						<li><a href="#">Shoes</a></li>
						<li><a href="#">Baby Toys</a></li>
						<li><a href="#">Baby Stufs</a></li>
						<li><a href="#">Watch</a></li>
						<li><a href="#">Bags</a></li>
						<li><a href="#">Toys</a>								
							<div class="mega-menu">
								<h5>Clothing, Shoes & Jawelry</h5>
								<ul>
									<li><a href="#">Woman Fashions</a></li>
									<li><a href="#">Woman Fashions</a></li>
									<li><a href="#">Men Fashions</a></li>
									<li><a href="#">Men Fashions</a></li>
									<li><a href="#">Girls Fashions</a></li>
									<li><a href="#">Girls Fashions</a></li>
									<li><a href="#">Boys</a></li>
									<li><a href="#">Boys</a></li>
									<li><a href="#">Baby</a></li>
								</ul>
								<img src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/img-menu.png" alt="" title="" >
								<div class="mega-link">
									<h4><small>INTRODUCING</small><br>SMALL FASHION</h4>
									<a class="btn bg-orange btn-cart" href="#">Add to Cart</a>
								</div>
							</div>								
						</li>
					</ul>					
				</li>
				<li><a href="#">Special Promo</a></li>
				<li><a href="#">Brands</a></li>
			</ul>
		</div>
	</nav>