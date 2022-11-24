import React from "react";
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



function Photos() {
    const [photos, setPhotos] = useState([]);
   
  const {photosId} = useParams()
    console.log(photosId);

    async function getPhotos() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${photosId}/photos`)
        const dataJson = await res.json()
        setPhotos(dataJson)
       
        console.log("fet");
    }
    useEffect(() => {
        getPhotos()
        return () => { }
    }, [photosId]);

    console.log(photos);
    
    return (
        <div>
            <h1> </h1>
             <Carousel>
             
            {photos.map(img=><img src={img.thumbnailUrl} style={{width:"30%"}}/>)}
           </Carousel>
        </div>
    );
}

export default Photos;