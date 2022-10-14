import { registerBlockType } from '@wordpress/blocks';
import {
  useBlockProps,
  InspectorControls,
  InnerBlocks,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from '../../icons.js';
import './main.css';

registerBlockType('gothemify-plus/team-members-group', {
  icon: {
    src: icons.primary,
  },
  edit({ attributes, setAttributes }) {
    const { columns, imageShape } = attributes;
    const blockProps = useBlockProps();

    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Settings', 'gothemify-plus')}>
            <RangeControl
              label={__('Columns', 'gothemify-plus')}
              onChange={(columns) => setAttributes({ columns })}
              value={columns}
            />
            <SelectControl
              label={__('Image Shape', 'gothemify-plus')}
              value={imageShape}
              options={[
                { label: __('Hexagon', 'gothemify-plus'), value: 'hexagon' },
                { label: __('Rabbet', 'gothemify-plus'), value: 'rabbet' },
                { label: __('Pentagon', 'gothemify-plus'), value: 'pentagon' },
              ]}
              onChange={(imageShape) => setAttributes({ imageShape })}
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <InnerBlocks
            orientation='horizontal'
            allowedBlocks={['gothemify-plus/team-member']}
          />
        </div>
      </>
    );
  },
  save({ attributes }) {
    const blockProps = useBlockProps.save();

    return (
      <div {...blockProps}>
        <InnerBlocks.Content />
      </div>
    );
  },
});
