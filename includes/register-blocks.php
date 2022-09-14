<?php

function gtp_register_blocks()
{
    $blocks = [
        ['name' => 'fancy-header'],
        ['name' => 'search-form', 'options' => [
            'render_callback' => 'gt_search_form_render_cb',
        ]],
    ];

    foreach ($blocks as $block) {
        register_block_type(
            GTP_PLUGIN_DIR . 'build/blocks/' . $block['name'],
            isset($block['options']) ? $block['options'] : []
        );
    }

}
