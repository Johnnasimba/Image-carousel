
import React from 'react'
import './indicator.styles.css';

const Indicator = ({currentSlide, amountSlides, nextSlide}) => {
    return(
        <div className="indicator-wrapper">
            {
                Array(amountSlides).fill(1).map((_, i) => (
                    <div className="dot" 
                    key={i} 
                    style={{background : currentSlide === i? 'black': 'white'}}
                    onClick={() => nextSlide(i)}
                    > </div>
                ))
            }

            
        </div>
    )
}

export default Indicator;