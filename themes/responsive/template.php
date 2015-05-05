<?php
function iritech_breadcrumb($variables) {
  if (arg(0) == 'node' && arg(1) == 125) {
    $bread_text ='<a href="/">Home</a><span class="breadcrumb-delimiter">&nbsp;</span>';
    $bread_text .= l('Contact',drupal_get_path_alias(arg(0).'/'.arg(1)),array('class'=>'active-trail'));
    $bread_text .='<span class="breadcrumb-delimiter">&nbsp;</span><span class="current-page-title">Office Locations</span>';
    return $bread_text;
  }

  if(arg(0)=='sitemap' && arg(1)==null) {
    $bread_text ='<a href="/">Home</a><span class="breadcrumb-delimiter">&nbsp;</span>';
    $bread_text .= l('Sitemap',drupal_get_path_alias(arg(0).'/'.arg(1)),array('class'=>'active-trail'));
    return $bread_text;
  }
  
  if(arg(0)=='services' && arg(1)=='faq') {
    $bread_text ='<a href="/">Home</a><span class="breadcrumb-delimiter">&nbsp;</span>';
    $bread_text .= l('Services',drupal_get_path_alias('services/faq/general'),array('class'=>'active-trail'));
    $bread_text .='<span class="breadcrumb-delimiter">&nbsp;</span><span class="current-page-title">Frequently Asked Questions</span>';
    return $bread_text;
  }

  $breadcrumb = $variables['breadcrumb'];
  
  if (arg(0) == 'node') {
    if(!drupal_is_front_page()) {
      $node = node_load(arg(1));
      if (isset($node) && $node->type != 'news_events')
        $breadcrumb[] = '<span class="current-page-title">'.drupal_get_title().'</span>'; 
      
      $term = field_get_items('node', $node, 'field_page_category');
      if(isset($node) && $term[0]['tid']==15){
        $bread_text ='<a href="/">Home</a><span class="breadcrumb-delimiter">&nbsp;</span>';
        $bread_text .= l('Contact',drupal_get_path_alias('office-locations'),array('class'=>'active-trail'));
        $bread_text .= '<span class="breadcrumb-delimiter">&nbsp;</span>';
        $bread_text .= l('Office Locations',drupal_get_path_alias('office-locations'),array('class'=>'active-trail'));
        $bread_text .='<span class="breadcrumb-delimiter">&nbsp;</span><span class="current-page-title">'.drupal_get_title().'</span>';
        return $bread_text;
      }
    }
  } else {
      $breadcrumb[] = '<span class="current-page-title">'.drupal_get_title().'</span>';
  }

  for($i=0;$i<count($breadcrumb);$i++) {
    if(strpos($breadcrumb[$i],'products/all')!== false || (strpos($breadcrumb[$i],'news-events/all')!== false)){
      unset($breadcrumb[$i]);
      break;
    }
  }

  $temp=$breadcrumb[0];
  if(isset($breadcrumb[1]) && $temp==$breadcrumb[1] && strpos($temp,'Home') == true && strpos($breadcrumb[1],'Home') == true ) {
      unset($breadcrumb[0]);
  }
  //unset($breadcrumb[0]);
  return implode('<span class="breadcrumb-delimiter">&nbsp;</span>',$breadcrumb);    
}
function iritech_preprocess_node(&$vars) {
  if (array_key_exists('node', $vars)) {
    if ($vars['node']->type == 'product') {
      $productType = field_get_items('node', $vars['node'], 'field_product_type');
      if ($productType) {
        $product_id = $vars['node']->nid;
        $tid = $productType[0]['tid'];
        $series = array();
        $modelArr = array();
        if ($tid == 2) {
          // Get All Series of Product
          $query = db_select('taxonomy_term_data', 'serie');
          $query->join('field_data_field_serie_product', 'product', 'product.entity_id = serie.tid AND product.field_serie_product_nid = ' . $product_id);
          $series = $query->fields('serie', array('tid', 'name'))
            ->condition('serie.vid', 6) // Model Series taxonomy ID
            ->orderBy('serie.weight', 'ASC')
            ->orderBy('serie.name', 'ASC')
            ->execute()
            ->fetchAllAssoc('tid');
          
          // Get All Models of Serie
          foreach ($series as $serie) {
            $query = db_select('node', 'model');
            $query->join('field_data_field_model_product', 'product', 'product.entity_id = model.nid AND product.field_model_product_nid = ' . $product_id);
            $query->join('field_data_field_model_series', 'serie', 'serie.entity_id = model.nid AND serie.field_model_series_tid = ' . $serie->tid);
            $modelArr[$serie->tid] = $query->fields('model', array('nid', 'title'))
              ->condition('model.status', 1)
              ->orderBy('model.title', 'ASC')
              ->execute()
              ->fetchAllAssoc('nid');
            
            if (count($modelArr[$serie->tid]) > 0) {
              // Check if the model have any files
              foreach ($modelArr[$serie->tid] as $modelID => $model) {
                $query = db_select('node', 'fileGroup');
                $query->join('field_data_field_model_sw_product ', 'model', 'model.entity_id = fileGroup.nid AND model.field_model_sw_product_nid = ' . $modelID);
                $query->join('field_data_field_download_file_attachment ', 'file', 'file.entity_id = fileGroup.nid');
                $fileNumber = $query->fields('file', array('field_download_file_attachment_fid'))
                  ->condition('fileGroup.status', 1)
                  ->countQuery()
                  ->execute()
                  ->fetchAssoc();
                if (empty($fileNumber['expression']) || ($fileNumber['expression'] == 0)) {
                  unset($modelArr[$serie->tid][$modelID]);
                }
              }
            } else {
              unset($series[$serie->tid]);
            }
          }
        }
        $vars['series'] = $series;
        $vars['modelArr'] = $modelArr;
      }
    }
  }
}
// #UPDATE - 201302271410
function iritech_menu_tree__menu_top_nav($vars) {
  global $user;
  
  $loginName = '';
  if ($user->uid > 0) {
    $loginName = '<li class="leaf">' . t('Welcome') . ', ' . $user->name . '</li>';
  }
  
  return '<ul class="menu">' . $loginName . $vars['tree'] . '</ul>';
}
function iritech_menu_link__menu_top_nav($vars) {
  $element = $vars['element'];
  $sub_menu = '';

  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }
  
  if (strtolower($element['#title']) == 'login' || strtolower($element['#title']) == 'logout') {
    if ($_GET['q'] != 'node') {
      $element['#localized_options']['query']['destination'] = drupal_get_path_alias($_GET['q']);
      unset($element['#localized_options']['query']['current']);
    }
  }
  
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}
function iritech_preprocess_html(&$vars) {
  if (isset($_COOKIE['sdProductType'])) {
    if ($_COOKIE['sdProductType'] == 2 || $_COOKIE['sdProductType'] == 3) {
      if (!isset($_COOKIE['sdOS'])) {
        iritech_filter_clear_cookie();
      }
    }
  }
  else {
    iritech_filter_clear_cookie();
  }
}
// /#UPDATE - 201302271410

function iritech_preprocess_page(&$vars) {
	$block_social = block_load('block', 5);
	$social_buttons = _block_get_renderable_array(_block_render_blocks(array($block_social)));
	$vars['social_buttons'] = $social_buttons;
}
?>