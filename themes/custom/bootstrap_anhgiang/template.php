<?php

/** 
 * Include preprocess function for user login block
 */
function bootstrap_lahalle_theme() {
  $items = array();
  
  $items['user_login_block'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'bootstrap_lahalle') . '/templates',
    'template' => 'user-login',
    'preprocess functions' => array(
       'bootstrap_lahalle_preprocess_user_login'
    ),
  );
  
  $items['user_login'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'bootstrap_lahalle') . '/templates',
    'template' => 'user-login',
    'preprocess functions' => array(
       'bootstrap_lahalle_preprocess_user_login'
    ),
  );
  
  $items['user_profile_form'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'bootstrap_lahalle') . '/templates',
    'template' => 'user-profile',
    'preprocess functions' => array(
       'bootstrap_lahalle_preprocess_user_profile'
    ),
  );
  
  $items['home_push_corporate_node'] = array(
    'variables' => array('nodes' => NULL),
  );
  return $items;
}

/** 
 * Theme Corporate Block  
 */
function bootstrap_lahalle_home_push_corporate_node($variables) {
  global $language;
  $rows = array();
  $output = '<div class="corporate view-content row"> ';
  $node = $variables['nodes'][0];

  if('__none' != $node){
    $showpush = explode ('-' , $node);
    if ('node' == $showpush[0]){
      $node = node_load($showpush[1]);
      if (!node_access('view', $node)) $node = NULL; 
      if (!empty($node)) {
        $translations = translation_node_get_translations($node->tnid);
        if (!empty($translations) && isset($translations[$language->language])) {
          $node = node_load($translations[$language->language]->nid);
        }
        
        $elements = node_view($node, 'full');                           
        $elements['field_image'][0]['#image_style'] = 'corporate_thumb';
        $output .= '<div class="columns">';
        $img = '';
        if (!empty($elements['field_image'][0])) {
          $img = drupal_render($elements['field_image'][0]);
        }
        if (!empty($img)) {
          $aText = $img . '<span class="caption"><span>'. ($node->title) .'</span></span>';
        } else {
          $aText = '<span class="caption"><span>'. ($node->title) .'</span></span>';
        }
        $output .= l($aText, 'node/' . $node->nid, array('html' => true));
        $output .= '</div>';
      }
    }
    elseif ('term' ==$showpush[0]) 
    {
      
      $term = taxonomy_term_load($showpush[1]); 
      if (!empty($term)) {
        $translated_term = i18n_taxonomy_term_get_translation($term, $language->language);
        if (isset($translated_term))
        {
          $term = $translated_term;
        }
        $elements = taxonomy_term_view($term,'full');
        $output .= '<div class="columns">';
        $img = '';
        if (isset($elements['field_image'])){
          $elements['field_image'][0]['#image_style'] = 'corporate_thumb';   
          $img = drupal_render($elements['field_image'][0]);        
        }
        if (!empty($img)) {
          $aText = $img . '<span class="caption"><span>'. ($term->name) .'</span></span>';
        } else {
          $aText = '<span class="caption"><span>'. ($term->name) .'</span></span>';
        }
        $output .= l($aText, 'taxonomy/term/' . $term->tid, array('html' => true));
        $output .= '</div>';
      }
    }
  }
  $output .= '</div>';
 
  return $output;
}
/**
 * Preprocess variables for HTML
 */
function bootstrap_lahalle_preprocess_html(&$vars) { 
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
  drupal_add_js(drupal_get_path('theme', 'bootstrap_lahalle') . '/js/custom.js');
  drupal_add_js(drupal_get_path('module', 'jquery_update') . '/replace/ui/ui/minified/jquery.ui.accordion.min.js'); 
  drupal_add_js(drupal_get_path('module', 'jquery_update') . '/replace/ui/ui/minified/jquery.ui.droppable.min.js'); 
  drupal_add_js(drupal_get_path('module', 'jquery_update') . '/replace/ui/ui/minified/jquery.ui.sortable.min.js'); 
  drupal_add_js(drupal_get_path('theme', 'bootstrap_lahalle') . '/js/popup.js'); 
}

