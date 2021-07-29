import { useState } from 'react';
import './RandomColorSquare.css';

export default function RandomColorSquare() {

    const [color, setColor] = useState("red");

    function randomColor() {

        setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    }


    return <div className='square' onClick={randomColor} style={{ backgroundColor: color }} ></div>;

}
