import React, { useState } from 'react'
import Rabbit1 from './Rabbit1.jpg';

const imageManipulation = () => {
    const [rabbitHeight, setrabbitHeight] = useState(200)
    return (
        <div>
            ImageManipulation
            <div>
                <img style={{ border: '2px solid black', height: '500px', width: '400px', padding: '100px' }} src="{Rabbit1}" alt="" height={rabbitHeight} width={200} />
            </div>
            <div>
                <button onClick={() => setrabbitHeight(rabbitHeight + 20)}></button>
            </div>
        </div>
    )
}

export default imageManipulation