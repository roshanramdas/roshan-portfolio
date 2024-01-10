"use client";
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface SwipeableCardProps {
  data: string[];
}

const SwipeableCard: React.FC<SwipeableCardProps> = ({ data }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 2, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {data.map((item, index) => (
        <div key={index} className="keen-slider__slide">
          <img
            src={item}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto max-h-300 object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default SwipeableCard;
