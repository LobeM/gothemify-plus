import { registerBlockType } from '@wordpress/blocks';
import {
  useBlockProps,
  InspectorControls,
  RichText,
  MediaPlaceholder,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextareaControl } from '@wordpress/components';
import icons from '../../icons.js';
import './main.css';

registerBlockType('gothemify-plus/team-member', {
  icon: {
    src: icons.primary,
  },
  edit({ attributes, setAttributes }) {
    const { name, title, bio, imgID, imgAlt, imgURL, socialHandles } =
      attributes;
    const blockProps = useBlockProps();

    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Settings', 'gothemify-plus')}>
            <TextareaControl
              label={__('Alt Attribute', 'gothemify-plus')}
              value={imgAlt}
              onChange={(imgAlt) => setAttributes({ imgAlt })}
              help={__(
                'Description of your image for screen readers.',
                'gothemify-plus'
              )}
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <div className='author-meta'>
            <img />
            <MediaPlaceholder
              allowedTypes={['image']}
              accept={'image/*'}
              icon='admin-users'
              onSelect={(img) => {
                console.log(img);
              }}
              onError={(err) => console.error(err)}
            />
            <p>
              <RichText
                placeholder={__('Name', 'gothemify-plus')}
                tagName='strong'
                onChange={(name) => setAttributes({ name })}
                value={name}
              />
              <RichText
                placeholder={__('Title', 'gothemify-plus')}
                tagName='span'
                onChange={(title) => setAttributes({ title })}
                value={title}
              />
            </p>
          </div>
          <div className='member-bio'>
            <RichText
              placeholder={__('Member bio', 'gothemify-plus')}
              tagName='p'
              onChange={(bio) => setAttributes({ bio })}
              value={bio}
            />
          </div>
          <div className='social-links'></div>
        </div>
      </>
    );
  },
  save({ attributes }) {
    const {
      name,
      title,
      bio,
      imgURL,
      imgID,
      imgAlt,
      socialHandles,
      imageShape,
    } = attributes;
    const blockProps = useBlockProps.save();

    return (
      <div {...blockProps}>
        <div class='author-meta'>
          <img />
          <p>
            <RichText.Content tagName='strong' value={name} />
            <RichText.Content tagName='span' value={title} />
          </p>
        </div>
        <div class='member-bio'>
          <RichText.Content tagName='p' value={bio} />
        </div>
        <div class='social-links'></div>
      </div>
    );
  },
});
