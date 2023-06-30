import { Languages } from "@/components/langSwitcher/language";
import { Action, Actions } from "./actions";

export type DefaultLangState = {
    locale: Languages
}

const initialState: DefaultLangState = {
    locale: Languages.RUSSIAN
};

const languageReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.CHANGE_LANGUAGE:
            return { ...state, locale: action.payload }
        default:
            return { ...state }
    }
}

export default languageReducer