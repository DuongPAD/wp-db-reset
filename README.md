# WordPress Database Reset
Resets the WordPress database back to it's defaults.

## Installation
1. Upload the `wo-db-reset` folder to the `/wp-content/plugins/` directory or install directly through the plugin installer.
2. Activate the plugin through the 'Plugins' menu in WordPress.

## Usage
1. Visit the WordPress Reset Tools page by either clicking the link in the Admin Bar or Tools > Reset
2. Type 'reset' in the text field and click reset.

## Frequently Asked Questions
### How can I get this plugin to automatically reactive after the reset?
Add `define( 'REACTIVATE_WP_DB_RESET', true );` to `wp-config.php`.

### Can this plugin reactivate other plugins automatically after performing the reset?
Add an array called `$reactivate_wp_reset_additional` to the global scope by placing it in `wp-config.php` that contains the plugin basenames of the plugins to activate, such as:

```php
$reactivate_wp_reset_additional = array(
	'hello.php',
	'akismet/akismet.php'
);
```

## Changelog
1.0 (2020-06-19):
* Initial Public Release
