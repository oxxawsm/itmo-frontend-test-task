import React from 'react';
import styles from '../../pages/index.module.css'
import animations from '../../styles/loading.module.css'

const CardSkeleton = () => {
    return (
        <div className={styles.cardContainer} style={{ pointerEvents: "none" }}>
            <div className={styles.imageContainer} >
                <div className={`${animations.loadGrid} ${animations.loadImage}`}/>
            </div>
            <div className={styles.card} >
                <p className={`${animations.loadGrid} ${animations.loadDate}`}/>
                <h4 className={`${animations.loadGrid} ${animations.loadText}`}/>
            </div>
        </div>
    );
};

export default CardSkeleton;