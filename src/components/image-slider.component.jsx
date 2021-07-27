import React from 'react'


import './image-slider.styles,.css';


const ImageSlider = ({images = [], ...props}) => {
    console.log(images);
    return (
        <div>'
            <div className="wrapper" { ...props}>
                {
                    images.map((image, index) => (
                        
                        <div className="slide" key={index}>

                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default ImageSlider;