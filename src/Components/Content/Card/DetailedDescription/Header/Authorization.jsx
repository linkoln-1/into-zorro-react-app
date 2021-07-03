import React from 'react';
import styles from "../../../../../common/Common.module.css"

function Authorization(props) {
 return (
   <div className="authorization">
    <div className={styles.LogoAuth}>
     <img src="https://pbs.twimg.com/media/EtU34soWYAoCYoM.jpg" alt="photo"/>
    </div>
    <div className="gmail">
     <span>Salamov@gmail.com</span>
    </div>
   </div>
 );
}

export default Authorization;
