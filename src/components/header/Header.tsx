import React, {Component, useState} from 'react';
import './styles.css';
import {CountryObject} from '../../config/Constants';


interface ClickProps {
    changeCountry: (value: any) => void;
}

export default function Header  (Props: ClickProps) {
    const [country, setCountry] = useState<string>('in'); 
    return (
        <div className="topnav"> 
        <h5>MyNews</h5> 
        <a href="#home">Home</a>
        <select 
        className="selectCountry" 
        value={country} 
        onChange={(
                ev: React.ChangeEvent<HTMLSelectElement>,
            ): void => 
            {
                setCountry(ev.target.value);
                Props.changeCountry(ev.target.value);
            }
            }> 
        {CountryObject.map((country) => <option value={country.code}>{country.name}</option> )}
        </select>
    </div>
 
    );
}