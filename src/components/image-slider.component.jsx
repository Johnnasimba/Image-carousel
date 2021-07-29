import React, { useState, useEffect } from 'react';


import './image-slider.styles,.css';


const ImageSlider = ({
    images = [], 
    autoPlay = true,
    autoPlayTime = 3000,
    ...props
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(()=>{
            setCurrentSlide(currentSlide + 1)
        }, autoPlayTime)
        return () => clearTimeout(timer)

    }, [currentSlide, autoPlayTime])


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
                            </div> 
                        ) )
                    }
            </div>
        </div>
    )
}

export default ImageSlider;