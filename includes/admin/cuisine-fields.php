<?php

function gtp_cuisine_add_form_fields()
{
    ?>
    <div class="form-field">
        <label><?php _e('More Info URL', 'gothemify-plus')?></label>
        <input type="text" name="gtp_more_info_url" />
        <p><?php _e('A URL a user can click to learn more information about this cuisine', 'gothemify-plus')?></p>
    </div>
    <?php
}