/**
 * Preprocess variables for all fields
 */
function bootstrap_lahalle_preprocess_field(&$vars) {
  if ($vars['element']['#bundle'] == 'news_sheet') {
    if ($vars['element']['#field_name'] == 'body') {
      $vars['classes_array'][] = 'content-actualites-page';
    }
  }
}

/**
 * Preprocess variables for all terms
 */
function bootstrap_lahalle_preprocess_taxonomy_term(&$vars) {
  if (!empty($vars['field_term_template'][0]['value'])) {
    $template = $vars['field_term_template'][0]['value'];
    $vars['classes_array'][] = $template;
    $vars['theme_hook_suggestions'][] = 'taxonomy_term__' . $template;

    if ($template == 'news_sub_page') {
      $selected_group = 'all';
      $selected_theme = 'all';
      
      if (!empty($_SESSION['lahalle_news']['selected_group']) && $vars['tid'] == $_SESSION['lahalle_news']['selected_group']) {
        if (!empty($_SESSION['lahalle_news']['selected_group']) && $_SESSION['lahalle_news']['selected_group'] != '__none') {
          $selected_group = $_SESSION['lahalle_news']['selected_group'];
        } else {
          $selected_group = $_SESSION['lahalle_news']['selected_group'] = $vars['tid'];
        }
        
        if (!empty($_SESSION['lahalle_news']['selected_theme']) && $_SESSION['lahalle_news']['selected_theme'] != '__none') {
          $selected_theme = $_SESSION['lahalle_news']['selected_theme'];
        }
      }

      $vars['selected_group'] = $selected_group;
      $vars['selected_theme'] = $selected_theme;
    }
  }
}

/**
 * Preprocess variables for all nodes
 */
function bootstrap_lahalle_preprocess_node(&$vars) {
  if ($vars['view_mode'] == 'full' && $vars['node']->type != 'news_sheet') {
    $vars['title'] = '';
    
    if ($vars['node']->type == 'page') {
      drupal_add_js(drupal_get_path('theme', 'bootstrap_lahalle') . '/js/PIE_IE678.js');
    }
  }
}

/**
 * Preprocess variables for all pages
 */
