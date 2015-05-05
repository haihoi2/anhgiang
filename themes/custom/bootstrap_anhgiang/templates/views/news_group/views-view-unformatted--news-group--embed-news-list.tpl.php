<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
 $rindex = 1;
 $gindex = 1;                                
 $aindex  = 1;                             
?>
<ul class="slide-news slidergroup nine-item clearfix"> 
  <?php foreach ($rows as $id => $row): ?>
    <?php if ($gindex == 1): ?>
    <li>
      <div class="groupe clearfix">
    <?php endif; ?>
    
      <?php if ($rindex == 1): ?>
        <div class="row">
      <?php endif; ?>
          
          <?php $classes_array[$id] .= ' item' . ($rindex == 2 ? ' theme-black' : ''); ?>
          <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
              <?php print $row; ?>
          </div>                                          
      <?php if (($rindex % 3) == 0 || $aindex == count($rows)): $rindex = 0; ?>   
        </div>
      <?php endif; ?>
    
    <?php $gindex++; ?>                           
    <?php if ($gindex == 10 || $aindex == count($rows)): $gindex = 1; $rindex = 0; ?>   
      </div>
    </li>
    <?php endif; ?>
    <?php $rindex++; ?>
    <?php $aindex++; ?>
  <?php endforeach; ?> 
</ul>