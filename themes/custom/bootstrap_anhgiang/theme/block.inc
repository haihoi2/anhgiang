<?php
/**
 * Implements hook_preprocess_block().
 */
function bootstrap_lahalle_preprocess_block(&$variables) {
  global $language;  
  if ($variables['block_html_id'] == 'block-menu-block-1') {
    // add class to left navigation
    $variables['classes_array'][] = 'navigation';
  } 
  elseif ($variables['block_html_id'] == 'block-views-feeds-defaults-feed-items-block') {
    // get LH Magazine URL
    $options = array('language' => $language, 'default' => t('http://www.lahalle.com/lh-magazine/'));
    $variables['lh_magazine_url'] = variable_get_value('lahalle_lh_magazine_url', $options); 
  } 
  elseif ($variables['block_html_id'] == 'block-views-9312e1df91d6b16dae74a6a04362f67e') {
    // get shorcut block title
    $block_title = variable_get('lahalle_core_shortcut_block_title', 'Mes raccourcis');
    $variables['block_title'] = $block_title; 
  }
  elseif ($variables['block_html_id'] == 'block-lahalle-authorization-shortcut-profile') {
    // get shorcut block title
    $block_title = variable_get('lahalle_core_shortcut_block_title', 'Mes raccourcis');
    $variables['block_title'] = $block_title; 
  }
}
