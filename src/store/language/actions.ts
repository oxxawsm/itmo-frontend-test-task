import { Languages } from "@/components/langSwitcher/language";

export type Action = {
    type: Actions,
    payload: Languages
}

export const enum Actions {
    CHANGE_LANGUAGE = "CHANGE_LANGUAGE",
}

export const languageAction = (payload: Languages) => ({ type: Actions.CHANGE_LANGUAGE, payload: payload })