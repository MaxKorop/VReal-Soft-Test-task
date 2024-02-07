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
                "add": "Add"
            }
        },
        ua: {
            translation: {
                'wind': 'Вітер',
                'humidity': 'Вологість',
                'pressure': 'Тиск',
                'feels': 'Відчувається як:',
                "add": 'Додати'
            }
        },
        he: {
            translation: {
                'wind': 'רוּחַ',
                'humidity': 'לחות',
                'pressure': 'לַחַץ',
                'feels': 'זה מרגיש כמו:',
                "add": 'להוסיף'
            }
        }
    }
});

export default i18n;