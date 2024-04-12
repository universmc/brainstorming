<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index</title>
    <?php wp_head(); ?>
</head>
<body>
<header>
<?php
if (has_nav_menu('navBar')) :
        wp_nav_menu(array(
            'theme_location' => 'navBar',
            'container_class' => 'menu-items'
));
    endif;
?>
</header>

