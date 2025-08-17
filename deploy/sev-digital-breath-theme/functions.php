<?php
// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme setup
function sevThemeSetup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'sevThemeSetup');

// Enqueue React app assets
function sevEnqueueAssets() {
    // Dequeue default WordPress styles that might conflict
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('global-styles');
    
    // Get the manifest file to get the correct asset names
    $manifest_path = get_template_directory() . '/assets/.vite/manifest.json';
    
    if (file_exists($manifest_path)) {
        $manifest = json_decode(file_get_contents($manifest_path), true);
        
        if (isset($manifest['index.html'])) {
            // Enqueue CSS files
            if (isset($manifest['index.html']['css'])) {
                foreach ($manifest['index.html']['css'] as $css_file) {
                    wp_enqueue_style(
                        'sev-react-css', 
                        get_template_directory_uri() . '/assets/' . $css_file,
                        array(), 
                        '1.0.0'
                    );
                }
            }
            
            // Enqueue JS file
            if (isset($manifest['index.html']['file'])) {
                wp_enqueue_script(
                    'sev-react-js', 
                    get_template_directory_uri() . '/assets/' . $manifest['index.html']['file'],
                    array(), 
                    '1.0.0', 
                    true
                );
            }
        }
    } else {
        // Fallback if no manifest
        wp_enqueue_style('sev-react-css', get_template_directory_uri() . '/assets/index.css', array(), '1.0.0');
        wp_enqueue_script('sev-react-js', get_template_directory_uri() . '/assets/index.js', array(), '1.0.0', true);
    }
    
    // Remove WordPress admin bar for cleaner React app
    add_filter('show_admin_bar', '__return_false');
}
add_action('wp_enqueue_scripts', 'sevEnqueueAssets');

// Remove WordPress default styles and scripts that might interfere
function sevRemoveWpDefaults() {
    // Remove WordPress emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    
    // Remove WordPress version
    remove_action('wp_head', 'wp_generator');
    
    // Remove WordPress shortlink
    remove_action('wp_head', 'wp_shortlink_wp_head');
    
    // Remove RSD link
    remove_action('wp_head', 'rsd_link');
    
    // Remove wlwmanifest.xml
    remove_action('wp_head', 'wlwmanifest_link');
}
add_action('init', 'sevRemoveWpDefaults');

// Disable WordPress REST API if not needed
function sevDisableRestApi() {
    return new WP_Error('rest_disabled', 'The REST API is disabled.', array('status' => 404));
}
add_filter('rest_authentication_errors', 'sevDisableRestApi');

// Custom login redirect for better UX
function sevLoginRedirect($redirect_to, $request, $user) {
    return home_url();
}
add_filter('login_redirect', 'sevLoginRedirect', 10, 3);
