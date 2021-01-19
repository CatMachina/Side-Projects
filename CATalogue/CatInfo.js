import React from 'react';

const defaultImage = "https://i.pinimg.com/originals/a1/94/b2/a194b22931d1af33936c6a549d0d436f.jpg";

function YesOrNo(props)
{
    return (
        <div style={{ clear: "both" }}>
            <hr/>
            <h3 className="alignLeft">{props.data.category + ": "}</h3>
            <h3 className="alignRight">
                {props.data.value === undefined ? "N/A" : (props.data.value ? "Yes" : "No")}
            </h3>
        </div>
    )
}

function Score(props)
{
    return (
        <div style={{ clear: "both" }}>
            <hr/>
            <h3 className="alignLeft">{props.data.category +": "}</h3>
            <h3 className="alignRight">
                {props.data.value === undefined ? "N/A" : props.data.value +"/5"}
            </h3>
        </div>
    )
}

function CatInfo(props)
{
    let url;
    let styles;
    const size = 350;
    if(props.data.image !== undefined && Object.keys(props.data.image).length !== 0)
    {
        url = props.data.image.url;
        const ratio = props.data.image.width > props.data.image.height ? props.data.image.width / size : props.data.image.height / size;
        const height = props.data.image.height / ratio;
        const width = props.data.image.width / ratio;
        styles = (width > height && height + 20 >= width) || (height > width && width + 20 >= height) ?
                {
                    height: size,
                    width: size
                }
                :
                {
                    height: props.data.image.height / ratio,
                    width: props.data.image.width / ratio,
                    paddingTop: Math.max((size - props.data.image.height * size / props.data.image.width) * 0.5, 0),
                    paddingBottom: Math.max((size - props.data.image.height * size / props.data.image.width) * 0.5, 0),
                    paddingLeft: Math.max((size - props.data.image.width * size / props.data.image.height) * 0.5, 0),
                    paddingRight: Math.max((size - props.data.image.width * size / props.data.image.height) * 0.5, 0)
                }
    }
    else
    {
        url = defaultImage;
        styles = {height: size}
    }
    try{
    return (
        <div>
            <button onClick={() => props.handleChange("")}>Back</button>
            <div className="info">
                <img className="portrait" src={url} style={styles}/>
                <h1>
                    {props.data.name}
                    {props.data.alt_names !== "" ? "A.K.A " + props.data.alt_names : ""}
                </h1>
                <p>{props.data.description}</p>
            </div>
            <div>
                <h2>Personality: {props.data.temperament}</h2>
                <h3>Origin: {props.data.origin}</h3>
                <h3>Lifespan: {props.data.life_span} years</h3>
                <h3>Weight: {props.data.weight.metric} kg</h3>
                <YesOrNo data={{ category: "Indoor", value: props.data.indoor }}/>
                <YesOrNo data={{ category: "Experimental Breed", value: props.data.experimental }}/>
                <YesOrNo data={{ category: "Hairless", value: props.data.hairless }}/>
                <YesOrNo data={{ category: "Natural Breed", value: props.data.natural }}/>
                <YesOrNo data={{ category: "Suppressed Tail", value: props.data.suppressed_tail }}/>
                <YesOrNo data={{ category: "Rare", value: props.data.rare }}/>
                <YesOrNo data={{ category: "Lap Cat", value: props.data.lap }}/>
                <YesOrNo data={{ category: "Hypoallergenic", value: props.data.hypoallergenic }}/>
                <Score data={{ category: "Affection Level", value: props.data.affection_level }}/>
                <Score data={{ category: "Adaptability", value: props.data.adaptability }}/>
                <Score data={{ category: "Child Friendly", value: props.data.child_friendly }}/>
                <Score data={{ category: "Dog Friendly", value: props.data.dog_friendly }}/>
                <Score data={{ category: "Energy Level", value: props.data.energy_level }}/>
                <Score data={{ category: "Grooming", value: props.data.grooming }}/>
                <Score data={{ category: "Health Issues", value: props.data.health_issues }}/>
                <Score data={{ category: "Intelligence", value: props.data.intelligence }}/>
                <Score data={{ category: "Shedding Level", value: props.data.shedding_level }}/>
                <Score data={{ category: "Social Needs", value: props.data.social_needs }}/>
                <Score data={{ category: "Stranger Friendly", value: props.data.stranger_friendly }}/>
                <Score data={{ category: "Vocalization", value: props.data.vocalisation }}/>
            </div>
        </div>
    )
    }
    catch(error)
    {
        console.log(error);
    }
}

export default CatInfo;
