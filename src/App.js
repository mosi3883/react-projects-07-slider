import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import people from './data';
const lastIndex = people.length - 1;
function App() {
  // const [people, setPeople] = useState(data);
  const [sliderIndex, setSliderIndex] = useState(0);

  const prevSlide = () => {
    setSliderIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        newIndex = lastIndex;
      }
      return newIndex;
    });
  };
  const nextSlide = () => {
    setSliderIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex > lastIndex) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
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
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
