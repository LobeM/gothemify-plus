<?php

function gtp_save_cuisine_meta($termID)
{
    if (!isset($_POST['gtp_more_info_url'])) {
        return;
    }

    update_term_meta($termID, 'more_info_url', esc_url_raw($_POST['gtp_more_info_url']));
}
