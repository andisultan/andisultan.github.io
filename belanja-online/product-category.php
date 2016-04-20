<?php require_once "header.php"; ?>
		
	<section id="content">
		<div class="container">
			<div class="content-title">
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumbs">
							<li><a href="#">Home</a><i class="fa fa-angle-right"></i></li>
							<li><a href="#">Product Category</a><i class="fa fa-angle-right"></i></li>
							<li><a href="#">Product Detail</a></li>
						</ul>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-3 col-md-3">  <!-- sidebar  -->
					<div class="sidebar">
						<div class="content-title">
							<div class="row">
								<div class="col-md-12">
									<h2 class="pull-left">Shop By Category</h2>									
								</div>
							</div>
						</div>					
						<div class="content-wrap">	
							<div class="row">
								<ul>
									<?php for( $i = 0; $i <= 3; $i++){ ?>
									<li><a href="#">Toys</a></li>									
									<li><a href="#">Fashion</a></li>
									<li><a href="#">Jawerly</a></li>
									<?php } ?>
								</ul>
							</div>
						</div>
						
						<div class="content-title"> <!-- Brand -->
							<div class="row">
								<div class="col-md-12">
									<h2 class="pull-left">Shop By Brand</h2>									
								</div>
							</div>
						</div>		
						<div class="content-wrap">
							<div class="row">
								<div class="col-lg-12">
									<div class="input-group">
										<input type="text" class="form-control" placeholder="Search for...">
										<span class="input-group-btn">
										<button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
									</span>
									</div><!-- /input-group -->
								</div><!-- /.col-lg-6 -->
								<div class="col-md-12">
									<div class="overflow">
										<?php for( $i = 0; $i <= 13; $i++){ ?>										
										<p><label><input type="radio" name="brand">Toys</label></p>
										<p><label><input type="radio" name="brand">Toys</label></p>
										<p><label><input type="radio" name="brand">Toys</label></p>
										<?php } ?>
									</div>	
								</div>
							</div>
						</div>	<!-- end brand -->
						<div class="content-title"> <!-- Prize -->
							<div class="row">
								<div class="col-md-12">
									<h2 class="pull-left">Shop By Prize</h2>									
								</div>
							</div>
						</div>		
						<div class="content-wrap">
							<div class="row">
								<div class="col-md-12">
									<div class="well">
										Filter by price interval: <b>€ 10</b> <input id="ex2" type="text" class="span2" value="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[250,450]"/> <b>€ 1000</b>
									</div>
									<script type="text/javascript">
									$("#ex2").slider({});
									</script>
								</div>
							</div>
						</div>	<!-- end brand -->
						
						<div class="content-title"> <!-- Size -->
							<div class="row">
								<div class="col-md-12">
									<h2 class="pull-left">Shop By Size</h2>									
								</div>
							</div>
						</div>		
						<div class="content-wrap">
							<div class="row">
								<div class="col-md-12">
										<?php for( $i = 0; $i <= 4; $i++){ ?>										
										<p><label><input type="radio" name="brand">Toys</label></p>
										<?php } ?>
								</div>
							</div>
						</div>	<!-- end Size -->
					</div>
				</div>
				
				<div class="col-sm-9 col-md-9">
					<div class="content-title">
						<div class="row">
							<div class="col-md-12">
								<h2 class="pull-left">Category Product Title</h2>									
							</div>
						</div>
					</div>
					<div class="content-filter">
						<div class="row">
							<div class="col-sm-2 col-md-2">
								<h3>Short by</h3>
							</div>
							<div class="col-sm-10 col-md-10">										
								<!-- Split button -->
								<div class="btn-group">
								  <button type="button" class="btn">New Arrival</button>
								  <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">										
									<span class="fa fa-angle-down"></span>
								  </button>
								  <ul class="dropdown-menu" role="menu">
									<li><a href="#">Action</a></li>
									<li><a href="#">Another action</a></li>
									<li><a href="#">Something else here</a></li>
									<li class="divider"></li>
									<li><a href="#">Separated link</a></li>
								  </ul>
								</div>
							</div>
						</div>
					</div>
					<div class="content-wrap">
						<div class="row">						
							<?php for( $i = 0; $i <= 15; $i++){ ?>
							<div class="col-sm-6 col-md-3">
								<div class="product">
									<p><img class="product-img" src="<?php $_SERVER['HTTP_HOST']; ?>/html/assets/img/sepatu1.png" alt="" title=""></p>
									<p><a class="product-title" href="#">HERSCHEL Parker Backpaker</a></p>
									<p class="product-price">Rp. 899.000</p>
									<p><a class="btn btn-cart bg-orange" href="#">Add to Cart</a></p>
								</div>
							</div>
							<?php }	?>
						</div>
						<div class="pagination">
							<div class="row">
								<div class="col-md-12">
									<ul>
										<li><a href="#"><i class="fa fa-angle-left"></i></a></li>
										<li><a href="#">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">5</a></li>
										<li><a href="#"><i class="fa fa-angle-right"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>			
			
		</div>
	</section>
<?php require_once "footer.php"; ?>	
	