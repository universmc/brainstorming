<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <div id="page" class="site">
        <header id="masthead" class="site-header">
            <!-- Insérez ici le code de votre en-tête -->
        </header><!-- #masthead -->
        
        <main id="primary" class="site-main">
            <!-- Insérez ici le code de votre corps principal -->
        </main><!-- #primary -->
        
        <footer id="colophon" class="site-footer">
            <!-- Insérez ici le code de votre pied de page -->
        </footer><!-- #colophon -->
    </div><!-- #page -->
    <?php wp_footer(); ?>
</body>
</html>