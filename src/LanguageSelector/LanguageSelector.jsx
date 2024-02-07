import React, { useContext, useEffect, useState } from 'react';
import LanguageOptions from './LanguageOptions';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import './languageSelector.css';

const LanguageSelector = observer(() => {
    const [show, setShow] = useState(false);
    const [choosenLanguage, setChoosenLanguage] = useState(localStorage.getItem('lng') || 'en');
    const { i18n } = useTranslation();
    const { store } = useContext(Context);

    useEffect(() => {
        const lng = localStorage.getItem('lng');
        if (lng) {
            i18n.changeLanguage(lng);
            store.setChoosenLanguage(lng);
            if (choosenLanguage === 'he') document.getElementById('root').style.direction = 'rtl';
            else document.getElementById('root').style.direction = 'ltr';
        }
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        store.setChoosenLanguage(lng);
        localStorage.setItem('lng', lng);
        if (lng === 'he') document.getElementById('root').style.direction = 'rtl';
        else document.getElementById('root').style.direction = 'ltr';
        setChoosenLanguage(lng);
    }

    const showOrHide = () => {
        setShow(prev => !prev);
    }

    return (
        <div className='language-selector' onClick={() => showOrHide()}>
            <div className='selector'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12.17" height="12.17" viewBox="0 0 12.17 12.17">
                    <path id="Icon_material-language" data-name="Icon material-language" d="M9.079,3A6.085,6.085,0,1,0,15.17,9.085,6.082,6.082,0,0,0,9.079,3ZM13.3,6.651H11.5a9.522,9.522,0,0,0-.84-2.166A4.886,4.886,0,0,1,13.3,6.651ZM9.085,4.241a8.572,8.572,0,0,1,1.162,2.41H7.923A8.572,8.572,0,0,1,9.085,4.241ZM4.375,10.3a4.76,4.76,0,0,1,0-2.434H6.432a10.049,10.049,0,0,0-.085,1.217A10.049,10.049,0,0,0,6.432,10.3Zm.5,1.217h1.8a9.522,9.522,0,0,0,.84,2.166A4.86,4.86,0,0,1,4.874,11.519Zm1.8-4.868h-1.8A4.86,4.86,0,0,1,7.509,4.485,9.522,9.522,0,0,0,6.669,6.651Zm2.416,7.277a8.572,8.572,0,0,1-1.162-2.41h2.324A8.572,8.572,0,0,1,9.085,13.928ZM10.509,10.3H7.661a8.953,8.953,0,0,1-.1-1.217,8.875,8.875,0,0,1,.1-1.217h2.848a8.875,8.875,0,0,1,.1,1.217A8.953,8.953,0,0,1,10.509,10.3Zm.152,3.383a9.522,9.522,0,0,0,.84-2.166h1.8a4.886,4.886,0,0,1-2.635,2.166ZM11.738,10.3a10.049,10.049,0,0,0,.085-1.217,10.049,10.049,0,0,0-.085-1.217h2.057a4.76,4.76,0,0,1,0,2.434Z" transform="translate(-3 -3)" fill="#afafaf" />
                </svg>
                <span className='choosen-language'>{choosenLanguage.toUpperCase()}</span>
                {show ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up">
                        <polyline points="18 15 12 9 6 15" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                )}
            </div>
            {show && <LanguageOptions changeLanguage={changeLanguage} />}
        </div>
    );
});

export default LanguageSelector;
