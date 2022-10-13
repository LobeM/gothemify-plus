<?php

function gtp_rest_api_init()
{
    register_rest_route('gtp/v1', '/signup', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'gtp_rest_api_signup_handler',
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('gtp/v1', '/signin', [
        'methods' => WP_REST_Server::EDITABLE,
        'callback' => 'gtp_rest_api_signin_handler',
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('gtp/v1', '/rate', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'gtp_rest_api_add_rating_handler',
        'permission_callback' => 'is_user_logged_in',
    ]);
}
