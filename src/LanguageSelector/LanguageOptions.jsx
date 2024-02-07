import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useRef } from 'react';
import { Context } from '..';

const LanguageOptions = observer(({ changeLanguage }) => {
    const { store } = useContext(Context);
    const optionsRef = useRef();

    useEffect(() => {
        if (store.choosenLanguage === 'he') {
            Array.from(optionsRef.current.children).map(child => child.classList.add('lang-rtl'));
        }
    }, []);

    return (
        <div ref={optionsRef} className='language-options'>
            <span className='lang' onClick={() => changeLanguage('en')}>EN</span>
            <span className='lang' onClick={() => changeLanguage('ua')}>UA</span>
            <span className='lang' onClick={() => changeLanguage('he')}>HE</span>
        </div>
    );
})

export default LanguageOptions;
