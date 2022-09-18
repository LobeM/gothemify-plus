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
add_action('init', 'gtp_register_blocks');
