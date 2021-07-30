import React, { useState, useEffect } from 'react';


import './image-slider.styles,.css';
import Indicator from './indicator/indicator.component';


const ImageSlider = ({
    images = [], 
    autoPlay = true,
    autoPlayTime = 3000,
    children,
    ...props
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // 
    const nextSlide = (slideIndex = currentSlide + 1) => {
        const newSlideIndex = slideIndex >= images.length? 0 : slideIndex;
        setCurrentSlide(newSlideIndex)
    }

    useEffect(() => {
        // Move to next slide after autoPlayTime has passed
        const timer = setTimeout(()=>{
           nextSlide()
        }, autoPlayTime)

        return () => clearTimeout(timer)

    })
 

    return (
            <div className="wrapper" { ...props}>
                {
                    images.map((imageUrl, index) => (
                        
                        <div className="slide"
                            key={index}
                            style={{
                            backgroundImage: `url(${imageUrl})`,
                            marginLeft: index === 0 ? `-${currentSlide * 100}%`: undefined
                                
                     }}> </div>
                        
                ))}
       
            <div className="gradient">
                <Indicator currentSlide={currentSlide} amountSlides = {images.length} nextSlide={nextSlide} />
                <div className="children-wrapper">
                    {children}
                </div>
            </div>
          
     </div> 
    )
}

export default ImageSlider;