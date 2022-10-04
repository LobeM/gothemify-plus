<?php

function gtp_enqueue_scripts()
{
    $authURLs = json_encode([
        'signup' => esc_url_raw(rest_url('gtp/v1/signup')),
    ]);

    wp_add_inline_script(
        'gothemify-plus-auth-modal-script',
        "const gtp_auth_rest = {$authURLs}",
        'before' // after
    );
}
