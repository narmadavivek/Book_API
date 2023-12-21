import React from 'react';
import '../styles/cards.css';
import list from '../data';
const Cards = ({item, handleClick}) => {
    const {title,description , price, images} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={images} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{description}</p>
            <p>Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards