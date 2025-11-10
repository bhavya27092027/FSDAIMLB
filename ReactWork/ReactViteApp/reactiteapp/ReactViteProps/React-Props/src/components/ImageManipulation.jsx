import React, { useState } from 'react';
import Rabbit from './Rabbit.png';

const ImageManipulation = () => {
    const [rabbitHeight, setRabbitHeight] = useState(200);
    const [rabbitWidth, setRabbitWidth] = useState(200);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    function increaseRabbitWidth() {
        setRabbitWidth(rabbitWidth + 20);
    }

    function changeColor() {
        setRed(Math.random() * 255);
        setGreen(Math.random() * 255);
        setBlue(Math.random() * 255);
    }

    return (
        <div>
            <h1>Image Manipulation</h1>
            <div>
                <img
                    style={{
                        border: '2px solid black',
                        height: `${rabbitHeight}px`,
                        width: `${rabbitWidth}px`,
                        padding: '20px',
                        backgroundColor: `rgb(${red}, ${green}, ${blue})`
                    }}
                    src={Rabbit}
                    alt="Rabbit"
                />
            </div>
            <div>
                <br />
                <button onClick={() => setRabbitHeight(rabbitHeight + 20)}>
                    Increase Height
                </button>
                <br /><br />
                <button onClick={increaseRabbitWidth}>
                    Increase Width
                </button>
                <br /><br />
                <button onClick={changeColor}>
                    Change Background Color
                </button>
            </div>
        </div>
    );
};

export default ImageManipulation;