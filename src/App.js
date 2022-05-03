import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import people from './data';
import SlideContent from './SlideContent';
const lastIndex = people.length - 1;
function App() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const prevSlide = () => {
    setSliderIndex((prevIndex) => (prevIndex - 1 < 0 ? lastIndex : prevIndex - 1));
  };
  const nextSlide = () => {
    setSliderIndex((prevIndex) => (prevIndex + 1 > lastIndex ? 0 : prevIndex + 1));
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
          return <SlideContent key={person.id} classes={classes} {...person} />;
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
