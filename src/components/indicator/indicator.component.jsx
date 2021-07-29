
import React from 'react'
import './indicator.styles.css';

const Indicator = ({currentSlide, amountSlides}) => {
    return(
        <div className="indicator-wrapper">
            {
                Array(amountSlides).fill(1).map((_, i) => (
                    <div className="dot" key={i} style={{background : currentSlide === i? 'black': 'white'}}> </div>
                ))
            }

            
        </div>
    )
}

export default Indicator;