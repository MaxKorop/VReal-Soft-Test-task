import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                "wind": 'Wind',
                "humidity": 'Humidity',
                "pressure": 'Pressure',
                "feels": 'Feels like:',
                "add": "Add",
                "Thunderstorm": "Thunderstorm",
                "Drizzle": "Drizzle",
                "Rain": "Rain",
                "Snow": "Snow",
                "Mist": "Mist",
                "Smoke": "Smoke",
                "Haze": "Haze",
                "Fog": "Fog",
                "Sand": "Sand",
                "Dust": "Dust",
                "Ash": "Ash",
                "Squall": "Squall",
                "Tornado": "Tornado",
                "Clear": "Clear",
                "Clouds": "Clouds"
            }
        },
        uk: {
            translation: {
                'wind': 'Вітер',
                'humidity': 'Вологість',
                'pressure': 'Тиск',
                'feels': 'Відчувається як:',
                "add": 'Додати',
                "Thunderstorm": "Гроза",
                "Drizzle": "Дощик",
                "Rain": "Дощ",
                "Snow": "Сніг",
                "Mist": "Туман",
                "Smoke": "Дим",
                "Haze": "Серпанок",
                "Fog": "Туман",
                "Sand": "Пісок",
                "Dust": "Пил",
                "Ash": "Зола",
                "Squall": "Шквал",
                "Tornado": "Торнадо",
                "Clear": "Чисто",
                "Clouds": "Хмарно"
            }
        },
        he: {
            translation: {
                'wind': 'רוּחַ',
                'humidity': 'לחות',
                'pressure': 'לַחַץ',
                'feels': 'זה מרגיש כמו:',
                "add": 'להוסיף',
                "Thunderstorm": "סוּפַת רַעֲמִים",
                "Drizzle": "זרזיף",
                "Rain": "גֶשֶׁם",
                "Snow": "שֶׁלֶג",
                "Mist": "עֲרָפֶל",
                "Smoke": "עָשָׁן",
                "Haze": "עֲרָפֶל",
                "Fog": "עֲרָפֶל",
                "Sand": "חוֹל",
                "Dust": "אָבָק",
                "Ash": "אֵפֶר",
                "Squall": "תְזָזִית",
                "Tornado": "טוֹרנָדוֹ",
                "Clear": "ברור",
                "Clouds": "עננים"
            }
        }
    }
});

export default i18n;