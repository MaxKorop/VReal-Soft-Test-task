import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '..';
import './inputCity.css';
import { useTranslation } from 'react-i18next';

const InputCity = observer(() => {
    const { t } = useTranslation();
    const { store } = useContext(Context);
    const inputRef = useRef();
    const addRef = useRef();
    const [autocompleteRes, setAutocompleteRes] = useState([]);

    //Add to cities array if input value
    const addCity = () => {
        if (inputRef.current.value) {
            store.addToCities(inputRef.current.value);
            inputRef.current.value = '';
            setAutocompleteRes([]);
        }
    }

    //Request to API that autocomplete city names
    const autocomplete = async () => {
        store.setError({});
        if (inputRef.current.value) {
            const { data } = await axios.get(`http://api.geonames.org/searchJSON?name_startsWith=${inputRef.current.value}&lang=${store.choosenLanguage}&featureClass=P&maxRows=5&username=maxkorop`);
            setAutocompleteRes(data.geonames.map(geo => `${geo.toponymName}, ${geo.countryCode}`));
        } else setAutocompleteRes([]);
    }

    return (
        <div className='input-city'>
            <div className='input-wrapper'>
                <input ref={inputRef} className='input-city-name' onChange={e => autocomplete(e)} type="text" placeholder='' />
                <button ref={addRef} className='input-city-add' onClick={() => addCity()}>{t('add')}</button>
            </div>
            <span className='input-city-error'>
                {store.error.message}
            </span>
            <div className='input-city-autocomplete'>
                {autocompleteRes.map((city, i) => {
                    return (<div className='input-city-autocomplete-item' onClick={() => { inputRef.current.value = city }} key={i} >
                        <span style={{marginLeft: 10}}>{city}</span>
                    </div>)
                })}
            </div>
        </div>
    );
});

export default InputCity;
