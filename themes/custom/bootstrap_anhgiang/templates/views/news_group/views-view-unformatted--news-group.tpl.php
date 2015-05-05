<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
            
<?php $rindex = 1; ?>
<?php foreach ($rows as $id => $row): ?>
  <li class="<?php echo ($rindex == 2 ? ' theme-black' : ''); ?>">
    <?php print $row; ?>
  </li>
  <?php $rindex++; ?>
  <?php if ($rindex == 4) { $rindex = 1; } ?>
<?php endforeach; ?>
<?php if (count($rows) < 3): ?>
<?php for ($j=count($rows); $j<3; $j++): ?>
  <li class="blank">
    &nbsp;
  </li>
<?php endfor; ?>
<?php endif; ?>