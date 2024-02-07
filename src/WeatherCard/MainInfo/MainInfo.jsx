import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';
import moment from 'moment';
import 'moment/min/locales.min';
import { useTranslation } from 'react-i18next';

const MainInfo = observer(({ city, imgSrc, weather }) => {
    const { store } = useContext(Context);
    const { t } = useTranslation();

    return (
        <div className="main-info">
            <div className="city-date">
                <span style={{ fontWeight: 400 }}>{city}</span>
                <span style={{ fontWeight: 300 }}>{moment().locale(store.choosenLanguage).format('ddd, DD MMMM, HH:mm')}</span>
            </div>
            <div className="icon-main">
                <img className='icon' src={imgSrc} alt='icon' />
                <span className='main-name'>{t(weather[0]?.weather[0]?.main)}</span>
            </div>
        </div>
    );
})

export default MainInfo;
