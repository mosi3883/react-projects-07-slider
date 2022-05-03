import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [sliderIndex, setSliderIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (sliderIndex > lastIndex) {
      setSliderIndex(0);
    }
    if (sliderIndex < 0) {
      setSliderIndex(lastIndex);
    }
  }, [sliderIndex, people.length]);
  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [sliderIndex]);
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, index) => {
          const { id, image, name, title, quote } = person;
          // more stuff
          let classes = 'nextSlide';
          if (index === sliderIndex) {
            classes = 'activeSlide';
          }
          if (
            sliderIndex - 1 === index ||
            (sliderIndex === 0 && index === people.length - 1)
          ) {
            classes = 'lastSlide';
          }
          return (
            <article key={id} className={classes}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev' onClick={() => setSliderIndex((prevIndex) => prevIndex - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setSliderIndex((prevIndex) => prevIndex + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
