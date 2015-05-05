<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>

<?php foreach ($rows as $id => $row): ?>
  <li class="ui-widget-content ui-corner-tr block">
    <?php print $row; ?>
  </li>
<?php endforeach; ?>