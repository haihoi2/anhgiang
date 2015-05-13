<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>
<div class="columns" data-popup="<?php if(isset($fields['nid']->content)) : print $fields['nid']->content; endif; ?>">
<?php foreach ($fields as $id => $field): ?>
     <?php if($id == 'nid') : ?>
      <?php 
        $image_count = 0;
        if(isset($field->content)) {
          $node_load = node_load($field->content);
         
          if(isset($node_load->field_slide_item['und'])) {
            
            $output_img_slide = '<ul class="slide-inside-magazine-popup parent-' . $field->content . '">';
            foreach($node_load->field_slide_item['und'] as $item) {
              $image_count++;
              $image = array(
                      'style_name' => '480x629', // style name 
                      'path' => $item['uri'], //  uri (String, 27 characters ) public://thb_cd_thumb_3.jpg
  
                      'alt' => $node_load->title,
                      'title' => $node_load->title,
              );
              $output_img_slide .= '<li>'.theme('image_style', $image).'</li>';
            }
            $output_img_slide .= '</ul>';
          }
        }
      ?>
      <?php if($image_count > 0) : ?>
      <div style="display: none;" class="magazine-popup magazine-popup-<?php print $field->content; ?>">
        <span class="button b-close"></span>
  			<div class="container-fluid">
  				<ul class="slide-magazine-popup">
  					<li>
  						<div class="table">
  							<div class="thumbnail">
  								<?php if(isset($output_img_slide)) : print $output_img_slide; endif; ?>
  							</div>
  							<div class="desc">
  								<div class="title-desc">
  									<p><?php if(isset($node_load->field_rpd_date['und'][0]['value'])) : print $node_load->field_rpd_date['und'][0]['value']; endif; ?></p>
  									<h3><?php if(isset($node_load->title)) : print $node_load->title; endif; ?></h3>
  								</div>
  								<p>
                    <?php if(isset($node_load->field_popup_text['und'][0]['value'])) : print $node_load->field_popup_text['und'][0]['value']; endif; ?>
                  </p>
  							</div>
  						</div>
  					</li>
  				
  				</ul>
  			</div>
  		</div>
      <?php endif; ?>
      
    <?php else: ?>
    <?php print $field->content; ?>
    <?php endif; ?>
<?php endforeach; ?>
</div>