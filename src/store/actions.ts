export type News = {
    id: number,
    title: string,
    image_cover: string,
    date: string,
    lead: string
}

export type Action = {
    type: Actions,
    payload: News[]
}

export const enum Actions {
    FETCH_NEWS = 'FETCH_NEWS'
}

export const fetchNewsAct = (payload: News[]) => ({type: Actions.FETCH_NEWS, payload: payload})