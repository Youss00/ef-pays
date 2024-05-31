<?php

/**
 * Plugin Name: Pays
 * Plugin URI: https://github.com/Youss00
 * Description: Affiche les destinations selon le pays sélectionné.
 * Version: 1.0.0
 * Author: Youssra Seghier

 */

function wtp_enqueue_scripts()
{
    $version_css = filemtime(plugin_dir_path(__FILE__) . 'style.css');
    $version_js = filemtime(plugin_dir_path(__FILE__) . 'js/pays.js');

    wp_enqueue_style('wp_travel_plugin_css', plugin_dir_url(__FILE__) . 'style.css', array(), $version_css);
    wp_enqueue_script('wp_travel_plugin_js', plugin_dir_url(__FILE__) . 'js/pays.js', array('jquery'), $version_js, true);
}
add_action('wp_enqueue_scripts', 'wtp_enqueue_scripts');

function wtp_create_country_menu()
{
    $contenu = '<button class="bouton_categorie">France</button>
    <button class="bouton_categorie">États-Unis</button>
    <button class="bouton_categorie">Canada</button>
    <button class="bouton_categorie">Argentine</button>
    <button class="bouton_categorie">Chili</button>
    <button class="bouton_categorie">Belgique</button>
    <button class="bouton_categorie">Maroc</button>
    <button class="bouton_categorie">Mexique</button>
    <button class="bouton_categorie">Japon</button>
    <button class="bouton_categorie">Italie</button>
    <button class="bouton_categorie">Islande</button>
    <button class="bouton_categorie">Chine</button>
    <button class="bouton_categorie">Grèce</button>
    <button class="bouton_categorie">Suisse</button>';

    $contenu .= '<div class="contenue__restapi"></div>';
    $contenu .= '<div id="pays_selectionne"></div>';


    return $contenu;
}
add_shortcode('wtp_country_menu', 'wtp_create_country_menu');
