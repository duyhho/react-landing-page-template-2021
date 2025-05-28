import React, { useEffect } from 'react';

import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import config from '../config/index.json';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

const EmblaCarousel: React.FC<{ options?: EmblaOptionsType }> = ({
  options,
}) => {
  const { reviews } = config;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.yelp.com/embed/widgets.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {reviews.map((review, index) => (
            <div className="embla__slide" key={index}>
              <div className="flex justify-center p-4">
                <span
                  className="yelp-review"
                  data-review-id={review.id}
                  data-hostname="www.yelp.com"
                >
                  Read{' '}
                  <a href={review.userUrl} rel="nofollow noopener">
                    {review.user}
                  </a>
                  's{' '}
                  <a href={review.reviewUrl} rel="nofollow noopener">
                    review
                  </a>{' '}
                  on{' '}
                  <a href="https://www.yelp.com" rel="nofollow noopener">
                    Yelp
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
