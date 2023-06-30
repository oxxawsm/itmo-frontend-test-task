import React from 'react';

import Card from "../cards/Card";
import CardSkeleton from "../cards/Skeleton";
import styles from '../grid/Grid.module.css'

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import {fetchNews} from '../../store/news'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppState } from "../../store/store";

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector


const Grid = () => {
    const useNewsFetcher = () => {
        const [fetched, setFetched] = useState<boolean>(false)
    
        const dispatch: ThunkDispatch<any, void, Action> = useDispatch()
        const { news } = useTypedSelector(state => state.news)

        const {locale} = useTypedSelector(state => state.locale)
    

        useEffect(() => {
            const fetchData = async () => {
                setFetched(false);
        
                await new Promise(resolve => setTimeout(resolve, 1000)); 
        
                await dispatch(fetchNews({
                    query: {
                        lang_id: locale
                    }
                }));
        
                setFetched(true);
            };
        
                fetchData();
            }, [dispatch, locale]);
        
            return { news, fetched };
        }

    const { fetched, news } = useNewsFetcher()

    return (
        <div className={styles.grid}>
            {
                fetched ?
                    news.map((model, index) => {
                        return <Card key={index}
                            date={model.date}
                            id={model.id}
                            image_cover={model.image_cover}
                            title={model.title}
                            lead={model.lead}/>
                    }) : new Array(9).fill(1).map((_, index) => {
                        return <CardSkeleton key={index}/>
                    })
            }
        </div>
    );
};

export default Grid;