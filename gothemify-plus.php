<?php
/**
 * Plugin Name:       Go Themify Plus
 * Plugin URI:        https://lobemusonda.com
 * Description:       A plugin for adding blocks to a theme.
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            Lobe Musonda
 * Author URI:        https://lobemusonda.com
 * Text Domain:       gothemify-plus
 * Domain Path:       /languages
 */

if (!function_exists('add_action')) {
    exit;
}

// Setup
define('GTP_PLUGIN_DIR', plugin_dir_path(__FILE__));

// Includes
$rootFiles = glob(GTP_PLUGIN_DIR . 'includes/*.php');
$subdirectoryFiles = glob(GTP_PLUGIN_DIR . 'includes/**/*.php');
$allFiles = array_merge($rootFiles, $subdirectoryFiles);

foreach ($allFiles as $filename) {
    include_once $filename;
}

// Hooks
register_activation_hook(__FILE__, 'gtp_activate_plugin');
add_action('init', 'gtp_register_blocks');
add_action('rest_api_init', 'gtp_rest_api_init');
add_action('wp_enqueue_scripts', 'gtp_enqueue_scripts');
add_action('init', 'gtp_recipe_post_type');
add_action('cuisine_add_form_fields', 'gtp_cuisine_add_form_fields');
add_action('create_cuisine', 'gtp_save_cuisine_meta');
add_action('cuisine_edit_form_fields', 'gtp_cuisine_edit_form_fields');
add_action('editied_cuisine', 'gtp_save_cuisine_meta');
add_action('save_post_recipe', 'gtp_save_post_recipe');
