import React, { useState } from 'react'
import hexToRgb from '../hexToRgb'
import changeLightness  from '../changeLightness '

const ERROR_BG_COLOR = 'rgb(169, 27, 27)',
    DEFAULT_RESULT_FIELD_COLOR = 'rgb(255, 255, 255)'

function Converter() {
    const [hex, setHex] = useState('');
    const [rgb, setRgb] = useState(null);
    const [isError, setIsError] = useState(false)

    const handleHex = event => {
        const {value} = event.target;

        if (value.length <= 7) {
            setHex(value)
            setRgb(null)
            setIsError(false);
        };
        
        if (value.length === 7) {
            const res = hexToRgb(value)
            setRgb(res || ERROR_BG_COLOR)
            if (!res) setIsError(true);
        };
    };

    return (
        <div className='converter' style={{background: rgb}}>
            <input type='text' value={hex} onChange={handleHex} placeholder='#123456'/>
            <div className='result' style={{background: rgb ? changeLightness(rgb, 20) : DEFAULT_RESULT_FIELD_COLOR}}>
                <p>{isError ? 'Ошибка!' : rgb}</p> 
            </div>
        </div>
    )
}

export default Converter

