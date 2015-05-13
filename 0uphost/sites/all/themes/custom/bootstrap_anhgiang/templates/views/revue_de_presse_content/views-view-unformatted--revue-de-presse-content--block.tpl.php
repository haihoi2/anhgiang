<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div class="block-magazine block-magazin-none-highlight">
<div class="container-fluid block">
<div class="row">
<?php foreach ($rows as $id => $row): ?>
  
    <?php print $row; ?>
<?php endforeach; ?>
</div>
</div>
</div>