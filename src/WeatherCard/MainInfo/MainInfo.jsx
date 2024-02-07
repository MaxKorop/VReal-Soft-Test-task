import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';

const MainInfo = observer(({ city, imgSrc, weather }) => {
    const { store } = useContext(Context);

    const date = () => {
        if (store.choosenLanguage === 'en') {
            const month = {
                'Jan': 'January',
                'Feb': 'February',
                'Mar': 'March',
                'Apr': 'April',
                'May': 'May',
                'Jun': 'June',
                'Jul': 'July',
                'Aug': 'August',
                'Sep': 'September',
                'Oct': 'October',
                'Nov': 'November',
                'Dec': 'December'
            }
            const array = new Date().toString().slice(0, 21).split(' ');
            array[1] = month[array[1]];
            return array[0] + ', ' + array[2] + ' ' + array[1] + ', ' + array[4];
        } else if (store.choosenLanguage === 'ua') {
            const day = {
                'Mon': 'Понеділок',
                'Tue': 'Вівторок',
                'Wed': 'Середа',
                'Thu': 'Четвер',
                'Fri': 'П\'ятниця',
                'Sat': 'Субота',
                'Sun': 'Неділя'
            }
            const month = {
                'Jan': 'Січня',
                'Feb': 'Лютого',
                'Mar': 'Березня',
                'Apr': 'Квітня',
                'May': 'Травня',
                'Jun': 'Червня',
                'Jul': 'Липня',
                'Aug': 'Серпня',
                'Sep': 'Вересня',
                'Oct': 'Жовтня',
                'Nov': 'Листопада',
                'Dec': 'Грудня'
            }
            const array = new Date().toString().slice(0, 21).split(' ');
            array[0] = day[array[0]];
            array[1] = month[array[1]];
            return array[0] + ', ' + array[2] + ' ' + array[1] + ', ' + array[4];
        } else if (store.choosenLanguage === 'he') {
            const day = {
                'Mon': 'יוֹם שֵׁנִי',
                'Tue': 'יוֹם שְׁלִישִׁי',
                'Wed': 'יום רביעי',
                'Thu': 'יוֹם חֲמִישִׁי',
                'Fri': 'יוֹם שִׁישִׁי',
                'Sat': 'יום שבת',
                'Sun': 'יוֹם רִאשׁוֹן'
            }
            const month = {
                'Jan': 'יָנוּאָר',
                'Feb': 'פברואר',
                'Mar': 'מרץ',
                'Apr': 'אַפּרִיל',
                'May': 'מאי',
                'Jun': 'יוני',
                'Jul': 'יולי',
                'Aug': 'אוגוסט',
                'Sep': 'סֶפּטֶמבֶּר',
                'Oct': 'אוֹקְטוֹבֶּר',
                'Nov': 'נוֹבֶמבֶּר',
                'Dec': 'דֵצֶמבֶּר'
            }
            const array = new Date().toString().slice(0, 21).split(' ');
            array[0] = day[array[0]];
            array[1] = month[array[1]];
            return array[0] + ', ' + array[2] + ' ' + array[1] + ', ' + array[4];
        }
    };

    return (
        <div className="main-info">
            <div className="city-date">
                <span style={{ fontWeight: 400 }}>{city}</span>
                <span style={{ fontWeight: 300 }}>{date()}</span>
            </div>
            <div className="icon-main">
                <img className='icon' src={imgSrc} alt='icon' />
                <span className='main-name'>{weather[0]?.weather[0]?.main}</span>
            </div>
        </div>
    );
})

export default MainInfo;
