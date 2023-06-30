// export default Home
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './index.module.css'
import Header from "../components/header/Header";
import Grid from "../components/grid/Grid";

import { Languages } from '@/components/langSwitcher/language';
import { useTypedSelector } from '../components/grid/Grid';

const Home: NextPage = () => {

  const {locale} = useTypedSelector(state => state.locale)
  const title = () => {
    return locale === Languages.RUSSIAN ? 'Новости и события' : 'News and events'
  }

    return (
        <div>
            <Head>
                <title>Test task</title>
                <meta name="theme" content="white"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Header/>
            <div className={styles.container}>
                <h1 className={`${styles.title} ${styles.textColor}`}>{title()}</h1>
                <Grid/>
            </div>
        </div>
    )
}

export default Home