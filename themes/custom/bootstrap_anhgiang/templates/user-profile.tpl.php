<?php

/**
 * @file
 * Default theme implementation to present all user profile data.
 *
 * This template is used when viewing a registered member's profile page,
 * e.g., example.com/user/123. 123 being the users ID.
 *
 * Use render($user_profile) to print all profile items, or print a subset
 * such as render($user_profile['user_picture']). Always call
 * render($user_profile) at the end in order to print all remaining items. If
 * the item is a category, it will contain all its profile items. By default,
 * $user_profile['summary'] is provided, which contains data on the user's
 * history. Other data can be included by modules. $user_profile['user_picture']
 * is available for showing the account picture.
 *
 * Available variables:
 *   - $user_profile: An array of profile items. Use render() to print them.
 *   - Field variables: for each field instance attached to the user a
 *     corresponding variable is defined; e.g., $account->field_example has a
 *     variable $field_example defined. When needing to access a field's raw
 *     values, developers/themers are strongly encouraged to use these
 *     variables. Otherwise they will have to explicitly specify the desired
 *     field language, e.g. $account->field_example['en'], thus overriding any
 *     language negotiation rule that was previously applied.
 *
 * @see user-profile-category.tpl.php
 *   Where the html is handled for the group.
 * @see user-profile-item.tpl.php
 *   Where the html is handled for each item in the group.
 * @see template_preprocess_user_profile()
 *
 * @ingroup themeable
 */     
 global $language;
 global $user;

?>
<div class="profile">  
    <h2 class="title"> <?php print t("Xin chào ").strtoupper($user->name);?> </h2>
    <div class="form-club">
      <?php print render($form['account']['mail']); ?>
      <div class="clearfix"></div>
      <?php print render($form['account']['pass']); ?>
      <div class="clearfix"></div>
      <?php print render($form['picture']); ?>
      <div class="clearfix"></div>
      <?php print render($form['field_department']); ?>
      <div class="clearfix"></div>
      <?php print render($form['locale']); ?>
      <div class="clearfix"></div>
      <?php print render($form['timezone']); ?>
      <?php
        print drupal_render($form['actions']);
        print drupal_render_children($form);
      ?>
    </div>
    <?php if (module_exists('anhgiang')): ?>
      <div class="note">
      <h2> 
        <?php 
        $options = array('language' => $language, 'default' => t('Thông báo gửi đến'));
        $variable = variable_build('anhgiang_note_alert', $options);
        print variable_get_value($variable, $options); 
        ?>
      </h2>
      <?php $view = views_get_view_result('notes_of_project', 'block_alert_user_all');
            $result = count($view);
          if ($result) print views_embed_view('notes_of_project', 'block_alert_user_all');
          else print t("Không có thông báo nào");
      ?>
      </div>
    <?php endif; ?>
</div>
  