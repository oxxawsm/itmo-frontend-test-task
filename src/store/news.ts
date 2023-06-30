import { Dispatch } from "react";
import { Action, fetchNewsAct } from "./actions";
import { News } from "./actions";
import { Languages } from "@/components/langSwitcher/language";

export type FetchQuery = {
    lang_id?: Languages
    per_page?: number,
    lead?: boolean,
}

interface Fetcher {
    fetchData(url: string, query?: FetchQuery): Promise<News[]>
}

class FetchService implements Fetcher {
    async fetchData(url: string, query?: FetchQuery): Promise<News[]> {
        const queryString = `&language_id=${query?.lang_id || 1}&per_page=${query?.per_page || 9}&lead=${query?.lead || true}` || ""
        const response = await fetch(`${url}${queryString}`)

        return (await response.json()).news
    }
}

export const fetchNews = ({
    url = 'https://news.itmo.ru/api/news/list/?ver=2.0', query}: {url?: string, query?: FetchQuery}) => {
    const fetchService = new FetchService()
    return async (dispatch: Dispatch<Action>) => {
        try {
            const data = await fetchService.fetchData(url, query)
            dispatch(fetchNewsAct(data))
        }
        catch (e) { console.error(e)}
    }
}