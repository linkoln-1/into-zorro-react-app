import React from 'react';
import styles from '../../../../../common/Common.module.css';

function ImageCafe(props) {
  return (
    <div className={styles.BigImage}>
      <div className={styles.tittleRestaurant}>
        <span>{props.image.title}</span>
      </div>
      <div className={styles.opacity}>
        <img src={props.image.url} alt="images" />
      </div>
    </div>
  );
}

export default ImageCafe;
