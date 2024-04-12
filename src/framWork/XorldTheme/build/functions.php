<?php

function Xorldtheme_setup() {
    // Ajouter le support des menus
    add_theme_support('menus');

    // Enregistrer un emplacement de menu
    register_nav_menus(array(
        'navBar' => __('Menu En-tête', 'Xorldtheme'),
    ));
    
}

add_action('after_setup_theme', 'Xorldtheme_setup');




function Xorldtheme_scripts() {
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_script('script', get_template_directory_uri() . '/script.js', array(), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'Xorldtheme_scripts');

?>