import React, { useState } from 'react';
import PictureFrame from './PictureFrame';
import CatInfo from './CatInfo';

const APIKey = "78653018-ab81-4bfc-aaa4-af5349828c24";
const url = "https://api.thecatapi.com/v1/breeds";

//Send Request with authenticated API request
const req = new Request(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": APIKey },
        mode: 'cors' });

function Menu()
{
    const [list, setList] = useState([]);
    const [lookup, setLookup] = useState("");
    fetch(req)
        .then(response => response.json())
        .then(data => setList(data));

    if(lookup === "")
    {
        return (
            <div className="menu">
                {list.map(item => <PictureFrame
                                    key={item.name}
                                    name={item.name}
                                    image={item.image}
                                    handleChange={setLookup}
                                    />)
                }
            </div>
        )
    }
    else
    {
        let i;
        for(i = 0; i < list.length; i++)
        {
            if(list[i].name === lookup)
                break;
        }
        return (
            <div>
                <CatInfo handleChange={setLookup} data={list[i]}/>
            </div>
        )
    }
}

export default Menu;
