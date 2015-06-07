

<?php 
	$theme_path = drupal_get_path('theme', 'bootstrap_anhgiang'); 
	//$detect = mobile_detect_get_object();
	//$is_mobile = $detect->isMobile();
	//$is_tablet = $detect->isTablet();
?>

<?php 
	$flag = '';
	$du_an = '';
	$tieu_de = '';
	$ngay_gui = '';	
	$nguoi_gui = '';
?>

<?php $iRow =0;?>


<?php foreach ($rows as $count => $row): ?>
	<?php $iField=0;?>
    <?php foreach ($row as $field => $content): ?>
        <?php 
        if($iField == 0)
        {
        	$flag = $content; 
        }
        if($iField == 1)
        {
       		$du_an = $content; 
        }
        if($iField == 2)
        {
        	$tieu_de = $content; 
        }
        if($iField == 3)
        {
        	$ngay_gui = $content; 
        }
        if($iField == 4)
        {
        	$nguoi_gui = $content; 
        }
        $iField ++;
        ?>               
    <?php endforeach; ?>
	
    	<div class="note_alert panel panel-default">
    		<div class="panel-heading">
                 <h3 class="panel-title">
                 	<?php if($flag==1){
					?>
						<img src="/<?php print $theme_path; ?>/images/note-read.png" style="width: 5%;"/>
					<?php } ?>
				 	
					<?php if($flag==0){
					?>
						<img src="/<?php print $theme_path; ?>/images/note-unread.png" style="width: 5%;"/>
					<?php } ?>
                    
				 	<?php print $tieu_de; ?>
                 </h3>
            </div>
            <div class="panel-body">
            	
                <div class="note_alert_user">
                   <?php print $nguoi_gui; ?>
                </div>
                <div class="note_alert_date">
                   <?php print $ngay_gui; ?>
                </div>
                <div class="note_alert_duan">
                   <?php print 'Dự án: ' . $du_an; ?>
                </div>
            </div>
            
     	</div>
    <?php $iRow ++;?>
   
<?php endforeach; ?>
<div class="clearone"></div>