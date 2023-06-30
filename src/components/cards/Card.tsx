import React from 'react';
import Image from 'next/image'

import styles from '../../pages/index.module.css'
import Link from 'next/link'
import { useTypedSelector } from '../grid/Grid';
import { Languages } from '../langSwitcher/language';
import { News } from '@/store/actions';


export type CardProps = News

const Card = (props: CardProps) => {

    const {locale} = useTypedSelector(state => state.locale)

    const charsToDisplay = 200

    const formattedDate = new Date(Date.parse(props.date))
        .toLocaleDateString(locale === Languages.RUSSIAN ? "ru-RU" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })

    const formattedTitle = () => {
        const text = props.title

        return text.length > charsToDisplay
            ? `${text.slice(0, charsToDisplay - 3)}...`
            : text
    }

    console.log(props)


    return (
        <Link href={`/news/${props.id}`}>
            <div className={styles.cardContainer} >
                <div className={styles.imageContainer} >

                     <Image src={props.image_cover} alt="pic"/>

                </div>
                <div className={styles.card} >
                    <p className={styles.secondaryText}>{formattedDate}</p>
                    <h4 className={`${styles.textColor} ${styles.cardTitle}`}>{formattedTitle()}</h4>
                </div>
            </div>
        </Link>
    );
    
};

export default Card;