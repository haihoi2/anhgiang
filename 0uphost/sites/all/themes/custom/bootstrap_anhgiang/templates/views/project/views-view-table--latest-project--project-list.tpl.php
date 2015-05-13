<?php

/**
 * @file
 * Template to display a view as a table.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $header: An array of header labels keyed by field id.
 * - $caption: The caption for this table. May be empty.
 * - $header_classes: An array of header classes keyed by field id.
 * - $fields: An array of CSS IDs to use for each field id.
 * - $classes: A class or classes to apply to the table, based on settings.
 * - $row_classes: An array of classes to apply to each row, indexed by row
 *   number. This matches the index in $rows.
 * - $rows: An array of row items. Each row is an array of content.
 *   $rows are keyed by row number, fields within rows are keyed by field ID.
 * - $field_classes: An array of classes to apply to each field, indexed by
 *   field id, then row number. This matches the index in $rows.
 * @ingroup views_templates
 */
?>
<?php 
	$theme_path = drupal_get_path('theme', 'responsive');
	$Pic = '';
	$Title = '';
	?>
		
<div class="row">            
<?php $iRow =0;?>
<?php foreach ($rows as $count => $row): ?>
      
            <?php $iField=0;?>
		<?php foreach ($row as $field => $content): ?>
                <?php 
				
				
                if($iField == 0)
                {
                $Pic = $content; 
                }
                if($iField == 1)
                {
                $Title = $content; 
                }
                
				$iField ++;
                ?> 
              
        <?php endforeach; ?>
        <div class="col-md-6 col-sm-6 col-xs-12 post-grid">
            <div class="post-thumb">
                <?php print $Pic; ?>
            </div> <!-- /.post-thumb -->
            <div class="post-content">
                <h4 class="post-title"><?php print $Title; ?></h4>
            </div> <!-- /.post-content -->
        </div>
        
        <?php $iRow ++;?>
<?php endforeach; ?>
</div>
