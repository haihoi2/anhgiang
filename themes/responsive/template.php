<?php

/**
 * Preprocess variables for all terms
 */
function responsive_preprocess_taxonomy_term(&$vars) {
  if (!empty($vars['field_term_template'][0]['value'])) {
    $template = $vars['field_term_template'][0]['value'];
    $vars['classes_array'][] = $template;
    $vars['theme_hook_suggestions'][] = 'taxonomy_term__' . $template;
  }
}
?>