export const enum Languages {
    RUSSIAN = 1,
    ENGLISH
}

export const formatLocale = (locale: Languages) => {
    switch (locale) {
        case Languages.RUSSIAN:
            return "RU"
        case Languages.ENGLISH:
            return "ENG"
    }
}