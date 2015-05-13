<?php

global $language;
$matches  = array();
$pattern  = "/<a href=\"(.*)\">/";
preg_match($pattern, $content, $matches); 
                    
if(!empty($matches[1]) && strstr($matches[1], "node/")){
  $content_pattern  = $matches[1];
  
  $nid  = str_replace("node/", "", $matches[1]);
  $translations = translation_node_get_translations($nid);
  if (isset($translations) && !empty($translations[$language->language])) {
    $node = node_load($translations[$language->language]->nid);
  }      
  
  if(!empty($node)){
    $pathAlias    = $language->language . '/' . drupal_get_path_alias('node/' . $node->nid, $language->language);  
  } 
  else{
    $pathAlias    = $content_pattern;
  } 
  
  
} else if(!empty($matches[1]) && strstr($matches[1], "taxonomy/term/")){
  $content_pattern  = $matches[1];
  
  $tid  = str_replace("taxonomy/term/", "", $matches[1]);
  $term = taxonomy_term_load($tid);
  if (!empty($term)) {
    $translated_term = i18n_taxonomy_term_get_translation($term, $language->language);
    if (isset($translated_term))
    {
      $term = $translated_term;
    }
    $pathAlias    =  $language->language . '/' . drupal_get_path_alias('taxonomy/term/' . $term->tid, $language->language);
  }
  else{
    $pathAlias    = $content_pattern;  
  }
}
if(!empty($pathAlias) && !empty($content_pattern)){
  $content  = str_replace($content_pattern, $pathAlias, $content);  
}
?>
<section id="<?php print $block_html_id; ?>" class="associ-banner <?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <h2<?php print $title_attributes; ?>><?php print $title; ?></h2>
  <?php endif;?>
  <?php print render($title_suffix); ?>

  <?php print $content ?>
</section> <!-- /.block -->