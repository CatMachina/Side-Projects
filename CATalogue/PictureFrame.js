import React, { Component } from 'react';

const defaultImage = "https://i.pinimg.com/originals/a1/94/b2/a194b22931d1af33936c6a549d0d436f.jpg";

function PictureFrame(props)
{

    let url;
    let styles;
    const size = 350;
    if(props.image !== undefined && Object.keys(props.image).length !== 0)
    {
        url = props.image.url;
        const ratio = props.image.width > props.image.height ? props.image.width / size : props.image.height / size;
        const height = props.image.height / ratio;
        const width = props.image.width / ratio;
        styles = (width > height && height + 20 >= width) || (height > width && width + 20 >= height) ?
                {
                    height: size,
                    width: size
                }
                :
                {
                    height: props.image.height / ratio,
                    width: props.image.width / ratio,
                    paddingTop: Math.max((size - props.image.height * size / props.image.width) * 0.5, 0),
                    paddingBottom: Math.max((size - props.image.height * size / props.image.width) * 0.5, 0),
                    paddingLeft: Math.max((size - props.image.width * size / props.image.height) * 0.5, 0),
                    paddingRight: Math.max((size - props.image.width * size / props.image.height) * 0.5, 0)
                }
    }
    else
    {
        url = defaultImage;
        styles = {height: size}
    }
    return (
        <div className="frame">
            <input
                className="portrait"
                type="image"
                src={url}
                style={styles}
                onClick={() => props.handleChange(props.name)}
            />
            <h1>{props.name}</h1>
        </div>
    )
}

export default PictureFrame;
