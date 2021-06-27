import React from 'react';
import styles from "./Common.module.css";

function Footer(props) {
 return (
   <div className={styles.footer}>
     <div className={styles.company}>
      <p>
       © 1999–2021 ООО «Компания Intocode». Все права защищены.
      </p>
     </div>
    <div className="team-developers">
     <p>
      Над проектом работала команда 11.)
     </p>
    </div>
   </div>
 );
}

export default Footer;
