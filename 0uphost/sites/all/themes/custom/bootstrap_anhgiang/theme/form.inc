<?php
/**
 * Implements hook_form_FORM_ID_alter()
 */
function bootstrap_lahalle_form_search_block_form_alter(&$form, &$form_state, $form_id) {
  global $language;
  
  //get search block form placeholder
  $options = array('language' => $language, 'default' => 'Search');             
  $placeholderSearchKeyword = variable_get_value('lahalle_placeholder_search_key', $options);
  $form['search_block_form']['#attributes']['placeholder'] = $placeholderSearchKeyword;
}