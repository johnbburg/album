<?php
/**
 * @file
 * global.features.user_role.inc
 */

/**
 * Implements hook_user_default_roles().
 */
function global_user_default_roles() {
  $roles = array();

  // Exported role: Contributor.
  $roles['Contributor'] = array(
    'name' => 'Contributor',
    'weight' => 2,
  );

  // Exported role: Developer.
  $roles['Developer'] = array(
    'name' => 'Developer',
    'weight' => 3,
  );

  return $roles;
}
