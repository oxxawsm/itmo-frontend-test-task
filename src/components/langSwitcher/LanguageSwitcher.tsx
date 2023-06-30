import React, { useState } from 'react';
import styles from './LanguageSwitcher.module.css'
import { formatLocale } from './language';
import { useTypedSelector } from '../grid/Grid';
import { Languages } from './language';
import { languageAction } from '@/store/language/actions';

import { useDispatch } from 'react-redux';

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {locale} = useTypedSelector(state => state.locale)
    const dispatch = useDispatch()

    const switchLanguages = () => {
        setIsOpen(!isOpen)
    }

    const setLanguage = (updatedLanguage: Languages) => {
        setIsOpen(false)

        if (updatedLanguage === locale) return

        dispatch(languageAction(updatedLanguage))
        setIsOpen(false)
    }

    return (
        <div className={styles.container} >
            <div className={styles.choice} onClick={switchLanguages}>
                <span>{formatLocale(locale)}</span>
                <div className={styles.arrow}/>
            </div>
            {
                isOpen ? <div className={styles.menu} >
                    <div className={styles.option} onClick={() => {
                        setLanguage(Languages.RUSSIAN)
                    }}>
                        {formatLocale(Languages.RUSSIAN)}
                    </div>
                    <div className={styles.option} onClick={() => {
                        setLanguage(Languages.ENGLISH)
                    }}>
                        {formatLocale(Languages.ENGLISH)}
                    </div>
                </div> : null
            }
        </div>
    )
}

export default LanguageSwitcher