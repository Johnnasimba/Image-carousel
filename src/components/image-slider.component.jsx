import React from 'react'


import './image-slider.styles,.css';


const ImageSlider = ({images = [], ...props}) => {
    console.log(images);
    return (
        <div>'
            <div className="wrapper" { ...props}>
                {
                    images.map((imageUrl, index) => (
                        
                        <div className="slide" key={index} style={{backgroundImage: `url(${imageUrl})`}}>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default ImageSlider;