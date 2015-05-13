<?php

/**
 * @file
 * Main view template.
 *
 * Variables available:
 * - $classes_array: An array of classes determined in
 *   template_preprocess_views_view(). Default classes are:
 *     .view
 *     .view-[css_name]
 *     .view-id-[view_name]
 *     .view-display-id-[display_name]
 *     .view-dom-id-[dom_id]
 * - $classes: A string version of $classes_array for use in the class attribute
 * - $css_name: A css-safe version of the view name.
 * - $css_class: The user-specified classes names, if any
 * - $header: The view header
 * - $footer: The view footer
 * - $rows: The results of the view query, if any
 * - $empty: The empty text to display if the view is empty
 * - $pager: The pager next/prev links to display, if any
 * - $exposed: Exposed widget form/info to display
 * - $feed_icon: Feed icon to display, if any
 * - $more: A link to view more, if any
 *
 * @ingroup views_templates
 */
 global $language;

?>
<section id="view-news-tid-<?php print $header; ?>" class="clearfix news <?php print $classes;?> "<?php print $attributes; ?>>
  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <?php print $title; ?>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
<?php 
  if (isset($header)) {
    $term = taxonomy_term_load($header);
    $term_uri = taxonomy_term_uri($term); // get array with path
    $term_title = taxonomy_term_title($term);
    $term_path = $term_uri['path'];
  }
  else {
    watchdog('Error in view news_group', 'no taxonomy term tid for group news');
    $term_title = '';
    $term_path = '';
  }
?>
  <div class="title">
    <h3><?php print l(variable_get('lahalle_section_news_title', t('News List')),  $term_path, 
          array('html' => true)); ?>
    </h3>
    <span class="sub-title">
    <span>
    <?php print l($term_title,  $term_path, 
          array('html' => true)); ?>
    </span>
    </span>
  </div>
    
  <?php if ($rows): ?>
    <div class="view-content">
    <ul class="slide-news slidernewhomeblock-<?php print $header; ?>">
      <?php 
        print $rows; 
        $bxscript = "jQuery('.slidernewhomeblock-". $header."').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 245,
        slideMargin: 22   });";
        drupal_add_js($bxscript, array('type' => 'inline', 'scope' => 'footer', 'weight' => 5));     
      ?>
    </ul>  
    </div>
  <?php elseif ($empty): ?>
    <div class="view-empty">
      <?php print $empty; ?>
    </div>
  <?php endif; ?>
</section>