function bootstrap_lahalle_preprocess_page(&$vars) {  
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
  $options = array('language' => $language, 'default' => t('Welcome'));  
  $vars['welcome_user_message'] = variable_get_value('la_halle_user_menu_message', $options);
  $lahalle_config_upload_path = variable_get('lahalle_upload_config_path', 'public://lahalle/config/');
  $vars['welcome_user_icon'] =  file_create_url($lahalle_config_upload_path . variable_get_value('la_halle_user_icon_path'));
  
  // Redirect to selected language when user login
  if (!empty($_SESSION['selectedLanguage']) && $language->language != $_SESSION['selectedLanguage']) {
    $redirectUrl = $base_url . base_path() . $_SESSION['selectedLanguage'];
    unset($_SESSION['selectedLanguage']);
    drupal_goto($redirectUrl);
  }
  
  // Add information about the number of sidebars.
  $contentRightColClass = array('content-right', 'col-2');
  $vars['content_right_column_class'] = ' class="'.implode(' ', $contentRightColClass).'"';
  
  $contentLeftColClass = array('content-left', 'col-1');
  $vars['content_left_column_class'] = ' class="'.implode(' ', $contentLeftColClass).'"';
  
  $wrapperContentClass = array('row', 'content');
  if (!empty($vars['page']['sidebar_first'])) {
    $wrapperContentClass[] = 'two-col';
  } else {
    $wrapperContentClass[] = 'one-col';
  }
  $vars['wrapper_content_class'] = implode(' ', $wrapperContentClass);
  
  if ($vars['is_front']==TRUE)  {
    // unset title
    $vars['title'] = '';
    // unset node in front page
    $vars['page']['content']['system_main'] = array();
    //dpm($vars);
  }                                           
  //unset title for login page
  if ($user->uid==0 && $arg[0]='user'){    
    $vars['title'] = '';
  } 
  
  if(!empty($vars['page']['content']['system_main']['#theme']) && $vars['page']['content']['system_main']['#theme'] == "user_profile"){
    $options = array('language' => $language, 'default' => t('Profile Page Title'));   
    $vars['title'] = variable_get_value('la_halle_profile_page_title', $options);
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
  
  if (!empty($vars['node']) && in_array($vars['node']->type, array('page', 'activity_sheet', 'news_sheet'))) {
    //unset title for news sheet
    if ($vars['node']->type == 'news_sheet'){    
      $vars['title'] = '';
    } 
    
    $actionButtons = array();
    
    $downloadText = variable_get('lahalle_tool_download_text', 'Téléchager');
    $printText = variable_get('lahalle_tool_print_text', 'Imprimer');
    
    if (user_access('download lahalle media')) {
      $field_media = field_get_items('node', $vars['node'],'field_media');
      if (!empty($field_media)){
        $output = field_view_value('node', $vars['node'], 'field_media', $field_media[0]);
        $url = file_create_url($output['#file']->uri);
        $download = l($downloadText, $url, array('external' => true, 'attributes' => array('class' => 'download')));
        $actionButtons['download'] = $download;
      }
    }
    
    if (user_access('print lahalle pages')) {
      // $print= array ('#theme' => 'links', 
        // '#links' => array('print-page' => 
          // array('title' => '<button class="print" onclick="window.print();">print this page</button>', 
            // 'html' => TRUE)
        // ),
        // '#attributes' => array('class' => array(0 => 'links', 1 => 'inline'))
      // );
      $print = l($printText, 'javascript:void(0)', array('external' => true, 'attributes' => array('class' => 'print', 'onclick' => 'window.print();')));
      $actionButtons['print'] = render($print);
      drupal_add_css(drupal_get_path('theme', 'bootstrap_lahalle') . '/css/print.css');
    } else {   
      drupal_add_css(drupal_get_path('theme', 'bootstrap_lahalle') . '/css/no-print.css');
    }
    
    $actionButtons['flag'] = flag_create_link('bookmarks', $vars['node']->nid);
    $vars['actionButtons'] = $actionButtons;
  }
  //Get parent title of news sheet
  if(!empty($vars['node']) &&$vars['node']->type == 'news_sheet'){ 
    $news_sheet_group = $vars['node']->field_news_group['und'][0]['tid'];
    $term = taxonomy_get_parents($news_sheet_group); 
    if (!empty($term)) {
        $translated_term = i18n_taxonomy_term_get_translation($term, $language->language);
        if (isset($translated_term))
        {
          $translated_term  = array_values($translated_term); 
          $term = $translated_term[0];
        }       
        $vars['title']  = $term->name;          
    }
    
  }

  if (!empty($vars['title'])) {
    $vars['title_prefix'] = '<div class="section-title">';
    $vars['title_suffix'] = '</div>';
  }
  
  $vars['is_home_term'] = false;
  $vars['title_class'] = array();
  $arg = arg();
  if ($arg[0] == 'taxonomy' && !empty($arg[1]) && $arg[1] == 'term' && empty($arg[3]) && in_array($arg[2], array(24, 30))) {
    $vars['is_home_term'] = true;
    $vars['title_class'][] = 'has-line';
  } elseif ($arg[0] == 'user') {
    $vars['title_prefix'] = '';
    $vars['title_suffix'] = '';
    $vars['title_class'][] = 'has-line';
  }
  
  // #1255 - Add class for Title
  if ($arg[0] == 'taxonomy' && !empty($arg[1]) && $arg[1] == 'term' && empty($arg[3]) && in_array($arg[2], array(70))) {
    $vars['title_class'][] = 'rdp-page';
  }
  // /#1255
  
  // #1256 - remove title page
  if ($arg[0] == 'taxonomy' && !empty($arg[1]) && $arg[1] == 'term' && empty($arg[3]) && in_array($arg[2], array(69))) {
    $vars['title'] = '';
  }
  // /#1256
  
  //unset($vars['logo']);
  
  //Implement profilling logo and visual
  if(!user_is_logged_in()) {
    $arg = arg();
    if(isset($arg[0], $arg[1], $arg[2])) {
      //krumo(drupal_get_path_alias('taxonomy/term/' . $arg[2]));
      $profile_url = drupal_get_path_alias('taxonomy/term/' . $arg[2]);
      if($profile_url == 'hav') {
        $vars['logo'] = variable_get('site_logo_hav_path', '') != '' ? variable_get('site_logo_hav_path', '') : $vars['logo'];
      } elseif($profile_url == 'hac') {
          $vars['logo'] = variable_get('site_logo_hac_path', '') != '' ? variable_get('site_logo_hac_path', '') : $vars['logo'];
      }
    } else {
      unset($vars['page']['content']['user_login']);
      $arg = arg();
      if(isset($arg[0], $arg[1]) && $arg[0] == 'user' && $arg[1] == 'login') {
        $vars['page']['content']['user_login'] = '';
      } else {
        $vars['page']['content']['user_login'] = array(
          '#markup' => t('This requested page could not be found.')
        );
      }
     	
    }
  } else {
    global $user;
    $user_load = user_load($user->uid);
    
    /*
    if(isset($user_load->workbench_access_by_role[0])) {
      $profile_access_term = '';
      if($user_load->workbench_access_by_role[0] == 3) {
        //user access HAV
        $profile_access_term = 'hav';
      } elseif($user_load->workbench_access_by_role[0] == 2) {
        //user access HAC
          $profile_access_term = 'hac';
      } else {
        $workbench_parent = taxonomy_get_parents($user_load->workbench_access_by_role[0]);
        if(isset($workbench_parent)) {
          foreach($workbench_parent as $parent) {
            if($parent->tid == 3) {
              $profile_access_term = 'hav';
            } elseif($parent->tid == 2) {
              $profile_access_term = 'hac';
            }
          }
        }
      }
      if('hav' == $profile_access_term) {
        $vars['logo'] = variable_get('site_logo_hav_path', '') != '' ? variable_get('site_logo_hav_path', '') : $vars['logo'];
      } elseif('hac' == $profile_access_term) {
        $vars['logo'] = variable_get('site_logo_hac_path', '') != '' ? variable_get('site_logo_hac_path', '') : $vars['logo'];
      }
    }*/
    if('hav' == _lahalle_access_by_role($user->uid)) {
      $vars['logo'] = variable_get('site_logo_hav_path', '') != '' ? variable_get('site_logo_hav_path', '') : $vars['logo'];
    } elseif('hac' == _lahalle_access_by_role($user->uid)) {
      $vars['logo'] = variable_get('site_logo_hac_path', '') != '' ? variable_get('site_logo_hac_path', '') : $vars['logo'];
    } 
    
  }
  if(true == drupal_is_front_page()) {
    $vars['page']['content']['block_push_wrap'] = array(
      '#type' => 'container',
      '#attributes' => array(
        'class' => array('block-push-wrap', 'clearfix'),
      ),
      '#weight' => 4,
    );
    $vars['page']['content']['#sorted'] = FALSE;
    if(isset($vars['page']['content']['lahalle_core_home_push_coporate_left'])) {
      $vars['page']['content']['block_push_wrap'][] = $vars['page']['content']['lahalle_core_home_push_coporate_left'];
      unset($vars['page']['content']['lahalle_core_home_push_coporate_left']);
    }
    if(isset($vars['page']['content']['lahalle_core_home_push_coporate_right'])) {
      $vars['page']['content']['block_push_wrap'][] = $vars['page']['content']['lahalle_core_home_push_coporate_right'];
      unset($vars['page']['content']['lahalle_core_home_push_coporate_right']);
    }
    if(isset($vars['page']['content']['lahalle_core_home_push_coporate_hac_left'])) {
      $vars['page']['content']['block_push_wrap'][] = $vars['page']['content']['lahalle_core_home_push_coporate_hac_left'];
      unset($vars['page']['content']['lahalle_core_home_push_coporate_hac_left']);
    }
    if(isset($vars['page']['content']['lahalle_core_home_push_coporate_hac_right'])) {
      $vars['page']['content']['block_push_wrap'][] = $vars['page']['content']['lahalle_core_home_push_coporate_hac_right'];
      unset($vars['page']['content']['lahalle_core_home_push_coporate_hac_right']);
    }
  }
  
  
  //krumo($vars);
  //END Implement profilling logo and visual
}       

/**
 * Preprocess login page
 */
function  bootstrap_lahalle_preprocess_user_login(&$vars) {
  global $language;  
  global $base_url;
  //get welcome text
  $options = array('language' => $language, 'default' => t('Welcome'));   
  $vars['welcome_text'] = variable_get_value('la_halle_welcome_login_message', $options);
  //get intro text
  $options = array('language' => $language, 'default' => t('Please login'));   
  $vars['intro_text'] = variable_get_value('lahalle_introduction_login_message', $options);
  $lahalle_config_upload_path = variable_get('lahalle_upload_config_path', 'public://lahalle/config/');
  $vars['login_page_icon'] = file_create_url($lahalle_config_upload_path . variable_get_value('lahalle_login_page_icon_path'));
  $vars['login_page_illustration'] = file_create_url($lahalle_config_upload_path . variable_get_value('lahalle_login_page_illustration_path'));  
  
  if(!user_is_logged_in()) {
    $arg = arg();
    if(isset($arg[0], $arg[1], $arg[2])) {
      //krumo(drupal_get_path_alias('taxonomy/term/' . $arg[2]));
      $profile_url = drupal_get_path_alias('taxonomy/term/' . $arg[2]);
      if($profile_url == 'hav') {
        $vars['login_page_illustration'] = file_create_url($lahalle_config_upload_path . variable_get_value('lahalle_login_page_illustration_path')); 
      } elseif($profile_url == 'hac') {
          $vars['login_page_illustration'] = file_create_url($lahalle_config_upload_path . variable_get_value('lahalle_login_page_illustration_hac_path')); 
      }
    }
  }
}             

/**
 * Preprocess profile page
 */
function  bootstrap_lahalle_preprocess_user_profile(&$vars) {
  global $language;  
  global $base_url;
  //get profile_page_title 
  $options = array('language' => $language, 'default' => t('Profile Page Title'));   
  $vars['la_halle_profile_page_title'] = variable_get_value('la_halle_profile_page_title', $options);
  //$vars['la_halle_profile_page_title'] = variable_get_value('la_halle_profile_page_title', $options);
  //get organize my shortcuts block title 
  $options = array('language' => $language, 'default' => t('Organize my shortcuts'));   
  $vars['la_halle_block_organize_my_shortcut_title'] = variable_get_value('la_halle_block_organize_my_shortcut_title', $options);
  //get organize my shortcuts block description 
  $options = array('language' => $language, 'default' => t('Drag the shortcuts available in the right frame of your updated shortcuts'));   
  $vars['la_halle_block_organize_my_shortcut_description'] = variable_get_value('la_halle_block_organize_my_shortcut_description', $options);
  //get organize my shortcuts block available title 
  $options = array('language' => $language, 'default' => t('Shortcuts available'));   
  $vars['la_halle_block_organize_my_shortcut_available_title'] = variable_get_value('la_halle_block_organize_my_shortcut_available_title', $options);
  //get organize my shortcuts block update title 
  $options = array('language' => $language, 'default' => t('Your updated shortcuts'));   
  $vars['la_halle_block_organize_my_shortcut_update_title'] = variable_get_value('la_halle_block_organize_my_shortcut_update_title', $options);
  //get profile my like block  title 
  $options = array('language' => $language, 'default' => t('My liked pages'));   
  $vars['la_halle_block_my_like_pages'] = variable_get_value('la_halle_block_my_like_pages', $options);
  
  //alert system
  $vars['lahalle_alert_system_title'] = variable_get_value('lahalle_alert_system_title', $options);
  $vars['lahalle_alert_system_description'] = variable_get_value('lahalle_alert_system_description', $options);
  $vars['lahalle_alert_system_intro'] = variable_get_value('lahalle_alert_system_intro', $options);
  $vars['lahalle_alert_system_alert_news'] = variable_get_value('lahalle_alert_system_alert_news', $options);
  $vars['lahalle_alert_system_alert_enmode'] = variable_get_value('lahalle_alert_system_alert_enmode', $options);
  $vars['lahalle_alert_system_alert_revue'] = variable_get_value('lahalle_alert_system_alert_revue', $options);
  
  $vars['lahalle_config_upload_path'] = variable_get('lahalle_upload_config_path', 'public://lahalle/config/');
  
  $options = array('language' => $language, 'default' => t('Valider'));   
  $vars['la_halle_block_organize_my_shortcut_update_button_text'] = variable_get_value('la_halle_block_organize_my_shortcut_update_button_text', $options);
  
}
/**
 * Override display of menu link at footer
 */
function bootstrap_lahalle_menu_link__menu_footer($variables) {
    $element = $variables['element'];
    $sub_menu = '';

    $element['#attributes']['class'][] = 'menu-' . $element['#original_link']['mlid'];
    if ($element['#below']) {
        $sub_menu = drupal_render($element['#below']);
    }
    $output = l($element['#title'], $element['#href'], $element['#localized_options']);
    $output = l($element['#title'], $element['#href'], $element['#localized_options']);
    //DEV #947 - [LOGIN PAGE] W3C VALIDATOR : ERRORS - START
    $output =  '<li>' . $output . '</li>';
    //DEV #947 - [LOGIN PAGE] W3C VALIDATOR : ERRORS - END
    return $output;   
}  

/**
 * Left menu link
 */
function bootstrap_lahalle_menu_tree(&$variables) {
  return '<div class="nav-collapse"><ul class="menu nav">' . $variables['tree'] . '</ul></div>'; 
  // added the nav-collapse wrapper so you can hide the nav at small size
}

/**
 * Override menu links
 */
function bootstrap_lahalle_menu_link(array $variables) {
  $element = $variables['element'];
  $sub_menu = '';

  //hide tooltip
  unset($element['#localized_options']['attributes']['title']);
  
  if (( $element['#original_link']['in_active_trail']==TRUE) && $element['#below']) {
    // Add our own wrapper
    //unset($element['#below']['#theme_wrappers']);
    $sub_menu = drupal_render($element['#below']);
    //$sub_menu = '<ul>' . drupal_render($element['#below']) . '</ul>'; // removed flyout class in ul
    unset($element['#localized_options']['attributes']['class']); // removed flydown class
    unset($element['#localized_options']['attributes']['data-toggle']); // removed data toggler
    // Check if this element is nested within another
    if ((!empty($element['#original_link']['depth'])) && ($element['#original_link']['depth'] > 1)) {
      unset($element['#attributes']['class']); // removed flyout class
    }
    else {
      unset($element['#attributes']['class']); // unset flyout class
      $element['#localized_options']['html'] = TRUE;
      $element['#title'] .= ''; // removed carat spans flyout
    }
    // Set dropdown trigger element to # to prevent inadvertent page loading with submenu click
    $element['#localized_options']['attributes']['data-target'] = '#'; // You could unset this too as its no longer necessary.
  }
 
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

/**
 * Alter display of Search Block Form
 */
function bootstrap_lahalle_bootstrap_search_form_wrapper($variables) {
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

/**
 * Overrides theme_breadcrumb().
 */
function bootstrap_lahalle_breadcrumb($variables) {
  $output = '';
  global $user, $language;
  if (!drupal_is_front_page()) {
    $breadcrumb = $variables['breadcrumb'];
    
    $article_home_link = variable_get('lahalle_article_home_link', 0);
    $hav_news_page_link = variable_get('lahalle_hav_news_page_link', 0);
    $hac_news_page_link = variable_get('lahalle_hac_news_page_link', 0);
    $arg = arg();
    if(isset($arg[2]) && ($arg[2] == $article_home_link || $arg[2] == $hav_news_page_link || $arg[2] == $hac_news_page_link)) {
      $breadcrumb[1] = t('Actualités');
    }
    if(isset($arg[0], $arg[1]) && $arg[0] == 'node') {
      $node_load = node_load($arg[1]);
      if(isset($node_load->type) && $node_load->type == 'news_sheet') {
        $breadcrumb[1] = t('Actualités');
        $term_news = null;
        if('hav' == 'hav') {
          if(isset($hav_news_page_link)) {
            $term_news = taxonomy_term_load($hav_news_page_link);
          }
        } elseif('hac' == _lahalle_access_by_role($user->uid)) {
          if(isset($hav_news_page_link)) {
            $term_news = taxonomy_term_load($hac_news_page_link);
          }
        }
        if(isset($term_news->tid) && $language->language != 'fr') {
          $term_translate = _term_get_translate_id($term_news->tid, $language->language);
          if(isset($term_translate)) {
            $breadcrumb[1] = l(t('Actualités'), drupal_get_path_alias('taxonomy/term/'.$term_translate));
          }
        }
        
        //$breadcrumb[1] = l(t('Actualités'), drupal_get_path_alias('taxonomy/term/'.$hac_news_page_link));
        
      }
    }
    
    if (count($breadcrumb) > 0) {
      $lastIndex = count($breadcrumb) - 1;
      
      //set maximum value of title in breadcrumb
      $breadcrumbMaxLength = variable_get('lahalle_breadcrum_title_max_char',70);
      if (strlen($breadcrumb[$lastIndex]['data']) > $breadcrumbMaxLength) {
        $breadcrumb[$lastIndex]['data'] = substr($breadcrumb[$lastIndex]['data'], 0, strpos(wordwrap($breadcrumb[$lastIndex]['data'], $breadcrumbMaxLength), "\n"));
        $breadcrumb[$lastIndex]['data'] .= '...';
      }
      $breadcrumb[$lastIndex]['data'] = '<span>' . $breadcrumb[$lastIndex]['data'] . '</span>';
      $breadcrumb[$lastIndex]['class'] = array('current');
      
      // Determine if we are to display the breadcrumb.
      $bootstrap_breadcrumb = theme_get_setting('bootstrap_breadcrumb');
      if (($bootstrap_breadcrumb == 1 || ($bootstrap_breadcrumb == 2 && arg(0) == 'admin')) && !empty($breadcrumb)) {
        $output = '<div class="breadcrumbs">' . theme('item_list', array(
          'attributes' => array(
            'class' => array('clearfix'),
          ),
          'items' => $breadcrumb,
          'type' => 'ul',
        )) . '</div>';
      }
    }
  }
  return $output;
}

bootstrap_include('bootstrap_lahalle', 'theme/block.inc');
bootstrap_include('bootstrap_lahalle', 'theme/form.inc');
