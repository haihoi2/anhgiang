<div class="footer-menu-wrapper <?php print $classes; ?>">
  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>
  <?php endif;?>
  <?php print render($title_suffix); ?>
  <div class="inline">
    <?php print $content ?>   
  </div>
</div>