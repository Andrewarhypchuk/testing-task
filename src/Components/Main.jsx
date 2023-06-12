import React from "react";
import styles from "./Main.module.css";
import arrowdown from '../Assets/images/Arrow-down.svg';
import devileImg from '../Assets/images/DevileImage.svg';
import starImg from '../Assets/images/StarImage.svg';

const Main = () => {

    return <div className={styles.main}>
               <div className={styles.main__title}>
                  The <span>website is under development</span>, and our team is working 
                  hard to release it faster
                </div> 
               <div className={styles.main__subtitle}>
                   <span>If you want to order IOS Applications</span> for gambling, betting 
                   or other verticals, <span>please contact us in telegram</span>
                </div>
               <img className={styles.main__arrowDown} src={arrowdown}  alt="arrow"/>
               <img className={styles.main__devileImg} src={devileImg} alt="devileImg" />
               <img className={styles.main__starImg} src={starImg}  alt="startImg" />
           </div>

};

export default Main;