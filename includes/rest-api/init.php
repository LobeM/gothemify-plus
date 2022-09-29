<?php

function gtp_rest_api_init()
{
    register_rest_route('gtp/v1', '/signup', [
        'methods' => 'POST',
        'callback' => 'gtp_rest_api_signup_handler',
        'permission_callback' => '__return_true',
    ]);
}
