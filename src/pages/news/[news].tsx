import React from "react";
import Header from "../../components/header/Header";
import styles from '../index.module.css'

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from 'redux-thunk'
import { useTypedSelector } from "../../components/grid/Grid";
import { Action } from 'redux'
import {fetchNews} from '../../store/news'
import animations from '../../styles/loading.module.css'
import { CardProps } from "@/components/cards/Card";
import { Languages } from "@/components/langSwitcher/language";



const New = (props: CardProps) => {

    const useNewsFetcher = () => {
        const [fetched, setFetched] = useState<boolean>(false)
    
        const dispatch: ThunkDispatch<any, void, Action> = useDispatch()
        const { news } = useTypedSelector(state => state.news)
        const {locale} = useTypedSelector(state => state.locale)
    
        useEffect(() => {
            setFetched(false)
    
            setTimeout(async () => {
                await dispatch(fetchNews({
                    query : {
                        lang_id: locale
                    }
                }))
                setFetched(true)
            }, 1000)
        },[dispatch, locale])
    
        return { news, fetched }
    }

    const router = useRouter()
    const {fetched, news } = useNewsFetcher()

    const id = router.query.news

    const currentNews = news.find(item => item.id.toString() === id)

    const {locale} = useTypedSelector(state => state.locale)

    const title = () => {
      return locale === Languages.RUSSIAN ? 'Новость' : 'New'
    }


    return (
        <>
            <Header/>
            <div className={styles.container}>
                <h1 className={`${styles.title} ${styles.textColor} ${fetched ? "" : animations.skeleton}`}>{title()}</h1>
                {
                    fetched ? <div dangerouslySetInnerHTML={{ __html: currentNews!.lead }}/> : null
                }
            </div>
        </>
    );
}

export default New