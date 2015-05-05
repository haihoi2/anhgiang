<?php
/**
 * Implements hook_variable_info().
 */
function lahalle_authorization_variable_info($options) {
  // Thông báo gửi đến.
  $variable['anhgiang_note_alert'] = array(
    'title' => t('Tiêu đề Thông báo gửi đến', array(), $options),
    'description' => t('Tiêu đề Thông báo gửi đến', array(), $options),
    'type' => 'string',
    'default' => t('Thông báo gửi đến', array(), $options),
    'group' => 'anhgiang_information',
  );
  // Thông báo của tôi.
  $variable['anhgiang_note_user'] = array(
    'title' => t('Tiêu đề Thông báo của tôi', array(), $options),
    'description' => t('Tiêu đề Thông báo của tôi', array(), $options),
    'type' => 'string',
    'default' => t('Thông báo của tôi', array(), $options),
    'group' => 'anhgiang_information',
  );        
  // Công việc của tôi.
  $variable['anhgiang_task_user'] = array(
    'title' => t('Tiêu đề Công việc của tôi', array(), $options),
    'description' => t('Tiêu đề Công việc của tôi', array(), $options),
    'type' => 'string',
    'default' => t('Công việc của tôi', array(), $options),
    'group' => 'anhgiang_information',
  ); 
  // Tất cả công việc của dự án.
  $variable['anhgiang_task_all'] = array(
    'title' => t('Tiêu đề Tất cả công việc của dự án', array(), $options),
    'description' => t('Tiêu đề tất cả công việc của dự án', array(), $options),
    'type' => 'string',
    'default' => t('Tất cả công việc của dự án', array(), $options),
    'group' => 'anhgiang_information',
  ); 
  return $variable;
}
