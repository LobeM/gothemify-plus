import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
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
					<PanelBody title={__('General', 'gothemify-plus')}>
						<ToggleControl
							label={__('Show Register', 'gothemify-plus')}
							help={__(
								showRegister
									? 'Showing registration form'
									: 'Hiding registration form',
								'gothemify-plus'
							)}
							checked={showRegister}
							onChange={(showRegister) => setAttributes({ showRegister })}
						/>
					</PanelBody>
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
