import { makeAutoObservable } from "mobx";

export class WeatherStore {
    constructor() {
        this._cities = JSON.parse(localStorage.getItem('cities')) || [];
        this._error = {};
        this._errorCities = [];
        this._choosenLanguage = '';
        makeAutoObservable(this);
    }

    get cities() {
        return this._cities;
    }

    addToCities(value) {
        if (!JSON.parse(JSON.stringify(this._cities)).some(city => city === value)) {
            this._cities.push(value);
            localStorage.setItem('cities', JSON.stringify(this._cities));
        } else console.error("Cannot add this city, because its already here")
    }

    removeFromCities(cityToRemove) {
        this._cities = this._cities.filter(city => city !== cityToRemove);
        localStorage.setItem('cities', JSON.stringify(this._cities));
    }

    get error() {
        return this._error;
    }

    setError(value) {
        this._error = value;
    }

    get choosenLanguage() {
        return this._choosenLanguage;
    }

    setChoosenLanguage(value) {
        this._choosenLanguage = value;
    }

    get errorCities() {
        return this._errorCities;
    }

    addToErrorCities(city) {
        this._errorCities.push(city);
    }

    errorCitiesIncludes(city) {
        return JSON.parse(JSON.stringify(this._errorCities)).some(errorCity => errorCity === city);
    }
}