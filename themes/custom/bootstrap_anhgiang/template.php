<?php

/** 
 * Include preprocess function for user login block
 */
function bootstrap_anhgiang_theme() {
  $items = array();
  
  $items['user_login_block'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'bootstrap_anhgiang') . '/templates',
    'template' => 'user-login',
    'preprocess functions' => array(
       'bootstrap_anhgiang_preprocess_user_login'
    ),
  );
  
  $items['user_login'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'bootstrap_anhgiang') . '/templates',
    'template' => 'user-login',
    'preprocess functions' => array(
       'bootstrap_anhgiang_preprocess_user_login'
    ),
  );
  
  $items['user_profile_form'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'bootstrap_anhgiang') . '/templates',
    'template' => 'user-profile',
    'preprocess functions' => array(
       'bootstrap_anhgiang_preprocess_user_profile'
    ),
  );
  
  $items['home_push_corporate_node'] = array(
    'variables' => array('nodes' => NULL),
  );
  return $items;
}


/**
 * Preprocess variables for HTML
 */
function bootstrap_anhgiang_preprocess_html(&$vars) { 
  global $user;
  global $language; 
  
  // Check the html status code
  $header_status = drupal_get_http_header("status");
  if (!empty($header_status)) {
    if (strpos($header_status, '403') === 0) {
      if ($user->uid == 0 ) { // Not login
        $pageTitle = variable_get('lahalle_placeholder_login_name', 'Identifiant');
        $vars['head_title'] = $pageTitle;
      }
    } elseif (strpos($header_status, '404') === 0) {
    }
  }
    
  $lahalle_config_upload_path = variable_get('lahalle_upload_config_path', 'public://lahalle/config/');
  $lahalle_core_shortcut_limit  = variable_get('lahalle_core_shortcut_limit', 8);
  $options = array('language' => $language, 'default' => t('The number of shorcut must be less than'));  
  $lahalle_core_shortcut_limit_error_text  = variable_get_value('lahalle_core_shortcut_limit_error_text', $options) . ' ' . $lahalle_core_shortcut_limit;
  
  $js_settings    =   array(
      'back_to_top_icon_path' => file_create_url($lahalle_config_upload_path . variable_get('back_to_top_icon_path', 'back_to_top.jpg')),
      'lahalle_core_shortcut_limit' => $lahalle_core_shortcut_limit,
      'lahalle_core_shortcut_limit_error_text' => $lahalle_core_shortcut_limit_error_text
  );
  drupal_add_js(array('lahalle_js_settings' => $js_settings), 'setting');
  drupal_add_js(drupal_get_path('theme', 'bootstrap_anhgiang') . '/js/custom.js');
  drupal_add_js(drupal_get_path('module', 'jquery_update') . '/replace/ui/ui/minified/jquery.ui.accordion.min.js'); 
  drupal_add_js(drupal_get_path('module', 'jquery_update') . '/replace/ui/ui/minified/jquery.ui.droppable.min.js'); 
  drupal_add_js(drupal_get_path('module', 'jquery_update') . '/replace/ui/ui/minified/jquery.ui.sortable.min.js'); 
  drupal_add_js(drupal_get_path('theme', 'bootstrap_anhgiang') . '/js/popup.js'); 
}

/**
 * Preprocess variables for all fields
 */
function bootstrap_anhgiang_preprocess_field(&$vars) {
  if ($vars['element']['#bundle'] == 'news_sheet') {
    if ($vars['element']['#field_name'] == 'body') {
      $vars['classes_array'][] = 'content-actualites-page';
    }
  }
}

/**
 * Preprocess variables for all terms
 */
function bootstrap_anhgiang_preprocess_taxonomy_term(&$vars) {
  if (!empty($vars['field_term_template'][0]['value'])) {
    $template = $vars['field_term_template'][0]['value'];
    $vars['classes_array'][] = $template;
    $vars['theme_hook_suggestions'][] = 'taxonomy_term__' . $template;
  }
}

/**
 * Preprocess variables for all nodes
 */
function bootstrap_lahalle_preprocess_node(&$vars) {
  if ($vars['view_mode'] == 'full' && $vars['node']->type == 'news_sheet') {
    $vars['title'] = '';
  } 
  if ($vars['node']->type == 'page') {
    drupal_add_js(drupal_get_path('theme', 'bootstrap_anhgiang') . '/js/PIE_IE678.js');
  }
  
}

/**
 * Preprocess variables for all pages
 */
function bootstrap_anhgiang_preprocess_page(&$vars) {  
  global $language;  
  global $base_url;
  global $user; 
  
  // Check the html status code
  $header_status = drupal_get_http_header("status");
  if (!empty($header_status)) {
    if (strpos($header_status, '403') === 0) {
      if ($user->uid == 0) { // Not login
        $vars['page']['content']['system_main']['main']['#markup'] = ''; // Remove the access denied message if user not login
      }
      // $vars['theme_hook_suggestions'][] = 'page__customerror__403';
    } elseif (strpos($header_status, '404') === 0) {
      // $vars['theme_hook_suggestions'][] = 'page__customerror__404';
    }
  }
  
  $arg= arg();
 
  if ($vars['is_front']==TRUE)  {
    // unset title
    $vars['title'] = '';
    // unset node in front page
    //$vars['page']['content']['system_main'] = array();
    //dpm($vars);
  }                                           
  //unset title for login page
  if ($user->uid==0 && $arg[0]=='user'){    
    $vars['title'] = '';
  } 
  
  if(!empty($vars['page']['content']['system_main']['#theme']) && $vars['page']['content']['system_main']['#theme'] == "user_profile"){
    //$options = array('language' => $language, 'default' => t('Profile Page Title'));   
    //$vars['title'] = variable_get_value('la_halle_profile_page_title', $options);
  }
          
  // unset no content
  if(isset($vars['page']['content']['system_main']['no_content'])) {
    unset($vars['page']['content']['system_main']['no_content']);
  }      
    // unset list of term nodes
  if ($arg[0] == 'taxonomy' && !empty($arg[1]) && $arg[1] == 'term' && is_numeric($arg[2])) {  
    unset($vars['page']['content']['system_main']['nodes']);     
    unset($vars['page']['content']['system_main']['pager']);     
    unset($vars['page']['content']['system_main']['no_content']);   
  }
  
  
  if (!empty($vars['title'])) {
    $vars['title_prefix'] = '<div class="section-title">';
    $vars['title_suffix'] = '</div>';
  }
  
}       

/**
 * Preprocess login page
 */
function  bootstrap_anhgiang_preprocess_user_login(&$vars) {

}             

/**
 * Preprocess profile page
 */
function  bootstrap_anhgiang_preprocess_user_profile(&$vars) {
 
}

/**
 * Alter display of Search Block Form
 */
function bootstrap_anhgiang_bootstrap_search_form_wrapper($variables) {
  global $language;
  
  //get search button text
  $options = array('language' => $language, 'default' => t('OK'));     
  $searchButtonText = variable_get_value('lahalle_search_button_text', $options);

  $output = '<div class="colums input-label">';
  $output .= $variables['element']['#children'];
  $output .= '</div>';
  $output .= '<div class="colums submit">';
  $output .= '<input id="search_block_submit" type="submit" value="' . $searchButtonText . '" />';
  $output .= '</div>';
  return $output;
}

function bootstrap_anhgiang_menu_tree__menu_project_menu($variables){
  return '<ul class="listitem">' . $variables['tree'] . '</ul>';
}


bootstrap_include('bootstrap_lahalle', 'theme/block.inc');
bootstrap_include('bootstrap_lahalle', 'theme/form.inc');
