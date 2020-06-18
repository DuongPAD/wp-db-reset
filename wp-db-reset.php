<?php
/*
Plugin Name: WordPress Database Reset
Description: Resets the WordPress database back to it's defaults.
Version:     1.0
Author:      SaturnThemes
Author URI:  https://saturnthemes.com
License:     GPLv3
*/

/**
 * WP_DB_Reset class.
 * @since 0.1
 */
class WP_DB_Reset {

	/**
	 * Constructor. Contains Action/Filter Hooks.
	 * @since 1.0
	 */
	public function __construct() {
		add_action( 'wp_before_admin_bar_render', array( $this, 'admin_toolbar_link' ) );
	}

	/**
	 * Add link to the Toolbar.
	 * @since 1.0
	 */
	public function admin_toolbar_link() {
		global $wp_admin_bar;

		$wp_admin_bar->add_menu( array(
			'id'     => 'wp-db-reset',
			'title'  => 'Reset Site',
			'href'   => admin_url( 'tools.php?page=wp-db-reset' ),
			'parent' => 'site-name'
		));
	}
}

// Init.
if ( is_admin() ) {
	$wp_db_reset = new WP_DB_Reset();
}
