import React from 'react';
import styles from '../../../../styles/SocialButtons.module.css';

const SocialButtons = () => {
  return (
    <div className={styles.socialButtons}>
      <a href='' target='_blank' rel='noopener noreferrer'>
        <img src='/social/fb.png' alt='Facebook' />
      </a>
      <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
        <img src='/social/x.png' alt='Twitter' />
      </a>
      <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
        <img src='/social/Instagram_icon.png' alt='Instagram' />
      </a>
      <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
        <img src='/social/in.png' alt='LinkedIn' />
      </a>
    </div>
  );
};

export default SocialButtons;
