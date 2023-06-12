import React from "react";
import styles from './RunningLine.module.css';
import runningLineImg from '../Assets/images/RunningLineImage.svg';



const RunningLine = () => {

    return <div className={styles.runningLine} >
                <img src={runningLineImg} alt="runningLineImg" />
           </div>

};

export default RunningLine;