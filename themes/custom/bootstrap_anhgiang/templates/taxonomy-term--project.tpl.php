<?php

/**
 * @file
 * Default theme implementation to display a term.
 *
 * Available variables:
 * - $name: (deprecated) The unsanitized name of the term. Use $term_name
 *   instead.
 * - $content: An array of items for the content of the term (fields and
 *   description). Use render($content) to print them all, or print a subset
 *   such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $term_url: Direct URL of the current term.
 * - $term_name: Name of the current term.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the following:
 *   - taxonomy-term: The current template type, i.e., "theming hook".
 *   - vocabulary-[vocabulary-name]: The vocabulary to which the term belongs to.
 *     For example, if the term is a "Tag" it would result in "vocabulary-tag".
 *
 * Other variables:
 * - $term: Full term object. Contains data that may not be safe.
 * - $view_mode: View mode, e.g. 'full', 'teaser'...
 * - $page: Flag for the full page state.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the term. Increments each time it's output.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * @see template_preprocess()
 * @see template_preprocess_taxonomy_term()
 * @see template_process()
 *
 * @ingroup themeable
 */
 global $user;
 global $language;
?>
<div id="taxonomy-term-<?php print $term->tid; ?>" class="<?php print $classes; ?>">

    <h2 class="title-node"><?php print $term_name; ?></h2>

  
  
  <?php if ($user->uid != 0) :?>
  <ul class="nav nav-tabs" id="manage">
      <li class="active"><a data-toggle="tab" href="#note"><?php print t('Thông báo'); ?></a></li>
      <li><a data-toggle="tab" href="#task"><?php print t('Công việc'); ?></a></li>
      <li><a data-toggle="tab" href="#report"><?php print t('Báo cáo'); ?></a></li>
  </ul>
  
  <div class="tab-main">
    <div class="tab-content col-md-12">
          <div id="note" class="tab-pane fade in active">
              <div class="note col-md-12">
                  <div class="column1 col-md-6 col-sm-6 col-sx-12">
                    <h4> 
                      <?php 
                      $options = array('language' => $language, 'default' => t('Thông báo gửi đến'));
                      $variable = variable_build('anhgiang_note_alert', $options);
                      print variable_get_value($variable, $options); 
                      ?>
                    </h4>
                    <?php
                        $view = views_get_view_result('notes_of_project', 'block_alert_user', $term->tid);
                        $result = count($view);
                        $rescount = 0;
                        if ($result) {
                            print views_embed_view('notes_of_project', 'block_alert_user', $term->tid);
                        }
                        $rescount = $rescount + $result;
                        
                        $childs= taxonomy_get_children($term->tid);
                        
                                
                        foreach($childs as $termchild) {
                            $view = views_get_view_result('notes_of_project', 'block_alert_user', $termchild->tid);
                            $result = count($view);
                            $rescount = $rescount + $result;
                            if ($result) {
                                print views_embed_view('notes_of_project', 'block_alert_user', $termchild->tid);
                            }
                        }
                        if(!$rescount) {
                            print t("Không có thông báo nào");
                        }
                        
                    ?>
                  </div>
                  <div class="column2 col-md-6 col-sm-6 col-sx-12">
                    <h4> 
                      <?php           
                        $options = array('language' => $language, 'default' => t('Thông báo của tôi'));
                        $variable = variable_build('anhgiang_note_user', $options);
                        print variable_get_value($variable, $options); 
                      ?>
                    </h4>
                    <?php
                        $view = views_get_view_result('notes_of_project', 'block', $term->tid);
                        $result = count($view);
                        $rescount = 0;
                        if ($result) {
                            print views_embed_view('notes_of_project', 'block', $term->tid);
                        }
                        $rescount = $rescount + $result;
                
                        $childs= taxonomy_get_children($term->tid);

                        foreach($childs as $termchild) {
                            $view = views_get_view_result('notes_of_project', 'block', $termchild->tid);
                            $result = count($view);
                            $rescount = $rescount + $result;
                            if ($result) {
                                print views_embed_view('notes_of_project', 'block', $termchild->tid);
                            }
                        }
                        if(!$rescount) {
                            print t("Không có thông báo nào");
                        }
                    ?>
                  </div>
             </div>
          </div>
          
          <div id="task" class="tab-pane fade">
              <div class="task col-md-12">
                  <div class="column1 col-md-6 col-sm-6 col-sx-12">
                    <h4>       
                    <?php           
                        $options = array('language' => $language, 'default' => t('Công việc của tôi'));
                        $variable = variable_build('anhgiang_task_user', $options);
                        print variable_get_value($variable, $options); 
                    ?>
                    </h4>
                    <?php    
                        $view = views_get_view_result('tasks_of_project', 'block', $term->tid);
                        $result = count($view);
                        $rescount = 0;
                        if ($result) {
                            print views_embed_view('tasks_of_project', 'block', $term->tid);
                        }
                        
                        $rescount = $rescount + $result;
                        
                        $childs= taxonomy_get_children($term->tid);
                        
                        foreach($childs as $termchild) {
                            $view = views_get_view_result('tasks_of_project', 'block', $termchild->tid);
                            $result = count($view);
                            $rescount = $rescount + $result;
                            if ($result) {
                                print views_embed_view('tasks_of_project', 'block', $termchild->tid);
                            }
                        }
                        if(!$rescount) {
                            print t("Không có công việc nào");
                        }
                        
                    ?>
                  </div>
                  <div class="column2 col-md-6 col-sm-6 col-sx-12">
                    <h4> 
                    <?php           
                        $options = array('language' => $language, 'default' => t('Tất cả công việc của dự án'));
                        $variable = variable_build('anhgiang_task_all', $options);
                        print variable_get_value($variable, $options); 
                    ?>
                    </h4>
                    <?php
                        $view = views_get_view_result('tasks_of_project', 'block_all_task', $term->tid);
                        $result = count($view);
                        $rescount = 0;
                        if ($result) {
                            print views_embed_view('tasks_of_project', 'block_all_task', $term->tid);
                        }
                        
                        $rescount = $rescount + $result;
                        
                        $childs= taxonomy_get_children($term->tid);
                        
                        foreach($childs as $termchild) {
                            $view = views_get_view_result('tasks_of_project', 'block_all_task', $termchild->tid);
                            $result = count($view);
                            $rescount = $rescount + $result;
                            if ($result) {
                                print views_embed_view('tasks_of_project', 'block_all_task', $termchild->tid);
                            }
                        }
                        if(!$rescount) {
                            print t("Không có công việc nào");
                        }
                    ?>
                  </div>
              </div>
          </div>
          
          <div id="report" class="tab-pane fade">
              <div class="report col-md-12">
                  <div class="column1 col-md-6 col-sm-6 col-sx-12">
                    <h4> <?php print t("Báo cáo tôi tạo"); ?></h4>
                    <?php
                        $view = views_get_view_result('tasks_of_project', 'block_user_report', $term->tid);
                        $result = count($view);
                        $rescount = 0;
                        if ($result) {
                            print views_embed_view('tasks_of_project', 'block_user_report', $term->tid);
                        }
                        
                        $rescount = $rescount + $result;
                        
                        $childs= taxonomy_get_children($term->tid);
                        
                        foreach($childs as $termchild) {
                            $view = views_get_view_result('tasks_of_project', 'block_user_report', $termchild->tid);
                            $result = count($view);
                            $rescount = $rescount + $result;
                            if ($result) {
                                print views_embed_view('tasks_of_project', 'block_user_report', $termchild->tid);
                            }
                        }
                        if(!$rescount) {
                            print t("Không có báo cáo nào");
                        }

                    ?>
                  </div>
                  <div class="column2 col-md-6 col-sm-6 col-sx-12">
                    <h4> <?php print t("Tất cả báo cáo dự án"); ?></h4>
                    <?php
                        $view = views_get_view_result('tasks_of_project', 'block_all_report', $term->tid);
                        $result = count($view);
                        $rescount = 0;
                        if ($result) {
                            print views_embed_view('tasks_of_project', 'block_all_report', $term->tid);
                        }
                        
                        $rescount = $rescount + $result;
                        
                        $childs= taxonomy_get_children($term->tid);
                        
                        foreach($childs as $termchild) {
                            $view = views_get_view_result('tasks_of_project', 'block_all_report', $termchild->tid);
                            $result = count($view);
                            $rescount = $rescount + $result;
                            if ($result) {
                                print views_embed_view('tasks_of_project', 'block_all_report', $termchild->tid);
                            }
                        }
                        if(!$rescount) {
                            print t("Không có báo cáo nào");
                        }
                    ?>
                  </div>
             </div>
          </div>
     </div>
    </div> 
    <div class="clearfix"></div>
      
   
  <?php endif; ?>

      <div class="project">
            <?php       
                print render($content['description']); 
            ?>
      </div>


</div>

<script type="text/javascript">
$(document).ready(function(){ 
    $("#manage li:eq(1) a").tab('show');
});
</script>