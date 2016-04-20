<?php require_once "header.php"; ?>
	
	<section id="slider">
		<div class="container-fluid">
			<div class="sliders">
			<div id="owl-slider" class="owl-carousel">
				<div class="img-slider"><img class="img-responsive" src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/slider.png" alt="" title=""></div>
				<div class="img-slider"><img class="img-responsive" src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/slider.png" alt="" title=""></div>
				<div class="img-slider"><img class="img-responsive" src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/slider.png" alt="" title=""></div>
			</div>
			</div>
		</div>
	</section>
	
	<section id="content">
		<div class="container">
			<div class="content-title">
				<div class="row">
					<div class="col-md-12">
						<h2 class="pull-left">Best Selling Product</h2>
						<a href="#" class="btn bg-blue pull-right">See More Product</a>
					</div>
				</div>
			</div>
			<div class="content-wrap">
				<div class="row">
					<div id="owl-product" class="owl-carousel">
					
						<?php for( $i = 0; $i <= 11; $i++){ ?>
						<div class="product">
							<p><img class="product-img img-responsive" src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/sepatu1.png" alt="" title=""></p>
							<p><a class="product-title" href="#">HERSCHEL Parker Backpaker</a></p>
							<p class="product-price">Rp. 899.000</p>
							<p><a class="btn btn-cart bg-orange" href="#">Add to Cart</a></p>
						</div>
						<?php }	?>
						
				</div>
				</div>
			</div>
			
			<div class="content-title">
				<div class="row">
					<div class="col-md-12">
						<h2 class="pull-left">Popular Product</h2>
						<a href="#" class="btn bg-blue pull-right">See More Product</a>
					</div>
				</div>
			</div>
			<div class="content-wrap">
				<div class="row">
					<div class="col-sm-3 col-md-3">
						<a href="#"><img class="product-banner img-responsive" src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/banner2.png" alt="" title=""></a>
					</div>
					
					<?php for( $i = 0; $i <= 1; $i++){ ?>
					<div class="col-sm-3 col-md-3">
						<div class="product box">
							<p><img class="product-img img-responsive" src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/sepatu1.png" alt="" title=""></p>
							<p><a class="product-title" href="#">HERSCHEL Parker Backpaker</a></p>
							<p class="product-price">Rp. 899.000</p>
							<p><a class="btn btn-cart bg-orange" href="#">Add to Cart</a></p>
						</div>
					</div>
					<?php }	?>
					
					<div class="col-sm-3 col-md-3">
						<a href="#"><img class="product-banner img-responsive" src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/banner1.png" alt="" title=""></a>
					</div>
					<div class="col-sm-12 col-md-6 text-center">
						<a href="#"><img class="product-banner img-responsive" src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/banner3.png" alt="" title=""></a>
					</div>
					
					<?php for( $i = 0; $i <= 1; $i++){ ?>
					<div class="col-sm-6 col-md-3">
						<div class="product box">
							<p><img class="product-img img-responsive" src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/sepatu1.png" alt="" title=""></p>
							<p><a class="product-title" href="#">HERSCHEL Parker Backpaker</a></p>
							<p class="product-price"><strike>Rp. 8.199.000</strike> Rp. 8.919.000 <span class="diskon">-20%</span></p>
							<p><a class="btn btn-cart bg-orange" href="#">Add to Cart</a></p>
						</div>
					</div>
					<?php }	?>
					
				</div>
			</div>
			
			<div class="content-title">
				<div class="row">
					<div class="col-md-12">
						<h2 class="pull-left">Featured Product</h2>
						<a href="#" class="btn bg-blue pull-right">See More Product</a>
					</div>
				</div>
			</div>
			<div class="content-wrap">
				<div class="row">
					<div id="owl-product-featured" class="owl-carousel">
					
						<?php for( $i = 0; $i <= 11; $i++){ ?>
						<div class="product">
							<p><img class="product-img img-responsive" src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/sepatu1.png" alt="" title=""></p>
							<p><a class="product-title" href="#">HERSCHEL Parker Backpaker</a></p>
							<p class="product-price">Rp. 899.000</p>
							<p><a class="btn btn-cart bg-orange" href="#">Add to Cart</a></p>
						</div>
						<?php }	?>
						
					</div>	
				</div>
			</div>
			
			<div class="content-title">
				<div class="row">
					<div class="col-md-12">
						<h2 class="pull-left">Brands</h2>
						<a href="#" class="btn bg-blue pull-right">See More Product</a>
					</div>
				</div>
			</div>
			<div class="brands">
				<div class="row">
					<div id="owl-brands" class="owl-carousel text-center">
						<div class="item-brand"><img src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/nike.png" alt="" title=""></div>
						<div class="item-brand"><img src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/newbalance.png" alt="" title=""></div>
						<div class="item-brand"><img src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/oxone.png" alt="" title=""></div>
						<div class="item-brand"><img src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/enfa.png" alt="" title=""></div>
						<div class="item-brand"><img src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/canon.png" alt="" title=""></div>
						<div class="item-brand"><img src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/morinaga.png" alt="" title=""></div>
						<div class="item-brand"><img src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/sony.png" alt="" title=""></div>
						<div class="item-brand"><img src="<?php $_SERVER['HTTP_HOST']; ?>/balon/assets/img/apple.png" alt="" title=""></div>
					</div>
				</div>
			</div>
			
		</div>
	</section>
<?php require_once "footer.php"; ?>	
	