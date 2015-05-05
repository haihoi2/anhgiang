<?php 
	$theme_path = drupal_get_path('theme', 'responsive');  
?>

<ul id="menu">
        <li class="active"><a href="#">Trang chủ</a></li>
        <li ><a href="gioithieu.html">Giới thiệu</a></li>																																					
        <li><a href="#">Dự án</a></li>		
        <li><a href="#">Sản phẩm</a></li>
        <li><a href="#">Dịch vụ</a></li>
        <li><a href="#">Năng lực</a></li>
        <li><a href="#">Tuyển dụng</a></li>
        <li><a href="#">Tin tức</a></li>
        <li><a href="#">Liên hệ</a></li>
    </ul>

	<div class="header">
    	<div class="logo">
            <div class="container container-small">
                <div class="col-md-8 col-sm-12">
                    <img src="/<?php print $theme_path; ?>/images/logo-anhgiang.jpg"  />
                </div>
            </div>
		</div>
        
		<div class="menu hidden-sm hidden-xs">
            <div class="container container-small menu_text">
                <a href="#" class="active" >Trang chủ</a>
                <a href="gioithieu.html"  >Giới thiệu</a>
                <a href="du-an.html"  >Dự án</a>
                <a href="san-pham.html"  >Sản phẩm</a>
                <a href="dich-vu.html"  >Dịch vụ</a>
                <a href="nang-luc.html"  >Năng lực</a>
                <a href="tuyen-dung.html"  >Tuyển dụng</a>
                <a href="tin-tuc.html"  >Tin tức</a> 
                <a href="lien-he.html"  >Liên hệ</a> 
            </div>
		</div>

        <!-- start slideshow -->
        
        <div class="banner">
                <?php echo render($page['banner']); ?>
                
        </div>
        
        <!-- stop slideshow -->

		<div class="container container-small" style="clear:both;height:300px">
		</div>

        <div class="container container-small" style="height:31px;background-color:#830009">
            <div id="date_time">
				<?php echo date("l, F d, Y h:i" ,time()); ?>
            </div>
    
        	<div class="lang">            	
            	<span style="float:left;">Chọn ngôn ngữ</span>
                <?php echo render($page['lang']); ?>               
            </div>
        
		</div>
	</div><!----header--->
    
    <div class="container container-small main-content" >
    	<div class="title"><h1>Trang chủ</h1></div>
		
        	<?php echo render($page['content']); ?>

		<div class="title"></div>
       	<div class="footer">       	
            	2014 © Bản quyền thuộc về Công ty Anh Giang.
        </div>
     </div>   

	<div id='bttop'>
    	<img src="/<?php print $theme_path; ?>/images/icon_top.png" onmouseout="src='/<?php print $theme_path; ?>/images/icon_top.png'" onmouseover="src='/<?php print $theme_path; ?>/images/icon_top_over.png'"/>
    </div>
	
        <!-- JavaScripts -->
       
       <script type='text/javascript'>
		$(function(){$(window).scroll(
			function(){if($(this).scrollTop()!=0){
							$('#bttop').fadeIn();}
						else{$('#bttop').fadeOut();}});
			$('#bttop').click(function(){$('body,html').animate({scrollTop:0},800);});});
		 </script>
		<script>
			$(function(){
				$('#menu').slicknav();
			});
		</script>