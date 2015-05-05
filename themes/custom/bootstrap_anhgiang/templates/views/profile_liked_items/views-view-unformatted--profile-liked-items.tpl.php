<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<li>
<?php if (!empty($title)): ?>
  <h3><?php print $title . ' (' . count($rows). ')'; ?></h3>
<?php endif; ?>  
<ul class="sub">
<?php foreach ($rows as $id => $row): ?>
  <li<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
    <?php print $row; ?>
  </li>
<?php endforeach; ?>
</ul>
</li>