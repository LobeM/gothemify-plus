<?php

function gtp_register_blocks()
{
    $blocks = [
        ['name' => 'fancy-header'],
    ];

    foreach ($blocks as $block) {
        register_block_type(
            GTP_PLUGIN_DIR . 'build/blocks/' . $block['name']
        );
    }

}
