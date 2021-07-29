import React, { useState, useEffect } from 'react';


import './image-slider.styles,.css';


const ImageSlider = ({
    images = [], 
    autoPlay = true,
    autoPlayTime = 3000,
    children,
    ...props
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(()=>{
            const newSlideIndex = currentSlide >= images.length -1? 0 : currentSlide + 1;
            setCurrentSlide(newSlideIndex)
        }, autoPlayTime)

        return () => clearTimeout(timer)

    }, [currentSlide])


    return (
        <div>'
            <div className="wrapper" { ...props}>
                    {
                        images.map((imageUrl, index) => (
                            
                            <div className="slide"
                             key={index}
                              style={{
                                  backgroundImage: `url(${imageUrl})`,
                                  marginLeft: index === 0 ? `-${currentSlide * 100}%`: undefined
                                  
                                  }}>
                                <div className="children-wrapper">
                                    {children}
                                </div>
                            </div> 
                        ) )
                    }
            </div>
        </div>
    )
}

export default ImageSlider;