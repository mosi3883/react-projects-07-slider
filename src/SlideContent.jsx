import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
const SlideContent = ({ id, image, name, title, quote, classes }) => {
  return (
    <article className={classes}>
      <img src={image} alt={name} className='person-img' />
      <h4>{name}</h4>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='icon' />
    </article>
  );
};

export default SlideContent;
