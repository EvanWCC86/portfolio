import React from 'react'

const SmallCircle = () => {

    const amountCircles = new Array(3);
    console.log(amountCircles)
    return (
        <div className="circles">
            {amountCircles.map((circle, index) => (
                <span key={index}>{circle}</span>
            ))}
        </div>
    )
}

export default SmallCircle
