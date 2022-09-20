import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from '../../icons.js';
import './main.css';

registerBlockType('gothemify-plus/auth-modal', {
	icon: {
		src: icons.primary,
	},
	edit({ attributes, setAttributes }) {
		const { showRegister } = attributes;
		const blockProps = useBlockProps();

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('General', 'gothemify-plus')}></PanelBody>
				</InspectorControls>
				<div {...blockProps}>
					{__(
						'This block is not previewable from the editor. View your site for a live demo.',
						'gothemify-plus'
					)}
				</div>
			</>
		);
	},
});
