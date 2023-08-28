import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";

const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const divStyled  = {
  width: "1200px",
  gap: "30px",
  display: "flex",
};
const imgStyle = {
  width : "300px",
  height : "500px",
};




// https://picsum.photos/v2/list
// https://picsum.photos/v2/list?page=2&limit=100
const Photos = () => {
  // useEffect(callback, [dependencies])
  // useEffect(function callback() {
  //   // side-effects
  // }, []);
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);

const handleLoad = async () =>{
  console.log("loadmoad");
 const images = await getRandomPhotos(nextPage);
 const newPhotos = [  ...randomPhotos, ...images ];

 setRandomPhotos(newPhotos );
 setNextPage(nextPage +1);  
}
  // console.log("outside");
  // insta
  // Ben Awad

  useEffect(() => {
   handleLoad();
    // side-effects.
    // document.title = "Welcome to useEffect";
    // consol.log("inside");
  }, []);
  return (
    <divWraper>

      <div style={divStyled} > {randomPhotos.length > 0 &&
       randomPhotos.map((item,index) =>(
        <div key ={item.download_url}>
          <img style={imgStyle} src ={item.download_url} alt={item.author}></img>
        </div>
      ))}
      </div>
      <button onClick={handleLoad}>Load mon</button>
    </divWraper>
  );
};

export default Photos;
